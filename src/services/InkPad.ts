export interface Point {
  x: number;
  y: number;
  p: number;
}

export interface Stroke {
  color: string;
  wFrac: number;
  erase: boolean;
  pts: Point[];
}

export interface InkPadTool {
  mode: 'pen' | 'eraser';
  color: string;
  width: 'fina' | 'grossa';
}

export interface InkPadOptions {
  onChange?: (strokes: Stroke[]) => void;
  onActive?: (active: boolean) => void;
  penOnly?: () => boolean;
}

const WIDTHS = { fina: 0.012, grossa: 0.026 };

export class InkPad {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private onChange: (strokes: Stroke[]) => void;
  private onActive: (active: boolean) => void;
  private penOnlyGetter: () => boolean;

  private strokes: Stroke[] = [];
  private redoStack: Stroke[] = [];
  private cur: Stroke | null = null;
  private tool: InkPadTool = { mode: 'pen', color: '#1b2030', width: 'grossa' };

  private cssW = 1;
  private cssH = 1;
  private _ro: ResizeObserver;

  // Point capture buffer — filled by event handlers, drained by rAF.
  // Separating capture from rendering lets the browser queue input without
  // being blocked by canvas GPU flushes.
  private _pending: Point[] = [];
  private _rafId: number | null = null;

  constructor(canvas: HTMLCanvasElement, opts: InkPadOptions = {}) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D context');
    this.ctx = context;

    this.onChange = opts.onChange || (() => {});
    this.onActive = opts.onActive || (() => {});
    this.penOnlyGetter = opts.penOnly || (() => false);

