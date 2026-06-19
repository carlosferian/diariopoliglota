export interface GradedSuggestions {
  EN: string[];
  IT: string[];
  DE: string[];
  JP: string[];
}

export const SUGGESTIONS: { [weekIndex: number]: GradedSuggestions } = {
  // --- MÓDULO 1: ROTINA ---
  0: {
    EN: [
      "I wake up early.",
      "I wake up at half past six.",
      "Most mornings, I wake up before my alarm even goes off.",
      "I wake up, make myself a coffee, and sit by the window for a few minutes.",
      "Even though I'm really not a morning person, I always end up feeling so much better once I'm up."
    ],
    IT: [
      "Mi sveglio presto.",
      "Mi sveglio alle sei e mezza.",
      "Di solito mi sveglio prima che suoni la sveglia.",
      "Mi sveglio, mi faccio un caffè e mi siedo vicino alla finestra.",
      "Non sono proprio un tipo mattutino, eppure una volta alzato mi sento sempre molto meglio."
    ],
    DE: [
      "Ich stehe früh auf.",
      "Ich stehe um halb sieben auf.",
      "Meistens stehe ich auf, bevor der Wecker klingelt.",
      "Ich stehe auf, mache mir einen Kaffee und setze mich ans Fenster.",
      "Obwohl ich ja kein Morgenmensch bin, geht es mir nach dem Aufstehen eigentlich immer besser."
    ],
    JP: [
      "早く起きます。(Hayaku okimasu.)",
      "６時半に起きます。(Rokuji han ni okimasu.)",
      "たいてい目覚ましが鳴る前に起きます。(Taitei mezamashi ga naru mae ni okimasu.)",
      "起きて、コーヒーを淹れて、窓の外をしばらく眺めます。(Okite, kōhī o irete, mado no soto o shibaraku nagamemasu.)",
      "朝が苦手なんですが、起き上がると不思議と気分がよくなってしまいます。(Asa ga nigate na n desu ga, okiagaru to fushigi to kibun ga yoku natte shimaimasu.)"
    ]
  },
  1: {
    EN: [
      "I take the train to work.",
      "I take the train to work at eight in the morning.",
      "Most days, I catch the early train before the rush hour crowd arrives.",
      "I leave the house, walk to the station, and read a bit on the platform while I wait.",
      "Even though the commute's pretty long, I've started using that time to listen to podcasts and it doesn't feel so bad anymore."
    ],
    IT: [
      "Prendo il treno per andare al lavoro.",
      "Prendo il treno per andare al lavoro alle otto.",
      "Di solito prendo il primo treno, prima che i vagoni si riempiano.",
      "Esco di casa, cammino fino alla stazione e aspetto il treno leggendo qualcosa sul binario.",
      "Il tragitto è abbastanza lungo, eppure una volta messa la musica nelle orecchie il tempo vola."
    ],
    DE: [
      "Ich fahre mit der U-Bahn zur Arbeit.",
      "Ich fahre um acht Uhr mit der U-Bahn zur Arbeit.",
      "Meistens fahre ich früh los, bevor die Stoßzeit beginnt.",
      "Ich gehe aus dem Haus, laufe zur Haltestelle und lese kurz, während ich warte.",
      "Obwohl die Fahrt ja ziemlich lang ist, höre ich eigentlich immer Podcasts und die Zeit vergeht viel schneller."
    ],
    JP: [
      "電車で会社に行きます。(Densha de kaisha ni ikimasu.)",
      "朝８時の電車で会社に行きます。(Asa hachiji no densha de kaisha ni ikimasu.)",
      "たいてい混む前の早い時間の電車に乗ります。(Taitei komu mae no hayai jikan no densha ni norimasu.)",
      "家を出て、駅まで歩いて、ホームでしばらく本を読んで待ちます。(Ie o dete, eki made aruite, hōmu de shibaraku hon o yonde machimasu.)",
      "通勤時間が長いんですが、ポッドキャストを聞き始めてから苦にならなくなってしまいました。(Tsūkin jikan ga nagai n desu ga, poddokyasuto o kikihajimete kara ku ni naranaku natte shimaimashita.)"
    ]
  },
  2: {
    EN: [
      "I read before bed.",
      "I read for half an hour before bed.",
      "Usually, I turn off all my screens at least an hour before going to sleep.",
      "I make some tea, dim the lights, and spend a quiet hour reading before I fall asleep.",
      "Even though I'm often tempted to scroll through my phone, I've been trying to put it down early and I'm sleeping so much better."
    ],
    IT: [
      "Leggo prima di dormire.",
      "Leggo per mezz'ora prima di addormentarmi.",
      "Di solito spengo tutti gli schermi almeno un'ora prima di dormire.",
      "Mi preparo una tisana, abbasso le luci e leggo in silenzio finché non ho sonno.",
      "Ho ancora voglia di controllare il telefono, eppure una volta posato sul comodino mi addormento molto prima."
    ],
    DE: [
      "Ich lese vor dem Schlafen.",
      "Ich lese eine halbe Stunde vor dem Einschlafen.",
      "Meistens schalte ich alle Bildschirme mindestens eine Stunde vor dem Schlafen aus.",
      "Ich koche mir einen Tee, dimme das Licht und lese ruhig, bis mir die Augen zufallen.",
      "Obwohl ich ja oft versucht bin, noch auf dem Handy zu scrollen, lege ich es eigentlich immer früher weg und schlafe viel besser."
    ],
    JP: [
      "寝る前に本を読みます。(Neru mae ni hon o yomimasu.)",
      "寝る前に３０分本を読みます。(Neru mae ni sanjuppun hon o yomimasu.)",
      "たいてい寝る一時間前には画面を全部消します。(Taitei neru ichijikan mae ni wa gamen o zenbu keshimasu.)",
      "お茶を入れて、電気を少し暗くして、眠くなるまで静かに読書します。(Ocha o irete, denki o sukoshi kuraku shite, nemuku naru made shizuka ni dokusho shimasu.)",
      "スマホをつい見てしまうんですが、早めに置くようにしたらぐっすり眠れるようになりました。(Sumaho o tsui mite shimau n desu ga, hayame ni oku yō ni shitara gussuri nemureru yō ni narimashita.)"
    ]
  },
  3: {
    EN: [
      "I sleep in on Saturdays.",
      "I sleep in until nine or ten on Saturdays.",
      "Most Saturdays, I spend the whole morning doing whatever I feel like.",
      "I wake up late, make a big breakfast, and head out for a walk around the neighbourhood.",
      "Even though I always tell myself I'll be productive, I end up just hanging out at home and honestly I don't mind at all."
    ],
    IT: [
      "Il sabato dormo fino a tardi.",
      "Il sabato dormo fino alle nove o alle dieci.",
      "Di solito il sabato mattina la passo tutta come mi pare e piace.",
      "Mi sveglio tardi, preparo una colazione abbondante e faccio una passeggiata nel quartiere.",
      "Mi riprometto sempre di fare cose utili, eppure una volta sul divano mi godo la pigrizia e non mi pento per niente."
    ],
    DE: [
      "Am Samstag schlafe ich aus.",
      "Am Samstag schlafe ich bis neun oder zehn Uhr.",
      "Meistens verbringe ich den ganzen Samstagmorgen damit, einfach das zu tun, worauf ich Lust habe.",
      "Ich stehe spät auf, mache ein großes Frühstück und gehe durch die Nachbarschaft spazieren.",
      "Obwohl ich mir ja immer vornehme, produktiv zu sein, ende ich eigentlich immer auf dem Sofa — und bereue es kein bisschen."
    ],
    JP: [
      "土曜日は遅くまで寝ます。(Doyōbi wa osoku made nemasu.)",
      "土曜日は９時か１０時まで寝ます。(Doyōbi wa kuji ka jūji made nemasu.)",
      "たいてい土曜日の午前中はやりたいことをして過ごします。(Taitei doyōbi no gozenchū wa yaritai koto o shite sugoshimasu.)",
      "ゆっくり起きて、たっぷり朝ご飯を作って、近所をのんびり散歩します。(Yukkuri okite, tappuri asagohan o tsukutte, kinjo o nonbiri sanpo shimasu.)",
      "生産的なことをしようと思うんですが、結局ゴロゴロして一日が終わってしまいます。(Seisanteki na koto o shiyō to omou n desu ga, kekkyoku gorogoro shite ichinichi ga owatte shimaimasu.)"
    ]
  },

  // --- MÓDULO 2: GOSTOS ---
  4: {
    EN: [
      "I love pasta.",
      "I love eating fresh homemade pasta.",
      "I really love a big bowl of pasta with a rich tomato sauce.",
      "I prefer pasta to rice on any given day.",
      "There's nothing like a plate of handmade tagliatelle after a long week."
    ],
    IT: [
      "Adoro la pasta.",
      "Adoro mangiare la pasta fresca fatta in casa.",
      "Mi piace moltissimo un bel piatto di pasta al pomodoro ricco di sapore.",
      "Preferisco la pasta al riso in qualsiasi momento della giornata.",
      "Non c'è niente di meglio di un piatto di tagliatelle fatte a mano dopo una lunga settimana."
    ],
    DE: [
      "Ich liebe Pasta.",
      "Ich liebe es, frische selbstgemachte Pasta zu essen.",
      "Ich liebe es sehr, eine große Schüssel Pasta mit reichhaltiger Tomatensauce zu genießen.",
      "Ich mag Pasta lieber als Reis, egal zu welcher Tageszeit.",
      "Nichts geht über einen Teller handgemachter Tagliatelle nach einer langen Woche."
    ],
    JP: [
      "パスタが好きです。(Pasuta ga suki desu.)",
      "手作りの生パスタを食べるのが好きです。(Tezukuri no nama pasuta o taberu no ga suki desu.)",
      "濃厚なトマトソースのパスタが大好きです。(Nōkō na tomato sōsu no pasuta ga daisuki desu.)",
      "ご飯よりパスタの方が好きです。(Gohan yori pasuta no hō ga suki desu.)",
      "長い一週間の後に食べる手打ちタリアテッレほど好きなものはない。(Nagai isshūkan no ato ni taberu teuchi tariatere hodo suki na mono wa nai.)"
    ]
  },
  5: {
    EN: [
      "I love photography.",
      "I love going out to take photos on weekends.",
      "I really love capturing candid moments of people on the street.",
      "I prefer film photography to digital because the colours feel warmer.",
      "Nothing beats the feeling of developing a roll of film and seeing the shots for the first time."
    ],
    IT: [
      "Adoro la fotografia.",
      "Adoro uscire a fare foto nel fine settimana.",
      "Mi piace moltissimo catturare momenti spontanei delle persone per strada.",
      "Preferisco la fotografia analogica a quella digitale perché i colori sembrano più caldi.",
      "Non c'è niente di meglio della sensazione di sviluppare un rullino e vedere le foto per la prima volta."
    ],
    DE: [
      "Ich liebe Fotografie.",
      "Ich liebe es, am Wochenende rauszugehen und Fotos zu machen.",
      "Ich liebe es sehr, spontane Momente von Menschen auf der Straße einzufangen.",
      "Ich mag Analogfotografie lieber als digitale Fotografie, weil die Farben wärmer wirken.",
      "Nichts geht über das Gefühl, einen Film zu entwickeln und die Aufnahmen zum ersten Mal zu sehen."
    ],
    JP: [
      "写真が好きです。(Shashin ga suki desu.)",
      "週末に写真を撮りに出かけるのが好きです。(Shūmatsu ni shashin o tori ni dekakeru no ga suki desu.)",
      "街中で人々のありのままの瞬間を撮るのが大好きです。(Machinaka de hitobito no ari no mama no shunkan o toru no ga daisuki desu.)",
      "色の温かさがデジタルより好きなので、フィルム写真の方が好きです。(Iro no atatakasa ga dejitaru yori suki na node, firumu shashin no hō ga suki desu.)",
      "フィルムを現像して初めて写真を見る瞬間ほど好きなものはない。(Firumu o genzō shite hajimete shashin o miru shunkan hodo suki na mono wa nai.)"
    ]
  },
  6: {
    EN: [
      "I love jazz.",
      "I love listening to jazz while I cook dinner.",
      "I really love how jazz musicians improvise and respond to each other in real time.",
      "I prefer jazz to pop because the melodies are more unpredictable.",
      "There's nothing like a live jazz club on a rainy Friday night."
    ],
    IT: [
      "Adoro il jazz.",
      "Adoro ascoltare jazz mentre cucino la cena.",
      "Mi piace moltissimo come i musicisti jazz improvvisano e si rispondono in tempo reale.",
      "Preferisco il jazz alla musica pop perché le melodie sono più imprevedibili.",
      "Non c'è niente di meglio di un locale jazz dal vivo in una serata piovosa di venerdì."
    ],
    DE: [
      "Ich liebe Jazz.",
      "Ich liebe es, beim Kochen Jazz zu hören.",
      "Ich liebe es sehr, wie Jazzmusiker improvisieren und in Echtzeit aufeinander reagieren.",
      "Ich mag Jazz lieber als Pop, weil die Melodien unberechenbarer sind.",
      "Nichts geht über einen Live-Jazzclub an einem verregneten Freitagabend."
    ],
    JP: [
      "ジャズが好きです。(Jazu ga suki desu.)",
      "夕食を作りながらジャズを聴くのが好きです。(Yūshoku o tsukuri nagara jazu o kiku no ga suki desu.)",
      "ジャズミュージシャンがリアルタイムで即興演奏し合う場面が大好きです。(Jazu myūjishan ga riaru taimu de sokkyō ensō shi au bamen ga daisuki desu.)",
      "メロディーが予測しにくいので、ポップスよりジャズの方が好きです。(Merodī ga yosoku shinikui node, poppusu yori jazu no hō ga suki desu.)",
      "雨の金曜の夜に生のジャズクラブで聴くジャズほど好きなものはない。(Ame no kin'yō no yoru ni nama no jazu kurabu de kiku jazu hodo suki na mono wa nai.)"
    ]
  },
  7: {
    EN: [
      "I don't like loud noise.",
      "I don't like being stuck in traffic for hours.",
      "I really can't stand the sound of construction work early in the morning.",
      "I dislike sitting in traffic more than waiting in any kind of queue.",
      "Nothing kills the mood like a car alarm going off at two in the morning."
    ],
    IT: [
      "Non mi piace il rumore forte.",
      "Non mi piace restare bloccato nel traffico per ore.",
      "Non sopporto per niente il rumore dei cantieri presto al mattino.",
      "Preferisco aspettare in qualsiasi fila piuttosto che stare nel traffico.",
      "Non c'è niente di peggio di un allarme auto che scatta alle due di notte."
    ],
    DE: [
      "Ich mag lauten Lärm nicht.",
      "Ich mag es nicht, stundenlang im Stau zu stehen.",
      "Ich kann den Baulärm früh am Morgen überhaupt nicht ausstehen.",
      "Ich stehe lieber in einer Schlange als im Stau.",
      "Nichts nervt mich mehr als ein Autoalarm, der um zwei Uhr nachts losgeht."
    ],
    JP: [
      "騒音が嫌いです。(Sōon ga kirai desu.)",
      "何時間も渋滞にはまるのが嫌いです。(Nanjikan mo jūtai ni hamaru no ga kirai desu.)",
      "朝早くから始まる工事の音が大嫌いです。(Asa hayaku kara hajimaru kōji no oto ga daikirai desu.)",
      "渋滞にはまっている方が嫌いです。(Jūtai ni hamatte iru hō ga kirai desu.)",
      "夜中の二時に鳴り出す車のアラームほど嫌いなものはない。(Yonaka no niji ni nari dasu kuruma no arāmu hodo kirai na mono wa nai.)"
    ]
  },

  // --- MÓDULO 3: FUTURO ---
  8: {
    EN: [
      "I'm going to cook tonight.",
      "I'm going to cook a proper risotto for dinner tonight.",
      "I'm going to the market this afternoon in order to buy fresh ingredients.",
      "I'm going to try that new carbonara recipe if I have time after work.",
      "Even if it's hard to find the right cheese, I'm determined to get this dish right tonight."
    ],
    IT: [
      "Ho intenzione di cucinare stasera.",
      "Ho intenzione di preparare un risotto per cena stasera.",
      "Ho intenzione di andare al mercato nel pomeriggio per comprare gli ingredienti freschi.",
      "Ho intenzione di provare la ricetta della carbonara se ho tempo dopo il lavoro.",
      "Anche se sarà difficile trovare il formaggio giusto, ho intenzione di riuscirci stasera."
    ],
    DE: [
      "Heute Abend werde ich kochen.",
      "Heute Abend werde ich ein richtiges Risotto zum Abendessen kochen.",
      "Ich werde am Nachmittag auf den Markt gehen, um frische Zutaten zu kaufen.",
      "Ich werde das neue Carbonara-Rezept ausprobieren, wenn ich nach der Arbeit Zeit habe.",
      "Auch wenn es schwer wird, den richtigen Käse zu finden, werde ich das Gericht heute Abend doch hinbekommen."
    ],
    JP: [
      "今夜、料理をするつもりです。(Konya, ryōri o suru tsumori desu.)",
      "今夜の夕食に、ちゃんとしたリゾットを作るつもりです。(Konya no yūshoku ni, chanto shita rizotto o tsukuru tsumori desu.)",
      "新鮮な食材を買うために、今日の午後に市場へ行くつもりです。(Shinsen na shokuzai o kau tame ni, kyō no gogo ni ichiba e iku tsumori desu.)",
      "仕事の後で時間があったら、カルボナーラの新しいレシピに挑戦するつもりです。(Shigoto no ato de jikan ga attara, karubonaara no atarashii reshipi ni chōsen suru tsumori desu.)",
      "正しいチーズが見つからなくても、今夜きっとこの料理を完成させてみせます。(Tadashii chīzu ga mitsukaranakute mo, konya kitto kono ryōri o kansei sasete misemasu.)"
    ]
  },
  9: {
    EN: [
      "I'm going to go hiking this weekend.",
      "I'm going to hike up to the old lighthouse on the cliffs this Saturday.",
      "I'm going to leave early on Saturday morning in order to beat the crowds on the trail.",
      "I'm going to take the coastal path if I have time, but even a short walk will do.",
      "No matter what the weather does, I'm determined to spend at least part of this weekend outside."
    ],
    IT: [
      "Ho intenzione di fare un'escursione questo fine settimana.",
      "Sabato ho intenzione di salire fino al vecchio faro sulle scogliere.",
      "Ho intenzione di partire presto sabato mattina per evitare la folla sul sentiero.",
      "Ho intenzione di percorrere il sentiero costiero se ho tempo, altrimenti va bene anche una passeggiata corta.",
      "Anche se sarà brutto tempo, ho intenzione di stare fuori almeno un po' questo weekend."
    ],
    DE: [
      "Dieses Wochenende werde ich wandern gehen.",
      "Am Samstag werde ich zum alten Leuchtturm auf den Klippen wandern.",
      "Am Samstagmorgen werde ich früh aufbrechen, um den Menschenmassen auf dem Weg zuvorzukommen.",
      "Ich werde den Küstenpfad nehmen, wenn ich Zeit habe — sonst reicht auch ein kurzer Spaziergang.",
      "Auch wenn das Wetter schlecht wird, werde ich dieses Wochenende doch zumindest ein bisschen Zeit draußen verbringen."
    ],
    JP: [
      "今週末、ハイキングに行くつもりです。(Konshūmatsu, haikingu ni iku tsumori desu.)",
      "今週土曜日に、崖の上の古い灯台まで登るつもりです。(Konshū doyōbi ni, gake no ue no furui tōdai made noboru tsumori desu.)",
      "登山道が混む前に出発するために、土曜日の朝早く家を出るつもりです。(Tozandō ga komu mae ni shuppatsu suru tame ni, doyōbi no asa hayaku ie o deru tsumori desu.)",
      "時間があれば海岸沿いの道を歩くつもりですが、短い散歩でも十分です。(Jikan ga areba kaigan zoi no michi o aruku tsumori desu ga, mijikai sanpo demo jūbun desu.)",
      "天気がどうであっても、今週末は外で過ごす時間をきっと作ってみせます。(Tenki ga dō de atte mo, konshūmatsu wa soto de sugosu jikan o kitto tsukutte misemasu.)"
    ]
  },
  10: {
    EN: [
      "I'm going to visit Kyoto someday.",
      "I'm going to spend two weeks in Kyoto, staying in a traditional inn.",
      "I'm going to learn basic Japanese in order to explore the temples on my own.",
      "I'm going to go during cherry blossom season if I have enough money saved by then.",
      "Even if it takes years to save up, I'm determined to walk those stone paths in Kyoto."
    ],
    IT: [
      "Ho intenzione di visitare Kyoto un giorno.",
      "Ho intenzione di trascorrere due settimane a Kyoto, dormendo in un ryokan tradizionale.",
      "Ho intenzione di imparare il giapponese di base per girare i templi da solo.",
      "Ho intenzione di andarci durante la fioritura dei ciliegi se avrò risparmiato abbastanza.",
      "Anche se ci vorrà molto tempo per risparmiare, ho intenzione di percorrere quei sentieri di pietra a Kyoto."
    ],
    DE: [
      "Ich werde irgendwann Kyoto besuchen.",
      "Ich werde zwei Wochen in Kyoto verbringen und in einem traditionellen Gasthaus übernachten.",
      "Ich werde Grundkenntnisse in Japanisch lernen, um die Tempel auf eigene Faust zu erkunden.",
      "Ich werde während der Kirschblüte fahren, wenn ich bis dahin genug gespart habe.",
      "Auch wenn es Jahre dauern wird zu sparen, werde ich eines Tages doch über diese Steinwege in Kyoto gehen."
    ],
    JP: [
      "いつか京都を訪れるつもりです。(Itsuka Kyōto o otozureru tsumori desu.)",
      "いつか伝統的な旅館に泊まりながら、京都で二週間過ごすつもりです。(Itsuka dentōteki na ryokan ni tomarinagara, Kyōto de nishūkan sugosu tsumori desu.)",
      "一人でお寺を巡るために、日本語の基礎を身につけるつもりです。(Hitori de otera o meguru tame ni, Nihongo no kiso o mi ni tsukeru tsumori desu.)",
      "それまでに十分なお金が貯まったら、桜の季節に行くつもりです。(Sore made ni jūbun na okane ga tamattara, sakura no kisetsu ni iku tsumori desu.)",
      "何年かかっても、きっと京都のあの石畳の道を歩いてみせます。(Nannenkakatte mo, kitto Kyōto no ano ishidatami no michi o aruite misemasu.)"
    ]
  },
  11: {
    EN: [
      "I'm going to read every day this month.",
      "I'm going to read at least twenty pages of my Italian novel every evening.",
      "I'm going to set aside thirty minutes before bed in order to build a real reading habit.",
      "I'm going to keep a short reading log if I have five minutes free after each session.",
      "Even if some evenings are exhausting, I'm determined to finish this book by the end of the month."
    ],
    IT: [
      "Ho intenzione di leggere ogni giorno questo mese.",
      "Ho intenzione di leggere almeno venti pagine del mio romanzo italiano ogni sera.",
      "Ho intenzione di ritagliare mezz'ora prima di dormire per creare una vera abitudine di lettura.",
      "Ho intenzione di tenere un breve diario di lettura se ho cinque minuti liberi dopo ogni sessione.",
      "Anche se alcune serate saranno stancanti, ho intenzione di finire questo libro entro la fine del mese."
    ],
    DE: [
      "Diesen Monat werde ich jeden Tag lesen.",
      "Jeden Abend werde ich mindestens zwanzig Seiten in meinem italienischen Roman lesen.",
      "Ich werde mir dreißig Minuten vor dem Schlafen freihalten, um eine echte Lesegewohnheit aufzubauen.",
      "Ich werde ein kurzes Lesetagebuch führen, wenn ich nach jeder Sitzung fünf Minuten Zeit habe.",
      "Auch wenn manche Abende anstrengend sein werden, werde ich dieses Buch bis Ende des Monats doch fertig lesen."
    ],
    JP: [
      "今月、毎日読書をするつもりです。(Kongetsu, mainichi dokusho o suru tsumori desu.)",
      "毎晩、イタリア語の小説を少なくとも二十ページ読むつもりです。(Maiban, Itariago no shōsetsu o sukunakutomo nijuppēji yomu tsumori desu.)",
      "本当の読書習慣を身につけるために、寝る前の三十分を確保するつもりです。(Hontō no dokusho shūkan o mi ni tsukeru tame ni, neru mae no sanjuppun o kakuho suru tsumori desu.)",
      "時間が五分あれば、読書の後に短い読書記録をつけるつもりです。(Jikan ga gofun areba, dokusho no ato ni mijikai dokusho kiroku o tsukeru tsumori desu.)",
      "どんなに疲れた夜でも、今月中にきっとこの本を読み終えてみせます。(Donna ni tsukareta yoru demo, kongetsu-jū ni kitto kono hon o yomi oete misemasu.)"
    ]
  },

  // --- MÓDULO 4: PASSADO ---
  12: {
    // Tema: ontem — algo concreto que fiz (estudar, cozinhar, sair)
    // L1: passado simples + marcador temporal
    // L2: sequência de dois verbos no passado
    // L3: causa no passado (DE: weil com verbo no fim)
    // L4: contraste no passado
    // L5: anterioridade temporal (past perfect / trapassato / Plusquamperfekt / 〜ていました)
    EN: [
      "Yesterday I cooked dinner from scratch.",
      "Yesterday I went for a run and made a proper meal afterwards.",
      "Yesterday I stayed in to study because the weather was too miserable to go out.",
      "Yesterday I was exhausted after work, but I managed to get through two chapters of my book.",
      "By the time I finally sat down last night, I had already done three loads of laundry and tidied the whole flat."
    ],
    IT: [
      "Ieri ho cucinato la cena da zero.",
      "Ieri sono andato a correre e poi ho preparato un pasto come si deve.",
      "Ieri sono rimasto a studiare a casa perché il tempo era troppo brutto per uscire.",
      "Ieri ero esausto dopo il lavoro, ma sono riuscito a leggere due capitoli del mio libro.",
      "Quando finalmente mi sono seduto ieri sera, avevo già fatto tre lavatrici e riordinato tutto l'appartamento."
    ],
    DE: [
      "Gestern habe ich das Abendessen von Grund auf selbst gekocht.",
      "Gestern bin ich joggen gegangen und habe danach eine richtige Mahlzeit zubereitet.",
      "Gestern bin ich zu Hause geblieben und habe gelernt, weil das Wetter zu schlecht zum Ausgehen war.",
      "Gestern war ich nach der Arbeit erschöpft, aber ich habe es geschafft, zwei Kapitel meines Buches zu lesen.",
      "Als ich mich gestern Abend endlich hinsetzte, hatte ich schon drei Wäschen gemacht und die ganze Wohnung aufgeräumt."
    ],
    JP: [
      "昨日、手作りの夕食を一から作りました。(Kinō, tezukuri no yūshoku o ichikara tsukurimashita.)",
      "昨日、ランニングをして、その後ちゃんとした食事を作りました。(Kinō, ranningu o shite, sono ato chanto shita shokuji o tsukurimashita.)",
      "昨日、外に出るには天気が悪すぎたので、家で勉強しました。(Kinō, soto ni deru ni wa tenki ga warusugita node, ie de benkyō shimashita.)",
      "昨日、仕事の後はくたくたでしたが、本を二章読み終えることができました。(Kinō, shigoto no ato wa kutakuta deshita ga, hon o nishō yomi oeru koto ga dekimashita.)",
      "昨夜やっと腰を落ち着けたとき、もう洗濯を三回済ませて部屋中を片付けていました。(Sakuya yatto koshi o ochitsuketa toki, mō sentaku o sankai sumasete heya-jū o katazukete imashita.)"
    ]
  },
  13: {
    // Tema: melhor refeição que já comi
    // L1: passado simples + marcador temporal
    // L2: sequência de dois verbos no passado
    // L3: causa no passado (DE: weil com verbo no fim)
    // L4: contraste no passado
    // L5: anterioridade temporal (past perfect / trapassato / Plusquamperfekt / 〜ていました)
    EN: [
      "Last summer I had the most incredible bowl of ramen in Tokyo.",
      "I ordered a tasting menu and ate every single course.",
      "I walked twenty minutes to reach that place because a chef friend had said it was unmissable.",
      "The restaurant looked completely ordinary from the outside, but I managed to get a table and it turned out to be unforgettable.",
      "By the time the dessert arrived, I had already decided I would come back before I even left the city."
    ],
    IT: [
      "L'estate scorsa ho mangiato una ciotola di ramen straordinaria a Tokyo.",
      "Ho ordinato il menu degustazione e ho assaggiato ogni singola portata.",
      "Ho camminato venti minuti per arrivare a quel posto perché un amico cuoco mi aveva detto che era imperdibile.",
      "Il ristorante sembrava normalissimo dall'esterno, ma sono riuscito ad avere un tavolo e si è rivelato indimenticabile.",
      "Quando è arrivato il dessert, avevo già deciso che sarei tornato prima ancora di lasciare la città."
    ],
    DE: [
      "Letzten Sommer habe ich in Tokio eine unglaubliche Schüssel Ramen gegessen.",
      "Ich habe das Degustationsmenü bestellt und jeden einzelnen Gang gegessen.",
      "Ich bin zwanzig Minuten zu diesem Lokal gelaufen, weil ein Kochfreund gesagt hatte, dass man es nicht verpassen darf.",
      "Das Restaurant sah von außen völlig gewöhnlich aus, aber ich habe es geschafft, einen Tisch zu bekommen, und es war unvergesslich.",
      "Als das Dessert kam, hatte ich schon beschlossen, zurückzukommen, bevor ich die Stadt überhaupt verlassen hatte."
    ],
    JP: [
      "去年の夏、東京で最高のラーメンを食べました。(Kyonen no natsu, Tōkyō de saikō no rāmen o tabemashita.)",
      "コース料理を注文して、全品味わいました。(Kōsu ryōri o chūmon shite, zenpin ajiwaimashita.)",
      "料理人の友人が絶対に行くべきだと言っていたので、そのお店まで二十分歩きました。(Ryōrinin no yūjin ga zettai ni iku beki da to itte ita node, sono omise made nijuppun arukimashita.)",
      "外見はごく普通のお店でしたが、席を確保することができて、結果的に忘れられない食事になりました。(Gaiken wa goku futsū no omise deshita ga, seki o kakuho suru koto ga dekite, kekkateki ni wasurerarenai shokuji ni narimashita.)",
      "デザートが来たとき、もうその街を離れる前に再訪することを決めていました。(Dezāto ga kita toki, mō sono machi o hanareru mae ni saihō suru koto o kimete imashita.)"
    ]
  },
  14: {
    // Tema: lugar interessante que visitei
    // L1: passado simples + marcador temporal
    // L2: sequência de dois verbos no passado
    // L3: causa no passado (DE: weil com verbo no fim)
    // L4: contraste no passado
    // L5: anterioridade temporal (past perfect / trapassato / Plusquamperfekt / 〜ていました)
    EN: [
      "Last spring I visited a small hilltop town in southern Italy.",
      "I wandered through the old streets and stopped at every little church I found.",
      "I chose that town because a friend had described it as one of the most beautiful places she had ever seen.",
      "The climb up was steep and tiring, but I managed to reach the top just before sunset.",
      "By the time I found a bench to sit on, I had already walked for five hours and taken more than two hundred photos."
    ],
    IT: [
      "La scorsa primavera ho visitato un piccolo paese arroccato nel sud Italia.",
      "Ho girato per i vicoli antichi e mi sono fermato a ogni piccola chiesa che trovavo.",
      "Ho scelto quel paese perché un'amica me lo aveva descritto come uno dei posti più belli che avesse mai visto.",
      "La salita era ripida e faticosa, ma sono riuscito ad arrivare in cima poco prima del tramonto.",
      "Quando ho trovato una panchina su cui sedermi, avevo già camminato per cinque ore e scattato più di duecento foto."
    ],
    DE: [
      "Letzten Frühling habe ich ein kleines Städtchen auf einem Hügel in Süditalien besucht.",
      "Ich bin durch die alten Gassen geschlendert und habe an jeder kleinen Kirche angehalten.",
      "Ich habe diesen Ort gewählt, weil eine Freundin ihn als einen der schönsten Orte beschrieben hatte, die sie je gesehen hatte.",
      "Der Aufstieg war steil und anstrengend, aber ich habe es geschafft, kurz vor Sonnenuntergang oben anzukommen.",
      "Als ich endlich eine Bank zum Sitzen fand, hatte ich schon fünf Stunden lang gelaufen und mehr als zweihundert Fotos gemacht."
    ],
    JP: [
      "去年の春、南イタリアの小さな丘の上の町を訪れました。(Kyonen no haru, minami Itaria no chiisana oka no ue no machi o otozuremashita.)",
      "古い路地を歩き回り、見つけた小さな教会に立ち寄りました。(Furui rōji o arukimawari, mitsuketa chiisana kyōkai ni tachiyorimashita.)",
      "友人がそこを今まで見た中で最も美しい場所のひとつだと言っていたので、その町を選びました。(Yūjin ga soko o ima made mita naka de mottomo utsukushii basho no hitotsu da to itte ita node, sono machi o erabimashita.)",
      "登り道は急で疲れましたが、日没直前に頂上にたどり着くことができました。(Nobori michi wa kyū de tsukaremashita ga, nichibotsu chokuzen ni chōjō ni tadoritsuku koto ga dekimashita.)",
      "ベンチを見つけて座ったとき、もう五時間歩いて二百枚以上の写真を撮っていました。(Benchi o mitsukete suwatta toki, mō gojikan aruite nihyakumai ijō no shashin o totte imashita.)"
    ]
  },
  15: {
    // Tema: algo que aconteceu esta semana (evento inesperado ou marcante)
    // L1: passado simples + marcador temporal
    // L2: sequência de dois verbos no passado
    // L3: causa no passado (DE: weil com verbo no fim)
    // L4: contraste no passado
    // L5: anterioridade temporal (past perfect / trapassato / Plusquamperfekt / 〜ていました)
    EN: [
      "This week I bumped into an old school friend on the street.",
      "I stopped to say hello and we ended up talking for over an hour.",
      "I almost walked straight past her because I was distracted by a message on my phone.",
      "I had no free time at all this week, but I managed to squeeze in a long coffee with her.",
      "By the time we said goodbye, I had already forgotten how stressed I had been all week."
    ],
    IT: [
      "Questa settimana ho incontrato per caso un vecchio amico di scuola per strada.",
      "Ci siamo fermati a parlare e abbiamo chiacchierato per più di un'ora.",
      "L'ho quasi superato senza vederlo perché ero distratto da un messaggio sul telefono.",
      "Questa settimana non avevo per niente tempo libero, ma sono riuscito a ritagliarmi un lungo caffè con lui.",
      "Quando ci siamo salutati, avevo già dimenticato quanto fossi stato stressato per tutta la settimana."
    ],
    DE: [
      "Diese Woche bin ich zufällig einem alten Schulfreund auf der Straße begegnet.",
      "Ich bin stehen geblieben und wir haben uns am Ende über eine Stunde lang unterhalten.",
      "Ich wäre fast einfach an ihm vorbeigegangen, weil ich von einer Nachricht auf meinem Handy abgelenkt war.",
      "Diese Woche hatte ich überhaupt keine Freizeit, aber ich habe es geschafft, einen langen Kaffee mit ihm einzuschieben.",
      "Als wir uns verabschiedet haben, hatte ich schon vergessen, wie gestresst ich die ganze Woche über gewesen war."
    ],
    JP: [
      "今週、路上で旧友に偶然出会いました。(Konshū, rōjō de kyūyū ni gūzen deaimashita.)",
      "立ち止まって話しかけたら、一時間以上おしゃべりしてしまいました。(Tachidomatte hanashikaketara, ichijikan ijō oshaberi shite shimaimashita.)",
      "スマホのメッセージに気を取られていたので、もう少しで彼女に気づかずに通り過ぎるところでした。(Sumaho no messēji ni ki o torarete ita node, mō sukoshi de kanojo ni kidzukazu ni tōrisugiru tokoro deshita.)",
      "今週はまったく自由な時間がありませんでしたが、なんとか彼女とゆっくりコーヒーを飲む時間を作ることができました。(Konshū wa mattaku jiyū na jikan ga arimasen deshita ga, nantoka kanojo to yukkuri kōhī o nomu jikan o tsukuru koto ga dekimashita.)",
      "別れを告げたとき、もう一週間ずっと感じていたストレスを忘れていました。(Wakare o tsugeta toki, mō isshūkan zutto kanjite ita sutoresu o wasurete imashita.)"
    ]
  },

  // --- MÓDULO 5: CONECTORES ---
  16: {
    // Tema: manhã passo a passo (sequência de ações matinais)
    // L1: sequência — primeiro (First / Prima / Zuerst / まず) — conector fronteado
    // L2: sequência — depois (Then / Poi / Dann / それから)
    // L3: consequência (so / quindi / also / 〜だから)
    // L4: causa explícita (because / perché / weil + verbo no fim / 〜ので)
    // L5: concessão narrativa + registro nativo
    EN: [
      "First, I made myself a strong coffee and sat by the kitchen window.",
      "Then, I had a quick shower and got dressed before checking my phone.",
      "I skipped breakfast at home, so I grabbed something at the café near the office.",
      "I set three alarms because I had an early meeting and really couldn't afford to oversleep.",
      "Even though I was barely awake, I ended up leaving the house on time and even catching an earlier train."
    ],
    IT: [
      "Prima, mi sono fatto un caffè forte e mi sono seduto vicino alla finestra della cucina.",
      "Poi, ho fatto una doccia veloce e mi sono vestito prima di controllare il telefono.",
      "Non ho fatto colazione a casa, quindi ho preso qualcosa al bar vicino all'ufficio.",
      "Ho messo tre sveglie perché avevo una riunione di buon mattino e non potevo permettermi di dormire troppo.",
      "Anche se ero a malapena sveglio, mica ho fatto tardi — sono uscito in orario e ho pure preso il treno prima."
    ],
    DE: [
      "Zuerst habe ich mir einen starken Kaffee gemacht und mich ans Küchenfenster gesetzt.",
      "Dann habe ich kurz geduscht und mich angezogen, bevor ich aufs Handy geschaut habe.",
      "Zu Hause habe ich nichts gegessen, also habe ich mir im Café beim Büro schnell etwas geholt.",
      "Ich habe drei Wecker gestellt, weil ich ein frühes Meeting hatte und es mir nicht leisten konnte, zu verschlafen.",
      "Obwohl ich kaum wach war, habe ich's doch pünktlich aus dem Haus geschafft und sogar einen früheren Zug erwischt."
    ],
    JP: [
      "まず、濃いコーヒーを入れてキッチンの窓の近くに座りました。(Mazu, koi kōhī o irete kitchin no mado no chikaku ni suwarimashita.)",
      "それから、さっとシャワーを浴びて着替えてから、スマホを確認しました。(Sorekara, satto shawā o abite kigaete kara, sumaho o kakunin shimashita.)",
      "家では何も食べなかったから、オフィスの近くのカフェで何か買いました。(Ie de wa nani mo tabenakatta kara, ofisu no chikaku no kafe de nanika kaimashita.)",
      "早朝に会議があって寝坊できないので、アラームを三つかけました。(Sōchō ni kaigi ga atte nebō dekinai node, arāmu o mittsu kakemashita.)",
      "ほとんど目が覚めていなかったけれど、時間通りに家を出て、早い電車にまで乗れてしまいました。(Hotondo me ga samete inakatta keredo, jikan dōri ni ie o dete, hayai densha ni made norete shimaimashita.)"
    ]
  },
  17: {
    // Tema: um pequeno problema que resolvi
    // L1: sequência — primeiro (First / Prima / Zuerst / まず) — conector fronteado
    // L2: sequência — depois (Then / Poi / Dann / それから)
    // L3: consequência (so / quindi / also / 〜だから)
    // L4: causa explícita (because / perché / weil + verbo no fim / 〜ので)
    // L5: concessão narrativa + registro nativo
    EN: [
      "First, I noticed that my bike tyre was completely flat before I left the house.",
      "Then, I found the puncture kit under the kitchen sink and laid everything out on the floor.",
      "The patch didn't stick the first time, so I had to clean the surface properly and try again.",
      "I had to look up a video tutorial because I had never fixed a puncture on my own before.",
      "Even though it took me the better part of an hour, I ended up fixing it myself and felt pretty pleased about it."
    ],
    IT: [
      "Prima, ho notato che la ruota della bici era completamente a terra prima di uscire.",
      "Poi, ho trovato il kit per le forature sotto il lavandino e ho steso tutto per terra.",
      "La toppa non ha attaccato al primo tentativo, quindi ho dovuto pulire bene la superficie e riprovare.",
      "Ho dovuto guardare un tutorial perché non avevo mai riparato una foratura da solo prima d'ora.",
      "Anche se ci ho messo quasi un'ora, mica ho chiamato il gommista — l'ho aggiustata da solo e mi sono sentito soddisfatto."
    ],
    DE: [
      "Zuerst habe ich gemerkt, dass mein Fahrradreifen völlig platt war, bevor ich das Haus verlassen habe.",
      "Dann habe ich das Reifenflicken-Set unter der Spüle gefunden und alles auf dem Boden ausgebreitet.",
      "Das Flicken hat beim ersten Versuch nicht gehalten, also habe ich die Stelle sauber gemacht und es nochmal versucht.",
      "Ich musste mir ein Video-Tutorial ansehen, weil ich noch nie vorher alleine einen Reifen geflickt hatte.",
      "Obwohl es mich fast eine Stunde gekostet hat, habe ich's doch selbst hinbekommen — und war ziemlich stolz darauf."
    ],
    JP: [
      "まず、家を出る前に自転車のタイヤが完全にパンクしているのに気づきました。(Mazu, ie o deru mae ni jitensha no taiya ga kanzen ni panku shite iru no ni kidzukimashita.)",
      "それから、台所の流し台の下からパンク修理キットを見つけて、床に広げました。(Sorekara, daidokoro no nagashidai no shita kara panku shūri kitto o mitsukete, yuka ni hirogemashita.)",
      "最初はパッチがうまく貼れなかったから、表面をきれいに拭いてもう一度試しました。(Saisho wa patchi ga umaku harenakatta kara, hyōmen o kirei ni fuite mō ichido tameshimashita.)",
      "一度も自分でパンク修理をしたことがなかったので、動画のチュートリアルを調べなければなりませんでした。(Ichido mo jibun de panku shūri o shita koto ga nakatta node, dōga no chūtoriaru o shirabenakereba narimasen deshita.)",
      "一時間近くかかってしまったけれど、自分で直せてしまいましたし、かなり達成感がありました。(Ichijikan chikaku kakatte shimatta keredo, jibun de naosete shimaimashita shi, kanari tasseikan ga arimashita.)"
    ]
  },
  18: {
    // Tema: por que fiz algo recentemente (decisão explicada)
    // L1: sequência — primeiro (First / Prima / Zuerst / まず) — conector fronteado
    // L2: sequência — depois (Then / Poi / Dann / それから)
    // L3: consequência (so / quindi / also / 〜だから)
    // L4: causa explícita (because / perché / weil + verbo no fim / 〜ので)
    // L5: concessão narrativa + registro nativo
    EN: [
      "First, I looked up several language courses online and made a shortlist of three.",
      "Then, I signed up for a free trial to see which one actually suited the way I learn.",
      "The first course felt too passive, so I switched to one with more speaking practice.",
      "I chose to study in the evenings because my mornings are already too full to concentrate properly.",
      "Even though I was sceptical about learning with an app at first, I ended up sticking with it and making real progress."
    ],
    IT: [
      "Prima, ho cercato vari corsi di lingua online e ho fatto una lista dei migliori tre.",
      "Poi, mi sono iscritto a una prova gratuita per vedere quale si adattava al mio modo di imparare.",
      "Il primo corso mi sembrava troppo passivo, quindi sono passato a uno con più pratica orale.",
      "Ho scelto di studiare la sera perché al mattino sono già troppo impegnato per concentrarmi bene.",
      "Anche se all'inizio ero scettico sull'imparare con un'app, alla fine ci ho preso gusto e ho fatto progressi veri."
    ],
    DE: [
      "Zuerst habe ich mehrere Sprachkurse online nachgeschaut und eine Auswahl von drei gemacht.",
      "Dann habe ich mich für eine kostenlose Testversion angemeldet, um zu sehen, welche zu mir passt.",
      "Der erste Kurs war mir zu passiv, also habe ich zu einem mit mehr Sprechübungen gewechselt.",
      "Ich habe mich entschieden, abends zu lernen, weil meine Morgen schon zu voll sind, um mich richtig zu konzentrieren.",
      "Obwohl ich anfangs skeptisch war, mit einer App zu lernen, habe ich's doch dabei gelassen — und echte Fortschritte gemacht."
    ],
    JP: [
      "まず、いくつかの語学コースをネットで調べて、三つに絞りました。(Mazu, ikutsuka no gogakukōsu o netto de shirabete, mittsu ni shiborimashita.)",
      "それから、自分の学習スタイルに合うかどうか確かめるために、無料トライアルに申し込みました。(Sorekara, jibun no gakushū sutairu ni au ka dō ka tashikameru tame ni, muryō toraiaru ni mōshikomimashita.)",
      "最初のコースは受け身すぎると感じたから、スピーキングの練習が多いものに替えました。(Saisho no kōsu wa ukemi sugiru to kanjita kara, supīkingu no renshū ga ōi mono ni kaemashita.)",
      "朝はすでにやることが多くて集中できないので、夜に勉強することにしました。(Asa wa sude ni yaru koto ga ōkute shūchū dekinai node, yoru ni benkyō suru koto ni shimashita.)",
      "最初はアプリで学ぶことに半信半疑でしたけれど、続けてしまったら本当に上達してしまいました。(Saisho wa apuri de manabu koto ni hanshinhangi deshita keredo, tsuzukete shimattara hontō ni jōtatsu shite shimaimashita.)"
    ]
  },
  19: {
    // Tema: uma história curta que vivi (narrativa pessoal)
    // L1: sequência — primeiro (First / Prima / Zuerst / まず) — conector fronteado
    // L2: sequência — depois (Then / Poi / Dann / それから)
    // L3: consequência (so / quindi / also / 〜だから)
    // L4: causa explícita (because / perché / weil + verbo no fim / 〜ので)
    // L5: concessão narrativa + registro nativo
    EN: [
      "First, I got on the wrong bus and ended up in a neighbourhood I had never been to before.",
      "Then, I wandered around for a while and stumbled upon a tiny street market I never would have found otherwise.",
      "I only had twenty minutes before the next bus, so I bought a couple of things and took a few photos.",
      "I stayed longer than planned because the woman at the cheese stall told me the whole story of her family farm.",
      "Even though it started as a mistake, I ended up having one of the best afternoons I've had in a long time."
    ],
    IT: [
      "Prima, sono salito sull'autobus sbagliato e mi sono ritrovato in un quartiere che non conoscevo.",
      "Poi, ho girovagato un po' e ho scoperto per caso un piccolo mercatino di strada che non avrei mai trovato altrimenti.",
      "Avevo solo venti minuti prima del prossimo autobus, quindi ho comprato un paio di cose e ho scattato qualche foto.",
      "Sono rimasto più a lungo del previsto perché la signora al banco dei formaggi mi ha raccontato tutta la storia della sua fattoria di famiglia.",
      "Anche se era partito tutto da un errore, alla fine ho trascorso uno dei pomeriggi più belli degli ultimi tempi."
    ],
    DE: [
      "Zuerst habe ich den falschen Bus genommen und bin in einem Viertel gelandet, das ich noch nie gesehen hatte.",
      "Dann bin ich eine Weile umhergeirrt und habe zufällig einen kleinen Straßenmarkt entdeckt, den ich sonst nie gefunden hätte.",
      "Ich hatte nur zwanzig Minuten bis zum nächsten Bus, also habe ich ein paar Sachen gekauft und Fotos gemacht.",
      "Ich bin länger geblieben als geplant, weil mir die Frau am Käsestand die ganze Geschichte ihres Familienhofs erzählt hatte.",
      "Obwohl alles mit einem Fehler angefangen hatte, habe ich's doch zu einem der schönsten Nachmittage seit Langem gemacht."
    ],
    JP: [
      "まず、間違ったバスに乗ってしまい、見知らぬ住宅街に着いてしまいました。(Mazu, machigatta basu ni notte shimai, mishiranu jūtakugai ni tsuite shimaimashita.)",
      "それから、しばらくうろうろしていたら、偶然小さな路上マーケットを見つけました。(Sorekara, shibaraku urouro shite itara, gūzen chiisana rojō māketto o mitsukemashita.)",
      "次のバスまで二十分しかなかったから、いくつか買い物をして写真を撮りました。(Tsugi no basu made nijuppun shika nakatta kara, ikutsuka kaimono o shite shashin o torimashita.)",
      "チーズのお店のおばさんが家族の農場の話を全部してくれたので、予定より長く居てしまいました。(Chīzu no omise no obasan ga kazoku no nōjō no hanashi o zenbu shite kureta node, yotei yori nagaku ite shimaimashita.)",
      "最初は間違いから始まったのですけれど、結局ここ最近で一番楽しい午後になってしまいました。(Saisho wa machigai kara hajimatta no desu keredo, kekkyoku koko saikin de ichiban tanoshii gogo ni natte shimaimashita.)"
    ]
  },

  // --- MÓDULO 6: COMPARAÇÃO ---
  20: {
    // Tema: duas cidades que conheço
    // L1: comparativo de superioridade — bigger than / più grande di / größer als / 〜より大きい
    // L2: superlativo — the most… / il più… / der/die/das …ste / 一番〜
    // L3: igualdade — as…as / così…come / so…wie / 〜と同じくらい
    // L4: superlativo + relativa — the X-est I have ever… / il più X che abbia mai… (congiuntivo passato) / der/die/das X-ste, die/den ich je… / 今まで〜した中で一番〜
    // L5: preferência implícita + registro nativo — Nothing beats… / non c'è niente di meglio di… / Nichts geht über… / 〜にはかないません
    EN: [
      "Kyoto is much older than Tokyo, but both cities feel completely different.",
      "Barcelona is the most vibrant city I have visited in Europe so far.",
      "The nightlife in Berlin is just as intense as the nightlife in São Paulo.",
      "That small alleyway café in Kyoto is the most atmospheric place I have ever sat in.",
      "Nothing beats wandering through a city you barely know with no plan at all."
    ],
    IT: [
      "Kyoto è molto più antica di Tokyo, ma le due città hanno un'atmosfera completamente diversa.",
      "Barcellona è la città più vivace che io abbia visitato in Europa finora.",
      "La vita notturna di Berlino è così intensa come quella di San Paolo.",
      "Quel piccolo caffè nel vicolo di Kyoto è il posto più suggestivo in cui mi sia mai seduto.",
      "Non c'è niente di meglio di perdersi in una città che non si conosce quasi per niente."
    ],
    DE: [
      "Kyoto ist viel älter als Tokio, aber beide Städte fühlen sich völlig anders an.",
      "Barcelona ist die lebhafteste Stadt, die ich bisher in Europa besucht habe.",
      "Das Nachtleben in Berlin ist genauso intensiv wie das Nachtleben in São Paulo.",
      "Dieses kleine Gassencafé in Kyoto ist der stimmungsvollste Ort, an dem ich je gesessen habe.",
      "Nichts geht über das ziellose Schlendern durch eine Stadt, die man kaum kennt."
    ],
    JP: [
      "京都は東京よりずっと古いですが、ふたつの街はまったく違う雰囲気があります。(Kyōto wa Tōkyō yori zutto furui desu ga, futatsu no machi wa mattaku chigau fun'iki ga arimasu.)",
      "バルセロナはわたしが今まで訪れたヨーロッパの街の中で一番活気があります。(Baruserona wa watashi ga ima made otozureta Yōroppa no machi no naka de ichiban kakki ga arimasu.)",
      "ベルリンのナイトライフはサンパウロのナイトライフと同じくらい賑やかです。(Berurin no naitoraifu wa Sanpauro no naitoraifu to onaji kurai nigiyaka desu.)",
      "京都の路地にあるあの小さなカフェは、今まで座った中で一番風情のある場所です。(Kyōto no roji ni aru ano chiisana kafe wa, ima made suwatta naka de ichiban fūjō no aru basho desu.)",
      "まったく計画なしに知らない街をぶらぶら歩くことにはかないません。(Mattaku keikaku nashi ni shiranai machi o burabura aruku koto ni wa kanaimasen.)"
    ]
  },
  21: {
    // Tema: uma pessoa que admiro
    // L1: comparativo de superioridade — bigger than / più grande di / größer als / 〜より大きい
    // L2: superlativo — the most… / il più… / der/die/das …ste / 一番〜
    // L3: igualdade — as…as / così…come / so…wie / 〜と同じくらい
    // L4: superlativo + relativa — the X-est I have ever… / il più X che abbia mai… (congiuntivo passato) / der/die/das X-ste, die/den ich je… / 今まで〜した中で一番〜
    // L5: preferência implícita + registro nativo — Nothing beats… / non c'è niente di meglio di… / Nichts geht über… / 〜にはかないません
    EN: [
      "My grandmother is far more resilient than anyone else I have ever known.",
      "She is the most inspiring person I have met in my entire life.",
      "Her patience with others is just as remarkable as her ability to stay calm under pressure.",
      "She is the most dedicated teacher I have ever had the luck of learning from.",
      "Nothing beats having someone in your life who believes in you no matter what."
    ],
    IT: [
      "Mia nonna è molto più resiliente di chiunque altro io abbia mai conosciuto.",
      "È la persona più ispiratrice che io abbia incontrato in tutta la mia vita.",
      "La sua pazienza con gli altri è così straordinaria come la sua capacità di restare calma sotto pressione.",
      "È la maestra più appassionata che io abbia mai avuto la fortuna di incontrare.",
      "Non c'è niente di meglio di avere qualcuno nella vita che creda in te a prescindere da tutto."
    ],
    DE: [
      "Meine Großmutter ist viel widerstandsfähiger als alle anderen, die ich je gekannt habe.",
      "Sie ist die inspirierendste Person, die ich in meinem ganzen Leben getroffen habe.",
      "Ihre Geduld mit anderen ist genauso bemerkenswert wie ihre Fähigkeit, unter Druck ruhig zu bleiben.",
      "Sie ist die engagierteste Lehrerin, von der ich je das Glück hatte zu lernen.",
      "Nichts geht über jemanden im Leben zu haben, der bedingungslos an einen glaubt."
    ],
    JP: [
      "祖母はわたしがこれまで知っている人の中で誰よりもずっと強い人です。(Sobo wa watashi ga kore made shitte iru hito no naka de dare yori mo zutto tsuyoi hito desu.)",
      "彼女はわたしが人生で出会った中で一番刺激を与えてくれる人です。(Kanojo wa watashi ga jinsei de deatta naka de ichiban shigeki o ataete kureru hito desu.)",
      "他の人への彼女の忍耐力は、プレッシャーのもとで落ち着いていられる力と同じくらい見事です。(Hoka no hito e no kanojo no nintairyoku wa, puresshā no moto de ochitsuite irarereru chikara to onaji kurai migoto desu.)",
      "彼女は今まで幸運にも教えを受けた中で一番情熱的な先生です。(Kanojo wa ima made kōun ni mo oshie o uketa naka de ichiban jōnetsuteki na sensei desu.)",
      "何があっても信じてくれる人が人生にいるということにはかないません。(Nani ga atte mo shinjite kureru hito ga jinsei ni iru to iu koto ni wa kanaimasen.)"
    ]
  },
  22: {
    // Tema: antes e agora (como eu mudei)
    // L1: comparativo de superioridade — bigger than / più grande di / größer als / 〜より大きい
    // L2: superlativo — the most… / il più… / der/die/das …ste / 一番〜
    // L3: igualdade — as…as / così…come / so…wie / 〜と同じくらい
    // L4: superlativo + relativa — the X-est I have ever… / il più X che abbia mai… (congiuntivo passato) / der/die/das X-ste, die/den ich je… / 今まで〜した中で一番〜
    // L5: preferência implícita + registro nativo — Nothing beats… / non c'è niente di meglio di… / Nichts geht über… / やはり〜が一番ですね
    EN: [
      "I am far more comfortable with uncertainty now than I was five years ago.",
      "The last two years have been the most formative period of my life.",
      "My confidence today is just as fragile as it was when I first started, but in a different way.",
      "Deciding to study languages is the best choice I have ever made for my own growth.",
      "Nothing beats looking back and realising how far you have actually come."
    ],
    IT: [
      "Sono molto più a mio agio con l'incertezza adesso di quanto lo fossi cinque anni fa.",
      "Gli ultimi due anni sono stati il periodo più formativo della mia vita.",
      "La mia sicurezza oggi è così fragile come lo era quando ho cominciato, ma in modo diverso.",
      "Decidere di studiare le lingue è la scelta migliore che io abbia mai fatto per la mia crescita personale.",
      "Non c'è niente di meglio di guardare indietro e rendersi conto di quanta strada si è fatta."
    ],
    DE: [
      "Ich gehe jetzt viel besser mit Unsicherheit um als noch vor fünf Jahren.",
      "Die letzten zwei Jahre waren die prägendste Zeit meines Lebens.",
      "Mein Selbstvertrauen heute ist genauso zerbrechlich wie damals, als ich anfing, aber auf eine andere Art.",
      "Die Entscheidung, Sprachen zu lernen, ist die beste, die ich je für meine persönliche Entwicklung getroffen habe.",
      "Nichts geht über den Moment, wenn man zurückblickt und merkt, wie weit man wirklich gekommen ist."
    ],
    JP: [
      "今のわたしは五年前よりずっと不確かさと上手く付き合えるようになりました。(Ima no watashi wa gonenmae yori zutto futashikasa to umaku tsukiaeru yō ni narimashita.)",
      "この二年間はわたしの人生の中で一番自分を形成した時期でした。(Kono ninenkan wa watashi no jinsei no naka de ichiban jibun o keisei shita jiki deshita.)",
      "今日の自分の自信は、始めた頃と同じくらい不安定ですが、違うかたちで。(Kyō no jibun no jishin wa, hajimeta koro to onaji kurai fuantei desu ga, chigau katachi de.)",
      "語学を学ぶことにしたのは、今まで自分の成長のためにした中で一番良い選択です。(Gogaku o manabu koto ni shita no wa, ima made jibun no seichō no tame ni shita naka de ichiban yoi sentaku desu.)",
      "やはり振り返って自分がどれだけ成長したかに気づく瞬間が一番ですね。(Yahari furikaette jibun ga dore dake seichō shita ka ni kizuku shunkan ga ichiban desu ne.)"
    ]
  },
  23: {
    // Tema: a melhor coisa da minha cidade
    // L1: comparativo de superioridade — bigger than / più grande di / größer als / 〜より大きい
    // L2: superlativo — the most… / il più… / der/die/das …ste / 一番〜
    // L3: igualdade — as…as / così…come / so…wie / 〜と同じくらい
    // L4: superlativo + relativa — the X-est I have ever… / il più X che abbia mai… (congiuntivo passato) / der/die/das X-ste, die/den ich je… / 今まで〜した中で一番〜
    // L5: preferência implícita + registro nativo — Nothing beats… / non c'è niente di meglio di… / Nichts geht über… / 〜にはかないません
    EN: [
      "Our Sunday market is far busier than anything I have seen in the surrounding towns.",
      "The park by the river is the most peaceful spot in the whole city.",
      "The main square on a summer evening is just as lively as any piazza I have visited in Italy.",
      "The old covered market is the most fascinating place I have ever explored on a quiet weekday morning.",
      "Nothing beats grabbing a coffee at the corner bar and watching the city slowly wake up."
    ],
    IT: [
      "Il nostro mercato domenicale è molto più animato di qualsiasi cosa io abbia visto nelle città vicine.",
      "Il parco lungo il fiume è il posto più tranquillo di tutta la città.",
      "La piazza principale nelle serate estive è così vivace come qualsiasi piazza che abbia visitato in Italia.",
      "Il vecchio mercato coperto è il posto più affascinante in cui mi sia mai avventurato in una mattina infrasettimanale.",
      "Non c'è niente di meglio di prendere un caffè al bar all'angolo e guardare la città che si sveglia lentamente."
    ],
    DE: [
      "Unser Sonntagsmarkt ist viel belebter als alles, was ich in den umliegenden Städten gesehen habe.",
      "Der Park am Fluss ist der ruhigste Ort der ganzen Stadt.",
      "Der Hauptplatz an einem Sommerabend ist genauso lebendig wie jede Piazza, die ich in Italien besucht habe.",
      "Die alte überdachte Markthalle ist der faszinierendste Ort, den ich je an einem stillen Wochentagmorgen erkundet habe.",
      "Nichts geht über einen Kaffee an der Eckkneipe, während man der Stadt beim langsamen Erwachen zuschaut."
    ],
    JP: [
      "わたしたちの日曜市は近くの街で見たどこよりもずっと賑わっています。(Watashitachi no nichiyōichi wa chikaku no machi de mita doko yori mo zutto nigiwatte imasu.)",
      "川沿いの公園はこの街で一番落ち着ける場所です。(Kawazoi no kōen wa kono machi de ichiban ochitsukeru basho desu.)",
      "夏の夜のメインの広場はわたしがイタリアで訪れたどの広場と同じくらい活気があります。(Natsu no yoru no mein no hiroba wa watashi ga Itaria de otozureta dono hiroba to onaji kurai kakki ga arimasu.)",
      "古い屋根付き市場は、今まで静かな平日の朝に探索した中で一番魅力的な場所です。(Furui yanetsuki ichiba wa, ima made shizuka na heijitsu no asa ni tansakushita naka de ichiban miryokuteki na basho desu.)",
      "街角のバーでコーヒーを飲みながら街がゆっくり目覚めるのを眺めることにはかないません。(Machikado no bā de kōhī o nominagara machi ga yukkuri mezameru no o nagameru koto ni wa kanaimasen.)"
    ]
  },

  // --- MÓDULO 7: OPINIÕES ---
  24: {
    // Tema: opinião sobre tecnologia / redes sociais
    // L1: opinião simples — I think… / Penso che… + indicativo / Ich denke, dass… / 〜と思います
    // L2: opinião com subordinada — I think that… (cláusula); IT: congiuntivo presente; DE: Ich glaube, dass…; JP: 〜と思っています
    // L3: opinião com razão — I think…because… / perché / weil (verbo no fim) / なぜなら〜から
    // L4: concessão — Even though…, I still think… / Anche se…, penso comunque che… (congiuntivo); DE: Auch wenn…; JP: 〜ても、やはり〜と思います
    // L5: hedging formal — It seems to me that… / Sembrerebbe che… (congiuntivo imperfeito); DE: Es scheint mir, als ob…wäre; JP: 〜のではないかと思います
    EN: [
      "I think technology is useful.",
      "I think that social media has changed the way we communicate.",
      "I think social media is addictive because it is designed to keep us scrolling.",
      "Even though social media helps us stay connected, I still think it can damage real friendships.",
      "It seems to me that we have not yet fully understood the long-term effects of constant connectivity."
    ],
    IT: [
      "Penso che la tecnologia sia utile.",
      "Penso che i social media cambino il modo in cui comunichiamo.",
      "Penso che i social siano dipendenti perché sono progettati per tenerci incollati allo schermo.",
      "Anche se i social ci aiutano a restare in contatto, penso comunque che possano danneggiare le amicizie vere.",
      "Sembrerebbe che non si fossero ancora capiti appieno gli effetti a lungo termine della connessione costante."
    ],
    DE: [
      "Ich denke, dass Technologie nützlich ist.",
      "Ich glaube, dass soziale Medien die Art, wie wir kommunizieren, verändert haben.",
      "Ich denke, dass soziale Medien süchtig machen, weil sie darauf ausgelegt sind, uns am Scrollen zu halten.",
      "Auch wenn soziale Medien uns verbinden, glaube ich trotzdem, dass sie echte Freundschaften schädigen können.",
      "Es scheint mir, als ob wir die Langzeitfolgen ständiger Vernetzung noch nicht wirklich verstanden hätten."
    ],
    JP: [
      "テクノロジーは便利だと思います。(Tekunorojī wa benri da to omoimasu.)",
      "SNSはわたしたちのコミュニケーションの仕方を変えたと思っています。(SNS wa watashitachi no komyunikēshon no shikata o kaeta to omotte imasu.)",
      "SNSは依存性があると思います。なぜならずっとスクロールし続けるように設計されているからです。(SNS wa izonsei ga aru to omoimasu. Nazenara zutto sukurōru shitsuzukeru yō ni sekkeisarete iru kara desu.)",
      "SNSがつながりを保つのに役立つとしても、やはり本当の友情を傷つける可能性があると思います。(SNS ga tsunagari o tamotsu no ni yakudatsu to shite mo, yahari hontō no yūjō o kizutsukeru kanōsei ga aru to omoimasu.)",
      "常時接続の長期的な影響はまだ十分に理解されていないのではないかと思います。(Jōji setsuzoku no chōkiteki na eikyō wa mada jūbun ni rikai sarete inai no de wa nai ka to omoimasu.)"
    ]
  },
  25: {
    // Tema: opinião sobre aprendizado de idiomas
    // L1: opinião simples — I think… / Penso che… + indicativo / Ich denke, dass… / 〜と思います
    // L2: opinião com subordinada — I think that… (cláusula); IT: congiuntivo presente; DE: Ich glaube, dass…; JP: 〜と思っています
    // L3: opinião com razão — I think…because… / perché / weil (verbo no fim) / なぜなら〜から
    // L4: concessão — Even though…, I still think… / Anche se…, penso comunque che… (congiuntivo); DE: Auch wenn…; JP: 〜ても、やはり〜と思います
    // L5: hedging formal — It seems to me that… / Sembrerebbe che… (congiuntivo imperfeito); DE: Es scheint mir, als ob…wäre; JP: 〜のではないかと思います
    EN: [
      "I think learning languages is rewarding.",
      "I think that speaking a second language opens many doors in life.",
      "I think consistency is the key to fluency because progress comes from daily practice.",
      "Even though grammar can feel overwhelming, I still think it is worth mastering properly.",
      "It seems to me that the best way to learn a language might be simply to use it every single day."
    ],
    IT: [
      "Penso che imparare le lingue sia gratificante.",
      "Penso che parlare una seconda lingua apra molte porte nella vita.",
      "Penso che la costanza sia la chiave per la fluenza perché i progressi vengono dalla pratica quotidiana.",
      "Anche se la grammatica può sembrare opprimente, penso comunque che valga la pena padroneggiarla bene.",
      "Avrei l'impressione che il modo migliore per imparare una lingua fosse semplicemente usarla ogni giorno."
    ],
    DE: [
      "Ich denke, dass Sprachenlernen lohnenswert ist.",
      "Ich glaube, dass das Sprechen einer zweiten Sprache viele Türen öffnet.",
      "Ich denke, dass Beständigkeit der Schlüssel zur Flüssigkeit ist, weil Fortschritte aus täglicher Übung kommen.",
      "Auch wenn Grammatik überwältigend wirken kann, glaube ich trotzdem, dass es sich lohnt, sie richtig zu beherrschen.",
      "Es scheint mir, als ob der beste Weg, eine Sprache zu lernen, schlicht und einfach wäre, sie jeden Tag zu benutzen."
    ],
    JP: [
      "語学を学ぶことはやりがいがあると思います。(Gogaku o manabu koto wa yarigai ga aru to omoimasu.)",
      "第二言語を話せることで人生の多くの扉が開くと思っています。(Daini gengo o hanaseru koto de jinsei no ōku no tobira ga hiraku to omotte imasu.)",
      "流暢さへの鍵は継続だと思います。なぜなら毎日の練習から上達が生まれるからです。(Ryūchōsa e no kagi wa keizoku da to omoimasu. Nazenara mainichi no renshū kara jōtatsu ga umareru kara desu.)",
      "文法が難しく感じられるとしても、やはりきちんとマスターする価値があると思います。(Bunpō ga muzukashiku kanjirareru to shite mo, yahari kichinto masutā suru kachi ga aru to omoimasu.)",
      "言語を学ぶ最善の方法は毎日ただ使い続けることなのではないかと思います。(Gengo o manabu saizen no hōhō wa mainichi tada tsukaitsuzukeru koto na no de wa nai ka to omoimasu.)"
    ]
  },
  26: {
    // Tema: opinião sobre viagens vs. ficar em casa
    // L1: opinião simples — I think… / Penso che… + indicativo / Ich denke, dass… / 〜と思います
    // L2: opinião com subordinada — I think that… (cláusula); IT: congiuntivo presente; DE: Ich glaube, dass…; JP: 〜と思っています
    // L3: opinião com razão — I think…because… / perché / weil (verbo no fim) / なぜなら〜から
    // L4: concessão — Even though…, I still think… / Anche se…, penso comunque che… (congiuntivo); DE: Auch wenn…; JP: 〜ても、やはり〜と思います
    // L5: hedging formal — It seems to me that… / Sembrerebbe che… (congiuntivo imperfeito); DE: Es scheint mir, als ob…wäre; JP: 〜のではないかと思います
    EN: [
      "I think travelling broadens the mind.",
      "I think that staying home can be just as enriching as going abroad.",
      "I think travel changes you as a person because it forces you to face the unfamiliar.",
      "Even though staying home is comfortable and cheap, I still think everyone should travel at least once.",
      "It seems to me that what matters most is not where you go, but how open you are to new experiences."
    ],
    IT: [
      "Penso che viaggiare allarghi gli orizzonti.",
      "Penso che restare a casa possa essere altrettanto arricchente che andare all'estero.",
      "Penso che viaggiare cambi come persona perché ti costringe ad affrontare l'ignoto.",
      "Anche se restare a casa è comodo ed economico, penso comunque che tutti debbano viaggiare almeno una volta.",
      "Sembrerebbe che ciò che contasse di più non fosse il posto in cui si va, ma quanto si fosse aperti alle nuove esperienze."
    ],
    DE: [
      "Ich denke, dass Reisen den Horizont erweitert.",
      "Ich glaube, dass Zuhausebleiben genauso bereichernd sein kann wie ins Ausland zu fahren.",
      "Ich denke, dass Reisen einen als Person verändert, weil es einen zwingt, sich dem Unbekannten zu stellen.",
      "Auch wenn Zuhausebleiben bequem und günstig ist, glaube ich trotzdem, dass jeder mindestens einmal reisen sollte.",
      "Es scheint mir, als ob das Wichtigste nicht wäre, wohin man reist, sondern wie offen man für neue Erfahrungen wäre."
    ],
    JP: [
      "旅は視野を広げると思います。(Tabi wa shiya o hirogeru to omoimasu.)",
      "家にいることも海外に行くことと同じくらい豊かな経験になりえると思っています。(Ie ni iru koto mo kaigai ni iku koto to onaji kurai yutaka na keiken ni narieru to omotte imasu.)",
      "旅は人を変えると思います。なぜなら未知のものに向き合うことを強いられるからです。(Tabi wa hito o kaeru to omoimasu. Nazenara michi no mono ni mukiau koto o shiirarereru kara desu.)",
      "家にいることが快適で費用もかからないとしても、やはり一度は旅をするべきだと思います。(Ie ni iru koto ga kaiteki de hiyō mo kakaranai to shite mo, yahari ichido wa tabi o suru beki da to omoimasu.)",
      "大切なのは行き先よりも、どれだけ新しい経験に心を開いているかではないかと思います。(Taisetsu na no wa yukisaki yori mo, dore dake atarashii keiken ni kokoro o hiraite iru ka de wa nai ka to omoimasu.)"
    ]
  },
  27: {
    // Tema: opinião sobre uma mudança no estilo de vida
    // L1: opinião simples — I think… / Penso che… + indicativo / Ich denke, dass… / 〜と思います
    // L2: opinião com subordinada — I think that… (cláusula); IT: congiuntivo presente; DE: Ich glaube, dass…; JP: 〜と思っています
    // L3: opinião com razão — I think…because… / perché / weil (verbo no fim) / なぜなら〜から
    // L4: concessão — Even though…, I still think… / Anche se…, penso comunque che… (congiuntivo); DE: Auch wenn…; JP: 〜ても、やはり〜と思います
    // L5: hedging formal — It seems to me that… / Sembrerebbe che… (congiuntivo imperfeito); DE: Es scheint mir, als ob…wäre; JP: 〜のではないかと思います
    EN: [
      "I think small habits make a big difference.",
      "I think that changing your daily routine is harder than it looks.",
      "I think sleeping earlier is a good first step because rest affects everything else in your day.",
      "Even though changing habits takes time and effort, I still think anyone can do it with the right mindset.",
      "It seems to me that lasting lifestyle change comes not from willpower alone, but from building a supportive environment."
    ],
    IT: [
      "Penso che le piccole abitudini facciano una grande differenza.",
      "Penso che cambiare la propria routine quotidiana sia più difficile di quanto sembri.",
      "Penso che dormire prima sia un buon primo passo perché il riposo influenza tutto il resto della giornata.",
      "Anche se cambiare abitudini richiede tempo e fatica, penso comunque che chiunque possa farcela con la mentalità giusta.",
      "Avrei l'impressione che un cambiamento duraturo nello stile di vita non dipendesse solo dalla forza di volontà, ma dal creare un ambiente favorevole."
    ],
    DE: [
      "Ich denke, dass kleine Gewohnheiten einen großen Unterschied machen.",
      "Ich glaube, dass die eigene Tagesroutine zu verändern schwieriger ist, als es aussieht.",
      "Ich denke, dass früher schlafen ein guter erster Schritt ist, weil Erholung alles andere im Tag beeinflusst.",
      "Auch wenn das Ändern von Gewohnheiten Zeit und Mühe kostet, glaube ich trotzdem, dass es jeder mit der richtigen Einstellung schaffen kann.",
      "Es scheint mir, als ob dauerhafter Lebenswandel nicht allein von der Willenskraft abhinge, sondern davon, eine unterstützende Umgebung zu schaffen."
    ],
    JP: [
      "小さな習慣が大きな違いを生むと思います。(Chiisana shūkan ga ōkina chigai o umu to omoimasu.)",
      "日常のルーティンを変えることは見た目より難しいと思っています。(Nichijō no rūtin o kaeru koto wa mita me yori muzukashii to omotte imasu.)",
      "早めに寝ることは良い第一歩だと思います。なぜなら休息が一日のほかのすべてに影響するからです。(Hayame ni neru koto wa yoi daiippo da to omoimasu. Nazenara kyūsoku ga ichinichi no hoka no subete ni eikyō suru kara desu.)",
      "習慣を変えるには時間と努力がかかるとしても、やはり正しい考え方があれば誰でもできると思います。(Shūkan o kaeru ni wa jikan to doryoku ga kakaru to shite mo, yahari tadashii kangaekata ga areba dare demo dekiru to omoimasu.)",
      "長続きするライフスタイルの変化は意志の力だけでなく、支えになる環境を作ることから生まれるのではないかと思います。(Nagatsuzuki suru raifusutairu no henka wa ishi no chikara dake de naku, sasae ni naru kankyō o tsukuru koto kara umareru no de wa nai ka to omoimasu.)"
    ]
  },

  // --- MÓDULO 8: CAUSA/CONSEQUÊNCIA ---
  28: {
    // Tema: por que não dormi bem (causa e efeito do sono)
    // L1: causa simples — because / perché / weil (verbo no fim) / 〜から
    // L2: consequência — so…that / così…che / so…dass / 〜ので
    // L3: causa + resultado — …, which is why… / …, per cui… / …, weshalb… / …、だから…
    // L4: causa dupla — not only…but also… / non solo…ma anche… / nicht nur…sondern auch… / 〜だけでなく〜も
    // L5: causa encadeada — One thing leads to another… / A forza di… / Je mehr…, desto mehr… / 〜すれば〜するほど〜
    EN: [
      "I slept badly last night because I drank coffee too late in the evening.",
      "I was so tired this morning that I could barely get out of bed.",
      "I had been staring at my phone for hours before bed, which is why I couldn't fall asleep.",
      "Last night I not only went to bed late, but also kept waking up every hour.",
      "One thing leads to another — I stayed up scrolling, so I barely slept, and now I can't focus on anything."
    ],
    IT: [
      "Ho dormito male stanotte perché ho bevuto il caffè troppo tardi.",
      "Stamattina ero così stanco che riuscivo a malapena ad alzarmi.",
      "Ho fissato lo schermo per ore prima di dormire, per cui non riuscivo ad addormentarmi.",
      "Ieri sera non solo sono andato a letto tardi, ma mi sono svegliato anche ogni ora.",
      "A forza di restare sveglio a scorrere il telefono, finisce che non dormo e non riesco a combinare niente il giorno dopo."
    ],
    DE: [
      "Ich habe letzte Nacht schlecht geschlafen, weil ich abends zu spät Kaffee getrunken habe.",
      "Heute Morgen war ich so müde, dass ich kaum aufstehen konnte.",
      "Ich hatte stundenlang aufs Handy gestarrt, bevor ich ins Bett gegangen bin, weshalb ich nicht einschlafen konnte.",
      "Gestern Nacht bin ich nicht nur spät ins Bett gegangen, sondern auch jede Stunde aufgewacht.",
      "Je mehr ich abends auf dem Handy scrolle, desto schlechter schlafe ich und desto schwerer kann ich mich am nächsten Tag konzentrieren."
    ],
    JP: [
      "夜遅くにコーヒーを飲んだから、昨夜はよく眠れませんでした。(Yoru osoku ni kōhī o nonda kara, sakuya wa yoku nemurenakatta.)",
      "今朝はひどく眠かったので、ベッドからほとんど出られませんでした。(Kesa wa hidoku nemukatta node, beddo kara hotondo deraremasen deshita.)",
      "寝る前に何時間もスマホの画面を見ていた、だからなかなか眠れませんでした。(Neru mae ni nanjikan mo sumaho no gamen o mite ita, dakara nakanaka nemurenakatta.)",
      "昨夜は寝るのが遅かっただけでなく、夜中に目が覚めることも何度かありました。(Sakuya wa neru no ga osokatta dake de naku, yonaka ni me ga sameru koto mo nandoka arimashita.)",
      "スマホを見れば見るほど眠れなくなり、眠れなければ翌朝がつらくなります。(Sumaho o mireba miru hodo nemurenaku nari, nemurenakereba yokuasa ga tsuraku narimasu.)"
    ]
  },
  29: {
    // Tema: por que mudei um hábito
    // L1: causa simples — because / perché / weil (verbo no fim) / 〜から
    // L2: consequência — so…that / così…che / so…dass / 〜ので
    // L3: causa + resultado — …, which is why… / …, per cui… / …, weshalb… / …、だから…
    // L4: causa dupla — not only…but also… / non solo…ma anche… / nicht nur…sondern auch… / 〜だけでなく〜も
    // L5: causa encadeada — One thing leads to another… / A forza di… / Je mehr…, desto mehr… / 〜すれば〜するほど〜
    EN: [
      "I stopped eating fast food because I wanted to feel healthier.",
      "I felt so sluggish every afternoon that I decided to cut out sugar at lunch.",
      "My energy was always crashing by midday, which is why I started preparing meals at home.",
      "I not only changed what I eat, but also started going to bed an hour earlier.",
      "One thing leads to another — once I started sleeping better, I had more energy to exercise, and gradually everything else fell into place."
    ],
    IT: [
      "Ho smesso di mangiare cibo spazzatura perché volevo sentirmi più in forma.",
      "Ogni pomeriggio mi sentivo così spossato che ho deciso di eliminare lo zucchero a pranzo.",
      "La mia energia crollava sempre verso mezzogiorno, per cui ho iniziato a prepararmi i pasti a casa.",
      "Non solo ho cambiato quello che mangio, ma ho anche iniziato ad andare a letto un'ora prima.",
      "A forza di dormire meglio e mangiare in modo più sano, finisce che hai voglia di muoverti e tutto il resto segue da solo."
    ],
    DE: [
      "Ich habe aufgehört, Fast Food zu essen, weil ich mich gesünder fühlen wollte.",
      "Ich war jeden Nachmittag so schlapp, dass ich beschlossen habe, mittags keinen Zucker mehr zu essen.",
      "Meine Energie brach immer gegen Mittag ein, weshalb ich begann, meine Mahlzeiten zu Hause vorzubereiten.",
      "Ich habe nicht nur meine Ernährung umgestellt, sondern auch angefangen, eine Stunde früher schlafen zu gehen.",
      "Je gesünder ich aß, desto mehr Energie hatte ich, und desto leichter fiel es mir, auch andere Gewohnheiten zu ändern."
    ],
    JP: [
      "もっと健康になりたかったから、ジャンクフードをやめました。(Motto kenkō ni naritakatta kara, jankufūdo o yamemashita.)",
      "毎日午後になるとひどく眠くなるので、昼食後の砂糖をやめることにしました。(Mainichi gogo ni naru to hidoku nemuku naru node, chūshoku go no satō o yameru koto ni shimashita.)",
      "いつも昼ごろにエネルギーが切れてしまう、だから自炊を始めることにしました。(Itsumo hirogoro ni enerugī ga kirete shimau, dakara jisui o hajimeru koto ni shimashita.)",
      "食事を変えただけでなく、毎晩一時間早く寝るようにもしました。(Shokuji o kaeta dake de naku, maiban ichijikan hayaku neru yō ni mo shimashita.)",
      "よく眠れば眠るほど体が軽くなり、体が軽くなれば運動も続けやすくなります。(Yoku nemureba nemuru hodo karada ga karuku nari, karada ga karuku nareba undō mo tsuzukeyasuku narimasu.)"
    ]
  },
  30: {
    // Tema: efeito de uma decisão no trabalho/estudos
    // L1: causa simples — because / perché / weil (verbo no fim) / 〜から
    // L2: consequência — so…that / così…che / so…dass / 〜ので
    // L3: causa + resultado — …, which is why… / …, per cui… / …, weshalb… / …、だから…
    // L4: causa dupla — not only…but also… / non solo…ma anche… / nicht nur…sondern auch… / 〜だけでなく〜も
    // L5: causa encadeada — One thing leads to another… / A forza di… / Je mehr…, desto mehr… / 〜すれば〜するほど〜
    EN: [
      "I started studying in the mornings because I concentrate better before midday.",
      "I took on an extra project at work, so I had so much to manage that I had to reorganise my whole schedule.",
      "I decided to study a little every day rather than cramming, which is why my test results have improved steadily.",
      "I not only set aside time to review my notes each evening, but also started recording short voice memos to reinforce what I had learned.",
      "One thing leads to another — the more consistently I studied, the more confident I became, and that confidence made me want to study even more."
    ],
    IT: [
      "Ho iniziato a studiare la mattina perché mi concentro meglio prima di mezzogiorno.",
      "Ho preso un progetto in più al lavoro, così avevo così tanto da gestire che ho dovuto riorganizzare tutto l'orario.",
      "Ho deciso di studiare un po' ogni giorno invece di fare tutto all'ultimo, per cui i miei risultati sono migliorati con costanza.",
      "Non solo ho riservato del tempo per ripassare gli appunti la sera, ma ho anche iniziato a registrare dei brevi memo vocali per fissare meglio quello che avevo imparato.",
      "A forza di studiare con regolarità, finisce che acquisti fiducia in te stesso, e quella fiducia ti spinge a fare ancora di più."
    ],
    DE: [
      "Ich habe angefangen, morgens zu lernen, weil ich mich vor dem Mittag besser konzentrieren kann.",
      "Ich habe bei der Arbeit ein zusätzliches Projekt übernommen, so dass ich so viel zu managen hatte, dass ich meinen ganzen Zeitplan neu organisieren musste.",
      "Ich habe mich entschieden, jeden Tag ein bisschen zu lernen statt alles auf einmal, weshalb meine Testergebnisse sich stetig verbessert haben.",
      "Ich habe nicht nur jeden Abend Zeit zum Wiederholen meiner Notizen eingeplant, sondern auch kurze Sprachmemos aufgenommen, um das Gelernte zu festigen.",
      "Je regelmäßiger ich lernte, desto selbstsicherer wurde ich, und desto mehr Lust hatte ich, noch mehr zu lernen."
    ],
    JP: [
      "午前中の方が集中できるから、朝に勉強するようにしました。(Gozenchū no hō ga shūchū dekiru kara, asa ni benkyō suru yō ni shimashita.)",
      "仕事で追加のプロジェクトを引き受けたので、こなすことが多くなりスケジュール全体を見直さなければなりませんでした。(Shigoto de tsuika no purojekuto o hikiuketa node, konasu koto ga ōku nari sukejūru zentai o minaosanakereba narimasen deshita.)",
      "一夜漬けをやめて毎日少しずつ勉強することにした、だからテストの結果が少しずつ上がっています。(Ichiyazuke o yamete mainichi sukoshi zutsu benkyō suru koto ni shita, dakara tesuto no kekka ga sukoshi zutsu agatte imasu.)",
      "毎晩ノートを見直す時間を作っただけでなく、覚えたことを定着させるために短い音声メモも録るようにしました。(Maiban nōto o minaosu jikan o tsukutta dake de naku, oboeta koto o teichaku saseru tame ni mijikai onsei memo mo toru yō ni shimashita.)",
      "コツコツ勉強すればするほど自信がつき、自信がつけばつくほどもっと学びたくなります。(Kotsukotsu benkyō sureba suru hodo jishin ga tsuki, jishin ga tsukeba tsuku hodo motto manabitaku narimasu.)"
    ]
  },
  31: {
    // Tema: causa e efeito de uma emoção
    // L1: causa simples — because / perché / weil (verbo no fim) / 〜から
    // L2: consequência — so…that / così…che / so…dass / 〜ので
    // L3: causa + resultado — …, which is why… / …, per cui… / …, weshalb… / …、だから…
    // L4: causa dupla — not only…but also… / non solo…ma anche… / nicht nur…sondern auch… / 〜だけでなく〜も
    // L5: causa encadeada — One thing leads to another… / A forza di… / Je mehr…, desto mehr… / 〜すれば〜するほど〜
    EN: [
      "I felt anxious because I had an important presentation the next morning.",
      "I was so nervous before the interview that I could barely eat anything.",
      "A close friend moved abroad last month, which is why I have been feeling a bit lonely lately.",
      "I not only felt relieved when the project was finally done, but also deeply proud of what I had managed to pull off.",
      "One thing leads to another — once I started sharing my progress with others, I felt more motivated, and that motivation made the whole experience far more enjoyable."
    ],
    IT: [
      "Mi sentivo ansioso perché il mattino dopo avevo una presentazione importante.",
      "Ero così nervoso prima del colloquio che riuscivo a malapena a mangiare qualcosa.",
      "Un caro amico si è trasferito all'estero il mese scorso, per cui ultimamente mi sento un po' solo.",
      "Non solo mi sono sentito sollevato quando il progetto era finalmente concluso, ma anche profondamente orgoglioso di quello che ero riuscito a fare.",
      "A forza di condividere i miei progressi con gli altri, finisce che ti senti più motivato, e quella motivazione rende tutto molto più piacevole."
    ],
    DE: [
      "Ich war nervös, weil ich am nächsten Morgen eine wichtige Präsentation hatte.",
      "Ich war vor dem Vorstellungsgespräch so aufgeregt, dass ich kaum etwas essen konnte.",
      "Ein enger Freund ist letzten Monat ins Ausland gezogen, weshalb ich mich in letzter Zeit etwas einsam fühle.",
      "Ich habe mich nicht nur erleichtert gefühlt, als das Projekt endlich fertig war, sondern auch tief stolz auf das, was ich geschafft hatte.",
      "Je mehr ich meinen Fortschritt mit anderen teilte, desto motivierter fühlte ich mich, und desto mehr Freude machte mir das Ganze."
    ],
    JP: [
      "翌朝に大事な発表があったから、不安でいっぱいでした。(Yokuasa ni daiji na happyō ga atta kara, fuan de ippai deshita.)",
      "面接の前はとても緊張していたので、ほとんど何も食べられませんでした。(Mensetsu no mae wa totemo kinchō shite ita node, hotondo nani mo taberaremasen deshita.)",
      "先月、親しい友人が海外に引っ越してしまった、だから最近少し寂しく感じています。(Sengetsu, shitashii yūjin ga kaigai ni hikkoshite shimatta, dakara saikin sukoshi sabishiku kanjite imasu.)",
      "プロジェクトがようやく終わったとき、ほっとしただけでなく、自分がやり遂げたことに深い誇りも感じました。(Purojekuto ga yōyaku owatta toki, hotto shita dake de naku, jibun ga yaritogeta koto ni fukai hokori mo kanjimashita.)",
      "自分の成長を人と分かち合えば分かち合うほどやる気が高まり、やる気が高まれば高まるほど毎日が楽しくなります。(Jibun no seichō o hito to wakachiaeba wakachiau hodo yaruki ga takamari, yaruki ga takamareba takamaru hodo mainichi ga tanoshiku narimasu.)"
    ]
  },

  // --- MÓDULO 9: CONTRASTE ---
  // Ladder:
  // L1: contraste simples — but / ma / aber / 〜が
  // L2: contraste enfático — however / tuttavia / jedoch / しかし
  // L3: concessão — even though / anche se / obwohl (verbo no fim) / 〜のに
  // L4: contraste inesperado — despite / nonostante + subst./infinito / trotz + Genitiv / 〜にもかかわらず
  // L5: contraste nativo sofisticado — Having said that… / eppure… / Und dennoch… + Konjunktiv II / 〜とはいえ、〜てしまいます
  32: {
    // Tema: duas coisas que parecem opostas mas coexistem (personalidade)
    EN: [
      "I am quite shy, but I love meeting new people.",
      "I tend to overthink everything; however, I also know how to act decisively when it matters.",
      "Even though I can be quite harsh on myself, I genuinely try to be kind to everyone around me.",
      "Despite my natural tendency towards pessimism, I manage to stay hopeful about the future.",
      "I know I can be stubborn at times. Having said that, I think that same stubbornness is what keeps me going."
    ],
    IT: [
      "Sono abbastanza timido, ma adoro conoscere gente nuova.",
      "Tendo a rimuginare su tutto; tuttavia, so anche agire con decisione quando conta.",
      "Anche se sono molto severo con me stesso, cerco sinceramente di essere gentile con chi mi sta intorno.",
      "Nonostante la mia tendenza al pessimismo, riesco a restare fiducioso riguardo al futuro.",
      "So di poter essere testardo a volte, eppure è proprio quella testardaggine a farmi andare avanti."
    ],
    DE: [
      "Ich bin ziemlich schüchtern, aber ich liebe es, neue Menschen kennenzulernen.",
      "Ich neige dazu, alles zu überdenken; jedoch weiß ich auch, wie man entschlossen handelt, wenn es darauf ankommt.",
      "Obwohl ich sehr streng mit mir selbst sein kann, versuche ich aufrichtig, zu allen um mich herum freundlich zu sein.",
      "Trotz meiner natürlichen Neigung zum Pessimismus gelingt es mir, zuversichtlich in die Zukunft zu blicken.",
      "Ich weiß, dass ich manchmal stur sein kann. Und dennoch wäre es wohl genau diese Sturheit, die mich weitermachen lässt."
    ],
    JP: [
      "わたしはかなり内気ですが、新しい人に会うのが大好きです。(Watashi wa kanari uchiki desu ga, atarashii hito ni au no ga daisuki desu.)",
      "何でも考えすぎてしまいます。しかし、いざというときは素早く決断することもできます。(Nandemo kangaesugite shimaimasu. Shikashi, iza to iu toki wa subayaku ketsudan suru koto mo dekimasu.)",
      "自分に対してとても厳しいのに、周りの人にはできるだけ優しくしようとしています。(Jibun ni taishite totemo kibishii noni, mawari no hito ni wa dekiru dake yasashiku shiyō to shite imasu.)",
      "悲観的になりやすい性格にもかかわらず、未来に対して希望を持ち続けることができています。(Hikanteki ni nari yasui seikaku ni mo kakawarazu, mirai ni taishite kibō o mochitsuzukeru koto ga dekite imasu.)",
      "頑固な一面があるとはいえ、その粘り強さのおかげで諦めずに続けられてしまいます。(Ganko na ichimen ga aru to wa ie, sono nebarizuyosa no okage de akiramezu ni tsuzukerarete shimaimasu.)"
    ]
  },
  33: {
    // Tema: uma expectativa vs. a realidade vivida
    EN: [
      "I expected it to be easy, but the reality was quite different.",
      "I thought I would feel relieved; however, I mostly felt exhausted.",
      "Even though I had prepared carefully, things did not go the way I had imagined.",
      "Despite months of anticipation, the experience felt surprisingly ordinary at first.",
      "I had pictured it as a turning point. Having said that, the real change came much more quietly than I expected."
    ],
    IT: [
      "Mi aspettavo che fosse facile, ma la realtà era molto diversa.",
      "Pensavo che mi sarei sentito sollevato; tuttavia, mi sono sentito soprattutto esausto.",
      "Anche se mi ero preparato con cura, le cose non sono andate come immaginavo.",
      "Nonostante mesi di attesa, l'esperienza sembrava sorprendentemente ordinaria all'inizio.",
      "L'avevo immaginata come un punto di svolta, eppure il vero cambiamento è arrivato molto più piano di quanto mi aspettassi."
    ],
    DE: [
      "Ich hatte erwartet, dass es einfach sein würde, aber die Realität war ganz anders.",
      "Ich dachte, ich würde Erleichterung fühlen; jedoch fühlte ich mich vor allem erschöpft.",
      "Obwohl ich mich sorgfältig vorbereitet hatte, liefen die Dinge nicht so, wie ich es mir vorgestellt hatte.",
      "Trotz monatelanger Vorfreude wirkte das Erlebnis anfangs überraschend gewöhnlich.",
      "Ich hatte es mir als Wendepunkt vorgestellt. Und dennoch wäre die eigentliche Veränderung viel leiser gekommen, als ich erwartet hatte."
    ],
    JP: [
      "簡単だと思っていましたが、現実はずいぶん違いました。(Kantan da to omotte imashita ga, genjitsu wa zuibun chigaimashita.)",
      "ほっとするかと思ったのですが、しかし実際にはひどく疲れてしまいました。(Hotto suru ka to omotta no desu ga, shikashi jissai ni wa hidoku tsukarete shimaimashita.)",
      "しっかり準備したのに、思い描いていたようにはうまくいきませんでした。(Shikkari junbi shita noni, omoiegaite ita yō ni wa umaku ikimasen deshita.)",
      "何ヶ月も楽しみにしていたにもかかわらず、最初はその体験が意外なほど普通に感じられました。(Nankagetsu mo tanoshimi ni shite ita ni mo kakawarazu, saisho wa sono taiken ga igai na hodo futsū ni kanjiraremashita.)",
      "ターニングポイントになると思っていたとはいえ、本当の変化はずっと静かなかたちでやってきてしまいました。(Tāningu pointo ni naru to omotte ita to wa ie, hontō no henka wa zutto shizuka na katachi de yatte kite shimaimashita.)"
    ]
  },
  34: {
    // Tema: querer fazer algo vs. não conseguir (intenção vs. ação)
    EN: [
      "I want to exercise every day, but I keep putting it off.",
      "I intend to go to bed earlier; however, I always end up staying up too late.",
      "Even though I tell myself to stop scrolling, I reach for my phone without thinking.",
      "Despite my genuine desire to write more, weeks pass without a single line.",
      "I know exactly what I should do. Having said that, knowing and actually doing it are two very different things."
    ],
    IT: [
      "Voglio fare esercizio ogni giorno, ma continuo a rimandare.",
      "Ho intenzione di andare a letto prima; tuttavia, finisco sempre per stare sveglio troppo tardi.",
      "Anche se mi dico di smettere di scorrere il telefono, lo afferro senza nemmeno pensarci.",
      "Nonostante il desiderio sincero di scrivere di più, passano settimane senza una riga.",
      "So esattamente cosa dovrei fare, eppure sapere e farlo davvero sono due cose molto diverse."
    ],
    DE: [
      "Ich möchte jeden Tag Sport treiben, aber ich schiebe es immer wieder auf.",
      "Ich habe vor, früher ins Bett zu gehen; jedoch bleibe ich immer zu lange auf.",
      "Obwohl ich eigentlich mit dem Scrollen aufhören sollte, greife ich gedankenlos nach meinem Handy.",
      "Trotz meines aufrichtigen Wunsches, mehr zu schreiben, vergehen Wochen ohne eine einzige Zeile.",
      "Ich weiß genau, was ich tun sollte. Und dennoch wären Wissen und tatsächliches Handeln zwei sehr verschiedene Dinge."
    ],
    JP: [
      "毎日運動したいのですが、ついつい後回しにしてしまいます。(Mainichi undō shitai no desu ga, tsuitsui atomawashi ni shite shimaimasu.)",
      "早く寝るつもりなのですが、しかしいつも夜更かしをしてしまいます。(Hayaku neru tsumori na no desu ga, shikashi itsumo yofukashi o shite shimaimasu.)",
      "スマホを見るのをやめようと思っているのに、考えなしに手が伸びてしまいます。(Sumaho o miru no o yameyō to omotte iru noni, kangaenashi ni te ga nobite shimaimasu.)",
      "もっと書きたいという本物の気持ちにもかかわらず、一行も書かないまま何週間も過ぎてしまいます。(Motto kakitai to iu honmono no kimochi ni mo kakawarazu, ichigyo mo kakanai mama nanshūkan mo sugite shimaimasu.)",
      "何をすべきかはわかっているとはいえ、わかることと実際にやることは全然別のことになってしまいます。(Nani o subeki ka wa wakatte iru to wa ie, wakaru koto to jissai ni yaru koto wa zenzen betsu no koto ni natte shimaimasu.)"
    ]
  },
  35: {
    // Tema: uma contradição que percebi em mim mesmo
    EN: [
      "I value silence, but I feel uneasy when things go too quiet.",
      "I say I need alone time; however, loneliness hits me harder than I like to admit.",
      "Even though I claim not to care what others think, I notice how much their words affect me.",
      "Despite considering myself patient, I lose my temper over the smallest inconveniences.",
      "I genuinely believe that progress matters more than perfection. That said, I still find myself paralysed by the fear of getting things wrong."
    ],
    IT: [
      "Apprezzo il silenzio, ma mi sento a disagio quando le cose si fanno troppo silenziose.",
      "Dico di aver bisogno di stare da solo; tuttavia, la solitudine mi pesa più di quanto voglia ammettere.",
      "Anche se dico di non curarmi del giudizio degli altri, noto quanto le loro parole mi influenzino.",
      "Nonostante il considerarmi una persona paziente, perdo la calma per le cose più banali.",
      "Credo sinceramente che i progressi contino più della perfezione, eppure mi ritrovo ancora bloccato dalla paura di sbagliare."
    ],
    DE: [
      "Ich schätze die Stille, aber ich fühle mich unwohl, wenn es zu still wird.",
      "Ich sage, ich brauche Zeit für mich; jedoch trifft mich Einsamkeit härter, als ich zugeben möchte.",
      "Obwohl ich behaupte, mir nichts aus der Meinung anderer zu machen, merke ich, wie sehr mich ihre Worte beeinflussen.",
      "Trotz meines Selbstbildes als geduldiger Mensch verliere ich wegen der kleinsten Unannehmlichkeiten die Beherrschung.",
      "Ich glaube wirklich, dass Fortschritt wichtiger ist als Perfektion. Und dennoch würde ich mich immer noch von der Angst lähmen lassen, Fehler zu machen."
    ],
    JP: [
      "静けさを大切にしていますが、あまりに静かになると落ち着かなくなります。(Shizukesa o taisetsu ni shite imasu ga, amari ni shizuka ni naru to ochitsukanaku narimasu.)",
      "一人の時間が必要だと言っているのですが、しかし孤独感は思っている以上に堪えてしまいます。(Hitori no jikan ga hitsuyō da to itte iru no desu ga, shikashi kodokukan wa omotte iru ijō ni kotaete shimaimasu.)",
      "人の目を気にしないと言っているのに、他人の言葉がこんなに影響するとは気づいていませんでした。(Hito no me o ki ni shinai to itte iru noni, tanin no kotoba ga konna ni eikyō suru to wa kidzuite imasen deshita.)",
      "自分は忍耐強いと思っているにもかかわらず、些細なことですぐに苛立ってしまいます。(Jibun wa nintaizuyoi to omotte iru ni mo kakawarazu, sasai na koto de sugu ni iradatte shimaimasu.)",
      "完璧よりも成長が大切だと信じているとはいえ、失敗への恐れで動けなくなってしまいます。(Kanpeki yori mo seichō ga taisetsu da to shinjite iru to wa ie, shippai e no osore de ugokenaku natte shimaimasu.)"
    ]
  },

  // --- MÓDULO 10: HIPÓTESES ---
  36: {
    EN: [
      "If I have free time this weekend, I will go for a long walk.",
      "If I had more free time, I would read a lot more.",
      "If I had had more free time last year, I would have learned a new instrument.",
      "If I had more free time, I would study every day, which would mean I could reach fluency much faster.",
      "I sometimes wonder what would have happened if I had chosen a job with shorter hours."
    ],
    IT: [
      "Se ho tempo libero questo fine settimana, farò una lunga passeggiata.",
      "Se avessi più tempo libero, leggerei molto di più.",
      "Se avessi avuto più tempo libero l'anno scorso, avrei imparato uno strumento musicale.",
      "Se avessi più tempo libero, studierei ogni giorno, il che significherebbe raggiungere la fluidità molto prima.",
      "Ogni tanto mi chiedo cosa sarebbe successo se avessi scelto un lavoro con orari più brevi."
    ],
    DE: [
      "Wenn ich dieses Wochenende Zeit habe, werde ich einen langen Spaziergang machen.",
      "Wenn ich mehr Freizeit hätte, würde ich viel mehr lesen.",
      "Wenn ich letztes Jahr mehr Freizeit gehabt hätte, hätte ich ein neues Instrument gelernt.",
      "Wenn ich mehr Freizeit hätte, würde ich jeden Tag lernen, was bedeuten würde, dass ich viel schneller fließend sprechen könnte.",
      "Ich frage mich manchmal, was passiert wäre, wenn ich einen Job mit kürzeren Arbeitszeiten gewählt hätte."
    ],
    JP: [
      "今週末に時間があれば、長い散歩をします。(Konshūmatsu ni jikan ga areba, nagai sanpo o shimasu.)",
      "もっと自由な時間があれば、もっとたくさん本が読めるのに。(Motto jiyū na jikan ga areba, motto takusan hon ga yomeru noni.)",
      "去年もっと時間があったら、新しい楽器を習っていたでしょう。(Kyonen motto jikan ga attara, atarashii gakki o naratte ita deshō.)",
      "自由な時間があれば毎日勉強できるし、そうなれば流暢になるのもずっと早くなるはずです。(Jiyū na jikan ga areba mainichi benkyō dekiru shi, sō nareba ryūchō ni naru no mo zutto hayaku naru hazu desu.)",
      "もっと短い時間の仕事を選んでいたら、どうなっていたかもしれないと、たまに思います。(Motto mijikai jikan no shigoto o erande ita ra, dō natte ita ka mo shirenai to, tama ni omoimasu.)"
    ]
  },
  37: {
    EN: [
      "If I move abroad next year, I will take a language course immediately.",
      "If I lived in another country, I would pick up the language much faster.",
      "If I had moved abroad five years ago, I would have become truly bilingual by now.",
      "If I lived abroad, I would immerse myself in the culture every day, which would mean my accent would disappear quickly.",
      "I sometimes wonder what would have happened if I had taken that job offer in a foreign city."
    ],
    IT: [
      "Se mi trasferisco all'estero il prossimo anno, farò subito un corso di lingua.",
      "Se vivessi in un altro paese, imparerei la lingua molto più in fretta.",
      "Se mi fossi trasferito all'estero cinque anni fa, sarei diventato davvero bilingue.",
      "Se vivessi all'estero, mi immergerei nella cultura ogni giorno, il che significherebbe perdere l'accento in poco tempo.",
      "Ogni tanto mi chiedo cosa sarebbe successo se avessi accettato quell'offerta di lavoro in un'altra città."
    ],
    DE: [
      "Wenn ich nächstes Jahr ins Ausland ziehe, werde ich sofort einen Sprachkurs belegen.",
      "Wenn ich in einem anderen Land leben würde, würde ich die Sprache viel schneller lernen.",
      "Wenn ich vor fünf Jahren ins Ausland gezogen wäre, wäre ich inzwischen wirklich zweisprachig geworden.",
      "Wenn ich im Ausland lebte, würde ich mich jeden Tag in die Kultur vertiefen, was bedeuten würde, dass mein Akzent schnell verschwinden würde.",
      "Ich frage mich manchmal, was passiert wäre, wenn ich dieses Jobangebot in einer anderen Stadt angenommen hätte."
    ],
    JP: [
      "来年海外に移住すれば、すぐに語学コースに通います。(Rainen kaigai ni ijū sureba, sugu ni gogaku kōsu ni kayoimasu.)",
      "別の国に住んでいれば、もっと速く言語を習得できるのに。(Betsu no kuni ni sunde ireba, motto hayaku gengo o shūtoku dekiru noni.)",
      "５年前に海外に引っ越していたら、今頃本当にバイリンガルになっていたでしょう。(Gonenmae ni kaigai ni hikkoshite itara, imagoro hontō ni bairingaru ni natte ita deshō.)",
      "海外に住めば毎日文化に浸れるし、そうなればアクセントもすぐに消えるはずです。(Kaigai ni sumeba mainichi bunka ni hitareru shi, sō nareba akusento mo sugu ni kieru hazu desu.)",
      "あの外国の街での仕事のオファーを受けていたら、どうなっていたかもしれないと、たまに思います。(Ano gaikoku no machi de no shigoto no ofā o ukete itara, dō natte ita ka mo shirenai to, tama ni omoimasu.)"
    ]
  },
  38: {
    EN: [
      "If I choose a different path, I will face new challenges.",
      "If I had made a different choice, I would be living a very different life.",
      "If I had studied something else at university, I would have ended up in a completely different career.",
      "If I had taken that opportunity, I would have gained experience abroad, which would mean my life today would look entirely different.",
      "I sometimes wonder what would have happened if I had followed my childhood dream instead."
    ],
    IT: [
      "Se scelgo una strada diversa, dovrò affrontare nuove sfide.",
      "Se facessi una scelta diversa, vivrei una vita molto diversa.",
      "Se avessi studiato qualcos'altro all'università, avrei finito per fare un lavoro completamente diverso.",
      "Se avessi colto quell'opportunità, avrei fatto esperienza all'estero, il che significherebbe che la mia vita oggi sarebbe del tutto diversa.",
      "Ogni tanto mi chiedo cosa sarebbe successo se avessi seguito il sogno che avevo da bambino."
    ],
    DE: [
      "Wenn ich einen anderen Weg einschlage, werde ich neuen Herausforderungen begegnen.",
      "Wenn ich eine andere Entscheidung träfe, würde ich ein ganz anderes Leben führen.",
      "Wenn ich an der Universität etwas anderes studiert hätte, hätte ich eine völlig andere Karriere eingeschlagen.",
      "Wenn ich diese Chance ergriffen hätte, hätte ich Auslandserfahrung gesammelt, was bedeuten würde, dass mein Leben heute ganz anders aussähe.",
      "Ich frage mich manchmal, was passiert wäre, wenn ich meinem Kindheitstraum gefolgt wäre."
    ],
    JP: [
      "別の道を選べば、新しい困難に直面します。(Betsu no michi o erabeba, atarashii konnan ni chokumen shimasu.)",
      "別の選択をしていれば、まったく違う人生を送っているのに。(Betsu no sentaku o shite ireba, mattaku chigau jinsei o okutte iru noni.)",
      "大学で別のことを勉強していたら、まったく違う職業に就いていたでしょう。(Daigaku de betsu no koto o benkyō shite itara, mattaku chigau shokugyō ni tsuite ita deshō.)",
      "あのチャンスをつかんでいれば海外経験も積めたし、そうなれば今の生活はまったく別のものになっていたはずです。(Ano chansu o tsukande ireba kaigai keiken mo tsumeta shi, sō nareba ima no seikatsu wa mattaku betsu no mono ni natte ita hazu desu.)",
      "子どもの頃の夢を追いかけていたら、どうなっていたかもしれないと、たまに思います。(Kodomo no koro no yume o oikakete itara, dō natte ita ka mo shirenai to, tama ni omoimasu.)"
    ]
  },
  39: {
    EN: [
      "If I become more patient, I will handle stress much better.",
      "If I were a different kind of person, I would approach problems very differently.",
      "If I had been more confident when I was younger, I would have spoken up more often.",
      "If I were more outgoing, I would make friends easily, which would mean I would never feel lonely in a new place.",
      "I sometimes wonder what would have happened if I had been brave enough to share my real opinions back then."
    ],
    IT: [
      "Se divento più paziente, gestirò lo stress molto meglio.",
      "Se fossi una persona diversa, affronterei i problemi in modo molto diverso.",
      "Se fossi stato più sicuro di me quando ero giovane, avrei parlato più spesso.",
      "Se fossi più estroverso, farei amicizia facilmente, il che significherebbe non sentirsi mai soli in un posto nuovo.",
      "Ogni tanto mi chiedo cosa sarebbe successo se avessi avuto il coraggio di esprimere le mie vere opinioni in quel momento."
    ],
    DE: [
      "Wenn ich geduldiger werde, werde ich mit Stress viel besser umgehen.",
      "Wenn ich ein anderer Mensch wäre, würde ich Probleme ganz anders angehen.",
      "Wenn ich in meiner Jugend selbstbewusster gewesen wäre, hätte ich mich öfter zu Wort gemeldet.",
      "Wenn ich offener wäre, würde ich leicht Freundschaften schließen, was bedeuten würde, dass ich mich an einem neuen Ort nie einsam fühlen würde.",
      "Ich frage mich manchmal, was passiert wäre, wenn ich damals mutig genug gewesen wäre, meine wahre Meinung zu sagen."
    ],
    JP: [
      "もっと辛抱強くなれば、ストレスをうまく対処できます。(Motto shinbōzuyoku nareba, sutoresu o umaku taisho dekimasu.)",
      "違う人間であれば、問題にもっと違うやり方で向き合えるのに。(Chigau ningen de areba, mondai ni motto chigau yarikata de mukiaeru noni.)",
      "若い頃にもっと自信があったら、もっと頻繁に自分の意見を言っていたでしょう。(Wakai koro ni motto jishin ga attara, motto hinpan ni jibun no iken o itte ita deshō.)",
      "もっと社交的であれば友達も簡単にできるし、そうなれば新しい場所でも孤独を感じないはずです。(Motto shakōteki de areba tomodachi mo kantan ni dekiru shi, sō nareba atarashii basho demo kodoku o kanjinai hazu desu.)",
      "あのとき本当の気持ちを言える勇気があったら、どうなっていたかもしれないと、たまに思います。(Ano toki hontō no kimochi o ieru yūki ga attara, dō natte ita ka mo shirenai to, tama ni omoimasu.)"
    ]
  },

  // --- MÓDULO 11: RELATIVOS ---
  40: {
    // Tema: uma pessoa importante na minha vida
    // L1: relativa restritiva simples (sujeito)
    // L2: relativa com preposição
    // L3: relativa não-restritiva (, which / , il quale / , was / それは〜)
    // L4: relativa partitiva (one of the … who / uno dei … che + congiuntivo / einer der … / 〜の一人)
    // L5: relativa encaixada sofisticada (the kind of … that …, which is why …)
    EN: [
      "She is the person who understands me best.",
      "He is the friend that I grew up with.",
      "The guidance my mentor gave me through my hardest years, which I carry with me still, shaped who I am today.",
      "She is one of the few people who have ever truly believed in me.",
      "He is the kind of person that makes you feel heard, which is why I always turn to him when I need advice."
    ],
    IT: [
      "Lei è la persona che mi capisce meglio.",
      "Lui è l'amico con cui sono cresciuto.",
      "Il mio mentore, il quale mi ha guidato negli anni più difficili, mi chiama ancora regolarmente.",
      "Lei è una delle poche persone che abbia mai creduto davvero in me.",
      "Lui è il tipo di persona che sa farti sentire ascoltato, il che spiega perché mi rivolgo sempre a lui quando ho bisogno di un consiglio."
    ],
    DE: [
      "Sie ist die Person, die mich am besten versteht.",
      "Er ist der Freund, mit dem ich aufgewachsen bin.",
      "Mein Mentor hat mich durch meine schwierigsten Jahre begleitet, was ich nie vergessen werde.",
      "Sie ist eine der wenigen Menschen, die jemals wirklich an mich geglaubt haben.",
      "Er ist die Art von Mensch, der einen wirklich zuhören lässt, weshalb ich mich immer an ihn wende, wenn ich einen Rat brauche."
    ],
    JP: [
      "彼女はわたしのことを一番わかってくれる人です。(Kanojo wa watashi no koto o ichiban wakatte kureru hito desu.)",
      "彼はわたしが一緒に育った友達です。(Kare wa watashi ga issho ni sodatta tomodachi desu.)",
      "わたしの恩師、それは一番つらい時期にずっと支えてくれた人で、今も定期的に連絡をくれます。(Watashi no onshi, sore wa ichiban tsurai jiki ni zutto sasaete kureta hito de, ima mo teikiteki ni renraku o kuremasu.)",
      "彼女はわたしのことを心から信じてくれた数少ない人の一人です。(Kanojo wa watashi no koto o kokoro kara shinjite kureta kazusukunai hito no hitori desu.)",
      "彼はこちらの話をちゃんと聞いてくれるような人で、だからこそ困ったときにいつも頼りにしています。(Kare wa kochira no hanashi o chanto kiite kureru yō na hito de, dakara koso komatta toki ni itsumo tayori ni shite imasu.)"
    ]
  },
  41: {
    // Tema: um lugar que tem significado especial
    // L1: relativa restritiva simples
    // L2: relativa com preposição
    // L3: relativa não-restritiva
    // L4: relativa partitiva + congiuntivo IT
    // L5: relativa encaixada sofisticada
    EN: [
      "This is the park that shaped my childhood.",
      "That is the café that I return to every time I visit the city.",
      "The old library on the corner, which closed last year, was where I spent every Saturday.",
      "It is one of the few places that still feel exactly the same as when I was young.",
      "It is the kind of place that slows you down and makes you breathe, which is why I go back there whenever I feel overwhelmed."
    ],
    IT: [
      "Questo è il parco che ha segnato la mia infanzia.",
      "Quello è il bar a cui torno ogni volta che visito la città.",
      "La vecchia biblioteca all'angolo, la quale ha chiuso l'anno scorso, era il posto dove passavo ogni sabato.",
      "È uno dei pochi posti che abbia ancora esattamente la stessa atmosfera di quando ero piccolo.",
      "È il tipo di luogo che ti rallenta e ti fa respirare, il che spiega perché ci torno ogni volta che mi sento sopraffatto."
    ],
    DE: [
      "Das ist der Park, der meine Kindheit geprägt hat.",
      "Das ist das Café, in das ich jedes Mal zurückkehre, wenn ich die Stadt besuche.",
      "Die alte Bibliothek an der Ecke hat letztes Jahr geschlossen, was mich wirklich traurig gemacht hat.",
      "Es ist einer der wenigen Orte, der sich noch genauso anfühlt wie damals, als ich jung war.",
      "Es ist die Art von Ort, der einen verlangsamt und atmen lässt, weshalb ich dorthin zurückgehe, wann immer ich mich überfordert fühle."
    ],
    JP: [
      "ここは子ども時代を形作ってくれた公園です。(Koko wa kodomo jidai o katachizukutte kureta kōen desu.)",
      "あそこはこの街を訪れるたびに戻ってくるカフェです。(Asoko wa kono machi o otozureru tabi ni modotte kuru kafe desu.)",
      "角にある古い図書館、それは去年閉館してしまいましたが、毎週土曜日を過ごした場所でした。(Kado ni aru furui toshokan, sore wa kyonen heikan shite shimaimashita ga, maishū doyōbi o sugoshita basho deshita.)",
      "あの頃と変わらない雰囲気を持つ場所の一つです。(Ano koro to kawaranai fun'iki o motsu basho no hitotsu desu.)",
      "気持ちをゆったりさせてくれるような場所で、だからこそ追い詰められたときにいつもそこへ戻ります。(Kimochi o yuttari sasete kureru yō na basho de, dakara koso oitsumerareta toki ni itsumo soko e modorimasu.)"
    ]
  },
  42: {
    // Tema: um livro/filme que me marcou
    // L1: relativa restritiva simples
    // L2: relativa com preposição
    // L3: relativa não-restritiva
    // L4: relativa partitiva + congiuntivo IT
    // L5: relativa encaixada sofisticada
    EN: [
      "That is the book that changed the way I see the world.",
      "It is a film that I have watched more than ten times.",
      "The final chapter, which I read in one sitting, left me completely speechless.",
      "It is one of the few stories that have stayed with me long after I finished reading.",
      "It is the kind of book that keeps asking you questions even after you put it down, which is why I still think about it years later."
    ],
    IT: [
      "Quello è il libro che ha cambiato il modo in cui vedo il mondo.",
      "È un film che ho visto più di dieci volte.",
      "L'ultimo capitolo, il quale ho letto tutto d'un fiato, mi ha lasciato senza parole.",
      "È uno dei pochi libri che siano rimasti con me ancora a lungo dopo la fine della lettura.",
      "È il tipo di libro che continua a farti domande anche dopo averlo chiuso, il che spiega perché ci penso ancora anni dopo."
    ],
    DE: [
      "Das ist das Buch, das meine Sichtweise auf die Welt verändert hat.",
      "Es ist ein Film, den ich mehr als zehnmal gesehen habe.",
      "Das letzte Kapitel habe ich in einem Zug gelesen, was mich völlig sprachlos zurückgelassen hat.",
      "Es ist eines der wenigen Bücher, die mich noch lange nach dem Lesen begleitet haben.",
      "Es ist die Art von Buch, die einem auch nach dem Zuklappen noch Fragen stellt, weshalb ich noch Jahre später daran denke."
    ],
    JP: [
      "あれは世界の見方を変えてくれた本です。(Are wa sekai no mikata o kaete kureta hon desu.)",
      "それは十回以上観た映画です。(Sore wa jukkai ijō mita eiga desu.)",
      "最後の章、それは一気に読んでしまいましたが、読み終えた後にしばらく言葉が出ませんでした。(Saigo no shō, sore wa ikki ni yonde shimaimashita ga, yomiowatta ato ni shibaraku kotoba ga demasen deshita.)",
      "読み終えてからもずっと心に残った数少ない物語の一つです。(Yomiowatte kara mo zutto kokoro ni nokotta kazusukunai monogatari no hitotsu desu.)",
      "本を閉じた後も問いかけ続けてくれるような本で、だからこそ何年も経った今でも思い出します。(Hon o tojita ato mo toikake tsuzukete kureru yō na hon de, dakara koso nannen mo tatta ima demo omoidashimasu.)"
    ]
  },
  43: {
    // Tema: uma experiência que mudou meu jeito de ver as coisas
    // L1: relativa restritiva simples
    // L2: relativa com preposição
    // L3: relativa não-restritiva
    // L4: relativa partitiva + congiuntivo IT
    // L5: relativa encaixada sofisticada
    EN: [
      "It was an experience that changed everything for me.",
      "It was a journey that I had never prepared myself for.",
      "Living abroad for a year, which I almost did not do, turned out to be the most important decision of my life.",
      "It was one of those moments that have a way of reshaping how you see yourself.",
      "It was the kind of experience that forces you to question everything you thought you knew, which is why I came back a completely different person."
    ],
    IT: [
      "È stata un'esperienza che ha cambiato tutto per me.",
      "È stato un viaggio per cui non ero mai davvero preparato.",
      "Quell'anno all'estero, il quale quasi non ho vissuto, si è rivelato la decisione più importante della mia vita.",
      "È stato uno di quei momenti che abbiano mai ridefinito il modo in cui mi vedo.",
      "È stato il tipo di esperienza che ti costringe a mettere in discussione tutto ciò che credevi di sapere, il che spiega perché sono tornato una persona completamente diversa."
    ],
    DE: [
      "Es war eine Erfahrung, die alles für mich verändert hat.",
      "Es war eine Reise, auf die ich mich nie wirklich vorbereitet hatte.",
      "Ein Jahr im Ausland zu leben, was ich fast nicht getan hätte, stellte sich als die wichtigste Entscheidung meines Lebens heraus.",
      "Es war einer jener Momente, der die Art und Weise, wie man sich selbst sieht, neu gestalten kann.",
      "Es war die Art von Erfahrung, die einen zwingt, alles in Frage zu stellen, was man zu wissen glaubte, weshalb ich als völlig anderer Mensch zurückgekehrt bin."
    ],
    JP: [
      "それはわたしにとってすべてを変えた経験でした。(Sore wa watashi ni totte subete o kaeta keiken deshita.)",
      "それはまったく心の準備ができていなかった旅でした。(Sore wa mattaku kokoro no junbi ga dekite inakatta tabi deshita.)",
      "一年間の海外生活、それはあやうくしなかったところでしたが、人生で最も大切な決断になりました。(Ichinenkan no kaigai seikatsu, sore wa ayauku shinakatta tokoro deshita ga, jinsei de mottomo taisetsu na ketsudan ni narimashita.)",
      "自分自身を見つめ直すきっかけになった経験の一つです。(Jibun jishin o mitsumenaosu kikkake ni natta keiken no hitotsu desu.)",
      "知っていると思っていたすべてを問い直させるような経験で、だからこそまったく別の人間になって帰ってきました。(Shitte iru to omotteita subete o toikaosasereru yō na keiken de, dakara koso mattaku betsu no ningen ni natte kaette kimashita.)"
    ]
  },

  // --- MÓDULO 12: REFLEXÃO ANUAL ---
  44: {
    // Tema: o que aprendi sobre mim mesmo este ano
    // L1: reflexão simples | L2: reflexão com adjunto temporal | L3: reflexão comparativa
    // L4: reflexão aspiracional | L5: reflexão profunda + registro nativo
    EN: [
      "I realized that I need more time alone to recharge.",
      "Looking back, I learned that I am more resilient than I thought.",
      "I am more patient than I used to be, but I still struggle with uncertainty.",
      "I hope that next year I will understand myself even better and act on what I value.",
      "The older I get, the more I realize how little I truly know about my own patterns."
    ],
    IT: [
      "Ho capito che ho bisogno di più tempo per me stesso.",
      "Guardando indietro, ho imparato che sono più forte di quanto credessi.",
      "Sono più paziente di quanto non fossi, anche se faccio ancora fatica con l'incertezza.",
      "Spero che il prossimo anno riesca a capirmi ancora meglio e ad agire secondo i miei valori.",
      "Man mano che il tempo passa, mi rendo conto di quanto poco conosca davvero me stesso."
    ],
    DE: [
      "Ich habe festgestellt, dass ich mehr Zeit für mich allein brauche.",
      "Rückblickend habe ich gelernt, dass ich belastbarer bin, als ich dachte.",
      "Ich bin geduldiger als früher, obwohl ich mit Unsicherheit immer noch zu kämpfen habe.",
      "Ich hoffe, dass ich nächstes Jahr mich selbst noch besser verstehen möge.",
      "Je älter ich werde, desto mehr merke ich, wie wenig ich über meine eigenen Muster weiß."
    ],
    JP: [
      "自分には一人の時間がもっと必要だということに気づきました。(Jibun ni wa hitori no jikan ga motto hitsuyō da to iu koto ni kizukimashita.)",
      "振り返ってみると、自分が思っていたよりずっと強いということを学びました。(Furikaette miru to, jibun ga omotte ita yori zutto tsuyoi to iu koto o manabimashita.)",
      "以前より辛抱強くなりましたが、不確かさにはまだ苦労しています。(Izen yori shinbōzuyoku narimashita ga, futashikasa ni wa mada kurō shite imasu.)",
      "来年は自分自身をさらによく理解して、大切にしていることを行動に移したいと思っています。(Rainen wa jibun jishin o sara ni yoku rikai shite, taisetsu ni shite iru koto o kōdō ni utsushitai to omotte imasu.)",
      "年を重ねれば重ねるほど、自分自身のことをいかに知らないかということがわかってきます。(Toshi o kasanereba kasaneru hodo, jibun jishin no koto o ika ni shiranai ka to iu koto ga wakatte kimasu.)"
    ]
  },
  45: {
    // Tema: como minhas relações mudaram
    EN: [
      "I realized that some friendships need more care and attention.",
      "Looking back, I noticed that I became closer to the people who truly matter.",
      "I am more open than I used to be when it comes to asking for help.",
      "I hope that next year I will invest more time in the relationships I care about.",
      "The older I get, the more I appreciate the few deep connections I have built over the years."
    ],
    IT: [
      "Ho capito che alcune amicizie hanno bisogno di più cura e attenzione.",
      "Guardando indietro, ho notato che mi sono avvicinato alle persone che contano davvero.",
      "Sono più aperto di quanto non fossi quando si tratta di chiedere aiuto.",
      "Spero che il prossimo anno possa dedicare più tempo alle relazioni a cui tengo.",
      "Man mano che gli anni passano, mi rendo conto di quanto siano preziosi i legami profondi che ho costruito."
    ],
    DE: [
      "Ich habe festgestellt, dass manche Freundschaften mehr Pflege und Aufmerksamkeit brauchen.",
      "Rückblickend habe ich bemerkt, dass ich den Menschen, die wirklich wichtig sind, nähergekommen bin.",
      "Ich bin offener als früher, wenn es darum geht, um Hilfe zu bitten.",
      "Ich hoffe, dass ich nächstes Jahr mehr Zeit in die Beziehungen investieren möge, die mir wichtig sind.",
      "Je älter ich werde, desto mehr schätze ich die wenigen tiefen Verbindungen, die ich aufgebaut habe."
    ],
    JP: [
      "いくつかの友情にはもっと気遣いが必要だということに気づきました。(Ikutsu ka no yūjō ni wa motto kidzukai ga hitsuyō da to iu koto ni kizukimashita.)",
      "振り返ってみると、本当に大切な人たちとより近くなれたことに気がつきました。(Furikaette miru to, hontō ni taisetsu na hitotachi to yori chikaku nareta koto ni ki ga tsukimashita.)",
      "以前より、助けを求めることに対してオープンになりました。(Izen yori, tasuke o motomeru koto ni taishite ōpun ni narimashita.)",
      "来年は大切にしている関係にもっと時間を注ぎたいと思っています。(Rainen wa taisetsu ni shite iru kankei ni motto jikan o sosogitai to omotte imasu.)",
      "年を重ねれば重ねるほど、長年かけて築いてきた深いつながりがいかに貴重かということがわかってきます。(Toshi o kasanereba kasaneru hodo, naganen kakete kizuite kita fukai tsunagari ga ika ni kichō ka to iu koto ga wakatte kimasu.)"
    ]
  },
  46: {
    // Tema: meu crescimento no idioma
    EN: [
      "I realized that my vocabulary has grown a lot this year.",
      "Looking back, I noticed that I can now express ideas I could not before.",
      "I am more comfortable speaking than I used to be, even when I make mistakes.",
      "I hope that next year I will reach a level where conversations feel truly natural.",
      "The older my study habit gets, the more I notice how language shapes the way I think."
    ],
    IT: [
      "Ho capito che il mio vocabolario è cresciuto moltissimo quest'anno.",
      "Guardando indietro, ho notato che ora riesco ad esprimere idee che prima non sapevo dire.",
      "Sono più a mio agio nel parlare di quanto non fossi, anche quando sbaglio.",
      "Spero che il prossimo anno raggiunga un livello in cui le conversazioni sembrino davvero naturali.",
      "Man mano che coltivo questa abitudine di studio, mi rendo conto di quanto la lingua plasmi il mio modo di pensare."
    ],
    DE: [
      "Ich habe festgestellt, dass mein Wortschatz in diesem Jahr sehr gewachsen ist.",
      "Rückblickend habe ich bemerkt, dass ich jetzt Ideen ausdrücken kann, die mir früher fehlten.",
      "Ich bin selbstsicherer beim Sprechen als früher, auch wenn ich Fehler mache.",
      "Ich hoffe, dass ich nächstes Jahr ein Niveau erreichen möge, auf dem sich Gespräche wirklich natürlich anfühlen.",
      "Je länger ich diese Lerngewohnheit pflege, desto mehr merke ich, wie die Sprache mein Denken verändert."
    ],
    JP: [
      "今年は語彙がとても増えたということに気づきました。(Kotoshi wa goi ga totemo fueta to iu koto ni kizukimashita.)",
      "振り返ってみると、以前は言えなかったことを今では表現できるようになっていました。(Furikaette miru to, izen wa ienakatta koto o ima de wa hyōgen dekiru yō ni natte imashita.)",
      "以前よりも話すことに自信が持てるようになりました。間違えても気にならなくなってきました。(Izen yori mo hanasu koto ni jishin ga moteru yō ni narimashita. Machigaete mo ki ni naranaku natte kimashita.)",
      "来年は会話が本当に自然に感じられるレベルに達したいと思っています。(Rainen wa kaiwa ga hontō ni shizen ni kanji rareru reberu ni tashitai to omotte imasu.)",
      "学習習慣を続ければ続けるほど、言語が自分の思考をいかに形作っているかということがわかってきます。(Gakushū shūkan o tsuzukereba tsuzukeru hodo, gengo ga jibun no shikō o ika ni katachizukutte iru ka to iu koto ga wakatte kimasu.)"
    ]
  },
  47: {
    // Tema: o que quero levar para o próximo ano
    EN: [
      "I realized that the habits I built this year are worth keeping.",
      "Looking back, I want to carry forward the curiosity that kept me going.",
      "I am more intentional than I used to be about how I spend my time.",
      "I hope that next year I will hold on to this sense of growth and keep building on it.",
      "The older I get, the more I understand that small, consistent efforts matter more than grand gestures."
    ],
    IT: [
      "Ho capito che le abitudini che ho costruito quest'anno vale la pena mantenere.",
      "Guardando indietro, voglio portare con me la curiosità che mi ha tenuto in movimento.",
      "Sono più intenzionale di quanto non fossi riguardo a come impiego il mio tempo.",
      "Spero che il prossimo anno riesca a tenere vivo questo senso di crescita e a continuare a costruire su di esso.",
      "Man mano che gli anni passano, mi rendo conto che i piccoli sforzi costanti contano più dei grandi gesti."
    ],
    DE: [
      "Ich habe festgestellt, dass die Gewohnheiten, die ich dieses Jahr aufgebaut habe, es wert sind, beizubehalten.",
      "Rückblickend möchte ich die Neugier mitnehmen, die mich am Laufen gehalten hat.",
      "Ich bin bewusster als früher, wenn es darum geht, wie ich meine Zeit einsetze.",
      "Ich hoffe, dass ich nächstes Jahr dieses Gefühl des Wachstums bewahren und weiter daran aufbauen möge.",
      "Je älter ich werde, desto mehr verstehe ich, dass kleine, beständige Bemühungen mehr bewirken als große Gesten."
    ],
    JP: [
      "今年築いた習慣は続ける価値があるということに気づきました。(Kotoshi kizuita shūkan wa tsuzukeru kachi ga aru to iu koto ni kizukimashita.)",
      "振り返ってみると、自分を前進させてくれた好奇心を来年も持ち続けたいと思います。(Furikaette miru to, jibun o zenshin sasete kureta kōkishin o rainen mo mochitsuzuketai to omoimasu.)",
      "以前より、自分の時間の使い方に対して意識的になりました。(Izen yori, jibun no jikan no tsukaikata ni taishite ishikiteki ni narimashita.)",
      "来年はこの成長の感覚を持ち続けて、さらに積み上げていきたいと思っています。(Rainen wa kono seichō no kankaku o mochitsuzukete, sara ni tsumiagate ikitai to omotte imasu.)",
      "年を重ねれば重ねるほど、小さくて継続的な努力が大きな身振りよりもずっと大切だということがわかってきます。(Toshi o kasanereba kasaneru hodo, chiisakute keizokuteki na doryoku ga ōkina miburishigusa yori mo zutto taisetsu da to iu koto ga wakatte kimasu.)"
    ]
  }
};
