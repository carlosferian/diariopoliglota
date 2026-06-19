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
      "Im Stau zu sitzen nervt mich mehr als in jeder anderen Warteschlange.",
      "Nichts nervt mich mehr als ein Autoalarm, der um zwei Uhr nachts losgeht."
    ],
    JP: [
      "騒音が嫌いです。(Sōon ga kirai desu.)",
      "何時間も渋滞にはまるのが嫌いです。(Nanjikan mo jūtai ni hamaru no ga kirai desu.)",
      "朝早くから始まる工事の音が大嫌いです。(Asa hayaku kara hajimaru kōji no oto ga daikirai desu.)",
      "どんな列に並ぶよりも、渋滞の中に座っている方が嫌いです。(Donna retsu ni narabu yori mo, jūtai no naka ni suwatte iru hō ga kirai desu.)",
      "夜中の二時に鳴り出す車のアラームほど嫌いなものはない。(Yonaka no niji ni nari dasu kuruma no arāmu hodo kirai na mono wa nai.)"
    ]
  },

  // --- MÓDULO 3: FUTURO ---
  8: {
    EN: [
      "Today I'm going to work.",
      "Today I'm going to study languages and read a book.",
      "Today I'm going to cook a delicious pasta dish for dinner.",
      "Today I'm going to clean my apartment and go to the gym.",
      "Today I'm going to meet my colleagues to discuss our new project."
    ],
    IT: [
      "Oggi ho intenzione di lavorare.",
      "Oggi ho intenzione di studiare le lingue e leggere.",
      "Oggi ho intenzione di cucinare un piatto di pasta per cena.",
      "Oggi ho intenzione di pulire l'appartamento e andare in palestra.",
      "Oggi ho intenzione di incontrare i colleghi per discutere del progetto."
    ],
    DE: [
      "Heute werde ich arbeiten.",
      "Heute werde ich Sprachen lernen und ein Buch lesen.",
      "Heute werde ich ein leckeres Nudelgericht zum Abendessen kochen.",
      "Heute werde ich meine Wohnung putzen und ins Fitnessstudio gehen.",
      "Heute werde ich meine Kollegen treffen, um das neue Projekt zu besprechen."
    ],
    JP: [
      "今日、仕事をするつもりです。(Kyō, shigoto o suru tsumori desu.)",
      "今日、語学の勉強をして本を読むつもりです。(Kyō, gogaku no benkyō o shite hon o yomu tsumori desu.)",
      "今日、晩ご飯に美味しいパスタを作るつもりです。(Kyō, bangohan ni oishii pasuta o tsukuru tsumori desu.)",
      "今日、アパートの掃除をしてからジムに行く予定です。(Kyō, apāto no souji o shite kara jimu ni iku yotei desu.)",
      "今日、同僚と会って新しいプロジェクトについて話し合う予定です。(Kyō, dōryō to atte atarashii purojekuto ni tsuite hanashiau yotei desu.)"
    ]
  },
  9: {
    EN: [
      "This weekend I plan to sleep.",
      "This weekend I plan to watch a good movie.",
      "This weekend I plan to visit my parents and eat together.",
      "This weekend I plan to go hiking in the mountains to breathe fresh air.",
      "This weekend I plan to work on my personal project and relax at home."
    ],
    IT: [
      "Questo fine settimana voglio dormire.",
      "Questo fine settimana voglio vedere un bel film.",
      "Questo fine settimana voglio visitare i miei genitori e cenare con loro.",
      "Questo fine settimana voglio fare un'escursione in montagna per stare all'aria aperta.",
      "Questo fine settimana voglio lavorare al mio progetto personale e rilassarmi."
    ],
    DE: [
      "Dieses Wochenende möchte ich schlafen.",
      "Dieses Wochenende möchte ich einen guten Film sehen.",
      "Dieses Wochenende möchte ich meine Eltern besuchen und mit ihnen essen.",
      "Dieses Wochenende möchte ich in den Bergen wandern gehen, um frische Luft zu schnappen.",
      "Dieses Wochenende möchte ich an meinem Projekt arbeiten und mich zu Hause entspannen."
    ],
    JP: [
      "今週末、ゆっくり寝たいです。(Konshūmatsu, yukkuri netai desu.)",
      "今週末、面白い映画を見たいです。(Konshūmatsu, omoshiroi eiga o mitai desu.)",
      "今週末、実家に行って親と一緒にご飯を食べたいです。(Konshūmatsu, jikka ni itte oya to issho ni gohan o tabetai desu.)",
      "今週末、新鮮な空気を吸うために山へハイキングに行きたいです。(Konshūmatsu, shinsen na kūki o sū tame ni yama e haikingu ni ikitai desu.)",
      "今週末は自分の個人開発を進めて、家でリラックスしたいと考えています。(Konshūmatsu wa jibun no kojin kaihatsu o susumete, ie de rirakkusu shitai to kangaete imasu.)"
    ]
  },
  10: {
    EN: [
      "One day I want to travel to Japan.",
      "One day I want to travel to Italy to eat real pizza.",
      "One day I want to travel to Europe and visit historical sites.",
      "One day I want to travel to Canada to see the beautiful nature and lakes.",
      "One day I want to travel around the world and experience different cultures."
    ],
    IT: [
      "Un giorno voglio andare in Giappone.",
      "Un giorno voglio andare in Italia per mangiare la vera pizza.",
      "Un giorno voglio andare in Europa e visitare i monumenti storici.",
      "Un giorno voglio andare in Canada per vedere i laghi e la natura selvaggia.",
      "Un giorno voglio fare un viaggio intorno al mondo per conoscere culture diverse."
    ],
    DE: [
      "Eines Tages will ich nach Japan reisen.",
      "Eines Tages will ich nach Italien reisen, um echte pizza zu essen.",
      "Eines Tages will ich nach Europa reisen und historische Orte besuchen.",
      "Eines Tages will ich nach Kanada reisen, um die schöne Natur zu sehen.",
      "Eines Tages will ich eine Weltreise machen und fremde Kulturen erleben."
    ],
    JP: [
      "いつか日本に旅行したいです。(Itsuka Nihon ni ryokō shitai desu.)",
      "いつか本場のピザを食べるためにイタリアへ行きたいです。(Itsuka honba no piza o taberu tame ni Itaria e ikitai desu.)",
      "いつかヨーロッパに行って歴史的な場所を訪ねたいです。(Itsuka Yōroppa ni itte rekishiteki na basho o tazunetai desu.)",
      "いつかカナダに行って美しい大自然と湖を見てみたいです。(Itsuka Kanada ni itte utsukushii daishizen to mizuumi o mite mitai desu.)",
      "いつか世界一周 of ryokou ni dete, tayō na bunka o chokusetsu taiken shite mitai desu。(Itsuka sekai isshū no tabi ni dete, tayō na bunka o chokusetsu taiken shite mitai desu.)"
    ]
  },
  11: {
    EN: [
      "This month I will try to read more.",
      "This month I will try to practice English every day.",
      "This month I will try to save money for my future trip.",
      "This month I will try to eat healthier foods and avoid sugar.",
      "This month I will try to complete the first module of my online course."
    ],
    IT: [
      "Questo mese cercherò di leggere di più.",
      "Questo mese cercherò di praticare l'inglese ogni giorno.",
      "Questo mese cercherò di risparmiare soldi per il mio prossimo viaggio.",
      "Questo mese cercherò di mangiare in modo più sano ed evitare gli zuccheri.",
      "Questo mese cercherò di completare il primo modulo del mio corso online."
    ],
    DE: [
      "Diesen Monat will ich mehr lesen.",
      "Diesen Monat will ich jeden Tag Englisch üben.",
      "Diesen Monat will ich Geld für meine nächste Reise sparen.",
      "Diesen Monat will ich mich gesünder ernähren und Zucker vermeiden.",
      "Diesen Monat will ich das erste Modul meines Online-Kurses abschließen."
    ],
    JP: [
      "今月、もっと本を読むようにします。(Kongetsu, motto hon o yomu yō ni shimasu.)",
      "今月、毎日外国語を練習しようと思います。(Kongetsu, mainichi gaikokugo o renshū shiyō to omoimasu.)",
      "今月、将来の旅行のために貯金を頑張るつもりです。(Kongetsu, shourai no ryokō no tame ni chokin o ganbaru tsumori desu.)",
      "今月、健康的な食事を心がけて砂糖を控えるようにします。(Kongetsu, kenkōteki na shokuji o kokorogakete satou o hikaeru yō ni shimasu.)",
      "今月中にオンラインコースの最初のモジュールを終わらせることを目標にしています。(Kongetsuchū ni onrain kōsu no saisho no mojūru o owaraseru koto o mokuhyō ni shite imasu.)"
    ]
  },

  // --- MÓDULO 4: PASSADO ---
  12: {
    EN: [
      "Yesterday I stayed at home.",
      "Yesterday I studied a lot and cleaned my room.",
      "Yesterday I met my friend and we drank coffee together.",
      "Yesterday I worked late because I had many things to finish.",
      "Yesterday I woke up late, but I managed to finish my tasks on time."
    ],
    IT: [
      "Ieri sono rimasto a casa.",
      "Ieri ho studiato molto e ho pulito la mia stanza.",
      "Ieri ho incontrato il mio amico e abbiamo bevuto un caffè.",
      "Ieri ho lavorato fino a tardi perché avevo molte cose da finire.",
      "Ieri mi sono svegliato tardi, ma sono riuscito a completare tutto in tempo."
    ],
    DE: [
      "Gestern bin ich zu Hause geblieben.",
      "Gestern habe ich viel gelernt und mein Zimmer aufgeräumt.",
      "Gestern habe ich meinen Freund getroffen und wir haben Kaffee getrunken.",
      "Gestern habe ich bis spät gearbeitet, da ich viele Aufgaben erledigen musste.",
      "Gestern bin ich spät aufgewacht, konnte aber meine Arbeit rechtzeitig beenden."
    ],
    JP: [
      "昨日、わたしは家にいました。(Kinō, watashi wa ie ni imashita.)",
      "昨日、一生懸命勉強して部屋の掃除をしました。(Kinō, isshōkenmei benkyō shite heya no souji o shimashita.)",
      "昨日、友達に会って一緒にコーヒーを飲みました。(Kinō, tomodachi ni atte issho ni kōhī o nomimashita.)",
      "昨日、終わらせるべきタスクがたくさんあったので遅くまで働きました。(Kinō, owaraseru beki tasuku ga takasan atta node osoku made hatarakimashita.)",
      "昨日、寝坊してしまいましたが、なんとか時間通りに作業を終えました。(Kinō, nebō shite shimaimashita ga, nantoka jikandōri ni sagyou o oemashita.)"
    ]
  },
  13: {
    EN: [
      "The best thing I ate was pizza.",
      "The best thing I ate was pasta at a local restaurant.",
      "The best thing I ate was a chocolate cake made by my mother.",
      "The best thing I ate was fresh sushi when I visited Tokyo.",
      "The best thing I ate was a traditional dish that I cooked myself last Sunday."
    ],
    IT: [
      "La cosa migliore che ho mangiato è stata la pizza.",
      "La cosa migliore che ho mangiato è stata la pasta in un ristorante.",
      "La cosa migliore che ho mangiato è stata la torta al cioccolato di mia madre.",
      "La cosa migliore che ho mangiato è stato il sushi fresco a Tokyo.",
      "La cosa migliore che ho mangiato è stato un piatto tradizionale fatto da me domenica."
    ],
    DE: [
      "Das Beste, was ich gegessen habe, war Pizza.",
      "Das Beste, was ich gegessen habe, war Pasta in einem lokalen Restaurant.",
      "Das Beste, was ich gegessen habe, war ein Schokoladenkuchen von meiner Mutter.",
      "Das Beste, was ich gegessen habe, war frisches Sushi in Tokio.",
      "Das Beste, was ich gegessen habe, war ein traditionelles Gericht, das ich selbst gekocht habe."
    ],
    JP: [
      "一番美味しかったのはピザでした。(Ichiban oishikatta no wa piza deshita.)",
      "一番美味しかったのはレストランで食べたパスタでした。(Ichiban oishikatta no wa resutoran de tabeta pasuta deshita.)",
      "一番美味しかったのは母が作ってくれたチョコレートケーキでした。(Ichiban oishikatta no wa haha ga tsukutte kureta chokorēto kēki deshita.)",
      "一番美味しかったのは東京を訪れたときに食べた新鮮なお寿司でした。(Ichiban oishikatta no wa Tōkyō o otozureta toki ni tabeta shinsen na osushi deshita.)",
      "一番美味しかったのは、先週の日曜日に自分で作った伝統的な料理でした。(Ichiban oishikatta no wa, senshū no nichiyōbi ni jibun de tsukutta dentōteki na ryōri deshita.)"
    ]
  },
  14: {
    EN: [
      "Last month I visited a park.",
      "Last month I visited a beautiful beach with my family.",
      "Last month I visited an interesting museum in the capital city.",
      "Last month I visited a historical castle during my weekend trip.",
      "Last month I visited a quiet mountain village to escape the noisy city."
    ],
    IT: [
      "Il mese scorso ho visitato un parco.",
      "Il mese scorso ho visitato una bellissima spiaggia con la famiglia.",
      "Il mese scorso ho visitato un museo interessante nella capitale.",
      "Il mese scorso ho visitato un castello storico durante il fine settimana.",
      "Il mese scorso ho visitato un piccolo paese in montagna per rilassarmi."
    ],
    DE: [
      "Letzten Monat habe ich einen Park besucht.",
      "Letzten Monat habe ich einen wunderschönen Strand mit meiner Familie besucht.",
      "Letzten Monat habe ich ein interessantes Museum in der Hauptstadt besucht.",
      "Letzten Monat habe ich ein historisches Schloss während meiner Wochenendreise besucht.",
      "Letzten Monat habe ich ein ruhiges Bergdorf besucht, um der lauten Stadt zu entfliehen."
    ],
    JP: [
      "先月、近くの公園に行きました。(Sengetsu, chikaku no kouen ni ikimashita.)",
      "先月、家族と一緒に美しい海を訪れました。(Sengetsu, kazoku to issho ni utsukushii umi o otozuremashita.)",
      "先月、首都にある面白い博物館に行ってきました。(Sengetsu, shuto ni aru omoshiroi hakubutsukan ni itte kimashita.)",
      "先月、週末の旅行で歴史的な古いお城を見学しました。(Sengetsu, shūmatsu no ryokō de rekishiteki na furui oshiro o kengaku shimashita.)",
      "先月、都会の喧騒から離れるために静かな山奥 of mura o otozuremashita。(Sengetsu, tokai no kensō kara hanareru tame ni shizuka na yamaoku no mura o otozuremashita.)"
    ]
  },
  15: {
    EN: [
      "This week something happened.",
      "This week something good happened: I got a new job offer.",
      "This week something unusual happened when I was walking in the park.",
      "This week something unexpected happened and I had to change all my plans.",
      "This week something surprising happened that made me rethink my career choices."
    ],
    IT: [
      "Questa settimana è successo qualcosa.",
      "Questa settimana è successo che ho ricevuto un'offerta di lavoro.",
      "Questa settimana è successo qualcosa di strano mentre camminavo nel parco.",
      "Questa settimana è successo un imprevisto e ho dovuto cambiare i miei piani.",
      "Questa settimana è successa una cosa sorprendente che mi ha fatto riflettere sulla carriera."
    ],
    DE: [
      "Diese Woche ist etwas passiert.",
      "Diese Woche ist etwas Gutes passiert: Ich habe ein Jobangebot bekommen.",
      "Diese Woche ist etwas Seltsames passiert, als ich im Park spazieren ging.",
      "Diese Woche ist etwas Unerwartetes passiert, sodass ich meine Pläne ändern musste.",
      "Diese Woche ist etwas Überraschendes passiert, das mich über meine Karriere nachdenken ließ."
    ],
    JP: [
      "今週、あることが起こりました。(Konshū, aru koto ga okorimashita.)",
      "今週、新しい仕事のオファーをもらうという良いことがありました。(Konshū, atarashii shigoto no ofā o morau to iu yoi koto ga arimashita.)",
      "今週、公園を散歩しているときに少し奇妙な出来事が起きました。(Konshū, kouen o sanpo shite iru toki ni sukoshi kimyou na dekigoto ga okimashia.)",
      "今週、予期せぬことが起こり、予定をすべて変更せねばなりませんでした。(Konshū, yokisenu koto ga okori, yotei o subete henkou seneba narimasen deshita.)",
      "今週、自分のキャリアの選択を再考させるような驚くべき出来事がありました。(Konshū, jibun no kyaria no sentaku o saikou saseru yō na odorokubeki dekigoto ga arimashita.)"
    ]
  },

  // --- MÓDULO 5: CONECTORES ---
  16: {
    EN: [
      "First I woke up, then I ate breakfast.",
      "First I prepared my things, then I went out to work.",
      "First I read the instructions, then I started coding the application.",
      "First I worked out at the gym, then I bought fresh groceries for dinner.",
      "First we discussed the budget, then we decided on the project timeline."
    ],
    IT: [
      "Prima mi sono svegliato, poi ho fatto colazione.",
      "Prima ho preparato le mie cose, poi sono uscito per andare al lavoro.",
      "Prima ho letto le istruzioni, poi ho iniziato a programmare l'applicazione.",
      "Prima ho fatto palestra, poi ho comprato le verdure fresche per la cena.",
      "Prima abbiamo discusso del budget, poi abbiamo definito le date del progetto."
    ],
    DE: [
      "Zuerst bin ich aufgewacht, dann habe ich gefrühstückt.",
      "Zuerst habe ich meine Sachen gepackt, dann bin ich zur Arbeit gegangen.",
      "Zuerst habe ich die Anleitung gelesen, dann habe ich die App programmiert.",
      "Zuerst habe ich im Fitnessstudio trainiert, dann habe ich Lebensmittel gekauft.",
      "Zuerst haben wir das Budget besprochen, dann haben wir den Zeitplan festgelegt."
    ],
    JP: [
      "まず起きて、それから朝ご飯を食べました。(Mazu okite, sorekara asagohan o tabemashita.)",
      "まず荷物を準備して、それから仕事に出かけました。(Mazu nimotsu o junbi shite, sorekara shigoto ni dekakemashita.)",
      "まず説明書を読み、それからアプリの開発を始めました。(Mazu setsumeisho o yomi, sorekara apuri no kaihatsu o hajimemashita.)",
      "まずジムで運動をして、それから晩ご飯の食材を買いに行きました。(Mazu jimu de undou o shite, sorekara bangohan no shokuzai o kai ni ikimashita.)",
      "まず予算について話し合い、それからプロジェクトの予定を決めました。(Mazu yosan ni tsuite hanashiai, sorekara purojekuto no yotei o kimemashita.)"
    ]
  },
  17: {
    EN: [
      "I had a problem, so I solved it.",
      "I had a computer problem, so I restarted the system.",
      "I had a difficult coding problem, so I searched for it online.",
      "I had a misunderstanding with my client, so I called him to talk.",
      "I had a problem with my database, so I wrote a script to clean the data."
    ],
    IT: [
      "Ho avuto un problema, così l'ho risolto.",
      "Ho avuto un problema al computer, così ho riavviato il sistema.",
      "Ho avuto un problema difficile nel codice, così ho cercato online.",
      "Ho avuto un malinteso con il cliente, così l'ho chiamato per chiarire.",
      "Ho avuto un problema con il database, così ho creato uno script di pulizia."
    ],
    DE: [
      "Ich hatte ein Problem, also habe ich es gelöst.",
      "Ich hatte ein Computerproblem, also habe ich das System neu gestartet.",
      "Ich hatte ein schweres Code-Problem, also habe ich online nachgesehen.",
      "Ich hatte ein Missverständnis mit dem Kunden, also habe ich ihn angerufen.",
      "Ich hatte ein Problem mit der Datenbank, also habe ich ein Skript geschrieben."
    ],
    JP: [
      "問題がありましたが、解決しました。(Mondai ga arimashita ga, kaiketsu shimashita.)",
      "パソコンの調子が悪かったので、システムを再起動して解決しました。(Pasokon no chōshi ga warukatta node, shisutemu o saikidō shite kaiketsu shimashita.)",
      "プロgraミング no muzukashii bagu ni chokumen shi, netto de shirabete kaiketsu shimashita。(Puroguramingu no muzukashii bagu ni chokumen shi, netto de shirabete kaiketsu shimashita.)",
      "クライアントとの間に誤解があったため、電話をして問題をクリアにしました。(Kurabianto to no ida ni gokai ga atta tame, denwa o shite mondai o kuria ni shimashita.)",
      "データベースの容量不足が発生したため、古いデータを自動削除する処理を追加しました。(Dētabēsu no yōryōbusoku ga hassei shita tame, furui dēta o jidou sakujo suru shori o tsuika shimashita.)"
    ]
  },
  18: {
    EN: [
      "I did it because I was tired.",
      "I went to bed early because I felt exhausted.",
      "I started learning Japanese because I want to visit Japan.",
      "I decided to buy a tablet because it is easier to draw.",
      "I refactored the application code because we needed better database performance."
    ],
    IT: [
      "L'ho fatto perché ero stanco.",
      "Sono andato a dormire presto perché ero esausto.",
      "Ho iniziato a studiare il giapponese perché voglio visitare Tokyo.",
      "Ho deciso di comprare un tablet perché è più comodo per disegnare.",
      "Ho rifatto il codice dell'applicazione perché servivano prestazioni migliori."
    ],
    DE: [
      "Ich habe es gemacht, weil ich müde war.",
      "Ich bin früh ins Bett gegangen, weil ich erschöpft war.",
      "Ich lerne Japanisch, weil ich nach Japan reisen möchte.",
      "Ich habe beschlossen, ein Tablet zu kaufen, weil es einfacher zum Zeichnen ist.",
      "Ich habe den Code refaktoriert, weil wir eine bessere Datenbankleistung brauchten."
    ],
    JP: [
      "疲れていたから、そうしました。(Tsukarete ita kara, sō shimashita.)",
      "とても疲れていたので、早く寝ることにしました。(Totemo tsukarete ita node, hayaku neru koto ni shimashita.)",
      "日本を旅行したいから、日本語の勉強を始めました。(Nihon o ryokō shitai kara, Nihongo no benkyō o hajimemashita.)",
      "絵を描くのがより簡単になるため、タブレットを購入することにしました。(E o kaku no ga yori kantan ni naru tame, taburetto o kōnyū suru koto ni shimasu.)",
      "データベースの処理速度を向上させる必要があったため、コードを書き直しました。(Dētabēsu no shorikokudo o kōjō saseru hitsuyō ga atta tame, kōdo o kakinaoshimagita.)"
    ]
  },
  19: {
    EN: [
      "It all started when I was young.",
      "It all started when I moved to a new apartment.",
      "It all started when I met my college roommate at a cafe.",
      "It all started when I downloaded a language learning app out of curiosity.",
      "It all started when we lost the main database key and had to recover everything."
    ],
    IT: [
      "Tutto è cominciato quando ero giovane.",
      "Tutto è cominciato quando mi sono trasferito nel nuovo appartamento.",
      "Tutto è cominciato quando ho incontrato il mio compagno di stanza.",
      "Tutto è cominciato quando ho scaricato un'app di lingue per curiosità.",
      "Tutto è cominciato quando abbiamo perso la chiave del database."
    ],
    DE: [
      "Alles begann, als ich jung war.",
      "Alles begann, als ich in eine neue Wohnung gezogen bin.",
      "Alles begann, als ich meinen Mitbewohner in einem Café traf.",
      "Alles begann, als ich aus Neugier eine Sprachlern-App heruntergeladen habe.",
      "Alles begann, als wir den Hauptschlüssel der Datenbank verloren haben."
    ],
    JP: [
      "ある日、それが始まりました。(Aru hi, sore ga hajimarimashita.)",
      "新しいアパートに引っ越したとき、すべてが始まりました。(Atarashii apāto ni hikkoshita toki, subete ga hajimarimashita.)",
      "大学の同級生とカフェで偶然会ったときから、この物語が始まりました。(Daigaku no dōkyūsei to kafe de gūzen atta toki kara, kono monogatari ga hajimarimashita.)",
      "好奇心で外国語学習アプリをダウンロードしたとき、すべての物語が始まりました。(Kōkishin de gaikokugo gakushū apuri o daunrōdo shita toki, subete no monogatari ga hajimarimashita.)",
      "メインサーバーのデータが突然消え、手動で復旧せねばならなくなった日からすべてが始まりました。(Mein sābā no dēta ga totsuzen kie, shudou de fukkyū seneba naranaku natta hi kara subete ga hajimarimashita.)"
    ]
  },

  // --- MÓDULO 6: COMPARAÇÕES ---
  20: {
    EN: [
      "Tokyo is bigger than Lisbon.",
      "This city is much bigger than my hometown.",
      "Living in New York is more expensive than living in Berlin.",
      "The public transport system here is cleaner and faster than in Paris.",
      "The historical district of Rome is more charming than modern skyscrapers."
    ],
    IT: [
      "Tokyo è più grande di Lisbona.",
      "Questa città è molto più grande del mio paese natale.",
      "Vivere a New York è più costoso che vivere a Berlino.",
      "I trasporti pubblici qui sono più puliti e veloci che a Parigi.",
      "Il centro storico di Roma è più affascinante dei grattacieli moderni."
    ],
    DE: [
      "Tokio ist größer als Lissabon.",
      "Diese Stadt ist viel größer als meine Heimatstadt.",
      "Das Leben in New York ist teurer als das Leben in Berlin.",
      "Der öffentliche Nahverkehr hier ist sauberer und schneller als in Paris.",
      "Die historische Altstadt von Rom ist charmanter als moderne Wolkenkratzer."
    ],
    JP: [
      "東京はリスボンより大きいです。(Tōkyō wa Risubon yori ōkii desu.)",
      "この街はわたしの故郷の町よりもずっと大きいです。(Kono machi wa watashi no kokyou no machi yori mo zutto ōkii desu.)",
      "ニューヨークで生活することは、ベルリンで暮らすよりもお金がかかります。(Nyūyōku de seikatsu suru koto wa, Berurin de kurasu yori mo okane ga kakarimasu.)",
      "ここの公共交通機関はパリの地下鉄よりも綺麗で早いです。(Koko no koukyou kōtsūkikan wa Pari no chikatetsu yori mo kirei de hayai desu.)",
      "ローマの歴史地区は、近代的な高層ビルよりもはるかに魅力があります。(Rōma no rekishichiku wa, kindai teki na kōsō biru yori mo haruka ni miyoku ga arimasu.)"
    ]
  },
  21: {
    EN: [
      "The person I admire most is my father.",
      "The person I admire most is my smart grandfather.",
      "The person I admire most is an teacher who helped me in school.",
      "The person I admire most is a famous developer who created open-source tools.",
      "The person I admire most is my mother because she is strong and patient."
    ],
    IT: [
      "La persona che ammiro di più è mio padre.",
      "La persona che ammiro di più è mio nonno che è intelligente.",
      "La persona che ammiro di più è un insegnante che mi ha aiutato.",
      "La persona che ammiro di più è uno sviluppatore di software open source.",
      "La persona che ammiro di più è mia madre perché è forte e paziente."
    ],
    DE: [
      "Die Person, die ich am meisten bewundere, ist mein Vater.",
      "Die Person, die ich am meisten bewundere, ist mein kluger Großvater.",
      "Die Person, die ich am meisten bewundere, ist ein Lehrer, der mir geholfen hat.",
      "Die Person, die ich am meisten bewundere, ist ein bekannter Open-Source-Entwickler.",
      "Die Person, die ich am meisten bewundere, ist meine Mutter, weil sie stark ist."
    ],
    JP: [
      "わたしが一番尊敬する人は父です。(Watashi ga ichiban sonkei suru hito wa chichi desu.)",
      "わたしが一番尊敬する人は、とても賢い祖fuです。(Watashi ga ichiban sonkei suru hito wa, totemo kashikoi sofu desu.)",
      "わたしが最も尊敬する人は、学生時代に助けてくれた学校の先生です。(Watashi ga mottomo sonkei suru hito wa, gakusei jidai ni tasukete kureta gakkou no sensei desu.)",
      "わたしが尊敬している人は、オープンソースソフトを開発したエンジニアです。(Watashi ga sonkei shite iru hito wa, ōpun sōsu sofuto o kaihatsu shita enjinia desu.)",
      "わたしが最も尊敬する人物は母で、どんな困難にも負けず忍耐強いからです。(Watashi ga mottomo sonkei suru jinbutsu wa haha de, donna konnan ni mo makezu nintaizuyoi kara desu.)"
    ]
  },
  22: {
    EN: [
      "Before I used to watch TV, but now I read.",
      "Before I used to live in a village, but now I live in the city.",
      "Before I used to eat fast food, but now I prefer healthy meals.",
      "Before I used to waste my free time, but now I study foreign languages.",
      "Before I used to draw on paper, but now I do everything on my tablet."
    ],
    IT: [
      "Prima guardavo la televisione, ma adesso leggo libri.",
      "Prima vivevo in un paesino, ma adesso abito in città.",
      "Prima mangiavo cibo spazzatura, ma adesso preferisco piatti sani.",
      "Prima perdevo molto tempo libero, ma adesso studio le lingue straniere.",
      "Prima disegnavo sulla carta, ma adesso faccio tutto sul tablet."
    ],
    DE: [
      "Früher habe ich ferngesehen, aber jetzt lese ich Bücher.",
      "Früher habe ich in einem Dorf gewohnt, aber jetzt lebe ich in der Stadt.",
      "Früher habe ich Fast Food gegessen, aber jetzt bevorzuge ich gesundes Essen.",
      "Früher habe ich meine Freizeit verschwendet, aber jetzt lerne ich Fremdsprachen.",
      "Früher habe ich auf Papier gezeichnet, aber jetzt mache ich alles auf dem Tablet."
    ],
    JP: [
      "前はテレビを見ていましたが、今は本を読んでいます。(Mae wa terebi o mite imashita ga, ima wa hon o yonde imasu.)",
      "前は小さな村に住んでいましたが、今は都会に住んでいます。(Mae wa chiisana mura ni sunde imashita ga, ima wa tokai ni sunde imasu.)",
      "以前はジャンクフードばかり食べていましたが、今は健康に気を使っています。(Izen wa jankufūdo bakari tabete imashita ga, ima wa kenkō ni ki o tsukatte imasu.)",
      "昔は時間を無駄にしていましたが、今は毎日外国語の勉強をしています。(Mukashi wa jikan o muda ni shite imashita ga, ima wa mainichi gaikokugo no benkyō o shite imasu.)",
      "以前は紙のノートに絵を描いていましたが、今はタブレットで全て描いています。(Izen wa kami no nōto ni e o kaite imashita ga, ima wa taburetto de subete kaite imasu.)"
    ]
  },
  23: {
    EN: [
      "The best thing about my city is the park.",
      "The best thing about my city is the quiet beach.",
      "The best thing about my city is the excellent food and cafes.",
      "The best thing about my city is the convenient public transportation system.",
      "The best thing about my city is the friendly people and rich cultural life."
    ],
    IT: [
      "La cosa migliore della mia città è il parco.",
      "La cosa migliore della mia città è la spiaggia tranquilla.",
      "La cosa migliore della mia città è il cibo ottimo e i bar.",
      "La cosa migliore della mia città è l'ottimo sistema di trasporto pubblico.",
      "La cosa migliore della mia città sono le persone accoglienti e la cultura."
    ],
    DE: [
      "Das Beste an meiner Stadt ist der Park.",
      "Das Beste an meiner Stadt ist der ruhige Strand.",
      "Das Beste an meiner Stadt sind die guten Restaurants und Cafés.",
      "Das Beste an meiner Stadt ist das bequeme öffentliche Verkehrssystem.",
      "Das Beste an meiner Stadt sind die freundlichen Menschen und die Kultur."
    ],
    JP: [
      "わたしの街で一番良いのはきれいな公園です。(Watashi no machi de ichiban ii no wa kirei na kouen desu.)",
      "わたしの街の一番の魅力は、静かで美しいビーチです。(Watashi no machi no ichiban no miyoku wa, shizuka de utsukushii bīchi desu.)",
      "わたしの街で最高な部分は、美味しい料理と素敵なカフェが多いことです。(Watashi no machi de saikou na bubun wa, oishii ryōri to suteki na kafe ga ooi koto desu.)",
      "この街で一番良い点は、バスと地下鉄のアクセスが非常に便利なことです。(Kono machi de ichiban ii ten wa, basu to chikatetsu no akusesu ga hijou ni benri na koto desu.)",
      "わたしの街の一番誇れる部分は、親切な人々や活発な文化イベントです。(Watashi no machi no ichiban hororeru bubun wa, shinsetsu na hitobito ya kappatsu na bunka ibento desu.)"
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
