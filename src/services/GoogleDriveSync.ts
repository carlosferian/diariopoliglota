let tokenClient: any = null;

// Inicializa a biblioteca GIS (Google Identity Services)
export function initTokenClient(clientId: string, onTokenReceived: (token: string) => void) {
  if (typeof window === 'undefined') return;
  
  // @ts-ignore
  if (!window.google) {
    console.error('Script do Google Accounts não carregado.');
    return;
  }

  try {
    // @ts-ignore
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'https://www.googleapis.com/auth/drive.file',
      callback: (response: any) => {
        if (response.error) {
          console.error('Erro de autenticação GIS:', response.error);
          return;
        }
        if (response.access_token) {
          onTokenReceived(response.access_token);
        }
      },
    });
  } catch (err) {
    console.error('Falha ao inicializar GIS token client:', err);
  }
}

// Abre a janela de consentimento do Google
export function requestGoogleToken() {
  if (tokenClient) {
    try {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (err) {
      console.error('Erro ao requisitar token do Google:', err);
    }
  } else {
    console.error('Token client não inicializado. Chame initTokenClient primeiro.');
  }
}

// Procura o arquivo de backup no Google Drive
export async function findBackupFile(token: string): Promise<string | null> {
  const url = `https://www.googleapis.com/drive/v3/files?q=name='diario-poliglota-backup.json' and trashed=false&fields=files(id)`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Erro ao buscar arquivo no Drive: ${errText}`);
  }
  const data = await res.json();
  if (data.files && data.files.length > 0) {
    return data.files[0].id;
  }
  return null;
}

// Faz o download do backup existente
export async function downloadBackupFile(token: string, fileId: string): Promise<any> {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Erro ao baixar arquivo do Drive: ${errText}`);
  }
  return await res.json();
}

// Envia ou atualiza o arquivo de backup no Google Drive
export async function uploadBackupFile(token: string, fileId: string | null, backupData: any): Promise<string> {
  const metadata = {
    name: 'diario-poliglota-backup.json',
    mimeType: 'application/json'
  };
  
  const boundary = 'foo_bar_baz';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;
  
  const multipartRequestBody =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    'Content-Type: application/json\r\n\r\n' +
    JSON.stringify(backupData, null, 2) +
    closeDelimiter;
    
  let url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
  let method = 'POST';
  
  if (fileId) {
    url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`;
    method = 'PATCH';
  }
  
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`
    },
    body: multipartRequestBody
  });
  
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Erro ao subir backup no Drive: ${errText}`);
  }
  
  const data = await res.json();
  return data.id;
}