    this._resize();
    this._bind();
    this._ro = new ResizeObserver(() => this._resize());
    this._ro.observe(canvas);
  }

  setTool(t: Partial<InkPadTool>) {
    this.tool = Object.assign({}, this.tool, t);
  }

  isEmpty() { return this.strokes.length === 0; }
  getStrokes() { return this.strokes; }

  load(strokes: Stroke[]) {
    this.strokes = Array.isArray(strokes) ? strokes : [];
    this.redoStack = [];
    this.cur = null;
    this.redraw();
  }

  clear() {
    this.strokes = [];
    this.redoStack = [];
    this.cur = null;
    this.redraw();
    this.onChange(this.strokes);
  }

  undo() {
    if (this.cur) {
      this.cur = null;
    } else {
      const s = this.strokes.pop();
      if (s) this.redoStack.push(s);
    }
    this.redraw();
    this.onChange(this.strokes);
  }

  redo() {
    const s = this.redoStack.pop();
    if (s) {
      this.strokes.push(s);
      this.redraw();
      this.onChange(this.strokes);
    }
  }

  private _resize() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    this.cssW = Math.max(1, r.width);
    this.cssH = Math.max(1, r.height);
    this.canvas.width = Math.round(this.cssW * dpr);
    this.canvas.height = Math.round(this.cssH * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.redraw();
  }

  private _eraseStrokeAt(pt: Point) {
    const eraseRadius = 0.035;
    let changed = false;
    this.strokes = this.strokes.filter((s) => {
      const hit = s.pts.some((p) => {
        const dx = p.x - pt.x;
        const dy = p.y - pt.y;
        return Math.sqrt(dx * dx + dy * dy) < eraseRadius;
      });
      if (hit) changed = true;
      return !hit;
    });
    if (changed) {
      this.redraw();
      this.onChange(this.strokes);
    }
  }

  private _bind() {
    const c = this.canvas;
    c.style.touchAction = this.penOnlyGetter() ? 'pan-y' : 'none';

    const normPt = (ev: PointerEvent, r: DOMRect): Point => ({
      x: (ev.clientX - r.left) / r.width,
      y: (ev.clientY - r.top) / r.height,
      p: ev.pressure > 0 ? ev.pressure : 0.5,
    });

    c.addEventListener('pointerdown', (e: PointerEvent) => {
      if (this.penOnlyGetter() && e.pointerType === 'touch') return;
      e.preventDefault();
      c.setPointerCapture(e.pointerId);
      const r = c.getBoundingClientRect();
      const pt = normPt(e, r);
      if (this.tool.mode === 'eraser') {
        this.cur = { color: '', wFrac: 0, erase: true, pts: [pt] };
        this.onActive(true);
        this._eraseStrokeAt(pt);
      } else {
        this.cur = {
          color: this.tool.color,
          wFrac: WIDTHS[this.tool.width],
          erase: false,
          pts: [pt],
        };
        this.redoStack = [];
        this.onActive(true);
        this._drawDab(this.cur, 0);
      }
    });

    c.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this.cur) return;
      if (this.penOnlyGetter() && e.pointerType === 'touch') return;

      const r = c.getBoundingClientRect();

      if (this.cur.erase) {
        this._eraseStrokeAt(normPt(e, r));
        return;
      }

      // Push all coalesced points into the buffer — no canvas work here.
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const ev of evs) {
        this._pending.push(normPt(ev, r));
      }

      // Schedule a single rAF flush if not already scheduled.
      if (this._rafId === null) {
        this._rafId = requestAnimationFrame(() => {
          this._rafId = null;
          this._flush();
        });
      }
    });

    const end = (e: PointerEvent) => {
      if (!this.cur) return;
      c.releasePointerCapture(e.pointerId);

      // Flush any buffered points synchronously before finalising the stroke.
      if (this._rafId !== null) {
        cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
      this._flush();

      if (!this.cur.erase) {
        if (this.cur.pts.length === 1) {
          this.cur.pts.push({ ...this.cur.pts[0] });
        }
        this.strokes.push(this.cur);
      }
      this.cur = null;
      this.onActive(false);
      this.onChange(this.strokes);
    };

    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', end);
    c.addEventListener('pointerleave', (e: PointerEvent) => {
      if (this.cur && e.buttons === 0) end(e);
    });
  }

  // Drain the point buffer and draw all new segments in one batch.
  // Called from rAF (during drawing) or synchronously on pointerup.
  private _flush() {
    if (!this.cur || this.cur.erase || this._pending.length === 0) {
      this._pending = [];
      return;
    }

    const startIdx = this.cur.pts.length;
    for (const pt of this._pending) this.cur.pts.push(pt);
    this._pending = [];

    const ctx = this.ctx;
    const s = this.cur;

    // Set canvas style ONCE for the whole batch (not per segment).
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = s.color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = Math.max(1, startIdx); i < s.pts.length; i++) {
      this._seg(s, i, ctx);
    }
  }

  private _w(s: Stroke, p: number) {
    return s.wFrac * this.cssH * (0.45 + 1.0 * p);
  }

  private _drawDab(s: Stroke, i: number) {
    const ctx = this.ctx;
    const pt = s.pts[i];
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = s.color;
    ctx.beginPath();
    ctx.arc(pt.x * this.cssW, pt.y * this.cssH, this._w(s, pt.p) / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw a single segment. ctx style must be set by the caller.
  private _seg(s: Stroke, i: number, ctx: CanvasRenderingContext2D) {
    const pts = s.pts;
    const a = pts[i - 1];
    const b = pts[i];
    ctx.lineWidth = this._w(s, (a.p + b.p) / 2);
    ctx.beginPath();
    if (i === 1) {
      ctx.moveTo(a.x * this.cssW, a.y * this.cssH);
      ctx.lineTo(b.x * this.cssW, b.y * this.cssH);
    } else {
      const pmx = (pts[i - 2].x + a.x) / 2 * this.cssW;
      const pmy = (pts[i - 2].y + a.y) / 2 * this.cssH;
      const cmx = (a.x + b.x) / 2 * this.cssW;
      const cmy = (a.y + b.y) / 2 * this.cssH;
      ctx.moveTo(pmx, pmy);
      ctx.quadraticCurveTo(a.x * this.cssW, a.y * this.cssH, cmx, cmy);
    }
    ctx.stroke();
  }

  redraw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.restore();

    const all = this.cur && !this.cur.erase
      ? this.strokes.concat([this.cur])
      : this.strokes;

    for (const s of all) {
      if (s.pts.length === 1) { this._drawDab(s, 0); continue; }
      // Set style once per stroke, not per segment.
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = s.color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let i = 1; i < s.pts.length; i++) this._seg(s, i, ctx);
    }
  }

  destroy() {
    if (this._rafId !== null) cancelAnimationFrame(this._rafId);
    this._ro.disconnect();
  }
}
