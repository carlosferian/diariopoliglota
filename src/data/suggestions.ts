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
      "他の人への彼女の忍耐力は、プレッシャーのもとで落ち着いていられる力と同じくらい見事です。(Hoka no hito e no kanojo no nintairyoku wa, puresshā no moto de ochitsuiteirarereru chikara to onaji kurai migoto desu.)",
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
      "やはり振り返って自分がどれだけ成長したかに気づく瞬間が一番ですね。(Yahari furikaette jibun ga dore dake seichō shita ka ni ki zuku shunkan ga ichiban desu ne.)"
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
    EN: [
      "I think that social media is popular.",
      "I think that social media has many useful tools.",
      "In my opinion, social media makes people feel lonely.",
      "I think that social media is a good way to keep in touch with old friends.",
      "In my opinion, people should spend less time online and talk face-to-face."
    ],
    IT: [
      "Penso che i social network siano popolari.",
      "Penso che i social offrano molti strumenti utili.",
      "Secondo me, i social network rendono le persone più sole.",
      "Penso che i social siano ottimi per rimanere in contatto con vecchi amici.",
      "Secondo me, dovremmo passare meno tempo online e parlarci di persona."
    ],
    DE: [
      "Ich finde, dass soziale Medien beliebt sind.",
      "Ich finde, dass soziale Medien viele nützliche Tools haben.",
      "Meiner Meinung nach machen soziale Medien die Menschen einsam.",
      "Ich finde, dass soziale Medien gut sind, um mit Freunden in Kontakt zu bleiben.",
      "Meiner Meinung nach sollten die Menschen weniger Zeit online verbringen."
    ],
    JP: [
      "SNSはとても人気があると思います。(SNS wa totemo ninki ga aru to omoimasu.)",
      "SNSには便利な情報収集ツールがたくさんあると思います。(SNS ni wa benri na jōhōshūshū tūru ga takasan aru to omoimasu.)",
      "わたしの意見では、SNSは人々を少し孤独にさせる気がします。(Watashi no iken de wa, SNS wa hitobito o sukoshi kodoku ni saseru ki ga shimasu.)",
      "昔の友達と連絡を取り合うために、SNSは非常に優れた手段だと思います。(Mukashi no tomodachi to renrakutori au tame ni, SNS wa hijou ni sugureta shudan da to omoimasu.)",
      "ネット上の交流よりも、対面で直接会話する時間を増やすべきだと考えます。(Nettojō no kōryū yori mo, taimen de chokusetsu kaiwa suru jikan o fuyasu beki da to kangaemasu.)"
    ]
  },
  25: {
    EN: [
      "I agree because it is true.",
      "I agree with your opinion because learning languages is very hard.",
      "I disagree because you can learn easily with consistency.",
      "I agree because studying grammar and characters requires a lot of time.",
      "I disagree because although it is challenging, the process is very fun."
    ],
    IT: [
      "Sono d'accordo perché è vero.",
      "Sono d'accordo con te perché studiare le lingue è difficile.",
      "Non sono d'accordo perché si può imparare facilmente con la costanza.",
      "Sono d'accordo perché la grammatica e i caratteri richiedono tempo.",
      "Non sono d'accordo perché, anche se è una sfida, il processo è divertente."
    ],
    DE: [
      "Ich stimme zu, weil es wahr ist.",
      "Ich stimme dir zu, weil das Sprachenlernen sehr schwer ist.",
      "Ich stimme nicht zu, weil man mit Beständigkeit leicht lernen kann.",
      "Ich stimme zu, weil Grammatik und Schriftzeichen viel Zeit erfordern.",
      "Ich stimme nicht zu, weil der Prozess trotz aller Schwierigkeiten Spaß macht."
    ],
    JP: [
      "同感です。なぜならそれが本当だからです。(Dōkan desu. Nazenara sore ga hontō dakara desu.)",
      "語学を学ぶのはとても難しいという意見に、わたしも賛成です。(Gogaku o manabu no wa totemo muzukashii to iu iken ni, watashi mo sansei desu.)",
      "毎日コツコツと継続すれば簡単に学べるので、わたしは反対意見です。(Mainichi kotsukotsu to keizoku sureba kantan ni manaberu node, watashi wa hantai iken desu.)",
      "文法や文字を覚えるのには膨大な時間がかかるため、その意見には賛成です。(Bunpou ya moji o oboeru no ni wa bōdai na jikan ga kakaru tame, sono iken ni wa sansei desu.)",
      "確かに大変な面もありますが、上達のプロセス自体が楽しいので反対です。(Tashikani taihen na men mo arimasu ga, jōtatsu no purosesu jitai ga tanoshii node hantai desu.)"
    ]
  },
  26: {
    EN: [
      "I think you should sleep more.",
      "I think you should practice your speaking skills.",
      "I think you should write in your journal to clarify your thoughts.",
      "I think you should take a short break instead of working all night.",
      "I think you should learn from your mistakes and not give up so easily."
    ],
    IT: [
      "Secondo me dovresti dormire di più.",
      "Secondo me dovresti praticare la lingua parlata.",
      "Secondo me dovresti scrivere sul diario per chiarirti le idee.",
      "Secondo me dovresti fare una pausa invece di lavorare tutta la notte.",
      "Secondo me dovresti imparare dai tuoi errori e non arrenderti subito."
    ],
    DE: [
      "Ich finde, du solltest mehr schlafen.",
      "Ich finde, du solltest das Sprechen aktiver üben.",
      "Ich finde, du solltest Tagebuch schreiben, um deine Gedanken zu ordnen.",
      "Ich finde, du solltest eine Pause machen, anstatt die Nacht durchzuarbeiten.",
      "Ich finde, du solltest aus deinen Fehlern lernen und nicht aufgeben."
    ],
    JP: [
      "もっと休んだ方がいいと思います。(Motto yasunda hō ga ii to omoimasu.)",
      "話す練習をもっとたくさんした方がいいと思います。(Hanasu renshū o motto takasan shita hō ga ii to omoimasu.)",
      "自分の頭を整理するために、日記を毎日書いた方がいいと思います。(Jibun no atama o seiri suru tame ni, nikki o mainichi kaita hō ga ii to omoimasu.)",
      "徹夜で仕事をする代わりに、少し休憩を入れた方がいいとアドバイスします。(Tetsuya de shigoto o suru kawari ni, sukoshi kyūkei o ireta hō ga ii to adobaisu shimasu.)",
      "失敗から多くの教訓を学び、そんなに簡単に諦めない方がいいと思います。(Shippai kara ōku no kyōkun o manabi, sonnani kantan ni akiramenai hō ga ii to omoimasu.)"
    ]
  },
  27: {
    EN: [
      "In my opinion, money is not everything.",
      "In my opinion, money does not buy true love.",
      "In my opinion, money is important but health matters more.",
      "In my opinion, money is just a tool to help us achieve our goals.",
      "In my opinion, money can buy comfort, but happiness comes from simple things."
    ],
    IT: [
      "Secondo me, i soldi non sono tutto.",
      "Secondo me, i soldi non possono comprare il vero amore.",
      "Secondo me, i soldi sono importanti, ma la salute conta di più.",
      "Secondo me, il denaro è solo uno strumento per raggiungere i nostri scopi.",
      "Secondo me, i soldi comprano la comodità, ma la felicità è nelle piccole cose."
    ],
    DE: [
      "Meiner Meinung nach ist Geld nicht alles.",
      "Meiner Meinung nach kann man mit Geld keine Liebe kaufen.",
      "Meiner Meinung nach ist Geld wichtig, aber Gesundheit zählt mehr.",
      "Meiner Meinung nach ist Geld nur ein Mittel, um unsere Ziele zu erreichen.",
      "Meiner Meinung nach bringt Geld Komfort, aber Glück liegt in kleinen Dingen."
    ],
    JP: [
      "わたしの意見では、お金がすべてではないと思います。(Watashi no iken de wa, okane ga subete de wa nai to omoimasu.)",
      "お金で本当の愛や信頼を買うことはできないと考えます。(Okane de hontō no ai ya shinrai o kau koto wa dekinai to kangaemasu.)",
      "お金は確かに生活に必要ですが、健康の方がもっと大切です。(Okane wa tashikani seikatsu ni hitsuyō desu ga, kenkō no hō ga motto taisetsu desu.)",
      "お金は目標を達成し、選択肢を広げるための単なる道具だと思います。(Okane wa mokuhyō o tassei shi, sentakushi o hirogeru tame no tannaru dōgu da to omoimasu.)",
      "お金で快適さは買えますが、本当の幸せは些細な日常の中にあります。(Okane de kaitekisa wa kaemasu ga, hontō no shiawase wa sasai na nichijō no naka ni arimasu.)"
    ]
  },

  // --- MÓDULO 8: CAUSA/CONSEQUÊNCIA ---
  28: {
    EN: [
      "I was tired, so I went to sleep.",
      "I was tired, so I decided to skip my evening gym session.",
      "I was extremely tired, therefore I couldn't focus on the lecture.",
      "I had worked all night on the code, therefore I slept until afternoon.",
      "The database migration failed, therefore we had to restore the backup data."
    ],
    IT: [
      "Ero stanco, quindi sono andato a letto.",
      "Ero stanco, quindi ho deciso di non andare in palestra stasera.",
      "Ero stanco morto, quindi non riuscivo a seguire la lezione.",
      "Avevo lavorato tutta la notte al codice, quindi ho dormito fino a tardi.",
      "La migrazione del database è fallita, quindi abbiamo ripristinato il backup."
    ],
    DE: [
      "Ich war müde, deshalb bin ich schlafen gegangen.",
      "Ich war müde, deshalb habe ich beschlossen, den Sport ausfallen zu lassen.",
      "Ich war extrem müde, deshalb konnte ich mich nicht konzentrieren.",
      "Ich hatte die ganze Nacht programmiert, deshalb habe ich bis mittags geschlafen.",
      "Das Datenbank-Update ist fehlgeschlagen, deshalb mussten wir das Backup nutzen."
    ],
    JP: [
      "疲れていたので、早く寝ました。(Tsukarete ita node, hayaku nemashita.)",
      "今日はとても疲れていたので、ジムに行くのを休むことにしました。(Kyō wa totemo tsukarete ita node, jimu ni iku no o yasumu koto ni shimashita.)",
      "極度に疲労していたため、講義の内容に全く集中できませんでした。(Kyokudo ni hirō shite ita tame, kōgi no naiyō ni mattaku shūchū dekimasen deshita.)",
      "夜通しコードを書いていたため、結果的にお昼過ぎまで寝てしまいました。(Yodōshi kōdo o kaite ita tame, kekkateki ni ohirusugi made nete shimaimashita.)",
      "データベースの移行処理が失敗したため、バックアップを復元せねばなりませんでした。(Dētabēsu no ikoushori ga shippai shita tame, bakkuappu o fukugen seneba narimasen deshita.)"
    ]
  },
  29: {
    EN: [
      "I decided to go because I wanted to.",
      "I decided to learn German because I want to work in Vienna.",
      "I decided to buy a new computer because my old laptop broke.",
      "I decided to change my career path because I needed a new challenge.",
      "I decided to wake up early every day because I wanted to improve my routine."
    ],
    IT: [
      "Ho deciso di andare perché volevo.",
      "Ho deciso di studiare il tedesco perché vorrei lavorare a Vienna.",
      "Ho deciso di comprare un computer nuovo perché il vecchio si è rotto.",
      "Ho deciso di cambiare carriera perché avevo bisogno di nuovi stimoli.",
      "Ho deciso di svegliarmi presto ogni giorno perché volevo migliorare la routine."
    ],
    DE: [
      "Ich habe beschlossen zu gehen, weil ich wollte.",
      "Ich habe beschlossen, Deutsch zu lernen, weil ich in Wien arbeiten möchte.",
      "Ich habe beschlossen, einen neuen PC zu kaufen, weil mein Laptop kaputt ging.",
      "Ich habe beschlossen, den Job zu wechseln, weil ich eine Herausforderung brauchte.",
      "Ich habe beschlossen, früh aufzustehen, weil ich meine routine verbessern wollte."
    ],
    JP: [
      "行きたかったので、行くことに決めました。(Ikitakatta node, iku koto ni kimemashita.)",
      "ウィーンで働きたいという目標があるため、ドイツ語の習得を決めました。(Wīn de hatarakitai to iu mokuhyō ga aru tame, Doitsugo no shūtoku o kimemashita.)",
      "古いパソコンが壊れてしまったので、新しいものを購入することにしました。(Furui pasokon ga kowarete shimatta node, atarashii mono o kōnyū suru koto ni shimashita.)",
      "現状に満足せず新しい挑戦を求めて、自分のキャリアを変更することに決めました。(Genjou ni manzoku sezu atarashii chōsen o motomete, jibun no kyaria o henkou suru koto ni kimemashita.)",
      "朝の時間を有効活用して生活リズムを整えるために、毎朝早起きすると決めました。(Asa no jikan o yūkō katsuyō shite seikatsurizumu o totonoeru tame ni, maiasa hayaoki suru to kimemashita.)"
    ]
  },
  30: {
    EN: [
      "When I don't sleep well, I feel tired.",
      "When I don't sleep well, I cannot concentrate on studying.",
      "When I don't sleep well, I feel anxious and need extra coffee.",
      "When I don't sleep well, my productivity drops significantly.",
      "When I don't sleep well, I feel irritable throughout the entire day."
    ],
    IT: [
      "Quando non dormo bene, mi sento stanco.",
      "Quando non dormo bene, non riesco a concentrarmi sullo studio.",
      "Quando non dormo bene, mi sento ansioso e ho bisogno di più caffè.",
      "Quando non dormo bene, la mia produttività cala moltissimo.",
      "Quando non dormo bene, mi sento irritabile per tutto il giorno."
    ],
    DE: [
      "Wenn ich schlecht schlafe, fühle ich mich müde.",
      "Wenn ich schlecht schlafe, kann ich mich nicht auf das Lernen konzentrieren.",
      "Wenn ich schlecht schlafe, bin ich nervös und brauche extra Kaffee.",
      "Wenn ich schlecht schlafe, sinkt meine Produktivität erheblich.",
      "Wenn ich schlecht schlafe, bin ich den ganzen Tag über leicht gereizt."
    ],
    JP: [
      "よく眠れないと、体がだるいです。(Yoku nemurenai to, karada ga darui desu.)",
      "十分に睡眠を取れないと、勉強に全く集中することができません。(Jūbun ni suimin o torenai to, benkyō ni mattaku shūchū suru koto ga dekimasen.)",
      "睡眠不足だと頭がぼーっとしてしまい、余計にコーヒーが必要です。(Suiminbusoku dato atama ga bōto shite shimai, yokei ni kōhī ga hitsuyō desu.)",
      "夜しっかりと眠れないと、翌日の作業効率が大幅に低下してしまいます。(Yoru shikari to nemurenai to, yokujitsu no sagyou kōritsu ga ōhaba ni teika shite shimaimasu.)",
      "睡眠の質が悪い日は、一日中ささいなことに対してイライラしてしまいます。(Suimin no shitsu ga warui hi wa, ichinichijū sasai na koto ni taishite iraira shite shimaimasu.)"
    ]
  },
  31: {
    EN: [
      "It was hard, but it was worth it.",
      "It was hard, but it was worth it because I passed the exam.",
      "It was hard, but it was worth it because I finished the application.",
      "It was hard, but it was worth it because my skills improved a lot.",
      "It was hard, but it was worth it because the client was extremely satisfied."
    ],
    IT: [
      "È stato difficile, ma ne è valsa la pena.",
      "È stato difficile, ma ne è valsa la pena perché ho passato l'esame.",
      "È stato difficile, ma ne è valsa la pena perché ho finito l'app.",
      "È stato difficile, ma ne è valsa la pena perché ho imparato moltissimo.",
      "È stato difficile, ma ne è valsa la pena perché il cliente è rimasto soddisfatto."
    ],
    DE: [
      "Es war schwer, aber es hat sich gelohnt.",
      "Es war schwer, aber es hat sich gelohnt, weil ich die Prüfung bestanden habe.",
      "Es war schwer, aber es hat sich gelohnt, weil ich die App fertiggestellt habe.",
      "Es war schwer, aber es hat sich gelohnt, weil sich meine Fähigkeiten verbessert haben.",
      "Es war schwer, aber es hat sich gelohnt, weil der Kunde sehr zufrieden war."
    ],
    JP: [
      "大変でしたが、やってよかったです。(Taihen deshita ga, yatte yokatta desu.)",
      "試験勉強は大変でしたが、合格できたので努力の価値がありました。(Shiken benkyō wa taihen deshita ga, gōkaku dekita node doryoku no kachi ga arimashita.)",
      "アプリケーションの開発は大変でしたが、無事に完成して良かったです。(Apurikēshon no kaihatsu wa taihen deshita ga, buji ni kansei shite yokatta desu.)",
      "語学の学習は大変でしたが、流暢に話せるようになって本当に価値がありました。(Gogaku no gakushū wa taihen deshita ga, ryūchō ni hanaseru yō ni natte hontō ni kachi ga arimashita.)",
      "システム障害の対応は非常に過酷でしたが、顧客に感謝されたので報われました。(Shisutemu shōgai no taiō wa hijou ni kakoku deshita ga, kokyaku ni kansha sareta node mukuwaremashita.)"
    ]
  },

  // --- MÓDULO 9: CONTRASTE ---
  32: {
    EN: [
      "I like it, but it is expensive.",
      "I like my job, however the commute is too long.",
      "I want to go out, however the weather is too cold today.",
      "I purchased the phone, however the battery life is not very good.",
      "The layout looks beautiful, however we need to improve the responsiveness on mobile."
    ],
    IT: [
      "Mi piace, ma è costoso.",
      "Mi piace il mio lavoro, però il viaggio è troppo lungo.",
      "Vorrei uscire, però oggi fa troppo freddo fuori.",
      "Ho comprato il telefono, però la batteria dura poco.",
      "Il design è bellissimo, però dobbiamo migliorare la responsività su cellulare."
    ],
    DE: [
      "Ich mag es, aber es ist teuer.",
      "Ich mag meinen Job, aber der Arbeitsweg ist zu lang.",
      "Ich möchte ausgehen, aber das Wetter ist heute zu kalt.",
      "Ich habe das Handy gekauft, aber die Akkulaufzeit ist nicht gut.",
      "Das design sieht schön aus, jedoch müssen wir die mobile Responsivität verbessern."
    ],
    JP: [
      "好きですが、高すぎます。(Suki desu ga, takasugimasu.)",
      "今の仕事は好きですが、通勤時間が長すぎるのが難点です。(Ima no shigoto wa suki desu ga, tsūkinjikan ga nagasugiru no ga nanten desu.)",
      "外出したいのですが、今日は外が寒すぎて行く気になれません。(Gaishutsu shitai no desu ga, kyō wa soto ga samusugite iku ki ni naremasen.)",
      "新型スマホを買いましたが、バッテリーの持ちがあまり良くありません。(Shingata sumaho o kaimashita ga, battarī no mochi ga amari yoku arimasen.)",
      "デザインは素晴らしいですが、モバイル端末でのレスポンシブ表示を改善する必要があります。(Dezain wa subarashii desu ga, mobairu tansu de no responshibu hyōji o kaizen suru hitsuyō ga arimassu.)"
    ]
  },
  33: {
    EN: [
      "Although I don't want to, I will go.",
      "Although I don't want to, I must clean my room.",
      "Although it was raining, we decided to walk in the forest.",
      "Although I was extremely tired, I finished writing in my diary.",
      "Although the database quota is limited, the app runs very fast online."
    ],
    IT: [
      "Anche se non voglio, andrò.",
      "Anche se non ho voglia, devo pulire la mia stanza.",
      "Anche se pioveva, abbiamo deciso di passeggiare nel bosco.",
      "Anche se ero stanchissimo, ho scritto la mia pagina di diario.",
      "Anche se lo spazio del database è limitato, l'app funziona veloce."
    ],
    DE: [
      "Obwohl ich nicht will, werde ich gehen.",
      "Obwohl ich keine Lust habe, muss ich mein Zimmer aufräumen.",
      "Obwohl es regnete, sind wir im Wald spazieren gegangen.",
      "Obwohl ich extrem müde war, habe ich in mein Tagebuch geschrieben.",
      "Obwohl der Speicherplatz begrenzt ist, läuft die App online sehr schnell."
    ],
    JP: [
      "行きたくないけれど、行くことにします。(Ikitakunai keredo, iku koto ni shimasu.)",
      "面倒くさいけれど、部屋の掃除を終わらせなければなりません。(Mendōkusai keredo, heya no souji o owarasenakeba narimasen.)",
      "雨が降っていたけれど、わたしたちは森の中を散歩することにしました。(Ame ga futte ita keredo, watashitachi wa mori no naka o sanpo suru koto ni shimashita.)",
      "非常に疲れていたけれど、今日の分の語学日記を最後まで書き上げました。(Hijou ni tsukarete ita keredo, kyō no bun no gogaku nikki o saigo made kakiagemashita.)",
      "データベースの容量制限があるにもかかわらず、アプリはスムーズに動作しています。(Dētabēsu no yōryō seigen ga aru ni mo kakawarasu, apuri wa sumūzu ni dōsa shite imasu.)"
    ]
  },
  34: {
    EN: [
      "On one hand I like it, on the other hand it is hard.",
      "On one hand city life is exciting, on the other hand it is stressful.",
      "On one hand tablets are light, on the other hand laptops are more powerful.",
      "On one hand remote work is comfortable, on the other hand it can feel isolated.",
      "On one hand IndexedDB has huge space, on the other hand it is harder to implement."
    ],
    IT: [
      "Da un lato mi piace, dall'altro è difficile.",
      "Da un lato la città è emozionante, dall'altro è stressante.",
      "Da un lato i tablet sono leggeri, dall'altro i computer sono più potenti.",
      "Da un lato il lavoro da casa è comodo, dall'altro ci si può sentire soli.",
      "Da un lato IndexedDB offre molto spazio, dall'altro è più complesso da usare."
    ],
    DE: [
      "Einerseits mag ich es, andererseits ist es schwer.",
      "Einerseits ist das Stadtleben aufregend, andererseits ist es stressig.",
      "Einerseits sind Tablets leicht, andererseits sind Laptops leistungsstärker.",
      "Einerseits ist Homeoffice bequem, andererseits kann man sich isoliert fühlen.",
      "Einerseits bietet IndexedDB viel Speicher, andererseits ist es schwerer einzurichten."
    ],
    JP: [
      "一方では好きですが、他方では難しいです。(Ippō de wa suki desu ga, tahō de wa muzukashii desu.)",
      "都会での生活は刺激적である一方、ストレスが溜まりやすい側面もあります。(Tokai de no seikatsu wa shigekiteki dearu ippō, sutoresu ga tamariyasui sokumen mo arimasu.)",
      "タブレットは軽くて持ち運びに便利な一方、ノートPCの方が処理能力が高いです。(Taburetto wa karukute mochihakobi ni benri na ippō, nōto PC no hō ga shorinōryoku ga takai desu.)",
      "在宅勤務は快適である一方で、人との交流が減り孤独を感じることがあります。(Zaitaku kinmu wa kaiteki dearu ippō de, hito to no kōryū ga heri kodoku o kanjiru koto ga arimasu.)",
      "IndexedDBは大容量のデータを保存できる一方、実装コードがやや複雑になります。(IndexedDB wa daiyōryō no dēta o hozon dekiru ippō, jissou kōdo ga yaya fukuzatsu ni narimasu.)"
    ]
  },
  35: {
    EN: [
      "Despite the problems, I am happy.",
      "Despite the cold weather, they went for a swim.",
      "Despite the language barrier, they became close friends.",
      "Despite the heavy rain, the football match was not canceled.",
      "Despite the difficulties of vector drawing, the calligraphy looks amazing."
    ],
    IT: [
      "Nonostante i problemi, sono felice.",
      "Nonostante il freddo, hanno fatto il bagno.",
      "Nonostante la barriera linguistica, sono diventati amici.",
      "Nonostante la forte pioggia, la partita non è stata annullata.",
      "Nonostante le difficoltà del disegno vettoriale, la scrittura è bellissima."
    ],
    DE: [
      "Trotz der Probleme bin ich glücklich.",
      "Trotz des kalten Wetters gingen sie schwimmen.",
      "Trotz der Sprachbarriere wurden sie enge Freunde.",
      "Trotz des starken Regens wurde das Fußballspiel nicht abgesagt.",
      "Trotz der Schwierigkeiten des Vektorzeichnens sieht die Schrift toll aus."
    ],
    JP: [
      "大変なこともありますが、わたしは幸せです。(Taihen na koto mo arimasu ga, watashi wa shiawase desu.)",
      "外がとても寒かったにもかかわらず、彼らは海に入って泳ぎました。(Soto ga totemo samukatta ni mo kakawarazu, karera wa umi ni haitte oyogimashita.)",
      "言葉の壁があったのにもかかわらず、二人は大親友になりました。(Kotoba no kabe ga atta no ni mo kakawarazu, futari wa daishinyū ni narimashita.)",
      "大雨が降っていたのにもかかわらず、サッカーの試合は中止されませんでした。(Ōame ga futte ita no ni mo kakawarazu, sakkā no shiai wa chūshi saremasen deshita.)",
      "ベクター描画の実装には苦労しましたが、非常に美しい書体で描けて満足です。(Bekutā bygōa no jissou ni wa kurō shimashita ga, hijou ni utsukushii shotai de kakete manzoku desu.)"
    ]
  },

  // --- MÓDULO 10: HIPÓTESES ---
  36: {
    EN: [
      "If I could, I would travel now.",
      "If I had more money, I would buy a tablet.",
      "If I could speak Japanese fluently, I would move to Tokyo.",
      "If I had extra free time, I would study languages every day.",
      "If we could run serverless databases, we wouldn't need local storage."
    ],
    IT: [
      "Se potessi, viaggerei subito.",
      "Se avessi più soldi, comprerei un tablet.",
      "Se parlassi il giapponese fluentemente, mi trasferirei a Tokyo.",
      "Se avessi più tempo libero, studierei le lingue tutti i giorni.",
      "Se potessimo usare database serverless, non servirebbe la memoria locale."
    ],
    DE: [
      "Wenn ich könnte, würde ich jetzt reisen.",
      "Wenn ich mehr Geld hätte, würde ich ein Tablet kaufen.",
      "Wenn ich fließend Japanisch sprechen könnte, würde ich nach Tokio ziehen.",
      "Wenn ich mehr Freizeit hätte, würde ich jeden Tag Sprachen lernen.",
      "Wenn wir eine Serverless-Datenbank hätten, bräuchten wir keinen lokalen Speicher."
    ],
    JP: [
      "もしできたら、今すぐ旅行したいです。(Moshi dekitara, ima sugu ryokō shitai desu.)",
      "もしもっとお金があったら、新しいタブレットを買うのに。(Moshi motto okane ga attara, atarashii taburetto o kau noni.)",
      "日本語がペラペラに話せたら、東京に引っ越して働きたいです。(Nihongo ga perapera ni hanasetara, Tōkyō ni hikkoshite hatarakitai desu.)",
      "もし十分な自由時間があれば、毎日４つの言語を学習したいです。(Moshi jūbun na jiyū jikan ga areba, mainichi yotsu no gengo o gakushū shitai desu.)",
      "もしオンラインの無料サーバーを使えるなら、端末にデータを残さず同期できます。(Moshi onrain no muryō sābā o tsukaeru nara, tansatsu ni dēta o nokosazu dōki dekimasu.)"
    ]
  },
  37: {
    EN: [
      "On a perfect day, I would sleep.",
      "On a perfect day, I would read at a quiet beach.",
      "On a perfect day, I would walk in nature and eat tasty food.",
      "On a perfect day, I would travel to a new city without any plans.",
      "On a perfect day, I would wake up early, exercise, and write code easily."
    ],
    IT: [
      "In una giornata perfetta, vorrei dormire.",
      "In una giornata perfetta, vorrei leggere su una spiaggia tranquilla.",
      "In una giornata perfetta, vorrei camminare nella natura e mangiare bene.",
      "In una giornata perfetta, vorrei visitare una nuova città senza fretta.",
      "In una giornata perfetta, vorrei svegliarmi presto, fare sport e programmare."
    ],
    DE: [
      "An einem perfekten Tag würde ich schlafen.",
      "An einem perfekten Tag würde ich an einem ruhigen Strand lesen.",
      "An einem perfekten Tag würde ich in der Natur wandern und gut essen.",
      "An einem perfekten Tag würde ich ohne Pläne in eine neue Stadt reisen.",
      "An einem perfekten Tag würde ich früh aufstehen, Sport treiben und programmieren."
    ],
    JP: [
      "完璧な一日なら、ゆっくり寝るでしょう。(Kanpeki na ichinichi nara, yukkuri neru deshō.)",
      "完璧な一日なら、静かなビーチで一日中本を読みたいです。(Kanpeki na ichinichi nara, shizuka na bīchi de ichinichijū hon o vomitai desu.)",
      "理想的な一日なら、自然の中を散歩して美味しい料理を食べに行きます。(Risōteki na ichinichi nara, shizen no naka o sanpo shite oishii ryōri o tabe ni ikimasu.)",
      "もし完璧な休日なら、何の計画も立てずに新しい街へ冒険に出かけます。(Moshi kanpeki na kyūjitsu nara, nan no keikaku mo tatezu ni atarashii machi e bōken ni dekakemasu.)",
      "完璧な一日とは、早起きして運動し、詰まることなくコードを書ける日です。(Kanpeki na ichinichi to wa, hayaoki shite undou shi, tsumaru koto naku kōdo o kakeru hi desu.)"
    ]
  },
  38: {
    EN: [
      "If I were you, I would take a rest.",
      "If I were you, I would study grammar first.",
      "If I were you, I would practice speaking with native speakers.",
      "If I were you, I would write in this diary to practice calligraphy.",
      "If I were you, I would make a backup of all my drawings immediately."
    ],
    IT: [
      "Se fossi in te, mi riposerei.",
      "Se fossi in te, studierei prima la grammatica.",
      "Se fossi in te, parlerei con persone madrelingua per fare pratica.",
      "Se fossi in te, scriverei su questo diario per migliorare la calligrafia.",
      "Se fossi in te, farei subito un backup di tutti i miei disegni."
    ],
    DE: [
      "An deiner Stelle würde ich mich ausruhen.",
      "An deiner Stelle würde ich zuerst die Grammatik lernen.",
      "An deiner Stelle würde ich das Sprechen mit Muttersprachlern üben.",
      "An deiner Stelle würde ich in dieses Tagebuch schreiben, um das Schreiben zu üben.",
      "An deiner Stelle würde ich sofort ein Backup aller meiner Zeichnungen machen."
    ],
    JP: [
      "わたしなら、少し休むでしょう。(Watashi nara, sukoshi yasumu deshō.)",
      "もしわたしがあなたなら、まず最初に基本の文法を勉強します。(Moshi watashi ga anata nara, mazu saisho ni kihon no bunpou o benkyō shimasu.)",
      "わたしなら、スピーキング力を伸ばすためにネイティブスピーカーと話します。(Watashi nara, supīkingu ryoku o nobasu tame ni neitibu supīkā to hanashimasu.)",
      "文字を綺麗に書く練習をするために、この手書き日記をお勧めします。(Moji o kirei ni kaku renshū o suru tame ni, kono tegaki nikki o osusume shimasu.)",
      "大切な手書きデータが消える前に、今すぐバックアップを取るべきです。(Taisetsu na tegaki dēta ga kieru mae ni, ima sugu bakkuappu o toru beki desu.)"
    ]
  },
  39: {
    EN: [
      "If I won the lottery, I would stop working.",
      "If I won the lottery, I would buy a huge house.",
      "If I won the lottery, I would travel to all the countries in Europe.",
      "If I won the lottery, I would invest my money and help poor families.",
      "If I won the lottery, I would open a school for language learning."
    ],
    IT: [
      "Se vincessi alla lotteria, smetterei di lavorare.",
      "Se vincessi alla lotteria, comprerei una casa enorme.",
      "Se vincessi alla lotteria, viaggerei in tutti i paesi europei.",
      "Se vincessi alla lotteria, investirei i soldi e aiuterei chi ha bisogno.",
      "Se vincessi alla lotteria, aprirei una scuola per lo studio delle lingue."
    ],
    DE: [
      "Wenn ich im Lotto gewinnen würde, würde ich aufhören zu arbeiten.",
      "Wenn ich im Lotto gewinnen würde, würde ich ein riesiges Haus kaufen.",
      "Wenn ich im Lotto gewinnen würde, würde ich in alle Länder Europas reisen.",
      "Wenn ich im Lotto gewinnen würde, würde ich das Geld investieren und helfen.",
      "Wenn ich im Lotto gewinnen würde, würde ich eine Sprachenschule eröffnen."
    ],
    JP: [
      "宝くじに当たったら、仕事をやめるでしょう。(Takarakuji ni atattara, shigoto o yameru deshō.)",
      "もし宝くじで一等に当選したら、プール付きの大きな家を買いたいです。(Moshi takarakuji de ittō ni tōsen shitara, pūru tsuki no ōkina ie o kaitai desu.)",
      "宝くじが当たったら、仕事を休んでヨーロッパの全ての国を巡る旅に出ます。(Takarakuji ga atattara, shigoto o yasunde Yōroppa no subete no kuni o meguru tabi ni demasu.)",
      "もし大金が手に入ったら、資産運用をしつつ慈善団体に寄付をするつもりです。(Moshi taikin ga te ni haittara, shisan unyou o shitsutsu jizendantai ni kifu o suru tsumori desu.)",
      "もし宝くじが当たったら、誰もが無料で通えるグローバルな語学学校を作ります。(Moshi takarakuji ga atattara, daremo ga muryō de kayoeru gurōbaru na gogaku gakkou o tsukurimasu.)"
    ]
  },

  // --- MÓDULO 11: RELATIVOS ---
  40: {
    EN: [
      "There is a person who helps me.",
      "There is a teacher who changed my life at school.",
      "There is a developer who created the drawing library we use.",
      "I know a person who speaks six languages and travels constantly.",
      "The person who inspired me to study languages lives in Germany."
    ],
    IT: [
      "C'è una persona che mi aiuta.",
      "C'è un insegnante che ha cambiato la mia vita a scuola.",
      "C'è uno sviluppatore che ha scritto la libreria che usiamo.",
      "Conosco una persona che parla sei lingue e viaggia sempre.",
      "La persona che mi ha spinto a studiare le lingue vive in Germania."
    ],
    DE: [
      "Es gibt einen Menschen, der mir hilft.",
      "Es gibt einen Lehrer, der mein Leben in der Schule verändert hat.",
      "Es gibt einen Entwickler, der die Zeichenbibliothek erstellt hat.",
      "Ich kenne eine Person, die sechs Sprachen spricht und viel reist.",
      "Die Person, die mich zum Sprachenlernen inspiriert hat, lebt in Deutschland."
    ],
    JP: [
      "わたしを助けてくれる人がいます。(Watashi o tasukete kureru hito ga imasu.)",
      "学生時代にわたしの考え方を変えてくれた恩師がいます。(Gakusei jidai ni watashi no kangaekata o kaete kureta onshi ga imasu.)",
      "この手書き機能に使われているコードを書いた開発者がいます。(Kono tegaki kinou ni tsukawarete iru kōdo o kaita kaihatsugha ga imasu.)",
      "６つの言語を操り、世界中を飛び回っている知人がいます。(Mutsu no gengo o ayatsuri, sekaijū o tobimawatte iru chijin ga imasu.)",
      "わたしに外国語の面白さを教えてくれたインフルエンサーはドイツに住んでいます。(Watashi ni gaikokugo no omoshirosa o oshiete kureta infuruensā wa Doitsu ni sunde imasu.)"
    ]
  },
  41: {
    EN: [
      "I love the place where I live.",
      "I love the library where I usually study on weekends.",
      "I love the quiet park where I can read books under the trees.",
      "I love the small Italian cafe where they serve the best espresso.",
      "I love the historical town where my grandparents built their house."
    ],
    IT: [
      "Adoro il posto dove vivo.",
      "Adoro la biblioteca dove studio di solito nel fine settimana.",
      "Adoro il parco tranquillo dove posso leggere sotto gli alberi.",
      "Adoro il piccolo bar italiano dove fanno il caffè migliore.",
      "Adoro la città storica dove i miei nonni hanno costruito casa."
    ],
    DE: [
      "Ich liebe den Ort, wo ich wohne.",
      "Ich liebe die Bibliothek, wo ich am Wochenende lerne.",
      "Ich liebe den ruhigen Park, wo ich unter Bäumen lesen kann.",
      "Ich liebe das kleine italienische Café, wo es den besten Espresso gibt.",
      "Ich liebe die historische Stadt, wo meine Großeltern ihr Haus gebaut haben."
    ],
    JP: [
      "自分が住んでいる場所が大好きです。(Jibun ga sunde iru basho ga daisuki desu.)",
      "週末によく勉強しに行く図書館がお気に入りです。(Shūmatsu ni yoku benkyō shi ni iku toshokan ga okiniiri desu.)",
      "木々の下で静かに読書ができるあの公園が大好きです。(Kigi no shita de shizuka ni dokusho ga dekiru ano kouen ga daisuki desu.)",
      "最高に美味しいエスプレッソを出してくれる、あのイタリアンカフェが気に入っています。(Saikou ni oishii esupuresso o dashite kureru, ano Itarian kafe ga kiniitte imasu.)",
      "祖父母が自分たちの手で家を建てtada, ano rekishi no aru furui machi ga daisuki desu。(Sofubo ga jibuntachi no te de ie o tateta, ano rekishi no aru furui machi ga daisuki desu.)"
    ]
  },
  42: {
    EN: [
      "Something I learned is that practice is important.",
      "Something I learned is that consistency is better than speed.",
      "Something I learned is that mistakes are part of the learning process.",
      "Something I learned is that drawing helps to develop visual memory.",
      "Something I learned is that studying languages opens your mind to new perspectives."
    ],
    IT: [
      "Una cosa che ho imparato è che fare pratica è importante.",
      "Una cosa che ho imparato è che la costanza è meglio della velocità.",
      "Una cosa che ho imparato è che gli errori fanno parte dell'apprendimento.",
      "Una cosa che ho imparato è che il disegno aiuta la memoria visiva.",
      "Una cosa che ho imparato è che studiare le lingue apre la mente."
    ],
    DE: [
      "Etwas, das ich gelernt habe, ist, dass Übung wichtig ist.",
      "Etwas, das ich gelernt habe, ist, dass Beständigkeit besser ist als Schnelligkeit.",
      "Etwas, das ich gelernt habe, ist, dass Fehler zum Lernen dazugehören.",
      "Etwas, das ich gelernt habe, ist, dass Zeichnen das visuelle Gedächtnis fördert.",
      "Etwas, das ich gelernt habe, ist, dass Sprachenlernen den Geist öffnet."
    ],
    JP: [
      "学んだことは、練習が大切だということです。(Mananda koto wa, renshū ga taisetsu da to iu koto desu.)",
      "学んだことは、スピードよりも毎日継続することの方が重要だということです。(Mananda koto wa, supīdo yori mo mainichi keizoku suru koto no hō ga jūyou da to iu koto desu.)",
      "学んだことは、間違えることは学習プロセスにおいて不可欠な一部だということです。(Mananda koto wa, machigaeru koto wa gakushū purosesu ni oite fukaketsu na ichibu da to iu koto desu.)",
      "手書きで図や絵を描くことは、視覚的な記憶力を鍛えるのにとても効果的だと知りました。(Tegaki de zu ya e o kaku koto wa, shikakuteki na kiokuryoku o kitaeru no ni totemo koukateki da to shirimashita.)",
      "異国の言語を勉強することは、新しい視点や柔軟な思考力を養うのに役立つと学びました。(Ikoku no gengo o benkyō suru koto wa, atarashii shiten ya jūnan na shikou ryoku o yasunau no ni yakudatsu to manabimashita.)"
    ]
  },
  43: {
    EN: [
      "I'll never forget the day when I finished school.",
      "I'll never forget the day when I traveled alone for the first time.",
      "I'll never forget the day when I arrived in Tokyo and saw the lights.",
      "I'll never forget the day when my team completed our biggest software project.",
      "I'll never forget the day when I was finally able to speak with a native fluently."
    ],
    IT: [
      "Non dimenticherò mai il giorno in cui ho finito la scuola.",
      "Non dimenticherò mai il giorno in cui ho viaggiato da solo per la prima volta.",
      "Non dimenticherò mai il giorno in cui sono arrivato a Tokyo.",
      "Non dimenticherò mai il giorno in cui abbiamo completato il progetto.",
      "Non dimenticherò mai il giorno in cui ho parlato fluentemente con un madrelingua."
    ],
    DE: [
      "Ich werde den Tag nie vergessen, als ich die Schule beendet habe.",
      "Ich werde den Tag nie vergessen, als ich zum ersten Mal allein gereist bin.",
      "Ich werde den Tag nie vergessen, als ich in Tokio ankam.",
      "Ich werde den Tag nie vergessen, an dem unser Team das projekt abgeschlossen hat.",
      "Ich werde den Tag nie vergessen, an dem ich fließend mit einem Muttersprachler sprach."
    ],
    JP: [
      "学校を卒業した日のことは一生忘れません。(Gakkou o sotsugyou shita hi no koto wa isshou wasuremasen.)",
      "初めて一人で海外旅行に出発した日のことは絶対に忘れません。(Hajimete hitori de kaigai ryokō ni shuppatsu shita hi no koto wa zettai ni wasuremasen.)",
      "東京に到着して、夜の眩しい街の光を初めて見た日のことは忘れられません。(Tōkyō ni tōchaku shite, yoru no mabushii machi no hikari o hajimete mita hi no koto wa wasurerarenasu.)",
      "わたしたちの開発チームが最大のシステムを作り上げ、無事にリリースした日は忘れられません。(Watashitachi no kaihatsu chīmu ga saidai no shisutemu o tsukuriage, buji ni rirīsu shita hi wa wasureraremasen.)",
      "ネイティブスピーカーと初めて緊張せずに自然な会話ができた瞬間は、一生の思い出です。(Neitibu supīkā to hajimete kinchou sezu ni shizen na kaiwa ga dekita shunkan wa, isshou no omoide desu.)"
    ]
  },

  // --- MÓDULO 12: REFLEXÕES ---
  44: {
    EN: [
      "This year was good. I learned that consistency works.",
      "This year was full of challenges. I learned that patience is key.",
      "This year was very positive because I developed my programming skills.",
      "This year was amazing, although we had to work hard to achieve our goals.",
      "This year taught me that studying a little bit every day leads to great progress."
    ],
    IT: [
      "Quest'anno è stato bello. Ho imparato che la costanza ripaga.",
      "Quest'anno è stato pieno di sfide. Ho imparato ad avere pazienza.",
      "Quest'anno è stato positivo perché ho migliorato la programmazione.",
      "Quest'anno è stato fantastico, anche se abbiamo lavorato duramente.",
      "Quest'anno mi ha insegnato che studiare poco ogni giorno fa fare grandi progressi."
    ],
    DE: [
      "Dieses Jahr war gut. Ich habe gelernt, dass Beständigkeit wichtig ist.",
      "Dieses Jahr war voller Herausforderungen. Ich habe gelernt, geduldig zu sein.",
      "Dieses Jahr war sehr positiv, da ich meine Programmierkenntnisse verbessert habe.",
      "Dieses Jahr war fantastisch, obwohl wir hart arbeiten mussten.",
      "Dieses Jahr hat mich gelehrt, dass täglich kleine Schritte zu großem Erfolg führen."
    ],
    JP: [
      "今年は良い年でした。継続は力なりだと学びました。(Kotoshi wa yoi toshi deshita. Keizoku wa chikara nari da to manabimashita.)",
      "今年は多くの挑戦がありました。忍耐強さがいかに重要かを学びました。(Kotoshi wa ōku no chōsen ga arimashita. Nintaizuyosa ga ika ni jūyou ka o manabimashita.)",
      "今年はプログラミングスキルを大きく向上させることができたので、とても有意義でした。(Kotoshi wa purogramingu sukiru o ōkiku kōjō saseru koto ga dekita node, totemo yūigi deshita.)",
      "今年は目標を達成するために非常に忙しかったですが、素晴らしい一年でした。(Kotoshi wa mokuhyō o tassei suru tame ni hijou ni isogashikatta desu ga, subarashii ichinen deshita.)",
      "毎日少しずつでもコツコツと勉強を積み重ねることが、大きな成果に繋がると実感しました。(Mainichi sukoshizutsu demo kotsukotsu to benkyō o tsumikasaneru koto ga, ōkina seika ni tsunagaru to jikkan shimashita.)"
    ]
  },
  45: {
    EN: [
      "I'm proud that I studied languages.",
      "I'm proud that I wrote in this hand-drawn diary.",
      "I'm proud that I completed the full programming course this year.",
      "I'm proud that I established a healthy daily exercise routine.",
      "I'm proud that I stayed disciplined and did not quit when things were hard."
    ],
    IT: [
      "Sono fiero di aver studiato le lingue.",
      "Sono fiero di aver scritto su questo diario a mano.",
      "Sono fiero di aver completato il corso di programmazione quest'anno.",
      "Sono fiero di aver creato una routine sana di allenamento quotidiano.",
      "Sono fiero di essere rimasto disciplinato senza arrendermi nei momenti difficili."
    ],
    DE: [
      "Ich bin stolz, dass ich Sprachen gelernt habe.",
      "Ich bin stolz, dass ich in dieses handgeschriebene Tagebuch geschrieben habe.",
      "Ich bin stolz, dass ich den Programmierkurs dieses Jahr abgeschlossen habe.",
      "Ich bin stolz, dass ich eine gesunde tägliche Sportroutine aufgebaut habe.",
      "Ich bin stolz, dass ich diszipliniert geblieben bin und nicht aufgegeben habe."
    ],
    JP: [
      "外国語の勉強を継続できたことを誇りに思います。(Gaikokugo no benkyō o keizoku dekita koto o hokori ni omoimasu.)",
      "この手書きの日記を毎日書き続けることができた自分を誇らしく思います。(Kono tegaki no nikki o mainichi kakitsuzukeru koto ga dekita jibun o hororashiku omoimasu.)",
      "今年、プログラミング開発の全カリキュラムを修了できたことを誇りに思います。(Kotoshi, purogramingu kaihatsu no zen karikyuramu o shūryou dekita koto o hokori ni omoimasu.)",
      "健康的な毎日の運動習慣をしっかりと定着させられたことに満足しています。(Kenkōteki na mainichi no undou shūkan o shikari to teichaku saserareta koto ni manzoku shite imasu.)",
      "どんなに困難な状況下でも、途中で投げ出asazu kiritsu o mamorinuta jibun o hokori ni omoimasu。(Donna ni konnan na jōkyōka demo, tochū de nagedasazu kiritsu o mamorinuta jibun o hokori ni omoimasu.)"
    ]
  },
  46: {
    EN: [
      "Next year I hope to travel more.",
      "Next year I hope to speak Italian and German fluently.",
      "Next year I hope to build my own personal web application.",
      "Next year I hope to read at least twenty books and learn new skills.",
      "Next year I hope to keep drawing every day and improve my health further."
    ],
    IT: [
      "L'anno prossimo spero di viaggiare di più.",
      "L'anno prossimo spero di parlare l'italiano e il tedesco correntemente.",
      "L'anno prossimo spero di creare la mia applicazione web personale.",
      "L'anno prossimo spero di leggere almeno venti libri e imparare cose nuove.",
      "L'anno prossimo spero di continuare a disegnare ogni giorno e stare bene."
    ],
    DE: [
      "Nächstes Jahr hoffe ich, mehr zu reisen.",
      "Nächstes Jahr hoffe ich, fließend Italienisch und Deutsch zu sprechen.",
      "Nächstes Jahr hoffe ich, meine eigene Webanwendung zu entwickeln.",
      "Nächstes Jahr hoffe ich, mindestens zwanzig Bücher zu lesen und Neues zu lernen.",
      "Nächstes Jahr hoffe ich, jeden Tag zu zeichnen und gesünder zu leben."
    ],
    JP: [
      "来年はもっとたくさん旅行に行きたいです。(Rainen wa motto takasan ryokō ni ikitai desu.)",
      "来年はイタリア語とドイツ語を流暢に話せるようになることを願っています。(Rainen wa Itariago to Doitsugo o ryūchō ni hanaseru yō ni naru koto o negatte imasu.)",
      "来年は自分のアイdeia o katachi ni shita, orijinaru no webuapuri o koukai shitai desu。(来年は自分のアイデアを形にした、オリジナルのウェブアプリを公開したいです。)"
    ]
  },
  47: {
    EN: [
      "Dear me, I hope you achieved your goals.",
      "Dear me, I hope you traveled to the places you wanted.",
      "Dear me, I hope you kept writing in this diary and drawing every day.",
      "Dear me, I hope you are speaking languages fluently and coding every day.",
      "Dear me, I hope you stayed healthy, happy, and never stopped learning new things."
    ],
    IT: [
      "Caro me, spero che tu abbia raggiunto i tuoi obiettivi.",
      "Caro me, spero che tu abbia viaggiato nei posti che desideravi.",
      "Caro me, spero che tu abbia continuato a scrivere su questo diario.",
      "Caro me, spero che tu parli le lingue fluentemente e programmi ogni giorno.",
      "Caro me, spero che tu sia in salute, felice e non abbia mai smesso di imparare."
    ],
    DE: [
      "Liebes Ich, ich hoffe, du hast deine Ziele erreicht.",
      "Liebes Ich, ich hoffe, du bist an die Orte gereist, die du woltest.",
      "Liebes Ich, ich hoffe, du hast weiter in dieses Tagebuch geschrieben.",
      "Liebes Ich, ich hoffe, du sprichst Sprachen fließend und programmierst täglich.",
      "Liebes Ich, ich hoffe, du bist gesund, glücklich und lernst immer noch Neues."
    ],
    JP: [
      "未来のわたしへ、すべての目標を達成できているといいですね。(Mirai no watashi e, subete no mokuhyō o tassei dekite iru to ii desu ne.)",
      "未来のわたしへ、自分が行きたかった美しい国々へ旅できていることを願います。(Mirai no watashi e, jibun ga ikitakatta utsukushii kuniguni e tabi dekite iru koto o negaimasu.)",
      "未来のわたしへ、毎日この日記帳に手書きで絵や文字を書き続けていますか。(Mirai no watashi e, mainichi kono nikkichō ni tegaki de e ya moji o kakitsuzukete imasu ka.)",
      "未来のわたしへ、外国語を流暢に話し、毎日ワクワクしながら開発を行っていますか。(Mirai no watashi e, gaikokugo o ryūchō ni hanashi, mainichi wakuwaku shinagara kaihatsu o okonavte imasu ka.)",
      "未来のわたしへ、健康で充実した毎日を送り、新しい挑戦をずっと楽しんでいると信じています。(Mirai no watashi e, kenkō de jūjitsu shita mainichi o okuri, atarashii chōsen o zutto tanoshinde iru to shinjite imasu.)"
    ]
  }
};
