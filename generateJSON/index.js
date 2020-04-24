var fs = require("fs");

let list = [
  {
    "kanji": "一",
    "kname": 1,
    "kstroke": 1,
    "kmeaning": "one",
    "kgrade": 1,
    "kunyomi_ja": "ひと",
    "kunyomi": "hito",
    "onyomi_ja": "イチ",
    "onyomi": "ichi",
    "examples": [
      [
        "一年生（いちねんせい）",
        "first-year student"
      ],
      [
        "一番（いちばん）",
        "number one"
      ],
      [
        "一度（いちど）",
        "once"
      ],
      [
        "一杯（いっぱい）",
        "one cup of, a lot of"
      ],
      [
        "一緒（いっしょ）",
        "together"
      ],
      [
        "一分（いっぷん）",
        "one minute"
      ],
      [
        "一枚（いちまい）",
        "one (flat object) "
      ],
      [
        "一つ（ひとつ）",
        "one (object) "
      ],
      [
        "一人（ひとり）",
        "one person"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "何",
    "kname": "nani",
    "kstroke": 7,
    "kmeaning": "what, how many",
    "kgrade": 2,
    "kunyomi_ja": "なに、なん",
    "kunyomi": "nani, nan",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "幾何学（きかがく）",
        "geometry"
      ],
      [
        "何（なに）",
        "what"
      ],
      [
        "何色（なにいろ）",
        "what color"
      ],
      [
        "何しろ（なにしろ）",
        "at any rate, anyway"
      ],
      [
        "何か（なにか）",
        "something"
      ],
      [
        "何分（なんぷん）",
        "how many minutes"
      ],
      [
        "何時（なんじ）",
        "what time"
      ],
      [
        "何回（なんかい）",
        "how many times"
      ],
      [
        "何百（なんびゃく）",
        "hundreds"
      ],
      [
        "何度も（なんども）",
        "many times"
      ],
      [
        "何才（なんさい）",
        "how old"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "七",
    "kname": 7,
    "kstroke": 2,
    "kmeaning": "seven",
    "kgrade": 1,
    "kunyomi_ja": "なな、なの、ななつ",
    "kunyomi": "nana, nano, nanatsu",
    "onyomi_ja": "シチ",
    "onyomi": "shichi",
    "examples": [
      [
        "七時（しちじ）",
        "7 o'clock"
      ],
      [
        "十七（じゅうしち/じゅうなな）",
        "17"
      ],
      [
        "七五三（しちごさん）",
        "festival for children aged 7, 5 & 3"
      ],
      [
        "七回（ななかい）",
        "7 times"
      ],
      [
        "七週間（ななしゅうかん）",
        "7 weeks"
      ],
      [
        "七才（ななさい）",
        "7 years old"
      ],
      [
        "七日（なのか）",
        "7 days, 7th of the month"
      ],
      [
        "七つ（ななつ）",
        "7 (objects)"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "飼",
    "kname": "shi-ka(u)",
    "kstroke": 13,
    "kmeaning": "raise animals",
    "kgrade": 5,
    "kunyomi_ja": "か、かう",
    "kunyomi": "ka, kau",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "飼料（しりょう）",
        "fodder, feed"
      ],
      [
        "飼育する（しいくする）",
        "breed, raise, rear"
      ],
      [
        "飼う（かう）",
        "keep as a pet"
      ],
      [
        "飼い犬（かいいぬ）",
        "pet dog"
      ],
      [
        "羊飼い（ひつじかい）",
        "shepherd, shepherdess"
      ],
      [
        "放し飼い（はなしがい）",
        "pasturing, grazing"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "示",
    "kname": "ji-shime(su)",
    "kstroke": 5,
    "kmeaning": "show",
    "kgrade": 5,
    "kunyomi_ja": "しめ、しめす",
    "kunyomi": "shime, shimesu",
    "onyomi_ja": "シ、ジ",
    "onyomi": "shi, ji",
    "examples": [
      [
        "示唆する（しさする）",
        "suggest, give a hint"
      ],
      [
        "示談（じだん）",
        "settlement out of court"
      ],
      [
        "掲示する（けいじする）",
        "put up a notice"
      ],
      [
        "指示する（しじする）",
        "indicate, instruct, direct"
      ],
      [
        "誇示する（こじする）",
        "emphasize, show off, display"
      ],
      [
        "展示する（てんじする）",
        "exhibit, display [v.t.]"
      ],
      [
        "表示する（ひょうじする）",
        "mark, display [v.t.]"
      ],
      [
        "暗示する（あんじする）",
        "hint, suggest"
      ],
      [
        "訓示する（くんじする）",
        "instruct, give instructions"
      ],
      [
        "啓示する（けいじする）",
        "apocalypse, reveal"
      ],
      [
        "示す（しめす）",
        "point out, indicate"
      ]
    ],
    "radical": "⽰",
    "rad_order": 144,
    "rad_stroke": 5,
    "rad_name_ja": "しめす",
    "rad_name": "shimesu",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "述",
    "kname": "jutsu-no(beru)",
    "kstroke": 8,
    "kmeaning": "state, mention, refer to, explain",
    "kgrade": 5,
    "kunyomi_ja": "の、のべる",
    "kunyomi": "no, noberu",
    "onyomi_ja": "ジュツ",
    "onyomi": "jutsu",
    "examples": [
      [
        "述語（じゅつご）",
        "predicate [n.]"
      ],
      [
        "著述家（ちょじゅつか）",
        "writer"
      ],
      [
        "述懐する（じゅっかいする）",
        "recollect, reminisce"
      ],
      [
        "供述する（きょうじゅつする）",
        "state, declare"
      ],
      [
        "陳述する（ちんじゅつする）",
        "testify, state, depose"
      ],
      [
        "詳述する（しょうじゅつする）",
        "explain in detail"
      ],
      [
        "記述する（きじゅつする）",
        "describe"
      ],
      [
        "口述する（こうじゅつする）",
        "state verbally"
      ],
      [
        "上述する（じょうじゅつする）",
        "state above"
      ],
      [
        "述べる（のべる）",
        "state, express, mention"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "序",
    "kname": "jo(ban)",
    "kstroke": 7,
    "kmeaning": "introductory part, order, preface",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジョ",
    "onyomi": "jo",
    "examples": [
      [
        "序文（じょぶん）",
        "preface, foreword"
      ],
      [
        "序曲（じょきょく）",
        "overture, prelude"
      ],
      [
        "序説（じょせつ）",
        "introduction"
      ],
      [
        "序列（じょれつ）",
        "rank, ranking order"
      ],
      [
        "順序（じゅんじょ）",
        "order, sequence, procedure"
      ],
      [
        "秩序（ちつじょ）",
        "order, regularity, system"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "織",
    "kname": "(so)shiki",
    "kstroke": 18,
    "kmeaning": "weave",
    "kgrade": 5,
    "kunyomi_ja": "お、おる、おり",
    "kunyomi": "o, oru, ori",
    "onyomi_ja": "ショク、シキ",
    "onyomi": "shoku, shiki",
    "examples": [
      [
        "染織（せんしょく）",
        "weaving and dyeing"
      ],
      [
        "紡織（ぼうしょく）",
        "spinning and weaving"
      ],
      [
        "織機（しょっき）",
        "loom, weaving machine"
      ],
      [
        "組織（そしき）",
        "organization, structure"
      ],
      [
        "織る（おる）",
        "weave"
      ],
      [
        "織り目（おりめ）",
        "texture"
      ],
      [
        "織物（おりもの）",
        "textile, fabric"
      ],
      [
        "毛織（けおり）",
        "woolen fabric, woolen cloth"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "税",
    "kname": "zei(kin)",
    "kstroke": 12,
    "kmeaning": "tax",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゼイ",
    "onyomi": "zei",
    "examples": [
      [
        "税金（ぜいきん）",
        "tax, duty"
      ],
      [
        "税関（ぜいかん）",
        "customs house"
      ],
      [
        "税理士（ぜいりし）",
        "tax counsellor"
      ],
      [
        "関税（かんぜい）",
        "customs, duty, tariff"
      ],
      [
        "所得税（しょとくぜい）",
        "income tax"
      ],
      [
        "間接税（かんせつぜい）",
        "indirect tax"
      ],
      [
        "納税する（のうぜいする）",
        "pay taxes"
      ],
      [
        "課税する（かぜいする）",
        "tax [v.t.]"
      ],
      [
        "脱税する（だつぜいする）",
        "evade tax"
      ],
      [
        "増税する（ぞうぜいする）",
        "increase tax"
      ],
      [
        "減税する（げんぜいする）",
        "decrease tax"
      ],
      [
        "免税する（めんぜいする）",
        "exempt from taxation [v.t.]"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "舌",
    "kname": "zetsu-shita",
    "kstroke": 6,
    "kmeaning": "tongue",
    "kgrade": 5,
    "kunyomi_ja": "した",
    "kunyomi": "shita",
    "onyomi_ja": "ゼツ",
    "onyomi": "zetsu",
    "examples": [
      [
        "舌癌（ぜつがん）",
        "tongue cancer"
      ],
      [
        "舌戦（ぜっせん）",
        "war of words"
      ],
      [
        "毒舌な（どくぜつな）",
        "verbally abusive, sharp-tongued"
      ],
      [
        "饒舌な（じょうぜつな）",
        "garrulous, talkative"
      ],
      [
        "舌（した）",
        "tongue"
      ],
      [
        "猫舌（ねこじた）",
        "unable to take hot food"
      ],
      [
        "二枚舌（にまいじた）",
        "double-dealing, double-tongued"
      ],
      [
        "舌打ちする（したうちする）",
        "smack one's lips"
      ]
    ],
    "radical": "⾆",
    "rad_order": 169,
    "rad_stroke": 6,
    "rad_name_ja": "した",
    "rad_name": "shita",
    "rad_meaning": "tongue",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "銭",
    "kname": "zeni",
    "kstroke": 14,
    "kmeaning": "money",
    "kgrade": 5,
    "kunyomi_ja": "ぜに",
    "kunyomi": "zeni",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "銭湯（せんとう）",
        "bath-house, public bath"
      ],
      [
        "金銭（きんせん）",
        "money, cash"
      ],
      [
        "賽銭（さいせん）",
        "monetary offering"
      ],
      [
        "釣り銭（つりせん）",
        "change [n.]"
      ],
      [
        "守銭奴（しゅせんど）",
        "miser"
      ],
      [
        "無銭飲食（むせんいんしょく）",
        "leaving without paying for food"
      ],
      [
        "銭（ぜに）",
        "money"
      ],
      [
        "小銭（こぜに）",
        "coins, small change"
      ],
      [
        "身銭（みぜに）",
        "one's own money"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "祖",
    "kname": "so(sen)",
    "kstroke": 9,
    "kmeaning": "ancestor",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソ",
    "onyomi": "so",
    "examples": [
      [
        "祖先（そせん）",
        "ancestor"
      ],
      [
        "祖国（そこく）",
        "fatherland, native country"
      ],
      [
        "祖父母（そふぼ）",
        "grandparents"
      ],
      [
        "元祖（がんそ）",
        "originator, founder, pioneer"
      ],
      [
        "教祖（きょうそ）",
        "founder of a religious sect, guru"
      ],
      [
        "先祖（せんぞ）",
        "ancestor"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "測",
    "kname": "soku-haka(ru)",
    "kstroke": 12,
    "kmeaning": "measure, conjecture",
    "kgrade": 5,
    "kunyomi_ja": "はか、はかる",
    "kunyomi": "haka, hakaru",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "測候所（そっこうじょ）",
        "weather measurement station"
      ],
      [
        "憶測（おくそく）",
        "guess, speculation, supposition"
      ],
      [
        "不測（ふそく）",
        "unexpected [n.]"
      ],
      [
        "測量する（そくりょうする）",
        "measure (mass)  [v.t.]"
      ],
      [
        "測定する（そくていする）",
        "measure [v.t.]"
      ],
      [
        "観測する（かんそくする）",
        "observe"
      ],
      [
        "推測する（すいそくする）",
        "guess, conjecture"
      ],
      [
        "予測する（よそくする）",
        "predict, estimate"
      ],
      [
        "目測する（もくそくする）",
        "measure by eye"
      ],
      [
        "測る（はかる）",
        "measure (mass) [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "八",
    "kname": 8,
    "kstroke": 2,
    "kmeaning": "eight",
    "kgrade": 1,
    "kunyomi_ja": "や、よう、やっつ",
    "kunyomi": "ya, you, yattsu",
    "onyomi_ja": "ハチ",
    "onyomi": "hachi",
    "examples": [
      [
        "八月（はちがつ）",
        "August"
      ],
      [
        "八時間（はちじかん）",
        "8 hours"
      ],
      [
        "尺八（しゃくはち）",
        "bamboo flute"
      ],
      [
        "八回（はっかい）",
        "8 times"
      ],
      [
        "八分（はっぷん）",
        "8 minutes"
      ],
      [
        "八百（はっぴゃく）",
        "800"
      ],
      [
        "八つ（やっつ）",
        "8 (objects)"
      ],
      [
        "八百屋（やおや）",
        "greengrocer"
      ],
      [
        "八重桜（やえざくら）",
        "double-flowered cherry-tree"
      ],
      [
        "八日（ようか）",
        "8 days, 8th of the month"
      ]
    ],
    "radical": "⼋",
    "rad_order": 15,
    "rad_stroke": 2,
    "rad_name_ja": "はち",
    "rad_name": "hachi",
    "rad_meaning": "eight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "属",
    "kname": "(sho)zoku",
    "kstroke": 12,
    "kmeaning": "belong to",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾク",
    "onyomi": "zoku",
    "examples": [
      [
        "属性（ぞくせい）",
        "attribute [n.]"
      ],
      [
        "金属（きんぞく）",
        "metal"
      ],
      [
        "専属（せんぞく）",
        "exclusive, specialized [n.]"
      ],
      [
        "猫属（ねこぞく）",
        "the cat genus"
      ],
      [
        "属する（ぞくする）",
        "belong to, be affiliated with"
      ],
      [
        "配属する（はいぞくする）",
        "assign"
      ],
      [
        "従属する（じゅうぞくする）",
        "be subordinated to"
      ],
      [
        "付属する（ふぞくする）",
        "be attached, be associated"
      ],
      [
        "所属する（しょぞくする）",
        "belong to, be affiliated with"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "損",
    "kname": "son(gai)",
    "kstroke": 13,
    "kmeaning": "loss, damage, harm",
    "kgrade": 5,
    "kunyomi_ja": "そこ、そこねる、そこなう",
    "kunyomi": "soko, sokoneru, sokonau",
    "onyomi_ja": "ソン",
    "onyomi": "son",
    "examples": [
      [
        "損（そん）",
        "loss"
      ],
      [
        "損失（そんしつ）",
        "loss"
      ],
      [
        "損得（そんとく）",
        "loss and gain"
      ],
      [
        "損害（そんがい）",
        "damage, injury, loss"
      ],
      [
        "損傷（そんしょう）",
        "damage, injury"
      ],
      [
        "大損（おおぞん）",
        "heavy loss"
      ],
      [
        "損害賠償（そんがいばいしょう）",
        "restitution, compensation"
      ],
      [
        "破損する（はそんする）",
        "damage, be damaged"
      ],
      [
        "損ねる（そこねる）",
        "harm, hurt, injure [v.t.]"
      ],
      [
        "損なう（そこなう）",
        "harm, damage [v.t.]"
      ],
      [
        "見損なう（みそこなう）",
        "misjudge, miss, fail to see"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "退",
    "kname": "shirizo(ku)",
    "kstroke": 9,
    "kmeaning": "retreat, drive away, repel",
    "kgrade": 5,
    "kunyomi_ja": "しりぞ、しりぞく、しりぞける",
    "kunyomi": "shirizo, shirizoku, shirizokeru",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "退屈な（たいくつな）",
        "tedious, bored"
      ],
      [
        "退廃的な（たいはいてきな）",
        "degenerate, decadent"
      ],
      [
        "退学する（たいがくする）",
        "drop out of school"
      ],
      [
        "退職する（たいしょくする）",
        "retire"
      ],
      [
        "退去する（たいきょする）",
        "depart, leave, recede"
      ],
      [
        "退場する（たいじょうする）",
        "leave, exit"
      ],
      [
        "退院する（たいいんする）",
        "leave hospital"
      ],
      [
        "辞退する（じたいする）",
        "decline an offer"
      ],
      [
        "衰退する（すいたいする）",
        "decay, retreat"
      ],
      [
        "撤退する（てったいする）",
        "evacuate, withdraw, repeal"
      ],
      [
        "退ける（しりぞける）",
        "repel, drive away, reject [v.t.]"
      ],
      [
        "退く（しりぞく）",
        "retreat, recede, withdraw [v.i.]"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "銅",
    "kname": "dou(zou)",
    "kstroke": 14,
    "kmeaning": "copper",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "銅（どう）",
        "copper"
      ],
      [
        "銅山（どうざん）",
        "copper mine"
      ],
      [
        "銅貨（どうか）",
        "copper coin"
      ],
      [
        "銅像（どうぞう）",
        "bronze statue"
      ],
      [
        "青銅（せいどう）",
        "bronze"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "徳",
    "kname": "(dou)toku",
    "kstroke": 14,
    "kmeaning": "virtue",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トク",
    "onyomi": "toku",
    "examples": [
      [
        "徳（とく）",
        "virtue, goodness"
      ],
      [
        "道徳（どうとく）",
        "morals"
      ],
      [
        "人徳（じんとく）",
        "natural virtue, personal virtue"
      ],
      [
        "不徳（ふとく）",
        "immorality, depravity"
      ],
      [
        "美徳（びとく）",
        "virtue"
      ],
      [
        "悪徳商法（あくとくしょうほう）",
        "corrupt business"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "犯",
    "kname": "han(nin)",
    "kstroke": 5,
    "kmeaning": "offense, commit (a crime), violate, defy",
    "kgrade": 5,
    "kunyomi_ja": "おか、おかす",
    "kunyomi": "oka, okasu",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "犯罪（はんざい）",
        "crime"
      ],
      [
        "犯行（はんこう）",
        "criminal act"
      ],
      [
        "犯人（はんにん）",
        "offender, criminal"
      ],
      [
        "防犯（ぼうはん）",
        "crime prevention"
      ],
      [
        "初犯（しょはん）",
        "first offender"
      ],
      [
        "共犯（きょうはん）",
        "accomplice"
      ],
      [
        "戦犯（せんぱん）",
        "war criminal"
      ],
      [
        "殺人犯（さつじんはん）",
        "murderer"
      ],
      [
        "知能犯（ちのうはん）",
        "intellectual criminal"
      ],
      [
        "犯す（おかす）",
        "commit, perpetrate, violate"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "版",
    "kname": "han(ga)",
    "kstroke": 8,
    "kmeaning": "printing plate, publishing, edition",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "版（はん）",
        "plate, printing, edition"
      ],
      [
        "版画（はんが）",
        "art print"
      ],
      [
        "版元（はんもと）",
        "publisher"
      ],
      [
        "版権（はんけん）",
        "copyright"
      ],
      [
        "重版（じゅうはん）",
        "additional printing"
      ],
      [
        "凸版（とっぱん）",
        "letterpress, relief printing"
      ],
      [
        "活版（かっぱん）",
        "printing, typography"
      ],
      [
        "出版社（しゅっぱんしゃ）",
        "publisher"
      ],
      [
        "初版本（しょはんぼん）",
        "first edition"
      ],
      [
        "決定版（けっていばん）",
        "definitive edition"
      ],
      [
        "改訂版（かいていばん）",
        "revised edition"
      ],
      [
        "出版する（しゅっぱんする）",
        "publish"
      ]
    ],
    "radical": "",
    "rad_order": 115,
    "rad_stroke": 4,
    "rad_name_ja": "かたへん",
    "rad_name": "katahen",
    "rad_meaning": "split wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "俵",
    "kname": "tawara",
    "kstroke": 10,
    "kmeaning": "straw sack",
    "kgrade": 5,
    "kunyomi_ja": "たわら",
    "kunyomi": "tawara",
    "onyomi_ja": "ヒョウ",
    "onyomi": "hyou",
    "examples": [
      [
        "土俵（どひょう）",
        "sumo ring"
      ],
      [
        "一俵（いっぴょう）",
        "one straw bag"
      ],
      [
        "俵（たわら）",
        "bale, sack"
      ],
      [
        "米俵（こめだわら）",
        "straw rice bag"
      ],
      [
        "炭俵（すみだわら）",
        "sack for charcoal"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "婦",
    "kname": "(fuu)fu",
    "kstroke": 11,
    "kmeaning": "adult woman",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "婦人（ふじん）",
        "woman, female"
      ],
      [
        "婦長（ふちょう）",
        "head nurse"
      ],
      [
        "婦警（ふけい）",
        "policewoman"
      ],
      [
        "主婦（しゅふ）",
        "housewife"
      ],
      [
        "夫婦（ふうふ）",
        "married couple"
      ],
      [
        "娼婦（しょうふ）",
        "prostitute"
      ],
      [
        "新婦（しんぷ）",
        "bride"
      ],
      [
        "看護婦（かんごふ）",
        "nurse"
      ],
      [
        "掃除婦（そうじふ）",
        "cleaning lady"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "富",
    "kname": "tomi",
    "kstroke": 12,
    "kmeaning": "rich, wealth",
    "kgrade": 5,
    "kunyomi_ja": "と、とむ、とみ",
    "kunyomi": "to, tomu, tomi",
    "onyomi_ja": "フ、フウ",
    "onyomi": "fu, fuu",
    "examples": [
      [
        "富豪（ふごう）",
        "wealthy person, millionaire"
      ],
      [
        "富士山（ふじさん）",
        "Mt. Fuji"
      ],
      [
        "富国強兵（ふこくきょうへい）",
        "national prosperity & defense"
      ],
      [
        "富裕な（ふゆうな）",
        "wealthy, rich, opulent"
      ],
      [
        "豊富な（ほうふな）",
        "abundant, rich, plentiful"
      ],
      [
        "富貴な（ふうきな）",
        "rich and honored"
      ],
      [
        "富む（とむ）",
        "rich with"
      ],
      [
        "富（とみ）",
        "wealth, fortune"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "九",
    "kname": 9,
    "kstroke": 2,
    "kmeaning": "nine",
    "kgrade": 1,
    "kunyomi_ja": "ここの、ここのつ",
    "kunyomi": "kokono, kokonotsu",
    "onyomi_ja": "キュウ、ク",
    "onyomi": "kyuu, ku",
    "examples": [
      [
        "九州（きゅうしゅう）",
        "Kyuushuu"
      ],
      [
        "九回（きゅうかい）",
        "9 times"
      ],
      [
        "九年（きゅうねん）",
        "9 years"
      ],
      [
        "九月（くがつ）",
        "September"
      ],
      [
        "九時（くじ）",
        "9 o'clock"
      ],
      [
        "十九日（じゅうくにち）",
        "19 days, 19th of the month"
      ],
      [
        "九日（ここのか）",
        "9 days, 9th of the month"
      ],
      [
        "九つ（ここのつ）",
        "9 (objects) "
      ]
    ],
    "radical": "⼄",
    "rad_order": 6,
    "rad_stroke": 1,
    "rad_name_ja": "おつ",
    "rad_name": "otsu",
    "rad_meaning": "the second",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "武",
    "kname": "bu(ryoku)",
    "kstroke": 8,
    "kmeaning": "military",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ブ、ム",
    "onyomi": "bu, mu",
    "examples": [
      [
        "武士（ぶし）",
        "warrior, samurai"
      ],
      [
        "武器（ぶき）",
        "weapon, arms"
      ],
      [
        "武力（ぶりょく）",
        "military power"
      ],
      [
        "武術（ぶじゅつ）",
        "martial arts"
      ],
      [
        "武道（ぶどう）",
        "martial arts, Bushido"
      ],
      [
        "武装する（ぶそうする）",
        "be armed"
      ],
      [
        "武者震い（むしゃぶるい）",
        "shake with excitement [n.]"
      ],
      [
        "影武者（かげむしゃ）",
        "secret power broker"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "複",
    "kname": "fuku(suu)",
    "kstroke": 14,
    "kmeaning": "compound, double, multiple",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "複数（ふくすう）",
        "plural, multiple"
      ],
      [
        "複利（ふくり）",
        "compound interest"
      ],
      [
        "複写機（ふくしゃき）",
        "photocopying machine"
      ],
      [
        "複雑な（ふくざつな）",
        "complex, complicated"
      ],
      [
        "複製する（ふくせいする）",
        "reproduce, duplicate, reprint"
      ],
      [
        "複合する（ふくごうする）",
        "combine"
      ],
      [
        "重複する（ちょうふくする）",
        "be repeated, overlap [v.i.]"
      ]
    ],
    "radical": "⻂",
    "rad_order": 151,
    "rad_stroke": 5,
    "rad_name_ja": "ころもへん",
    "rad_name": "koromohen",
    "rad_meaning": "clothing",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "墓",
    "kname": "haka",
    "kstroke": 13,
    "kmeaning": "grave, tomb",
    "kgrade": 5,
    "kunyomi_ja": "はか",
    "kunyomi": "haka",
    "onyomi_ja": "ボ",
    "onyomi": "bo",
    "examples": [
      [
        "墓碑（ぼひ）",
        "gravestone, tombstone"
      ],
      [
        "墓地（ぼち）",
        "cemetery, graveyard"
      ],
      [
        "墓穴（ぼけつ）",
        "grave (hole in ground)"
      ],
      [
        "墓標（ぼひょう）",
        "grave-marker, gravestone"
      ],
      [
        "墓（はか）",
        "tomb"
      ],
      [
        "墓参り（はかまいり）",
        "visit to a grave"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "報",
    "kname": "(yo)hou",
    "kstroke": 12,
    "kmeaning": "inform, require, news, report, reward",
    "kgrade": 5,
    "kunyomi_ja": "むく、むくい、むくいる、むくう",
    "kunyomi": "muku, mukui, mukuiru, mukuu",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "報道（ほうどう）",
        "information, report"
      ],
      [
        "報酬（ほうしゅう）",
        "remuneration, recompense"
      ],
      [
        "情報（じょうほう）",
        "information, news"
      ],
      [
        "警報（けいほう）",
        "alarm, warning"
      ],
      [
        "速報（そくほう）",
        "news flash, quick report"
      ],
      [
        "天気予報（てんきよほう）",
        "weather forecast"
      ],
      [
        "報告する（ほうこくする）",
        "report, inform"
      ],
      [
        "報復する（ほうふくする）",
        "retaliate, take revenge"
      ],
      [
        "通報する（つうほうする）",
        "report [v.t.]"
      ],
      [
        "報じる（ほうじる）",
        "inform, report"
      ],
      [
        "報う（むくう）",
        "reward, recompense [v.i., v.t.]"
      ],
      [
        "報いる（むくいる）",
        "reward, recompense [v.i., v.t.]"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "防",
    "kname": "fuse(gu)",
    "kstroke": 7,
    "kmeaning": "prevent, protect from",
    "kgrade": 5,
    "kunyomi_ja": "ふせ、ふせぐ",
    "kunyomi": "fuse, fusegu",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "防水（ぼうすい）",
        "waterproofing"
      ],
      [
        "防音（ぼうおん）",
        "soundproofing"
      ],
      [
        "防虫剤（ぼうちゅうざい）",
        "insecticide"
      ],
      [
        "防腐剤（ぼうふざい）",
        "antiseptic, preservative [n.]"
      ],
      [
        "防災訓練（ぼうさいくんれん）",
        "disaster prevention drill"
      ],
      [
        "堤防（ていぼう）",
        "bank, levee, dike"
      ],
      [
        "消防車（しょうぼうしゃ）",
        "fire-engine"
      ],
      [
        "無防備な（むぼうびな）",
        "defenseless"
      ],
      [
        "防止する（ぼうしする）",
        "prevent"
      ],
      [
        "防衛する（ぼうえいする）",
        "defend, protect"
      ],
      [
        "予防する（よぼうする）",
        "prevent by taking precautions"
      ],
      [
        "防ぐ（ふせぐ）",
        "defend, protect, prevent"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "貿",
    "kname": "bou(ekifuu)",
    "kstroke": 12,
    "kmeaning": "trade, exchange",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "貿易（ぼうえき）",
        "trade"
      ],
      [
        "貿易業（ぼうえきぎょう）",
        "trading business"
      ],
      [
        "貿易風（ぼうえきふう）",
        "trade wind"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "務",
    "kname": "(nin)mu",
    "kstroke": 11,
    "kmeaning": "duty, work, serve",
    "kgrade": 5,
    "kunyomi_ja": "つと、つとめる、つとまる",
    "kunyomi": "tsuto, tsutomeru, tsutomaru",
    "onyomi_ja": "ム",
    "onyomi": "mu",
    "examples": [
      [
        "義務（ぎむ）",
        "duty, obligation"
      ],
      [
        "事務（じむ）",
        "business, office work"
      ],
      [
        "任務（にんむ）",
        "duty, mission, task"
      ],
      [
        "職務（しょくむ）",
        "professional duties"
      ],
      [
        "責務（せきむ）",
        "duty, obligation, responsibility"
      ],
      [
        "専務（せんむ）",
        "managing director"
      ],
      [
        "外務省（がいむしょう）",
        "Department of Foreign Affairs"
      ],
      [
        "法務省（ほうむしょう）",
        "Ministry of Justice"
      ],
      [
        "公務員（こうむいん）",
        "civil servant"
      ],
      [
        "勤務する（きんむする）",
        "work for"
      ],
      [
        "務める（つとめる）",
        "serve, exert oneself [v.t.]"
      ],
      [
        "務まる（つとまる）",
        "be fit for, function properly [v.i.]"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "綿",
    "kname": "men-wata",
    "kstroke": 14,
    "kmeaning": "cotton",
    "kgrade": 5,
    "kunyomi_ja": "わた",
    "kunyomi": "wata",
    "onyomi_ja": "メン",
    "onyomi": "men",
    "examples": [
      [
        "綿花（めんか）",
        "raw cotton, cotton wool"
      ],
      [
        "綿糸（めんし）",
        "cotton yarn"
      ],
      [
        "綿棒（めんぼう）",
        "cotton swab"
      ],
      [
        "綿織物（めんおりもの）",
        "cotton fabrics, cotton textiles"
      ],
      [
        "木綿（もめん）",
        "cotton"
      ],
      [
        "綿密な（めんみつな）",
        "detailed, careful, thorough"
      ],
      [
        "綿（わた）",
        "raw cotton"
      ],
      [
        "綿菓子（わたがし）",
        "cotton candy"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "余",
    "kname": "yo(keina)",
    "kstroke": 7,
    "kmeaning": "remaining, excess",
    "kgrade": 5,
    "kunyomi_ja": "あま、あまり、あまる、あます",
    "kunyomi": "ama, amari, amaru, amasu",
    "onyomi_ja": "ヨ",
    "onyomi": "yo",
    "examples": [
      [
        "余地（よち）",
        "space, room, margin"
      ],
      [
        "余暇（よか）",
        "leisure, leisure time, spare time"
      ],
      [
        "余波（よは）",
        "secondary effect, aftermath"
      ],
      [
        "余韻（よいん）",
        "reverberation, lingering memory"
      ],
      [
        "余剰（よじょう）",
        "surplus, residue"
      ],
      [
        "余談（よだん）",
        "digression, sequel"
      ],
      [
        "余命（よめい）",
        "one's remaining years"
      ],
      [
        "余程（よほど）",
        "very, to a large extent, greatly"
      ],
      [
        "余計な（よけいな）",
        "extra, excessive"
      ],
      [
        "余分な（よぶんな）",
        "extra, excessive"
      ],
      [
        "余す（あます）",
        "save, leave over"
      ],
      [
        "余る（あまる）",
        "remain, be left over [v.i.]"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "略",
    "kname": "(sen)ryaku",
    "kstroke": 11,
    "kmeaning": "abridged, strategy, omit, abbreviate",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リャク",
    "onyomi": "ryaku",
    "examples": [
      [
        "略（りゃく）",
        "abbreviation, omission"
      ],
      [
        "略語（りゃくご）",
        "abbreviation, acronym"
      ],
      [
        "略字（りゃくじ）",
        "abbreviation, simplified character"
      ],
      [
        "略歴（りゃくれき）",
        "brief personal record, short CV"
      ],
      [
        "戦略（せんりゃく）",
        "strategy, tactics"
      ],
      [
        "策略（さくりゃく）",
        "scheme, tactic, stratagem, trick"
      ],
      [
        "略す（りゃくす）",
        "abbreviate"
      ],
      [
        "略奪する（りゃくだつする）",
        "loot, rob"
      ],
      [
        "攻略する（こうりゃくする）",
        "capture [v.t.]"
      ],
      [
        "侵略する（しんりゃくする）",
        "invade"
      ],
      [
        "省略する（しょうりゃくする）",
        "omit, abbreviate, abridge"
      ]
    ],
    "radical": "",
    "rad_order": 129,
    "rad_stroke": 5,
    "rad_name_ja": "たへん",
    "rad_name": "tahen",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "十",
    "kname": 10,
    "kstroke": 2,
    "kmeaning": "ten",
    "kgrade": 1,
    "kunyomi_ja": "とお、と",
    "kunyomi": "too, to",
    "onyomi_ja": "ジュウ",
    "onyomi": "juu",
    "examples": [
      [
        "十（じゅう）",
        "10"
      ],
      [
        "十年（じゅうねん）",
        "10 years"
      ],
      [
        "十分な（じゅうぶんな）",
        "enough"
      ],
      [
        "十か月（じゅっかげつ）",
        "10 months"
      ],
      [
        "十冊（じゅっさつ）",
        "10 (bound objects)"
      ],
      [
        "十匹（じゅっぴき）",
        "10 (animals)"
      ],
      [
        "十分（じゅっぷん）",
        "10 minutes"
      ],
      [
        "十本（じゅっぽん）",
        "10 (long cylindrical objects)"
      ],
      [
        "十日（とおか）",
        "10 days, 10th of the month"
      ],
      [
        "十人十色（じゅうにんといろ）",
        "several men, several minds"
      ],
      [
        "*二十才（はたち）",
        "20 years old"
      ],
      [
        "*二十日（はつか）",
        "20 days, 20th day of the month"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "領",
    "kname": "(daitou)ryou",
    "kstroke": 14,
    "kmeaning": "territory, govern, rule",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "領土（りょうど）",
        "dominion, territory"
      ],
      [
        "領内（りょうない）",
        "territory, domains"
      ],
      [
        "領空（りょうくう）",
        "territorial airspace"
      ],
      [
        "領地（りょうち）",
        "territory, dominion"
      ],
      [
        "領域（りょういき）",
        "area, domain, territory, field"
      ],
      [
        "領事館（りょうじかん）",
        "consulate"
      ],
      [
        "領収書（りょうしゅうしょ）",
        "receipt"
      ],
      [
        "本領（ほんりょう）",
        "characteristic, speciality"
      ],
      [
        "要領（ようりょう）",
        "gist, point, knack"
      ],
      [
        "大統領（だいとうりょう）",
        "president (of a nation)"
      ],
      [
        "占領する（せんりょうする）",
        "occupy, capture, possess"
      ],
      [
        "横領する（おうりょうする）",
        "embezzle"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "域",
    "kname": "(chi)iki",
    "kstroke": 11,
    "kmeaning": "bounded area, region",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イキ",
    "onyomi": "iki",
    "examples": [
      [
        "地域（ちいき）",
        "area, region"
      ],
      [
        "水域（すいいき）",
        "waters, water area"
      ],
      [
        "区域（くいき）",
        "boundary, zone, territory"
      ],
      [
        "海域（かいいき）",
        "area of ocean"
      ],
      [
        "全域（ぜんいき）",
        "the whole area"
      ],
      [
        "聖域（せいいき）",
        "sacred precincts"
      ],
      [
        "領域（りょういき）",
        "area, domain, territory, field"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宇",
    "kname": "u(jicha)",
    "kstroke": 6,
    "kmeaning": "universe",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ウ",
    "onyomi": "u",
    "examples": [
      [
        "宇宙（うちゅう）",
        "universe, cosmos, space"
      ],
      [
        "宇内（うだい）",
        "the whole world"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "沿",
    "kname": "en-so(u)",
    "kstroke": 8,
    "kmeaning": "along",
    "kgrade": 6,
    "kunyomi_ja": "そ、そう",
    "kunyomi": "so, sou",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "沿道（えんどう）",
        "route, course, roadside"
      ],
      [
        "沿岸（えんがん）",
        "coast, shore"
      ],
      [
        "沿線（えんせん）",
        "along a railroad line"
      ],
      [
        "沿革（えんかく）",
        "history, development"
      ],
      [
        "沿う（そう）",
        "accompany, comply with"
      ],
      [
        "川沿い（かわぞい）",
        "along a river"
      ],
      [
        "山沿い（やまぞい）",
        "along a mountain"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "灰",
    "kname": "kai-hai",
    "kstroke": 6,
    "kmeaning": "ash",
    "kgrade": 6,
    "kunyomi_ja": "はい",
    "kunyomi": "hai",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "灰白色（かいはくしょく）",
        "grayish white"
      ],
      [
        "石灰（せっかい）",
        "lime, quicklime, caustic lime"
      ],
      [
        "灰（はい）",
        "ash"
      ],
      [
        "灰皿（はいざら）",
        "ashtray"
      ],
      [
        "灰色（はいいろ）",
        "grey, ashen"
      ],
      [
        "火山灰（かざんばい）",
        "volcanic ash"
      ]
    ],
    "radical": "⼚",
    "rad_order": 31,
    "rad_stroke": 2,
    "rad_name_ja": "がんだれ",
    "rad_name": "gandare",
    "rad_meaning": "cliff",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "閣",
    "kname": "kaku(ryou)",
    "kstroke": 14,
    "kmeaning": "tower, tall magnificent building, cabinet",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "閣僚（かくりょう）",
        "cabinet ministers"
      ],
      [
        "閣議（かくぎ）",
        "cabinet meeting"
      ],
      [
        "閣下（かっか）",
        "Your excellency"
      ],
      [
        "内閣（ないかく）",
        "cabinet, ministry"
      ],
      [
        "楼閣（ろうかく）",
        "multistoried building"
      ],
      [
        "仏閣（ぶっかく）",
        "Buddhist temple"
      ],
      [
        "金閣寺（きんかくじ）",
        "Kinkakuji Temple"
      ],
      [
        "銀閣寺（ぎんかくじ）",
        "Ginkakuji Temple"
      ],
      [
        "天守閣（てんしゅかく）",
        "castle tower"
      ],
      [
        "組閣する（そかくする）",
        "form a cabinet"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "割",
    "kname": "wa(ru)",
    "kstroke": 12,
    "kmeaning": "divide, split",
    "kgrade": 6,
    "kunyomi_ja": "わ、わる、わり、われる、さ、さく",
    "kunyomi": "wa, waru, wari, wareru, sa, saku",
    "onyomi_ja": "カツ",
    "onyomi": "katsu",
    "examples": [
      [
        "割愛する（かつあいする）",
        "omit, leave out, spare"
      ],
      [
        "分割する（ぶんかつする）",
        "partition, divide, separate"
      ],
      [
        "割る（わる）",
        "divide, break, crack [v.t.]"
      ],
      [
        "割れる（われる）",
        "break, split, crack [v.i.]"
      ],
      [
        "割り勘（わりかん）",
        "shared expenses"
      ],
      [
        "割り算（わりざん）",
        "division"
      ],
      [
        "割り引く（わりびく）",
        "discount [v.t.]"
      ],
      [
        "割合（わりあい）",
        "rate, ratio, proportion"
      ],
      [
        "一割（いちわり）",
        "ten percent"
      ],
      [
        "役割（やくわり）",
        "part, role, duties"
      ],
      [
        "割と（わりと）",
        "relatively, comparatively"
      ],
      [
        "割く（さく）",
        "split, rend, cut, spare (time)"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "株",
    "kname": "kabu(shiki)",
    "kstroke": 10,
    "kmeaning": "stock, share, stump",
    "kgrade": 6,
    "kunyomi_ja": "かぶ",
    "kunyomi": "kabu",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "株（かぶ）",
        "share, stock, stump"
      ],
      [
        "株式（かぶしき）",
        "stock [n.]"
      ],
      [
        "株価（かぶか）",
        "stock prices"
      ],
      [
        "株券（かぶけん）",
        "stock certificate"
      ],
      [
        "株主（かぶぬし）",
        "shareholder, stockholder"
      ],
      [
        "株主総会（かぶぬしそうかい）",
        "general meeting of stockholders"
      ],
      [
        "株式会社（かぶしきがいしゃ）",
        "stock company, corporation"
      ],
      [
        "株分け（かぶわけ）",
        "root division"
      ],
      [
        "切り株（きりかぶ）",
        "stump, stubble"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "干",
    "kname": "kan-ho(su)",
    "kstroke": 3,
    "kmeaning": "dry",
    "kgrade": 6,
    "kunyomi_ja": "ほ、ひ、ほす、ほし、ひる",
    "kunyomi": "ho, hi, hosu, hoshi, hiru",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "干満（かんまん）",
        "ebb and flow (of a tide)"
      ],
      [
        "干潮（かんちょう）",
        "ebb tide"
      ],
      [
        "若干（じゃっかん）",
        "some, a few [n., adv.]"
      ],
      [
        "干渉する（かんしょうする）",
        "interfere, intervene"
      ],
      [
        "干拓する（かんたくする）",
        "reclaim land"
      ],
      [
        "干す（ほす）",
        "dry, drain"
      ],
      [
        "梅干し（うめぼし）",
        "dried plum"
      ],
      [
        "干る（ひる）",
        "dry [v.i.]"
      ],
      [
        "干上がる（ひあがる）",
        "dry up, parch"
      ],
      [
        "潮干狩り（しおひがり）",
        "shell gathering (at low tide)"
      ]
    ],
    "radical": "⼲",
    "rad_order": 61,
    "rad_stroke": 3,
    "rad_name_ja": "かん",
    "rad_name": "kan",
    "rad_meaning": "to dry, shield",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "巻",
    "kname": "kan-ma(ku)",
    "kstroke": 9,
    "kmeaning": "roll up, volume, wind",
    "kgrade": 6,
    "kunyomi_ja": "ま、まく、まき",
    "kunyomi": "ma, maku, maki",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "巻末（かんまつ）",
        "end of a book"
      ],
      [
        "全巻（ぜんかん）",
        "the whole volume"
      ],
      [
        "別巻（べっかん）",
        "separate volume, extra issue"
      ],
      [
        "第一巻（だいいっかん）",
        "first volume"
      ],
      [
        "巻く（まく）",
        "wind, coil, roll [v.t.]"
      ],
      [
        "巻き添え（まきぞえ）",
        "get mixed up in [n.]"
      ],
      [
        "葉巻（はまき）",
        "cigar"
      ],
      [
        "渦巻き（うずまき）",
        "whirlpool, eddy, coil"
      ],
      [
        "のり巻き（のりまき）",
        "Sushi roll"
      ],
      [
        "絵巻物（えまきもの）",
        "picture scroll"
      ]
    ],
    "radical": "⼰",
    "rad_order": 58,
    "rad_stroke": 3,
    "rad_name_ja": "おのれ",
    "rad_name": "onore",
    "rad_meaning": "self",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "待",
    "kname": "ma(tsu)",
    "kstroke": 9,
    "kmeaning": "wait",
    "kgrade": 3,
    "kunyomi_ja": "まつ、またせる",
    "kunyomi": "matsu, mataseru",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "待機する（たいきする）",
        "stand by"
      ],
      [
        "期待する（きたいする）",
        "hope"
      ],
      [
        "招待する（しょうたいする）",
        "invite"
      ],
      [
        "待つ（まつ）",
        "wait"
      ],
      [
        "待たせる（またせる）",
        "keep (a person) waiting"
      ],
      [
        "待ち合わせる（まちあわせる）",
        "rendezvous"
      ],
      [
        "待合室（まちあいしつ）",
        "waiting room"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "看",
    "kname": "kan(gofu)",
    "kstroke": 9,
    "kmeaning": "watch, care for",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "看板（かんばん）",
        "sign, signboard, billboard"
      ],
      [
        "看守（かんしゅ）",
        "prison guard, jailer"
      ],
      [
        "看護婦（かんごふ）",
        "nurse"
      ],
      [
        "看破する（かんぱする）",
        "penetrate, see through"
      ],
      [
        "看病する（かんびょうする）",
        "nurse, attend (a sick person)"
      ],
      [
        "看護する（かんごする）",
        "nurse, attend (a sick person)"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "危",
    "kname": "abu(nai)",
    "kstroke": 6,
    "kmeaning": "dangerous",
    "kgrade": 6,
    "kunyomi_ja": "あぶ、あや、あぶない、あやうい、あやぶむ、あやうく",
    "kunyomi": "abu, aya, abunai, ayaui, ayabumu, ayauku",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "危機（きき）",
        "crisis"
      ],
      [
        "危害（きがい）",
        "injury, harm, danger"
      ],
      [
        "危篤（きとく）",
        "on the verge of death"
      ],
      [
        "危惧（きぐ）",
        "fear, misgivings"
      ],
      [
        "危険な（きけんな）",
        "dangerous, perilous, hazardous"
      ],
      [
        "危ない（あぶない）",
        "dangerous, watch out! [adj.]"
      ],
      [
        "危うく（あやうく）",
        "in imminent danger of, almost"
      ],
      [
        "危うい（あやうい）",
        "dangerous, critical [adj.]"
      ],
      [
        "危ぶむ（あやぶむ）",
        "have misgivings [v.t.]"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "揮",
    "kname": "(shi)ki(bou)",
    "kstroke": 12,
    "kmeaning": "wield, direct, command",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "揮発油（きはつゆ）",
        "volatile oil"
      ],
      [
        "指揮者（しきしゃ）",
        "conductor"
      ],
      [
        "指揮棒（しきぼう）",
        "conductor's baton"
      ],
      [
        "指揮する（しきする）",
        "command, direct, conduct"
      ],
      [
        "発揮する（はっきする）",
        "demonstrate one's ability"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "貴",
    "kname": "ki-touto(i)",
    "kstroke": 12,
    "kmeaning": "noble, your honorable, valuable, respect",
    "kgrade": 6,
    "kunyomi_ja": "たっと、とうと、たっとい、とうとい",
    "kunyomi": "tatto, touto, tattoi, toutoi",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "貴族（きぞく）",
        "noble, aristocrat"
      ],
      [
        "貴社（きしゃ）",
        "your company [respectful]"
      ],
      [
        "貴金属（ききんぞく）",
        "precious metal"
      ],
      [
        "貴婦人（きふじん）",
        "noblewoman"
      ],
      [
        "貴重品（きちょうひん）",
        "valuables, treasures"
      ],
      [
        "貴重な（きちょうな）",
        "precious, valuable"
      ],
      [
        "高貴な（こうきな）",
        "high class [adj.]"
      ],
      [
        "貴い（たっとい/とうとい）",
        "precious, exalted, sacred [adj.]"
      ],
      [
        "貴ぶ（たっとぶ/とうとぶ）",
        "value, prize, esteem [v.t.]"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "郷",
    "kname": "(ko)kyou",
    "kstroke": 11,
    "kmeaning": "hometown",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョウ、ゴウ",
    "onyomi": "kyou, gou",
    "examples": [
      [
        "郷里（きょうり）",
        "birth-place, home town"
      ],
      [
        "郷土（きょうど）",
        "native place, birth-place"
      ],
      [
        "郷愁（きょうしゅう）",
        "nostalgia, homesickness"
      ],
      [
        "故郷（こきょう）",
        "home town, native place"
      ],
      [
        "同郷（どうきょう）",
        "from the same birthplace"
      ],
      [
        "望郷（ぼうきょう）",
        "homesickness, nostalgia"
      ],
      [
        "愛郷心（あいきょうしん）",
        "love of one's hometown"
      ],
      [
        "帰郷する（ききょうする）",
        "return to one's home"
      ],
      [
        "近郷（きんごう）",
        "neighboring districts"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "警",
    "kname": "kei(satsu)",
    "kstroke": 19,
    "kmeaning": "guard against, warn, admonish",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "警察（けいさつ）",
        "police"
      ],
      [
        "警官（けいかん）",
        "police officer"
      ],
      [
        "警備（けいび）",
        "defense, guard, policing"
      ],
      [
        "警部（けいぶ）",
        "police inspector"
      ],
      [
        "警報（けいほう）",
        "alarm, warning"
      ],
      [
        "警鐘（けいしょう）",
        "alarm bell, fire bell"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "婦警（ふけい）",
        "policewoman"
      ],
      [
        "県警（けんけい）",
        "prefectural police"
      ],
      [
        "警告する（けいこくする）",
        "warn, advice"
      ],
      [
        "警戒する（けいかいする）",
        "warn, be vigilant [v.t.]"
      ]
    ],
    "radical": "⾔",
    "rad_order": 182,
    "rad_stroke": 7,
    "rad_name_ja": "げん",
    "rad_name": "gen",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "穴",
    "kname": "ana",
    "kstroke": 5,
    "kmeaning": "hole, cave",
    "kgrade": 6,
    "kunyomi_ja": "あな",
    "kunyomi": "ana",
    "onyomi_ja": "ケツ",
    "onyomi": "ketsu",
    "examples": [
      [
        "墓穴（ぼけつ）",
        "grave [n.]"
      ],
      [
        "穴（あな）",
        "hole"
      ],
      [
        "洞穴（ほらあな）",
        "cave, grotto"
      ],
      [
        "落とし穴（おとしあな）",
        "pitfall, trap, pit"
      ]
    ],
    "radical": "⽳",
    "rad_order": 146,
    "rad_stroke": 5,
    "rad_name_ja": "あな",
    "rad_name": "ana",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "絹",
    "kname": "kinu",
    "kstroke": 13,
    "kmeaning": "silk",
    "kgrade": 6,
    "kunyomi_ja": "きぬ",
    "kunyomi": "kinu",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "絹布（けんぷ）",
        "silk, silk cloth"
      ],
      [
        "正絹（しょうけん）",
        "pure silk"
      ],
      [
        "絹（きぬ）",
        "silk"
      ],
      [
        "絹糸（きぬいと）",
        "silk thread"
      ],
      [
        "絹織物（きぬおりもの）",
        "silk goods"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "憲",
    "kname": "(gou)ken(teki)",
    "kstroke": 16,
    "kmeaning": "constitution",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "憲法（けんぽう）",
        "constitution"
      ],
      [
        "憲章（けんしょう）",
        "charter"
      ],
      [
        "違憲（いけん）",
        "unconstitutionality"
      ],
      [
        "立憲（りっけん）",
        "constitutionalism"
      ],
      [
        "立憲政治（りっけんせいじ）",
        "constitutional government"
      ],
      [
        "合憲的な（ごうけんてきな）",
        "constitutional"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "源",
    "kname": "minamoto",
    "kstroke": 13,
    "kmeaning": "source, origin",
    "kgrade": 6,
    "kunyomi_ja": "みなもと",
    "kunyomi": "minamoto",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "源泉（げんせん）",
        "source"
      ],
      [
        "源氏物語（げんじものがたり）",
        "the Tale of the Genji"
      ],
      [
        "源平合戦（げんぺいがっせん）",
        "battle b/t Genji & Heike clans"
      ],
      [
        "根源（こんげん）",
        "root, source, origin"
      ],
      [
        "起源（きげん）",
        "origin, beginning"
      ],
      [
        "語源（ごげん）",
        "word root, etymology"
      ],
      [
        "資源（しげん）",
        "natural resources"
      ],
      [
        "財源（ざいげん）",
        "financial resources"
      ],
      [
        "震源（しんげん）",
        "epicenter (of earthquake)"
      ],
      [
        "栄養源（えいようげん）",
        "source of nutrients"
      ],
      [
        "源（みなもと）",
        "source, origin"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "堂",
    "kname": "(shoku)dou",
    "kstroke": 11,
    "kmeaning": "hall",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "食堂（しょくどう）",
        "dining hall"
      ],
      [
        "議事堂（ぎじどう）",
        "Diet building"
      ],
      [
        "講堂（こうどう）",
        "auditorium"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "己",
    "kname": "onore",
    "kstroke": 3,
    "kmeaning": "oneself, self",
    "kgrade": 6,
    "kunyomi_ja": "おのれ",
    "kunyomi": "onore",
    "onyomi_ja": "コ、キ",
    "onyomi": "ko, ki",
    "examples": [
      [
        "自己（じこ）",
        "self, oneself"
      ],
      [
        "利己主義（りこしゅぎ）",
        "egoism, selfishness"
      ],
      [
        "知己（ちき）",
        "acquaintance, friend"
      ],
      [
        "克己心（こっきしん）",
        "spirit of self-denial/self-control"
      ],
      [
        "己（おのれ）",
        "oneself, you [insulting]"
      ]
    ],
    "radical": "⼰",
    "rad_order": 58,
    "rad_stroke": 3,
    "rad_name_ja": "おのれ",
    "rad_name": "onore",
    "rad_meaning": "self",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "后",
    "kname": "(koutai)gou",
    "kstroke": 6,
    "kmeaning": "empress",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "皇后（こうごう）",
        "empress"
      ],
      [
        "皇后陛下（こうごうへいか）",
        "her majesty the Empress"
      ],
      [
        "皇太后（こうたいごう）",
        "Queen Mother"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "孝",
    "kname": "(oya)kou(kou)",
    "kstroke": 7,
    "kmeaning": "filial piety",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "忠孝（ちゅうこう）",
        "loyalty and filial piety"
      ],
      [
        "親孝行な（おやこうこうな）",
        "having filial piety [adj.]"
      ],
      [
        "親不孝な（おやふこうな）",
        "lacking filial piety [adj.]"
      ],
      [
        "孝行する（こうこうする）",
        "exercise filial piety [v.i.]"
      ]
    ],
    "radical": "⼦",
    "rad_order": 46,
    "rad_stroke": 3,
    "rad_name_ja": "こ",
    "rad_name": "ko",
    "rad_meaning": "child, son",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "紅",
    "kname": "beni",
    "kstroke": 9,
    "kmeaning": "crimson, deep red, rouge",
    "kgrade": 6,
    "kunyomi_ja": "べに、くれない",
    "kunyomi": "beni, kurenai",
    "onyomi_ja": "コウ、ク",
    "onyomi": "kou, ku",
    "examples": [
      [
        "紅白（こうはく）",
        "red and white, auspicious colors"
      ],
      [
        "紅梅（こうばい）",
        "red-blossomed plum tree"
      ],
      [
        "紅葉（こうよう）",
        "autumn colors"
      ],
      [
        "紅茶（こうちゃ）",
        "black tea"
      ],
      [
        "深紅（しんく）",
        "deep crimson"
      ],
      [
        "紅色（べにいろ）",
        "red color"
      ],
      [
        "紅花（べにばな）",
        "safflower"
      ],
      [
        "口紅（くちべに）",
        "lipstick"
      ],
      [
        "紅（くれない）",
        "deep red, crimson"
      ],
      [
        "*紅葉（もみじ）",
        "Japanese maple"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "鋼",
    "kname": "hagane",
    "kstroke": 16,
    "kmeaning": "steel",
    "kgrade": 6,
    "kunyomi_ja": "はがね",
    "kunyomi": "hagane",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "鋼材（こうざい）",
        "material made from steel"
      ],
      [
        "鋼板（こうはん）",
        "steel sheet, steel plate"
      ],
      [
        "鋼管（こうかん）",
        "steel pipe"
      ],
      [
        "製鋼（せいこう）",
        "steel manufacture"
      ],
      [
        "鉄鋼（てっこう）",
        "iron and steel"
      ],
      [
        "鋼（はがね）",
        "steel"
      ],
      [
        "鋼色（はがねいろ）",
        "steel blue"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "刻",
    "kname": "kiza(mu)",
    "kstroke": 8,
    "kmeaning": "engrave, carve, chop up, point of time",
    "kgrade": 6,
    "kunyomi_ja": "きざ、きざむ、きざみ",
    "kunyomi": "kiza, kizamu, kizami",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "刻印（こくいん）",
        "carved seal"
      ],
      [
        "刻一刻（こくいっこく）",
        "moment by moment"
      ],
      [
        "彫刻（ちょうこく）",
        "carving, engraving, sculpture"
      ],
      [
        "時刻（じこく）",
        "time, moment"
      ],
      [
        "定刻（ていこく）",
        "appointed time"
      ],
      [
        "即刻（そっこく）",
        "immediately, at once, instantly"
      ],
      [
        "夕刻（ゆうこく）",
        "evening, evening hour"
      ],
      [
        "深刻な（しんこくな）",
        "serious"
      ],
      [
        "遅刻する（ちこくする）",
        "be late [v.i.]"
      ],
      [
        "刻む（きざむ）",
        "mince, carve, chop up, hash"
      ],
      [
        "小刻みに（こきざみに）",
        "bit by bit"
      ],
      [
        "五分刻みに（ごふんきざみに）",
        "every 5 minutes"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "穀",
    "kname": "koku(motsu)",
    "kstroke": 14,
    "kmeaning": "cereal, grain",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "穀物（こくもつ）",
        "grain, cereal"
      ],
      [
        "穀類（こくるい）",
        "grains"
      ],
      [
        "穀倉（こくそう）",
        "granary"
      ],
      [
        "五穀（ごこく）",
        "the 5 grains"
      ],
      [
        "脱穀機（だっこくき）",
        "grain threshing machine"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "砂",
    "kname": "suna",
    "kstroke": 9,
    "kmeaning": "sand",
    "kgrade": 6,
    "kunyomi_ja": "すな",
    "kunyomi": "suna",
    "onyomi_ja": "サ、シャ",
    "onyomi": "sa, sha",
    "examples": [
      [
        "砂漠（さばく）",
        "desert"
      ],
      [
        "砂丘（さきゅう）",
        "sand dune, sand hill"
      ],
      [
        "砂州（さす）",
        "reef, sandbar, sandbank"
      ],
      [
        "砂糖（さとう）",
        "sugar"
      ],
      [
        "砂金（さきん）",
        "gold dust"
      ],
      [
        "土砂（どしゃ）",
        "earth and sand"
      ],
      [
        "土砂崩れ（どしゃくずれ）",
        "landslide"
      ],
      [
        "砂（すな）",
        "sand"
      ],
      [
        "砂地（すなち）",
        "sandy soil"
      ],
      [
        "砂場（すなば）",
        "sand pit"
      ],
      [
        "砂浜（すなはま）",
        "sandy beach"
      ],
      [
        "*砂利（じゃり）",
        "gravel"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "裁",
    "kname": "sai-saba(ku)",
    "kstroke": 12,
    "kmeaning": "cut out, judge",
    "kgrade": 6,
    "kunyomi_ja": "た、さば、たつ、さばく",
    "kunyomi": "ta, saba, tatsu, sabaku",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "裁判（さいばん）",
        "trial, judgment"
      ],
      [
        "裁判所（さいばんしょ）",
        "court, courthouse"
      ],
      [
        "裁縫（さいほう）",
        "sewing"
      ],
      [
        "裁量（さいりょう）",
        "discretion"
      ],
      [
        "洋裁（ようさい）",
        "dressmaking"
      ],
      [
        "制裁（せいさい）",
        "restraint, sanctions, punishment"
      ],
      [
        "体裁（ていさい）",
        "appearance, format, decency"
      ],
      [
        "独裁（どくさい）",
        "dictatorship, despotism"
      ],
      [
        "総裁（そうさい）",
        "president"
      ],
      [
        "仲裁する（ちゅうさいする）",
        "arbitrate, intercede"
      ],
      [
        "裁つ（たつ）",
        "cut [v.t.]"
      ],
      [
        "裁く（さばく）",
        "judge [v.t.]"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "策",
    "kname": "(zengo)saku",
    "kstroke": 12,
    "kmeaning": "scheme, measure, plan, means, policy",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サク",
    "onyomi": "saku",
    "examples": [
      [
        "策（さく）",
        "plan, policy"
      ],
      [
        "策略（さくりゃく）",
        "scheme, tactic, strategy"
      ],
      [
        "策士（さくし）",
        "intriguer, tactician, schemer"
      ],
      [
        "対策（たいさく）",
        "counter-plan, counter-measure"
      ],
      [
        "政策（せいさく）",
        "government policy"
      ],
      [
        "方策（ほうさく）",
        "plan, policy"
      ],
      [
        "善後策（ぜんごさく）",
        "remedy, countermeasure"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "話",
    "kname": "wa-hana(su)",
    "kstroke": 13,
    "kmeaning": "speak",
    "kgrade": 2,
    "kunyomi_ja": "はな、はなす、はなし",
    "kunyomi": "hana, hanasu, hanashi",
    "onyomi_ja": "ワ",
    "onyomi": "wa",
    "examples": [
      [
        "電話（でんわ）",
        "telephone"
      ],
      [
        "会話（かいわ）",
        "conversation"
      ],
      [
        "話題（わだい）",
        "topic"
      ],
      [
        "童話（どうわ）",
        "fairy tale"
      ],
      [
        "話す（はなす）",
        "speak"
      ],
      [
        "話し方（はなしかた）",
        "way of talking"
      ],
      [
        "話（はなし）",
        "story, conversation"
      ],
      [
        "話し中（はなしちゅう）",
        "while talking, the line is busy"
      ],
      [
        "笑い話（わらいばなし）",
        "funny story"
      ],
      [
        "昔話（むかしばなし）",
        "folklore"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "蚕",
    "kname": "kaiko",
    "kstroke": 10,
    "kmeaning": "silkworm",
    "kgrade": 6,
    "kunyomi_ja": "かいこ",
    "kunyomi": "kaiko",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "蚕糸（さんし）",
        "silk thread, silk yarn"
      ],
      [
        "養蚕（ようさん）",
        "sericulture, silkworm culture"
      ],
      [
        "蚕食する（さんしょくする）",
        "encroach, invade"
      ],
      [
        "蚕（かいこ）",
        "silkworm"
      ]
    ],
    "radical": "⾍",
    "rad_order": 174,
    "rad_stroke": 6,
    "rad_name_ja": "むし",
    "rad_name": "mushi",
    "rad_meaning": "worm, insect, bug",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "至",
    "kname": "shi-ita(ru)",
    "kstroke": 6,
    "kmeaning": "come to, arrive, lead to",
    "kgrade": 6,
    "kunyomi_ja": "いた、いたる",
    "kunyomi": "ita, itaru",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "至急（しきゅう）",
        "urgent, pressing"
      ],
      [
        "至上（しじょう）",
        "supremacy"
      ],
      [
        "至難（しなん）",
        "most difficult, next to impossible"
      ],
      [
        "至極（しごく）",
        "very, extremely, exceedingly"
      ],
      [
        "夏至（げし）",
        "summer solstice"
      ],
      [
        "冬至（とうじ）",
        "winter solstice"
      ],
      [
        "必至（ひっし）",
        "inevitable, desperate"
      ],
      [
        "至る（いたる）",
        "come, arrive"
      ],
      [
        "至る所（いたるところ）",
        "everywhere"
      ]
    ],
    "radical": "⾄",
    "rad_order": 167,
    "rad_stroke": 6,
    "rad_name_ja": "いたる",
    "rad_name": "itaru",
    "rad_meaning": "to arrive, reach",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "姿",
    "kname": "sugata",
    "kstroke": 9,
    "kmeaning": "figure, form, shape, appearance, posture",
    "kgrade": 6,
    "kunyomi_ja": "すがた",
    "kunyomi": "sugata",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "姿勢（しせい）",
        "attitude, posture"
      ],
      [
        "姿態（したい）",
        "figure, form, style"
      ],
      [
        "容姿（ようし）",
        "appearance, figure"
      ],
      [
        "雄姿（ゆうし）",
        "gallant figure"
      ],
      [
        "姿（すがた）",
        "figure, shape, appearance"
      ],
      [
        "姿見（すがたみ）",
        "full-length mirror"
      ],
      [
        "後ろ姿（うしろすがた）",
        "back view"
      ]
    ],
    "radical": "⼥",
    "rad_order": 44,
    "rad_stroke": 3,
    "rad_name_ja": "おんな",
    "rad_name": "onna",
    "rad_meaning": "woman",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "視",
    "kname": "shi(ya)",
    "kstroke": 11,
    "kmeaning": "regard, consider, see, vision",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "視野（しや）",
        "field of vision, outlook"
      ],
      [
        "視界（しかい）",
        "field of vision"
      ],
      [
        "視力（しりょく）",
        "eyesight"
      ],
      [
        "視点（してん）",
        "point of view"
      ],
      [
        "視聴者（しちょうしゃ）",
        "viewer, audience"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "近視（きんし）",
        "shortsightedness"
      ],
      [
        "視察する（しさつする）",
        "inspect, observe"
      ],
      [
        "軽視する（けいしする）",
        "think little of, ignore, slight"
      ],
      [
        "無視する（むしする）",
        "disregard, ignore"
      ],
      [
        "監視する（かんしする）",
        "observe, guard, inspect"
      ],
      [
        "重視する（じゅうしする）",
        "regard highly"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "磁",
    "kname": "ji(ryoku)",
    "kstroke": 14,
    "kmeaning": "magnetism, magnetic",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "磁石（じしゃく）",
        "magnet"
      ],
      [
        "磁力（じりょく）",
        "magnetism, magnetic force"
      ],
      [
        "磁気（じき）",
        "magnetism"
      ],
      [
        "磁場（じば）",
        "magnetic field"
      ],
      [
        "磁極（じきょく）",
        "magnetic pole"
      ],
      [
        "磁器（じき）",
        "porcelain, china"
      ],
      [
        "電磁波（でんじは）",
        "electromagnetic waves"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "樹",
    "kname": "ju(moku)",
    "kstroke": 16,
    "kmeaning": "standing tree, bush",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジュ",
    "onyomi": "ju",
    "examples": [
      [
        "樹木（じゅもく）",
        "trees and shrubs, arbor"
      ],
      [
        "樹脂（じゅし）",
        "resin"
      ],
      [
        "樹氷（じゅひょう）",
        "frost covered trees"
      ],
      [
        "樹海（じゅかい）",
        "sea of trees"
      ],
      [
        "樹皮（じゅひ）",
        "bark"
      ],
      [
        "植樹（しょくじゅ）",
        "tree-planting"
      ],
      [
        "果樹園（かじゅえん）",
        "orchard"
      ],
      [
        "街路樹（がいろじゅ）",
        "roadside trees"
      ],
      [
        "樹立する（じゅりつする）",
        "establish, found, set up"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宗",
    "kname": "shuu(kyou)",
    "kstroke": 8,
    "kmeaning": "religious sect, religion",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シュウ、ソウ",
    "onyomi": "shuu, sou",
    "examples": [
      [
        "宗教（しゅうきょう）",
        "religion"
      ],
      [
        "宗派（しゅうは）",
        "sect, denomination"
      ],
      [
        "浄土宗（じょうどしゅう）",
        "Pure Land sect, Jodo"
      ],
      [
        "天台宗（てんだいしゅう）",
        "Tendai sect"
      ],
      [
        "真言宗（しんごんしゅう）",
        "mantra sect, Shingon"
      ],
      [
        "改宗する（かいしゅうする）",
        "convert oneself [v.i.]"
      ],
      [
        "宗家（そうけ）",
        "head family of families"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "就",
    "kname": "shuu-tsu(ku)",
    "kstroke": 12,
    "kmeaning": "set about, engage (in an occupation), employ",
    "kgrade": 6,
    "kunyomi_ja": "つ、つく",
    "kunyomi": "tsu, tsuku",
    "onyomi_ja": "シュウ、ジュ",
    "onyomi": "shuu, ju",
    "examples": [
      [
        "就業時間（しゅうぎょうじかん）",
        "working hours"
      ],
      [
        "就職する（しゅうしょくする）",
        "find employment"
      ],
      [
        "就任する（しゅうにんする）",
        "assume office, be inaugurated"
      ],
      [
        "就航する（しゅうこうする）",
        "go into operation (ship, plane)"
      ],
      [
        "就学する（しゅうがくする）",
        "enter school, attend school"
      ],
      [
        "就労する（しゅうろうする）",
        "go to work, be at work"
      ],
      [
        "成就する（じょうじゅする）",
        "realize, complete"
      ],
      [
        "就ける（つける）",
        "put, place [v.t.]"
      ],
      [
        "就く（つく）",
        "take (a job) [v.i.]"
      ]
    ],
    "radical": "⺐",
    "rad_order": 52,
    "rad_stroke": 3,
    "rad_name_ja": "だいのまげあし",
    "rad_name": "dainomageashi",
    "rad_meaning": "lame leg",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "衆",
    "kname": "(min)shuu",
    "kstroke": 12,
    "kmeaning": "multitude, populace",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シュウ、シュ",
    "onyomi": "shuu, shu",
    "examples": [
      [
        "民衆（みんしゅう）",
        "people, populace, masses"
      ],
      [
        "大衆（たいしゅう）",
        "general public"
      ],
      [
        "公衆（こうしゅう）",
        "the public"
      ],
      [
        "観衆（かんしゅう）",
        "spectators, onlookers"
      ],
      [
        "聴衆（ちょうしゅう）",
        "audience, attendance, hearers"
      ],
      [
        "群衆（ぐんしゅう）",
        "group, crowd, throng, mob"
      ],
      [
        "衆議院（しゅうぎいん）",
        "Lower House, House of Reps."
      ],
      [
        "アメリカ合衆国（がっしゅうこく）",
        "the United States of America"
      ]
    ],
    "radical": "⾎",
    "rad_order": 175,
    "rad_stroke": 6,
    "rad_name_ja": "ち",
    "rad_name": "chi",
    "rad_meaning": "blood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "縦",
    "kname": "tate",
    "kstroke": 16,
    "kmeaning": "vertical",
    "kgrade": 6,
    "kunyomi_ja": "たて",
    "kunyomi": "tate",
    "onyomi_ja": "ジュウ",
    "onyomi": "juu",
    "examples": [
      [
        "縦横に（じゅうおうに）",
        "in all directions, freely"
      ],
      [
        "縦断する（じゅうだんする）",
        "cut across, travel through"
      ],
      [
        "縦貫する（じゅうかんする）",
        "traverse, run through"
      ],
      [
        "操縦する（そうじゅうする）",
        "control, operate, pilot"
      ],
      [
        "縦（たて）",
        "length, height"
      ],
      [
        "縦書き（たてがき）",
        "vertical writing"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "開",
    "kname": "kai-hira(ku)",
    "kstroke": 12,
    "kmeaning": "open",
    "kgrade": 3,
    "kunyomi_ja": "ひら、ひらく、あ、あく、あける",
    "kunyomi": "hira, hiraku, a, aku, akeru",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "開発する（かいはつする）",
        "develop"
      ],
      [
        "開放する（かいほうする）",
        "throw open"
      ],
      [
        "開設する（かいせつする）",
        "establish"
      ],
      [
        "開閉する（かいへいする）",
        "open and close"
      ],
      [
        "開始する（かいしする）",
        "start"
      ],
      [
        "公開する（こうかいする）",
        "present to the public"
      ],
      [
        "再開する（さいかいする）",
        "reopen"
      ],
      [
        "開く（ひらく）",
        "open [v.i., v.t.]"
      ],
      [
        "開く（あく）",
        "open [v.i.]"
      ],
      [
        "開ける（あける）",
        "open [v.t.]"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "縮",
    "kname": "chiji(mu)",
    "kstroke": 17,
    "kmeaning": "shrink",
    "kgrade": 6,
    "kunyomi_ja": "ちぢ、ちぢむ、ちぢまる、ちぢめる、ちぢれる、ちぢらす",
    "kunyomi": "chiji, chijimu, chijimaru, chijimeru, chijireru, chijirasu",
    "onyomi_ja": "シュク",
    "onyomi": "shuku",
    "examples": [
      [
        "縮尺（しゅくしゃく）",
        "reduced scale"
      ],
      [
        "軍縮（ぐんしゅく）",
        "armament reduction"
      ],
      [
        "縮小する（しゅくしょうする）",
        "reduce, curtail"
      ],
      [
        "収縮する（しゅうしゅくする）",
        "deflate, contract, shrink"
      ],
      [
        "伸縮する（しんしゅくする）",
        "expand and contract"
      ],
      [
        "短縮する（たんしゅくする）",
        "shorten, abbreviate"
      ],
      [
        "濃縮する（のうしゅくする）",
        "concentrate ( solution)"
      ],
      [
        "恐縮する（きょうしゅくする）",
        "feel obliged, feel indebted"
      ],
      [
        "縮む（ちぢむ）",
        "shrink, contract [v.i.]"
      ],
      [
        "縮める（ちぢめる）",
        "shrink, contract, shorten [v.t.]"
      ],
      [
        "縮らす（ちぢらす）",
        "curl, crimp [v.t.]"
      ],
      [
        "縮れる（ちぢれる）",
        "be wavy, be curled [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "処",
    "kname": "sho(chi)",
    "kstroke": 5,
    "kmeaning": "deal with, treat",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "処女（しょじょ）",
        "virgin, maiden"
      ],
      [
        "処方箋（しょほうせん）",
        "prescription"
      ],
      [
        "処置する（しょちする）",
        "treat [v.t.]"
      ],
      [
        "処罰する（しょばつする）",
        "punish"
      ],
      [
        "処刑する（しょけいする）",
        "execute"
      ],
      [
        "処分する（しょぶんする）",
        "dispose of, deal with, punish"
      ],
      [
        "処理する（しょりする）",
        "process, deal with"
      ],
      [
        "対処する（たいしょする）",
        "deal with, cope"
      ],
      [
        "善処する（ぜんしょする）",
        "handle carefully, use discretion"
      ]
    ],
    "radical": "⼏",
    "rad_order": 20,
    "rad_stroke": 2,
    "rad_name_ja": "きにょう",
    "rad_name": "kinyou",
    "rad_meaning": "table",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "署",
    "kname": "(shoubou)sho",
    "kstroke": 13,
    "kmeaning": "public-service station",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "署長（しょちょう）",
        "chief, head"
      ],
      [
        "署員（しょいん）",
        "staff member, station employee"
      ],
      [
        "部署（ぶしょ）",
        "one's post, one's station"
      ],
      [
        "警察署（けいさつしょ）",
        "police station"
      ],
      [
        "消防署（しょうぼうしょ）",
        "fire station"
      ],
      [
        "税務署（ぜいむしょ）",
        "tax office"
      ],
      [
        "署名する（しょめいする）",
        "sign (a document)"
      ],
      [
        "代署する（だいしょする）",
        "sign for another"
      ]
    ],
    "radical": "",
    "rad_order": 139,
    "rad_stroke": 5,
    "rad_name_ja": "よこめ",
    "rad_name": "yokome",
    "rad_meaning": "eye",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "諸",
    "kname": "sho(koku)",
    "kstroke": 15,
    "kmeaning": "various",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "諸説（しょせつ）",
        "various opinions"
      ],
      [
        "諸島（しょとう）",
        "archipelago, group of islands"
      ],
      [
        "諸君（しょくん）",
        "Gentlemen!, Ladies!"
      ],
      [
        "諸国（しょこく）",
        "various countries"
      ],
      [
        "諸般（しょはん）",
        "circumstances"
      ],
      [
        "諸問題（しょもんだい）",
        "various problems"
      ],
      [
        "諸行無常（しょぎょうむじょう）",
        "impermanence of worldly things"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "傷",
    "kname": "shou-kizu",
    "kstroke": 13,
    "kmeaning": "wound, injury, hurt",
    "kgrade": 6,
    "kunyomi_ja": "きず、いた、いたむ、いためる",
    "kunyomi": "kizu, ita, itamu, itameru",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "傷害事件（しょうがいじけん）",
        "assault [n.]"
      ],
      [
        "損傷（そんしょう）",
        "damage, injury"
      ],
      [
        "重傷（じゅうしょう）",
        "serious wound or injury"
      ],
      [
        "中傷する（ちゅうしょうする）",
        "slander, defame"
      ],
      [
        "負傷する（ふしょうする）",
        "be injured, be wounded"
      ],
      [
        "傷（きず）",
        "wound, injury, hurt, cut"
      ],
      [
        "傷口（きずぐち）",
        "wound"
      ],
      [
        "傷跡（きずあと）",
        "scar"
      ],
      [
        "傷つける（きずつける）",
        "hurt, wound [v.t.]"
      ],
      [
        "傷める（いためる）",
        "damage, impair, hurt [v.t.]"
      ],
      [
        "傷む（いたむ）",
        "be damaged, go bad [v.i.]"
      ],
      [
        "*火傷（やけど）",
        "burn [n.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "蒸",
    "kname": "mu(su)",
    "kstroke": 13,
    "kmeaning": "steam, evaporate",
    "kgrade": 6,
    "kunyomi_ja": "む、むす、むれる、むらす",
    "kunyomi": "mu, musu, mureru, murasu",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "蒸気（じょうき）",
        "steam, vapor"
      ],
      [
        "蒸発する（じょうはつする）",
        "evaporate"
      ],
      [
        "蒸留する（じょうりゅうする）",
        "distill"
      ],
      [
        "蒸す（むす）",
        "steam, be humid"
      ],
      [
        "蒸し器（むしき）",
        "steamer"
      ],
      [
        "蒸し暑い（むしあつい）",
        "humid, sultry"
      ],
      [
        "蒸らす（むらす）",
        "steam, cook by steam [v.t.]"
      ],
      [
        "蒸れる（むれる）",
        "be well steamed [v.i.]"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "針",
    "kname": "shin-hari",
    "kstroke": 10,
    "kmeaning": "needle",
    "kgrade": 6,
    "kunyomi_ja": "はり",
    "kunyomi": "hari",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "針葉樹林（しんようじゅりん）",
        "conifer, needle-leaved tree"
      ],
      [
        "秒針（びょうしん）",
        "second hand"
      ],
      [
        "長針（ちょうしん）",
        "long hand"
      ],
      [
        "短針（たんしん）",
        "hour hand"
      ],
      [
        "指針（ししん）",
        "pointer, guiding principle"
      ],
      [
        "方針（ほうしん）",
        "objective, plan, policy"
      ],
      [
        "検針（けんしん）",
        "inspection of a meter"
      ],
      [
        "羅針盤（らしんばん）",
        "(mariner's) compass"
      ],
      [
        "避雷針（ひらいしん）",
        "lightning rod"
      ],
      [
        "針（はり）",
        "needle, fish hook, pointer, hand"
      ],
      [
        "針金（はりがね）",
        "wire"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "仁",
    "kname": "(kyou)nin",
    "kstroke": 4,
    "kmeaning": "benevolence, virtue, charity",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジン、ニン",
    "onyomi": "jin, nin",
    "examples": [
      [
        "仁義（じんぎ）",
        "charity & righteousness"
      ],
      [
        "仁徳（じんとく）",
        "benevolence, goodness"
      ],
      [
        "仁愛（じんあい）",
        "benevolence, charity, love"
      ],
      [
        "仁王（におう）",
        "the two guardian Deva kings"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "垂",
    "kname": "sui-ta(reru)",
    "kstroke": 8,
    "kmeaning": "hang down, drip",
    "kgrade": 6,
    "kunyomi_ja": "た、たれる、たらす、たれ",
    "kunyomi": "ta, tareru, tarasu, tare",
    "onyomi_ja": "スイ",
    "onyomi": "sui",
    "examples": [
      [
        "垂線（すいせん）",
        "perpendicular line"
      ],
      [
        "懸垂（けんすい）",
        "pull-up, chinning exercise"
      ],
      [
        "虫垂炎（ちゅうすいえん）",
        "appendicitis"
      ],
      [
        "垂直な（すいちょくな）",
        "vertical, perpendicular"
      ],
      [
        "垂らす（たらす）",
        "hang, dangle, spill [v.t.]"
      ],
      [
        "垂れる（たれる）",
        "hang, dangle, droop [v.i]"
      ],
      [
        "垂れ（たれ）",
        "sauce, gravy, hanging"
      ],
      [
        "雨垂れ（あまだれ）",
        "raindrops"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "寸",
    "kname": "sun",
    "kstroke": 3,
    "kmeaning": "a bit of, unit of length",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "スン",
    "onyomi": "sun",
    "examples": [
      [
        "寸法（すんぽう）",
        "measurement, size"
      ],
      [
        "寸評（すんぴょう）",
        "brief review, thumbnail sketch"
      ],
      [
        "寸時（すんじ）",
        "moment, very short time"
      ],
      [
        "寸劇（すんげき）",
        "short play, skit"
      ],
      [
        "寸陰（すんいん）",
        "brief moment"
      ],
      [
        "一寸（いっすん）",
        "one sun (3.03 cm), a little"
      ],
      [
        "原寸大（げんすんだい）",
        "actual size, full size"
      ],
      [
        "寸前に（すんぜんに）",
        "just before"
      ],
      [
        "寸断する（すんだんする）",
        "cut to pieces"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "閉",
    "kname": "hei-toji(ru)",
    "kstroke": 11,
    "kmeaning": "close",
    "kgrade": 6,
    "kunyomi_ja": "と、とじる、とざす、し、しめる、しまる",
    "kunyomi": "to, tojiru, tozasu, shi, shimeru, shimaru",
    "onyomi_ja": "ヘイ",
    "onyomi": "hei",
    "examples": [
      [
        "閉鎖的な（へいさてきな）",
        "unsociable, closed"
      ],
      [
        "開閉する（かいへいする）",
        "open and close"
      ],
      [
        "閉会する（へいかいする）",
        "close a meeting"
      ],
      [
        "閉店する（へいてんする）",
        "close shop"
      ],
      [
        "閉じる（とじる）",
        "close, end, shut [v.t.]"
      ],
      [
        "閉ざす（とざす）",
        "shut, be filled with anxiety [v.t.]"
      ],
      [
        "閉める（しめる）",
        "close [v.t.]"
      ],
      [
        "閉まる（しまる）",
        "close [v.i.]"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "盛",
    "kname": "saka(nna)",
    "kstroke": 11,
    "kmeaning": "prosperous, flourish, serve food",
    "kgrade": 6,
    "kunyomi_ja": "も、さか、もる、さかん、さかんな",
    "kunyomi": "mo, saka, moru, sakan, sakanna",
    "onyomi_ja": "セイ、ジョウ",
    "onyomi": "sei, jou",
    "examples": [
      [
        "盛衰（せいすい）",
        "rise and fall"
      ],
      [
        "隆盛（りゅうせい）",
        "prosperity"
      ],
      [
        "最盛期（さいせいき）",
        "golden age"
      ],
      [
        "盛況な（せいきょうな）",
        "successful, prosperous"
      ],
      [
        "盛大な（せいだいな）",
        "grand, prosperous, magnificent"
      ],
      [
        "繁盛する（はんじょうする）",
        "prosper, flourish, thrive"
      ],
      [
        "盛る（もる）",
        "pile up, dish up, heap up"
      ],
      [
        "山盛り（やまもり）",
        "a heap"
      ],
      [
        "酒盛り（さかもり）",
        "drinking bout, drinking party"
      ],
      [
        "目盛り（めもり）",
        "scale, gradation, point [n.]"
      ],
      [
        "盛んな（さかんな）",
        "prosperous, flourishing"
      ],
      [
        "働き盛り（はたらきざかり）",
        "prime of life"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誠",
    "kname": "sei(jitsuna)",
    "kstroke": 13,
    "kmeaning": "sincerity, truth, reality, fidelity",
    "kgrade": 6,
    "kunyomi_ja": "まこと",
    "kunyomi": "makoto",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "誠意（せいい）",
        "sincerity, good faith"
      ],
      [
        "忠誠（ちゅうせい）",
        "loyalty, sincerity"
      ],
      [
        "誠心誠意（せいしんせいい）",
        "in all sincerity"
      ],
      [
        "誠実な（せいじつな）",
        "sincere, honest, faithful"
      ],
      [
        "誠（まこと）",
        "truth, faith, fidelity"
      ],
      [
        "誠に（まことに）",
        "indeed, really, truly"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宣",
    "kname": "sen(den)",
    "kstroke": 9,
    "kmeaning": "proclaim, announce",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "宣教師（せんきょうし）",
        "missionary"
      ],
      [
        "宣戦布告（せんせんふこく）",
        "proclamation of war"
      ],
      [
        "独立宣言（どくりつせんげん）",
        "Declaration of Independence"
      ],
      [
        "宣言する（せんげんする）",
        "declare, proclaim, announce"
      ],
      [
        "宣伝する（せんでんする）",
        "publicize, propagandize"
      ],
      [
        "宣告する（せんこくする）",
        "pronounce, condemn"
      ],
      [
        "宣誓する（せんせいする）",
        "swear and oath"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "泉",
    "kname": "izumi",
    "kstroke": 9,
    "kmeaning": "spring, fountain",
    "kgrade": 6,
    "kunyomi_ja": "いずみ",
    "kunyomi": "izumi",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "温泉（おんせん）",
        "onsen, hot spring, spa"
      ],
      [
        "冷泉（れいせん）",
        "cold mineral spring"
      ],
      [
        "鉱泉（こうせん）",
        "mineral spring"
      ],
      [
        "源泉（げんせん）",
        "source"
      ],
      [
        "泉（いずみ）",
        "spring, fountain"
      ]
    ],
    "radical": "⽔",
    "rad_order": 109,
    "rad_stroke": 4,
    "rad_name_ja": "みず",
    "rad_name": "mizu",
    "rad_meaning": "water",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "染",
    "kname": "sen-so(meru)",
    "kstroke": 9,
    "kmeaning": "dye",
    "kgrade": 6,
    "kunyomi_ja": "そ、し、そめる、ぞめ、そまる、しみる、しみ",
    "kunyomi": "so, shi, someru, zome, somaru, shimiru, jimiru",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "染色（せんしょく）",
        "staining, stain, dyeing"
      ],
      [
        "染料（せんりょう）",
        "dyes"
      ],
      [
        "染色体（せんしょくたい）",
        "chromosome"
      ],
      [
        "伝染病（でんせんびょう）",
        "infectious disease, epidemic"
      ],
      [
        "染色する（せんしょくする）",
        "stain, dye"
      ],
      [
        "感染する（かんせんする）",
        "contract, be infected [v.i.]"
      ],
      [
        "汚染する（おせんする）",
        "pollute, contaminate [v.i.]"
      ],
      [
        "伝染する（でんせんする）",
        "contract, be infected [v.i.]"
      ],
      [
        "染める（そめる）",
        "dye, color [v.t.]"
      ],
      [
        "染まる（そまる）",
        "dye [v.i.]"
      ],
      [
        "染みる（しみる）",
        "pierce, permeate [v.i.]"
      ],
      [
        "染み（しみ）",
        "stain, spot"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "善",
    "kname": "zen-yo(i)",
    "kstroke": 12,
    "kmeaning": "good",
    "kgrade": 6,
    "kunyomi_ja": "よ、よい",
    "kunyomi": "yo, yoi",
    "onyomi_ja": "ゼン",
    "onyomi": "zen",
    "examples": [
      [
        "善意（ぜんい）",
        "good faith, good will"
      ],
      [
        "善人（ぜんにん）",
        "good people"
      ],
      [
        "善行（ぜんこう）",
        "good deed"
      ],
      [
        "善悪（ぜんあく）",
        "good and evil"
      ],
      [
        "最善（さいぜん）",
        "the very best"
      ],
      [
        "親善試合（しんぜんじあい）",
        "friendly match"
      ],
      [
        "善良な（ぜんりょうな）",
        "virtuous, good"
      ],
      [
        "偽善的な（ぎぜんてきな）",
        "hypocritical"
      ],
      [
        "改善する（かいぜんする）",
        "better, improve"
      ],
      [
        "善い（よい）",
        "good, nice, pleasant"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "奏",
    "kname": "kana(deru)",
    "kstroke": 9,
    "kmeaning": "play music",
    "kgrade": 6,
    "kunyomi_ja": "かな、かなでる",
    "kunyomi": "kana, kanaderu",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "吹奏楽（すいそうがく）",
        "wind-instrument music"
      ],
      [
        "協奏曲（きょうそうきょく）",
        "concerto"
      ],
      [
        "演奏会（えんそうかい）",
        "concert"
      ],
      [
        "二重奏（にじゅうそう）",
        "instrumental duo"
      ],
      [
        "合奏する（がっそうする）",
        "play in concert"
      ],
      [
        "伴奏する（ばんそうする）",
        "accompany (music)"
      ],
      [
        "演奏する（えんそうする）",
        "perform (music)"
      ],
      [
        "奏でる（かなでる）",
        "play (an instrument)"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "装",
    "kname": "(hou)sou(shi)",
    "kstroke": 12,
    "kmeaning": "dress, fit out, wear, pretend",
    "kgrade": 6,
    "kunyomi_ja": "よそお、よそおう",
    "kunyomi": "yosoo, yosoou",
    "onyomi_ja": "ソウ、ショウ",
    "onyomi": "sou, shou",
    "examples": [
      [
        "装置（そうち）",
        "equipment"
      ],
      [
        "服装（ふくそう）",
        "dress, clothes, outfit"
      ],
      [
        "洋装（ようそう）",
        "Western clothing"
      ],
      [
        "包装紙（ほうそうし）",
        "wrapping paper"
      ],
      [
        "仮装行列（かそうぎょうれつ）",
        "costume parade"
      ],
      [
        "装備する（そうびする）",
        "equip, fit out"
      ],
      [
        "改装する（かいそうする）",
        "remodel, reorganize"
      ],
      [
        "武装する（ぶそうする）",
        "arm [v.i.]"
      ],
      [
        "変装する（へんそうする）",
        "disguise oneself, masquerade"
      ],
      [
        "正装する（せいそうする）",
        "dress up, wear full dress"
      ],
      [
        "装束（しょうぞく）",
        "costume"
      ],
      [
        "装う（よそおう）",
        "dress, pretend, feign"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "層",
    "kname": "(kou)sou(biru)",
    "kstroke": 14,
    "kmeaning": "stratum, layer, level",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "階層（かいそう）",
        "class, social stratum, hierarchy"
      ],
      [
        "地層（ちそう）",
        "stratum"
      ],
      [
        "上層（じょうそう）",
        "upper stratum"
      ],
      [
        "下層（かそう）",
        "lower stratum"
      ],
      [
        "高層ビル（こうそうビル）",
        "skyscraper"
      ],
      [
        "成層圏（せいそうけん）",
        "stratosphere"
      ],
      [
        "知識層（ちしきそう）",
        "the intellectual class"
      ],
      [
        "読者層（どくしゃそう）",
        "class of readers"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "操",
    "kname": "ayatsu(ru)",
    "kstroke": 16,
    "kmeaning": "manipulate, operate, chastity",
    "kgrade": 6,
    "kunyomi_ja": "みさお、あやつ、あやつる",
    "kunyomi": "misao, ayatsu, ayatsuru",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "体操（たいそう）",
        "gymnastics, physical exercises"
      ],
      [
        "節操（せっそう）",
        "integrity, honor, chastity"
      ],
      [
        "操業する（そうぎょうする）",
        "operate, run"
      ],
      [
        "操作する（そうさする）",
        "operate, manage"
      ],
      [
        "操縦する（そうじゅうする）",
        "operate, control, pilot"
      ],
      [
        "操（みさお）",
        "chastity"
      ],
      [
        "操る（あやつる）",
        "manipulate, operate"
      ],
      [
        "操り人形（あやつりにんぎょう）",
        "puppet, marionette"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "友",
    "kname": "yuu-tomo",
    "kstroke": 4,
    "kmeaning": "friend",
    "kgrade": 2,
    "kunyomi_ja": "とも",
    "kunyomi": "tomo",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "友人（ゆうじん）",
        "friend"
      ],
      [
        "友情（ゆうじょう）",
        "friendship"
      ],
      [
        "親友（しんゆう）",
        "close friend"
      ],
      [
        "友達（ともだち）",
        "friend"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "臓",
    "kname": "zou(motsu)",
    "kstroke": 19,
    "kmeaning": "internal organ",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "臓器（ぞうき）",
        "viscera, internal organs"
      ],
      [
        "臓物（ぞうもつ）",
        "entrails, giblets"
      ],
      [
        "内臓（ないぞう）",
        "internal organs, intestines"
      ],
      [
        "心臓（しんぞう）",
        "heart"
      ],
      [
        "肝臓（かんぞう）",
        "liver"
      ],
      [
        "腎臓（じんぞう）",
        "kidney"
      ],
      [
        "五臓六腑（ごぞうろっぷ）",
        "the internal organs"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誕",
    "kname": "tan(joubi)",
    "kstroke": 15,
    "kmeaning": "be born, birth",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "誕生日（たんじょうび）",
        "birthday"
      ],
      [
        "生誕（せいたん）",
        "birth, nativity"
      ],
      [
        "降誕（こうたん）",
        "birth, nativity"
      ],
      [
        "誕生する（たんじょうする）",
        "be born"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "暖",
    "kname": "dan-atata(maru)",
    "kstroke": 13,
    "kmeaning": "warm",
    "kgrade": 6,
    "kunyomi_ja": "あたた、あたたかい、あたたまる、あたためる",
    "kunyomi": "atata, atatakai, atatamaru, atatameru",
    "onyomi_ja": "ダン",
    "onyomi": "dan",
    "examples": [
      [
        "暖流（だんりゅう）",
        "warm current"
      ],
      [
        "暖冬（だんとう）",
        "mild winter"
      ],
      [
        "暖房（だんぼう）",
        "heating system"
      ],
      [
        "暖炉（だんろ）",
        "fireplace, hearth"
      ],
      [
        "暖気（だんき）",
        "warmth"
      ],
      [
        "寒暖計（かんだんけい）",
        "thermometer"
      ],
      [
        "温暖な（おんだんな）",
        "warm [adj.]"
      ],
      [
        "暖かい（あたたかい）",
        "warm [adj.]"
      ],
      [
        "暖める（あたためる）",
        "warm, heat [v.t.]"
      ],
      [
        "暖まる（あたたまる）",
        "get warm, warm oneself [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宙",
    "kname": "chuu(gaeri)",
    "kstroke": 8,
    "kmeaning": "space, midair",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "宙返り（ちゅうがえり）",
        "somersault, loop"
      ],
      [
        "宙づり（ちゅうづり）",
        "hanging, suspended [n.]"
      ],
      [
        "宇宙（うちゅう）",
        "universe, cosmos, space"
      ],
      [
        "宇宙飛行士（うちゅうひこうし）",
        "astronaut"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "庁",
    "kname": "(keishi)chou",
    "kstroke": 5,
    "kmeaning": "government agency",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "庁舎（ちょうしゃ）",
        "government office building"
      ],
      [
        "官庁（かんちょう）",
        "government office"
      ],
      [
        "都庁（とちょう）",
        "Tokyo Metropolitan area office"
      ],
      [
        "県庁（けんちょう）",
        "prefectural office"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "環境庁（かんきょうちょう）",
        "the Department of Environment"
      ],
      [
        "気象庁（きしょうちょう）",
        "the Department of Meteorology"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "頂",
    "kname": "chou-itada(ku)",
    "kstroke": 11,
    "kmeaning": "summit, receive humbly",
    "kgrade": 6,
    "kunyomi_ja": "いただ、いただく、いただき",
    "kunyomi": "itada, itadaku, itadaki",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "頂点（ちょうてん）",
        "top, summit"
      ],
      [
        "頂上（ちょうじょう）",
        "top, summit, peak"
      ],
      [
        "山頂（さんちょう）",
        "summit"
      ],
      [
        "絶頂（ぜっちょう）",
        "summit, peak, climax"
      ],
      [
        "有頂天（うちょうてん）",
        "ecstasy, rapture"
      ],
      [
        "登頂する（とうちょうする）",
        "climb to the summit"
      ],
      [
        "頂戴する（ちょうだいする）",
        "receive, be given [hum.]"
      ],
      [
        "頂く（いただく）",
        "receive, take food [hum.]"
      ],
      [
        "頂けない（いただけない）",
        "pitiful, miserable, shameful"
      ],
      [
        "頂（いただき）",
        "top, summit, spire, peak, crown"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "潮",
    "kname": "chou-shio",
    "kstroke": 15,
    "kmeaning": "tide",
    "kgrade": 6,
    "kunyomi_ja": "しお",
    "kunyomi": "shio",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "潮流（ちょうりゅう）",
        "tide, tidal current, trend"
      ],
      [
        "干潮（かんちょう）",
        "ebb tide"
      ],
      [
        "満潮（まんちょう）",
        "high tide"
      ],
      [
        "潮（しお）",
        "tide"
      ],
      [
        "潮時（しおどき）",
        "timing of tides, opportunity"
      ],
      [
        "潮干狩り（しおひがり）",
        "shell gathering"
      ],
      [
        "血潮（ちしお）",
        "blood"
      ],
      [
        "黒潮（くろしお）",
        "the Japan Current"
      ],
      [
        "引き潮（ひきしお）",
        "ebb tide"
      ],
      [
        "満ち潮（みちしお）",
        "high tide"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "賃",
    "kname": "(ya)chin",
    "kstroke": 13,
    "kmeaning": "wage, charges, fare, fee",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チン",
    "onyomi": "chin",
    "examples": [
      [
        "賃金（ちんぎん）",
        "wages"
      ],
      [
        "賃上げ（ちんあげ）",
        "wage increase"
      ],
      [
        "家賃（やちん）",
        "rent"
      ],
      [
        "運賃（うんちん）",
        "freight rates, fare"
      ],
      [
        "工賃（こうちん）",
        "wages, pay"
      ],
      [
        "手間賃（てまちん）",
        "wages for labor, pay"
      ],
      [
        "電車賃（でんしゃちん）",
        "train fare"
      ],
      [
        "借り賃（かりちん）",
        "rent fare"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "討",
    "kname": "tou-u(tsu)",
    "kstroke": 10,
    "kmeaning": "attack, study, examine, discuss",
    "kgrade": 6,
    "kunyomi_ja": "う、うつ",
    "kunyomi": "u, utsu",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "討議する（とうぎする）",
        "debate, discuss"
      ],
      [
        "討論する（とうろんする）",
        "debate, discuss"
      ],
      [
        "討伐する（とうばつする）",
        "subjugate, suppress"
      ],
      [
        "検討する（けんとうする）",
        "consider, examine"
      ],
      [
        "討つ（うつ）",
        "attack, strike, shoot, avenge"
      ],
      [
        "討ち死に（うちじに）",
        "death in battle"
      ],
      [
        "敵討ち（かたきうち）",
        "revenge [n.]"
      ],
      [
        "不意討ち（ふいうち）",
        "surprise attack"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "党",
    "kname": "(minshu)tou",
    "kstroke": 10,
    "kmeaning": "party, faction",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "党（とう）",
        "political party"
      ],
      [
        "党員（とういん）",
        "party member"
      ],
      [
        "党首（とうしゅ）",
        "party leader"
      ],
      [
        "党派（とうは）",
        "faction"
      ],
      [
        "党大会（とうたいかい）",
        "party convention"
      ],
      [
        "野党（やとう）",
        "opposition party"
      ],
      [
        "与党（よとう）",
        "party in power"
      ],
      [
        "政党（せいとう）",
        "political party"
      ],
      [
        "徒党（ととう）",
        "clique, faction, cabal"
      ],
      [
        "社会党（しゃかいとう）",
        "Socialist Party"
      ],
      [
        "共和党（きょうわとう）",
        "Republican Party"
      ],
      [
        "民主党（みんしゅとう）",
        "Democratic party"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "上",
    "kname": "jou-ue",
    "kstroke": 3,
    "kmeaning": "up",
    "kgrade": 1,
    "kunyomi_ja": "うえ、うわ、かみ、あ、あげる、あがる、のぼ、のぼる",
    "kunyomi": "ue, uwa, kami, a, ageru, agaru, nobo, noboru",
    "onyomi_ja": "ジョウ、ショウ",
    "onyomi": "jou, shou",
    "examples": [
      [
        "上下する（じょうげする）",
        "go up and down"
      ],
      [
        "頂上（ちょうじょう）",
        "summit"
      ],
      [
        "上手（じょうず）",
        "skillful"
      ],
      [
        "以上（いじょう）",
        "more than, above"
      ],
      [
        "上人（しょうにん）",
        "priest"
      ],
      [
        "上（うえ）",
        "above, on top, upper part of"
      ],
      [
        "目上（めうえ）",
        "superior(s)"
      ],
      [
        "上回る（うわまわる）",
        "exceed"
      ],
      [
        "川上（かわかみ）",
        "upper reaches of a river"
      ],
      [
        "上がる（あがる）",
        "rise, climb up [v.i.]"
      ],
      [
        "上げる（あげる）",
        "raise [v.t.]"
      ],
      [
        "上る（のぼる）",
        "rise, climb up [v.i.]"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "達",
    "kname": "tatsu-tachi",
    "kstroke": 12,
    "kmeaning": "attain, suffix for plural",
    "kgrade": 4,
    "kunyomi_ja": "たち",
    "kunyomi": "tachi",
    "onyomi_ja": "タツ",
    "onyomi": "tatsu",
    "examples": [
      [
        "到達する（とうたつする）",
        "reach, arrive"
      ],
      [
        "発達する（はったつする）",
        "develop"
      ],
      [
        "調達する（ちょうたつする）",
        "supply"
      ],
      [
        "配達する（はいたつする）",
        "deliver"
      ],
      [
        "速達（そくたつ）",
        "express delivery"
      ],
      [
        "達する（たっする）",
        "reach"
      ],
      [
        "私達（わたしたち）",
        "we"
      ],
      [
        "子供達（こどもたち）",
        "children"
      ],
      [
        "友達（ともだち）",
        "friends"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "糖",
    "kname": "(budou)tou",
    "kstroke": 16,
    "kmeaning": "sugar",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "糖分（とうぶん）",
        "sugar content"
      ],
      [
        "糖尿病（とうにょうびょう）",
        "diabetes"
      ],
      [
        "砂糖（さとう）",
        "sugar"
      ],
      [
        "果糖（かとう）",
        "fructose"
      ],
      [
        "ブドウ糖（ぶどうとう）",
        "glucose, grape sugar"
      ],
      [
        "グラニュー糖（グラニューとう）",
        "granulated sugar"
      ],
      [
        "血糖値（けっとうち）",
        "blood sugar level"
      ],
      [
        "製糖する（せいとうする）",
        "produce sugar"
      ]
    ],
    "radical": "",
    "rad_order": 156,
    "rad_stroke": 6,
    "rad_name_ja": "こめへん",
    "rad_name": "komehen",
    "rad_meaning": "rice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "納",
    "kname": "nou-osa(meru)",
    "kstroke": 10,
    "kmeaning": "pay, accept, put away, supply",
    "kgrade": 6,
    "kunyomi_ja": "おさ、 おさめる、おさまる",
    "kunyomi": "osa, osameru, osamaru",
    "onyomi_ja": "ノウ、ナツ、ナ、ナン、トウ",
    "onyomi": "nou, nat, na, nan, tou",
    "examples": [
      [
        "納期（のうき）",
        "date of delivery or payment"
      ],
      [
        "納税する（のうぜいする）",
        "pay taxes"
      ],
      [
        "納入する（のうにゅうする）",
        "pay, supply"
      ],
      [
        "滞納する（たいのうする）",
        "default, fail to pay"
      ],
      [
        "収納する（しゅうのうする）",
        "receive, store, put away"
      ],
      [
        "納豆（なっとう）",
        "natto"
      ],
      [
        "納得する（なっとくする）",
        "consent, assent, understand"
      ],
      [
        "納屋（なや）",
        "shed, barn, outhouse"
      ],
      [
        "納戸（なんど）",
        "back room, storage room"
      ],
      [
        "出納係（すいとうがかり）",
        "cashier, treasurer, teller"
      ],
      [
        "納める（おさめる）",
        "obtain, reap, pay [v.t.]"
      ],
      [
        "納まる（おさまる）",
        "be in place, be settled [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "脳",
    "kname": "(zu)nou",
    "kstroke": 11,
    "kmeaning": "brain",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "脳（のう）",
        "brain"
      ],
      [
        "脳髄（のうずい）",
        "brain"
      ],
      [
        "脳炎（のうえん）",
        "brain inflammation"
      ],
      [
        "脳死（のうし）",
        "brain death"
      ],
      [
        "脳裏（のうり）",
        "one's mind"
      ],
      [
        "脳細胞（のうさいぼう）",
        "brain cell"
      ],
      [
        "脳卒中（のうそっちゅう）",
        "stroke, cerebral hemorrhage"
      ],
      [
        "大脳（だいのう）",
        "cerebrum"
      ],
      [
        "小脳（しょうのう）",
        "cerebellum"
      ],
      [
        "頭脳（ずのう）",
        "head, brains, intellect"
      ],
      [
        "首脳（しゅのう）",
        "head, brains"
      ],
      [
        "洗脳する（せんのうする）",
        "brainwash"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "拝",
    "kname": "oga(mu)",
    "kstroke": 8,
    "kmeaning": "worship, humbly, pray, venerate",
    "kgrade": 6,
    "kunyomi_ja": "おが、おがむ",
    "kunyomi": "oga, ogamu",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "拝殿（はいでん）",
        "front shrine, hall of worship"
      ],
      [
        "拝啓（はいけい）",
        "Dear"
      ],
      [
        "拝金主義（はいきんしゅぎ）",
        "worship of money"
      ],
      [
        "拝見する（はいけんする）",
        "look at, see [hum.]"
      ],
      [
        "拝借する（はいしゃくする）",
        "borrow [hum.]"
      ],
      [
        "拝聴する（はいちょうする）",
        "listen to [hum.]"
      ],
      [
        "礼拝する（れいはいする）",
        "worship [v.t.]"
      ],
      [
        "崇拝する（すうはいする）",
        "adore, idolize, worship"
      ],
      [
        "参拝する（さんぱいする）",
        "pay visit to worship"
      ],
      [
        "拝む（おがむ）",
        "worship, pray, bow to"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "肺",
    "kname": "hai(katsuryou)",
    "kstroke": 9,
    "kmeaning": "lung",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "肺（はい）",
        "lung"
      ],
      [
        "肺臓（はいぞう）",
        "lungs"
      ],
      [
        "肺癌（はいがん）",
        "lung cancer"
      ],
      [
        "肺炎（はいえん）",
        "pneumonia"
      ],
      [
        "肺活量（はいかつりょう）",
        "lung capacity"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "俳",
    "kname": "hai(ku)",
    "kstroke": 10,
    "kmeaning": "haiku, actor",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "俳句（はいく）",
        "haiku poetry"
      ],
      [
        "俳人（はいじん）",
        "haiku poet"
      ],
      [
        "俳壇（はいだん）",
        "the world of the haiku"
      ],
      [
        "俳優（はいゆう）",
        "actor, actress"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "班",
    "kname": "han(chou)",
    "kstroke": 10,
    "kmeaning": "squad, group",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "班（はん）",
        "group, party, section"
      ],
      [
        "斑点（はんてん）",
        "speck, fleck"
      ],
      [
        "班長（はんちょう）",
        "squad leader, group leader"
      ],
      [
        "二班（にはん）",
        "two groups, second group"
      ],
      [
        "取材班（しゅざいはん）",
        "team of reporters"
      ],
      [
        "作業班（さぎょうはん）",
        "work group"
      ],
      [
        "救護班（きゅうごはん）",
        "relief squad, rescue party"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "秘",
    "kname": "hi(mitsu)",
    "kstroke": 10,
    "kmeaning": "secret",
    "kgrade": 6,
    "kunyomi_ja": "ひ、ひめる",
    "kunyomi": "hi, himeru",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "秘密（ひみつ）",
        "secret, secrecy"
      ],
      [
        "秘訣（ひけつ）",
        "key, the secret (of)"
      ],
      [
        "秘書（ひしょ）",
        "secretary"
      ],
      [
        "秘伝（ひでん）",
        "secret, mystery, secret formula"
      ],
      [
        "秘蔵（ひぞう）",
        "treasure, prize, cherish"
      ],
      [
        "秘宝（ひほう）",
        "treasure, treasured article"
      ],
      [
        "極秘（ごくひ）",
        "absolute secrecy"
      ],
      [
        "便秘（べんぴ）",
        "constipation"
      ],
      [
        "神秘的な（しんぴてきな）",
        "mysterious"
      ],
      [
        "黙秘する（もくひする）",
        "keep silent, stand mute"
      ],
      [
        "秘める（ひめる）",
        "hide, keep to oneself"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "腹",
    "kname": "fuku-hara",
    "kstroke": 13,
    "kmeaning": "belly, heart, mind",
    "kgrade": 6,
    "kunyomi_ja": "はら",
    "kunyomi": "hara",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "腹部（ふくぶ）",
        "abdomen"
      ],
      [
        "腹痛（ふくつう）",
        "stomach ache, abdominal pain"
      ],
      [
        "腹心（ふくしん）",
        "confidant, trusted friend"
      ],
      [
        "満腹（まんぷく）",
        "full, glutted [n.]"
      ],
      [
        "空腹（くうふく）",
        "hunger"
      ],
      [
        "切腹する（せっぷくする）",
        "commit seppuku"
      ],
      [
        "立腹する（りっぷくする）",
        "anger, get angry"
      ],
      [
        "腹（はら）",
        "abdomen, belly, stomach"
      ],
      [
        "腹違い（はらちがい）",
        "born of a different mother [n.]"
      ],
      [
        "腹を立てる（はらをたてる）",
        "take offense, get angry [v.t.]"
      ],
      [
        "腹が立つ（はらがたつ）",
        "take offense, get angry [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "奮",
    "kname": "fun(sensuru)",
    "kstroke": 16,
    "kmeaning": "rouse up, be enlivened",
    "kgrade": 6,
    "kunyomi_ja": "ふる、ふるう",
    "kunyomi": "furu, furuu",
    "onyomi_ja": "フン",
    "onyomi": "fun",
    "examples": [
      [
        "奮発する（ふんぱつする）",
        "make a great effort, splurge"
      ],
      [
        "奮起する（ふんきする）",
        "stir, rouse oneself"
      ],
      [
        "奮戦する（ふんせんする）",
        "fight hard"
      ],
      [
        "発奮する（はっぷんする）",
        "be stimulated, be inspired"
      ],
      [
        "興奮する（こうふんする）",
        "get excited, be excited"
      ],
      [
        "奮う（ふるう）",
        "show, wield"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "手",
    "kname": "te",
    "kstroke": 4,
    "kmeaning": "hand",
    "kgrade": 1,
    "kunyomi_ja": "て、た",
    "kunyomi": "te, ta",
    "onyomi_ja": "シュ、ズ",
    "onyomi": "shu, zu",
    "examples": [
      [
        "握手する（あくしゅする）",
        "shake hands"
      ],
      [
        "選手（せんしゅ）",
        "player (in game)"
      ],
      [
        "手話（しゅわ）",
        "sign language"
      ],
      [
        "上手な（じょうずな）",
        "skillful"
      ],
      [
        "手紙（てがみ）",
        "letter"
      ],
      [
        "手帳（てちょう）",
        "notebook"
      ],
      [
        "手伝う（てつだう）",
        "help"
      ],
      [
        "手前（てまえ）",
        "in front of oneself, this side"
      ],
      [
        "お手洗い（おてあらい）",
        "toilet"
      ],
      [
        "手綱（たづな）",
        "bridle"
      ],
      [
        "下手な（へたな）",
        "unskillful"
      ]
    ],
    "radical": "⼿",
    "rad_order": 84,
    "rad_stroke": 4,
    "rad_name_ja": "て",
    "rad_name": "te",
    "rad_meaning": "hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "陛",
    "kname": "(tennou)hei(ka)",
    "kstroke": 10,
    "kmeaning": "imperial palace steps",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヘイ",
    "onyomi": "hei",
    "examples": [
      [
        "陛下（へいか）",
        "your Majesty"
      ],
      [
        "天皇陛下（てんのうへいか）",
        "His Majesty the Emperor"
      ],
      [
        "皇后陛下（こうごうへいか）",
        "Her majesty the Empress"
      ],
      [
        "国王陛下（こくおうへいか）",
        "His Majesty the King"
      ],
      [
        "女王陛下（じょおうへいか）",
        "Her Majesty the Queen"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "補",
    "kname": "ogina(u)",
    "kstroke": 12,
    "kmeaning": "supplement, supply, make up for",
    "kgrade": 6,
    "kunyomi_ja": "おぎな、おぎなう",
    "kunyomi": "ogina, oginau",
    "onyomi_ja": "ホ",
    "onyomi": "ho",
    "examples": [
      [
        "補欠（ほけつ）",
        "substitute, filling a vacancy"
      ],
      [
        "候補者（こうほしゃ）",
        "candidate, applicant"
      ],
      [
        "補佐する（ほさする）",
        "aid, help, assist, advise"
      ],
      [
        "補助する（ほじょする）",
        "help, assist, support, aid"
      ],
      [
        "補導する（ほどうする）",
        "guide, direct, protect"
      ],
      [
        "補足する（ほそくする）",
        "supplement, complement"
      ],
      [
        "補償する（ほしょうする）",
        "compensate"
      ],
      [
        "補充する（ほじゅうする）",
        "supplement, replenish, fill up"
      ],
      [
        "補給する（ほきゅうする）",
        "supply, replenish"
      ],
      [
        "補正する（ほせいする）",
        "revise, correct"
      ],
      [
        "補習する（ほしゅうする）",
        "give supplementary lessons"
      ],
      [
        "補う（おぎなう）",
        "fill up (a vacancy), make up"
      ]
    ],
    "radical": "⻂",
    "rad_order": 151,
    "rad_stroke": 5,
    "rad_name_ja": "ころもへん",
    "rad_name": "koromohen",
    "rad_meaning": "clothing",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宝",
    "kname": "takara",
    "kstroke": 8,
    "kmeaning": "treasure",
    "kgrade": 6,
    "kunyomi_ja": "たから",
    "kunyomi": "takara",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "宝庫（ほうこ）",
        "treasure house, treasury"
      ],
      [
        "宝石（ほうせき）",
        "gem, jewel"
      ],
      [
        "財宝（ざいほう）",
        "treasure"
      ],
      [
        "国宝（こくほう）",
        "national treasure"
      ],
      [
        "家宝（かほう）",
        "heirloom"
      ],
      [
        "宝（たから）",
        "treasure"
      ],
      [
        "宝くじ（たからくじ）",
        "lottery"
      ],
      [
        "宝物（たからもの）",
        "treasure, treasured item"
      ],
      [
        "宝探し（たからさがし）",
        "treasure hunt"
      ],
      [
        "宝島（たからじま）",
        "treasure island"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "棒",
    "kname": "(ai)bou",
    "kstroke": 12,
    "kmeaning": "rod, stick, pole",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "棒（ぼう）",
        "pole, rod, stick"
      ],
      [
        "棒状（ぼうじょう）",
        "cylindrical"
      ],
      [
        "棒立ち（ぼうだち）",
        "stand bolt upright [n.]"
      ],
      [
        "棒読み（ぼうよみ）",
        "read in monotone [n.]"
      ],
      [
        "相棒（あいぼう）",
        "partner, pal, accomplice"
      ],
      [
        "警棒（けいぼう）",
        "police baton, nightstick"
      ],
      [
        "泥棒（どろぼう）",
        "thief, burglar, robber, theft"
      ],
      [
        "延べ棒（のべぼう）",
        "ingot"
      ],
      [
        "用心棒（ようじんぼう）",
        "bodyguard"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "幕",
    "kname": "(uchi)maku",
    "kstroke": 13,
    "kmeaning": "curtain, shogunate",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "マク、バク",
    "onyomi": "maku, baku",
    "examples": [
      [
        "幕（まく）",
        "curtain (theater), hanging"
      ],
      [
        "天幕（てんまく）",
        "curtain, tent, pavilion"
      ],
      [
        "内幕（ないまく）",
        "inside information"
      ],
      [
        "煙幕（えんまく）",
        "smoke screen"
      ],
      [
        "垂れ幕（たれまく）",
        "hanging screen, curtain"
      ],
      [
        "除幕式（じょまくしき）",
        "unveiling ceremony"
      ],
      [
        "開幕する（かいまくする）",
        "raise the curtain"
      ],
      [
        "幕府（ばくふ）",
        "bakufu, shogunate"
      ],
      [
        "幕末（ばくまつ）",
        "End of Edo era"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "密",
    "kname": "mitsu(do)",
    "kstroke": 11,
    "kmeaning": "close, secret, dense, fine",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ミツ",
    "onyomi": "mitsu",
    "examples": [
      [
        "密林（みつりん）",
        "dense forest, jungle"
      ],
      [
        "密度（みつど）",
        "density"
      ],
      [
        "密室（みっしつ）",
        "closed-door, locked room"
      ],
      [
        "秘密（ひみつ）",
        "secret, secrecy"
      ],
      [
        "密接な（みっせつな）",
        "close, intimate"
      ],
      [
        "過密な（かみつな）",
        "over populated"
      ],
      [
        "緊密な（きんみつな）",
        "close, intimate"
      ],
      [
        "親密な（しんみつな）",
        "intimate, friendly"
      ],
      [
        "厳密な（げんみつな）",
        "strict, rigorous"
      ],
      [
        "密告する（みっこくする）",
        "betray, inform (police), tip off"
      ],
      [
        "密集する（みっしゅうする）",
        "crowd, swarm"
      ],
      [
        "密売する（みつばいする）",
        "smuggle, bootleg"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "盟",
    "kname": "(ka)mei(suru)",
    "kstroke": 13,
    "kmeaning": "alliance, oath",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "メイ",
    "onyomi": "mei",
    "examples": [
      [
        "盟友（めいゆう）",
        "sworn friend"
      ],
      [
        "盟約（めいやく）",
        "oath, pledge, pact, covenant"
      ],
      [
        "同盟（どうめい）",
        "alliance, union, league"
      ],
      [
        "連盟（れんめい）",
        "league, union, alliance"
      ],
      [
        "加盟する（かめいする）",
        "join, become a member"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "模",
    "kname": "mo(you)",
    "kstroke": 14,
    "kmeaning": "pattern, imitate, copy, model",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "モ、ボ",
    "onyomi": "mo, bo",
    "examples": [
      [
        "模範（もはん）",
        "model, example"
      ],
      [
        "模型（もけい）",
        "model, dummy"
      ],
      [
        "模様（もよう）",
        "pattern, figure, design"
      ],
      [
        "模擬試験（もぎしけん）",
        "trial examination, sham examination"
      ],
      [
        "模倣する（もほうする）",
        "imitate, copy"
      ],
      [
        "模造する（もぞうする）",
        "imitation, mimic"
      ],
      [
        "模写する（もしゃする）",
        "copy, reproduce"
      ],
      [
        "規模（きぼ）",
        "scale, scope, size"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "郵",
    "kname": "yuu(bin)",
    "kstroke": 11,
    "kmeaning": "mail",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "郵便（ゆうびん）",
        "mail, postal service"
      ],
      [
        "郵便物（ゆうびんぶつ）",
        "postal items"
      ],
      [
        "郵便局（ゆうびんきょく）",
        "post office"
      ],
      [
        "郵送料（ゆうそうりょう）",
        "postage, freight costs"
      ],
      [
        "郵便屋さん（ゆうびんやさん）",
        "postman"
      ],
      [
        "郵送する（ゆうそうする）",
        "mail, post, send"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "幼",
    "kname": "osana(i)",
    "kstroke": 5,
    "kmeaning": "very young, infantile",
    "kgrade": 6,
    "kunyomi_ja": "おさない",
    "kunyomi": "osanai",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "幼児（ようじ）",
        "infant, baby, child"
      ],
      [
        "幼女（ようじょ）",
        "little girl"
      ],
      [
        "幼虫（ようちゅう）",
        "larva, chrysalis"
      ],
      [
        "幼少（ようしょう）",
        "infancy, childhood, tender age"
      ],
      [
        "幼年期（ようねんき）",
        "childhood"
      ],
      [
        "幼稚園（ようちえん）",
        "kindergarten"
      ],
      [
        "幼稚な（ようちな）",
        "childish, infantile"
      ],
      [
        "幼い（おさない）",
        "very young, childish"
      ],
      [
        "幼子（おさなご）",
        "infant, baby, little child"
      ],
      [
        "幼心（おさなごころ）",
        "child's mind, child's heart"
      ],
      [
        "幼なじみ（おさななじみ）",
        "childhood friend"
      ]
    ],
    "radical": "⺓",
    "rad_order": 62,
    "rad_stroke": 3,
    "rad_name_ja": "いとがしら",
    "rad_name": "itogashira",
    "rad_meaning": "young, slight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "紙",
    "kname": "shi-kami",
    "kstroke": 10,
    "kmeaning": "paper",
    "kgrade": 2,
    "kunyomi_ja": "かみ",
    "kunyomi": "kami",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "白紙（はくし）",
        "white paper"
      ],
      [
        "用紙（ようし）",
        "blank form"
      ],
      [
        "表紙（ひょうし）",
        "front cover"
      ],
      [
        "新聞紙（しんぶんし）",
        "newspaper"
      ],
      [
        "紙（かみ）",
        "paper"
      ],
      [
        "手紙（てがみ）",
        "letter"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "翌",
    "kname": "yoku(jitsu)",
    "kstroke": 11,
    "kmeaning": "the following, the next",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨク",
    "onyomi": "yoku",
    "examples": [
      [
        "翌日（よくじつ）",
        "the next day"
      ],
      [
        "翌週（よくしゅう）",
        "the following week"
      ],
      [
        "翌月（よくげつ）",
        "the following month"
      ],
      [
        "翌年（よくねん）",
        "the following year"
      ],
      [
        "翌春（よくしゅん）",
        "the following spring"
      ],
      [
        "翌朝（よくあさ）",
        "the next morning"
      ],
      [
        "翌々日（よくよくじつ）",
        "two days later"
      ]
    ],
    "radical": "⽻",
    "rad_order": 161,
    "rad_stroke": 6,
    "rad_name_ja": "はね",
    "rad_name": "hane",
    "rad_meaning": "feather, wing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "卵",
    "kname": "tamago",
    "kstroke": 7,
    "kmeaning": "egg",
    "kgrade": 6,
    "kunyomi_ja": "たまご",
    "kunyomi": "tamago",
    "onyomi_ja": "ラン",
    "onyomi": "ran",
    "examples": [
      [
        "卵黄（らんおう）",
        "egg yolk"
      ],
      [
        "卵白（らんぱく）",
        "white of an egg, albumin"
      ],
      [
        "卵巣（らんそう）",
        "ovary"
      ],
      [
        "卵管（らんかん）",
        "fallopian tube, oviduct"
      ],
      [
        "鶏卵（けいらん）",
        "hens egg"
      ],
      [
        "産卵する（さんらんする）",
        "lay eggs, spawn"
      ],
      [
        "卵（たまご）",
        "egg, spawn, roe"
      ],
      [
        "卵焼き（たまごやき）",
        "omelet"
      ],
      [
        "卵形（たまごがた）",
        "oval, egg-shaped"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "覧",
    "kname": "(ten)ran(kai)",
    "kstroke": 17,
    "kmeaning": "look over, see",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ラン",
    "onyomi": "ran",
    "examples": [
      [
        "要覧（ようらん）",
        "outline, survey, handbook"
      ],
      [
        "一覧表（いちらんひょう）",
        "list, table"
      ],
      [
        "観覧車（かんらんしゃ）",
        "Ferris wheel"
      ],
      [
        "展覧会（てんらんかい）",
        "exhibition"
      ],
      [
        "博覧会（はくらんかい）",
        "fair, exhibition, exposition"
      ],
      [
        "一覧する（いちらんする）",
        "take a glance, look over"
      ],
      [
        "回覧する（かいらんする）",
        "circulate (a magazine, etc.)"
      ],
      [
        "ご覧になる（ごらんになる）",
        "look [hon.]"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "裏",
    "kname": "ri-ura",
    "kstroke": 13,
    "kmeaning": "rear, reverse side, back",
    "kgrade": 6,
    "kunyomi_ja": "うら",
    "kunyomi": "ura",
    "onyomi_ja": "リ",
    "onyomi": "ri",
    "examples": [
      [
        "裏面（りめん）",
        "back, reverse side"
      ],
      [
        "表裏（ひょうり）",
        "front & back, inside & outside"
      ],
      [
        "脳裏（のうり）",
        "one's mind"
      ],
      [
        "裏（うら）",
        "back, reverse side"
      ],
      [
        "裏通り（うらどおり）",
        "side street, back street"
      ],
      [
        "裏口（うらぐち）",
        "backdoor, rear entrance"
      ],
      [
        "裏側（うらがわ）",
        "back, reverse side"
      ],
      [
        "裏表（うらおもて）",
        "both sides, a double-dealer"
      ],
      [
        "裏付ける（うらづける）",
        "support, corroborate, vouch"
      ],
      [
        "裏切る（うらぎる）",
        "betray"
      ],
      [
        "裏返す（うらがえす）",
        "turn inside out, turn over"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "臨",
    "kname": "rin-nozo(mu)",
    "kstroke": 18,
    "kmeaning": "be present at, face, confront",
    "kgrade": 6,
    "kunyomi_ja": "のぞ、のぞむ",
    "kunyomi": "nozo, nozomu",
    "onyomi_ja": "リン",
    "onyomi": "rin",
    "examples": [
      [
        "臨終（りんじゅう）",
        "deathbed, dying hour"
      ],
      [
        "臨時（りんじ）",
        "temporary, extraordinary"
      ],
      [
        "臨場感（りんじょうかん）",
        "(stage, personal) presence"
      ],
      [
        "臨床医（りんしょうい）",
        "clinician"
      ],
      [
        "臨機応変（りんきおうへん）",
        "according to circumstance"
      ],
      [
        "臨席する（りんせきする）",
        "attend, be present"
      ],
      [
        "君臨する（くんりんする）",
        "reign, control, dictate"
      ],
      [
        "臨む（のぞむ）",
        "look out on, face, deal with"
      ]
    ],
    "radical": "⾂",
    "rad_order": 203,
    "rad_stroke": 6,
    "rad_name_ja": "しん",
    "rad_name": "shin",
    "rad_meaning": "retainer, minister",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "朗",
    "kname": "hoga(rakana)",
    "kstroke": 10,
    "kmeaning": "cheerful, clear, bright",
    "kgrade": 6,
    "kunyomi_ja": "ほが、ほがらかな",
    "kunyomi": "hoga, hogarakana",
    "onyomi_ja": "ロウ",
    "onyomi": "rou",
    "examples": [
      [
        "朗報（ろうほう）",
        "good news"
      ],
      [
        "明朗な（めいろうな）",
        "bright, clear, cheerful"
      ],
      [
        "朗々と（ろうろうと）",
        "clear, sonorous, full-sounding"
      ],
      [
        "朗読する（ろうどくする）",
        "read aloud, recite"
      ],
      [
        "朗らかな（ほがらかな）",
        "bright, cheerful"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "依",
    "kname": "i(raisuru)",
    "kstroke": 8,
    "kmeaning": "depend on",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イ、エ",
    "onyomi": "i, e",
    "examples": [
      [
        "依頼心（いらいしん）",
        "spirit of dependence"
      ],
      [
        "依頼する（いらいする）",
        "request [v.t.]"
      ],
      [
        "依存する（いぞんする）",
        "depend on, rely on"
      ],
      [
        "依拠する（いきょする）",
        "based on"
      ],
      [
        "依然として（いぜんとして）",
        "still, as yet, as of old"
      ],
      [
        "帰依する（きえする）",
        "devote oneself to (religion)"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "違",
    "kname": "i-chiga(u)",
    "kstroke": 13,
    "kmeaning": "differ, violate, different, be mistaken",
    "kgrade": "n/a",
    "kunyomi_ja": "ちが、ちがう、ちがえる",
    "kunyomi": "chiga, chigau, chigaeru",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "違憲（いけん）",
        "unconstitutionality"
      ],
      [
        "違和感（いわかん）",
        "feeling that something is wrong"
      ],
      [
        "違法な（いほうな）",
        "illegal"
      ],
      [
        "違反する（いはんする）",
        "violate, transgress"
      ],
      [
        "相違する（そういする）",
        "be different, vary, disagree"
      ],
      [
        "違う（ちがう）",
        "differ"
      ],
      [
        "食い違う（くいちがう）",
        "clash, run counter to"
      ],
      [
        "間違い（まちがい）",
        "mistake [n.]"
      ],
      [
        "勘違い（かんちがい）",
        "misunderstanding, wrong guess"
      ],
      [
        "間違える（まちがえる）",
        "err, make a mistake"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "鋭",
    "kname": "ei-surudo(i)",
    "kstroke": 15,
    "kmeaning": "sharp",
    "kgrade": "n/a",
    "kunyomi_ja": "するど、するどい",
    "kunyomi": "surudo, surudoi",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "鋭角（えいかく）",
        "acute angle"
      ],
      [
        "新鋭（しんえい）",
        "new & powerful, fresh"
      ],
      [
        "精鋭（せいえい）",
        "elite, picked, best"
      ],
      [
        "鋭利な（えいりな）",
        "sharp"
      ],
      [
        "鋭敏な（えいびんな）",
        "sharp, keen"
      ],
      [
        "先鋭な（せんえいな）",
        "radical"
      ],
      [
        "鋭い（するどい）",
        "pointed, sharp, keen"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "煙",
    "kname": "kemu(i)",
    "kstroke": 13,
    "kmeaning": "smoke",
    "kgrade": "n/a",
    "kunyomi_ja": "けむ、けむる、けむい、けむり",
    "kunyomi": "kemu, kemuru, kemui, kemuri",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "煙突（えんとつ）",
        "chimney"
      ],
      [
        "煙幕（えんまく）",
        "smokescreen"
      ],
      [
        "黒煙（こくえん）",
        "black smoke"
      ],
      [
        "発煙筒（はつえんとう）",
        "smoke candle"
      ],
      [
        "喫煙所（きつえんじょ）",
        "smoking area"
      ],
      [
        "禁煙する（きんえんする）",
        "quit smoking"
      ],
      [
        "煙（けむり）",
        "smoke, fumes"
      ],
      [
        "煙る（けむる）",
        "smoke, appear dim [v.i.]"
      ],
      [
        "煙たい（けむたい）",
        "smoky, awkward feeling [adj.]"
      ]
    ],
    "radical": "",
    "rad_order": 111,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "fire",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "書",
    "kname": "sho-ka(ku)",
    "kstroke": 10,
    "kmeaning": "write, book",
    "kgrade": 2,
    "kunyomi_ja": "か、かく",
    "kunyomi": "ka, kaku",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "書庫（しょこ）",
        "archive"
      ],
      [
        "書斎（しょさい）",
        "study (room)"
      ],
      [
        "書道（しょどう）",
        "calligraphy"
      ],
      [
        "辞書（じしょ）",
        "dictionary"
      ],
      [
        "秘書（ひしょ）",
        "(private) secretary"
      ],
      [
        "図書館（としょかん）",
        "library"
      ],
      [
        "教科書（きょうかしょ）",
        "text book"
      ],
      [
        "参考書（さんこうしょ）",
        "reference book"
      ],
      [
        "証明書（しょうめいしょ）",
        "certificate"
      ],
      [
        "書く（かく）",
        "write"
      ],
      [
        "横書き（よこがき）",
        "writing horizontally"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "汚",
    "kname": "yogo(su)",
    "kstroke": 6,
    "kmeaning": "dirty",
    "kgrade": "n/a",
    "kunyomi_ja": "けが、よご、きたな、けがす、けがれる、けがらわしい、よごす、よごれる、きたない",
    "kunyomi": "kega, yogo, kitana, kegasu, kegareru, kegarawashii, yogosu, yogoreru, kitanai",
    "onyomi_ja": "オ",
    "onyomi": "o",
    "examples": [
      [
        "汚水（おすい）",
        "filthy water, sewage"
      ],
      [
        "汚物（おぶつ）",
        "filth, muck, dirt"
      ],
      [
        "汚職（おしょく）",
        "corruption, graft"
      ],
      [
        "汚名（おめい）",
        "stigma, dishonor, infamy"
      ],
      [
        "汚点（おてん）",
        "stain, blot, flaw, disgrace"
      ],
      [
        "汚染する（おせんする）",
        "pollute, contaminate"
      ],
      [
        "汚す（けがす）",
        "disgrace, dishonor [v.t.]"
      ],
      [
        "汚れる（けがれる）",
        "be corrupted, be polluted [v.i.]"
      ],
      [
        "汚らわしい（けがらわしい）",
        "filthy, obscene, dirty"
      ],
      [
        "汚す（よごす）",
        "make dirty[v.t.]"
      ],
      [
        "汚れる（よごれる）",
        "get dirty, become dirty [v.i.]"
      ],
      [
        "汚い（きたない）",
        "dirty, unclean, filthy"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "押",
    "kname": "ou-o(saeru)",
    "kstroke": 8,
    "kmeaning": "push",
    "kgrade": "n/a",
    "kunyomi_ja": "お、おす、おさえる",
    "kunyomi": "o, osu, osaeru",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "押収する（おうしゅうする）",
        "seize, confiscate"
      ],
      [
        "押印する（おういんする）",
        "affix one's seal"
      ],
      [
        "押捺する（おうなつする）",
        "seal, stamp, imprint"
      ],
      [
        "押す（おす）",
        "push, press, stamp"
      ],
      [
        "押し売り（おしうり）",
        "high-pressure salesmanship"
      ],
      [
        "押し問答（おしもんどう）",
        "dispute, heated Q&A"
      ],
      [
        "押し入れ（おしいれ）",
        "closet"
      ],
      [
        "押さえる（おさえる）",
        "press down, stop, seize"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "欧",
    "kname": "(sei)ou",
    "kstroke": 8,
    "kmeaning": "Europe",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "欧州（おうしゅう）",
        "Europe"
      ],
      [
        "欧米（おうべい）",
        "Europe and America, the West"
      ],
      [
        "西欧（せいおう）",
        "Western Europe"
      ],
      [
        "東欧（とうおう）",
        "Eastern Europe"
      ],
      [
        "南欧（なんおう）",
        "Southern Europe"
      ],
      [
        "北欧（ほくおう）",
        "Northern Europe"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "菓",
    "kname": "(o)ka(shi)",
    "kstroke": 11,
    "kmeaning": "confectionery, cake",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "菓子（かし）",
        "pastry"
      ],
      [
        "菓子屋（かしや）",
        "confectionery shop"
      ],
      [
        "銘菓（めいか）",
        "cake of a well-known brand"
      ],
      [
        "和菓子（わがし）",
        "Japanese confectionery"
      ],
      [
        "洋菓子（ようがし）",
        "Western confectionery"
      ],
      [
        "水菓子（みずがし）",
        "fruit"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "靴",
    "kname": "kutsu",
    "kstroke": 13,
    "kmeaning": "shoes",
    "kgrade": "n/a",
    "kunyomi_ja": "くつ",
    "kunyomi": "kutsu",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "軍靴（ぐんか）",
        "military shoes"
      ],
      [
        "製靴業（せいかぎょう）",
        "the shoemaking industry"
      ],
      [
        "靴（くつ）",
        "shoes, footwear"
      ],
      [
        "靴屋（くつや）",
        "shoemaker, shoe store"
      ],
      [
        "靴下（くつした）",
        "socks"
      ],
      [
        "靴墨（くつずみ）",
        "shoe polish"
      ],
      [
        "靴音（くつおと）",
        "walking sound, footsteps"
      ],
      [
        "革靴（かわぐつ）",
        "leather shoes"
      ],
      [
        "長靴（ながぐつ）",
        "long boots"
      ],
      [
        "運動靴（うんどうぐつ）",
        "sports shoes, sneakers"
      ],
      [
        "紳士靴（しんしぐつ）",
        "men's shoes"
      ]
    ],
    "radical": "⾰",
    "rad_order": 215,
    "rad_stroke": 9,
    "rad_name_ja": "つくりがわ",
    "rad_name": "tsukurigawa",
    "rad_meaning": "leather",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "掛",
    "kname": "(mi)ka(ke)",
    "kstroke": 11,
    "kmeaning": "set, hang",
    "kgrade": "n/a",
    "kunyomi_ja": "か、かける、かけ、かかる、かかり",
    "kunyomi": "ka, kakeru, kake, kakaru, kakari",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "掛け算（かけざん）",
        "multiplication"
      ],
      [
        "腰掛け（こしかけ）",
        "seat, bench"
      ],
      [
        "仕掛け（しかけ）",
        "device, trick, mechanism"
      ],
      [
        "掛ける（かける）",
        "hang, cover, sit down, pour [v.t.]"
      ],
      [
        "出掛ける（でかける）",
        "got out, depart"
      ],
      [
        "言い掛ける（いいかける）",
        "begin speaking"
      ],
      [
        "心掛ける（こころがける）",
        "bear in mind, aim to"
      ],
      [
        "見せ掛ける（みせかける）",
        "pretend, feign"
      ],
      [
        "掛かる（かかる）",
        "hang, be locked [v.i.]"
      ],
      [
        "掛（かかり）",
        "charge, duty, post"
      ],
      [
        "親掛かり（おやがかり）",
        "dependent on one's parents"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "汗",
    "kname": "ase",
    "kstroke": 6,
    "kmeaning": "sweat",
    "kgrade": "n/a",
    "kunyomi_ja": "あせ",
    "kunyomi": "ase",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "汗腺（かんせん）",
        "sweat gland"
      ],
      [
        "発汗する（はっかんする）",
        "sweat [v.i.]"
      ],
      [
        "汗（あせ）",
        "sweat, perspiration"
      ],
      [
        "汗かき（あせかき）",
        "person who sweats a lot"
      ],
      [
        "汗だく（あせだく）",
        "dripping with sweat"
      ],
      [
        "汗ばむ（あせばむ）",
        "be slightly sweaty"
      ],
      [
        "冷や汗（ひやあせ）",
        "cold sweat"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "缶",
    "kname": "kan(zume)",
    "kstroke": 6,
    "kmeaning": "can",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "缶（かん）",
        "can, tin"
      ],
      [
        "缶切り（かんきり）",
        "can opener"
      ],
      [
        "缶詰め（かんづめ）",
        "canned goods, tin can"
      ],
      [
        "空き缶（あきかん）",
        "empty can"
      ]
    ],
    "radical": "⽸",
    "rad_order": 159,
    "rad_stroke": 6,
    "rad_name_ja": "みずがめ",
    "rad_name": "mizugame",
    "rad_meaning": "earthen jar",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "患",
    "kname": "kan-wazura(u)",
    "kstroke": 11,
    "kmeaning": "affected by disease, be ill, suffer",
    "kgrade": "n/a",
    "kunyomi_ja": "わずら、わずらう",
    "kunyomi": "wazura, wazurau",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "患者（かんじゃ）",
        "patient [n.]"
      ],
      [
        "患部（かんぶ）",
        "affected part"
      ],
      [
        "急患（きゅうかん）",
        "emergency case"
      ],
      [
        "患う（わずらう）",
        "fall ill"
      ],
      [
        "長患い（ながわずらい）",
        "long illness"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "幾",
    "kname": "iku(tsu)",
    "kstroke": 12,
    "kmeaning": "how many/much, some",
    "kgrade": "n/a",
    "kunyomi_ja": "いく、いくつ、いくら",
    "kunyomi": "iku, ikutsu, ikura",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "幾何学（きかがく）",
        "geometry"
      ],
      [
        "幾ら（いくら）",
        "how much?, how many?"
      ],
      [
        "幾つ（いくつ）",
        "how many?, how old?"
      ],
      [
        "幾らか（いくらか）",
        "some, somewhat, a little"
      ],
      [
        "幾日も（いくにちも）",
        "for many days, for some days"
      ],
      [
        "幾分（いくぶん）",
        "somewhat"
      ],
      [
        "幾度も（いくども）",
        "many times, often"
      ]
    ],
    "radical": "⺓",
    "rad_order": 62,
    "rad_stroke": 3,
    "rad_name_ja": "いとがしら",
    "rad_name": "itogashira",
    "rad_meaning": "young, slight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "秋",
    "kname": "aki",
    "kstroke": 9,
    "kmeaning": "autumn",
    "kgrade": 2,
    "kunyomi_ja": "あき",
    "kunyomi": "aki",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "秋分（しゅうぶん）",
        "autumn equinox"
      ],
      [
        "秋（あき）",
        "autumn"
      ],
      [
        "秋風（あきかぜ）",
        "autumn breeze"
      ],
      [
        "秋学期（あきがっき）",
        "autumn semester/quarter"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "詰",
    "kname": "kitsu-tsu(meru)",
    "kstroke": 13,
    "kmeaning": "reprimand, stuff, closely packed, cram",
    "kgrade": "n/a",
    "kunyomi_ja": "つ、つめる、つまる、つむ",
    "kunyomi": "tsu, tsumeru, tsumaru, tsumu",
    "onyomi_ja": "キツ",
    "onyomi": "kitsu",
    "examples": [
      [
        "詰問する（きつもんする）",
        "cross-examine"
      ],
      [
        "詰める（つめる）",
        "pack, fill, plug, shorten [v.t.]"
      ],
      [
        "缶詰め（かんづめ）",
        "canned goods, tin can"
      ],
      [
        "箱詰め（はこづめ）",
        "packed in a box [n.]"
      ],
      [
        "詰まる（つまる）",
        "be blocked, be packed [v.i.]"
      ],
      [
        "鼻詰まり（はなづまり）",
        "nasal congestion"
      ],
      [
        "気詰まり（きづまり）",
        "feel ill at ease, constraint [n.]"
      ],
      [
        "詰む（つむ）",
        "close, become fine"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "叫",
    "kname": "sake(bu)",
    "kstroke": 6,
    "kmeaning": "shout, scream",
    "kgrade": "n/a",
    "kunyomi_ja": "さけ、さけぶ",
    "kunyomi": "sake, sakebu",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "阿鼻叫喚（あびきょうかん）",
        "agonizing cries, pandemonium"
      ],
      [
        "絶叫する（ぜっきょうする）",
        "scream, shout [v.i.]"
      ],
      [
        "叫ぶ（さけぶ）",
        "scream, shout [v.i.]"
      ],
      [
        "叫び声（さけびごえ）",
        "shout, scream [n.]"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "況",
    "kname": "(kin)kyou",
    "kstroke": 8,
    "kmeaning": "conditions, situation, circumstances",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "状況（じょうきょう）",
        "state of affairs, circumstances"
      ],
      [
        "戦況（せんきょう）",
        "progress of a battle"
      ],
      [
        "近況（きんきょう）",
        "recent situation"
      ],
      [
        "実況（じっきょう）",
        "real situation, actual scene"
      ],
      [
        "好況（こうきょう）",
        "healthy economy, prosperity"
      ],
      [
        "不況（ふきょう）",
        "recession, depression, slump"
      ],
      [
        "盛況（せいきょう）",
        "success, prosperity, flourishing"
      ],
      [
        "市況（しきょう）",
        "market conditions"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "挟",
    "kname": "hasa(maru)",
    "kstroke": 9,
    "kmeaning": "hold between, interpose",
    "kgrade": "n/a",
    "kunyomi_ja": "はさ、はさむ、はさまる",
    "kunyomi": "hasa, hasamu, hasamaru",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "挟撃（きょうげき）",
        "pincer movement"
      ],
      [
        "挟む（はさむ）",
        "interpose, insert, pinch [v.t.]"
      ],
      [
        "挟み撃ち（はさみうち）",
        "pincer attack"
      ],
      [
        "挟まる（はさまる）",
        "get between, be caught in [v.i.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "偶",
    "kname": "guu(zen)",
    "kstroke": 11,
    "kmeaning": "by chance, even number, (married)couple",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "グウ",
    "onyomi": "guu",
    "examples": [
      [
        "偶数（ぐうすう）",
        "even number"
      ],
      [
        "偶像（ぐうぞう）",
        "idol, icon, image"
      ],
      [
        "偶然（ぐうぜん）",
        "fortuity, chance, accident"
      ],
      [
        "配偶者（はいぐうしゃ）",
        "spouse"
      ],
      [
        "偶発的な（ぐうはつてきな）",
        "accidental, incidental"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "隅",
    "kname": "guu-sumi",
    "kstroke": 12,
    "kmeaning": "nook, corner",
    "kgrade": "n/a",
    "kunyomi_ja": "すみ",
    "kunyomi": "sumi",
    "onyomi_ja": "グウ",
    "onyomi": "guu",
    "examples": [
      [
        "一隅（いちぐう）",
        "corner, nook"
      ],
      [
        "隅（すみ）",
        "corner, nook"
      ],
      [
        "隅々（すみずみ）",
        "every nook and corner"
      ],
      [
        "片隅（かたすみ）",
        "corner, nook"
      ],
      [
        "四隅（よすみ）",
        "four corners"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "掘",
    "kname": "kutsu-ho(ru)",
    "kstroke": 11,
    "kmeaning": "dig",
    "kgrade": "n/a",
    "kunyomi_ja": "ほ、ほる",
    "kunyomi": "ho, horu",
    "onyomi_ja": "クツ",
    "onyomi": "kutsu",
    "examples": [
      [
        "掘削する（くっさくする）",
        "dig out, excavate"
      ],
      [
        "発掘する（はっくつする）",
        "excavate, unearth, exhume"
      ],
      [
        "採掘する（さいくつする）",
        "mine [v.t.]"
      ],
      [
        "掘る（ほる）",
        "dig, excavate"
      ],
      [
        "掘り下げる（ほりさげる）",
        "dig down, delve into"
      ],
      [
        "掘り返す（ほりかえす）",
        "dig up, turn up, tear up"
      ],
      [
        "掘り出し物（ほりだしもの）",
        "good buy, bargain, treasure"
      ],
      [
        "露天堀り（ろてんぼり）",
        "open air strip mining"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "傾",
    "kname": "katamu(ku)",
    "kstroke": 13,
    "kmeaning": "incline, lean, tilt",
    "kgrade": "n/a",
    "kunyomi_ja": "かたむ、かし、かたむける、かたむく、かしげる",
    "kunyomi": "katamu, kashi, katamukeru, katamuku, kashigeru",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "傾向（けいこう）",
        "tendency, trend, inclination"
      ],
      [
        "傾度（けいど）",
        "degree of inclination"
      ],
      [
        "傾斜する（けいしゃする）",
        "incline, slant, slope"
      ],
      [
        "右傾する（うけいする）",
        "lean to the (political) right"
      ],
      [
        "左傾する（さけいする）",
        "leaning the (political) left"
      ],
      [
        "傾ける（かたむける）",
        "lean, tip, tilt, slant [v.t.]"
      ],
      [
        "傾く（かたむく）",
        "lean, tip, tilt, slant [v.i.]"
      ],
      [
        "傾き（かたむき）",
        "slope, inclination"
      ],
      [
        "傾げる（かしげる）",
        "lean, tip, tilt, slant [v.t.]"
      ],
      [
        "傾ぐ（かしぐ）",
        "lean, tip, tilt, slant [v.i.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "軒",
    "kname": "noki",
    "kstroke": 10,
    "kmeaning": "eaves, counter for houses",
    "kgrade": "n/a",
    "kunyomi_ja": "のき",
    "kunyomi": "noki",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "軒数（けんすう）",
        "number of houses"
      ],
      [
        "一軒（いっけん）",
        "one house"
      ],
      [
        "何軒（なんげん）",
        "how many houses"
      ],
      [
        "一軒家（いっけんや）",
        "an isolated house"
      ],
      [
        "軒（のき）",
        "eaves"
      ],
      [
        "軒下（のきした）",
        "place under the eaves"
      ],
      [
        "軒先（のきさき）",
        "edge of the eaves, frontage"
      ],
      [
        "軒並み（のきなみ）",
        "row of houses, every door"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "枯",
    "kname": "ka(reha)",
    "kstroke": 9,
    "kmeaning": "wither, blight",
    "kgrade": "n/a",
    "kunyomi_ja": "か、かれる、からす",
    "kunyomi": "ka, kareru, karasu",
    "onyomi_ja": "コ",
    "onyomi": "ko",
    "examples": [
      [
        "栄枯盛衰（えいこせいすい）",
        "ups and downs, vicissitudes"
      ],
      [
        "枯渇する（こかつする）",
        "dry up, become exhausted"
      ],
      [
        "枯らす（からす）",
        "let wither, blast [v.t.]"
      ],
      [
        "木枯らし（こがらし）",
        "cold wintry wind"
      ],
      [
        "枯れる（かれる）",
        "whither, be blasted [v.i.]"
      ],
      [
        "枯れ葉（かれは）",
        "dead leaf, withered lead"
      ],
      [
        "枯れ木（かれき）",
        "dead tree, withered tree"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "山",
    "kname": "yama",
    "kstroke": 3,
    "kmeaning": "mountain",
    "kgrade": 1,
    "kunyomi_ja": "やま",
    "kunyomi": "yama",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "富士山（ふじさん）",
        "Mt Fuji"
      ],
      [
        "山脈（さんみゃく）",
        "mountain range"
      ],
      [
        "火山（かざん）",
        "volcano"
      ],
      [
        "登山（とざん）",
        "mountain-climbing"
      ],
      [
        "山（やま）",
        "mountain, pile, climax"
      ],
      [
        "岩山（いわやま）",
        "rocky mountain"
      ],
      [
        "山火事（やまかじ）",
        "bushfire"
      ]
    ],
    "radical": "⼭",
    "rad_order": 54,
    "rad_stroke": 3,
    "rad_name_ja": "やま",
    "rad_name": "yama",
    "rad_meaning": "mountain",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "雇",
    "kname": "yato(u)",
    "kstroke": 12,
    "kmeaning": "employ, charter, hire",
    "kgrade": "n/a",
    "kunyomi_ja": "やと、やとう",
    "kunyomi": "yato, yatou",
    "onyomi_ja": "コ",
    "onyomi": "ko",
    "examples": [
      [
        "終身雇用制（しゅうしんこようせい）",
        "system of lifetime employment"
      ],
      [
        "雇用する（こようする）",
        "employ, hire"
      ],
      [
        "解雇する（かいこする）",
        "discharge, fire, dismiss"
      ],
      [
        "雇う（やとう）",
        "employ, hire"
      ],
      [
        "日雇い（ひやとい）",
        "day labor"
      ],
      [
        "雇い主（やといぬし）",
        "employer"
      ]
    ],
    "radical": "⾫",
    "rad_order": 209,
    "rad_stroke": 8,
    "rad_name_ja": "ふるとり",
    "rad_name": "furutori",
    "rad_meaning": "small bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "更",
    "kname": "kou-sara(ni)",
    "kstroke": 7,
    "kmeaning": "renew, again, further, furthermore",
    "kgrade": "n/a",
    "kunyomi_ja": "さら、ふ、さらに、ふける、ふかす",
    "kunyomi": "sara, fu, sarani, fukeru, fukasu",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "更衣室（こういしつ）",
        "locker room, changing room"
      ],
      [
        "更生する（こうせいする）",
        "rehabilitate, regenerate"
      ],
      [
        "更新する（こうしんする）",
        "renew, update"
      ],
      [
        "変更する（へんこうする）",
        "change, modify, alter"
      ],
      [
        "更に（さらに）",
        "furthermore, again, more"
      ],
      [
        "尚更（なおさら）",
        "all the more, still less"
      ],
      [
        "今更（いまさら）",
        "at this late time"
      ],
      [
        "更かす（ふかす）",
        "stay up late [v.t.]"
      ],
      [
        "夜更かし（よふかし）",
        "staying up late"
      ],
      [
        "更ける（ふける）",
        "get late (time, season) [v.i.]"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "肯",
    "kname": "kou(teiteki)",
    "kstroke": 8,
    "kmeaning": "assent, agree to, consent",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "肯定文（こうていぶん）",
        "affirmative sentence"
      ],
      [
        "肯定する（こうていする）",
        "affirm, agree"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "荒",
    "kname": "a(reru)",
    "kstroke": 9,
    "kmeaning": "wild, violent, rough, devastate",
    "kgrade": "n/a",
    "kunyomi_ja": "あら、あ、あらい、あらす、あれる",
    "kunyomi": "ara, a, arai, arasu, areru",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "荒野（こうや/あらの）",
        "wasteland, wilderness"
      ],
      [
        "荒涼たる（こうりょうたる）",
        "desolate, dreary"
      ],
      [
        "荒廃する（こうはいする）",
        "fall into ruin"
      ],
      [
        "荒らす（あらす）",
        "lay waste, devastate, damage"
      ],
      [
        "荒い（あらい）",
        "rough, rude, wild, harsh"
      ],
      [
        "荒々しい（あらあらしい）",
        "rough, wild, harsh, violent"
      ],
      [
        "荒っぽい（あらっぽい）",
        "rough, rude"
      ],
      [
        "手荒な（てあらな）",
        "violent, rough"
      ],
      [
        "荒れる（あれる）",
        "get stormy, get rough, be ruined"
      ],
      [
        "荒れ地（あれち）",
        "devastated or wasted land"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "郊",
    "kname": "kou(gaijuutaku)",
    "kstroke": 9,
    "kmeaning": "suburb, outskirts",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "郊外（こうがい）",
        "suburb, outskirts"
      ],
      [
        "近郊（きんこう）",
        "suburbs, outskirts, neighboring"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "香",
    "kname": "kou-kao(ri)",
    "kstroke": 9,
    "kmeaning": "sweet smell, fragrance, aroma",
    "kgrade": "n/a",
    "kunyomi_ja": "か、かお、かおり、かおる",
    "kunyomi": "ka, kao, kaori, kaoru",
    "onyomi_ja": "コウ、キョウ",
    "onyomi": "kou, kyou",
    "examples": [
      [
        "香水（こうすい）",
        "perfume"
      ],
      [
        "香油（こうゆ）",
        "balm, perfumed oil"
      ],
      [
        "芳香（ほうこう）",
        "perfume, fragrance, aroma"
      ],
      [
        "香ばしい（こうばしい）",
        "aromatic, fragrant"
      ],
      [
        "香車（きょうしゃ）",
        "lance (shogi game)"
      ],
      [
        "香（か）",
        "aroma, fragrance, scent, smell"
      ],
      [
        "色香（いろか）",
        "color & scent, charm [n.]"
      ],
      [
        "移り香（うつりが）",
        "lingering scent"
      ],
      [
        "香り（かおり）",
        "aroma, fragrance, scent, smell"
      ]
    ],
    "radical": "⾹",
    "rad_order": 223,
    "rad_stroke": 9,
    "rad_name_ja": "かおり",
    "rad_name": "kaori",
    "rad_meaning": "scent",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "硬",
    "kname": "kou-kata(i)",
    "kstroke": 12,
    "kmeaning": "hard, firm",
    "kgrade": "n/a",
    "kunyomi_ja": "かた、かたい",
    "kunyomi": "kata, katai",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "硬度（こうど）",
        "hardness, solidity"
      ],
      [
        "硬貨（こうか）",
        "coin"
      ],
      [
        "硬派（こうは）",
        "hard-liner"
      ],
      [
        "硬式テニス（こうしきテニス）",
        "tennis (using standard ball)"
      ],
      [
        "強硬な（きょうこうな）",
        "firm, unbending, unyielding"
      ],
      [
        "硬直する（こうちょくする）",
        "stiffen"
      ],
      [
        "硬化する（こうかする）",
        "stiffen, harden, go solid"
      ],
      [
        "硬い（かたい）",
        "solid, hard, stiff, firm"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "込",
    "kname": "(nori)ko(mu)",
    "kstroke": 5,
    "kmeaning": "move inward, include, be congested",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こむ、こめる",
    "kunyomi": "ko, komu, komeru",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "込める（こめる）",
        "include, put into [v.t.]"
      ],
      [
        "閉じ込める（とじこめる）",
        "lock up, shut up, imprison"
      ],
      [
        "引っ込める（ひっこめる）",
        "draw in, take in, retract"
      ],
      [
        "込む（こむ）",
        "be crowded, be thronged [v.i.]"
      ],
      [
        "乗り込む（のりこむ）",
        "board, embark on, get in"
      ],
      [
        "黙り込む（だまりこむ）",
        "sink into silence"
      ],
      [
        "書き込む（かきこむ）",
        "fill in (writing)"
      ],
      [
        "持ち込む（もちこむ）",
        "bring in"
      ],
      [
        "払い込む（はらいこむ）",
        "deposit, make payment"
      ],
      [
        "人込み（ひとごみ）",
        "crowd of people"
      ],
      [
        "税込み（ぜいこみ）",
        "tax included"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "歳",
    "kname": "sai(getsu)",
    "kstroke": 13,
    "kmeaning": "year, age suffix",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サイ、セイ",
    "onyomi": "sai, sei",
    "examples": [
      [
        "歳末（さいまつ）",
        "end of the year"
      ],
      [
        "歳月（さいげつ）",
        "time, years"
      ],
      [
        "歳費（さいひ）",
        "annual expenditure"
      ],
      [
        "歳入（さいにゅう）",
        "annual revenue or income"
      ],
      [
        "歳出（さいしゅつ）",
        "annual expenditure"
      ],
      [
        "一歳（いっさい）",
        "one-year-old"
      ],
      [
        "何歳（なんさい）",
        "how old?, what age?"
      ],
      [
        "万歳（ばんざい）",
        "banzai! (cheer)"
      ],
      [
        "お歳暮（おせいぼ）",
        "year-end, year-end present"
      ],
      [
        "*二十歳（はたち）",
        "twenty years old"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "咲",
    "kname": "(gobu)za(ki)",
    "kstroke": 9,
    "kmeaning": "bloom",
    "kgrade": "n/a",
    "kunyomi_ja": "さ、さく",
    "kunyomi": "sa, saku",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "咲く（さく）",
        "bloom"
      ],
      [
        "早咲き（はやざき）",
        "early blooming, early flowering"
      ],
      [
        "遅咲き（おそざき）",
        "late blooming, late flowering"
      ],
      [
        "狂い咲き（くるいざき）",
        "flowering out of season"
      ],
      [
        "咲き誇る（さきほこる）",
        "be in full bloom"
      ],
      [
        "咲き乱れる（さきみだれる）",
        "bloom profusely"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "雪",
    "kname": "setsu-yuki",
    "kstroke": 11,
    "kmeaning": "snow",
    "kgrade": 2,
    "kunyomi_ja": "ゆき",
    "kunyomi": "yuki",
    "onyomi_ja": "セツ",
    "onyomi": "setsu",
    "examples": [
      [
        "積雪（せきせつ）",
        "fallen snow"
      ],
      [
        "新雪（しんせつ）",
        "new snow"
      ],
      [
        "豪雪地帯（ごうせつちたい）",
        "area of heavy snowfall"
      ],
      [
        "雪（ゆき）",
        "snow"
      ],
      [
        "大雪（おおゆき）",
        "heavy snow"
      ],
      [
        "初雪（はつゆき）",
        "first snow (of season)"
      ],
      [
        "雪合戦（ゆきがっせん）",
        "snowball fight"
      ],
      [
        "雪国（ゆきぐに）",
        "snow country"
      ],
      [
        "雪掻き（ゆきかき）",
        "snow plow"
      ]
    ],
    "radical": "⻗",
    "rad_order": 211,
    "rad_stroke": 8,
    "rad_name_ja": "あめかんむり",
    "rad_name": "amekanmuri",
    "rad_meaning": "rain",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "脂",
    "kname": "shi-abura",
    "kstroke": 10,
    "kmeaning": "fat, grease",
    "kgrade": "n/a",
    "kunyomi_ja": "あぶら",
    "kunyomi": "abura",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "脂肪（しぼう）",
        "fat, grease, blubber"
      ],
      [
        "脂質（ししつ）",
        "lipid, fats, adipose"
      ],
      [
        "油脂（ゆし）",
        "fat, fats and oils"
      ],
      [
        "脂（あぶら）",
        "fat, tallow, lard"
      ],
      [
        "脂身（あぶらみ）",
        "fatty meat"
      ],
      [
        "脂性（あぶらしょう）",
        "tendency to get oily (skin)"
      ],
      [
        "脂っこい（あぶらっこい）",
        "greasy, fatty, oily"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "湿",
    "kname": "shitsu-shime(ru)",
    "kstroke": 12,
    "kmeaning": "damp, moisten, humid",
    "kgrade": "n/a",
    "kunyomi_ja": "しめ、しめる、しめす",
    "kunyomi": "shime, shimeru, shimesu",
    "onyomi_ja": "シツ",
    "onyomi": "shitsu",
    "examples": [
      [
        "湿度（しつど）",
        "level of humidity"
      ],
      [
        "湿地（しっち）",
        "swamp"
      ],
      [
        "湿気（しっけ）",
        "moisture, humidity, dampness"
      ],
      [
        "湿布（しっぷ）",
        "wet compress, poultice"
      ],
      [
        "加湿器（かしつき）",
        "humidifier"
      ],
      [
        "湿す（しめす）",
        "wet, moisten, dampen [v.t.]"
      ],
      [
        "湿る（しめる）",
        "be wet, be damp, moisten [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "舟",
    "kname": "shuu-fune",
    "kstroke": 6,
    "kmeaning": "small boat, ship",
    "kgrade": "n/a",
    "kunyomi_ja": "ふね、ふな",
    "kunyomi": "fune, funa",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "舟航（しゅうこう）",
        "boating, sailing"
      ],
      [
        "呉越同舟（ごえつどうしゅう）",
        "bitter enemies in the same boat"
      ],
      [
        "舟（ふね）",
        "ship, boat, watercraft"
      ],
      [
        "釣り舟（つりぶね）",
        "fishing boat"
      ],
      [
        "舟大工（ふなだいく）",
        "shipwright"
      ],
      [
        "舟着き場（ふなつきば）",
        "wharf"
      ]
    ],
    "radical": "⾈",
    "rad_order": 170,
    "rad_stroke": 6,
    "rad_name_ja": "ふね",
    "rad_name": "fune",
    "rad_meaning": "ship, boat",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "柔",
    "kname": "juu-yawa(rakai)",
    "kstroke": 9,
    "kmeaning": "soft",
    "kgrade": "n/a",
    "kunyomi_ja": "やわ、やわらかい、やわな",
    "kunyomi": "yawa, yawarakai, yawana",
    "onyomi_ja": "ジュウ、ニュウ",
    "onyomi": "juu, nyuu",
    "examples": [
      [
        "柔道（じゅうどう）",
        "judo"
      ],
      [
        "柔軟な（じゅうなんな）",
        "flexible, lithe"
      ],
      [
        "柔和な（にゅうわな）",
        "gentle, mild, meek"
      ],
      [
        "柔らかい（やわらかい）",
        "soft, tender, limp"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "緒",
    "kname": "sho-o",
    "kstroke": 14,
    "kmeaning": "outset, cord, strap, beginning, thong",
    "kgrade": "n/a",
    "kunyomi_ja": "お",
    "kunyomi": "o",
    "onyomi_ja": "ショ、チョ",
    "onyomi": "sho, cho",
    "examples": [
      [
        "由緒（ゆいしょ）",
        "lineage, history, pedigree"
      ],
      [
        "一緒（いっしょ）",
        "together"
      ],
      [
        "内緒（ないしょ）",
        "secrecy, secret"
      ],
      [
        "端緒（たんしょ/たんちょ）",
        "clue, start, beginning"
      ],
      [
        "情緒（じょうちょ）",
        "emotion, feeling"
      ],
      [
        "臍の緒（へそのお）",
        "umbilical cord"
      ],
      [
        "鼻緒（はなお）",
        "geta strap, sandal strap"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "召",
    "kname": "me(su)",
    "kstroke": 5,
    "kmeaning": "summon, wear, call",
    "kgrade": "n/a",
    "kunyomi_ja": "め、めす",
    "kunyomi": "me, mesu",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "召集する（しょうしゅうする）",
        "call together, muster"
      ],
      [
        "召還する（しょうかんする）",
        "recall, call someone back"
      ],
      [
        "応召する（おうしょうする）",
        "be drafted, be enlisted"
      ],
      [
        "召す（めす）",
        "call, wear, eat, drink [hon.]"
      ],
      [
        "召し使い（めしつかい）",
        "servant"
      ],
      [
        "召し上がる（めしあがる）",
        "eat, drink [hon.]"
      ],
      [
        "お召し物（おめしもの）",
        "clothing [hon.]"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "床",
    "kname": "yuka",
    "kstroke": 7,
    "kmeaning": "bed, floor",
    "kgrade": "n/a",
    "kunyomi_ja": "とこ、ゆか",
    "kunyomi": "toko, yuka",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "臨床医（りんしょうい）",
        "clinician"
      ],
      [
        "温床（おんしょう）",
        "hotbed, breeding ground"
      ],
      [
        "病床（びょうしょう）",
        "sickbed"
      ],
      [
        "起床する（きしょうする）",
        "get up, get out of bed"
      ],
      [
        "床（とこ）",
        "bed"
      ],
      [
        "床屋（とこや）",
        "barber"
      ],
      [
        "床の間（とこのま）",
        "alcove"
      ],
      [
        "寝床（ねどこ）",
        "bed"
      ],
      [
        "床（ゆか）",
        "floor"
      ],
      [
        "床下（ゆかした）",
        "under the floor"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "昇",
    "kname": "shou-nobo(ru)",
    "kstroke": 8,
    "kmeaning": "ascend, rise, be promoted",
    "kgrade": "n/a",
    "kunyomi_ja": "のぼ、のぼる",
    "kunyomi": "nobo, noboru",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "昇降口（しょうこうぐち）",
        "entrance, hatch"
      ],
      [
        "昇給する（しょうきゅうする）",
        "get a raise"
      ],
      [
        "昇格する（しょうかくする）",
        "be promoted (to higher status)"
      ],
      [
        "昇進する（しょうしんする）",
        "be promoted (to higher position)"
      ],
      [
        "昇級する（しょうきゅうする）",
        "be promoted (to higher grade)"
      ],
      [
        "昇天する（しょうてんする）",
        "die, ascend to heaven"
      ],
      [
        "上昇する（じょうしょうする）",
        "rise, ascend, climb"
      ],
      [
        "昇る（のぼる）",
        "rise, ascend, climb"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "畳",
    "kname": "tatami",
    "kstroke": 12,
    "kmeaning": "tatami, fold up",
    "kgrade": "n/a",
    "kunyomi_ja": "たた、たたむ、たたみ",
    "kunyomi": "tata, tatamu, tatami",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "6畳（ろくじょう）",
        "6 tatami mats"
      ],
      [
        "畳む（たたむ）",
        "fold"
      ],
      [
        "折り畳み椅子（おりたたみいす）",
        "folding chair"
      ],
      [
        "畳（たたみ）",
        "tatami, reed floor matting"
      ],
      [
        "畳屋（たたみや）",
        "tatami mat maker, mat dealer"
      ],
      [
        "畳替え（たたみがえ）",
        "re-covering a tatami mat"
      ],
      [
        "青畳（あおだたみ）",
        "new tatami mat"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "触",
    "kname": "shoku-sawa(ru)",
    "kstroke": 13,
    "kmeaning": "touch",
    "kgrade": "n/a",
    "kunyomi_ja": "ふ、さわ、ふれる、さわる",
    "kunyomi": "fu, sawa, fureru, sawaru",
    "onyomi_ja": "ショク",
    "onyomi": "shoku",
    "examples": [
      [
        "触覚（しょっかく）",
        "sense of touch"
      ],
      [
        "触角（しょっかく）",
        "feeler, antenna"
      ],
      [
        "触媒（しょくばい）",
        "catalyst"
      ],
      [
        "感触（かんしょく）",
        "sense of touch, feeling"
      ],
      [
        "一触即発（いっしょくそくはつ）",
        "extremely delicate situation"
      ],
      [
        "接触する（せっしょくする）",
        "touch, make contact"
      ],
      [
        "抵触する（ていしょくする）",
        "conflict, run counter to"
      ],
      [
        "触れる（ふれる）",
        "touch, reach, brush"
      ],
      [
        "触れ合う（ふれあう）",
        "come in contact with, touch"
      ],
      [
        "触る（さわる）",
        "touch"
      ],
      [
        "手触り（てざわり）",
        "texture (for hand), feel"
      ],
      [
        "肌触り（はだざわり）",
        "texture (for skin)"
      ]
    ],
    "radical": "",
    "rad_order": 181,
    "rad_stroke": 7,
    "rad_name_ja": "つのへん",
    "rad_name": "tsunohen",
    "rad_meaning": "horn, corner",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "雨",
    "kname": "u-ame",
    "kstroke": 8,
    "kmeaning": "rain",
    "kgrade": 1,
    "kunyomi_ja": "あめ、あま",
    "kunyomi": "ame, ama",
    "onyomi_ja": "ウ",
    "onyomi": "u",
    "examples": [
      [
        "降雨量（こううりょう）",
        "amount of rainfall"
      ],
      [
        "梅雨前線（ばいうぜんせん）",
        "seasonal rain front"
      ],
      [
        "雨期（うき）",
        "rainy season"
      ],
      [
        "雷雨（らいう）",
        "thunderstorm"
      ],
      [
        "雨（あめ）",
        "rain"
      ],
      [
        "大雨（おおあめ）",
        "heavy rain"
      ],
      [
        "雨上がり（あめあがり）",
        "after the rain"
      ],
      [
        "雨蛙（あまがえる）",
        "tree frog"
      ],
      [
        "雨雲（あまぐも）",
        "rain cloud"
      ],
      [
        "*小雨（こさめ）",
        "light rain"
      ]
    ],
    "radical": "⾬",
    "rad_order": 210,
    "rad_stroke": 8,
    "rad_name_ja": "あめ",
    "rad_name": "ame",
    "rad_meaning": "rain",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "伸",
    "kname": "shin-no(biru)",
    "kstroke": 7,
    "kmeaning": "stretch, lengthen, grow",
    "kgrade": "n/a",
    "kunyomi_ja": "の、のびる、のばす",
    "kunyomi": "no, nobiru, nobasu",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "追伸（ついしん）",
        "postscript"
      ],
      [
        "伸縮する（しんしゅくする）",
        "expand and contract"
      ],
      [
        "伸長する（しんちょうする）",
        "expand, extend, elongate"
      ],
      [
        "伸ばす（のばす）",
        "lengthen, reach out [v.t.]"
      ],
      [
        "伸びる（のびる）",
        "stretch, extend, grow [v.i.]"
      ],
      [
        "伸び率（のびりつ）",
        "growth rate"
      ],
      [
        "背伸びする（せのびする）",
        "stand on tiptoe, stretch oneself"
      ],
      [
        "*欠伸（あくび）",
        "yawn [n.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "吹",
    "kname": "sui-fu(ku)",
    "kstroke": 7,
    "kmeaning": "blow",
    "kgrade": "n/a",
    "kunyomi_ja": "ふ、ふく",
    "kunyomi": "fu, fuku",
    "onyomi_ja": "スイ",
    "onyomi": "sui",
    "examples": [
      [
        "吹奏楽（すいそうがく）",
        "music for wind instruments"
      ],
      [
        "吹く（ふく）",
        "blow, emit, spout"
      ],
      [
        "笛吹き（ふえふき）",
        "flute player"
      ],
      [
        "吹きだまり（ふきだまり）",
        "drift"
      ],
      [
        "吹き出物（ふきでもの）",
        "pimple, acne"
      ],
      [
        "吹き出す（ふきだす）",
        "spurt, burst in laughter"
      ],
      [
        "*息吹（いぶき）",
        "breath"
      ],
      [
        "*吹雪（ふぶき）",
        "driving snow, blizzard"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "姓",
    "kname": "(dou)sei(doumei)",
    "kstroke": 8,
    "kmeaning": "surname",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "姓（せい）",
        "surname, family name"
      ],
      [
        "姓名（せいめい）",
        "full name"
      ],
      [
        "旧姓（きゅうせい）",
        "maiden name"
      ],
      [
        "同姓同名（どうせいどうめい）",
        "same family & personal name"
      ],
      [
        "改姓する（かいせいする）",
        "change one's family name"
      ],
      [
        "百姓（ひゃくしょう）",
        "farmer, peasant"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "隻",
    "kname": "seki(gan)",
    "kstroke": 10,
    "kmeaning": "one of a pair, counter for ships",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "隻眼（せきがん）",
        "one eye, knowledgeable person"
      ],
      [
        "隻手（せきしゅ）",
        "one arm, one hand"
      ],
      [
        "一隻（いっせき）",
        "one boat, one ship"
      ]
    ],
    "radical": "⾫",
    "rad_order": 209,
    "rad_stroke": 8,
    "rad_name_ja": "ふるとり",
    "rad_name": "furutori",
    "rad_meaning": "small bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "跡",
    "kname": "seki-ato",
    "kstroke": 13,
    "kmeaning": "trace, mark, remains, ruins, tracks",
    "kgrade": "n/a",
    "kunyomi_ja": "あと",
    "kunyomi": "ato",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "足跡（そくせき/あしあと）",
        "footprints"
      ],
      [
        "奇跡（きせき）",
        "miracle, wonder, marvel"
      ],
      [
        "筆跡（ひっせき）",
        "handwriting"
      ],
      [
        "遺跡（いせき）",
        "historic ruins"
      ],
      [
        "軌跡（きせき）",
        "locus, tracks"
      ],
      [
        "追跡する（ついせきする）",
        "pursue"
      ],
      [
        "跡（あと）",
        "trace, tracks, mark, remains"
      ],
      [
        "跡形（あとかた）",
        "trace, vestige, evidence"
      ],
      [
        "傷跡（きずあと）",
        "scar, cicatrix"
      ],
      [
        "城跡（しろあと）",
        "castle site, ruins of a castle"
      ]
    ],
    "radical": "⻊",
    "rad_order": 193,
    "rad_stroke": 7,
    "rad_name_ja": "あしへん",
    "rad_name": "ashihen",
    "rad_meaning": "foot, leg",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "籍",
    "kname": "(koku)seki",
    "kstroke": 20,
    "kmeaning": "register",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "国籍（こくせき）",
        "nationality"
      ],
      [
        "戸籍（こせき）",
        "census, family register"
      ],
      [
        "本籍（ほんせき）",
        "legal residence"
      ],
      [
        "書籍（しょせき）",
        "book, publication"
      ],
      [
        "在籍する（ざいせきする）",
        "be on (school) register"
      ],
      [
        "移籍する（いせきする）",
        "transfer (official registration)"
      ],
      [
        "入籍する（にゅうせきする）",
        "enter name in family register"
      ],
      [
        "除籍する（じょせきする）",
        "remove from the register"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "占",
    "kname": "urana(u)",
    "kstroke": 5,
    "kmeaning": "occupy, tell fortunes, hold",
    "kgrade": "n/a",
    "kunyomi_ja": "し、うらな、しめる、うらなう",
    "kunyomi": "shi, urana, shimeru, uranau",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "占星術（せんせいじゅつ）",
        "astrology"
      ],
      [
        "占領地（せんりょうち）",
        "occupied territory"
      ],
      [
        "占拠する（せんきょする）",
        "occupy"
      ],
      [
        "占有する（せんゆうする）",
        "have exclusive possession"
      ],
      [
        "独占する（どくせんする）",
        "monopolize"
      ],
      [
        "占める（しめる）",
        "comprise, occupy"
      ],
      [
        "独り占めする（ひとりじめする）",
        "monopolize"
      ],
      [
        "占う（うらなう）",
        "tell one's fortune, divine"
      ],
      [
        "占い師（うらないし）",
        "diviner, fortuneteller, palmist"
      ],
      [
        "星占い（ほしうらない）",
        "astrology, horoscope"
      ]
    ],
    "radical": "⼘",
    "rad_order": 29,
    "rad_stroke": 2,
    "rad_name_ja": "ぼく",
    "rad_name": "boku",
    "rad_meaning": "oracle",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "双",
    "kname": "futa(go)",
    "kstroke": 4,
    "kmeaning": "set of two, pair, both",
    "kgrade": "n/a",
    "kunyomi_ja": "ふた",
    "kunyomi": "futa",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "双方（そうほう）",
        "both parties, bilateral"
      ],
      [
        "双肩（そうけん）",
        "shoulders"
      ],
      [
        "双眼鏡（そうがんきょう）",
        "binoculars, field glasses"
      ],
      [
        "双生児（そうせいじ）",
        "twins"
      ],
      [
        "双子（ふたご）",
        "twins, a twin"
      ],
      [
        "双葉（ふたば）",
        "seed leaf, cotyledon"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "捜",
    "kname": "sou-saga(su)",
    "kstroke": 10,
    "kmeaning": "look for, search, seek",
    "kgrade": "n/a",
    "kunyomi_ja": "さが、さがす",
    "kunyomi": "saga, sagasu",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "家宅捜査（かたくそうさ）",
        "household search"
      ],
      [
        "捜査する（そうさする）",
        "investigate (a criminal case)"
      ],
      [
        "捜索する（そうさくする）",
        "search (for a criminal), hunt"
      ],
      [
        "捜す（さがす）",
        "search, seek, look for"
      ],
      [
        "捜し物（さがしもの）",
        "object being sought"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "掃",
    "kname": "sou-ha(ku)",
    "kstroke": 11,
    "kmeaning": "sweep",
    "kgrade": "n/a",
    "kunyomi_ja": "は、はく",
    "kunyomi": "ha, haku",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "掃除機（そうじき）",
        "vacuum cleaner"
      ],
      [
        "掃除婦（そうじふ）",
        "cleaning lady"
      ],
      [
        "掃除する（そうじする）",
        "clean [v.t.]"
      ],
      [
        "清掃する（せいそうする）",
        "clean [v.t.]"
      ],
      [
        "一掃する（いっそうする）",
        "make a clean sweep"
      ],
      [
        "掃く（はく）",
        "sweep, brush"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "当",
    "kname": "a(taru)",
    "kstroke": 6,
    "kmeaning": "present, hit",
    "kgrade": 2,
    "kunyomi_ja": "あ、あたり、あたる、あてる",
    "kunyomi": "a, atari, ataru, ateru",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "当日（とうじつ）",
        "very day"
      ],
      [
        "当時（とうじ）",
        "in those days, then, at the time"
      ],
      [
        "本当（ほんとう）",
        "truth"
      ],
      [
        "弁当（べんとう）",
        "lunch vendor, boxed lunch"
      ],
      [
        "当選する（とうせんする）",
        "be elected, win a prize"
      ],
      [
        "担当する（たんとうする）",
        "have responsibility for"
      ],
      [
        "当たる（あたる）",
        "be hit [v.i.]"
      ],
      [
        "日当たり（ひあたり）",
        "exposure to the sun"
      ],
      [
        "当たり前（あたりまえ）",
        "usual, natural, ordinary"
      ],
      [
        "当てる（あてる）",
        "hit [v.t.]"
      ],
      [
        "手当てする（てあてする）",
        "provide medical care"
      ]
    ],
    "radical": "⺌",
    "rad_order": 51,
    "rad_stroke": 3,
    "rad_name_ja": "しょうかんむり",
    "rad_name": "shoukanmuri",
    "rad_meaning": "small",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "燥",
    "kname": "(mumikan)sou",
    "kstroke": 17,
    "kmeaning": "dry up",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "乾燥機（かんそうき）",
        "dryer, drying machine"
      ],
      [
        "焦燥感（しょうそうかん）",
        "impatience, uneasiness"
      ],
      [
        "無味乾燥な（むみかんそうな）",
        "dull and uninteresting, vapid"
      ],
      [
        "乾燥する（かんそうする）",
        "be dry, become dry [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 111,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "fire",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "憎",
    "kname": "niku(mu)",
    "kstroke": 14,
    "kmeaning": "hate, hatred, hateful",
    "kgrade": "n/a",
    "kunyomi_ja": "にく、にくむ、にくい、にくらしい、にくしみ",
    "kunyomi": "niku, nikumu, nikui, nikurashii, nikushimi",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "憎悪（ぞうお）",
        "hatred"
      ],
      [
        "愛憎（あいぞう）",
        "likes and dislikes"
      ],
      [
        "憎む（にくむ）",
        "hate, detest"
      ],
      [
        "憎しみ（にくしみ）",
        "hatred"
      ],
      [
        "憎い（にくい）",
        "hateful, abominable"
      ],
      [
        "憎らしい（にくらしい）",
        "odious, hateful"
      ],
      [
        "小憎らしい（こにくらしい）",
        "irritating, maddening"
      ],
      [
        "憎まれっ子（にくまれっこ）",
        "bad boy"
      ],
      [
        "憎まれ口（にくまれぐち）",
        "abusive language"
      ],
      [
        "生憎（あいにく）",
        "unfortunately; Sorry, but ..."
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "贈",
    "kname": "oku(rimono)",
    "kstroke": 18,
    "kmeaning": "present a gift, give, bestow",
    "kgrade": "n/a",
    "kunyomi_ja": "おく、おくる",
    "kunyomi": "oku, okuru",
    "onyomi_ja": "ゾウ、ソウ",
    "onyomi": "zou, sou",
    "examples": [
      [
        "贈与（ぞうよ）",
        "presentation, donation"
      ],
      [
        "贈賄（ぞうわい）",
        "bribery"
      ],
      [
        "贈答品（ぞうとうひん）",
        "gift, present"
      ],
      [
        "贈呈する（ぞうていする）",
        "give, present"
      ],
      [
        "寄贈する（きそう/きぞうする）",
        "donate, present"
      ],
      [
        "贈る（おくる）",
        "send, give to, award to"
      ],
      [
        "贈り物（おくりもの）",
        "present, gift"
      ]
    ],
    "radical": "",
    "rad_order": 188,
    "rad_stroke": 7,
    "rad_name_ja": "かいへん",
    "rad_name": "kaihen",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "袋",
    "kname": "fukuro",
    "kstroke": 11,
    "kmeaning": "bag, sack",
    "kgrade": "n/a",
    "kunyomi_ja": "ふくろ",
    "kunyomi": "fukuro",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "郵袋（ゆうたい）",
        "mailbag"
      ],
      [
        "袋（ふくろ）",
        "bag, sack"
      ],
      [
        "袋小路（ふくろこうじ）",
        "blind alley, cul-de-sac"
      ],
      [
        "お袋（おふくろ）",
        "one's mother"
      ],
      [
        "胃袋（いぶくろ）",
        "stomach"
      ],
      [
        "紙袋（かみぶくろ）",
        "paper bag"
      ],
      [
        "手袋（てぶくろ）",
        "glove"
      ],
      [
        "浮き袋（うきぶくろ）",
        "swimming ring, swimming float"
      ],
      [
        "ビニール袋（ビニールぶくろ）",
        "plastic bag"
      ],
      [
        "*足袋（たび）",
        "tabi"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "替",
    "kname": "(ryou)gae",
    "kstroke": 12,
    "kmeaning": "replace",
    "kgrade": "n/a",
    "kunyomi_ja": "か、かわる、かえる",
    "kunyomi": "ka, kawaru, kaeru",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "代替物（だいたいぶつ）",
        "substitute [n.]"
      ],
      [
        "交替する（こうたいする）",
        "alternate, take turns"
      ],
      [
        "替える（かえる）",
        "exchange, replace [v.t.]"
      ],
      [
        "替え玉（かえだま）",
        "substitute, double [n.]"
      ],
      [
        "両替（りょうがえ）",
        "change, money exchange"
      ],
      [
        "着替える（きがえる）",
        "change one's clothes"
      ],
      [
        "取り替える（とりかえる）",
        "exchange, replace"
      ],
      [
        "替わる（かわる）",
        "be replaced [v.i.]"
      ],
      [
        "*為替（かわせ）",
        "money order"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "濯",
    "kname": "(sen)taku(ki)",
    "kstroke": 17,
    "kmeaning": "rinse",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タク",
    "onyomi": "taku",
    "examples": [
      [
        "洗濯機（せんたくき）",
        "washing machine"
      ],
      [
        "洗濯物（せんたくもの）",
        "clothes to be washed"
      ],
      [
        "洗濯する（せんたくする）",
        "do laundry"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "畜",
    "kname": "(boku)chiku",
    "kstroke": 10,
    "kmeaning": "livestock, animal raising",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チク",
    "onyomi": "chiku",
    "examples": [
      [
        "畜舎（ちくしゃ）",
        "cattle shed, barn"
      ],
      [
        "畜生（ちくしょう）",
        "beast, brute, Damn!"
      ],
      [
        "畜産業（ちくさんぎょう）",
        "stock raising, stockbreeding"
      ],
      [
        "家畜（かちく）",
        "livestock, cattle"
      ],
      [
        "牧畜（ぼくちく）",
        "stock-farming"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "駐",
    "kname": "chuu(rinjou)",
    "kstroke": 15,
    "kmeaning": "stationed, stop, reside",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "駐車場（ちゅうしゃじょう）",
        "parking lot, parking place"
      ],
      [
        "駐輪場（ちゅうりんじょう）",
        "parking area for bicycles"
      ],
      [
        "駐屯地（ちゅうとんち）",
        "garrison"
      ],
      [
        "駐日大使（ちゅうにちたいし）",
        "ambassador to Japan"
      ],
      [
        "進駐軍（しんちゅうぐん）",
        "occupying forces"
      ],
      [
        "駐留する（ちゅうりゅうする）",
        "be stationed, be garrisoned"
      ],
      [
        "駐在する（ちゅうざいする）",
        "reside, stay"
      ],
      [
        "駐屯する（ちゅうとんする）",
        "be stationed, be posted"
      ],
      [
        "駐停車する（ちゅうていしゃする）",
        "stop or park a vehicle"
      ]
    ],
    "radical": "",
    "rad_order": 225,
    "rad_stroke": 10,
    "rad_name_ja": "うまへん",
    "rad_name": "umahen",
    "rad_meaning": "horse",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "超",
    "kname": "chou-ko(eru)",
    "kstroke": 12,
    "kmeaning": "surpass, exceed",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こえる、こす",
    "kunyomi": "ko, koeru, kosu",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "超人（ちょうじん）",
        "superman"
      ],
      [
        "超特急（ちょうとっきゅう）",
        "super express"
      ],
      [
        "超音波（ちょうおんぱ）",
        "ultrasonic waves"
      ],
      [
        "超自然的な（ちょうしぜんてきな）",
        "supernatural"
      ],
      [
        "超然たる（ちょうぜんたる）",
        "transcendental"
      ],
      [
        "超過する（ちょうかする）",
        "exceed, be more than"
      ],
      [
        "超越する（ちょうえつする）",
        "transcend, rise above"
      ],
      [
        "超す（こす）",
        "cross, pass [v.i.]"
      ],
      [
        "超える（こえる）",
        "exceed, cross over [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 191,
    "rad_stroke": 7,
    "rad_name_ja": "そうにょう",
    "rad_name": "sounyou",
    "rad_meaning": "to run",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "沈",
    "kname": "shizu(mu)",
    "kstroke": 7,
    "kmeaning": "sink",
    "kgrade": "n/a",
    "kunyomi_ja": "しず、しずむ、しずめる",
    "kunyomi": "shizu, shizumu, shizumeru",
    "onyomi_ja": "チン",
    "onyomi": "chin",
    "examples": [
      [
        "沈着冷静な（ちんちゃくれいせいな）",
        "calm, composed, cool"
      ],
      [
        "沈黙する（ちんもくする）",
        "be silent"
      ],
      [
        "沈没する（ちんぼつする）",
        "sink, founder, go to the bottom"
      ],
      [
        "沈下する（ちんかする）",
        "sink, subside"
      ],
      [
        "沈滞する（ちんたいする）",
        "stagnate, be inactive"
      ],
      [
        "沈静する（ちんせいする）",
        "die down, settle down"
      ],
      [
        "沈思黙考する（ちんしもっこうする）",
        "be sunk in deep thought"
      ],
      [
        "沈む（しずむ）",
        "sink, feel depressed [v.i.]"
      ],
      [
        "沈める（しずめる）",
        "sink, submerge [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "飲",
    "kname": "in-no(mu)",
    "kstroke": 12,
    "kmeaning": "drink",
    "kgrade": 3,
    "kunyomi_ja": "の、のむ",
    "kunyomi": "no, nomu",
    "onyomi_ja": "イン",
    "onyomi": "in",
    "examples": [
      [
        "飲食店（いんしょくてん）",
        "restaurant"
      ],
      [
        "飲酒運転（いんしゅうんてん）",
        "drunk driving"
      ],
      [
        "飲料水（いんりょうすい）",
        "drinking water"
      ],
      [
        "飲む（のむ）",
        "drink"
      ],
      [
        "飲み屋（のみや）",
        "bar"
      ],
      [
        "飲み物（のみもの）",
        "beverage"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "珍",
    "kname": "mezura(shii)",
    "kstroke": 9,
    "kmeaning": "rare, unusual",
    "kgrade": "n/a",
    "kunyomi_ja": "めずら、めずらしい",
    "kunyomi": "mezura, mezurashii",
    "onyomi_ja": "チン",
    "onyomi": "chin",
    "examples": [
      [
        "珍味（ちんみ）",
        "delicacy, dainty"
      ],
      [
        "珍品（ちんぴん）",
        "curio, rare article"
      ],
      [
        "珍現象（ちんげんしょう）",
        "strange phenomenon"
      ],
      [
        "珍妙な（ちんみょうな）",
        "queer, odd"
      ],
      [
        "珍紛漢紛な（ちんぷんかんぷんな）",
        "gibberish"
      ],
      [
        "珍重する（ちんちょうする）",
        "prize, value highly, treasure"
      ],
      [
        "珍しい（めずらしい）",
        "unusual, rare"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "泥",
    "kname": "doro",
    "kstroke": 8,
    "kmeaning": "mud",
    "kgrade": "n/a",
    "kunyomi_ja": "どろ",
    "kunyomi": "doro",
    "onyomi_ja": "デイ",
    "onyomi": "dei",
    "examples": [
      [
        "泥土（でいど）",
        "mud"
      ],
      [
        "泥水（でいすい）",
        "muddy water"
      ],
      [
        "雲泥の差（うんでいのさ）",
        "wide difference"
      ],
      [
        "泥酔する（でいすいする）",
        "be dead drunk"
      ],
      [
        "泥（どろ）",
        "mud"
      ],
      [
        "泥んこ（どろんこ）",
        "morass of mud"
      ],
      [
        "泥沼（どろぬま）",
        "bog, morass"
      ],
      [
        "泥棒（どろぼう）",
        "thief, burglar, robber, theft"
      ],
      [
        "こそ泥（こそどろ）",
        "sneak-thief, pilferer"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "滴",
    "kname": "teki-shizuku",
    "kstroke": 14,
    "kmeaning": "drop, drip, trickle",
    "kgrade": "n/a",
    "kunyomi_ja": "しずく、したた、したたる",
    "kunyomi": "shizuku, shitata, shitataru",
    "onyomi_ja": "テキ",
    "onyomi": "teki",
    "examples": [
      [
        "点滴（てんてき）",
        "intravenous drip"
      ],
      [
        "水滴（すいてき）",
        "drop of water"
      ],
      [
        "雨滴（うてき）",
        "raindrops"
      ],
      [
        "滴下する（てきかする）",
        "drip, drop, distill"
      ],
      [
        "滴（しずく）",
        "drop, drip [n.]"
      ],
      [
        "滴る（したたる）",
        "drip, drop, trickle"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "殿",
    "kname": "tono",
    "kstroke": 13,
    "kmeaning": "palace, hall, lord, formal honorific title",
    "kgrade": "n/a",
    "kunyomi_ja": "との",
    "kunyomi": "tono",
    "onyomi_ja": "デン、テン",
    "onyomi": "den, ten",
    "examples": [
      [
        "殿堂（でんどう）",
        "palace, palatial building"
      ],
      [
        "殿下（でんか）",
        "Your Highness, His Highness"
      ],
      [
        "神殿（しんでん）",
        "sanctuary, temple, sacred place"
      ],
      [
        "宮殿（きゅうでん）",
        "palace"
      ],
      [
        "御殿（ごてん）",
        "palace, court"
      ],
      [
        "殿（との）",
        "Your Highness, His Highness"
      ],
      [
        "殿様（とのさま）",
        "feudal lord"
      ],
      [
        "山田殿（やまだどの）",
        "Dear Mr. Yamada"
      ]
    ],
    "radical": "⽎",
    "rad_order": 103,
    "rad_stroke": 4,
    "rad_name_ja": "るまた",
    "rad_name": "rumata",
    "rad_meaning": "lance shaft, action",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "塗",
    "kname": "nu(ru)",
    "kstroke": 13,
    "kmeaning": "apply on a surface, paint",
    "kgrade": "n/a",
    "kunyomi_ja": "ぬ、ぬる、ぬり",
    "kunyomi": "nu, nuru, nuri",
    "onyomi_ja": "ト",
    "onyomi": "to",
    "examples": [
      [
        "塗料（とりょう）",
        "paints, painting material"
      ],
      [
        "塗装する（とそうする）",
        "paint [v.t.]"
      ],
      [
        "塗る（ぬる）",
        "paint, plaster, lacquer, varnish"
      ],
      [
        "塗り絵（ぬりえ）",
        "picture for coloring in"
      ],
      [
        "塗り立て（ぬりたて）",
        "freshly painted [n.]"
      ],
      [
        "輪島塗り（わじまぬり）",
        "Wajima lacquer"
      ],
      [
        "上塗りする（うわぬりする）",
        "coat, glaze"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "逃",
    "kname": "ni(geru)",
    "kstroke": 9,
    "kmeaning": "escape, run away, set free, miss",
    "kgrade": "n/a",
    "kunyomi_ja": "に、のが、にげる、にがす、のがす、のがれる",
    "kunyomi": "ni, noga, nigeru, nigasu, nogasu, nogareru",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "逃亡者（とうぼうしゃ）",
        "runaway, fugitive"
      ],
      [
        "逃走する（とうそうする）",
        "run away, escape"
      ],
      [
        "逃亡する（とうぼうする）",
        "run away, escape"
      ],
      [
        "逃避する（とうひする）",
        "escape, evade"
      ],
      [
        "逃がす（にがす）",
        "let loose, set free, [v.t.]"
      ],
      [
        "逃げる（にげる）",
        "escape, run away [v.i.]"
      ],
      [
        "逃げ道（にげみち）",
        "way out, escape route"
      ],
      [
        "逃す（のがす）",
        "miss, waste, let slip [v.t.]"
      ],
      [
        "見逃す（みのがす）",
        "miss, overlook"
      ],
      [
        "逃れる（のがれる）",
        "escape, evade [v.i.]"
      ],
      [
        "言い逃れ（いいのがれ）",
        "evasion, excuse"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "塔",
    "kname": "(kansei)tou",
    "kstroke": 12,
    "kmeaning": "tower",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "塔（とう）",
        "tower"
      ],
      [
        "鉄塔（てっとう）",
        "pylon, steel tower"
      ],
      [
        "仏塔（ぶっとう）",
        "pagoda"
      ],
      [
        "卒塔婆（そとうば/*そとば）",
        "wooden grave tablet, stupa"
      ],
      [
        "管制塔（かんせいとう）",
        "control tower"
      ],
      [
        "テレビ塔（テレビとう）",
        "TV tower"
      ],
      [
        "エッフェル塔（エッフェルとう）",
        "Eiffel Tower"
      ],
      [
        "五重の塔（ごじゅうのとう）",
        "five-storied pagoda"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "筒",
    "kname": "tsutsu",
    "kstroke": 12,
    "kmeaning": "tube, pipe",
    "kgrade": "n/a",
    "kunyomi_ja": "つつ",
    "kunyomi": "tsutsu",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "水筒（すいとう）",
        "canteen, flask, water bottle"
      ],
      [
        "封筒（ふうとう）",
        "envelope"
      ],
      [
        "円筒形（えんとうけい）",
        "cylindrical shape"
      ],
      [
        "発煙筒（はつえんとう）",
        "smoke candle"
      ],
      [
        "筒（つつ）",
        "pipe, tube"
      ],
      [
        "茶筒（ちゃづつ）",
        "tea caddy"
      ],
      [
        "筒抜け（つつぬけ）",
        "passing or going directly through"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "鈍",
    "kname": "nibu(i)",
    "kstroke": 12,
    "kmeaning": "dull, slow-witted, blunt, dim",
    "kgrade": "n/a",
    "kunyomi_ja": "にぶ、にぶい、にぶる",
    "kunyomi": "nibu, nibui, niburu",
    "onyomi_ja": "ドン",
    "onyomi": "don",
    "examples": [
      [
        "鈍器（どんき）",
        "blunt weapon"
      ],
      [
        "鈍角（どんかく）",
        "obtuse angle"
      ],
      [
        "鈍感な（どんかんな）",
        "thickheaded, insensitive"
      ],
      [
        "愚鈍な（ぐどんな）",
        "stupid, dull, silly"
      ],
      [
        "鈍臭い（どんくさい）",
        "slow (person), slow-witted"
      ],
      [
        "鈍る（にぶる）",
        "grow dull, become blunt [v.i.]"
      ],
      [
        "鈍い（にぶい）",
        "dull, thickheaded, slow [adj.]"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "軟",
    "kname": "nan-yawa(rakai)",
    "kstroke": 11,
    "kmeaning": "soft",
    "kgrade": "n/a",
    "kunyomi_ja": "やわ、やわらかい",
    "kunyomi": "yawa, yawarakai",
    "onyomi_ja": "ナン",
    "onyomi": "nan",
    "examples": [
      [
        "軟骨（なんこつ）",
        "cartilage"
      ],
      [
        "軟水（なんすい）",
        "soft water"
      ],
      [
        "軟着陸（なんちゃくりく）",
        "soft-landing"
      ],
      [
        "軟式テニス（なんしきテニス）",
        "tennis (played with soft ball)"
      ],
      [
        "軟弱な（なんじゃくな）",
        "weak"
      ],
      [
        "柔軟な（じゅうなんな）",
        "flexible, lithe"
      ],
      [
        "軟化する（なんかする）",
        "soften, mollify"
      ],
      [
        "軟らかい（やわらかい）",
        "soft, tender, limp"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "下",
    "kname": "ge-shita",
    "kstroke": 3,
    "kmeaning": "down",
    "kgrade": 1,
    "kunyomi_ja": "した、しも、さ、さがる、さげる、くだ、くだる、ください、お、おろす、おりる",
    "kunyomi": "shita, shimo, sa, sagaru, sageru, kuda, kudaru, kudasai, o, orosu, oriru",
    "onyomi_ja": "カ、ゲ",
    "onyomi": "ka, ge",
    "examples": [
      [
        "地下鉄（ちかてつ）",
        "subway"
      ],
      [
        "上下する（じょうげする）",
        "go up and down"
      ],
      [
        "下（した）",
        "under, below"
      ],
      [
        "靴下（くつした）",
        "socks"
      ],
      [
        "風下（かざしも）",
        "leeward"
      ],
      [
        "下がる（さがる）",
        "hang down, fall, step back [v.i.]"
      ],
      [
        "下げる（さげる）",
        "hang, lower [v.t.]"
      ],
      [
        "下る（くだる）",
        "descend"
      ],
      [
        "下ろす（おろす）",
        "take down, lower [v.t.]"
      ],
      [
        "下りる（おりる）",
        "get off [v.i.]"
      ],
      [
        "*下手（へた）",
        "unskillful"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "知",
    "kname": "shi(ru)",
    "kstroke": 8,
    "kmeaning": "know",
    "kgrade": 2,
    "kunyomi_ja": "し、しる、しらす、しらせる",
    "kunyomi": "shi, shiru, shirasu, shiraseru",
    "onyomi_ja": "チ",
    "onyomi": "chi",
    "examples": [
      [
        "承知する（しょうちする）",
        "consent"
      ],
      [
        "通知する（つうちする）",
        "notify by letter"
      ],
      [
        "知識（ちしき）",
        "knowledge"
      ],
      [
        "知恵（ちえ）",
        "wisdom"
      ],
      [
        "知性（ちせい）",
        "intelligence"
      ],
      [
        "知的な（ちてきな）",
        "intellectual"
      ],
      [
        "知人（ちじん）",
        "acquaintance"
      ],
      [
        "知る（しる）",
        "know"
      ],
      [
        "知らせる（しらせる）",
        "notify"
      ],
      [
        "知り合い（しりあい）",
        "acquaintance"
      ]
    ],
    "radical": "",
    "rad_order": 141,
    "rad_stroke": 5,
    "rad_name_ja": "やへん",
    "rad_name": "yahen",
    "rad_meaning": "arrow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "悩",
    "kname": "naya(mu)",
    "kstroke": 10,
    "kmeaning": "suffer, be troubled, afflict",
    "kgrade": "n/a",
    "kunyomi_ja": "なや、なやむ、なやみ、なやます",
    "kunyomi": "naya, nayamu, nayami, nayamasu",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "煩悩（ぼんのう）",
        "earthly desires, carnal desires"
      ],
      [
        "苦悩する（くのうする）",
        "suffer, be anguished"
      ],
      [
        "悩ます（なやます）",
        "afflict, torment, harass [v.t.]"
      ],
      [
        "悩む（なやむ）",
        "be worried, be troubled [v.i.]"
      ],
      [
        "悩み（なやみ）",
        "trouble, worry [n.]"
      ],
      [
        "悩ましい（なやましい）",
        "seductive"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "濃",
    "kname": "nou-ko(i)",
    "kstroke": 16,
    "kmeaning": "thick, dark",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こい、こさ",
    "kunyomi": "ko, koi, kosa",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "濃度（のうど）",
        "concentration, brightness"
      ],
      [
        "濃霧（のうむ）",
        "heavy fog"
      ],
      [
        "濃紺（のうこん）",
        "dark blue"
      ],
      [
        "濃淡（のうたん）",
        "light and shade, chiaroscuro"
      ],
      [
        "濃密な（のうみつな）",
        "thick, crowded"
      ],
      [
        "濃厚な（のうこうな）",
        "dense, rich, concentrated"
      ],
      [
        "濃縮する（のうしゅくする）",
        "concentrate"
      ],
      [
        "濃い（こい）",
        "thick, dense, strong"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "泊",
    "kname": "haku-to(maru)",
    "kstroke": 8,
    "kmeaning": "stay overnight, lodge",
    "kgrade": "n/a",
    "kunyomi_ja": "とまる、とめる",
    "kunyomi": "tomaru, tomeru",
    "onyomi_ja": "ハク",
    "onyomi": "haku",
    "examples": [
      [
        "二泊三日（にはくみっか）",
        "3 days 2 nights"
      ],
      [
        "一泊二食付き（いっぱくにしょくつき）",
        "2 meals included per night"
      ],
      [
        "宿泊する（しゅくはくする）",
        "stay at"
      ],
      [
        "外泊する（がいはくする）",
        "spend a night away from home"
      ],
      [
        "泊める（とめる）",
        "give shelter to, lodge [v.t.]"
      ],
      [
        "泊まる（とまる）",
        "stay at [v.i.]"
      ],
      [
        "泊まり客（とまりきゃく）",
        "guest, lodger"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "薄",
    "kname": "usu(meru)",
    "kstroke": 16,
    "kmeaning": "thin, weak, light, fade, dilute",
    "kgrade": "n/a",
    "kunyomi_ja": "うす、うすい、うすめる、うすまる、うすらぐ、うすれる",
    "kunyomi": "usu, usui, usumeru, usumaru, usuragu, usureru",
    "onyomi_ja": "ハス",
    "onyomi": "haku",
    "examples": [
      [
        "薄給（はっきゅう）",
        "small salary, low wages"
      ],
      [
        "薄利多売（はくりたばい）",
        "small profits & quick returns"
      ],
      [
        "薄弱な（はくじゃくな）",
        "feeble, weak"
      ],
      [
        "薄情な（はくじょうな）",
        "heartless, cold-hearted, cruel"
      ],
      [
        "軽薄な（けいはくな）",
        "frivolous, superficial"
      ],
      [
        "希薄な（きはくな）",
        "rarefied, diluted, sparse, weak"
      ],
      [
        "薄める（うすめる）",
        "dilute, water down [v.t.]"
      ],
      [
        "薄まる（うすまる）",
        "become weak (color, taste) [v.i.]"
      ],
      [
        "薄らぐ（うすらぐ）",
        "become thin, fade [v.i.]"
      ],
      [
        "薄れる（うすれる）",
        "fade, become dim [v.i.]"
      ],
      [
        "薄い（うすい）",
        "thin, weak, diluted [adj.]"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "爆",
    "kname": "baku(dan)",
    "kstroke": 19,
    "kmeaning": "explode",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "バク",
    "onyomi": "baku",
    "examples": [
      [
        "爆弾（ばくだん）",
        "bomb [n.]"
      ],
      [
        "爆風（ばくふう）",
        "blast [n.]"
      ],
      [
        "爆薬（ばくやく）",
        "explosive, blasting powder"
      ],
      [
        "原爆（げんばく）",
        "atomic bomb"
      ],
      [
        "被爆者（ひばくしゃ）",
        "atomic bomb victim"
      ],
      [
        "爆発的な（ばくはつてきな）",
        "explosive, tremendous"
      ],
      [
        "爆撃する（ばくげきする）",
        "bomb, drop bombs"
      ],
      [
        "爆笑する（ばくしょうする）",
        "roar with laughter"
      ],
      [
        "爆発する（ばくはつする）",
        "explode"
      ],
      [
        "爆破する（ばくはする）",
        "blow up, blast"
      ]
    ],
    "radical": "",
    "rad_order": 111,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "fire",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "肌",
    "kname": "hada(gi)",
    "kstroke": 6,
    "kmeaning": "skin",
    "kgrade": "n/a",
    "kunyomi_ja": "はだ",
    "kunyomi": "hada",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "肌（はだ）",
        "skin"
      ],
      [
        "肌身（はだみ）",
        "body"
      ],
      [
        "肌着（はだぎ）",
        "underwear"
      ],
      [
        "肌色（はだいろ）",
        "skin-colored"
      ],
      [
        "肌触り（はだざわり）",
        "texture (for skin)"
      ],
      [
        "肌寒い（はだざむい）",
        "chilly"
      ],
      [
        "山肌（やまはだ）",
        "bare surface of a mountain"
      ],
      [
        "地肌（じはだ）",
        "one's skin, surface of the ground"
      ],
      [
        "学者肌（がくしゃはだ）",
        "scholarly bent of mind"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "髪",
    "kname": "hatsu-kami",
    "kstroke": 14,
    "kmeaning": "hair (on the head)",
    "kgrade": "n/a",
    "kunyomi_ja": "かみ",
    "kunyomi": "kami",
    "onyomi_ja": "ハツ",
    "onyomi": "hatsu",
    "examples": [
      [
        "頭髪（とうはつ）",
        "hair (on the head)"
      ],
      [
        "毛髪（もうはつ）",
        "hair"
      ],
      [
        "白髪（はくはつ）",
        "white hair, grey hair"
      ],
      [
        "金髪（きんぱつ）",
        "blond hair"
      ],
      [
        "間一髪（かんいっぱつ）",
        "hair's breadth"
      ],
      [
        "散髪する（さんぱつする）",
        "get a haircut"
      ],
      [
        "洗髪する（せんぱつする）",
        "wash one's hair"
      ],
      [
        "髪（かみ）",
        "hair (on the head)"
      ],
      [
        "髪の毛（かみのけ）",
        "hair (on the head)"
      ],
      [
        "日本髪（にほんがみ）",
        "Japanese coiffure"
      ],
      [
        "*白髪（しらが）",
        "white hair, grey hair"
      ]
    ],
    "radical": "⾽",
    "rad_order": 228,
    "rad_stroke": 10,
    "rad_name_ja": "かみかんむり",
    "rad_name": "kamikanmuri",
    "rad_meaning": "long hair",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "販",
    "kname": "han(baisuru)",
    "kstroke": 11,
    "kmeaning": "engage in sales, sell",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "販路（はんろ）",
        "market, outlet"
      ],
      [
        "自動販売機（じどうはんばいき）",
        "vending machine"
      ],
      [
        "販売する（はんばいする）",
        "sell, market"
      ],
      [
        "市販する（しはんする）",
        "put on the market, market"
      ],
      [
        "再販する（さいはんする）",
        "resell"
      ]
    ],
    "radical": "",
    "rad_order": 188,
    "rad_stroke": 7,
    "rad_name_ja": "かいへん",
    "rad_name": "kaihen",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "瓶",
    "kname": "bin(zume)",
    "kstroke": 11,
    "kmeaning": "bottle",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ビン",
    "onyomi": "bin",
    "examples": [
      [
        "瓶（びん）",
        "bottle"
      ],
      [
        "瓶詰め（びんづめ）",
        "bottling, bottled"
      ],
      [
        "花瓶（かびん）",
        "vase"
      ],
      [
        "空き瓶（あきびん）",
        "empty bottle"
      ],
      [
        "魔法瓶（まほうびん）",
        "thermos flask"
      ]
    ],
    "radical": "⽡",
    "rad_order": 124,
    "rad_stroke": 5,
    "rad_name_ja": "かわら",
    "rad_name": "kawara",
    "rad_meaning": "tile",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "浮",
    "kname": "u(kabu)",
    "kstroke": 10,
    "kmeaning": "float, rise to the surface",
    "kgrade": "n/a",
    "kunyomi_ja": "う、うく、うかれる、うかぶ、うかべる",
    "kunyomi": "u, uku, ukareru, ukabu, ukaberu",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "浮力（ふりょく）",
        "buoyancy, floating power"
      ],
      [
        "浮浪者（ふろうしゃ）",
        "vagrant, homeless"
      ],
      [
        "浮遊する（ふゆうする）",
        "float, wander"
      ],
      [
        "浮上する（ふじょうする）",
        "surface, rise to the surface"
      ],
      [
        "浮かべる（うかべる）",
        "float, express, look [v.t.]"
      ],
      [
        "浮かぶ（うかぶ）",
        "float, rise to surface [v.i.]"
      ],
      [
        "浮く（うく）",
        "float [v.i.]"
      ],
      [
        "浮き世（うきよ）",
        "fleeting life, this transient world"
      ],
      [
        "浮世絵（うきよえ）",
        "ukiyoe"
      ],
      [
        "浮かれる（うかれる）",
        "make merry, be festive"
      ],
      [
        "*浮気（うわき）",
        "illicit love affair"
      ],
      [
        "*浮つく（うわつく）",
        "be flippant, frivolous [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "前",
    "kname": "mae",
    "kstroke": 9,
    "kmeaning": "before, front",
    "kgrade": 2,
    "kunyomi_ja": "まえ",
    "kunyomi": "mae",
    "onyomi_ja": "ゼン",
    "onyomi": "zen",
    "examples": [
      [
        "午前（ごぜん）",
        "morning, a.m."
      ],
      [
        "前日（ぜんじつ）",
        "previous day"
      ],
      [
        "前回（ぜんかい）",
        "last time"
      ],
      [
        "前（まえ）",
        "before, ago, former"
      ],
      [
        "この前（このまえ）",
        "the other day"
      ],
      [
        "名前（なまえ）",
        "name"
      ],
      [
        "手前（てまえ）",
        "in front of oneself, this side"
      ],
      [
        "駅前（えきまえ）",
        "in front of the train station"
      ],
      [
        "斜め前（ななめまえ）",
        "diagonally in front of"
      ],
      [
        "前売り（まえうり）",
        "advance sale"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "膚",
    "kname": "(hi)fu(byou)",
    "kstroke": 15,
    "kmeaning": "skin",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "皮膚（ひふ）",
        "skin"
      ],
      [
        "皮膚科（ひふか）",
        "dermatology"
      ],
      [
        "皮膚病（ひふびょう）",
        "skin disease"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "舞",
    "kname": "ma(u)",
    "kstroke": 15,
    "kmeaning": "dance",
    "kgrade": "n/a",
    "kunyomi_ja": "ま、まう、まい",
    "kunyomi": "ma, mau, mai",
    "onyomi_ja": "ブ",
    "onyomi": "bu",
    "examples": [
      [
        "舞台（ぶたい）",
        "stage, scene or setting"
      ],
      [
        "舞曲（ぶきょく）",
        "musical dance"
      ],
      [
        "舞踏会（ぶとうかい）",
        "ball, dance"
      ],
      [
        "歌舞伎（かぶき）",
        "kabuki"
      ],
      [
        "日本舞踊（にほんぶよう）",
        "traditional Japanese dance"
      ],
      [
        "舞う（まう）",
        "dance, flutter about"
      ],
      [
        "見舞う（みまう）",
        "ask after, visit (a sick person)"
      ],
      [
        "仕舞い（しまい）",
        "end, close, termination"
      ],
      [
        "舞（まい）",
        "dance [n.]"
      ]
    ],
    "radical": "⾇",
    "rad_order": 202,
    "rad_stroke": 6,
    "rad_name_ja": "まいあし",
    "rad_name": "maiashi",
    "rad_meaning": "contrary, to err",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "封",
    "kname": "fuu(sho)",
    "kstroke": 9,
    "kmeaning": "seal",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フウ、ホウ",
    "onyomi": "fuu, hou",
    "examples": [
      [
        "封（ふう）",
        "seal [n.]"
      ],
      [
        "封書（ふうしょ）",
        "sealed letter"
      ],
      [
        "封印する（ふういんする）",
        "seal [v.t.]"
      ],
      [
        "封鎖する（ふうさする）",
        "blockade, seal off"
      ],
      [
        "同封する（どうふうする）",
        "enclose"
      ],
      [
        "開封する（かいふうする）",
        "open a letter, break a seal"
      ],
      [
        "密封する（みっぷうする）",
        "seal up"
      ],
      [
        "封建的な（ほうけんてきな）",
        "feudal"
      ],
      [
        "封建主義（ほうけんしゅぎ）",
        "feudalism"
      ],
      [
        "封建制度（ほうけんせいど）",
        "feudal system"
      ]
    ],
    "radical": "",
    "rad_order": 49.5,
    "rad_stroke": 3,
    "rad_name_ja": "すんづくり",
    "rad_name": "sunzukuri",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "幅",
    "kname": "fuku-haba",
    "kstroke": 12,
    "kmeaning": "width, breadth, range",
    "kgrade": "n/a",
    "kunyomi_ja": "はば",
    "kunyomi": "haba",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "全幅（ぜんぷく）",
        "overall width, all, every"
      ],
      [
        "振幅数（しんぷくすう）",
        "amplitude, swing of pendulum"
      ],
      [
        "増幅する（ぞうふくする）",
        "amplify"
      ],
      [
        "幅（はば）",
        "width, breadth"
      ],
      [
        "幅跳び（はばとび）",
        "long jump"
      ],
      [
        "横幅（よこはば）",
        "breadth, width"
      ],
      [
        "大幅に（おおはばに）",
        "in large scale, drastically"
      ]
    ],
    "radical": "",
    "rad_order": 60,
    "rad_stroke": 3,
    "rad_name_ja": "はばへん",
    "rad_name": "habahen",
    "rad_meaning": "cloth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "沸",
    "kname": "futsu-wa(ku)",
    "kstroke": 8,
    "kmeaning": "boil, seethe",
    "kgrade": "n/a",
    "kunyomi_ja": "わ、わく、わかす",
    "kunyomi": "wa, waku, wakasu",
    "onyomi_ja": "フツ",
    "onyomi": "futsu",
    "examples": [
      [
        "沸点（ふってん）",
        "boiling point"
      ],
      [
        "沸騰する（ふっとうする）",
        "boil, seethe [v.i.]"
      ],
      [
        "煮沸する（しゃふつする）",
        "boil, scald [v.t.]"
      ],
      [
        "沸かす（わかす）",
        "boil up [v.t.]"
      ],
      [
        "湯沸かし器（ゆわかしき）",
        "hot-water heater"
      ],
      [
        "沸く（わく）",
        "boil, get excited [v.i.]"
      ],
      [
        "沸き返る（わきかえる）",
        "seethe, get excited"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "捕",
    "kname": "ho-to(raeru)",
    "kstroke": 10,
    "kmeaning": "catch, grasp, capture",
    "kgrade": "n/a",
    "kunyomi_ja": "と、つか、とらえる、とらわれる、とる、つかまえる、つかまる",
    "kunyomi": "to, tsuka, toraeru, torawareru, toru, tsukamaeru, tsukamaru",
    "onyomi_ja": "ホ",
    "onyomi": "ho",
    "examples": [
      [
        "捕手（ほしゅ）",
        "catcher"
      ],
      [
        "捕虜（ほりょ）",
        "prisoner of war"
      ],
      [
        "捕鯨船（ほげいせん）",
        "whaling ship"
      ],
      [
        "捕獲する（ほかくする）",
        "capture, seize"
      ],
      [
        "逮捕する（たいほする）",
        "arrest, apprehend"
      ],
      [
        "捕らえる（とらえる）",
        "seize, capture, arrest [v.t.]"
      ],
      [
        "捕る（とる）",
        "take, catch, capture [v.t.]"
      ],
      [
        "捕まえる（つかまえる）",
        "catch, arrest, seize [v.t.]"
      ],
      [
        "捕まる（つかまる）",
        "be caught, be arrested [v.i.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "抱",
    "kname": "kaka(eru)",
    "kstroke": 8,
    "kmeaning": "hug, embrace, hold in one's arm",
    "kgrade": "n/a",
    "kunyomi_ja": "だ、いだ、かか、だく、いだく、かかえる",
    "kunyomi": "da, ida, kaka, daku, idaku, kakaeru",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "抱負（ほうふ）",
        "aspiration, ambition"
      ],
      [
        "抱腹絶倒（ほうふくぜっとう）",
        "side-splittingly funny"
      ],
      [
        "辛抱する（しんぼうする）",
        "be patient, persevere"
      ],
      [
        "抱擁する（ほうようする）",
        "embrace, hug"
      ],
      [
        "介抱する（かいほうする）",
        "nurse, look after"
      ],
      [
        "抱く（だく）",
        "embrace, hug"
      ],
      [
        "抱っこする（だっこする）",
        "carry (a baby) in one's arms"
      ],
      [
        "抱く（いだく）",
        "entertain, cherish, harbor, hold"
      ],
      [
        "抱える（かかえる）",
        "hold/carry under, or in the arms"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "帽",
    "kname": "(beree)bou",
    "kstroke": 12,
    "kmeaning": "headgear, cap, hat",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "帽子（ぼうし）",
        "hat"
      ],
      [
        "赤帽（あかぼう）",
        "redcap, porter"
      ],
      [
        "登山帽（とざんぼう）",
        "climber's hat"
      ],
      [
        "ベレー帽（ベレーぼう）",
        "beret"
      ],
      [
        "脱帽する（だつぼうする）",
        "take off one's hat"
      ]
    ],
    "radical": "",
    "rad_order": 60,
    "rad_stroke": 3,
    "rad_name_ja": "はばへん",
    "rad_name": "habahen",
    "rad_meaning": "cloth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "磨",
    "kname": "ma-miga(ku)",
    "kstroke": 16,
    "kmeaning": "polish, brush",
    "kgrade": "n/a",
    "kunyomi_ja": "みが、みがく",
    "kunyomi": "miga, migaku",
    "onyomi_ja": "マ",
    "onyomi": "ma",
    "examples": [
      [
        "達磨（だるま）",
        "daruma, daruma doll"
      ],
      [
        "研磨する（けんまする）",
        "grind, polish, study"
      ],
      [
        "磨く（みがく）",
        "polish, shine, refine, improve"
      ],
      [
        "靴磨き（くつみがき）",
        "shoe polishing"
      ]
    ],
    "radical": "⽯",
    "rad_order": 142,
    "rad_stroke": 5,
    "rad_name_ja": "いし",
    "rad_name": "ishi",
    "rad_meaning": "stone",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "埋",
    "kname": "u(maru)",
    "kstroke": 10,
    "kmeaning": "bury, fill up",
    "kgrade": "n/a",
    "kunyomi_ja": "う、うめる、うまる、うもれる",
    "kunyomi": "u, umeru, umaru, umoreru",
    "onyomi_ja": "マイ",
    "onyomi": "mai",
    "examples": [
      [
        "埋蔵物（まいぞうぶつ）",
        "buried property"
      ],
      [
        "埋没する（まいぼつする）",
        "be buried, sink into ground"
      ],
      [
        "埋葬する（まいそうする）",
        "bury (a person)"
      ],
      [
        "埋める（うめる）",
        "bury, fill, plug gaps"
      ],
      [
        "埋め立て地（うめたてち）",
        "reclaimed land"
      ],
      [
        "生き埋め（いきうめ）",
        "burying alive"
      ],
      [
        "埋まる（うまる）",
        "be buried, be filled [v.i.]"
      ],
      [
        "埋もれる（うもれる）",
        "be buried, be covered [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "後",
    "kname": "ushi(ro)",
    "kstroke": 9,
    "kmeaning": "after, back",
    "kgrade": 2,
    "kunyomi_ja": "のち、うし、うしろ、あと、おく、おくれ",
    "kunyomi": "nochi, ushi, ushiro, ato, oku, okure",
    "onyomi_ja": "ゴ、コウ",
    "onyomi": "go, kou",
    "examples": [
      [
        "午後（ごご）",
        "afternoon, p.m."
      ],
      [
        "最後（さいご）",
        "last, ending"
      ],
      [
        "以後（いご）",
        "from now on"
      ],
      [
        "後半（こうはん）",
        "second half"
      ],
      [
        "後ほど（のちほど）",
        "later"
      ],
      [
        "後ろ（うしろ）",
        "back, behind"
      ],
      [
        "後で（あとで）",
        "later, afterwards"
      ],
      [
        "手後れ（ておくれ）",
        "being (too) late"
      ],
      [
        "*明後日（あさって）",
        "day after tomorrow"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "溶",
    "kname": "you-to(keru)",
    "kstroke": 13,
    "kmeaning": "dissolve, melt",
    "kgrade": "n/a",
    "kunyomi_ja": "と、とける、とかす、とく",
    "kunyomi": "to, tokeru, tokasu, toku",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "溶液（ようえき）",
        "solution"
      ],
      [
        "溶岩（ようがん）",
        "lava"
      ],
      [
        "溶鉱炉（ようこうろ）",
        "blast furnace"
      ],
      [
        "水溶性（すいようせい）",
        "water-soluble"
      ],
      [
        "溶接する（ようせつする）",
        "weld"
      ],
      [
        "溶解する（ようかいする）",
        "melt, dissolve, liquefy"
      ],
      [
        "溶かす（とかす）",
        "melt, dissolve [v.t.]"
      ],
      [
        "溶ける（とける）",
        "melt, thaw, fuse, dissolve [v.i.]"
      ],
      [
        "溶く（とく）",
        "dissolve [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "腰",
    "kname": "koshi",
    "kstroke": 13,
    "kmeaning": "waist, loins, hips, small of back",
    "kgrade": "n/a",
    "kunyomi_ja": "こし",
    "kunyomi": "koshi",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "腰痛（ようつう）",
        "back pain"
      ],
      [
        "腰（こし）",
        "waist"
      ],
      [
        "腰骨（こしぼね）",
        "hipbone, innominate bone"
      ],
      [
        "足腰（あしこし）",
        "legs and loins"
      ],
      [
        "弱腰（よわごし）",
        "weak attitude"
      ],
      [
        "物腰（ものごし）",
        "manner, demeanor"
      ],
      [
        "本腰（ほんごし）",
        "strenuous effort, earnestness"
      ],
      [
        "腰掛ける（こしかける）",
        "sit"
      ],
      [
        "腰掛け（こしかけ）",
        "seat, bench"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "踊",
    "kname": "you-odo(ru)",
    "kstroke": 14,
    "kmeaning": "dance",
    "kgrade": "n/a",
    "kunyomi_ja": "おど、おどる、おどり",
    "kunyomi": "odo, odoru, odori",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "舞踊（ぶよう）",
        "dance [n.]"
      ],
      [
        "踊る（おどる）",
        "dance [v.i.]"
      ],
      [
        "踊り子（おどりこ）",
        "dancer"
      ],
      [
        "盆踊り（ぼんおどり）",
        "Bon festival dance"
      ]
    ],
    "radical": "⻊",
    "rad_order": 193,
    "rad_stroke": 7,
    "rad_name_ja": "あしへん",
    "rad_name": "ashihen",
    "rad_meaning": "foot, leg",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "粒",
    "kname": "tsubu",
    "kstroke": 11,
    "kmeaning": "grain",
    "kgrade": "n/a",
    "kunyomi_ja": "つぶ",
    "kunyomi": "tsubu",
    "onyomi_ja": "リュウ",
    "onyomi": "ryuu",
    "examples": [
      [
        "粒子（りゅうし）",
        "particle, grain"
      ],
      [
        "顆粒（かりゅう）",
        "granule"
      ],
      [
        "素粒子（そりゅうし）",
        "elementary particle, particle"
      ],
      [
        "粒（つぶ）",
        "grain, drop"
      ],
      [
        "米粒（こめつぶ）",
        "grain of rice"
      ],
      [
        "一粒（ひとつぶ）",
        "a grain, a drop"
      ],
      [
        "粒粒（つぶつぶ）",
        "granulated, lumpy"
      ],
      [
        "雨粒（あまつぶ）",
        "raindrop"
      ]
    ],
    "radical": "",
    "rad_order": 156,
    "rad_stroke": 6,
    "rad_name_ja": "こめへん",
    "rad_name": "komehen",
    "rad_meaning": "rice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "了",
    "kname": "(kan)ryou(suru)",
    "kstroke": 2,
    "kmeaning": "finish, complete, understand",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "未了（みりょう）",
        "unfinished, yet not finished [n.]"
      ],
      [
        "了解する（りょうかいする）",
        "consent, comprehend"
      ],
      [
        "了承する（りょうしょうする）",
        "approve, consent"
      ],
      [
        "完了する（かんりょうする）",
        "complete, conclude"
      ],
      [
        "終了する（しゅうりょうする）",
        "close, end"
      ],
      [
        "満了する（まんりょうする）",
        "expire, terminate"
      ],
      [
        "修了する（しゅうりょうする）",
        "complete, finish"
      ]
    ],
    "radical": "⼅",
    "rad_order": 7,
    "rad_stroke": 1,
    "rad_name_ja": "はねぼう",
    "rad_name": "hanebou",
    "rad_meaning": "vertical stroke with a hook",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "涼",
    "kname": "suzu(mu)",
    "kstroke": 11,
    "kmeaning": "cool",
    "kgrade": "n/a",
    "kunyomi_ja": "すず、すずしい、すずむ",
    "kunyomi": "suzu, suzushii, suzumu",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "涼風（りょうふう）",
        "cool breeze, refreshing breeze"
      ],
      [
        "納涼（のうりょう）",
        "cool of the summer evening"
      ],
      [
        "清涼飲料水（せいりょういんりょうすい）",
        "soft drink"
      ],
      [
        "涼む（すずむ）",
        "cool oneself, cool off"
      ],
      [
        "涼しい（すずしい）",
        "cool"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "療",
    "kname": "(i)ryou(hoken)",
    "kstroke": 17,
    "kmeaning": "treat",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "療法（りょうほう）",
        "remedy, medical treatment"
      ],
      [
        "療養中（りょうようちゅう）",
        "under medical care"
      ],
      [
        "療養所（りょうようじょ）",
        "sanatorium"
      ],
      [
        "医療（いりょう）",
        "medical care, medical treatment"
      ],
      [
        "診療する（しんりょうする）",
        "examine, diagnose, treat"
      ],
      [
        "治療する（ちりょうする）",
        "treat, cure"
      ],
      [
        "療養する（りょうようする）",
        "recuperate, convalesce"
      ]
    ],
    "radical": "⽧",
    "rad_order": 131,
    "rad_stroke": 5,
    "rad_name_ja": "やまいだれ",
    "rad_name": "yamaidare",
    "rad_meaning": "sickness",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "涙",
    "kname": "namida",
    "kstroke": 10,
    "kmeaning": "tear",
    "kgrade": "n/a",
    "kunyomi_ja": "なみだ",
    "kunyomi": "namida",
    "onyomi_ja": "ルイ",
    "onyomi": "rui",
    "examples": [
      [
        "涙腺（るいせん）",
        "tear gland"
      ],
      [
        "感涙（かんるい）",
        "tears of gratitude"
      ],
      [
        "催涙ガス（さいるいガス）",
        "tear gas"
      ],
      [
        "涙（なみだ）",
        "tear"
      ],
      [
        "涙声（なみだごえ）",
        "tearful voice"
      ],
      [
        "嬉し涙（うれしなみだ）",
        "happy tears, tears of joy"
      ],
      [
        "悔し涙（くやしなみだ）",
        "tears of chagrin"
      ],
      [
        "涙ぐむ（なみだぐむ）",
        "be moved to tears"
      ],
      [
        "涙ぐましい（なみだぐましい）",
        "touching, pathetic"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "零",
    "kname": "rei(do)",
    "kstroke": 13,
    "kmeaning": "zero",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "レイ",
    "onyomi": "rei",
    "examples": [
      [
        "零（れい）",
        "zero, nought"
      ],
      [
        "零度（れいど）",
        "zero degree"
      ],
      [
        "零下（れいか）",
        "below zero"
      ],
      [
        "零時（れいじ）",
        "twelve o'clock"
      ],
      [
        "零点（れいてん）",
        "zero point, no marks"
      ],
      [
        "零細企業（れいさいきぎょう）",
        "small business"
      ]
    ],
    "radical": "⻗",
    "rad_order": 211,
    "rad_stroke": 8,
    "rad_name_ja": "あめかんむり",
    "rad_name": "amekanmuri",
    "rad_meaning": "rain",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "齢",
    "kname": "(rou)rei",
    "kstroke": 17,
    "kmeaning": "age",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "レイ",
    "onyomi": "rei",
    "examples": [
      [
        "年齢（ねんれい）",
        "age, years"
      ],
      [
        "樹齢（じゅれい）",
        "age of a tree"
      ],
      [
        "老齢（ろうれい）",
        "advanced age, senility"
      ],
      [
        "月齢（げつれい）",
        "age of the moon"
      ],
      [
        "高齢者（こうれいしゃ）",
        "old person, senior citizen"
      ],
      [
        "学齢期（がくれいき）",
        "school age"
      ]
    ],
    "radical": "⻭",
    "rad_order": 235,
    "rad_stroke": 12,
    "rad_name_ja": "は",
    "rad_name": "ha",
    "rad_meaning": "tooth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "授",
    "kname": "sazu(karu)",
    "kstroke": 11,
    "kmeaning": "confer",
    "kgrade": 5,
    "kunyomi_ja": "さず、 さずける、さずかる",
    "kunyomi": "sazu, sazukeru, sazukaru",
    "onyomi_ja": "ジュ",
    "onyomi": "ju",
    "examples": [
      [
        "授業（じゅぎょう）",
        "lesson, class"
      ],
      [
        "授業料（じゅぎょうりょう）",
        "school fees, tuition"
      ],
      [
        "授業中（じゅぎょうちゅう）",
        "while in class, during a class"
      ],
      [
        "授与する（じゅよする）",
        "award"
      ],
      [
        "教授（きょうじゅ）",
        "professor"
      ],
      [
        "授ける（さずける）",
        "grant [v.t.]"
      ],
      [
        "授かる（さずかる）",
        "be granted [v.i.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "湾",
    "kname": "(mekishiko)wan",
    "kstroke": 12,
    "kmeaning": "bay",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ワン",
    "onyomi": "wan",
    "examples": [
      [
        "湾（わん）",
        "bay, gulf, inlet"
      ],
      [
        "湾内（わんない）",
        "inside the bay"
      ],
      [
        "湾口（わんこう）",
        "entrance or mouth of a bay"
      ],
      [
        "台湾（たいわん）",
        "Taiwan"
      ],
      [
        "港湾局（こうわんきょく）",
        "Port and Harbor Authority"
      ],
      [
        "東京湾（とうきょうわん）",
        "Tokyo Bay"
      ],
      [
        "湾曲する（わんきょくする）",
        "curve [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "腕",
    "kname": "ude",
    "kstroke": 12,
    "kmeaning": "arm",
    "kgrade": "n/a",
    "kunyomi_ja": "うで",
    "kunyomi": "ude",
    "onyomi_ja": "ワン",
    "onyomi": "wan",
    "examples": [
      [
        "腕章（わんしょう）",
        "arm band"
      ],
      [
        "腕力（わんりょく）",
        "physical strength, brute strength"
      ],
      [
        "上腕（じょうわん）",
        "upper arm"
      ],
      [
        "手腕（しゅわん）",
        "ability"
      ],
      [
        "左腕投手（さわんとうしゅ）",
        "left-handed baseball pitcher"
      ],
      [
        "腕白な（わんぱくな）",
        "naughty, mischievous"
      ],
      [
        "敏腕な（びんわんな）",
        "able, capable, competent"
      ],
      [
        "腕（うで）",
        "arm, skill"
      ],
      [
        "腕前（うでまえ）",
        "ability, skill, facility"
      ],
      [
        "腕利き（うできき）",
        "skillful"
      ],
      [
        "腕時計（うでどけい）",
        "wristwatch"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "離",
    "kname": "ri-hana(reru)",
    "kstroke": 18,
    "kmeaning": "separate, leave, keep apart",
    "kgrade": "n/a",
    "kunyomi_ja": "はなれる、はなす、はな",
    "kunyomi": "hanareru, hanasu, hana",
    "onyomi_ja": "リ",
    "onyomi": "ri",
    "examples": [
      [
        "離島（りとう）",
        "outlying island"
      ],
      [
        "距離（きょり）",
        "distance, range"
      ],
      [
        "支離滅裂な（しりめつれつな）",
        "incoherent, illogical"
      ],
      [
        "離婚する（りこんする）",
        "divorce"
      ],
      [
        "離陸する（りりくする）",
        "take off (e.g. airplane)"
      ],
      [
        "隔離する（かくりする）",
        "isolate, segregate"
      ],
      [
        "分離する（ぶんりする）",
        "separate"
      ],
      [
        "剥離する（はくりする）",
        "peel off"
      ],
      [
        "離す（はなす）",
        "part, divide, separate [v.t.]"
      ],
      [
        "離れる（はなれる）",
        "leave, separate [v.i.]"
      ],
      [
        "離れ離れ（はなればなれ）",
        "scattered, separated [n.]"
      ]
    ],
    "radical": "⾫",
    "rad_order": 209,
    "rad_stroke": 8,
    "rad_name_ja": "ふるとり",
    "rad_name": "furutori",
    "rad_meaning": "small bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "々",
    "kname": "(yama)yama",
    "kstroke": 3,
    "kmeaning": "symbol of repetition",
    "kgrade": "n/a",
    "kunyomi_ja": "n/a",
    "kunyomi": "n/a",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "山々（やまやま）",
        "mountains"
      ],
      [
        "人々（ひとびと）",
        "people"
      ],
      [
        "国々（くにぐに）",
        "countries"
      ],
      [
        "色々（いろいろ）",
        "various"
      ],
      [
        "少々（しょうしょう）",
        "few, a little, somewhat"
      ]
    ],
    "radical": "々",
    "rad_order": -1,
    "rad_stroke": "nan.0",
    "rad_name_ja": "n/a",
    "rad_name": "n/a",
    "rad_meaning": "n/a",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "脱",
    "kname": "nu(geru)",
    "kstroke": 11,
    "kmeaning": "remove, escape from, undress, drop out",
    "kgrade": "n/a",
    "kunyomi_ja": "ぬ、ぬぐ、ぬげる",
    "kunyomi": "nu, nugu, nugeru",
    "onyomi_ja": "ダツ",
    "onyomi": "datsu",
    "examples": [
      [
        "脱衣所（だついじょ）",
        "dressing room"
      ],
      [
        "脱線する（だっせんする）",
        "digress, derail [v.i.]"
      ],
      [
        "脱落する（だつらくする）",
        "be omitted, drop out [v.i.]"
      ],
      [
        "脱税する（だつぜいする）",
        "evade taxes"
      ],
      [
        "脱出する（だっしゅつする）",
        "escape [v.i.]"
      ],
      [
        "脱色する（だっしょくする）",
        "bleach, decolorize"
      ],
      [
        "脱獄する（だつごくする）",
        "escape prison"
      ],
      [
        "脱帽する（だつぼうする）",
        "take one's hat off, bow to"
      ],
      [
        "離脱する（りだつする）",
        "withdraw, break away"
      ],
      [
        "脱ぐ（ぬぐ）",
        "take off (clothes, shoes) [v.t.]"
      ],
      [
        "脱げる（ぬげる）",
        "come off (clothes, shoes) [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "較",
    "kname": "(hi)kaku(suru)",
    "kstroke": 13,
    "kmeaning": "compare",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "較差（かくさ）",
        "range [n.]"
      ],
      [
        "比較的（ひかくてき）",
        "comparatively, relatively"
      ],
      [
        "比較する（ひかくする）",
        "compare"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "業",
    "kname": "gyou-waza",
    "kstroke": 13,
    "kmeaning": "work, business, industry",
    "kgrade": 3,
    "kunyomi_ja": "わざ",
    "kunyomi": "waza",
    "onyomi_ja": "ギョウ、ゴウ",
    "onyomi": "gyou, gou",
    "examples": [
      [
        "授業（じゅぎょう）",
        "lesson, class"
      ],
      [
        "授業料（じゅぎょうりょう）",
        "school fees, tuition"
      ],
      [
        "授業中（じゅぎょうちゅう）",
        "while in class, during a class"
      ],
      [
        "職業（しょくぎょう）",
        "occupation"
      ],
      [
        "企業（きぎょう）",
        "enterprise"
      ],
      [
        "従業員（じゅうぎょういん）",
        "employee"
      ],
      [
        "卒業する（そつぎょうする）",
        "graduate"
      ],
      [
        "作業する（さぎょうする）",
        "work"
      ],
      [
        "営業する（えいぎょうする）",
        "be in business"
      ],
      [
        "仕業（しわざ）",
        "handiwork"
      ],
      [
        "人間業（にんげんわざ）",
        "the work of man"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "遅",
    "kname": "oso(i)",
    "kstroke": 12,
    "kmeaning": "slow, late",
    "kgrade": "n/a",
    "kunyomi_ja": "おく、おそ、おくれる、おくらす、おそい、おそく",
    "kunyomi": "oku, oso, okureru, okurasu, osoi, osoku",
    "onyomi_ja": "チ",
    "onyomi": "chi",
    "examples": [
      [
        "遅刻する（ちこくする）",
        "come late"
      ],
      [
        "遅れる（おくれる）",
        "be late [v.i.]"
      ],
      [
        "遅らす（おくらす）",
        "delay [v.t.]"
      ],
      [
        "遅い（おそい）",
        "late, slow"
      ],
      [
        "夜遅く（よるおそく）",
        "late at night"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "思",
    "kname": "shi-omo(u)",
    "kstroke": 9,
    "kmeaning": "think",
    "kgrade": 2,
    "kunyomi_ja": "おも、おもう、おもい",
    "kunyomi": "omo, omou, omoi",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "思考する（しこうする）",
        "think"
      ],
      [
        "意思（いし）",
        "intention"
      ],
      [
        "思想（しそう）",
        "thought, ideas"
      ],
      [
        "不思議な（ふしぎな）",
        "strange, mysterious"
      ],
      [
        "思う（おもう）",
        "feel, think"
      ],
      [
        "思い出す（おもいだす）",
        "recall"
      ],
      [
        "思い出（おもいで）",
        "memories"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "夜",
    "kname": "yoru",
    "kstroke": 8,
    "kmeaning": "night",
    "kgrade": 2,
    "kunyomi_ja": "よ、よる",
    "kunyomi": "yo, yoru",
    "onyomi_ja": "ヤ",
    "onyomi": "ya",
    "examples": [
      [
        "今夜（こんや）",
        "tonight"
      ],
      [
        "深夜（しんや）",
        "midnight"
      ],
      [
        "夜間（やかん）",
        "nighttime"
      ],
      [
        "徹夜する（てつやする）",
        "stay up all night"
      ],
      [
        "夜更かしする（よふかしする）",
        "stay up late"
      ],
      [
        "夜中（よなか）",
        "late at night"
      ],
      [
        "夜明け（よあけ）",
        "dawn"
      ],
      [
        "夜空（よぞら）",
        "night sky"
      ],
      [
        "月夜（つきよ）",
        "moonlit night"
      ],
      [
        "夜（よる）",
        "night"
      ]
    ],
    "radical": "⼣",
    "rad_order": 42,
    "rad_stroke": 3,
    "rad_name_ja": "ゆうべ",
    "rad_name": "yuube",
    "rad_meaning": "evening",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "映",
    "kname": "ei-utsu(ru)",
    "kstroke": 9,
    "kmeaning": "reflect, project",
    "kgrade": 6,
    "kunyomi_ja": "うつ、は、うつる、うつす、はえる",
    "kunyomi": "utsu, ha, utsuru, utsusu, haeru",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "映画（えいが）",
        "movie"
      ],
      [
        "映画館（えいがかん）",
        "movie theater"
      ],
      [
        "反映する（はんえいする）",
        "reflect"
      ],
      [
        "上映する（じょうえいする）",
        "show a movie"
      ],
      [
        "映る（うつる）",
        "be reflected [v.i.]"
      ],
      [
        "映す（うつす）",
        "project [v.t.]"
      ],
      [
        "映える（はえる）",
        "shine, look pretty"
      ],
      [
        "夕映え（ゆうばえ）",
        "sunset glow"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "画",
    "kname": "(ei)ga",
    "kstroke": 8,
    "kmeaning": "picture",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ガ、カク",
    "onyomi": "ga, kaku",
    "examples": [
      [
        "映画（えいが）",
        "movie"
      ],
      [
        "漫画（まんが）",
        "comic"
      ],
      [
        "絵画（かいが）",
        "painting"
      ],
      [
        "画面（がめん）",
        "screen"
      ],
      [
        "計画する（けいかくする）",
        "plan"
      ],
      [
        "企画する（きかくする）",
        "plan (e.g. project)"
      ],
      [
        "画数（かくすう）",
        "stroke count"
      ],
      [
        "画期的（かっきてき）",
        "epoch-making"
      ]
    ],
    "radical": "⼐",
    "rad_order": 21,
    "rad_stroke": 2,
    "rad_name_ja": "かんにょう",
    "rad_name": "kannyou",
    "rad_meaning": "container, open box",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "中",
    "kname": "chuu-naka",
    "kstroke": 4,
    "kmeaning": "middle, in",
    "kgrade": 1,
    "kunyomi_ja": "なか",
    "kunyomi": "naka",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "中国（ちゅうごく）",
        "China"
      ],
      [
        "中年（ちゅうねん）",
        "middle-age"
      ],
      [
        "中学校（ちゅうがっこう）",
        "junior high school"
      ],
      [
        "中華料理（ちゅうかりょうり）",
        "Chinese food"
      ],
      [
        "途中（とちゅう）",
        "on the way"
      ],
      [
        "工事中（こうじちゅう）",
        "under construction"
      ],
      [
        "中（なか）",
        "inside"
      ],
      [
        "中村（なかむら）",
        "Nakamura (surname)"
      ],
      [
        "中川（なかがわ）",
        "Nakagawa (surname)"
      ],
      [
        "田中（たなか）",
        "Tanaka (surname)"
      ],
      [
        "*体中（からだじゅう）",
        "throughout the body"
      ],
      [
        "*今年中 に（ことしじゅうに）",
        "within this year"
      ]
    ],
    "radical": "⼁",
    "rad_order": 2,
    "rad_stroke": 1,
    "rad_name_ja": "たてぼう",
    "rad_name": "tatebou",
    "rad_meaning": "vertical stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "出",
    "kname": "de(ru)",
    "kstroke": 5,
    "kmeaning": "go out, put out",
    "kgrade": 1,
    "kunyomi_ja": "で、だ、でる、だす",
    "kunyomi": "de, da, deru, dasu",
    "onyomi_ja": "シュツ、スイ",
    "onyomi": "shutsu, sui",
    "examples": [
      [
        "出身（しゅっしん）",
        "birth place, alma mater"
      ],
      [
        "出版社（しゅっぱんしゃ）",
        "publisher"
      ],
      [
        "出席する（しゅっせきする）",
        "attend"
      ],
      [
        "出発する（しゅっぱつする）",
        "depart"
      ],
      [
        "輸出する（ゆしゅつする）",
        "export"
      ],
      [
        "外出する（がいしゅつする）",
        "go out"
      ],
      [
        "出納（すいとう）",
        "receipts and expenditure"
      ],
      [
        "出る（でる）",
        "come out [v.i.]"
      ],
      [
        "出かける（でかける）",
        "go out"
      ],
      [
        "出す（だす）",
        "put out, send [v.t.]"
      ],
      [
        "引き出し（ひきだし）",
        "drawer"
      ]
    ],
    "radical": "⼐",
    "rad_order": 21,
    "rad_stroke": 2,
    "rad_name_ja": "かんにょう",
    "rad_name": "kannyou",
    "rad_meaning": "container, open box",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "電",
    "kname": "den(wa)",
    "kstroke": 13,
    "kmeaning": "electricity",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "デン",
    "onyomi": "den",
    "examples": [
      [
        "電話する（でんわする）",
        "make a telephone call"
      ],
      [
        "発電する（はつでんする）",
        "generate power"
      ],
      [
        "電話（でんわ）",
        "telephone"
      ],
      [
        "電話番号（でんわばんごう）",
        "phone number"
      ],
      [
        "電気（でんき）",
        "electricity"
      ],
      [
        "電気屋（でんきや）",
        "electric appliance store"
      ],
      [
        "電車（でんしゃ）",
        "train"
      ],
      [
        "電子レンジ（でんしレンジ）",
        "microwave oven"
      ],
      [
        "終電（しゅうでん）",
        "last train"
      ],
      [
        "停電（ていでん）",
        "loss of electricity, blackout"
      ]
    ],
    "radical": "⻗",
    "rad_order": 211,
    "rad_stroke": 8,
    "rad_name_ja": "あめかんむり",
    "rad_name": "amekanmuri",
    "rad_meaning": "rain",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "会",
    "kname": "kai-a(u)",
    "kstroke": 6,
    "kmeaning": "meet, society",
    "kgrade": 2,
    "kunyomi_ja": "あ、あう",
    "kunyomi": "a, au",
    "onyomi_ja": "カイ、エ",
    "onyomi": "kai, e",
    "examples": [
      [
        "会話（かいわ）",
        "conversation"
      ],
      [
        "会議（かいぎ）",
        "conference"
      ],
      [
        "会社（かいしゃ）",
        "company"
      ],
      [
        "会社員（かいしゃいん）",
        "company employee"
      ],
      [
        "会計士（かいけいし）",
        "accountant"
      ],
      [
        "忘年会（ぼうねんかい）",
        "year-end party"
      ],
      [
        "国会（こっかい）",
        "parliament"
      ],
      [
        "都会（とかい）",
        "city"
      ],
      [
        "再会する（さいかいする）",
        "meet again"
      ],
      [
        "会釈する（えしゃくする）",
        "nod in greeting"
      ],
      [
        "会う（あう）",
        "meet"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "物",
    "kname": "butsu-mono",
    "kstroke": 8,
    "kmeaning": "thing",
    "kgrade": 3,
    "kunyomi_ja": "もの",
    "kunyomi": "mono",
    "onyomi_ja": "ブツ、モツ",
    "onyomi": "butsu, motsu",
    "examples": [
      [
        "動物園（どうぶつえん）",
        "zoo"
      ],
      [
        "物価（ぶっか）",
        "cost of living"
      ],
      [
        "物理（ぶつり）",
        "physics"
      ],
      [
        "見物する（けんぶつする）",
        "go sightseeing"
      ],
      [
        "荷物（にもつ）",
        "luggage"
      ],
      [
        "物（もの）",
        "thing"
      ],
      [
        "建物（たてもの）",
        "building"
      ],
      [
        "食べ物（たべもの）",
        "food"
      ],
      [
        "買い物（かいもの）",
        "shopping"
      ],
      [
        "乗り物（のりもの）",
        "vehicle"
      ],
      [
        "着物（きもの）",
        "kimono"
      ],
      [
        "贈り物（おくりもの）",
        "gift"
      ]
    ],
    "radical": "",
    "rad_order": 117,
    "rad_stroke": 4,
    "rad_name_ja": "うしへん",
    "rad_name": "ushihen",
    "rad_meaning": "cow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "返",
    "kname": "hen-kae(su)",
    "kstroke": 7,
    "kmeaning": "return",
    "kgrade": 3,
    "kunyomi_ja": "かえ、かえす、かえる、かえり",
    "kunyomi": "kae, kaesu, kaeru, kaeri",
    "onyomi_ja": "ヘン",
    "onyomi": "hen",
    "examples": [
      [
        "返事する（へんじする）",
        "reply"
      ],
      [
        "返品する（へんぴんする）",
        "return goods"
      ],
      [
        "返却する（へんきゃくする）",
        "return something"
      ],
      [
        "返送する（へんそうする）",
        "send back"
      ],
      [
        "返答する（へんとうする）",
        "reply"
      ],
      [
        "返す（かえす）",
        "return something"
      ],
      [
        "生き返る（いきかえる）",
        "revive"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "簡",
    "kname": "kan(tan)",
    "kstroke": 18,
    "kmeaning": "simple, brief",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "簡単な（かんたんな）",
        "simple"
      ],
      [
        "簡単過ぎる（かんたんすぎる）",
        "too simple"
      ],
      [
        "簡素な（かんそな）",
        "plain"
      ],
      [
        "簡略な（かんりゃくな）",
        "simple"
      ],
      [
        "簡潔な（かんけつな）　",
        "brief"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "単",
    "kname": "tan(i)",
    "kstroke": 9,
    "kmeaning": "single",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "簡単な（かんたんな）",
        "simple"
      ],
      [
        "単純な（たんじゅんな）",
        "simple"
      ],
      [
        "単語（たんご）",
        "word"
      ],
      [
        "単独（たんどく）",
        "solo"
      ],
      [
        "単位（たんい）",
        "unit"
      ],
      [
        "単に（たんに）",
        "merely"
      ]
    ],
    "radical": "⺍",
    "rad_order": 75,
    "rad_stroke": 3,
    "rad_name_ja": "つ",
    "rad_name": "tsu",
    "rad_meaning": "Katakana Tsu",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "直",
    "kname": "choku-nao(ru)",
    "kstroke": 8,
    "kmeaning": "straight, fix, repair",
    "kgrade": 2,
    "kunyomi_ja": "ただ、ただす、なお、なおる、なおす",
    "kunyomi": "tada, tadasu, nao, naoru, naosu",
    "onyomi_ja": "チョク、ジキ、ジカ",
    "onyomi": "choku, jiki, jika",
    "examples": [
      [
        "直接（ちょくせつ）",
        "direct"
      ],
      [
        "直後（ちょくご）",
        "immediately following"
      ],
      [
        "直前（ちょくぜん）",
        "just before"
      ],
      [
        "直感する（ちょっかんする）",
        "gain intuition"
      ],
      [
        "直結する（ちょっけつする）",
        "connect directly"
      ],
      [
        "直行便（ちょっこうびん）",
        "direct (nonstop) flight"
      ],
      [
        "正直な（しょうじきな）",
        "honest"
      ],
      [
        "直に（じきに/じかに）",
        "directly"
      ],
      [
        "直す（ただす/なおす）",
        "cure, fix [v.t.]"
      ],
      [
        "書き直す（かきなおす）",
        "rewrite"
      ],
      [
        "直る（なおる）",
        "be cured, be fixed [v.i.]"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "習",
    "kname": "shuu-nara(u)",
    "kstroke": 11,
    "kmeaning": "learn, custom",
    "kgrade": 3,
    "kunyomi_ja": "なら、ならう、ならい",
    "kunyomi": "nara, narau, narai",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "練習する（れんしゅうする）",
        "practice"
      ],
      [
        "予習する（よしゅうする）",
        "prepare for a lesson"
      ],
      [
        "復習する（ふくしゅうする）",
        "review a lesson"
      ],
      [
        "学習する（がくしゅうする）",
        "learn"
      ],
      [
        "習慣（しゅうかん）",
        "custom, habit"
      ],
      [
        "風習（ふうしゅう）",
        "custom"
      ],
      [
        "習う（ならう）",
        "learn"
      ],
      [
        "見習い（みならい）",
        "apprentice"
      ],
      [
        "習わし（ならわし）",
        "customary practice"
      ]
    ],
    "radical": "⽻",
    "rad_order": 161,
    "rad_stroke": 6,
    "rad_name_ja": "はね",
    "rad_name": "hane",
    "rad_meaning": "feather, wing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "困",
    "kname": "koma(ru)",
    "kstroke": 7,
    "kmeaning": "be in trouble",
    "kgrade": 6,
    "kunyomi_ja": "こま、こまる",
    "kunyomi": "koma, komaru",
    "onyomi_ja": "コン",
    "onyomi": "kon",
    "examples": [
      [
        "困惑する（こんわくする）",
        "be bewildered"
      ],
      [
        "困難（こんなん）",
        "difficulty"
      ],
      [
        "貧困（ひんこん）",
        "poverty"
      ],
      [
        "困る（こまる）",
        "have trouble"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "右",
    "kname": "migi",
    "kstroke": 5,
    "kmeaning": "right",
    "kgrade": 1,
    "kunyomi_ja": "みぎ",
    "kunyomi": "migi",
    "onyomi_ja": "ウ、ユウ",
    "onyomi": "u, yuu",
    "examples": [
      [
        "右折する（うせつする）",
        "turn to the right"
      ],
      [
        "右派（うは）",
        "(political) right wing"
      ],
      [
        "左右する（さゆうする）",
        "influence, control, command"
      ],
      [
        "右（みぎ）",
        "right"
      ],
      [
        "右手（みぎて）",
        "right hand, right side"
      ],
      [
        "右側（みぎがわ）",
        "right side"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "持",
    "kname": "ji-mo(tsu)",
    "kstroke": 9,
    "kmeaning": "hold",
    "kgrade": 3,
    "kunyomi_ja": "も、もつ、もち",
    "kunyomi": "mo, motsu, mochi",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "持参する（じさんする）",
        "bring"
      ],
      [
        "支持する（しじする）",
        "support [v.t.]"
      ],
      [
        "維持する（いじする）",
        "maintain"
      ],
      [
        "持つ（もつ）",
        "hold"
      ],
      [
        "持って行く（もっていく）",
        "take"
      ],
      [
        "持って来る（もってくる）",
        "bring"
      ],
      [
        "金持ち（かねもち）",
        "rich person"
      ],
      [
        "気持ち（きもち）",
        "feeling"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "調",
    "kname": "shira(beru)",
    "kstroke": 15,
    "kmeaning": "tone, investigate, prepare",
    "kgrade": 3,
    "kunyomi_ja": "しら、ととの、しらべる、ととのえる、ととのう",
    "kunyomi": "shira, totono, shiraberu, totonoeru, totonou",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "調子（ちょうし）",
        "tone, mood, condition"
      ],
      [
        "体調（たいちょう）",
        "physical condition"
      ],
      [
        "好調な（こうちょうな）",
        "favorable"
      ],
      [
        "順調な（じゅんちょうな）",
        "doing well"
      ],
      [
        "調査する（ちょうさする）",
        "investigate"
      ],
      [
        "調節する（ちょうせつする）",
        "adjust"
      ],
      [
        "強調する（きょうちょうする）",
        "emphasize"
      ],
      [
        "協調する（きょうちょうする）",
        "co-operate"
      ],
      [
        "調べる（しらべる）",
        "check [v.t.]"
      ],
      [
        "調える（ととのえる）",
        "put in order [v.t.]"
      ],
      [
        "調う（ととのう）",
        "be prepared [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "引",
    "kname": "in-hi(ku)",
    "kstroke": 4,
    "kmeaning": "draw, pull",
    "kgrade": 2,
    "kunyomi_ja": "ひ、ひく",
    "kunyomi": "hi, hiku",
    "onyomi_ja": "イン",
    "onyomi": "in",
    "examples": [
      [
        "引力（いんりょく）",
        "gravity"
      ],
      [
        "強引な（ごういんな）",
        "pushy"
      ],
      [
        "引用する（いんようする）",
        "quote"
      ],
      [
        "引退する（いんたいする）",
        "retire"
      ],
      [
        "引く（ひく）",
        "pull"
      ],
      [
        "引き出し（ひきだし）",
        "drawer"
      ],
      [
        "引っ越し（ひっこし）",
        "moving (e.g. residence)"
      ]
    ],
    "radical": "",
    "rad_order": 68,
    "rad_stroke": 3,
    "rad_name_ja": "ゆみへん",
    "rad_name": "yumihen",
    "rad_meaning": "bow（in archery）",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "聞",
    "kname": "bun-ki(ku)",
    "kstroke": 14,
    "kmeaning": "hear, listen, ask",
    "kgrade": 2,
    "kunyomi_ja": "き、きく、きこえる",
    "kunyomi": "ki, kiku, kikoeru",
    "onyomi_ja": "ブン、モン",
    "onyomi": "bun, mon",
    "examples": [
      [
        "新聞（しんぶん）",
        "newspaper"
      ],
      [
        "前代未聞（ぜんだいみもん）",
        "unheard-of"
      ],
      [
        "聞く（きく）",
        "listen, hear, ask a question [v.t.]"
      ],
      [
        "聞こえる（きこえる）",
        "can be heard, hear [v.i.]"
      ],
      [
        "聞き手（ききて）",
        "listener"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "野",
    "kname": "ya-no",
    "kstroke": 11,
    "kmeaning": "field",
    "kgrade": 2,
    "kunyomi_ja": "の",
    "kunyomi": "no",
    "onyomi_ja": "ヤ",
    "onyomi": "ya",
    "examples": [
      [
        "野球（やきゅう）",
        "baseball"
      ],
      [
        "野菜（やさい）",
        "vegetable"
      ],
      [
        "野党（やとう）",
        "opposition party"
      ],
      [
        "平野（へいや）",
        "plain"
      ],
      [
        "分野（ぶんや）",
        "field"
      ],
      [
        "視野（しや）",
        "field of vision"
      ],
      [
        "野原（のはら）",
        "field"
      ],
      [
        "野良犬（のらいぬ）",
        "stray dog"
      ]
    ],
    "radical": "",
    "rad_order": 201,
    "rad_stroke": 7,
    "rad_name_ja": "さとへん",
    "rad_name": "satohen",
    "rad_meaning": "village, (3.93 km)",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "村",
    "kname": "son-mura",
    "kstroke": 7,
    "kmeaning": "village",
    "kgrade": 1,
    "kunyomi_ja": "むら",
    "kunyomi": "mura",
    "onyomi_ja": "ソン",
    "onyomi": "son",
    "examples": [
      [
        "農村（のうそん）",
        "farm village"
      ],
      [
        "漁村（ぎょそん）",
        "fishing village"
      ],
      [
        "村落（そんらく）",
        "village"
      ],
      [
        "村（むら）",
        "village"
      ],
      [
        "村人（むらびと）",
        "villager"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "背",
    "kname": "somu(ku)",
    "kstroke": 9,
    "kmeaning": "back",
    "kgrade": 6,
    "kunyomi_ja": "せ、せい、そむく、そむける",
    "kunyomi": "se, sei, somuku, somukeru",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "背後（はいご）",
        "back"
      ],
      [
        "背景（はいけい）",
        "background"
      ],
      [
        "背（せ/せい）",
        "height (of body)"
      ],
      [
        "背広（せびろ）",
        "business suit"
      ],
      [
        "背中（せなか）",
        "back (of body)"
      ],
      [
        "背負う（せおう）",
        "carry on back or shoulder"
      ],
      [
        "背比べ（せいくらべ）",
        "comparing heights"
      ],
      [
        "背く（そむく）",
        "run counter to [v.i.]"
      ],
      [
        "背ける（そむける）",
        "turn one's face away [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "高",
    "kname": "taka(i)",
    "kstroke": 10,
    "kmeaning": "high",
    "kgrade": 2,
    "kunyomi_ja": "たか、たかい、たかさ、たかまる、たかぶる、たかめる",
    "kunyomi": "taka, takai, takasa, takamaru, takaburu, takameru",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "高校生（こうこうせい）",
        "senior high school student"
      ],
      [
        "高速道路（こうそくどうろ）",
        "highway"
      ],
      [
        "高熱（こうねつ）",
        "high fever"
      ],
      [
        "高価な（こうかな）",
        "expensive"
      ],
      [
        "最高（さいこう）",
        "supreme"
      ],
      [
        "高い（たかい）",
        "tall, high, expensive"
      ],
      [
        "高まる（たかまる）",
        "rise [v.i.]"
      ],
      [
        "高める（たかめる）",
        "raise, boost [v.t.]"
      ],
      [
        "円高（えんだか）",
        "strong yen"
      ],
      [
        "売上高（うりあげだか）",
        "sales"
      ]
    ],
    "radical": "⾼",
    "rad_order": 227,
    "rad_stroke": 10,
    "rad_name_ja": "たかい",
    "rad_name": "takai",
    "rad_meaning": "high",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "低",
    "kname": "hiku(i)",
    "kstroke": 7,
    "kmeaning": "low",
    "kgrade": 4,
    "kunyomi_ja": "ひく、ひくい、ひくまる、ひくめる",
    "kunyomi": "hiku, hikui, hikumaru, hikumeru",
    "onyomi_ja": "テイ",
    "onyomi": "tei",
    "examples": [
      [
        "低下する（ていかする）",
        "decline [v.i.]"
      ],
      [
        "低温（ていおん）",
        "low temperature"
      ],
      [
        "低気圧（ていきあつ）",
        "low (atmospheric) pressure"
      ],
      [
        "最低（さいてい）",
        "lowest, worst"
      ],
      [
        "低い（ひくい）",
        "low"
      ],
      [
        "低まる（ひくまる）",
        "lower [v.i.]"
      ],
      [
        "低める（ひくめる）",
        "lower [v.t.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "長",
    "kname": "chou-naga(i)",
    "kstroke": 8,
    "kmeaning": "long, chief",
    "kgrade": 2,
    "kunyomi_ja": "なが、ながい",
    "kunyomi": "naga, nagai",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "身長（しんちょう）",
        "height (of body)"
      ],
      [
        "社長（しゃちょう）",
        "company president"
      ],
      [
        "市長（しちょう）",
        "mayor"
      ],
      [
        "会長（かいちょう）",
        "president (of a society)"
      ],
      [
        "長期（ちょうき）",
        "long time period"
      ],
      [
        "長時間（ちょうじかん）",
        "long-term, long-range"
      ],
      [
        "長男（ちょうなん）",
        "eldest son"
      ],
      [
        "長女（ちょうじょ）",
        "eldest daughter"
      ],
      [
        "長所（ちょうしょ）",
        "strong point"
      ],
      [
        "成長する（せいちょうする）",
        "grow"
      ],
      [
        "長い（ながい）",
        "long"
      ]
    ],
    "radical": "⻑",
    "rad_order": 207,
    "rad_stroke": 8,
    "rad_name_ja": "ながい",
    "rad_name": "nagai",
    "rad_meaning": "long",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "左",
    "kname": "hidari",
    "kstroke": 5,
    "kmeaning": "left",
    "kgrade": 1,
    "kunyomi_ja": "ひだり",
    "kunyomi": "hidari",
    "onyomi_ja": "サ",
    "onyomi": "sa",
    "examples": [
      [
        "左右する（さゆうする）",
        "influence, control, command"
      ],
      [
        "左派（さは）",
        "(political) left wing"
      ],
      [
        "左（ひだり）",
        "left"
      ],
      [
        "左側（ひだりがわ）",
        "left side"
      ],
      [
        "左向き（ひだりむき）",
        "left facing"
      ]
    ],
    "radical": "⼯",
    "rad_order": 57,
    "rad_stroke": 3,
    "rad_name_ja": "たくみ",
    "rad_name": "takumi",
    "rad_meaning": "work, carpenter, skill",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "短",
    "kname": "mijika(i)",
    "kstroke": 12,
    "kmeaning": "short",
    "kgrade": 3,
    "kunyomi_ja": "みじか、みじかい",
    "kunyomi": "mijika, mijikai",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "短歌（たんか）",
        "Japanese poetic form"
      ],
      [
        "短気な（たんきな）",
        "quick tempered"
      ],
      [
        "短期間（たんきかん）",
        "short term"
      ],
      [
        "短所（たんしょ）",
        "weak point"
      ],
      [
        "短い（みじかい）",
        "short"
      ]
    ],
    "radical": "",
    "rad_order": 141,
    "rad_stroke": 5,
    "rad_name_ja": "やへん",
    "rad_name": "yahen",
    "rad_meaning": "arrow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "着",
    "kname": "chaku-ki(ru)",
    "kstroke": 12,
    "kmeaning": "put on, arrive, stick",
    "kgrade": 3,
    "kunyomi_ja": "き、つ、きる、きせる、つく",
    "kunyomi": "ki, tsu, kiru, kiseru, tsuku",
    "onyomi_ja": "チャク、ジャク",
    "onyomi": "chaku, jaku",
    "examples": [
      [
        "到着する（とうちゃくする）",
        "arrive"
      ],
      [
        "着席する（ちゃくせきする）",
        "be seated"
      ],
      [
        "着実な（ちゃくじつな）",
        "steady"
      ],
      [
        "着る（きる）",
        "wear [v.i.]"
      ],
      [
        "着せる（きせる）",
        "dress someone [v.t.]"
      ],
      [
        "着物（きもの）",
        "kimono"
      ],
      [
        "着替える（きがえる）",
        "change one's clothes"
      ],
      [
        "上着（うわぎ）",
        "jacket"
      ],
      [
        "水着（みずぎ）",
        "bathing suit"
      ],
      [
        "着く（つく）",
        "arrive"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "楽",
    "kname": "tano(shii)",
    "kstroke": 13,
    "kmeaning": "pleasure, comfortable, music",
    "kgrade": 2,
    "kunyomi_ja": "たの、たのしむ、たのしい、たのしみ",
    "kunyomi": "tano, tanoshimu, tanoshii, tanoshimi",
    "onyomi_ja": "ガク、ラク",
    "onyomi": "gaku, raku",
    "examples": [
      [
        "楽器（がっき）",
        "musical instrument"
      ],
      [
        "音楽（おんがく）",
        "music"
      ],
      [
        "楽な（らくな）",
        "comfortable"
      ],
      [
        "楽園（らくえん）",
        "paradise"
      ],
      [
        "楽観する（らっかんする）",
        "be optimistic"
      ],
      [
        "楽観的な（らっかんてきな）",
        "optimistic"
      ],
      [
        "楽しい（たのしい）",
        "fun"
      ],
      [
        "楽しみ（たのしみ）",
        "enjoyment"
      ],
      [
        "楽しむ（たのしむ）",
        "enjoy oneself"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "川",
    "kname": "sen-kawa",
    "kstroke": 3,
    "kmeaning": "river",
    "kgrade": 1,
    "kunyomi_ja": "かわ",
    "kunyomi": "kawa",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "河川（かせん）",
        "rivers"
      ],
      [
        "川（かわ）",
        "river"
      ],
      [
        "川上（かわかみ）",
        "upper reaches of a river"
      ],
      [
        "川下（かわしも）",
        "downstream"
      ],
      [
        "江戸川（えどがわ）",
        "Edo River"
      ],
      [
        "小川（おがわ）",
        "small stream, brook"
      ]
    ],
    "radical": "川",
    "rad_order": 56,
    "rad_stroke": 3,
    "rad_name_ja": "さんぼんがわ",
    "rad_name": "sanbongawa",
    "rad_meaning": "river",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "質",
    "kname": "shitsu(mon)",
    "kstroke": 15,
    "kmeaning": "quality, matter",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シツ、シチ、チ",
    "onyomi": "shitsu, shichi, chi",
    "examples": [
      [
        "質問する（しつもんする）",
        "inquire"
      ],
      [
        "本質（ほんしつ）",
        "essence"
      ],
      [
        "体質（たいしつ）",
        "(physical) constitution"
      ],
      [
        "性質（せいしつ）",
        "nature, personality"
      ],
      [
        "素質（そしつ）",
        "qualities"
      ],
      [
        "特質（とくしつ）",
        "characteristic"
      ],
      [
        "質屋（しちや）",
        "pawnshop"
      ],
      [
        "人質（ひとじち）",
        "hostage"
      ],
      [
        "質素な（しっそな）",
        "simple"
      ],
      [
        "言質を取る（げんちをとる）",
        "keep someone to a pledge"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "問",
    "kname": "to(u)",
    "kstroke": 11,
    "kmeaning": "question",
    "kgrade": 3,
    "kunyomi_ja": "と、とう、とい、とん",
    "kunyomi": "to, tou, toi, ton",
    "onyomi_ja": "モン",
    "onyomi": "mon",
    "examples": [
      [
        "質問する（しつもんする）",
        "inquire"
      ],
      [
        "訪問する（ほうもんする）",
        "visit"
      ],
      [
        "問題（もんだい）",
        "problem, question"
      ],
      [
        "問い合わせる（といあわせる）",
        "seek information, inquire"
      ],
      [
        "問う（とう）",
        "ask a question"
      ],
      [
        "問屋（とんや）",
        "wholesale store"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "以",
    "kname": "i(nai)",
    "kstroke": 5,
    "kmeaning": "to the ... of, by means of",
    "kgrade": 4,
    "kunyomi_ja": "も、もって",
    "kunyomi": "mo, motte",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "以上（いじょう）",
        "more than"
      ],
      [
        "以下（いか）",
        "less than"
      ],
      [
        "以来（いらい）",
        "since"
      ],
      [
        "以外（いがい）",
        "except"
      ],
      [
        "以内（いない）",
        "within, less than"
      ],
      [
        "以降（いこう）",
        "hereafter, thereafter"
      ],
      [
        "以心伝心（いしんでんしん）",
        "tacit understanding"
      ],
      [
        "以って（もって）",
        "with, by means of"
      ]
    ],
    "radical": "⼈",
    "rad_order": 10,
    "rad_stroke": 2,
    "rad_name_ja": "ひと",
    "rad_name": "hito",
    "rad_meaning": "person",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "多",
    "kname": "ta-oo(i)",
    "kstroke": 6,
    "kmeaning": "many",
    "kgrade": 2,
    "kunyomi_ja": "おお、おおい、おおく",
    "kunyomi": "oo, ooi, ooku",
    "onyomi_ja": "タ",
    "onyomi": "ta",
    "examples": [
      [
        "多分（たぶん）",
        "perhaps"
      ],
      [
        "多量（たりょう）",
        "large quantity"
      ],
      [
        "多少（たしょう）",
        "more or less"
      ],
      [
        "多目的（たもくてき）",
        "multipurpose"
      ],
      [
        "多い（おおい）",
        "many"
      ],
      [
        "多めに（おおめに）",
        "generously"
      ]
    ],
    "radical": "⼣",
    "rad_order": 42,
    "rad_stroke": 3,
    "rad_name_ja": "ゆうべ",
    "rad_name": "yuube",
    "rad_meaning": "evening",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "若",
    "kname": "waka(i)",
    "kstroke": 8,
    "kmeaning": "young",
    "kgrade": 6,
    "kunyomi_ja": "わかい、わか、も、もし",
    "kunyomi": "wakai, waka, mo, moshi",
    "onyomi_ja": "ジャク、ニャク",
    "onyomi": "jaku, nyaku",
    "examples": [
      [
        "若年（じゃくねん）",
        "youth"
      ],
      [
        "若干（じゃっかん）",
        "some"
      ],
      [
        "若輩（じゃくはい）",
        "young person, novice"
      ],
      [
        "老若男女（ろうにゃくなんにょ）",
        "men and women of all ages"
      ],
      [
        "若い（わかい）",
        "young"
      ],
      [
        "若者（わかもの）",
        "youth"
      ],
      [
        "若手（わかて）",
        "young person"
      ],
      [
        "若しも（もしも）",
        "if"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "太",
    "kname": "futo(i)",
    "kstroke": 4,
    "kmeaning": "great, thick",
    "kgrade": 2,
    "kunyomi_ja": "ふと、ふとる、ふとい、ふとった、ふとさ",
    "kunyomi": "futo, futoru, futoi, futotta, futosa",
    "onyomi_ja": "タイ、タ",
    "onyomi": "tai, ta",
    "examples": [
      [
        "太陽（たいよう）",
        "sun"
      ],
      [
        "太鼓（たいこ）",
        "drum"
      ],
      [
        "太平洋（たいへいよう）",
        "Pacific Ocean"
      ],
      [
        "太古（たいこ）",
        "ancient times"
      ],
      [
        "丸太（まるた）",
        "log"
      ],
      [
        "太る（ふとる）",
        "become fat"
      ],
      [
        "太い（ふとい）",
        "fat, thick"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "色",
    "kname": "shoku-iro",
    "kstroke": 6,
    "kmeaning": "color",
    "kgrade": 2,
    "kunyomi_ja": "いろ",
    "kunyomi": "iro",
    "onyomi_ja": "ショク、シキ",
    "onyomi": "shoku, shiki",
    "examples": [
      [
        "地方色（ちほうしょく）",
        "local color"
      ],
      [
        "景色（けしき）",
        "scenery, landscape"
      ],
      [
        "何色（なにいろ）",
        "what color"
      ],
      [
        "黄色（きいろ）",
        "yellow"
      ],
      [
        "色々（いろいろ）",
        "various"
      ],
      [
        "顔色（かおいろ）",
        "complexion"
      ]
    ],
    "radical": "⾊",
    "rad_order": 173,
    "rad_stroke": 6,
    "rad_name_ja": "いろ",
    "rad_name": "iro",
    "rad_meaning": "color",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "止",
    "kname": "shi-to(maru)",
    "kstroke": 4,
    "kmeaning": "stop",
    "kgrade": 2,
    "kunyomi_ja": "と、や、とめる、とまる、やむ、やめる",
    "kunyomi": "to, ya, tomeru, tomaru, yamu, yameru",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "停止する（ていしする）",
        "stop"
      ],
      [
        "中止する（ちゅうしする）",
        "cancel"
      ],
      [
        "廃止する（はいしする）",
        "abolish"
      ],
      [
        "禁止する（きんしする）",
        "prohibit"
      ],
      [
        "止まる（とまる）",
        "stop [v.i.]"
      ],
      [
        "止める（とめる）",
        "stop [v.t.]"
      ],
      [
        "止む（やむ）",
        "(e.g. rain) stop [v.i.]"
      ],
      [
        "止める（やめる）",
        "stop [v.t.], give up, quit"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "遠",
    "kname": "too(i)",
    "kstroke": 13,
    "kmeaning": "distant, far",
    "kgrade": 2,
    "kunyomi_ja": "とお、とおい、とおく",
    "kunyomi": "too, tooi, tooku",
    "onyomi_ja": "エン、オン",
    "onyomi": "en, on",
    "examples": [
      [
        "遠慮する（えんりょする）",
        "refrain, exercise restraint"
      ],
      [
        "遠足（えんそく）",
        "field trip"
      ],
      [
        "永遠（えいえん）",
        "eternity"
      ],
      [
        "久遠（くおん）",
        "eternity"
      ],
      [
        "遠い（とおい）",
        "far"
      ],
      [
        "遠く（とおく）",
        "far"
      ],
      [
        "遠回りする（とおまわりする）",
        "detour"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "忙",
    "kname": "isoga(shii)",
    "kstroke": 6,
    "kmeaning": "busy",
    "kgrade": "n/a",
    "kunyomi_ja": "いそが、いそがしい",
    "kunyomi": "isoga, isogashii",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "多忙な（たぼうな）",
        "busy"
      ],
      [
        "忙殺される（ぼうさつされる）",
        "be worked to death"
      ],
      [
        "忙しい（いそがしい）",
        "busy"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "借",
    "kname": "ka(riru)",
    "kstroke": 10,
    "kmeaning": "borrow",
    "kgrade": 4,
    "kunyomi_ja": "か、かりる",
    "kunyomi": "ka, kariru",
    "onyomi_ja": "シャク",
    "onyomi": "shaku",
    "examples": [
      [
        "拝借する（はいしゃくする）",
        "borrow [hum.]"
      ],
      [
        "借金（しゃっきん）",
        "debt"
      ],
      [
        "借家（しゃくや）",
        "rented house"
      ],
      [
        "借りる（かりる）",
        "borrow"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "茶",
    "kname": "cha",
    "kstroke": 9,
    "kmeaning": "tea",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チャ、サ",
    "onyomi": "cha, sa",
    "examples": [
      [
        "紅茶（こうちゃ）",
        "black tea"
      ],
      [
        "緑茶（りょくちゃ）",
        "green tea"
      ],
      [
        "茶色（ちゃいろ）",
        "brown"
      ],
      [
        "お茶（おちゃ）",
        "tea"
      ],
      [
        "茶の湯（ちゃのゆ）",
        "tea ceremony"
      ],
      [
        "喫茶店（きっさてん）",
        "coffee shop"
      ],
      [
        "茶道（さどう）",
        "Way of Tea"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "入",
    "kname": "hai(ru)",
    "kstroke": 2,
    "kmeaning": "enter, put in",
    "kgrade": 1,
    "kunyomi_ja": "い、はい、いり、いる、はいる、いれる、いれ",
    "kunyomi": "i, hai, iri, iru, hairu, ireru, ire",
    "onyomi_ja": "ニュウ",
    "onyomi": "nyuu",
    "examples": [
      [
        "収入（しゅうにゅう）",
        "income"
      ],
      [
        "入学する（にゅうがくする）",
        "entry school or university"
      ],
      [
        "入国する（にゅうこくする）",
        "entry a country"
      ],
      [
        "輸入する（ゆにゅうする）",
        "import"
      ],
      [
        "気に入る（きにいる）",
        "be pleased with, come to like"
      ],
      [
        "入り口（いりぐち）",
        "entrance"
      ],
      [
        "仲間入り（なかまいり）",
        "join a group"
      ],
      [
        "入れる（いれる）",
        "put in, let in [v.t.]"
      ],
      [
        "入れ物（いれもの）",
        "container"
      ],
      [
        "入る（はいる）",
        "enter, get in [v.i.]"
      ]
    ],
    "radical": "⼊",
    "rad_order": 14,
    "rad_stroke": 2,
    "rad_name_ja": "いる",
    "rad_name": "iru",
    "rad_meaning": "to enter",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "新",
    "kname": "atara(shii)",
    "kstroke": 13,
    "kmeaning": "new",
    "kgrade": 2,
    "kunyomi_ja": "あら、あたら、あたらしい、あらた、にい",
    "kunyomi": "ara, atara, atarashii, arata, nii",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "新聞（しんぶん）",
        "newspaper"
      ],
      [
        "新年（しんねん）",
        "New Year"
      ],
      [
        "新製品（しんせいひん）",
        "new product"
      ],
      [
        "新幹線（しんかんせん）",
        "Shinkansen"
      ],
      [
        "最新式（さいしんしき）",
        "latest style"
      ],
      [
        "新鮮な（しんせんな）",
        "fresh"
      ],
      [
        "革新的な（かくしんてきな）",
        "liberal"
      ],
      [
        "更新する（こうしんする）",
        "update, renew"
      ],
      [
        "新しい（あたらしい）",
        "new"
      ],
      [
        "新たな（あらたな）",
        "new"
      ],
      [
        "新妻（にいづま）",
        "newly-wed wife"
      ]
    ],
    "radical": "⽄",
    "rad_order": 89,
    "rad_stroke": 4,
    "rad_name_ja": "おのづくり",
    "rad_name": "onozukuri",
    "rad_meaning": "axe",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "教",
    "kname": "oshi(eru)",
    "kstroke": 11,
    "kmeaning": "teach, religion",
    "kgrade": 2,
    "kunyomi_ja": "おし、おそ、おしえる、おそわる",
    "kunyomi": "oshi, oso, oshieru, osowaru",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "教育する（きょういくする）",
        "educate"
      ],
      [
        "教授（きょうじゅ）",
        "teaching, professor"
      ],
      [
        "教師（きょうし）",
        "teacher"
      ],
      [
        "教室（きょうしつ）",
        "classroom"
      ],
      [
        "教科書（きょうかしょ）",
        "text book"
      ],
      [
        "教養（きょうよう）",
        "cultivation, culture"
      ],
      [
        "教会（きょうかい）",
        "church"
      ],
      [
        "宗教（しゅうきょう）",
        "religion"
      ],
      [
        "仏教（ぶっきょう）",
        "Buddhism"
      ],
      [
        "教える（おしえる）",
        "teach, inform [v.t.]"
      ],
      [
        "教わる（おそわる）",
        "be taught [v.i.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "味",
    "kname": "aji(wau)",
    "kstroke": 8,
    "kmeaning": "taste",
    "kgrade": 3,
    "kunyomi_ja": "あじ、あじわう、あじわい",
    "kunyomi": "aji, ajiwau, ajiwai",
    "onyomi_ja": "ミ",
    "onyomi": "mi",
    "examples": [
      [
        "意味（いみ）",
        "meaning"
      ],
      [
        "興味（きょうみ）",
        "interest (in something)"
      ],
      [
        "趣味（しゅみ）",
        "hobby"
      ],
      [
        "味噌（みそ）",
        "bean paste"
      ],
      [
        "味覚（みかく）",
        "sense of taste"
      ],
      [
        "味（あじ）",
        "flavor"
      ],
      [
        "後味（あとあじ）",
        "aftertaste"
      ],
      [
        "味わう（あじわう）",
        "taste, appreciate"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "白",
    "kname": "shiro(i)",
    "kstroke": 5,
    "kmeaning": "white",
    "kgrade": 1,
    "kunyomi_ja": "しろ、しら、しろい",
    "kunyomi": "shiro, shira, shiroi",
    "onyomi_ja": "ハク、ビャク",
    "onyomi": "haku, byaku",
    "examples": [
      [
        "白紙（はくし）",
        "white paper"
      ],
      [
        "白人（はくじん）",
        "Caucasian"
      ],
      [
        "白鳥（はくちょう）",
        "swan"
      ],
      [
        "空白（くうはく）",
        "blank space"
      ],
      [
        "明白な（めいはくな）",
        "obvious"
      ],
      [
        "白夜（びゃくや）",
        "white (arctic) night"
      ],
      [
        "白い（しろい）",
        "white"
      ],
      [
        "白髪（しらが）",
        "white or grey hair"
      ]
    ],
    "radical": "⽩",
    "rad_order": 133,
    "rad_stroke": 5,
    "rad_name_ja": "しろ",
    "rad_name": "shiro",
    "rad_meaning": "white",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "女",
    "kname": "onna",
    "kstroke": 3,
    "kmeaning": "woman",
    "kgrade": 1,
    "kunyomi_ja": "おんな、め",
    "kunyomi": "onna, me",
    "onyomi_ja": "ジョ、ニョ、ニョウ",
    "onyomi": "jo, nyo, nyou",
    "examples": [
      [
        "女性（じょせい）",
        "female"
      ],
      [
        "女子学生（じょしがくせい）",
        "female student"
      ],
      [
        "彼女（かのじょ）",
        "she, girl friend"
      ],
      [
        "長女（ちょうじょ）",
        "eldest daughter"
      ],
      [
        "女人（にょにん）",
        "women [archaic]"
      ],
      [
        "女房（にょうぼう）",
        "wife"
      ],
      [
        "女（おんな）",
        "woman"
      ],
      [
        "女の子（おんなのこ）",
        "girl"
      ],
      [
        "女々しい（めめしい）",
        "effeminate"
      ]
    ],
    "radical": "⼥",
    "rad_order": 44,
    "rad_stroke": 3,
    "rad_name_ja": "おんな",
    "rad_name": "onna",
    "rad_meaning": "woman",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "青",
    "kname": "ao",
    "kstroke": 8,
    "kmeaning": "blue",
    "kgrade": 1,
    "kunyomi_ja": "あお、あおい",
    "kunyomi": "ao, aoi",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "青春（せいしゅん）",
        "springtime of life"
      ],
      [
        "青年（せいねん）",
        "youth"
      ],
      [
        "緑青（ろくしょう）",
        "copper rust"
      ],
      [
        "青い（あおい）",
        "blue, pale"
      ],
      [
        "青空（あおぞら）",
        "blue sky"
      ],
      [
        "青白い（あおじろい）",
        "pale"
      ],
      [
        "青信号（あおしんごう）",
        "green light"
      ]
    ],
    "radical": "⻘",
    "rad_order": 212,
    "rad_stroke": 8,
    "rad_name_ja": "あお",
    "rad_name": "ao",
    "rad_meaning": "blue, green",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "黒",
    "kname": "kuro",
    "kstroke": 11,
    "kmeaning": "black",
    "kgrade": 2,
    "kunyomi_ja": "くろい、くろ",
    "kunyomi": "kuroi, kuro",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "黒板（こくばん）",
        "blackboard"
      ],
      [
        "暗黒（あんこく）",
        "darkness"
      ],
      [
        "黒い（くろい）",
        "black"
      ],
      [
        "黒髪（くろかみ）",
        "black hair"
      ],
      [
        "白黒（しろくろ）",
        "black and white"
      ],
      [
        "真っ黒な（まっくろな）",
        "pitch black"
      ]
    ],
    "radical": "⿊",
    "rad_order": 233,
    "rad_stroke": 12,
    "rad_name_ja": "くろ",
    "rad_name": "kuro",
    "rad_meaning": "black",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "方",
    "kname": "hou-kata",
    "kstroke": 4,
    "kmeaning": "direction, way, square",
    "kgrade": 2,
    "kunyomi_ja": "かた",
    "kunyomi": "kata",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "方向（ほうこう）",
        "direction"
      ],
      [
        "方言（ほうげん）",
        "dialect"
      ],
      [
        "地方（ちほう）",
        "area"
      ],
      [
        "方針（ほうしん）",
        "policy, principle"
      ],
      [
        "話し方（はなしかた）",
        "way of talking"
      ],
      [
        "仕方（しかた）",
        "way, method, style"
      ],
      [
        "夕方（ゆうがた）",
        "evening"
      ],
      [
        "父方（ちちかた）",
        "father's side of family"
      ],
      [
        "先生方（せんせいがた）",
        "teachers, doctors"
      ]
    ],
    "radical": "⽅",
    "rad_order": 90,
    "rad_stroke": 4,
    "rad_name_ja": "ほう",
    "rad_name": "hou",
    "rad_meaning": "direction, flag",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "運",
    "kname": "hako(bu)",
    "kstroke": 12,
    "kmeaning": "carry, move, fortune",
    "kgrade": 3,
    "kunyomi_ja": "はこ、はこぶ",
    "kunyomi": "hako, hakobu",
    "onyomi_ja": "ウン",
    "onyomi": "un",
    "examples": [
      [
        "運動する（うんどうする）",
        "exercise"
      ],
      [
        "運転する（うんてんする）",
        "operate, drive"
      ],
      [
        "準備運動（じゅんびうんどう）",
        "warming-up exercises"
      ],
      [
        "運賃（うんちん）",
        "fare"
      ],
      [
        "運動靴（うんどうぐつ）",
        "sneakers"
      ],
      [
        "運命（うんめい）",
        "fate"
      ],
      [
        "好運（こううん）",
        "good luck"
      ],
      [
        "不運（ふうん）",
        "bad luck"
      ],
      [
        "運ぶ（はこぶ）",
        "transport"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "動",
    "kname": "ugo(ku)",
    "kstroke": 11,
    "kmeaning": "move",
    "kgrade": 3,
    "kunyomi_ja": "うご、うごく、うごかす、うごき",
    "kunyomi": "ugo, ugoku, ugokasu, ugoki",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "行動する（こうどうする）",
        "act, conduct,"
      ],
      [
        "運動する（うんどうする）",
        "exercise"
      ],
      [
        "感動する（かんどうする）",
        "be deeply moved"
      ],
      [
        "移動する（いどうする）",
        "move [v.t.]"
      ],
      [
        "自動車（じどうしゃ）",
        "automobile"
      ],
      [
        "動物園（どうぶつえん）",
        "zoo"
      ],
      [
        "運動靴（うんどうぐつ）",
        "sneakers"
      ],
      [
        "自動ドア（じどうドア）",
        "automatic door"
      ],
      [
        "不動産（ふどうさん）",
        "real estate"
      ],
      [
        "活動（かつどう）",
        "activity"
      ],
      [
        "動く（うごく）",
        "move [v.i.]"
      ],
      [
        "動かす（うごかす）",
        "move [v.t.]"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "体",
    "kname": "karada",
    "kstroke": 7,
    "kmeaning": "body, form",
    "kgrade": 2,
    "kunyomi_ja": "からだ",
    "kunyomi": "karada",
    "onyomi_ja": "タイ、テイ",
    "onyomi": "tai, tei",
    "examples": [
      [
        "体重（たいじゅう）",
        "body weight"
      ],
      [
        "体力（たいりょく）",
        "physical strength"
      ],
      [
        "大体（だいたい）",
        "in general, mostly"
      ],
      [
        "全体（ぜんたい）",
        "entirety, whole"
      ],
      [
        "団体（だんたい）",
        "group, team, organization"
      ],
      [
        "具体的な（ぐたいてきな）",
        "concrete"
      ],
      [
        "体験する（たいけんする）",
        "experience"
      ],
      [
        "体（からだ）",
        "body"
      ],
      [
        "体中（からだじゅう）",
        "throughout the body"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "痛",
    "kname": "ita(i)",
    "kstroke": 12,
    "kmeaning": "pain",
    "kgrade": 6,
    "kunyomi_ja": "いた、いたい、いたむ、いたましい、いためる、いたみ",
    "kunyomi": "ita, itai, itamu, itamashii, itameru, itami",
    "onyomi_ja": "ツウ",
    "onyomi": "tsuu",
    "examples": [
      [
        "頭痛（ずつう）",
        "headache"
      ],
      [
        "筋肉痛（きんにくつう）",
        "muscular pain"
      ],
      [
        "痛快な（つうかいな）",
        "piquant, thrilling"
      ],
      [
        "痛い（いたい）",
        "painful"
      ],
      [
        "痛み止め（いたみどめ）",
        "painkiller"
      ],
      [
        "痛ましい（いたましい）",
        "pitiful, heartbreaking"
      ],
      [
        "痛める（いためる）",
        "hurt [v.t.]"
      ],
      [
        "痛む（いたむ）",
        "feel a pain [v.i.]"
      ]
    ],
    "radical": "⽧",
    "rad_order": 131,
    "rad_stroke": 5,
    "rad_name_ja": "やまいだれ",
    "rad_name": "yamaidare",
    "rad_meaning": "sickness",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "元",
    "kname": "gen-moto",
    "kstroke": 4,
    "kmeaning": "origin",
    "kgrade": 2,
    "kunyomi_ja": "もと",
    "kunyomi": "moto",
    "onyomi_ja": "ゲン、ガン",
    "onyomi": "gen, gan",
    "examples": [
      [
        "元気な（げんきな）",
        "energetic"
      ],
      [
        "紀元前（きげんぜん）",
        "B.C.E."
      ],
      [
        "三次元（さんじげん）",
        "3 dimensions"
      ],
      [
        "元祖（がんそ）",
        "founder, inventor"
      ],
      [
        "元年（がんねん）",
        "first year (of a specific reign)"
      ],
      [
        "製造元（せいぞうもと）",
        "manufacturer"
      ],
      [
        "地元（じもと）",
        "local"
      ],
      [
        "身元（みもと）",
        "person's identity"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "気",
    "kname": "ki(mochi)",
    "kstroke": 6,
    "kmeaning": "gas, spirit",
    "kgrade": 1,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ、ケ",
    "onyomi": "ki, ke",
    "examples": [
      [
        "気候（きこう）",
        "climate"
      ],
      [
        "気持ち（きもち）",
        "feeling"
      ],
      [
        "天気（てんき）",
        "weather"
      ],
      [
        "人気（にんき）",
        "popularity"
      ],
      [
        "病気（びょうき）",
        "illness"
      ],
      [
        "元気な（げんきな）",
        "energetic"
      ],
      [
        "気を付ける（きをつける）",
        "be careful"
      ],
      [
        "気に入る（きにいる）",
        "come to like, be pleased with"
      ],
      [
        "気が狂う（きがくるう）",
        "go mad, go crazy"
      ],
      [
        "眠気（ねむけ）",
        "sleepiness"
      ],
      [
        "湿気（しっけ）",
        "humidity"
      ]
    ],
    "radical": "⽓",
    "rad_order": 108,
    "rad_stroke": 4,
    "rad_name_ja": "きがまえ",
    "rad_name": "kigamae",
    "rad_meaning": "steam, air",
    "rad_position_ja": "かまえ, きがまえ",
    "rad_position": "kamae, kigamae"
  },
  {
    "kanji": "変",
    "kname": "hen-ka(waru)",
    "kstroke": 9,
    "kmeaning": "change, abnormal",
    "kgrade": 4,
    "kunyomi_ja": "か、かわる、かわり、かえる",
    "kunyomi": "ka, kawaru, kawari, kaeru",
    "onyomi_ja": "ヘン",
    "onyomi": "hen",
    "examples": [
      [
        "変化する（へんかする）",
        "change"
      ],
      [
        "変動する（へんどうする）",
        "fluctuate"
      ],
      [
        "変更する（へんこうする）",
        "change, modify"
      ],
      [
        "変な（へんな）",
        "strange"
      ],
      [
        "大変な（たいへんな）",
        "terrible"
      ],
      [
        "異変（いへん）",
        "accident"
      ],
      [
        "変わる（かわる）",
        "change [v.i.]"
      ],
      [
        "変える（かえる）",
        "change [v.t.]"
      ]
    ],
    "radical": "⼡",
    "rad_order": 40,
    "rad_stroke": 3,
    "rad_name_ja": "のまた",
    "rad_name": "nomata",
    "rad_meaning": "to follow",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "男",
    "kname": "otoko",
    "kstroke": 7,
    "kmeaning": "man",
    "kgrade": 1,
    "kunyomi_ja": "おとこ",
    "kunyomi": "otoko",
    "onyomi_ja": "ダン、ナン",
    "onyomi": "dan, nan",
    "examples": [
      [
        "男子学生（だんしがくせい）",
        "male student"
      ],
      [
        "男性（だんせい）",
        "male"
      ],
      [
        "長男（ちょうなん）",
        "eldest son"
      ],
      [
        "男（おとこ）",
        "man"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "疲",
    "kname": "hi-tsuka(reru)",
    "kstroke": 10,
    "kmeaning": "tired",
    "kgrade": "n/a",
    "kunyomi_ja": "つか、つかれる、つかれ",
    "kunyomi": "tsuka, tsukareru, tsukare",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "疲労する（ひろうする）",
        "be exhausted"
      ],
      [
        "疲れる（つかれる）",
        "get tired"
      ],
      [
        "気疲れする（きづかれする）",
        "get mentally tired"
      ],
      [
        "疲れ果てる（つかれはてる）",
        "get tired out"
      ]
    ],
    "radical": "⽧",
    "rad_order": 131,
    "rad_stroke": 5,
    "rad_name_ja": "やまいだれ",
    "rad_name": "yamaidare",
    "rad_meaning": "sickness",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "寝",
    "kname": "shin-ne(ru)",
    "kstroke": 13,
    "kmeaning": "go to sleep",
    "kgrade": "n/a",
    "kunyomi_ja": "ね、ねる、ねかす、ねかせる",
    "kunyomi": "ne, neru, nekasu, nekaseru",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "寝室（しんしつ）",
        "bedroom"
      ],
      [
        "就寝時間（しゅうしんじかん）",
        "bedtime"
      ],
      [
        "寝る（ねる）",
        "sleep [v.i.]"
      ],
      [
        "寝かす（ねかす）",
        "put to sleep [v.t.]"
      ],
      [
        "寝坊する（ねぼうする）",
        "sleep in late"
      ],
      [
        "寝顔（ねがお）",
        "sleeping face"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "天",
    "kname": "ten-ama",
    "kstroke": 4,
    "kmeaning": "heaven",
    "kgrade": 1,
    "kunyomi_ja": "あめ、あま",
    "kunyomi": "ame, ama",
    "onyomi_ja": "テン",
    "onyomi": "ten",
    "examples": [
      [
        "天気（てんき）",
        "weather, fine weather"
      ],
      [
        "天候（てんこう）",
        "weather"
      ],
      [
        "天国（てんごく）",
        "heaven"
      ],
      [
        "天皇（てんのう）",
        "emperor"
      ],
      [
        "天才（てんさい）",
        "genius"
      ],
      [
        "晴天（せいてん）",
        "fine weather"
      ],
      [
        "雨天（うてん）",
        "rainy weather"
      ],
      [
        "先天的な（せんてんてきな）",
        "innate"
      ],
      [
        "天（あめ）",
        "heaven, sky"
      ],
      [
        "天の川（あまのがわ）",
        "Milky Way"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "頭",
    "kname": "atama",
    "kstroke": 16,
    "kmeaning": "head",
    "kgrade": 2,
    "kunyomi_ja": "あたま、かしら",
    "kunyomi": "atama, kashira",
    "onyomi_ja": "トウ、ズ、ト",
    "onyomi": "tou, zu, to",
    "examples": [
      [
        "没頭する（ぼっとうする）",
        "immerse oneself"
      ],
      [
        "頭部（とうぶ）",
        "head"
      ],
      [
        "店頭（てんとう）",
        "shop front"
      ],
      [
        "頭痛（ずつう）",
        "headache"
      ],
      [
        "頭脳（ずのう）",
        "brains"
      ],
      [
        "音頭（おんど）",
        "marching songs"
      ],
      [
        "頭（あたま）",
        "head"
      ],
      [
        "目頭（めがしら）",
        "the corner of the eye"
      ],
      [
        "波頭（なみがしら）",
        "whitecaps"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "図",
    "kname": "zu-haka(ru)",
    "kstroke": 7,
    "kmeaning": "drawing",
    "kgrade": 2,
    "kunyomi_ja": "はか、はかる",
    "kunyomi": "haka, hakaru",
    "onyomi_ja": "ズ、ト",
    "onyomi": "zu, to",
    "examples": [
      [
        "地図（ちず）",
        "map"
      ],
      [
        "図面（ずめん）",
        "plan"
      ],
      [
        "設計図（せっけいず）",
        "blueprint"
      ],
      [
        "意図する（いとする）",
        "intend"
      ],
      [
        "図書室（としょしつ）",
        "library room"
      ],
      [
        "図書館（としょかん）",
        "library"
      ],
      [
        "図る（はかる）",
        "plot, attempt"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "館",
    "kname": "kan-tate(mono)",
    "kstroke": 16,
    "kmeaning": "public building",
    "kgrade": 3,
    "kunyomi_ja": "たて",
    "kunyomi": "tate",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "開館する（かいかんする）",
        "open a building"
      ],
      [
        "閉館する（へいかんする）",
        "close a building"
      ],
      [
        "休館する（きゅうかんする）",
        "close a library or museum"
      ],
      [
        "図書館（としょかん）",
        "library"
      ],
      [
        "映画館（えいがかん）",
        "movie theater"
      ],
      [
        "体育館（たいいくかん）",
        "gym"
      ],
      [
        "大使館（たいしかん）",
        "embassy"
      ],
      [
        "旅館（りょかん）",
        "Japanese style hotel"
      ],
      [
        "函館（はこだて）",
        "Hakodate"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "探",
    "kname": "tan-saga(su)",
    "kstroke": 11,
    "kmeaning": "probe, search",
    "kgrade": 6,
    "kunyomi_ja": "さぐ、さが、さぐる、さがす",
    "kunyomi": "sagu, saga, saguru, sagasu",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "探究する（たんきゅうする）",
        "research"
      ],
      [
        "探検する（たんけんする）",
        "explore"
      ],
      [
        "探る（さぐる）",
        "search"
      ],
      [
        "探す（さがす）",
        "look for"
      ],
      [
        "職探し（しょくさがし）",
        "job hunting"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "失",
    "kname": "ushina(u)",
    "kstroke": 5,
    "kmeaning": "lose, slip",
    "kgrade": 4,
    "kunyomi_ja": "うしな、うしなう",
    "kunyomi": "ushina, ushinau",
    "onyomi_ja": "シツ",
    "onyomi": "shitsu",
    "examples": [
      [
        "失礼する（しつれいする）",
        "be impolite"
      ],
      [
        "失業する（しつぎょうする）",
        "become unemployed"
      ],
      [
        "失望する（しつぼうする）",
        "be disappointed"
      ],
      [
        "失敗する（しっぱいする）",
        "fail"
      ],
      [
        "失言（しつげん）",
        "improper words"
      ],
      [
        "喪失（そうしつ）",
        "loss"
      ],
      [
        "過失（かしつ）",
        "mistake, error, accident"
      ],
      [
        "失う（うしなう）",
        "lose"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "礼",
    "kname": "rei(gi)",
    "kstroke": 5,
    "kmeaning": "etiquette, rite, courtesy, gratitude",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "レイ、ライ",
    "onyomi": "rei, rai",
    "examples": [
      [
        "失礼する（しつれいする）",
        "be impolite"
      ],
      [
        "礼儀（れいぎ）",
        "courtesy"
      ],
      [
        "謝礼（しゃれい）",
        "reward"
      ],
      [
        "お礼（おれい）",
        "appreciation, gratitude"
      ],
      [
        "婚礼（こんれい）",
        "marriage ceremony"
      ],
      [
        "礼金（れいきん）",
        "finder's fee, reward"
      ],
      [
        "礼賛する（らいさんする）",
        "praise"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "少",
    "kname": "suko(shi)",
    "kstroke": 4,
    "kmeaning": "little",
    "kgrade": 2,
    "kunyomi_ja": "すく、すこ、すくない、すこし",
    "kunyomi": "suku, suko, sukunai, sukoshi",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "少々（しょうしょう）",
        "small quantity, a little"
      ],
      [
        "少数（しょうすう）",
        "minority"
      ],
      [
        "少量（しょうりょう）",
        "small quantity"
      ],
      [
        "少額（しょうがく）",
        "small sum (of money)"
      ],
      [
        "多少（たしょう）",
        "more or less"
      ],
      [
        "少年（しょうねん）",
        "boy"
      ],
      [
        "減少する（げんしょうする）",
        "decrease [v.i.]"
      ],
      [
        "少ない（すくない）",
        "a few, a little"
      ],
      [
        "少なくとも（すくなくとも）",
        "at least"
      ],
      [
        "少し（すこし）",
        "small quantity, a little"
      ]
    ],
    "radical": "⼩",
    "rad_order": 50,
    "rad_stroke": 3,
    "rad_name_ja": "しょう",
    "rad_name": "shou",
    "rad_meaning": "small",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "人",
    "kname": "nin-hito",
    "kstroke": 2,
    "kmeaning": "human being, person",
    "kgrade": 1,
    "kunyomi_ja": "ひと",
    "kunyomi": "hito",
    "onyomi_ja": "ジン、ニン",
    "onyomi": "jin, nin",
    "examples": [
      [
        "人類学（じんるいがく）",
        "anthropology"
      ],
      [
        "人生（じんせい）",
        "(human) life"
      ],
      [
        "人口（じんこう）",
        "population"
      ],
      [
        "日本人（にほんじん）",
        "Japanese person"
      ],
      [
        "御主人（ごしゅじん）",
        "someone's husband"
      ],
      [
        "人間（にんげん）",
        "human"
      ],
      [
        "人数（にんずう）",
        "a head count"
      ],
      [
        "人（ひと）",
        "person"
      ],
      [
        "人柄（ひとがら）",
        "personality"
      ],
      [
        "*一人（ひとり）",
        "one person"
      ],
      [
        "*二人（ふたり）",
        "two people"
      ],
      [
        "*素人（しろうと）",
        "amateur"
      ]
    ],
    "radical": "⼈",
    "rad_order": 10,
    "rad_stroke": 2,
    "rad_name_ja": "ひと",
    "rad_name": "hito",
    "rad_meaning": "person",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "自",
    "kname": "mizuka(ra)",
    "kstroke": 6,
    "kmeaning": "self",
    "kgrade": 2,
    "kunyomi_ja": "みずか、おの、みずから、おのずから",
    "kunyomi": "mizuka, ono, mizukara, onozukara",
    "onyomi_ja": "ジ、シ",
    "onyomi": "ji, shi",
    "examples": [
      [
        "自慢する（じまんする）",
        "boast"
      ],
      [
        "自転車（じてんしゃ）",
        "bicycle"
      ],
      [
        "自動車（じどうしゃ）",
        "automobile"
      ],
      [
        "自由（じゆう）",
        "freedom"
      ],
      [
        "自分（じぶん）",
        "oneself"
      ],
      [
        "自信（じしん）",
        "self-confidence"
      ],
      [
        "独自（どくじ）",
        "original, independent"
      ],
      [
        "自然な（しぜんな）",
        "natural"
      ],
      [
        "自ら（みずから）",
        "by one's self"
      ],
      [
        "自ずから（おのずから）",
        "naturally"
      ]
    ],
    "radical": "⾃",
    "rad_order": 166,
    "rad_stroke": 6,
    "rad_name_ja": "みずから",
    "rad_name": "mizukara",
    "rad_meaning": "self",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "由",
    "kname": "(ji)yuu",
    "kstroke": 5,
    "kmeaning": "reason",
    "kgrade": 3,
    "kunyomi_ja": "よし",
    "kunyomi": "yoshi",
    "onyomi_ja": "ユ、ユウ、ユイ",
    "onyomi": "yu, yuu, yui",
    "examples": [
      [
        "由来する（ゆらいする）",
        "originate"
      ],
      [
        "経由する（けいゆする）",
        "go by way of, go via"
      ],
      [
        "自由（じゆう）",
        "freedom"
      ],
      [
        "理由（りゆう）",
        "reason"
      ],
      [
        "由緒（ゆいしょ）",
        "lineage"
      ],
      [
        "由（よし）",
        "means"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "無",
    "kname": "mu-na(i)",
    "kstroke": 12,
    "kmeaning": "without, nothing",
    "kgrade": 4,
    "kunyomi_ja": "な、ない、なし、なくす、なくなる",
    "kunyomi": "na, nai, nashi, nakusu, nakunaru",
    "onyomi_ja": "ム、ブ",
    "onyomi": "mu, bu",
    "examples": [
      [
        "無料（むりょう）",
        "free of charge"
      ],
      [
        "無職（むしょく）",
        "unemployed"
      ],
      [
        "無理な（むりな）",
        "impossible"
      ],
      [
        "無神経な（むしんけいな）",
        "insensitive"
      ],
      [
        "無意味な（むいみな）",
        "nonsense"
      ],
      [
        "無視する（むしする）",
        "disregard, ignore"
      ],
      [
        "無事（ぶじ）",
        "safety"
      ],
      [
        "無難な（ぶなんな）",
        "secure, safe"
      ],
      [
        "無礼な（ぶれいな）",
        "rude"
      ],
      [
        "無くす（なくす）",
        "lose"
      ],
      [
        "無い（ない）",
        "no, not"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "理",
    "kname": "ri(yuu)",
    "kstroke": 11,
    "kmeaning": "reason, basic principle",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リ",
    "onyomi": "ri",
    "examples": [
      [
        "料理する（りょうりする）",
        "cook"
      ],
      [
        "理解する（りかいする）",
        "understand"
      ],
      [
        "修理する（しゅうりする）",
        "repair, fix"
      ],
      [
        "整理する（せいりする）",
        "sort, arrange, order"
      ],
      [
        "理想（りそう）",
        "ideal"
      ],
      [
        "理由（りゆう）",
        "reason"
      ],
      [
        "心理学（しんりがく）",
        "psychology"
      ],
      [
        "真理（しんり）",
        "truth"
      ],
      [
        "論理（ろんり）",
        "logic"
      ],
      [
        "無理な（むりな）",
        "impossible"
      ],
      [
        "合理的な（ごうりてきな）",
        "rational"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "言",
    "kname": "gen-i(u)",
    "kstroke": 7,
    "kmeaning": "say, speech",
    "kgrade": 2,
    "kunyomi_ja": "い、いう、こと",
    "kunyomi": "i, iu, koto",
    "onyomi_ja": "ゲン、ゴン",
    "onyomi": "gen, gon",
    "examples": [
      [
        "断言する（だんげんする）",
        "assert"
      ],
      [
        "証言する（しょうげんする）",
        "testify"
      ],
      [
        "言語学（げんごがく）",
        "linguistics"
      ],
      [
        "方言（ほうげん）",
        "dialect"
      ],
      [
        "伝言する（でんごんする）",
        "leave a message"
      ],
      [
        "無言（むごん）",
        "silence"
      ],
      [
        "言う（いう）",
        "say"
      ],
      [
        "言葉（ことば）",
        "word(s), language"
      ],
      [
        "一言（ひとこと）",
        "single word"
      ],
      [
        "独り言（ひとりごと）",
        "soliloquy"
      ],
      [
        "寝言（ねごと）",
        "talk in one's sleep"
      ]
    ],
    "radical": "⾔",
    "rad_order": 182,
    "rad_stroke": 7,
    "rad_name_ja": "げん",
    "rad_name": "gen",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "度",
    "kname": "do-tabi",
    "kstroke": 9,
    "kmeaning": "degree, time",
    "kgrade": 3,
    "kunyomi_ja": "たび",
    "kunyomi": "tabi",
    "onyomi_ja": "ド、ト、タク",
    "onyomi": "do, to, taku",
    "examples": [
      [
        "一度（いちど）",
        "once"
      ],
      [
        "今度（こんど）",
        "this time, next time"
      ],
      [
        "何度も（なんども）",
        "many times over"
      ],
      [
        "程度（ていど）",
        "degree, amount"
      ],
      [
        "速度（そくど）",
        "speed"
      ],
      [
        "態度（たいど）",
        "attitude"
      ],
      [
        "温度（おんど）",
        "temperature"
      ],
      [
        "20度（にじゅうど）",
        "twenty degrees"
      ],
      [
        "御法度（ごはっと）",
        "taboo"
      ],
      [
        "支度する（したくする）",
        "prepare"
      ],
      [
        "~度に（たびに）",
        "whenever, every time"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "集",
    "kname": "tsudo(u)",
    "kstroke": 12,
    "kmeaning": "collect",
    "kgrade": 3,
    "kunyomi_ja": "あつ、つど、あつまる、あつまり、あつめる、つどう、つどい",
    "kunyomi": "atsu, tsudo, atsumaru, atsumari, atsumeru, tsudou, tsudoi",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "募集する（ぼしゅうする）",
        "recruit, collect"
      ],
      [
        "集中する（しゅうちゅうする）",
        "concentrate"
      ],
      [
        "特集する（とくしゅうする）",
        "feature article/issue/program"
      ],
      [
        "編集する（へんしゅうする）",
        "edit"
      ],
      [
        "集団（しゅうだん）",
        "group"
      ],
      [
        "詩集（ししゅう）",
        "poetry anthology"
      ],
      [
        "集まる（あつまる）",
        "gather [v.i.]"
      ],
      [
        "集まり（あつまり）",
        "gathering"
      ],
      [
        "集める（あつめる）",
        "collect [v.t.]"
      ],
      [
        "集う（つどう）",
        "congregate"
      ]
    ],
    "radical": "⾫",
    "rad_order": 209,
    "rad_stroke": 8,
    "rad_name_ja": "ふるとり",
    "rad_name": "furutori",
    "rad_meaning": "small bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "音",
    "kname": "oto",
    "kstroke": 9,
    "kmeaning": "sound",
    "kgrade": 1,
    "kunyomi_ja": "おと、ね",
    "kunyomi": "oto, ne",
    "onyomi_ja": "オン、ノン、イン",
    "onyomi": "on, non, in",
    "examples": [
      [
        "発音する（はつおんする）",
        "pronounce"
      ],
      [
        "録音する（ろくおんする）",
        "record"
      ],
      [
        "音楽（おんがく）",
        "music"
      ],
      [
        "音読み（おんよみ）",
        "on (Chinese) reading of kanji"
      ],
      [
        "観音様（かんのんさま）",
        "Kannon, Goddess of Mercy"
      ],
      [
        "母音（ぼいん）",
        "vowel"
      ],
      [
        "子音（しいん）",
        "consonant"
      ],
      [
        "音（おと）",
        "sound"
      ],
      [
        "足音（あしおと）",
        "footsteps (sound)"
      ],
      [
        "音色（ねいろ）",
        "tone"
      ],
      [
        "本音（ほんね）",
        "real intention"
      ]
    ],
    "radical": "⾳",
    "rad_order": 216,
    "rad_stroke": 9,
    "rad_name_ja": "おと",
    "rad_name": "oto",
    "rad_meaning": "sound, noise",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "決",
    "kname": "ketsu-ki(meru)",
    "kstroke": 7,
    "kmeaning": "decide",
    "kgrade": 3,
    "kunyomi_ja": "き、きめる、きまる",
    "kunyomi": "ki, kimeru, kimaru",
    "onyomi_ja": "ケツ",
    "onyomi": "ketsu",
    "examples": [
      [
        "決定する（けっていする）",
        "decide"
      ],
      [
        "決心する（けっしんする）",
        "resolve to do something"
      ],
      [
        "解決する（かいけつする）",
        "solve"
      ],
      [
        "決断する（けつだんする）",
        "make a decision"
      ],
      [
        "判決（はんけつ）",
        "judicial decision"
      ],
      [
        "決勝戦（けっしょうせん）",
        "final game of a tournament"
      ],
      [
        "決して（けっして）",
        "never"
      ],
      [
        "決める（きめる）",
        "decide [v.t.]"
      ],
      [
        "決まる（きまる）",
        "be decided [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "事",
    "kname": "ji-koto",
    "kstroke": 8,
    "kmeaning": "affair, abstract thing",
    "kgrade": 3,
    "kunyomi_ja": "こと",
    "kunyomi": "koto",
    "onyomi_ja": "ジ、ズ",
    "onyomi": "ji, zu",
    "examples": [
      [
        "事故（じこ）",
        "accident"
      ],
      [
        "食事（しょくじ）",
        "meal"
      ],
      [
        "用事（ようじ）",
        "business, engagement"
      ],
      [
        "火事（かじ）",
        "fire"
      ],
      [
        "返事（へんじ）",
        "reply"
      ],
      [
        "工事中（こうじちゅう）",
        "under construction"
      ],
      [
        "大事な（だいじな）",
        "important, valuable"
      ],
      [
        "お大事に（おだいじに）",
        "take care (to a sick person)"
      ],
      [
        "好事家（こうずか）",
        "dilettante"
      ],
      [
        "事（こと）",
        "(abstract) thing"
      ],
      [
        "仕事（しごと）",
        "work"
      ]
    ],
    "radical": "⼁",
    "rad_order": 2,
    "rad_stroke": 1,
    "rad_name_ja": "たてぼう",
    "rad_name": "tatebou",
    "rad_meaning": "vertical stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "二",
    "kname": 2,
    "kstroke": 2,
    "kmeaning": "two",
    "kgrade": 1,
    "kunyomi_ja": "ふた、ふたつ、ふたり",
    "kunyomi": "futa, futatsu, futari",
    "onyomi_ja": "ニ",
    "onyomi": "ni",
    "examples": [
      [
        "二時間（にじかん）",
        "two hours"
      ],
      [
        "二月（にがつ）",
        "February"
      ],
      [
        "二枚目（にまいめ）",
        "second (flat object)"
      ],
      [
        "二つ（ふたつ）",
        "two (pieces)"
      ],
      [
        "二人（ふたり）",
        "two people"
      ]
    ],
    "radical": "⼆",
    "rad_order": 8,
    "rad_stroke": 2,
    "rad_name_ja": "に",
    "rad_name": "ni",
    "rad_meaning": "two",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "見",
    "kname": "ken-mi(ru)",
    "kstroke": 7,
    "kmeaning": "see",
    "kgrade": 1,
    "kunyomi_ja": "み、みる、みえる、みせる",
    "kunyomi": "mi, miru, mieru, miseru",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "見学する（けんがくする）",
        "study, take a research trip"
      ],
      [
        "発見する（はっけんする）",
        "discover"
      ],
      [
        "拝見する（はいけんする）",
        "take a look at [hum.]"
      ],
      [
        "意見（いけん）",
        "opinion"
      ],
      [
        "偏見（へんけん）",
        "prejudice"
      ],
      [
        "見る（みる）",
        "see"
      ],
      [
        "見つかる（みつかる）",
        "be found [v.i.]"
      ],
      [
        "見つける（みつける）",
        "find [v.t.]"
      ],
      [
        "見える（みえる）",
        "be seen, seem"
      ],
      [
        "見せる（みせる）",
        "show"
      ],
      [
        "花見（はなみ）",
        "cherry-blossom viewing"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "切",
    "kname": "setsu-ki(ru)",
    "kstroke": 4,
    "kmeaning": "cut",
    "kgrade": 2,
    "kunyomi_ja": "き、きる、きり、きれる",
    "kunyomi": "ki, kiru, kiri, kireru",
    "onyomi_ja": "セツ、サイ",
    "onyomi": "setsu, sai",
    "examples": [
      [
        "切断する（せつだんする）",
        "cut"
      ],
      [
        "親切な（しんせつな）",
        "kind"
      ],
      [
        "大切な（たいせつな）",
        "important"
      ],
      [
        "切腹（せっぷく）",
        "seppuku, harakiri"
      ],
      [
        "一切（いっさい）",
        "all"
      ],
      [
        "切る（きる）",
        "cut"
      ],
      [
        "締め切り（しめきり）",
        "deadline"
      ],
      [
        "裏切る（うらぎる）",
        "betray"
      ],
      [
        "時間切れ（じかんぎれ）",
        "run out of time"
      ],
      [
        "切符（きっぷ）",
        "ticket"
      ]
    ],
    "radical": "⼑",
    "rad_order": 22,
    "rad_stroke": 2,
    "rad_name_ja": "かたな",
    "rad_name": "katana",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "符",
    "kname": "fu(gou)",
    "kstroke": 11,
    "kmeaning": "symbol",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "疑問符（ぎもんふ）",
        "question mark"
      ],
      [
        "切符（きっぷ）",
        "ticket"
      ],
      [
        "音符（おんぷ）",
        "(musical) note"
      ],
      [
        "終止符（しゅうしふ）",
        "period"
      ],
      [
        "符号（ふごう）",
        "mark, code, symbol, sign"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "悪",
    "kname": "waru(i)",
    "kstroke": 11,
    "kmeaning": "bad, evil",
    "kgrade": 3,
    "kunyomi_ja": "わる、あ、わるい、わるさ、あし、あしき",
    "kunyomi": "waru, a, warui, warusa, ashi, ashiki",
    "onyomi_ja": "アク、オ",
    "onyomi": "aku, o",
    "examples": [
      [
        "悪魔（あくま）",
        "devil"
      ],
      [
        "悪事（あくじ）",
        "evil deed"
      ],
      [
        "最悪（さいあく）",
        "the worst"
      ],
      [
        "悪条件（あくじょうけん）",
        "unfavorable conditions"
      ],
      [
        "悪化する（あっかする）",
        "get worse [v.i.]"
      ],
      [
        "悪寒（おかん）",
        "chill"
      ],
      [
        "悪い（わるい）",
        "bad"
      ],
      [
        "悪口（わるくち）",
        "slander, abuse [n.]"
      ],
      [
        "悪しからず（あしからず）",
        "don't get me wrong, but ..."
      ],
      [
        "善し悪し（よしあし）",
        "good or bad"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "実",
    "kname": "jitsu-mino(ru)",
    "kstroke": 8,
    "kmeaning": "real, fruit, nut",
    "kgrade": 3,
    "kunyomi_ja": "み、みの、みのる、みのり",
    "kunyomi": "mi, mino, minoru, minori",
    "onyomi_ja": "ジツ",
    "onyomi": "jitsu",
    "examples": [
      [
        "実は（じつは）",
        "as a matter of fact"
      ],
      [
        "実力（じつりょく）",
        "real ability"
      ],
      [
        "事実（じじつ）",
        "fact"
      ],
      [
        "確実な（かくじつな）",
        "certain"
      ],
      [
        "誠実な（せいじつな）",
        "sincere"
      ],
      [
        "実現する（じつげんする）",
        "realize (a project or goal)"
      ],
      [
        "実験する（じっけんする）",
        "experiment [v.t.]"
      ],
      [
        "実際（じっさい）",
        "in fact, in practice"
      ],
      [
        "木の実（きのみ）",
        "nut"
      ],
      [
        "実る（みのる）",
        "bear fruit"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "病",
    "kname": "yamai",
    "kstroke": 10,
    "kmeaning": "illness, disease, sickness",
    "kgrade": 3,
    "kunyomi_ja": "や、やむ、やみ、やまい",
    "kunyomi": "ya, yamu, yami, yamai",
    "onyomi_ja": "ビョウ、ヘイ",
    "onyomi": "byou, hei",
    "examples": [
      [
        "病気（びょうき）",
        "illness"
      ],
      [
        "病院（びょういん）",
        "hospital"
      ],
      [
        "病人（びょうにん）",
        "patient"
      ],
      [
        "心臓病（しんぞうびょう）",
        "heart disease"
      ],
      [
        "看病する（かんびょうする）",
        "nurse (a patient)"
      ],
      [
        "病む（やむ）",
        "be ill"
      ],
      [
        "病み付き（やみつき）",
        "addicted, hooked"
      ],
      [
        "病み上がり（やみあがり）",
        "convalescence"
      ],
      [
        "病（やまい）",
        "illness"
      ]
    ],
    "radical": "⽧",
    "rad_order": 131,
    "rad_stroke": 5,
    "rad_name_ja": "やまいだれ",
    "rad_name": "yamaidare",
    "rad_meaning": "sickness",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "治",
    "kname": "ji-nao(ru)",
    "kstroke": 8,
    "kmeaning": "govern, cure, heal",
    "kgrade": 4,
    "kunyomi_ja": "おさ、なお、おさめる、おさまる、なおる、なおす",
    "kunyomi": "osa, nao, osameru, osamaru, naoru, naosu",
    "onyomi_ja": "ジ、チ",
    "onyomi": "ji, chi",
    "examples": [
      [
        "明治（めいじ）",
        "Meiji era"
      ],
      [
        "政治（せいじ）",
        "politics"
      ],
      [
        "退治する（たいじする）",
        "exterminate"
      ],
      [
        "治療する（ちりょうする）",
        "give medical treatment"
      ],
      [
        "治安（ちあん）",
        "public peace and order"
      ],
      [
        "治まる（おさまる）",
        "be subdued [v.i.]"
      ],
      [
        "治める（おさめる）",
        "subdue [v.t.]"
      ],
      [
        "治る（なおる）",
        "heal, get well [v.i.]"
      ],
      [
        "治す（なおす）",
        "cure, fix [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "校",
    "kname": "(gak)kou",
    "kstroke": 10,
    "kmeaning": "school",
    "kgrade": 1,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "学校（がっこう）",
        "school"
      ],
      [
        "母校（ぼこう）",
        "alma mater"
      ],
      [
        "小学校（しょうがっこう）",
        "elementary school"
      ],
      [
        "中学校（ちゅうがっこう）",
        "junior high school"
      ],
      [
        "高校生（こうこうせい）",
        "senior high school student"
      ],
      [
        "予備校（よびこう）",
        "cram school"
      ],
      [
        "校正する（こうせいする）",
        "proofread"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "心",
    "kname": "kokoro",
    "kstroke": 4,
    "kmeaning": "heart",
    "kgrade": 2,
    "kunyomi_ja": "こころ",
    "kunyomi": "kokoro",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "心理学（しんりがく）",
        "psychology"
      ],
      [
        "心臓病（しんぞうびょう）",
        "heart disease"
      ],
      [
        "心臓まひ（しんぞうまひ）",
        "heart attack"
      ],
      [
        "中心（ちゅうしん）",
        "center"
      ],
      [
        "好奇心（こうきしん）",
        "curiosity"
      ],
      [
        "肝心な（かんじんな）",
        "essential"
      ],
      [
        "心配する（しんぱいする）",
        "worry"
      ],
      [
        "安心する（あんしんする）",
        "be relieved"
      ],
      [
        "感心する（かんしんする）",
        "admire [v.i.]"
      ],
      [
        "決心する（けっしんする）",
        "resolve to do something"
      ],
      [
        "心（こころ）",
        "heart, spirit"
      ],
      [
        "親心（おやごころ）",
        "parental love"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "発",
    "kname": "hatsu-ta(tsu)",
    "kstroke": 9,
    "kmeaning": "start, emit",
    "kgrade": 3,
    "kunyomi_ja": "た、たつ",
    "kunyomi": "ta, tatsu",
    "onyomi_ja": "ハツ、ホツ",
    "onyomi": "hatsu, hotsu",
    "examples": [
      [
        "発熱（はつねつ）",
        "fever, flush"
      ],
      [
        "発想（はっそう）",
        "idea, conception"
      ],
      [
        "自発性（じはつせい）",
        "spontaneity, initiative"
      ],
      [
        "発音する（はつおんする）",
        "pronounce"
      ],
      [
        "発明する（はつめいする）",
        "invent"
      ],
      [
        "出発する（しゅっぱつする）",
        "depart"
      ],
      [
        "発見する（はっけんする）",
        "discover"
      ],
      [
        "発達する（はったつする）",
        "develop [v.i.]"
      ],
      [
        "発足する（ほっそくする）",
        "start an organization"
      ],
      [
        "発作（ほっさ）",
        "fit, attack, paroxysm"
      ],
      [
        "発つ（たつ）",
        "depart"
      ]
    ],
    "radical": "⽨",
    "rad_order": 132,
    "rad_stroke": 5,
    "rad_name_ja": "はつがしら",
    "rad_name": "hatsugashira",
    "rad_meaning": "outspread legs, departure",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "番",
    "kname": "ban(gou)",
    "kstroke": 12,
    "kmeaning": "numerical order, watch",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "バン",
    "onyomi": "ban",
    "examples": [
      [
        "番号（ばんごう）",
        "number"
      ],
      [
        "番地（ばんち）",
        "house number, address"
      ],
      [
        "一番（いちばん）",
        "number one"
      ],
      [
        "交番（こうばん）",
        "police box"
      ],
      [
        "当番（とうばん）",
        "being on duty"
      ],
      [
        "留守番（るすばん）",
        "house-watching"
      ],
      [
        "テレビ番組（テレビばんぐみ）",
        "TV program"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "先",
    "kname": "sen-saki",
    "kstroke": 6,
    "kmeaning": "ahead",
    "kgrade": 1,
    "kunyomi_ja": "さき",
    "kunyomi": "saki",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "先生（せんせい）",
        "teacher, master, doctor"
      ],
      [
        "先週（せんしゅう）",
        "last week"
      ],
      [
        "先月（せんげつ）",
        "last month"
      ],
      [
        "先学期（せんがっき）",
        "last semester"
      ],
      [
        "先輩（せんぱい）",
        "senior (at work or school)"
      ],
      [
        "先（さき）",
        "point, end, front, lead, former"
      ],
      [
        "店先（みせさき）",
        "store front"
      ],
      [
        "*先ず（まず）",
        "first (of all)"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "英",
    "kname": "ei(go)",
    "kstroke": 8,
    "kmeaning": "distinguished, England",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "英語（えいご）",
        "English language"
      ],
      [
        "英国（えいこく）",
        "England"
      ],
      [
        "英国人（えいこくじん）",
        "English person"
      ],
      [
        "英会話（えいかいわ）",
        "English conversation"
      ],
      [
        "英和辞典（えいわじてん）",
        "English-Japanese dictionary"
      ],
      [
        "英雄（えいゆう）",
        "hero"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "文",
    "kname": "bun-fumi",
    "kstroke": 4,
    "kmeaning": "letter, writings, sentence",
    "kgrade": 1,
    "kunyomi_ja": "ふみ",
    "kunyomi": "fumi",
    "onyomi_ja": "ブン、モン",
    "onyomi": "bun, mon",
    "examples": [
      [
        "文法（ぶんぽう）",
        "grammar"
      ],
      [
        "文章（ぶんしょう）",
        "sentence"
      ],
      [
        "文学（ぶんがく）",
        "literature"
      ],
      [
        "文化（ぶんか）",
        "culture"
      ],
      [
        "文明（ぶんめい）",
        "civilization"
      ],
      [
        "文庫本（ぶんこぼん）",
        "paperback"
      ],
      [
        "文房具（ぶんぼうぐ）",
        "stationery"
      ],
      [
        "論文（ろんぶん）",
        "thesis"
      ],
      [
        "文通する（ぶんつうする）",
        "correspond, exchange letters"
      ],
      [
        "文部省（もんぶしょう）",
        "Ministry of Education"
      ],
      [
        "文句（もんく）",
        "phrase, complaint"
      ],
      [
        "恋文（こいぶみ）",
        "love-letter"
      ]
    ],
    "radical": "⽂",
    "rad_order": 87,
    "rad_stroke": 4,
    "rad_name_ja": "ぶん",
    "rad_name": "bun",
    "rad_meaning": "literature, letters",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "法",
    "kname": "hou-nori",
    "kstroke": 8,
    "kmeaning": "law, method",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ホウ、ハツ、ホツ",
    "onyomi": "hou, hatsu, hotsu",
    "examples": [
      [
        "法則（ほうそく）",
        "law, principle, theorem"
      ],
      [
        "法律（ほうりつ）",
        "law"
      ],
      [
        "法律学（ほうりつがく）",
        "jurisprudence"
      ],
      [
        "文法（ぶんぽう）",
        "grammar"
      ],
      [
        "方法（ほうほう）",
        "method"
      ],
      [
        "憲法（けんぽう）",
        "constitution"
      ],
      [
        "御法度（ごはっと）",
        "taboo"
      ],
      [
        "法華宗（ほっけしゅう）",
        "Hokke sect of Buddhism"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "練",
    "kname": "ren(shuu)",
    "kstroke": 14,
    "kmeaning": "train, knead",
    "kgrade": 3,
    "kunyomi_ja": "ね、ねる、ねり",
    "kunyomi": "ne, neru, neri",
    "onyomi_ja": "レン",
    "onyomi": "ren",
    "examples": [
      [
        "練習する（れんしゅうする）",
        "practice"
      ],
      [
        "訓練する（くんれんする）",
        "train"
      ],
      [
        "熟練する（じゅくれんする）",
        "become skilled"
      ],
      [
        "試練（しれん）",
        "trial"
      ],
      [
        "練る（ねる）",
        "knead, work over"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "貸",
    "kname": "tai-ka(su)",
    "kstroke": 12,
    "kmeaning": "lend",
    "kgrade": 5,
    "kunyomi_ja": "か、かす、かし",
    "kunyomi": "ka, kasu, kashi",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "賃貸（ちんたい）",
        "lease"
      ],
      [
        "貸与する（たいよする）",
        "loan, lend"
      ],
      [
        "貸す（かす）",
        "lend"
      ],
      [
        "貸家（かしや）",
        "house for rent"
      ],
      [
        "貸し出す（かしだす）",
        "lend"
      ],
      [
        "貸し切り（かしきり）",
        "reservation"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "森",
    "kname": "shin-mori",
    "kstroke": 12,
    "kmeaning": "forest",
    "kgrade": 1,
    "kunyomi_ja": "もり",
    "kunyomi": "mori",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "森林（しんりん）",
        "forest"
      ],
      [
        "森（もり）",
        "woods"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "試",
    "kname": "tame(su)",
    "kstroke": 13,
    "kmeaning": "try, attempt",
    "kgrade": 4,
    "kunyomi_ja": "こころ、ため、こころみる、こころみ、ためす、ためし",
    "kunyomi": "kokoro, tame, kokoromiru, kokoromi, tamesu, tameshi",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "試験（しけん）",
        "examination"
      ],
      [
        "試合（しあい）",
        "game"
      ],
      [
        "試行錯誤（しこうさくご）",
        "trial and error"
      ],
      [
        "試作する（しさくする）",
        "make a prototype"
      ],
      [
        "試食する（ししょくする）",
        "taste, sample food"
      ],
      [
        "試着する（しちゃくする）",
        "try on clothes"
      ],
      [
        "試みる（こころみる）",
        "attempt"
      ],
      [
        "試す（ためす）",
        "try"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "験",
    "kname": "(shi)ken(kan)",
    "kstroke": 18,
    "kmeaning": "test",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "試験する（しけんする）",
        "examine"
      ],
      [
        "経験する（けいけんする）",
        "experience [v.t.]"
      ],
      [
        "実験する（じっけんする）",
        "experiment [v.t.]"
      ],
      [
        "受験する（じゅけんする）",
        "take an examination"
      ],
      [
        "体験する（たいけんする）",
        "experience [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 225,
    "rad_stroke": 10,
    "rad_name_ja": "うまへん",
    "rad_name": "umahen",
    "rad_meaning": "horse",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "題",
    "kname": "dai(moku)",
    "kstroke": 18,
    "kmeaning": "title, topic, problem",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダイ",
    "onyomi": "dai",
    "examples": [
      [
        "問題（もんだい）",
        "problem, question"
      ],
      [
        "宿題（しゅくだい）",
        "homework"
      ],
      [
        "題名（だいめい）",
        "title"
      ],
      [
        "主題（しゅだい）",
        "theme"
      ],
      [
        "話題（わだい）",
        "topic"
      ],
      [
        "課題（かだい）",
        "subject, problem, assignment"
      ],
      [
        "出題する（しゅつだいする）",
        "propose a question"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "全",
    "kname": "matta(ku)",
    "kstroke": 6,
    "kmeaning": "whole",
    "kgrade": 3,
    "kunyomi_ja": "まった、まったく、すべ、すべて",
    "kunyomi": "matta, mattaku, sube, subete",
    "onyomi_ja": "ゼン",
    "onyomi": "zen",
    "examples": [
      [
        "全然（ぜんぜん）",
        "not at all"
      ],
      [
        "全部（ぜんぶ）",
        "all"
      ],
      [
        "全体（ぜんたい）",
        "whole"
      ],
      [
        "全員（ぜんいん）",
        "all members"
      ],
      [
        "全力（ぜんりょく）",
        "all one's power"
      ],
      [
        "全世界（ぜんせかい）",
        "the whole world"
      ],
      [
        "完全な（かんぜんな）",
        "perfect"
      ],
      [
        "安全な（あんぜんな）",
        "safe"
      ],
      [
        "全く（まったく）",
        "really"
      ],
      [
        "*全うする（まっとうする）",
        "fulfill"
      ],
      [
        "全て（すべて）",
        "all"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "車",
    "kname": "kuruma",
    "kstroke": 7,
    "kmeaning": "vehicle, wheel, car",
    "kgrade": 1,
    "kunyomi_ja": "くるま",
    "kunyomi": "kuruma",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "自転車（じてんしゃ）",
        "bicycle"
      ],
      [
        "電車（でんしゃ）",
        "train"
      ],
      [
        "自動車（じどうしゃ）",
        "automobile"
      ],
      [
        "駐車する（ちゅうしゃする）",
        "park a car"
      ],
      [
        "停車する（ていしゃする）",
        "stop a car or train"
      ],
      [
        "車（くるま）",
        "car"
      ],
      [
        "車いす（くるまいす）",
        "wheel chair"
      ]
    ],
    "radical": "⾞",
    "rad_order": 195,
    "rad_stroke": 7,
    "rad_name_ja": "くるま",
    "rad_name": "kuruma",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "部",
    "kname": "he(ya)",
    "kstroke": 11,
    "kmeaning": "section",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ブ",
    "onyomi": "bu",
    "examples": [
      [
        "部（ぶ）",
        "section, category, department"
      ],
      [
        "部分（ぶぶん）",
        "portion"
      ],
      [
        "部長（ぶちょう）",
        "head of a section or department"
      ],
      [
        "部下（ぶか）",
        "subordinate person"
      ],
      [
        "全部（ぜんぶ）",
        "all"
      ],
      [
        "北部（ほくぶ）",
        "northern part"
      ],
      [
        "内部（ないぶ）",
        "inside, interior, inward"
      ],
      [
        "学部（がくぶ）",
        "department of a university"
      ],
      [
        "営業部（えいぎょうぶ）",
        "sales department"
      ],
      [
        "*阿部（あべ）",
        "Abe (surname)"
      ],
      [
        "*部屋（へや）",
        "room"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "目",
    "kname": "moku-me",
    "kstroke": 5,
    "kmeaning": "eye, item",
    "kgrade": 1,
    "kunyomi_ja": "め、ま",
    "kunyomi": "me, ma",
    "onyomi_ja": "モク",
    "onyomi": "moku",
    "examples": [
      [
        "目的地（もくてきち）",
        "destination"
      ],
      [
        "目標（もくひょう）",
        "objective, target"
      ],
      [
        "注目する（ちゅうもくする）",
        "pay attention, take note"
      ],
      [
        "目（め）",
        "eye"
      ],
      [
        "目を通す（めをとおす）",
        "scan, look over"
      ],
      [
        "駄目な（だめな）",
        "useless"
      ],
      [
        "真面目な（まじめな）",
        "serious"
      ],
      [
        "３ページ目（さんぺージめ）",
        "third page"
      ],
      [
        "目蓋（まぶた）",
        "eyelid"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "号",
    "kname": "(ban)gou",
    "kstroke": 5,
    "kmeaning": "number, designation, sign",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゴウ",
    "onyomi": "gou",
    "examples": [
      [
        "番号（ばんごう）",
        "number"
      ],
      [
        "信号（しんごう）",
        "traffic lights, signal"
      ],
      [
        "年号（ねんごう）",
        "name of an era"
      ],
      [
        "記号（きごう）",
        "symbol"
      ],
      [
        "暗号（あんごう）",
        "password"
      ],
      [
        "3号車（さんごうしゃ）",
        "3rd compartment (e.g. train)"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "研",
    "kname": "ken-to(gu)",
    "kstroke": 9,
    "kmeaning": "sand, sharpen",
    "kgrade": 3,
    "kunyomi_ja": "と、とぐ",
    "kunyomi": "to, togu",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "研修（けんしゅう）",
        "training"
      ],
      [
        "研究所（けんきゅうじょ）",
        "research institute"
      ],
      [
        "研究室（けんきゅうしつ）",
        "seminar room, prof's office"
      ],
      [
        "研摩する（けんまする）",
        "grind"
      ],
      [
        "研究する（けんきゅうする）",
        "research [ v.t.]"
      ],
      [
        "研ぐ（とぐ）",
        "sharpen"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "究",
    "kname": "kyuu-kiwa(meru)",
    "kstroke": 7,
    "kmeaning": "study exhaustively",
    "kgrade": 3,
    "kunyomi_ja": "きわ、きわめる",
    "kunyomi": "kiwa, kiwameru",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "究極（きゅうきょく）",
        "ultimate"
      ],
      [
        "研究する（けんきゅうする）",
        "research [v.t.]"
      ],
      [
        "追究する（ついきゅうする）",
        "investigate thoroughly"
      ],
      [
        "探究する（たんきゅうする）",
        "search [v.t.]"
      ],
      [
        "究める（きわめる）",
        "master"
      ]
    ],
    "radical": "",
    "rad_order": 147,
    "rad_stroke": 5,
    "rad_name_ja": "あなかんむり",
    "rad_name": "anakanmuri",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "室",
    "kname": "shitsu-muro",
    "kstroke": 9,
    "kmeaning": "room",
    "kgrade": 2,
    "kunyomi_ja": "むろ",
    "kunyomi": "muro",
    "onyomi_ja": "シツ",
    "onyomi": "shitsu",
    "examples": [
      [
        "教室（きょうしつ）",
        "classroom"
      ],
      [
        "研究室（けんきゅうしつ）",
        "seminar room, prof's office"
      ],
      [
        "図書室（としょしつ）",
        "library room"
      ],
      [
        "個室（こしつ）",
        "private room"
      ],
      [
        "和室（わしつ）",
        "Japanese-style room"
      ],
      [
        "温室（おんしつ）",
        "greenhouse"
      ],
      [
        "根室（ねむろ）",
        "Nemuro"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "連",
    "kname": "tsura(naru)",
    "kstroke": 10,
    "kmeaning": "link, in succession, group, accompaniment",
    "kgrade": 4,
    "kunyomi_ja": "つら、つ、つらなる、つらねる、つれる、つれ",
    "kunyomi": "tsura, tsu, tsuranaru, tsuraneru, tsureru, tsure",
    "onyomi_ja": "レン",
    "onyomi": "ren",
    "examples": [
      [
        "連休（れんきゅう）",
        "consecutive holidays"
      ],
      [
        "国連（こくれん）",
        "United Nations"
      ],
      [
        "関連する（かんれんする）",
        "relate"
      ],
      [
        "連続する（れんぞくする）",
        "be consecutive"
      ],
      [
        "連絡する（れんらくする）",
        "contact, connect"
      ],
      [
        "連なる（つらなる）",
        "stand in a row [v.i.]"
      ],
      [
        "連ねる（つらねる）",
        "join together in a row [v.t.]"
      ],
      [
        "連れて行く（つれていく）",
        "take someone along"
      ],
      [
        "子供連れ（こどもづれ）",
        "accompanied by children"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "花",
    "kname": "hana(bi)",
    "kstroke": 7,
    "kmeaning": "flower",
    "kgrade": 1,
    "kunyomi_ja": "はな",
    "kunyomi": "hana",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "花壇（かだん）",
        "flower bed"
      ],
      [
        "花瓶（かびん）",
        "vase"
      ],
      [
        "造花（ぞうか）",
        "artificial flowers"
      ],
      [
        "花粉（かふん）",
        "pollen"
      ],
      [
        "開花する（かいかする）",
        "bloom"
      ],
      [
        "花（はな）",
        "flower"
      ],
      [
        "花屋（はなや）",
        "florist"
      ],
      [
        "生け花（いけばな）",
        "flower arrangement"
      ],
      [
        "花嫁（はなよめ）",
        "bride"
      ],
      [
        "花火（はなび）",
        "fireworks"
      ],
      [
        "お花見（おはなみ）",
        "cherry-blossom viewing"
      ],
      [
        "草花（くさばな）",
        "plants and flowers"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "仕",
    "kname": "shi(goto)",
    "kstroke": 5,
    "kmeaning": "serve, do",
    "kgrade": 3,
    "kunyomi_ja": "つか、つかえる",
    "kunyomi": "tsuka, tsukaeru",
    "onyomi_ja": "シ、ジ",
    "onyomi": "shi, ji",
    "examples": [
      [
        "仕方（しかた）",
        "way, method"
      ],
      [
        "仕事（しごと）",
        "work"
      ],
      [
        "仕方がない（しかたがない）",
        "it can't be helped"
      ],
      [
        "仕組み（しくみ）",
        "structure"
      ],
      [
        "給仕（きゅうじ）",
        "waiter"
      ],
      [
        "仕上げる（しあげる）",
        "finish up"
      ],
      [
        "仕返しする（しかえしする）",
        "revenge"
      ],
      [
        "仕送りする（しおくりする）",
        "remit"
      ],
      [
        "仕える（つかえる）",
        "serve [v.i.]"
      ],
      [
        "宮仕え（みやづかえ）",
        "court service"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "経",
    "kname": "kei-he(ru)",
    "kstroke": 11,
    "kmeaning": "pass through, manage, sutra",
    "kgrade": 5,
    "kunyomi_ja": "へ、た、へる、たつ",
    "kunyomi": "he, ta, heru, tatsu",
    "onyomi_ja": "ケイ、キョウ",
    "onyomi": "kei, kyou",
    "examples": [
      [
        "経済的な（けいざいてきな）",
        "economical"
      ],
      [
        "経験（けいけん）",
        "experience"
      ],
      [
        "神経（しんけい）",
        "nerve"
      ],
      [
        "経費（けいひ）",
        "expenses"
      ],
      [
        "経度（けいど）",
        "longitude"
      ],
      [
        "経営する（けいえいする）",
        "run (e.g. company)"
      ],
      [
        "経由する（けいゆする）",
        "go by way of, go via"
      ],
      [
        "経過する（けいかする）",
        "pass, elapse [v.i.]"
      ],
      [
        "お経（おきょう）",
        "Buddhist sutras"
      ],
      [
        "経典（きょうてん）",
        "sacred books"
      ],
      [
        "経る（へる）",
        "pass by, pass through"
      ],
      [
        "経つ（たつ）",
        "elapse [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "国",
    "kname": "kuni",
    "kstroke": 8,
    "kmeaning": "country",
    "kgrade": 2,
    "kunyomi_ja": "くに",
    "kunyomi": "kuni",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "国際（こくさい）",
        "international"
      ],
      [
        "国立（こくりつ）",
        "nationally owned (institution)"
      ],
      [
        "国会（こっかい）",
        "parliament"
      ],
      [
        "四国（しこく）",
        "Shikoku"
      ],
      [
        "韓国（かんこく）",
        "South Korea"
      ],
      [
        "中国（ちゅうごく）",
        "China"
      ],
      [
        "帝国主義（ていこくしゅぎ）",
        "imperialism"
      ],
      [
        "帰国する（きこくする）",
        "return to one's own country"
      ],
      [
        "入国する（にゅうこくする）",
        "enter a country"
      ],
      [
        "国（くに）",
        "country"
      ],
      [
        "国々（くにぐに）",
        "countries"
      ],
      [
        "島国（しまぐに）",
        "island country"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "済",
    "kname": "sai-su(mu)",
    "kstroke": 11,
    "kmeaning": "settle, relieve, finish",
    "kgrade": 6,
    "kunyomi_ja": "す、すむ、すみ、すます、すませる",
    "kunyomi": "su, sumu, sumi, sumasu, sumaseru",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "経済的な（けいざいてきな）",
        "economical"
      ],
      [
        "経済（けいざい）",
        "economy"
      ],
      [
        "返済する（へんさいする）",
        "repay"
      ],
      [
        "救済する（きゅうさいする）",
        "rescue"
      ],
      [
        "済む（すむ）",
        "get done [v.i.]"
      ],
      [
        "済ませる（すませる）",
        "finish [v.t.]"
      ],
      [
        "支払い済み（しはらいずみ）",
        "paid"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "的",
    "kname": "mato",
    "kstroke": 8,
    "kmeaning": "target, adjectival suffix",
    "kgrade": 4,
    "kunyomi_ja": "まと",
    "kunyomi": "mato",
    "onyomi_ja": "テキ",
    "onyomi": "teki",
    "examples": [
      [
        "日本的な（にほんてきな）",
        "typically Japanese"
      ],
      [
        "歴史的な（れきしてきな）",
        "historic"
      ],
      [
        "合理的な（ごうりてきな）",
        "rational"
      ],
      [
        "私的な（してきな）",
        "personal"
      ],
      [
        "国際的な（こくさいてきな）",
        "international"
      ],
      [
        "的確な（てきかくな）",
        "precise"
      ],
      [
        "標的（ひょうてき）",
        "target"
      ],
      [
        "目的（もくてき）",
        "purpose"
      ],
      [
        "的中する（てきちゅうする）",
        "hit a target, prove correct"
      ],
      [
        "的（まと）",
        "target"
      ]
    ],
    "radical": "",
    "rad_order": 134,
    "rad_stroke": 5,
    "rad_name_ja": "はくへん",
    "rad_name": "hakuhen",
    "rad_meaning": "white",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "難",
    "kname": "muzuka(shii)",
    "kstroke": 18,
    "kmeaning": "difficult, disaster",
    "kgrade": 6,
    "kunyomi_ja": "かた、むずか、かたい、かたさ、むずかしい",
    "kunyomi": "kata, muzuka, katai, katasa, muzukashii",
    "onyomi_ja": "ナン",
    "onyomi": "nan",
    "examples": [
      [
        "難問（なんもん）",
        "difficult question"
      ],
      [
        "難民（なんみん）",
        "refugees"
      ],
      [
        "災難（さいなん）",
        "misfortune"
      ],
      [
        "就職難（しゅうしょくなん）",
        "bad job market"
      ],
      [
        "難解な（なんかいな）",
        "difficult"
      ],
      [
        "困難な（こんなんな）",
        "difficult"
      ],
      [
        "避難する（ひなんする）",
        "take refuge"
      ],
      [
        "非難する（ひなんする）",
        "blame"
      ],
      [
        "忘れ難い（わすれがたい）",
        "difficult to forget"
      ],
      [
        "難しい（むずかしい）",
        "difficult"
      ],
      [
        "*有り難う（ありがとう）",
        "Thank you"
      ]
    ],
    "radical": "⾫",
    "rad_order": 209,
    "rad_stroke": 8,
    "rad_name_ja": "ふるとり",
    "rad_name": "furutori",
    "rad_meaning": "small bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "広",
    "kname": "kou-hiro(i)",
    "kstroke": 5,
    "kmeaning": "wide",
    "kgrade": 2,
    "kunyomi_ja": "ひろ、ひろまる、ひろめる、ひろがる、ひろげる、ひろい、ひろさ",
    "kunyomi": "hiro, hiromaru, hiromeru, hirogaru, hirogeru, hiroi, hirosa",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "広大な（こうだいな）",
        "very large"
      ],
      [
        "広範囲（こうはんい）",
        "vast range"
      ],
      [
        "広告（こうこく）",
        "advertisement"
      ],
      [
        "広い（ひろい）",
        "spacious"
      ],
      [
        "広まる（ひろまる）",
        "spread [v.i.]"
      ],
      [
        "広がる（ひろがる）",
        "spread [v.i.]"
      ],
      [
        "広げる（ひろげる）",
        "spread [v.t.]"
      ],
      [
        "広場（ひろば）",
        "plaza"
      ],
      [
        "広島（ひろしま）",
        "Hiroshima"
      ],
      [
        "背広（せびろ）",
        "business suit"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "同",
    "kname": "ona(ji)",
    "kstroke": 6,
    "kmeaning": "same",
    "kgrade": 2,
    "kunyomi_ja": "おな、おなじ、おなじく",
    "kunyomi": "ona, onaji, onajiku",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "同一（どういつ）",
        "identical"
      ],
      [
        "同様（どうよう）",
        "same"
      ],
      [
        "同時に（どうじに）",
        "at the same time"
      ],
      [
        "同好会（どうこうかい）",
        "club of like-minded people"
      ],
      [
        "同窓会（どうそうかい）",
        "alumni meeting"
      ],
      [
        "同意する（どういする）",
        "agree"
      ],
      [
        "同情する（どうじょうする）",
        "sympathize"
      ],
      [
        "同居する（どうきょする）",
        "live together"
      ],
      [
        "共同する（きょうどうする）",
        "collaborate"
      ],
      [
        "同じ（おなじ）",
        "same"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "夏",
    "kname": "natsu",
    "kstroke": 10,
    "kmeaning": "summer",
    "kgrade": 2,
    "kunyomi_ja": "なつ",
    "kunyomi": "natsu",
    "onyomi_ja": "カ、ゲ",
    "onyomi": "ka, ge",
    "examples": [
      [
        "夏期講座（かきこうざ）",
        "course in summer term"
      ],
      [
        "初夏（しょか）",
        "early summer"
      ],
      [
        "夏至（げし）",
        "summer solstice"
      ],
      [
        "夏（なつ）",
        "summer"
      ],
      [
        "真夏（まなつ）",
        "midsummer"
      ],
      [
        "常夏（とこなつ）",
        "everlasting summer"
      ]
    ],
    "radical": "⼢",
    "rad_order": 41,
    "rad_stroke": 3,
    "rad_name_ja": "なつあし",
    "rad_name": "natsuashi",
    "rad_meaning": "to go slowly",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "春",
    "kname": "haru",
    "kstroke": 9,
    "kmeaning": "spring",
    "kgrade": 2,
    "kunyomi_ja": "はる",
    "kunyomi": "haru",
    "onyomi_ja": "シュン",
    "onyomi": "shun",
    "examples": [
      [
        "春分の日（しゅんぶんのひ）",
        "vernal equinox"
      ],
      [
        "青春（せいしゅん）",
        "springtime of life"
      ],
      [
        "立春（りっしゅん）",
        "1st day of spring"
      ],
      [
        "春（はる）",
        "spring"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "必",
    "kname": "kanara(zu)",
    "kstroke": 5,
    "kmeaning": "without failure, surely",
    "kgrade": 4,
    "kunyomi_ja": "かなら、かならず",
    "kunyomi": "kanara, kanarazu",
    "onyomi_ja": "ヒツ",
    "onyomi": "hitsu",
    "examples": [
      [
        "必要な（ひつような）",
        "necessary"
      ],
      [
        "必然的な（ひつぜんてきな）",
        "inevitable"
      ],
      [
        "必死（ひっし）",
        "desperate"
      ],
      [
        "必勝（ひっしょう）",
        "certain victory"
      ],
      [
        "必読書（ひつどくしょ）",
        "a must-read book"
      ],
      [
        "必ず（かならず）",
        "without fail"
      ],
      [
        "必ずしも（かならずしも）",
        "(not) always"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "要",
    "kname": "kaname",
    "kstroke": 9,
    "kmeaning": "important, summarize, require",
    "kgrade": 4,
    "kunyomi_ja": "い、かなめ、いる",
    "kunyomi": "i, kaname, iru",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "必要な（ひつような）",
        "necessary"
      ],
      [
        "不要な（ふような）",
        "unnecessary"
      ],
      [
        "重要な（じゅうような）",
        "important"
      ],
      [
        "需要（じゅよう）",
        "demand"
      ],
      [
        "要約する（ようやくする）",
        "summarize"
      ],
      [
        "要求する（ようきゅうする）",
        "demand [v.t.]"
      ],
      [
        "要する（ようする）",
        "require"
      ],
      [
        "要る（いる）",
        "need"
      ],
      [
        "肝心要（かんじんかなめ）",
        "main point"
      ],
      [
        "要石（かなめいし）",
        "keystone"
      ]
    ],
    "radical": "⻃",
    "rad_order": 178,
    "rad_stroke": 6,
    "rad_name_ja": "にし",
    "rad_name": "nishi",
    "rad_meaning": "cover, west",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "交",
    "kname": "maji(waru)",
    "kstroke": 6,
    "kmeaning": "intercourse, interchange",
    "kgrade": 2,
    "kunyomi_ja": "まじ、ま、か、まじわる、まじえる、まじる、まざる、まぜる、かう、かわす",
    "kunyomi": "maji, ma, ka, majiwaru, majieru, majiru, mazaru, mazeru, kau, kawasu",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "交通（こうつう）",
        "traffic"
      ],
      [
        "交番（こうばん）",
        "police box"
      ],
      [
        "国交（こっこう）",
        "diplomatic relations"
      ],
      [
        "交換する（こうかんする）",
        "exchange [v.t.]"
      ],
      [
        "交流する（こうりゅうする）",
        "intermingle"
      ],
      [
        "交際する（こうさいする）",
        "keep company, date"
      ],
      [
        "交わる（まじわる）",
        "cross, join [v.i.]"
      ],
      [
        "交ざる（まざる）",
        "be mixed, join [v.i.]"
      ],
      [
        "交じる（まじる）",
        "be mixed [v.i.]"
      ],
      [
        "飛び交う（とびかう）",
        "fly past each other"
      ],
      [
        "行き交う（いきかう）",
        "go past each other"
      ]
    ],
    "radical": "⼇",
    "rad_order": 9,
    "rad_stroke": 2,
    "rad_name_ja": "なべぶた",
    "rad_name": "nabebuta",
    "rad_meaning": "lid, top",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "時",
    "kname": "ji-toki",
    "kstroke": 10,
    "kmeaning": "time",
    "kgrade": 2,
    "kunyomi_ja": "とき",
    "kunyomi": "toki",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "時間（じかん）",
        "time"
      ],
      [
        "時代（じだい）",
        "era"
      ],
      [
        "一時間（いちじかん）",
        "one hour"
      ],
      [
        "一時（いちじ）",
        "one o'clock"
      ],
      [
        "同時（どうじ）",
        "simultaneous(ly)"
      ],
      [
        "当時（とうじ）",
        "in those days, then, at that time"
      ],
      [
        "日時（にちじ）",
        "date and time"
      ],
      [
        "時（とき）",
        "time, occasion"
      ],
      [
        "時々（ときどき）",
        "sometimes"
      ],
      [
        "昼時（ひるどき）",
        "noon"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "通",
    "kname": "too(ru)",
    "kstroke": 10,
    "kmeaning": "pass, communicate, commute",
    "kgrade": 2,
    "kunyomi_ja": "とお、かよ、とおる、とおり、とおす、とおし、かよう",
    "kunyomi": "too, kayo, tooru, toori, toosu, tooshi, kayou",
    "onyomi_ja": "ツウ、ツ",
    "onyomi": "tsuu, tsu",
    "examples": [
      [
        "交通事故（こうつうじこ）",
        "traffic accident"
      ],
      [
        "普通（ふつう）",
        "usually"
      ],
      [
        "通勤する（つうきんする）",
        "commute to work"
      ],
      [
        "通学する（つうがくする）",
        "commute to school"
      ],
      [
        "共通する（きょうつうする）",
        "common"
      ],
      [
        "通夜（つや）",
        "all-night vigil over a body"
      ],
      [
        "通る（とおる）",
        "go through [v.i.]"
      ],
      [
        "通す（とおす）",
        "let pass [v.t.]"
      ],
      [
        "通り（とおり）",
        "avenue"
      ],
      [
        "大通り（おおどおり）",
        "main street"
      ],
      [
        "通う（かよう）",
        "commute"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "冬",
    "kname": "fuyu",
    "kstroke": 5,
    "kmeaning": "winter",
    "kgrade": 2,
    "kunyomi_ja": "ふゆ",
    "kunyomi": "fuyu",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "冬期（とうき）",
        "winter term"
      ],
      [
        "初冬（しょとう）",
        "early winter"
      ],
      [
        "冬至（とうじ）",
        "winter solstice"
      ],
      [
        "冬眠（とうみん）",
        "hibernation"
      ],
      [
        "越冬する（えっとうする）",
        "pass the winter"
      ],
      [
        "冬（ふゆ）",
        "winter"
      ],
      [
        "冬学期（ふゆがっき）",
        "winter semester"
      ],
      [
        "真冬（まふゆ）",
        "midwinter"
      ]
    ],
    "radical": "⼎",
    "rad_order": 19,
    "rad_stroke": 2,
    "rad_name_ja": "にすい",
    "rad_name": "nisui",
    "rad_meaning": "ice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "走",
    "kname": "sou-hashi(ru)",
    "kstroke": 7,
    "kmeaning": "run",
    "kgrade": 2,
    "kunyomi_ja": "はし、はしる、はしり",
    "kunyomi": "hashi, hashiru, hashiri",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "滑走路（かっそうろ）",
        "runway"
      ],
      [
        "御馳走する（ごちそうする）",
        "treat someone to a meal"
      ],
      [
        "競走する（きょうそうする）",
        "race"
      ],
      [
        "逃走する（とうそうする）",
        "escape [v.i.]"
      ],
      [
        "脱走する（だっそうする）",
        "escape [v.i.]"
      ],
      [
        "走る（はしる）",
        "run"
      ],
      [
        "*師走（しわす）",
        "traditional name for December"
      ]
    ],
    "radical": "⾛",
    "rad_order": 190,
    "rad_stroke": 7,
    "rad_name_ja": "はしる",
    "rad_name": "hashiru",
    "rad_meaning": "to run",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "重",
    "kname": "juu-omo(ri)",
    "kstroke": 9,
    "kmeaning": "heavy",
    "kgrade": 3,
    "kunyomi_ja": "え、おも、かさ、おもい、おもさ、おもり、おもたい、おもし、かさねる、かさなる",
    "kunyomi": "e, omo, kasa, omoi, omosa, omori, omotai, omoshi, kasaneru, kasanaru",
    "onyomi_ja": "ジュウ、チョウ",
    "onyomi": "juu, chou",
    "examples": [
      [
        "体重（たいじゅう）",
        "body weight"
      ],
      [
        "厳重な（げんじゅうな）",
        "strict"
      ],
      [
        "重要な（じゅうような）",
        "important"
      ],
      [
        "重視する（じゅうしする）",
        "give serious consideration"
      ],
      [
        "尊重する（そんちょうする）",
        "respect"
      ],
      [
        "慎重な（しんちょうな）",
        "prudent"
      ],
      [
        "貴重な（きちょうな）",
        "precious"
      ],
      [
        "二重（ふたえ）",
        "two layers"
      ],
      [
        "重さ（おもさ）",
        "weight"
      ],
      [
        "重い（おもい）",
        "heavy"
      ],
      [
        "重ねる（かさねる）",
        "pile up [v.t.]"
      ],
      [
        "重なる（かさなる）",
        "be piled up [v.i.]"
      ]
    ],
    "radical": "⾥",
    "rad_order": 200,
    "rad_stroke": 7,
    "rad_name_ja": "さと",
    "rad_name": "sato",
    "rad_meaning": "village, (3.93 km)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "卒",
    "kname": "sotsu(gyou)",
    "kstroke": 8,
    "kmeaning": "graduate",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソツ",
    "onyomi": "sotsu",
    "examples": [
      [
        "卒業する（そつぎょうする）",
        "graduate"
      ],
      [
        "卒論（そつろん）",
        "graduation (senior) thesis"
      ],
      [
        "中卒（ちゅうそつ）",
        "junior high school graduate"
      ],
      [
        "高卒（こうそつ）",
        "high school graduate"
      ],
      [
        "大卒（だいそつ）",
        "university graduate"
      ],
      [
        "脳卒中（のうそっちゅう）",
        "stroke"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "社",
    "kname": "yashiro",
    "kstroke": 7,
    "kmeaning": "company, society",
    "kgrade": 2,
    "kunyomi_ja": "やしろ",
    "kunyomi": "yashiro",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "社会（しゃかい）",
        "society"
      ],
      [
        "社長（しゃちょう）",
        "company president"
      ],
      [
        "会社（かいしゃ）",
        "company"
      ],
      [
        "本社（ほんしゃ）",
        "headquarters"
      ],
      [
        "支社（ししゃ）",
        "branch office"
      ],
      [
        "出版社（しゅっぱんしゃ）",
        "publisher"
      ],
      [
        "神社（じんじゃ）",
        "Shinto shrine"
      ],
      [
        "入社する（にゅうしゃする）",
        "join a company"
      ],
      [
        "お社（おやしろ）",
        "Shinto shrine [hon.]"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "勤",
    "kname": "kin-tsuto(meru)",
    "kstroke": 12,
    "kmeaning": "service",
    "kgrade": 6,
    "kunyomi_ja": "つと、つとめる、つとまる",
    "kunyomi": "tsuto, tsutomeru, tsutomaru",
    "onyomi_ja": "キン、ゴン",
    "onyomi": "kin, gon",
    "examples": [
      [
        "夜勤（やきん）",
        "night shift"
      ],
      [
        "欠勤（けっきん）",
        "absence (from work)"
      ],
      [
        "皆勤賞（かいきんしょう）",
        "prize for perfect attendance"
      ],
      [
        "勤勉な（きんべんな）",
        "diligent"
      ],
      [
        "勤務する（きんむする）",
        "work [v.i.]"
      ],
      [
        "通勤する（つうきんする）",
        "commute to work"
      ],
      [
        "転勤する（てんきんする）",
        "transfer [v.i.]"
      ],
      [
        "勤行（ごんぎょう）",
        "Buddhist religious service"
      ],
      [
        "勤める（つとめる）",
        "work (for), exert oneself"
      ],
      [
        "会社勤め（かいしゃづとめ）",
        "to serve in a company [n.]"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "屋",
    "kname": "oku-ya",
    "kstroke": 9,
    "kmeaning": "house, small shop",
    "kgrade": 3,
    "kunyomi_ja": "や",
    "kunyomi": "ya",
    "onyomi_ja": "オク",
    "onyomi": "oku",
    "examples": [
      [
        "屋上（おくじょう）",
        "rooftop"
      ],
      [
        "屋内（おくない）",
        "indoor"
      ],
      [
        "屋外（おくがい）",
        "outdoor"
      ],
      [
        "屋敷（やしき）",
        "mansion"
      ],
      [
        "屋根（やね）",
        "roof"
      ],
      [
        "本屋（ほんや）",
        "bookstore"
      ],
      [
        "部屋（へや）",
        "room"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "午",
    "kname": "(shou)go",
    "kstroke": 4,
    "kmeaning": "noon",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゴ",
    "onyomi": "go",
    "examples": [
      [
        "午前（ごぜん）",
        "morning"
      ],
      [
        "午後（ごご）",
        "afternoon"
      ],
      [
        "正午（しょうご）",
        "noon"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "机",
    "kname": "tsukue",
    "kstroke": 6,
    "kmeaning": "desk",
    "kgrade": 6,
    "kunyomi_ja": "つくえ",
    "kunyomi": "tsukue",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "机上の空論（きじょうのくうろん）",
        "empty theory"
      ],
      [
        "机（つくえ）",
        "desk"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "間",
    "kname": "aida",
    "kstroke": 12,
    "kmeaning": "interval, between",
    "kgrade": 2,
    "kunyomi_ja": "あいだ、ま",
    "kunyomi": "aida, ma",
    "onyomi_ja": "カン、ケン",
    "onyomi": "kan, ken",
    "examples": [
      [
        "一週間（いっしゅうかん）",
        "one week"
      ],
      [
        "二時間（にじかん）",
        "two hours"
      ],
      [
        "世間（せけん）",
        "society, the public, people"
      ],
      [
        "人間（にんげん）",
        "human"
      ],
      [
        "この間（このあいだ）",
        "the other day"
      ],
      [
        "間に（あいだに）",
        "in between, while"
      ],
      [
        "居間（いま）",
        "living room"
      ],
      [
        "仲間（なかま）",
        "circle of friends"
      ],
      [
        "間違い（まちがい）",
        "mistake"
      ],
      [
        "間違える（まちがえる）",
        "make a mistake"
      ],
      [
        "間に合う（まにあう）",
        "be in time, be enough"
      ],
      [
        "昼間（ひるま）",
        "day time"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "使",
    "kname": "shi-tsuka(u)",
    "kstroke": 8,
    "kmeaning": "use, envoy",
    "kgrade": 3,
    "kunyomi_ja": "つか、つかう、つかい",
    "kunyomi": "tsuka, tsukau, tsukai",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "使用する（しようする）",
        "use [v.t.]"
      ],
      [
        "行使する（こうしする）",
        "exercise [v.t.]"
      ],
      [
        "駆使する（くしする）",
        "use freely"
      ],
      [
        "使役形（しえきけい）",
        "causative form"
      ],
      [
        "使命（しめい）",
        "mission"
      ],
      [
        "大使（たいし）",
        "ambassador"
      ],
      [
        "天使（てんし）",
        "angel"
      ],
      [
        "使う（つかう）",
        "use"
      ],
      [
        "魔法使い（まほうつかい）",
        "wizard"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "寒",
    "kname": "samu(i)",
    "kstroke": 12,
    "kmeaning": "cold",
    "kgrade": 3,
    "kunyomi_ja": "さむ、さむい",
    "kunyomi": "samu, samui",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "寒気（かんき）",
        "the cold (weather)"
      ],
      [
        "寒波（かんぱ）",
        "spell of cold weather"
      ],
      [
        "寒い（さむい）",
        "cold (e.g. weather)"
      ],
      [
        "寒気（さむけ）",
        "chill"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "暑",
    "kname": "sho-atsu(i)",
    "kstroke": 12,
    "kmeaning": "summer heat, hot",
    "kgrade": 3,
    "kunyomi_ja": "あつ、あつい、あつさ",
    "kunyomi": "atsu, atsui, atsusa",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "残暑（ざんしょ）",
        "lingering summer heat"
      ],
      [
        "猛暑（もうしょ）",
        "fierce heat (weather)"
      ],
      [
        "避暑（ひしょ）",
        "going to a summer resort"
      ],
      [
        "暑中見舞（しょちゅうみまい）",
        "summer greeting card"
      ],
      [
        "暑い（あつい）",
        "hot"
      ],
      [
        "蒸し暑い（むしあつい）",
        "humid"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "冷",
    "kname": "tsume(tai)",
    "kstroke": 7,
    "kmeaning": "cold",
    "kgrade": 4,
    "kunyomi_ja": "つめ、ひ、さ、つめたい、ひえる、ひや、ひややか、ひやす、ひやかす、さめる、さます",
    "kunyomi": "tsume, hi, sa, tsumetai, hieru, hiya, hiyayaka, hiyasu, hiyakasu, sameru, samasu",
    "onyomi_ja": "レイ",
    "onyomi": "rei",
    "examples": [
      [
        "冷蔵庫（れいぞうこ）",
        "refrigerator"
      ],
      [
        "冷凍庫（れいとうこ）",
        "freezer"
      ],
      [
        "冷房（れいぼう）",
        "air-conditioning"
      ],
      [
        "冷静な（れいせいな）",
        "calm"
      ],
      [
        "冷酷な（れいこくな）",
        "cruel"
      ],
      [
        "冷たい（つめたい）",
        "cold"
      ],
      [
        "冷やす（ひやす）",
        "cool [v.t.]"
      ],
      [
        "冷える（ひえる）",
        "grow cold [v.i.]"
      ],
      [
        "冷ややかな（ひややかな）",
        "cold"
      ],
      [
        "冷める（さめる）",
        "become cool [v.i.]"
      ],
      [
        "冷ます（さます）",
        "let cool [v.t.]"
      ]
    ],
    "radical": "⼎",
    "rad_order": 19,
    "rad_stroke": 2,
    "rad_name_ja": "にすい",
    "rad_name": "nisui",
    "rad_meaning": "ice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "誰",
    "kname": "dare",
    "kstroke": 15,
    "kmeaning": "who, someone",
    "kgrade": "n/a",
    "kunyomi_ja": "だれ",
    "kunyomi": "dare",
    "onyomi_ja": "スイ",
    "onyomi": "sui",
    "examples": [
      [
        "誰何（すいか）",
        "asking a person's identity"
      ],
      [
        "誰（だれ）",
        "who"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "急",
    "kname": "iso(gu)",
    "kstroke": 9,
    "kmeaning": "urgent, hurry, sudden",
    "kgrade": 3,
    "kunyomi_ja": "いそ、いそぐ、いそぎ",
    "kunyomi": "iso, isogu, isogi",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "急用（きゅうよう）",
        "urgent business"
      ],
      [
        "急行（きゅうこう）",
        "express"
      ],
      [
        "急病（きゅうびょう）",
        "sudden illness"
      ],
      [
        "特急電車（とっきゅうでんしゃ）",
        "express train"
      ],
      [
        "急激な（きゅうげきな）",
        "sudden"
      ],
      [
        "緊急な（きんきゅうな）",
        "pressing"
      ],
      [
        "急増する（きゅうぞうする）",
        "proliferate [v.i.]"
      ],
      [
        "急ぐ（いそぐ）",
        "hurry"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "用",
    "kname": "mochi(iru)",
    "kstroke": 5,
    "kmeaning": "employ, things to do",
    "kgrade": 2,
    "kunyomi_ja": "もち、もちいる",
    "kunyomi": "mochi, mochiiru",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "用事（ようじ）",
        "task"
      ],
      [
        "急用（きゅうよう）",
        "urgent business"
      ],
      [
        "費用（ひよう）",
        "cost"
      ],
      [
        "家庭用（かていよう）",
        "for home (vs. business) use"
      ],
      [
        "用心深い（ようじんぶかい）",
        "watchful"
      ],
      [
        "利用する（りようする）",
        "utilize"
      ],
      [
        "用意する（よういする）",
        "prepare"
      ],
      [
        "採用する（さいようする）",
        "adopt"
      ],
      [
        "信用する（しんようする）",
        "believe"
      ],
      [
        "用いる（もちいる）",
        "make use of"
      ]
    ],
    "radical": "⽤",
    "rad_order": 127,
    "rad_stroke": 5,
    "rad_name_ja": "もちいる",
    "rad_name": "mochiiru",
    "rad_meaning": "to use",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "頃",
    "kname": "koro",
    "kstroke": 11,
    "kmeaning": "time, period",
    "kgrade": "n/a",
    "kunyomi_ja": "ころ",
    "kunyomi": "koro",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "頃日（けいじつ）",
        "recently"
      ],
      [
        "頃（ころ）",
        "approximately (time)"
      ],
      [
        "三時頃（さんじごろ）",
        "about 3 o'clock"
      ],
      [
        "この頃（このごろ）",
        "recently"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "内",
    "kname": "nai-uchi",
    "kstroke": 4,
    "kmeaning": "inside",
    "kgrade": 2,
    "kunyomi_ja": "うち",
    "kunyomi": "uchi",
    "onyomi_ja": "ナイ",
    "onyomi": "nai",
    "examples": [
      [
        "内容（ないよう）",
        "content"
      ],
      [
        "内部（ないぶ）",
        "interior"
      ],
      [
        "内科（ないか）",
        "internal medicine"
      ],
      [
        "内面（ないめん）",
        "internal (e.g. personality)"
      ],
      [
        "家内（かない）",
        "my wife"
      ],
      [
        "国内（こくない）",
        "domestic (vs. international)"
      ],
      [
        "以内（いない）",
        "within"
      ],
      [
        "案内する（あんないする）",
        "guide"
      ],
      [
        "内側（うちがわ）",
        "inside"
      ],
      [
        "内気な（うちきな）",
        "shy"
      ]
    ],
    "radical": "⼌",
    "rad_order": 17,
    "rad_stroke": 2,
    "rad_name_ja": "けいがまえ",
    "rad_name": "keigamae",
    "rad_meaning": "to enclose",
    "rad_position_ja": "かまえ, けいがまえ",
    "rad_position": "kamae, keigamae"
  },
  {
    "kanji": "伝",
    "kname": "tsuta(waru)",
    "kstroke": 6,
    "kmeaning": "transmit",
    "kgrade": 4,
    "kunyomi_ja": "つた、つたわる、つたえる、つたう、つたい",
    "kunyomi": "tsuta, tsutawaru, tsutaeru, tsutau, tsutai",
    "onyomi_ja": "デン",
    "onyomi": "den",
    "examples": [
      [
        "伝統（でんとう）",
        "tradition"
      ],
      [
        "以心伝心（いしんでんしん）",
        "tacit understanding"
      ],
      [
        "伝言する（でんごんする）",
        "convey message"
      ],
      [
        "伝達する（でんたつする）",
        "convey (e.g. news)"
      ],
      [
        "伝染する（でんせんする）",
        "transmit (e.g. disease)"
      ],
      [
        "宣伝する（せんでんする）",
        "advertise"
      ],
      [
        "遺伝する（いでんする）",
        "be passed on (e.g. heredity)"
      ],
      [
        "伝える（つたえる）",
        "tell"
      ],
      [
        "伝わる（つたわる）",
        "be transmitted"
      ],
      [
        "手伝う（てつだう）",
        "assist"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "半",
    "kname": "han-naka(ba)",
    "kstroke": 5,
    "kmeaning": "half",
    "kgrade": 2,
    "kunyomi_ja": "なか、なかば",
    "kunyomi": "naka, nakaba",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "半分（はんぶん）",
        "half"
      ],
      [
        "半額（はんがく）",
        "half price"
      ],
      [
        "半導体（はんどうたい）",
        "semiconductor"
      ],
      [
        "半熟（はんじゅく）",
        "soft-boiled"
      ],
      [
        "一時半（いちじはん）",
        "half past one"
      ],
      [
        "二年半（にねんはん）",
        "two and a half years"
      ],
      [
        "月半ば（つきなかば）",
        "middle of the month"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "欲",
    "kname": "ho(shii)",
    "kstroke": 11,
    "kmeaning": "desire, want",
    "kgrade": 6,
    "kunyomi_ja": "ほ、ほっする、ほしい",
    "kunyomi": "ho, hossuru, hoshii",
    "onyomi_ja": "ヨク",
    "onyomi": "yoku",
    "examples": [
      [
        "欲（よく）",
        "greed"
      ],
      [
        "食欲（しょくよく）",
        "appetite (for food)"
      ],
      [
        "物欲（ぶつよく）",
        "materialistic desire"
      ],
      [
        "意欲（いよく）",
        "ambition"
      ],
      [
        "知識欲（ちしきよく）",
        "intellectual thirst"
      ],
      [
        "欲望（よくぼう）",
        "desire"
      ],
      [
        "欲張り（よくばり）",
        "greedy"
      ],
      [
        "貪欲な（どんよくな）",
        "greedy"
      ],
      [
        "欲する（ほっする）",
        "want"
      ],
      [
        "欲しい（ほしい）",
        "want [adj.]"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "初",
    "kname": "sho-haji(me)",
    "kstroke": 7,
    "kmeaning": "first",
    "kgrade": 4,
    "kunyomi_ja": "はじ、はつ、うい、そ、はじめて、はじめ、はつ、そめる",
    "kunyomi": "haji, hatsu, ui, so, hajimete, hajime, hatsu, someru",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "最初（さいしょ）",
        "beginning"
      ],
      [
        "初日（しょにち）",
        "first day"
      ],
      [
        "初対面（しょたいめん）",
        "first meeting"
      ],
      [
        "初級（しょきゅう）",
        "elementary level"
      ],
      [
        "初心者（しょしんしゃ）",
        "beginner"
      ],
      [
        "初期（しょき）",
        "early (days)"
      ],
      [
        "初めて（はじめて）",
        "for the first time"
      ],
      [
        "初めに（はじめに）",
        "first of all"
      ],
      [
        "初恋（はつこい）",
        "first love"
      ],
      [
        "初々しい（ういういしい）",
        "innocent"
      ],
      [
        "なれ初め（なれそめ）",
        "start of a romance"
      ],
      [
        "書き初め（かきぞめ）",
        "New Year's writing"
      ]
    ],
    "radical": "⼑",
    "rad_order": 22,
    "rad_stroke": 2,
    "rad_name_ja": "かたな",
    "rad_name": "katana",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "次",
    "kname": "tsugi",
    "kstroke": 6,
    "kmeaning": "next",
    "kgrade": 3,
    "kunyomi_ja": "つ、つぐ、つぎ",
    "kunyomi": "tsu, tsugu, tsugi",
    "onyomi_ja": "ジ、シ",
    "onyomi": "ji, shi",
    "examples": [
      [
        "次回（じかい）",
        "next time"
      ],
      [
        "次週（じしゅう）",
        "next week"
      ],
      [
        "次男（じなん）",
        "second son"
      ],
      [
        "目次（もくじ）",
        "table of contents"
      ],
      [
        "次第に（しだいに）",
        "gradually"
      ],
      [
        "相次ぐ（あいつぐ）",
        "follow in succession"
      ],
      [
        "取り次ぐ（とりつぐ）",
        "relay, act as an agent, handle"
      ],
      [
        "次（つぎ）",
        "next"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "最",
    "kname": "sai-motto(mo)",
    "kstroke": 12,
    "kmeaning": "most",
    "kgrade": 4,
    "kunyomi_ja": "もっと、もっとも",
    "kunyomi": "motto, mottomo",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "最後（さいご）",
        "last"
      ],
      [
        "最初（さいしょ）",
        "first"
      ],
      [
        "最近（さいきん）",
        "recently"
      ],
      [
        "最高（さいこう）",
        "best"
      ],
      [
        "最低（さいてい）",
        "worst"
      ],
      [
        "最大（さいだい）",
        "largest"
      ],
      [
        "最小（さいしょう）",
        "smallest"
      ],
      [
        "最長（さいちょう）",
        "longest"
      ],
      [
        "最短（さいたん）",
        "shortest"
      ],
      [
        "最新（さいしん）",
        "latest"
      ],
      [
        "最も（もっとも）",
        "most"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "田",
    "kname": "den-ta",
    "kstroke": 5,
    "kmeaning": "rice field",
    "kgrade": 1,
    "kunyomi_ja": "た",
    "kunyomi": "ta",
    "onyomi_ja": "デン",
    "onyomi": "den",
    "examples": [
      [
        "水田（すいでん）",
        "rice field"
      ],
      [
        "田園（でんえん）",
        "rural area"
      ],
      [
        "田んぼ（たんぼ）",
        "rice field"
      ],
      [
        "田植え（たうえ）",
        "rice planting"
      ],
      [
        "松田（まつだ）",
        "Matsuda (surname)"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "石",
    "kname": "ishi",
    "kstroke": 5,
    "kmeaning": "stone",
    "kgrade": 1,
    "kunyomi_ja": "いし",
    "kunyomi": "ishi",
    "onyomi_ja": "セキ、シャク、コク",
    "onyomi": "seki, shaku, koku",
    "examples": [
      [
        "石像（せきぞう）",
        "stone statue"
      ],
      [
        "石炭（せきたん）",
        "coal"
      ],
      [
        "石油（せきゆ）",
        "petroleum"
      ],
      [
        "石鹸（せっけん）",
        "soap"
      ],
      [
        "宝石（ほうせき）",
        "gem"
      ],
      [
        "磁石（じしゃく）",
        "magnet"
      ],
      [
        "石（こく）",
        "unit of measurement"
      ],
      [
        "石（いし）",
        "stone"
      ]
    ],
    "radical": "⽯",
    "rad_order": 142,
    "rad_stroke": 5,
    "rad_name_ja": "いし",
    "rad_name": "ishi",
    "rad_meaning": "stone",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "原",
    "kname": "gen-hara",
    "kstroke": 10,
    "kmeaning": "plain, original",
    "kgrade": 2,
    "kunyomi_ja": "はら",
    "kunyomi": "hara",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "原稿（げんこう）",
        "manuscript"
      ],
      [
        "原因（げんいん）",
        "cause, origin"
      ],
      [
        "原則（げんそく）",
        "principle"
      ],
      [
        "原点（げんてん）",
        "starting point"
      ],
      [
        "原爆（げんばく）",
        "atomic bomb"
      ],
      [
        "原告（げんこく）",
        "plaintiff"
      ],
      [
        "高原（こうげん）",
        "plateau"
      ],
      [
        "原始的な（げんしてきな）",
        "primitive"
      ],
      [
        "野原（のはら）",
        "field"
      ]
    ],
    "radical": "⼚",
    "rad_order": 31,
    "rad_stroke": 2,
    "rad_name_ja": "がんだれ",
    "rad_name": "gandare",
    "rad_meaning": "cliff",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "駅",
    "kname": "(kaku)eki",
    "kstroke": 14,
    "kmeaning": "station",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "エキ",
    "onyomi": "eki",
    "examples": [
      [
        "駅（えき）",
        "station"
      ],
      [
        "駅前（えきまえ）",
        "in front of the station"
      ],
      [
        "駅長（えきちょう）",
        "station master"
      ],
      [
        "駅弁（えきべん）",
        "(boxed) lunch sold in stations"
      ],
      [
        "東京駅（とうきょうえき）",
        "Tokyo station"
      ]
    ],
    "radical": "",
    "rad_order": 225,
    "rad_stroke": 10,
    "rad_name_ja": "うまへん",
    "rad_name": "umahen",
    "rad_meaning": "horse",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "辺",
    "kname": "hen-ata(ri)",
    "kstroke": 5,
    "kmeaning": "vicinity, borderland",
    "kgrade": 4,
    "kunyomi_ja": "あた、あたり、べ",
    "kunyomi": "ata, atari, be",
    "onyomi_ja": "ヘン",
    "onyomi": "hen",
    "examples": [
      [
        "この辺（このへん）",
        "around here"
      ],
      [
        "周辺（しゅうへん）",
        "circumference"
      ],
      [
        "近辺（きんぺん）",
        "vicinity"
      ],
      [
        "辺り（あたり）",
        "nearby"
      ],
      [
        "窓辺（まどべ）",
        "by the window"
      ],
      [
        "川辺（かわべ）",
        "riverside"
      ],
      [
        "渡辺（わたなべ）",
        "Watanabe (surname)"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "道",
    "kname": "dou-michi",
    "kstroke": 12,
    "kmeaning": "way, street, road",
    "kgrade": 2,
    "kunyomi_ja": "みち",
    "kunyomi": "michi",
    "onyomi_ja": "ドウ、トウ",
    "onyomi": "dou, tou",
    "examples": [
      [
        "道路（どうろ）",
        "road"
      ],
      [
        "道場（どうじょう）",
        "hall used for martial arts training"
      ],
      [
        "歩道（ほどう）",
        "sidewalk"
      ],
      [
        "水道（すいどう）",
        "water supply"
      ],
      [
        "書道（しょどう）",
        "calligraphy"
      ],
      [
        "地下道（ちかどう）",
        "underground tunnel"
      ],
      [
        "神道（しんとう）",
        "Shintoism"
      ],
      [
        "報道する（ほうどうする）",
        "report"
      ],
      [
        "道（みち）",
        "street"
      ],
      [
        "近道（ちかみち）",
        "shortcut"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "分",
    "kname": "fun-wa(keru)",
    "kstroke": 4,
    "kmeaning": "divide, part, minute",
    "kgrade": 2,
    "kunyomi_ja": "わ、わける、わかる、わかれる",
    "kunyomi": "wa, wakeru, wakaru, wakareru",
    "onyomi_ja": "ブン、フン、ブ",
    "onyomi": "bun, fun, bu",
    "examples": [
      [
        "随分（ずいぶん）",
        "extremely"
      ],
      [
        "多分（たぶん）",
        "perhaps"
      ],
      [
        "十分に（じゅうぶんに）",
        "enough"
      ],
      [
        "自分（じぶん）",
        "oneself"
      ],
      [
        "何分（なんぷん）",
        "how many minutes"
      ],
      [
        "毎分（まいふん）",
        "every minute"
      ],
      [
        "大分（だいぶ）",
        "considerably"
      ],
      [
        "三割五分（さんわりごぶ）",
        "35 percent"
      ],
      [
        "分かれ道（わかれみち）",
        "crossroads"
      ],
      [
        "分ける（わける）",
        "divide [v.t.]"
      ],
      [
        "分かる（わかる）",
        "understand [v.i.]"
      ]
    ],
    "radical": "⼑",
    "rad_order": 22,
    "rad_stroke": 2,
    "rad_name_ja": "かたな",
    "rad_name": "katana",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "然",
    "kname": "(shi)zen",
    "kstroke": 12,
    "kmeaning": "modifier forming suffix, as",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゼン、ネン",
    "onyomi": "zen, nen",
    "examples": [
      [
        "全然（ぜんぜん）",
        "not at all"
      ],
      [
        "偶然（ぐうぜん）",
        "by chance"
      ],
      [
        "突然（とつぜん）",
        "suddenly"
      ],
      [
        "当然（とうぜん）",
        "as a matter of course"
      ],
      [
        "自然（しぜん）",
        "nature"
      ],
      [
        "平然と（へいぜんと）",
        "calmly"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "工",
    "kname": "ku(fuu)",
    "kstroke": 3,
    "kmeaning": "manufacture, construction",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ、ク",
    "onyomi": "kou, ku",
    "examples": [
      [
        "工事（こうじ）",
        "construction work"
      ],
      [
        "工場（こうじょう）",
        "factory"
      ],
      [
        "工学部（こうがくぶ）",
        "engineering department"
      ],
      [
        "人工的な（じんこうてきな）",
        "artificial"
      ],
      [
        "加工する（かこうする）",
        "process [v.t.]"
      ],
      [
        "大工（だいく）",
        "carpenter"
      ],
      [
        "細工する（さいくする）",
        "craft"
      ],
      [
        "工夫する（くふうする）",
        "devise"
      ],
      [
        "工面する（くめんする）",
        "raise (money)"
      ]
    ],
    "radical": "⼯",
    "rad_order": 57,
    "rad_stroke": 3,
    "rad_name_ja": "たくみ",
    "rad_name": "takumi",
    "rad_meaning": "work, carpenter, skill",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "所",
    "kname": "(ba)sho",
    "kstroke": 8,
    "kmeaning": "place",
    "kgrade": 3,
    "kunyomi_ja": "ところ",
    "kunyomi": "tokoro",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "場所（ばしょ）",
        "place"
      ],
      [
        "住所（じゅうしょ）",
        "address"
      ],
      [
        "近所（きんじょ）",
        "neighborhood"
      ],
      [
        "役所（やくしょ）",
        "public office"
      ],
      [
        "名所（めいしょ）",
        "famous place"
      ],
      [
        "研究所（けんきゅうじょ）",
        "research institute"
      ],
      [
        "停留所（ていりゅうじょ）",
        "bus stop"
      ],
      [
        "所有する（しょゆうする）",
        "possess"
      ],
      [
        "所（ところ）",
        "place"
      ],
      [
        "台所（だいどころ）",
        "kitchen"
      ],
      [
        "居所（いどころ）",
        "whereabouts"
      ]
    ],
    "radical": "",
    "rad_order": 83,
    "rad_stroke": 4,
    "rad_name_ja": "とだれ",
    "rad_name": "todare",
    "rad_meaning": "door",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "横",
    "kname": "yoko",
    "kstroke": 15,
    "kmeaning": "sideways, side",
    "kgrade": 3,
    "kunyomi_ja": "よこ",
    "kunyomi": "yoko",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "横断歩道（おうだんほどう）",
        "pedestrian crossing"
      ],
      [
        "横着な（おうちゃくな）",
        "lazy"
      ],
      [
        "横（よこ）",
        "beside, side"
      ],
      [
        "横浜（よこはま）",
        "Yokohama"
      ],
      [
        "横綱（よこづな）",
        "sumo grand champion"
      ],
      [
        "横書き（よこがき）",
        "writing horizontally"
      ],
      [
        "横取りする（よこどりする）",
        "snatch"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "信",
    "kname": "shin(jiru)",
    "kstroke": 9,
    "kmeaning": "believe, trust, message",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "信号（しんごう）",
        "traffic lights, signal"
      ],
      [
        "信仰（しんこう）",
        "(religious) faith"
      ],
      [
        "自信（じしん）",
        "self-confidence"
      ],
      [
        "不信（ふしん）",
        "distrust"
      ],
      [
        "私信（ししん）",
        "private message"
      ],
      [
        "信用する（しんようする）",
        "believe"
      ],
      [
        "信頼する（しんらいする）",
        "trust"
      ],
      [
        "確信する（かくしんする）",
        "become convinced"
      ],
      [
        "返信する（へんしんする）",
        "reply"
      ],
      [
        "受信する（じゅしんする）",
        "receive (e.g. radio)"
      ],
      [
        "通信する（つうしんする）",
        "correspond"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "曲",
    "kname": "ma(garu)",
    "kstroke": 6,
    "kmeaning": "curve, musical composition",
    "kgrade": 3,
    "kunyomi_ja": "ま、まがる、まげる",
    "kunyomi": "ma, magaru, mageru",
    "onyomi_ja": "キョク",
    "onyomi": "kyoku",
    "examples": [
      [
        "曲名（きょくめい）",
        "song title"
      ],
      [
        "曲線（きょくせん）",
        "curve"
      ],
      [
        "名曲（めいきょく）",
        "famous song"
      ],
      [
        "新曲（しんきょく）",
        "new song"
      ],
      [
        "作曲家（さっきょくか）",
        "composer"
      ],
      [
        "作曲する（さっきょくする）",
        "compose"
      ],
      [
        "曲げる（まげる）",
        "bend [v.t.]"
      ],
      [
        "曲がる（まがる）",
        "turn [v.i.]"
      ],
      [
        "曲り角（まがりかど）",
        "corner"
      ]
    ],
    "radical": "⽈",
    "rad_order": 94,
    "rad_stroke": 4,
    "rad_name_ja": "ひらび",
    "rad_name": "hirabi",
    "rad_meaning": "to say",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "橋",
    "kname": "kyou-hashi",
    "kstroke": 16,
    "kmeaning": "bridge",
    "kgrade": 3,
    "kunyomi_ja": "はし",
    "kunyomi": "hashi",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "歩道橋（ほどうきょう）",
        "pedestrian bridge"
      ],
      [
        "鉄橋（てっきょう）",
        "iron bridge"
      ],
      [
        "橋（はし）",
        "bridge"
      ],
      [
        "吊り橋（つりばし）",
        "suspension bridge"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "向",
    "kname": "kou-mu(ki)",
    "kstroke": 6,
    "kmeaning": "turn toward, face toward",
    "kgrade": 3,
    "kunyomi_ja": "む、むく、むき、むける、むかう、むこう",
    "kunyomi": "mu, muku, muki, mukeru, mukau, mukou",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "向上心（こうじょうしん）",
        "aspiration"
      ],
      [
        "方向（ほうこう）",
        "direction"
      ],
      [
        "傾向（けいこう）",
        "tendency"
      ],
      [
        "動向（どうこう）",
        "trend, movement"
      ],
      [
        "対向車（たいこうしゃ）",
        "oncoming car"
      ],
      [
        "転向する（てんこうする）",
        "shift, switch"
      ],
      [
        "向こう（むこう）",
        "over there"
      ],
      [
        "向ける（むける）",
        "let turn towards [v.t.]"
      ],
      [
        "向かう（むかう）",
        "go towards [v.i.]"
      ],
      [
        "子供向け（こどもむけ）",
        "for children"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "地",
    "kname": "chi(kyuu)",
    "kstroke": 6,
    "kmeaning": "ground, place, base, earth, land",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チ、ジ",
    "onyomi": "chi, ji",
    "examples": [
      [
        "地下（ちか）",
        "underground"
      ],
      [
        "地下鉄（ちかてつ）",
        "subway"
      ],
      [
        "地図（ちず）",
        "map"
      ],
      [
        "地球（ちきゅう）",
        "the earth"
      ],
      [
        "地平線（ちへいせん）",
        "horizon"
      ],
      [
        "目的地（もくてきち）",
        "destination"
      ],
      [
        "土地（とち）",
        "plot of land"
      ],
      [
        "各地（かくち）",
        "various places"
      ],
      [
        "現地（げんち）",
        "actual place"
      ],
      [
        "地震（じしん）",
        "earthquake"
      ],
      [
        "地獄（じごく）",
        "hell"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "銀",
    "kname": "gin(za)",
    "kstroke": 14,
    "kmeaning": "silver",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ギン",
    "onyomi": "gin",
    "examples": [
      [
        "銀行（ぎんこう）",
        "bank"
      ],
      [
        "銀河（ぎんが）",
        "galaxy"
      ],
      [
        "銀色（ぎんいろ）",
        "silver color"
      ],
      [
        "水銀（すいぎん）",
        "mercury"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "月",
    "kname": "getsu-tsuki",
    "kstroke": 4,
    "kmeaning": "moon, month",
    "kgrade": 1,
    "kunyomi_ja": "つき",
    "kunyomi": "tsuki",
    "onyomi_ja": "ゲツ、ガツ",
    "onyomi": "getsu, gatsu",
    "examples": [
      [
        "来月（らいげつ）",
        "next month"
      ],
      [
        "月曜日（げつようび）",
        "Monday"
      ],
      [
        "先月（せんげつ）",
        "last month"
      ],
      [
        "今月（こんげつ）",
        "this month"
      ],
      [
        "満月（まんげつ）",
        "full moon"
      ],
      [
        "正月（しょうがつ）",
        "New Year"
      ],
      [
        "生年月日（せいねんがっぴ）",
        "birth date"
      ],
      [
        "月見（つきみ）",
        "moon viewing"
      ],
      [
        "毎月（まいつき/まいげつ）",
        "every month"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "角",
    "kname": "tsuno",
    "kstroke": 7,
    "kmeaning": "angle, horn, corner",
    "kgrade": 2,
    "kunyomi_ja": "かど、つの",
    "kunyomi": "kado, tsuno",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "角度（かくど）",
        "angle"
      ],
      [
        "三角（さんかく）",
        "triangle"
      ],
      [
        "四角形（しかくけい）",
        "square"
      ],
      [
        "角（かど）",
        "corner"
      ],
      [
        "曲り角（まがりかど）",
        "corner, turning point"
      ],
      [
        "四つ角（よつかど）",
        "crossroads"
      ],
      [
        "角（つの）",
        "horn"
      ]
    ],
    "radical": "⾓",
    "rad_order": 180,
    "rad_stroke": 7,
    "rad_name_ja": "つの",
    "rad_name": "tsuno",
    "rad_meaning": "horn, corner",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "赤",
    "kname": "seki-aka",
    "kstroke": 7,
    "kmeaning": "red",
    "kgrade": 1,
    "kunyomi_ja": "あか、あかい、あからむ、あからめる",
    "kunyomi": "aka, akai, akaramu, akarameru",
    "onyomi_ja": "セキ、シャク",
    "onyomi": "seki, shaku",
    "examples": [
      [
        "赤外線（せきがいせん）",
        "infrared rays"
      ],
      [
        "赤十字（せきじゅうじ）",
        "Red Cross"
      ],
      [
        "赤道（せきどう）",
        "equator"
      ],
      [
        "赤面する（せきめんする）",
        "blush"
      ],
      [
        "赤銅色（しゃくどういろ）",
        "tanned color"
      ],
      [
        "赤い（あかい）",
        "red"
      ],
      [
        "赤ちゃん（あかちゃん）",
        "baby"
      ],
      [
        "赤ん坊（あかんぼう）",
        "baby"
      ],
      [
        "赤字（あかじ）",
        "deficit"
      ],
      [
        "赤らめる（あからめる）",
        "redden"
      ],
      [
        "*真っ赤な（まっかな）",
        "deep red"
      ]
    ],
    "radical": "⾚",
    "rad_order": 189,
    "rad_stroke": 7,
    "rad_name_ja": "あか",
    "rad_name": "aka",
    "rad_meaning": "red",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "祝",
    "kname": "iwa(u)",
    "kstroke": 9,
    "kmeaning": "celebrate",
    "kgrade": 4,
    "kunyomi_ja": "いわ、いわう、いわい",
    "kunyomi": "iwa, iwau, iwai",
    "onyomi_ja": "シュク、シュウ",
    "onyomi": "shuku, shuu",
    "examples": [
      [
        "祝賀会（しゅくがかい）",
        "celebration"
      ],
      [
        "祝日（しゅくじつ）",
        "national holiday"
      ],
      [
        "祝福する（しゅくふくする）",
        "bless"
      ],
      [
        "御祝儀（ごしゅうぎ）",
        "congratulatory gift (money)"
      ],
      [
        "祝う（いわう）",
        "celebrate"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "相",
    "kname": "sou-ai",
    "kstroke": 9,
    "kmeaning": "mutual, phase, minister",
    "kgrade": 3,
    "kunyomi_ja": "あい",
    "kunyomi": "ai",
    "onyomi_ja": "ソウ、ショウ",
    "onyomi": "sou, shou",
    "examples": [
      [
        "相互に（そうごに）",
        "mutually"
      ],
      [
        "相対的な（そうたいてきな）",
        "relative"
      ],
      [
        "相思相愛（そうしそうあい）",
        "mutual love"
      ],
      [
        "相続する（そうぞくする）",
        "inherit"
      ],
      [
        "相談する（そうだんする）",
        "consult"
      ],
      [
        "相違する（そういする）",
        "differ"
      ],
      [
        "首相（しゅしょう）",
        "Prime Minister"
      ],
      [
        "相性（あいしょう）",
        "compatibility"
      ],
      [
        "相手（あいて）",
        "partner"
      ],
      [
        "相変わらず（あいかわらず）",
        "as usual"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "談",
    "kname": "dan(wa)",
    "kstroke": 15,
    "kmeaning": "talk, conversation",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダン",
    "onyomi": "dan",
    "examples": [
      [
        "面談（めんだん）",
        "interview"
      ],
      [
        "座談会（ざだんかい）",
        "round-table discussion"
      ],
      [
        "冗談（じょうだん）",
        "joke"
      ],
      [
        "怪談（かいだん）",
        "ghost story"
      ],
      [
        "相談する（そうだんする）",
        "consult"
      ],
      [
        "対談する（たいだんする）",
        "interview, converse"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "接",
    "kname": "setsu-tsu(gu)",
    "kstroke": 11,
    "kmeaning": "contact, touch",
    "kgrade": 5,
    "kunyomi_ja": "つ、つぐ",
    "kunyomi": "tsu, tsugu",
    "onyomi_ja": "セツ",
    "onyomi": "setsu",
    "examples": [
      [
        "接点（せってん）",
        "point of contact"
      ],
      [
        "直接（ちょくせつ）",
        "direct"
      ],
      [
        "予防接種（よぼうせっしゅ）",
        "vaccination"
      ],
      [
        "間接的な（かんせつてきな）",
        "indirect"
      ],
      [
        "接する（せっする）",
        "come in contact with, attend"
      ],
      [
        "接続する（せつぞくする）",
        "connect"
      ],
      [
        "接近する（せっきんする）",
        "approach"
      ],
      [
        "面接する（めんせつする）",
        "interview"
      ],
      [
        "接ぐ（つぐ）",
        "join [v.t.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "料",
    "kname": "ryou(ri)",
    "kstroke": 10,
    "kmeaning": "fee, materials",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "料理（りょうり）",
        "cuisine"
      ],
      [
        "料金（りょうきん）",
        "fee"
      ],
      [
        "材料（ざいりょう）",
        "ingredients, material"
      ],
      [
        "原料（げんりょう）",
        "raw material"
      ],
      [
        "無料（むりょう）",
        "free of charge"
      ],
      [
        "送料（そうりょう）",
        "shipping fee"
      ],
      [
        "給料（きゅうりょう）",
        "wages"
      ],
      [
        "授業料（じゅぎょうりょう）",
        "tuition"
      ],
      [
        "入場料（にゅうじょうりょう）",
        "admission fee"
      ]
    ],
    "radical": "⽃",
    "rad_order": 88,
    "rad_stroke": 4,
    "rad_name_ja": "ますづくり",
    "rad_name": "masuzukuri",
    "rad_meaning": "big dipper, ladle, 18 liters",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "払",
    "kname": "(shi)hara(u)",
    "kstroke": 5,
    "kmeaning": "sweep away, pay",
    "kgrade": "n/a",
    "kunyomi_ja": "はら、はらう、はらい",
    "kunyomi": "hara, harau, harai",
    "onyomi_ja": "フツ",
    "onyomi": "futsu",
    "examples": [
      [
        "払拭する（ふっしょくする）",
        "wipe out"
      ],
      [
        "払う（はらう）",
        "pay, brush"
      ],
      [
        "払い落とす（はらいおとす）",
        "brush off"
      ],
      [
        "分割払い（ぶんかつばらい）",
        "payment by installments"
      ],
      [
        "酔っ払い（よっぱらい）",
        "drunkard"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "期",
    "kname": "(yo)ki",
    "kstroke": 12,
    "kmeaning": "term, time, expect",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ、ゴ",
    "onyomi": "ki, go",
    "examples": [
      [
        "期間（きかん）",
        "period"
      ],
      [
        "期限（きげん）",
        "time limit, deadline"
      ],
      [
        "初期（しょき）",
        "early (e.g. stage)"
      ],
      [
        "満期（まんき）",
        "maturity (e.g. investment)"
      ],
      [
        "秋学期（あきがっき）",
        "fall semester"
      ],
      [
        "学期末試験（がっきまつしけん）",
        "final exam"
      ],
      [
        "画期的な（かっきてきな）",
        "epoch-making"
      ],
      [
        "期待する（きたいする）",
        "hope"
      ],
      [
        "予期する（よきする）",
        "expect"
      ],
      [
        "一期一会（いちごいちえ）",
        "one chance in a lifetime"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "働",
    "kname": "hatara(ku)",
    "kstroke": 13,
    "kmeaning": "work",
    "kgrade": 4,
    "kunyomi_ja": "はたら、はたらく、はたらき",
    "kunyomi": "hatara, hataraku, hataraki",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "労働（ろうどう）",
        "labor"
      ],
      [
        "稼働する（かどうする）",
        "operate (e.g. machine)"
      ],
      [
        "働く（はたらく）",
        "work [v.i.]"
      ],
      [
        "下働き（したばたらき）",
        "assistant job"
      ],
      [
        "共働き（ともばたらき）",
        "dual income"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "火",
    "kname": "ka-hi",
    "kstroke": 4,
    "kmeaning": "fire",
    "kgrade": 1,
    "kunyomi_ja": "ひ",
    "kunyomi": "hi",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "火事（かじ）",
        "fire"
      ],
      [
        "火力（かりょく）",
        "thermal power"
      ],
      [
        "火曜日（かようび）",
        "Tuesday"
      ],
      [
        "火（ひ）",
        "flame, fire"
      ],
      [
        "花火（はなび）",
        "fireworks"
      ]
    ],
    "radical": "⽕",
    "rad_order": 110,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "fire",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "供",
    "kname": "kyou-sona(eru)",
    "kstroke": 8,
    "kmeaning": "offer, accompany",
    "kgrade": 6,
    "kunyomi_ja": "そな、とも、そなえ、そなえる",
    "kunyomi": "sona, tomo, sonae, sonaeru",
    "onyomi_ja": "キョウ、ク",
    "onyomi": "kyou, ku",
    "examples": [
      [
        "試供品（しきょうひん）",
        "sample"
      ],
      [
        "提供する（ていきょうする）",
        "offer"
      ],
      [
        "供給する（きょうきゅうする）",
        "supply"
      ],
      [
        "供物（くもつ）",
        "offering (for Buddhist altar)"
      ],
      [
        "供養する（くようする）",
        "hold service for the deceased"
      ],
      [
        "供える（そなえる）",
        "dedicate"
      ],
      [
        "お供する（おともする）",
        "keep company"
      ],
      [
        "子供（こども）",
        "child"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "彼",
    "kname": "kare",
    "kstroke": 8,
    "kmeaning": "third person pronoun, that",
    "kgrade": "n/a",
    "kunyomi_ja": "かれ、かの",
    "kunyomi": "kare, kano",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "彼岸（ひがん）",
        "equinoctial week"
      ],
      [
        "彼（かれ）",
        "he, boyfriend"
      ],
      [
        "彼等（かれら）",
        "they"
      ],
      [
        "彼氏（かれし）",
        "boyfriend"
      ],
      [
        "彼女（かのじょ）",
        "she, girl friend"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "泣",
    "kname": "kyuu-na(ku)",
    "kstroke": 8,
    "kmeaning": "cry",
    "kgrade": 4,
    "kunyomi_ja": "な、なく",
    "kunyomi": "na, naku",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "号泣する（ごうきゅうする）",
        "wail"
      ],
      [
        "泣く（なく）",
        "cry"
      ],
      [
        "泣き声（なきごえ）",
        "crying voice"
      ],
      [
        "泣き顔（なきがお）",
        "tear-stained face"
      ],
      [
        "泣き叫ぶ（なきさけぶ）",
        "cry and shout"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "降",
    "kname": "kou-fu(ru)",
    "kstroke": 10,
    "kmeaning": "descend, fall, get off",
    "kgrade": 6,
    "kunyomi_ja": "お、ふ、おりる、おろす、ふる、ふり",
    "kunyomi": "o, fu, oriru, orosu, furu, furi",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "降雨量（こううりょう）",
        "amount of rainfall"
      ],
      [
        "以降（いこう）",
        "hereafter, thereafter"
      ],
      [
        "乗降客（じょうこうきゃく）",
        "passengers getting on and off"
      ],
      [
        "乗降口（じょうこうぐち）",
        "door for getting on and off"
      ],
      [
        "降下する（こうかする）",
        "descend"
      ],
      [
        "降参する（こうさんする）",
        "give in"
      ],
      [
        "降りる（おりる）",
        "get off [v.i.]"
      ],
      [
        "降ろす（おろす）",
        "drop off [v.t.]"
      ],
      [
        "降る（ふる）",
        "fall (e.g. rain) [v.i.]"
      ],
      [
        "降らす（ふらす）",
        "send (e.g. rain) [v.t.]"
      ],
      [
        "土砂降り（どしゃぶり）",
        "downpour"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "晴",
    "kname": "sei-ha(reru)",
    "kstroke": 12,
    "kmeaning": "fine weather, clear up",
    "kgrade": 2,
    "kunyomi_ja": "は、はれる、はれ、はらす",
    "kunyomi": "ha, hareru, hare, harasu",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "晴天（せいてん）",
        "fine weather"
      ],
      [
        "晴れる（はれる）",
        "become sunny"
      ],
      [
        "五月晴れ（さつきばれ）",
        "early summer fine weather"
      ],
      [
        "晴らす（はらす）",
        "clear away"
      ],
      [
        "素晴らしい（すばらしい）",
        "wonderful"
      ],
      [
        "気晴らし（きばらし）",
        "recreation"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "曇",
    "kname": "kumo(ri)",
    "kstroke": 16,
    "kmeaning": "cloudy",
    "kgrade": "n/a",
    "kunyomi_ja": "くも、くもる、くもり",
    "kunyomi": "kumo, kumoru, kumori",
    "onyomi_ja": "ドン",
    "onyomi": "don",
    "examples": [
      [
        "曇天（どんてん）",
        "cloudy weather"
      ],
      [
        "曇る（くもる）",
        "become cloudy"
      ],
      [
        "曇り（くもり）",
        "cloudy weather"
      ],
      [
        "曇らす（くもらす）",
        "shadow [v.t.]"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "空",
    "kname": "sora",
    "kstroke": 8,
    "kmeaning": "sky, air, empty",
    "kgrade": 1,
    "kunyomi_ja": "そら、あ、から、むな、あく、あき、あける、から、むなしい、むなしさ",
    "kunyomi": "sora, a, kara, muna, aku, aki, akeru, kara, munashii, munashisa",
    "onyomi_ja": "クウ",
    "onyomi": "kuu",
    "examples": [
      [
        "空間（くうかん）",
        "space"
      ],
      [
        "空港（くうこう）",
        "airport"
      ],
      [
        "空気（くうき）",
        "air"
      ],
      [
        "空車（くうしゃ）",
        "free taxi"
      ],
      [
        "航空会社（こうくうがいしゃ）",
        "airline company"
      ],
      [
        "空（そら）",
        "sky"
      ],
      [
        "空く（あく）",
        "open [v.i.]"
      ],
      [
        "空ける（あける）",
        "empty [v.t.]"
      ],
      [
        "空き缶（あきかん）",
        "empty can"
      ],
      [
        "空（から）",
        "empty [n.]"
      ],
      [
        "空手（からて）",
        "karate"
      ],
      [
        "空しい（むなしい）",
        "feel empty [adj.]"
      ]
    ],
    "radical": "",
    "rad_order": 147,
    "rad_stroke": 5,
    "rad_name_ja": "あなかんむり",
    "rad_name": "anakanmuri",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "夕",
    "kname": "seki-yuu",
    "kstroke": 3,
    "kmeaning": "evening",
    "kgrade": 1,
    "kunyomi_ja": "ゆう",
    "kunyomi": "yuu",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "一朝一夕（いっちょういっせき）",
        "in a brief space of time"
      ],
      [
        "夕方（ゆうがた）",
        "evening"
      ],
      [
        "夕食（ゆうしょく）",
        "dinner"
      ],
      [
        "夕日（ゆうひ）",
        "the evening sun"
      ],
      [
        "夕刊（ゆうかん）",
        "evening paper"
      ],
      [
        "夕暮れ（ゆうぐれ）",
        "twilight"
      ]
    ],
    "radical": "⼣",
    "rad_order": 42,
    "rad_stroke": 3,
    "rad_name_ja": "ゆうべ",
    "rad_name": "yuube",
    "rad_meaning": "evening",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "準",
    "kname": "(sui)jun",
    "kstroke": 13,
    "kmeaning": "standard, semi-",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジュン",
    "onyomi": "jun",
    "examples": [
      [
        "準備する（じゅんびする）",
        "prepare"
      ],
      [
        "水準（すいじゅん）",
        "level"
      ],
      [
        "基準（きじゅん）",
        "basis"
      ],
      [
        "標準（ひょうじゅん）",
        "standard"
      ],
      [
        "準決勝（じゅんけっしょう）",
        "semifinal"
      ],
      [
        "準会員（じゅんかいいん）",
        "associate member"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "備",
    "kname": "bi-sona(eru)",
    "kstroke": 12,
    "kmeaning": "provide, furnish",
    "kgrade": 5,
    "kunyomi_ja": "そな、そなえる、そなわる",
    "kunyomi": "sona, sonaeru, sonawaru",
    "onyomi_ja": "ビ",
    "onyomi": "bi",
    "examples": [
      [
        "準備（じゅんび）",
        "preparation"
      ],
      [
        "予備（よび）",
        "spare"
      ],
      [
        "軍備（ぐんび）",
        "armament"
      ],
      [
        "設備（せつび）",
        "facilities"
      ],
      [
        "防備（ぼうび）",
        "defensive preparation"
      ],
      [
        "準備する（じゅんびする）",
        "prepare"
      ],
      [
        "警備する（けいびする）",
        "guard"
      ],
      [
        "備える（そなえる）",
        "get equipped, get ready"
      ],
      [
        "備わる（そなわる）",
        "be equipped"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "三",
    "kname": 3,
    "kstroke": 3,
    "kmeaning": "three",
    "kgrade": 1,
    "kunyomi_ja": "み、みっか、みっつ",
    "kunyomi": "mi, mikka, mittsu",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "三人（さんにん）",
        "3 people"
      ],
      [
        "三時（さんじ）",
        "3 o'clock"
      ],
      [
        "三枚（さんまい）",
        "3 (flat objects)"
      ],
      [
        "三月（さんがつ）",
        "March"
      ],
      [
        "三日（みっか）",
        "3 days, 3rd day of the month"
      ],
      [
        "三つ（みっつ）",
        "3 (pieces)"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "水",
    "kname": "mizu",
    "kstroke": 4,
    "kmeaning": "water",
    "kgrade": 1,
    "kunyomi_ja": "みず",
    "kunyomi": "mizu",
    "onyomi_ja": "スイ",
    "onyomi": "sui",
    "examples": [
      [
        "水曜日（すいようび）",
        "Wednesday"
      ],
      [
        "水道（すいどう）",
        "water supply"
      ],
      [
        "水準（すいじゅん）",
        "level, standard"
      ],
      [
        "水中（すいちゅう）",
        "underwater"
      ],
      [
        "海水（かいすい）",
        "ocean water"
      ],
      [
        "水（みず）",
        "water"
      ],
      [
        "水着（みずぎ）",
        "bathing suit"
      ],
      [
        "水色（みずいろ）",
        "light blue"
      ]
    ],
    "radical": "⽔",
    "rad_order": 109,
    "rad_stroke": 4,
    "rad_name_ja": "みず",
    "rad_name": "mizu",
    "rad_meaning": "water",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "歩",
    "kname": "aru(ku)",
    "kstroke": 8,
    "kmeaning": "walk",
    "kgrade": 2,
    "kunyomi_ja": "ある、あゆ、あるく、あゆむ、あゆみ",
    "kunyomi": "aru, ayu, aruku, ayumu, ayumi",
    "onyomi_ja": "ホ、ブ、フ",
    "onyomi": "ho, bu, fu",
    "examples": [
      [
        "歩道（ほどう）",
        "sidewalk"
      ],
      [
        "歩調（ほちょう）",
        "pace (walking)"
      ],
      [
        "歩行者（ほこうしゃ）",
        "pedestrian"
      ],
      [
        "徒歩（とほ）",
        "on foot [n.]"
      ],
      [
        "初歩（しょほ）",
        "elementary"
      ],
      [
        "散歩する（さんぽする）",
        "take a walk"
      ],
      [
        "進歩する（しんぽする）",
        "make progress"
      ],
      [
        "歩合（ぶあい）",
        "rate"
      ],
      [
        "歩（ふ）",
        "pawn (in chess or shogi)"
      ],
      [
        "歩く（あるく）",
        "walk"
      ],
      [
        "歩む（あゆむ）",
        "walk"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "歌",
    "kname": "ka-uta",
    "kstroke": 14,
    "kmeaning": "song",
    "kgrade": 2,
    "kunyomi_ja": "うた、うたう",
    "kunyomi": "uta, utau",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "歌手（かしゅ）",
        "singer"
      ],
      [
        "歌詞（かし）",
        "song lyrics"
      ],
      [
        "歌舞伎（かぶき）",
        "Japanese classical drama"
      ],
      [
        "国歌（こっか）",
        "national anthem"
      ],
      [
        "和歌（わか）",
        "Japanese poem"
      ],
      [
        "短歌（たんか）",
        "31-syllable Japanese poem"
      ],
      [
        "歌（うた）",
        "song"
      ],
      [
        "歌う（うたう）",
        "sing"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "足",
    "kname": "soku-ashi",
    "kstroke": 7,
    "kmeaning": "foot, suffice, add",
    "kgrade": 1,
    "kunyomi_ja": "あし、た、たる、たりる、たす",
    "kunyomi": "ashi, ta, taru, tariru, tasu",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "足跡（そくせき）",
        "footprints"
      ],
      [
        "遠足（えんそく）",
        "field trip"
      ],
      [
        "自給自足（じきゅうじそく）",
        "self-sufficiency"
      ],
      [
        "満足する（まんぞくする）",
        "be satisfied"
      ],
      [
        "発足する（ほっそくする）",
        "start (e.g. organization)"
      ],
      [
        "足（あし）",
        "leg"
      ],
      [
        "足りる（たりる）",
        "be enough [v.i.]"
      ],
      [
        "足す（たす）",
        "add [v.t.]"
      ]
    ],
    "radical": "⾜",
    "rad_order": 192,
    "rad_stroke": 7,
    "rad_name_ja": "あし",
    "rad_name": "ashi",
    "rad_meaning": "foot, leg",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "口",
    "kname": "kuchi",
    "kstroke": 3,
    "kmeaning": "mouth",
    "kgrade": 1,
    "kunyomi_ja": "くち",
    "kunyomi": "kuchi",
    "onyomi_ja": "コウ、ク",
    "onyomi": "kou, ku",
    "examples": [
      [
        "人口（じんこう）",
        "population"
      ],
      [
        "利口な（りこうな）",
        "clever"
      ],
      [
        "口調（くちょう）",
        "tone of voice"
      ],
      [
        "異口同音（いくどうおん）",
        "say something in unison"
      ],
      [
        "口（くち）",
        "mouth"
      ],
      [
        "入り口（いりぐち）",
        "entrance"
      ],
      [
        "出口（でぐち）",
        "exit [n.]"
      ],
      [
        "窓口（まどぐち）",
        "service window (e.g. at bank)"
      ],
      [
        "悪口（わるぐち）",
        "slander, abuse"
      ],
      [
        "無口な（むくちな）",
        "reticent"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "世",
    "kname": "sei-yo",
    "kstroke": 5,
    "kmeaning": "world, era",
    "kgrade": 3,
    "kunyomi_ja": "よ",
    "kunyomi": "yo",
    "onyomi_ja": "セイ、セ",
    "onyomi": "sei, se",
    "examples": [
      [
        "世紀（せいき）",
        "century"
      ],
      [
        "三世（さんせい）",
        "3rd generation"
      ],
      [
        "中世（ちゅうせい）",
        "Middle Ages"
      ],
      [
        "世界（せかい）",
        "world"
      ],
      [
        "世間（せけん）",
        "world, society"
      ],
      [
        "世代（せだい）",
        "generation"
      ],
      [
        "世話（せわ）",
        "assistance"
      ],
      [
        "出世する（しゅっせする）",
        "get promoted"
      ],
      [
        "世の中（よのなか）",
        "world, society"
      ],
      [
        "あの世（あのよ）",
        "world of the dead"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "界",
    "kname": "(se)kai",
    "kstroke": 9,
    "kmeaning": "world, boundary",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "世界（せかい）",
        "world"
      ],
      [
        "業界（ぎょうかい）",
        "industry, business"
      ],
      [
        "学界（がっかい）",
        "academic world"
      ],
      [
        "政界（せいかい）",
        "political world"
      ],
      [
        "経済界（けいざいかい）",
        "economic world"
      ],
      [
        "限界（げんかい）",
        "limit [n.]"
      ],
      [
        "境界（きょうかい）",
        "boundary"
      ],
      [
        "他界する（たかいする）",
        "pass away"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "医",
    "kname": "i(gaku)",
    "kstroke": 7,
    "kmeaning": "medicine, doctor",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "医者（いしゃ）",
        "doctor (medical)"
      ],
      [
        "医師（いし）",
        "doctor (medical)"
      ],
      [
        "医療（いりょう）",
        "medical care"
      ],
      [
        "医学（いがく）",
        "medical science"
      ],
      [
        "医院（いいん）",
        "clinic"
      ],
      [
        "医薬品（いやくひん）",
        "medical supplies"
      ],
      [
        "獣医（じゅうい）",
        "veterinarian"
      ],
      [
        "歯科医（しかい）",
        "dentist"
      ]
    ],
    "radical": "⼕",
    "rad_order": 27,
    "rad_stroke": 2,
    "rad_name_ja": "はこがまえ",
    "rad_name": "hakogamae",
    "rad_meaning": "box",
    "rad_position_ja": "かまえ, はこがまえ",
    "rad_position": "kamae, hakogamae"
  },
  {
    "kanji": "者",
    "kname": "sha-mono",
    "kstroke": 8,
    "kmeaning": "person",
    "kgrade": 3,
    "kunyomi_ja": "もの",
    "kunyomi": "mono",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "医者（いしゃ）",
        "doctor (medical)"
      ],
      [
        "学者（がくしゃ）",
        "scholar"
      ],
      [
        "弱者（じゃくしゃ）",
        "the weak"
      ],
      [
        "読者（どくしゃ）",
        "reader"
      ],
      [
        "著者（ちょしゃ）",
        "author"
      ],
      [
        "記者（きしゃ）",
        "reporter"
      ],
      [
        "科学者（かがくしゃ）",
        "scientist"
      ],
      [
        "前者（ぜんしゃ）",
        "the former"
      ],
      [
        "死者（ししゃ）",
        "the deceased"
      ],
      [
        "者（もの）",
        "person"
      ],
      [
        "若者（わかもの）",
        "youth"
      ],
      [
        "怠け者（なまけもの）",
        "lazy person"
      ]
    ],
    "radical": "⺹",
    "rad_order": 119,
    "rad_stroke": 4,
    "rad_name_ja": "おいかんむり",
    "rad_name": "oikanmuri",
    "rad_meaning": "old, old-age",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "配",
    "kname": "kuba(ru)",
    "kstroke": 10,
    "kmeaning": "distribute",
    "kgrade": 3,
    "kunyomi_ja": "くば、くばる",
    "kunyomi": "kuba, kubaru",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "配達する（はいたつする）",
        "deliver"
      ],
      [
        "配慮する（はいりょする）",
        "consider, be considerate"
      ],
      [
        "心配する（しんぱいする）",
        "worry"
      ],
      [
        "支配する（しはいする）",
        "rule [v.t.]"
      ],
      [
        "配当金（はいとうきん）",
        "share (money)"
      ],
      [
        "配偶者（はいぐうしゃ）",
        "spouse"
      ],
      [
        "気配（けはい）",
        "indication"
      ],
      [
        "配る（くばる）",
        "distribute"
      ]
    ],
    "radical": "",
    "rad_order": 199,
    "rad_stroke": 7,
    "rad_name_ja": "とりへん",
    "rad_name": "torihen",
    "rad_meaning": "sake jar, bird",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "規",
    "kname": "ki(bo)",
    "kstroke": 11,
    "kmeaning": "regulation, measure",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "規則（きそく）",
        "regulation"
      ],
      [
        "規模（きぼ）",
        "scale"
      ],
      [
        "新規（しんき）",
        "novel, new"
      ],
      [
        "正規（せいき）",
        "regular"
      ],
      [
        "不規則な（ふきそくな）",
        "irregular"
      ],
      [
        "規制する（きせいする）",
        "regulate"
      ],
      [
        "定規（じょうぎ）",
        "(measuring) ruler"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "木",
    "kname": "moku-ki",
    "kstroke": 4,
    "kmeaning": "tree, wood",
    "kgrade": 1,
    "kunyomi_ja": "き、こ",
    "kunyomi": "ki, ko",
    "onyomi_ja": "ボク、モク",
    "onyomi": "boku, moku",
    "examples": [
      [
        "大木（たいぼく）",
        "large tree"
      ],
      [
        "木曜日（もくようび）",
        "Thursday"
      ],
      [
        "木材（もくざい）",
        "lumber"
      ],
      [
        "木造（もくぞう）",
        "wooden"
      ],
      [
        "木村（きむら）",
        "Kimura (surname)"
      ],
      [
        "青木（あおき）",
        "Aoki (surname)"
      ],
      [
        "植木（うえき）",
        "garden shrubs"
      ],
      [
        "木の葉（このは）",
        "foliage, leaf"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "則",
    "kname": "(hou)soku",
    "kstroke": 9,
    "kmeaning": "rule, law",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "規則（きそく）",
        "regulation"
      ],
      [
        "法則（ほうそく）",
        "law, principle (e.g. in physics)"
      ],
      [
        "原則（げんそく）",
        "principle"
      ],
      [
        "罰則（ばっそく）",
        "penal regulations"
      ],
      [
        "会則（かいそく）",
        "society or club regulations"
      ],
      [
        "不規則な（ふきそくな）",
        "irregular"
      ],
      [
        "反則する（はんそくする）",
        "violate"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "正",
    "kname": "tada(shii)",
    "kstroke": 5,
    "kmeaning": "right, correct",
    "kgrade": 1,
    "kunyomi_ja": "ただ、ただしい、ただす、まさ、まさに",
    "kunyomi": "tada, tadashii, tadasu, masa, masani",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "正解（せいかい）",
        "correct answer"
      ],
      [
        "正義（せいぎ）",
        "justice"
      ],
      [
        "正確な（せいかくな）",
        "accurate"
      ],
      [
        "正常な（せいじょうな）",
        "normal"
      ],
      [
        "不正な（ふせいな）",
        "unjust"
      ],
      [
        "修正する（しゅうせいする）",
        "revise"
      ],
      [
        "正気（しょうき）",
        "sanity"
      ],
      [
        "正しい（ただしい）",
        "correct [adj.]"
      ],
      [
        "正す（ただす）",
        "straighten"
      ],
      [
        "正に（まさに）",
        "surely"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "活",
    "kname": "(sei)katsu",
    "kstroke": 9,
    "kmeaning": "active, live",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カツ",
    "onyomi": "katsu",
    "examples": [
      [
        "活気（かっき）",
        "liveliness"
      ],
      [
        "活字（かつじ）",
        "moveable type"
      ],
      [
        "活火山（かっかざん）",
        "active volcano"
      ],
      [
        "活発な（かっぱつな）",
        "active"
      ],
      [
        "活動する（かつどうする）",
        "act [v.i.]"
      ],
      [
        "活躍する（かつやくする）",
        "be in full activity"
      ],
      [
        "生活する（せいかつする）",
        "live"
      ],
      [
        "復活する（ふっかつする）",
        "revive [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "考",
    "kname": "kanga(e)",
    "kstroke": 6,
    "kmeaning": "think",
    "kgrade": 2,
    "kunyomi_ja": "かんが、かんがえる、かんがえ",
    "kunyomi": "kanga, kangaeru, kangae",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "参考書（さんこうしょ）",
        "reference book"
      ],
      [
        "考古学（こうこがく）",
        "archaeology"
      ],
      [
        "考慮する（こうりょする）",
        "take into consideration"
      ],
      [
        "思考する（しこうする）",
        "think"
      ],
      [
        "選考する（せんこうする）",
        "screen [v.t.]"
      ],
      [
        "考え（かんがえ）",
        "ideas"
      ],
      [
        "考える（かんがえる）",
        "think"
      ]
    ],
    "radical": "⺹",
    "rad_order": 119,
    "rad_stroke": 4,
    "rad_name_ja": "おいかんむり",
    "rad_name": "oikanmuri",
    "rad_meaning": "old, old-age",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "計",
    "kname": "kei-haka(ru)",
    "kstroke": 9,
    "kmeaning": "plan, compute, measure",
    "kgrade": 2,
    "kunyomi_ja": "はか、はかる、はかり、はからう",
    "kunyomi": "haka, hakaru, hakari, hakarau",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "時計（とけい）",
        "watch, clock"
      ],
      [
        "統計（とうけい）",
        "statistics"
      ],
      [
        "会計士（かいけいし）",
        "accountant"
      ],
      [
        "腕時計（うでどけい）",
        "wristwatch"
      ],
      [
        "体温計（たいおんけい）",
        "medical thermometer"
      ],
      [
        "温度計（おんどけい）",
        "thermometer"
      ],
      [
        "計画する（けいかくする）",
        "plan [v.t.]"
      ],
      [
        "計算する（けいさんする）",
        "calculate"
      ],
      [
        "設計する（せっけいする）",
        "design"
      ],
      [
        "合計する（ごうけいする）",
        "add up"
      ],
      [
        "計る（はかる）",
        "measure"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "奥",
    "kname": "(yama)oku",
    "kstroke": 12,
    "kmeaning": "inner part",
    "kgrade": "n/a",
    "kunyomi_ja": "おく",
    "kunyomi": "oku",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "奥義（おうぎ）",
        "secrets"
      ],
      [
        "奥（おく）",
        "inner, inmost"
      ],
      [
        "奥さん（おくさん）",
        "wife"
      ],
      [
        "山奥（やまおく）",
        "mountain recesses"
      ],
      [
        "奥の間（おくのま）",
        "inner room"
      ],
      [
        "奥歯（おくば）",
        "back teeth"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "様",
    "kname": "sama",
    "kstroke": 14,
    "kmeaning": "mode, way, formal title, manner",
    "kgrade": 3,
    "kunyomi_ja": "さま",
    "kunyomi": "sama",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "様式（ようしき）",
        "style"
      ],
      [
        "様子（ようす）",
        "appearance"
      ],
      [
        "模様（もよう）",
        "pattern"
      ],
      [
        "異様な（いような）",
        "bizarre"
      ],
      [
        "同様に（どうように）",
        "similarly"
      ],
      [
        "神様（かみさま）",
        "god"
      ],
      [
        "奥様（おくさま）",
        "wife [hon.]"
      ],
      [
        "お客様（おきゃくさま）",
        "guest [hon.]"
      ],
      [
        "ご苦労様（ごくろうさま）",
        "Thank you for your trouble"
      ],
      [
        "お陰様で（おかげさまで）",
        "Thank you for asking"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "眠",
    "kname": "nemu(i)",
    "kstroke": 10,
    "kmeaning": "sleep",
    "kgrade": "n/a",
    "kunyomi_ja": "ねむ、ねむい、ねむる",
    "kunyomi": "nemu, nemui, nemuru",
    "onyomi_ja": "ミン",
    "onyomi": "min",
    "examples": [
      [
        "睡眠（すいみん）",
        "sleep [n.]"
      ],
      [
        "睡眠時間（すいみんじかん）",
        "time spent sleeping"
      ],
      [
        "不眠症（ふみんしょう）",
        "insomnia"
      ],
      [
        "催眠術（さいみんじゅつ）",
        "hypnotism"
      ],
      [
        "冬眠する（とうみんする）",
        "hibernate"
      ],
      [
        "眠い（ねむい）",
        "be sleepy"
      ],
      [
        "眠気（ねむけ）",
        "drowsiness"
      ],
      [
        "眠る（ねむる）",
        "sleep"
      ]
    ],
    "radical": "",
    "rad_order": 138,
    "rad_stroke": 5,
    "rad_name_ja": "めへん",
    "rad_name": "mehen",
    "rad_meaning": "eye",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "外",
    "kname": "soto",
    "kstroke": 5,
    "kmeaning": "outside",
    "kgrade": 2,
    "kunyomi_ja": "そと、ほか、はず、はずす、はずれる",
    "kunyomi": "soto, hoka, hazu, hazusu, hazureru",
    "onyomi_ja": "ガイ、ゲ",
    "onyomi": "gai, ge",
    "examples": [
      [
        "外国（がいこく）",
        "foreign country"
      ],
      [
        "外部（がいぶ）",
        "the outside"
      ],
      [
        "国外（こくがい）",
        "outside the country"
      ],
      [
        "海外旅行（かいがいりょこう）",
        "overseas travel"
      ],
      [
        "意外な（いがいな）",
        "surprising"
      ],
      [
        "外食する（がいしょくする）",
        "eat out"
      ],
      [
        "外出する（がいしゅつする）",
        "go out"
      ],
      [
        "外科（げか）",
        "surgical department"
      ],
      [
        "外（そと）",
        "outside"
      ],
      [
        "思いの外（おもいのほか）",
        "unexpected"
      ],
      [
        "外す（はずす）",
        "remove [v.t.]"
      ],
      [
        "外れる（はずれる）",
        "be disconnected [v.i.]"
      ]
    ],
    "radical": "⼣",
    "rad_order": 42,
    "rad_stroke": 3,
    "rad_name_ja": "ゆうべ",
    "rad_name": "yuube",
    "rad_meaning": "evening",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "不",
    "kname": "fu(man)",
    "kstroke": 4,
    "kmeaning": "not",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ、ブ",
    "onyomi": "fu, bu",
    "examples": [
      [
        "不規則な（ふきそくな）",
        "irregular"
      ],
      [
        "不可能な（ふかのうな）",
        "impossible"
      ],
      [
        "不親切な（ふしんせつな）",
        "unkind"
      ],
      [
        "不都合な（ふつごうな）",
        "inconvenient"
      ],
      [
        "不公平な（ふこうへいな）",
        "unfair"
      ],
      [
        "不思議な（ふしぎな）",
        "mysterious, strange"
      ],
      [
        "不安（ふあん）",
        "anxiety"
      ],
      [
        "不満（ふまん）",
        "dissatisfaction"
      ],
      [
        "不足する（ふそくする）",
        "be short of"
      ],
      [
        "不器用な（ぶきような）",
        "clumsy"
      ],
      [
        "不用心な（ぶようじんな）",
        "careless, unsafe"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "金",
    "kname": "kin-kane",
    "kstroke": 8,
    "kmeaning": "metal, gold, money",
    "kgrade": 1,
    "kunyomi_ja": "かね、かな",
    "kunyomi": "kane, kana",
    "onyomi_ja": "キン、コン",
    "onyomi": "kin, kon",
    "examples": [
      [
        "金曜日（きんようび）",
        "Friday"
      ],
      [
        "金属（きんぞく）",
        "metal"
      ],
      [
        "金髪（きんぱつ）",
        "blond hair"
      ],
      [
        "金魚（きんぎょ）",
        "goldfish"
      ],
      [
        "金額（きんがく）",
        "amount of money"
      ],
      [
        "奨学金（しょうがくきん）",
        "scholarship"
      ],
      [
        "罰金（ばっきん）",
        "a fine"
      ],
      [
        "現金（げんきん）",
        "cash"
      ],
      [
        "預金する（よきんする）",
        "deposit in a bank"
      ],
      [
        "金色（こんじき/きんいろ）",
        "gold colored"
      ],
      [
        "お金（おかね）",
        "money"
      ],
      [
        "金物（かなもの）",
        "hardware"
      ]
    ],
    "radical": "⾦",
    "rad_order": 205,
    "rad_stroke": 8,
    "rad_name_ja": "かね",
    "rad_name": "kane",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "昔",
    "kname": "mukashi",
    "kstroke": 8,
    "kmeaning": "former times, antiquity",
    "kgrade": 3,
    "kunyomi_ja": "むかし",
    "kunyomi": "mukashi",
    "onyomi_ja": "セキ、シャク",
    "onyomi": "seki, shaku",
    "examples": [
      [
        "昔日（せきじつ）",
        "old days"
      ],
      [
        "今昔物語（こんじゃくものがたり）",
        "Tales of past and present"
      ],
      [
        "昔（むかし）",
        "olden days, former [n.]"
      ],
      [
        "昔話（むかしばなし）",
        "folklore"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "洋",
    "kname": "you(fuku)",
    "kstroke": 9,
    "kmeaning": "ocean, western",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "西洋（せいよう）",
        "the west"
      ],
      [
        "東洋（とうよう）",
        "East Asia"
      ],
      [
        "洋服（ようふく）",
        "Western-style clothes"
      ],
      [
        "洋式（ようしき）",
        "Western style"
      ],
      [
        "洋食（ようしょく）",
        "Western-style meal"
      ],
      [
        "太平洋（たいへいよう）",
        "Pacific Ocean"
      ],
      [
        "大西洋（たいせいよう）",
        "Atlantic Ocean"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "寄",
    "kname": "ki-yo(ru)",
    "kstroke": 11,
    "kmeaning": "contribute, draw near, approach",
    "kgrade": 5,
    "kunyomi_ja": "よ、よる、より、よせる",
    "kunyomi": "yo, yoru, yori, yoseru",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "寄付する（きふする）",
        "donate"
      ],
      [
        "寄生する（きせいする）",
        "become parasitic"
      ],
      [
        "寄港する（きこうする）",
        "stop at a port"
      ],
      [
        "寄る（よる）",
        "drop in [v.i.]"
      ],
      [
        "年寄り（としより）",
        "elderly people"
      ],
      [
        "寄せる（よせる）",
        "gather [v.t.]"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "風",
    "kname": "kaze",
    "kstroke": 9,
    "kmeaning": "wind, manner",
    "kgrade": 2,
    "kunyomi_ja": "かぜ、かざ",
    "kunyomi": "kaze, kaza",
    "onyomi_ja": "フウ、フ",
    "onyomi": "fuu, fu",
    "examples": [
      [
        "風習（ふうしゅう）",
        "custom"
      ],
      [
        "風景（ふうけい）",
        "scenery"
      ],
      [
        "台風（たいふう）",
        "typhoon"
      ],
      [
        "扇風機（せんぷうき）",
        "electric fan"
      ],
      [
        "風呂（ふろ）",
        "bath"
      ],
      [
        "風（かぜ）",
        "wind"
      ],
      [
        "北風（きたかぜ）",
        "north wind"
      ],
      [
        "風向き（かざむき）",
        "wind's direction"
      ],
      [
        "*風邪（かぜ）",
        "cold (illness)"
      ]
    ],
    "radical": "⾵",
    "rad_order": 218,
    "rad_stroke": 9,
    "rad_name_ja": "かぜ",
    "rad_name": "kaze",
    "rad_meaning": "wind",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "呼",
    "kname": "yo(bu)",
    "kstroke": 8,
    "kmeaning": "call, invite",
    "kgrade": 6,
    "kunyomi_ja": "よ、よぶ",
    "kunyomi": "yo, yobu",
    "onyomi_ja": "コ",
    "onyomi": "ko",
    "examples": [
      [
        "呼吸する（こきゅうする）",
        "breathe"
      ],
      [
        "呼応する（こおうする）",
        "respond, act in concert"
      ],
      [
        "呼ぶ（よぶ）",
        "call out, invite"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "怒",
    "kname": "ika(ru)",
    "kstroke": 9,
    "kmeaning": "get angry",
    "kgrade": "n/a",
    "kunyomi_ja": "いか、おこ、いかる、おこる",
    "kunyomi": "ika, oko, ikaru, okoru",
    "onyomi_ja": "ド",
    "onyomi": "do",
    "examples": [
      [
        "怒声（どせい）",
        "angry voice"
      ],
      [
        "喜怒哀楽（きどあいらく）",
        "joy, anger, pathos, and humor"
      ],
      [
        "怒鳴る（どなる）",
        "yell"
      ],
      [
        "激怒する（げきどする）",
        "get furious"
      ],
      [
        "怒る（いかる）",
        "get angry"
      ],
      [
        "怒り狂う（いかりくるう）",
        "be in a fit (of anger)"
      ],
      [
        "怒る（おこる）",
        "get angry, scold"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "宿",
    "kname": "yado",
    "kstroke": 11,
    "kmeaning": "lodge",
    "kgrade": 3,
    "kunyomi_ja": "やど、やどる、やどす",
    "kunyomi": "yado, yadoru, yadosu",
    "onyomi_ja": "シュク",
    "onyomi": "shuku",
    "examples": [
      [
        "宿題（しゅくだい）",
        "homework"
      ],
      [
        "合宿（がっしゅく）",
        "training camp"
      ],
      [
        "下宿（げしゅく）",
        "boarding house"
      ],
      [
        "宿泊する（しゅくはくする）",
        "stay overnight (e.g. hotel)"
      ],
      [
        "宿屋（やどや）",
        "inn"
      ],
      [
        "宿る（やどる）",
        "dwell [v.i.]"
      ],
      [
        "宿す（やどす）",
        "conceive (e.g. baby) [v.t.]"
      ],
      [
        "雨宿り（あまやどり）",
        "to take shelter from rain [n.]"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "渡",
    "kname": "to-wata(ru)",
    "kstroke": 12,
    "kmeaning": "cross",
    "kgrade": "n/a",
    "kunyomi_ja": "わた、わたる、わたす",
    "kunyomi": "wata, wataru, watasu",
    "onyomi_ja": "ト",
    "onyomi": "to",
    "examples": [
      [
        "過渡期（かとき）",
        "transition period"
      ],
      [
        "渡航する（とこうする）",
        "go on a voyage"
      ],
      [
        "渡米する（とべいする）",
        "go to the U.S.A."
      ],
      [
        "渡る（わたる）",
        "go across [v.i.]"
      ],
      [
        "渡す（わたす）",
        "pass over [v.t.]"
      ],
      [
        "渡り鳥（わたりどり）",
        "migratory bird"
      ],
      [
        "晴れ渡る（はれわたる）",
        "clear up"
      ],
      [
        "見渡す（みわたす）",
        "survey (scene) [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "旅",
    "kname": "ryo-tabi",
    "kstroke": 10,
    "kmeaning": "travel",
    "kgrade": 3,
    "kunyomi_ja": "たび",
    "kunyomi": "tabi",
    "onyomi_ja": "リョ",
    "onyomi": "ryo",
    "examples": [
      [
        "旅行する（りょこうする）",
        "travel"
      ],
      [
        "旅券（りょけん）",
        "passport"
      ],
      [
        "旅費（りょひ）",
        "travel expenses"
      ],
      [
        "旅館（りょかん）",
        "Japanese style hotel"
      ],
      [
        "旅（たび）",
        "journey"
      ],
      [
        "旅先（たびさき）",
        "destination"
      ],
      [
        "旅立つ（たびだつ）",
        "begin a trip [v.i.]"
      ],
      [
        "旅人（たびびと）",
        "traveller"
      ]
    ],
    "radical": "",
    "rad_order": 91,
    "rad_stroke": 4,
    "rad_name_ja": "ほうへん",
    "rad_name": "houhen",
    "rad_meaning": "direction, flag",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "取",
    "kname": "shu-to(ru)",
    "kstroke": 8,
    "kmeaning": "take",
    "kgrade": 3,
    "kunyomi_ja": "と、とる、とり",
    "kunyomi": "to, toru, tori",
    "onyomi_ja": "シュ",
    "onyomi": "shu",
    "examples": [
      [
        "取材する（しゅざいする）",
        "gather facts (for publication)"
      ],
      [
        "取得する（しゅとくする）",
        "acquire"
      ],
      [
        "搾取する（さくしゅする）",
        "exploit"
      ],
      [
        "採取する（さいしゅする）",
        "collect"
      ],
      [
        "取る（とる）",
        "take"
      ],
      [
        "取り組む（とりくむ）",
        "tackle"
      ],
      [
        "取り扱う（とりあつかう）",
        "handle"
      ],
      [
        "書き取る（かきとる）",
        "take dictation, take down"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "土",
    "kname": "tsuchi",
    "kstroke": 3,
    "kmeaning": "soil, earth, ground",
    "kgrade": 1,
    "kunyomi_ja": "つち",
    "kunyomi": "tsuchi",
    "onyomi_ja": "ド、ト",
    "onyomi": "do, to",
    "examples": [
      [
        "土曜日（どようび）",
        "Saturday"
      ],
      [
        "土日（どにち）",
        "Saturday and Sunday"
      ],
      [
        "郷土（きょうど）",
        "birth place"
      ],
      [
        "土地（とち）",
        "plot of land"
      ],
      [
        "土（つち）",
        "soil"
      ],
      [
        "土色（つちいろ）",
        "earth colored"
      ],
      [
        "*土産（みやげ）",
        "local product, souvenir"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "盗",
    "kname": "nusu(mu)",
    "kstroke": 11,
    "kmeaning": "steal",
    "kgrade": "n/a",
    "kunyomi_ja": "ぬす、ぬすむ、ぬすみ",
    "kunyomi": "nusu, nusumu, nusumi",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "盗難（とうなん）",
        "theft"
      ],
      [
        "盗品（とうひん）",
        "stolen goods"
      ],
      [
        "窃盗（せっとう）",
        "stealing"
      ],
      [
        "強盗（ごうとう）",
        "burglary"
      ],
      [
        "盗む（ぬすむ）",
        "steal"
      ],
      [
        "盗み聞きする（ぬすみぎきする）",
        "eavesdrop"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "建",
    "kname": "ken-ta(teru)",
    "kstroke": 9,
    "kmeaning": "build",
    "kgrade": 4,
    "kunyomi_ja": "た、たつ、たてる、たて",
    "kunyomi": "ta, tatsu, tateru, tate",
    "onyomi_ja": "ケン、コン",
    "onyomi": "ken, kon",
    "examples": [
      [
        "建築（けんちく）",
        "architecture"
      ],
      [
        "建設する（けんせつする）",
        "construct"
      ],
      [
        "再建する（さいけんする）",
        "rebuild"
      ],
      [
        "建立する（こんりゅうする）",
        "erect (building) [v.t.]"
      ],
      [
        "建つ（たつ）",
        "be built [v.i.]"
      ],
      [
        "建てる（たてる）",
        "build [v.t.]"
      ],
      [
        "建物（たてもの）",
        "building"
      ],
      [
        "建前（たてまえ）",
        "public position"
      ],
      [
        "二階建て（にかいだて）",
        "two-storied building"
      ]
    ],
    "radical": "⼵",
    "rad_order": 64,
    "rad_stroke": 3,
    "rad_name_ja": "えんにょう",
    "rad_name": "ennyou",
    "rad_meaning": "to move, stretch",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "宅",
    "kname": "(o)taku",
    "kstroke": 6,
    "kmeaning": "house, residence",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タク",
    "onyomi": "taku",
    "examples": [
      [
        "帰宅する（きたくする）",
        "return home"
      ],
      [
        "お宅（おたく）",
        "house [hon.]"
      ],
      [
        "自宅（じたく）",
        "one's home"
      ],
      [
        "社宅（しゃたく）",
        "company owned house"
      ],
      [
        "住宅地（じゅうたくち）",
        "residential district"
      ],
      [
        "宅急便（たっきゅうびん）",
        "express home delivery"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "申",
    "kname": "mou(su)",
    "kstroke": 5,
    "kmeaning": "report, speak humbly",
    "kgrade": 3,
    "kunyomi_ja": "もう、もうす、もうし",
    "kunyomi": "mou, mousu, moushi",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "申告する（しんこくする）",
        "file report (about oneself)"
      ],
      [
        "申請する（しんせいする）",
        "write an application or petition"
      ],
      [
        "申す（もうす）",
        "say [hum.]"
      ],
      [
        "申し訳ない（もうしわけない）",
        "inexcusable"
      ],
      [
        "申し分ない（もうしぶんない）",
        "perfect, beyond criticism"
      ],
      [
        "申し込む（もうしこむ）",
        "apply for"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "願",
    "kname": "nega(u)",
    "kstroke": 19,
    "kmeaning": "wish, ask a favor, request",
    "kgrade": 4,
    "kunyomi_ja": "ねが、ねがう",
    "kunyomi": "nega, negau",
    "onyomi_ja": "ガン",
    "onyomi": "gan",
    "examples": [
      [
        "願望（がんぼう）",
        "wish [n.]"
      ],
      [
        "願書（がんしょ）",
        "application letter"
      ],
      [
        "悲願（ひがん）",
        "one's dearest wish"
      ],
      [
        "念願（ねんがん）",
        "one's heart's desire"
      ],
      [
        "祈願する（きがんする）",
        "pray"
      ],
      [
        "願う（ねがう）",
        "wish"
      ],
      [
        "お願い（おねがい）",
        "request [n.]"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "主",
    "kname": "nushi",
    "kstroke": 5,
    "kmeaning": "main, master",
    "kgrade": 3,
    "kunyomi_ja": "ぬし、おも、おもに、あるじ",
    "kunyomi": "nushi, omo, omoni, aruji",
    "onyomi_ja": "シュ、ス",
    "onyomi": "shu, su",
    "examples": [
      [
        "主人（しゅじん）",
        "one's own husband"
      ],
      [
        "主婦（しゅふ）",
        "housewife"
      ],
      [
        "民主主義（みんしゅしゅぎ）",
        "democracy"
      ],
      [
        "主要な（しゅような）",
        "main"
      ],
      [
        "主体的な（しゅたいてきな）",
        "subjective"
      ],
      [
        "主張する（しゅちょうする）",
        "claim, insist"
      ],
      [
        "坊主（ぼうず）",
        "Buddhist priest"
      ],
      [
        "持ち主（もちぬし）",
        "owner"
      ],
      [
        "株主（かぶぬし）",
        "stockholder"
      ],
      [
        "主に（おもに）",
        "mainly"
      ],
      [
        "一家の主（いっかのあるじ）",
        "master of the household"
      ]
    ],
    "radical": "⼂",
    "rad_order": 3,
    "rad_stroke": 1,
    "rad_name_ja": "てん",
    "rad_name": "ten",
    "rad_meaning": "dot",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "関",
    "kname": "kan-seki",
    "kstroke": 14,
    "kmeaning": "concern, barrier",
    "kgrade": 4,
    "kunyomi_ja": "せき、かか、かかわる",
    "kunyomi": "seki, kaka, kakawaru",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "関東（かんとう）",
        "eastern half of Japan"
      ],
      [
        "関西（かんさい）",
        "south-western half of Japan"
      ],
      [
        "関節（かんせつ）",
        "a joint (in the body)"
      ],
      [
        "関心（かんしん）",
        "interest, concern"
      ],
      [
        "玄関（げんかん）",
        "entry hall"
      ],
      [
        "税関（ぜいかん）",
        "the customs (at airport)"
      ],
      [
        "関係する（かんけいする）",
        "be related"
      ],
      [
        "関所（せきしょ）",
        "checkpoint"
      ],
      [
        "関わる（かかわる）",
        "concern oneself, have to do with"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "特",
    "kname": "toku(betsu)",
    "kstroke": 10,
    "kmeaning": "special",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トク",
    "onyomi": "toku",
    "examples": [
      [
        "特色（とくしょく）",
        "characteristic"
      ],
      [
        "特徴（とくちょう）",
        "feature"
      ],
      [
        "特急（とっきゅう）",
        "express train"
      ],
      [
        "特別な（とくべつな）",
        "special"
      ],
      [
        "特有な（とくゆうな）",
        "peculiar (to)"
      ],
      [
        "独特な（どくとくな）",
        "unique"
      ],
      [
        "特訓する（とっくんする）",
        "give special training"
      ],
      [
        "特集する（とくしゅうする）",
        "feature (e.g. newspaper)"
      ]
    ],
    "radical": "",
    "rad_order": 117,
    "rad_stroke": 4,
    "rad_name_ja": "うしへん",
    "rad_name": "ushihen",
    "rad_meaning": "cow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "別",
    "kname": "betsu-waka(re)",
    "kstroke": 7,
    "kmeaning": "separate, another",
    "kgrade": 4,
    "kunyomi_ja": "わか、わかれ、わかれる",
    "kunyomi": "waka, wakare, wakareru",
    "onyomi_ja": "ベツ",
    "onyomi": "betsu",
    "examples": [
      [
        "特別な（とくべつな）",
        "special"
      ],
      [
        "別な（べつな）",
        "different, another"
      ],
      [
        "別々に（べつべつに）",
        "separately"
      ],
      [
        "個別に（こべつに）",
        "individually"
      ],
      [
        "別離（べつり）",
        "parting"
      ],
      [
        "別荘（べっそう）",
        "summer home"
      ],
      [
        "別世界（べっせかい）",
        "another world"
      ],
      [
        "差別する（さべつする）",
        "discriminate"
      ],
      [
        "区別する（くべつする）",
        "differentiate"
      ],
      [
        "別居する（べっきょする）",
        "separate (i.e. a married couple)"
      ],
      [
        "別れる（わかれる）",
        "be divided, part from"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "僕",
    "kname": "boku(ra)",
    "kstroke": 14,
    "kmeaning": "I, manservant",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボク",
    "onyomi": "boku",
    "examples": [
      [
        "僕（ぼく）",
        "I (masculine)"
      ],
      [
        "従僕（じゅうぼく）",
        "servant"
      ],
      [
        "下僕（げぼく）",
        "servant"
      ],
      [
        "公僕（こうぼく）",
        "public servant"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "日",
    "kname": "nichi-hi",
    "kstroke": 4,
    "kmeaning": "day, sun, Japan",
    "kgrade": 1,
    "kunyomi_ja": "ひ、か",
    "kunyomi": "hi, ka",
    "onyomi_ja": "ニチ、ジツ",
    "onyomi": "nichi, jitsu",
    "examples": [
      [
        "一日（いちにち）",
        "1 day"
      ],
      [
        "日数（にっすう）",
        "a number of days"
      ],
      [
        "本日（ほんじつ）",
        "today"
      ],
      [
        "朝日（あさひ）",
        "morning sun"
      ],
      [
        "二日（ふつか）",
        "2nd of the month, 2 days"
      ],
      [
        "*一日（ついたち）",
        "1st of the month"
      ],
      [
        "*今日（きょう）",
        "today"
      ],
      [
        "*明日（あした）",
        "tomorrow"
      ],
      [
        "*昨日（きのう）",
        "yesterday"
      ],
      [
        "*明後日（あさって）",
        "day after tomorrow"
      ],
      [
        "*一昨日（おととい）",
        "day before yesterday"
      ],
      [
        "*日本語（にほんご）",
        "Japanese language"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "予",
    "kname": "yo(tei)",
    "kstroke": 4,
    "kmeaning": "in advance",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨ",
    "onyomi": "yo",
    "examples": [
      [
        "天気予報（てんきよほう）",
        "weather forecast"
      ],
      [
        "予算（よさん）",
        "budget"
      ],
      [
        "予備（よび）",
        "spare"
      ],
      [
        "予習する（よしゅうする）",
        "prepare for a lesson"
      ],
      [
        "予定する（よていする）",
        "plan [v.t.]"
      ],
      [
        "予知する（よちする）",
        "know by foresight"
      ],
      [
        "予期する（よきする）",
        "expect"
      ],
      [
        "予約する（よやくする）",
        "reserve"
      ],
      [
        "予感する（よかんする）",
        "know by premonition"
      ],
      [
        "予防する（よぼうする）",
        "prevent"
      ]
    ],
    "radical": "⼅",
    "rad_order": 7,
    "rad_stroke": 1,
    "rad_name_ja": "はねぼう",
    "rad_name": "hanebou",
    "rad_meaning": "vertical stroke with a hook",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "定",
    "kname": "sada(meru)",
    "kstroke": 8,
    "kmeaning": "fix, determine",
    "kgrade": 3,
    "kunyomi_ja": "さだ、さだか、さだめる、さだまる",
    "kunyomi": "sada, sadaka, sadameru, sadamaru",
    "onyomi_ja": "テイ、ジョウ",
    "onyomi": "tei, jou",
    "examples": [
      [
        "定価（ていか）",
        "list price"
      ],
      [
        "定期券（ていきけん）",
        "commuter pass"
      ],
      [
        "定休日（ていきゅうび）",
        "regular holiday"
      ],
      [
        "指定席（していせき）",
        "reserved seat"
      ],
      [
        "予定する（よていする）",
        "plan [v.t.]"
      ],
      [
        "決定する（けっていする）",
        "decide"
      ],
      [
        "否定する（ひていする）",
        "deny"
      ],
      [
        "確定する（かくていする）",
        "fix, settle (e.g. plan)"
      ],
      [
        "安定する（あんていする）",
        "become stable"
      ],
      [
        "案の定（あんのじょう）",
        "sure enough"
      ],
      [
        "定める（さだめる）",
        "decide, establish [v.t.]"
      ],
      [
        "定まる（さだまる）",
        "become decided [v.i.]"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "写",
    "kname": "sha-utsu(su)",
    "kstroke": 5,
    "kmeaning": "copy",
    "kgrade": 3,
    "kunyomi_ja": "うつ、うつす、うつる",
    "kunyomi": "utsu, utsusu, utsuru",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "写真（しゃしん）",
        "photograph"
      ],
      [
        "写実的な（しゃじつてきな）",
        "true to life"
      ],
      [
        "写生する（しゃせいする）",
        "sketch (drawing)"
      ],
      [
        "写経する（しゃきょうする）",
        "hand-copy a sutra"
      ],
      [
        "写本する（しゃほんする）",
        "hand-copy a manuscript"
      ],
      [
        "複写する（ふくしゃする）",
        "copy"
      ],
      [
        "描写する（びょうしゃする）",
        "depict"
      ],
      [
        "写す（うつす）",
        "film, project [v.t.]"
      ],
      [
        "写る（うつる）",
        "be projected [v.i.]"
      ]
    ],
    "radical": "⼍",
    "rad_order": 18,
    "rad_stroke": 2,
    "rad_name_ja": "わかんむり",
    "rad_name": "wakanmuri",
    "rad_meaning": "cover, crown",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "真",
    "kname": "(sha)shin",
    "kstroke": 10,
    "kmeaning": "true, genuine",
    "kgrade": 3,
    "kunyomi_ja": "ま",
    "kunyomi": "ma",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "写真（しゃしん）",
        "photograph"
      ],
      [
        "真意（しんい）",
        "real intention"
      ],
      [
        "真実（しんじつ）",
        "truth"
      ],
      [
        "真偽（しんぎ）",
        "truth or falsity"
      ],
      [
        "真面目な（まじめな）",
        "serious"
      ],
      [
        "真っ直ぐ（まっすぐ）",
        "straight"
      ],
      [
        "真似する（まねする）",
        "imitate"
      ],
      [
        "真ん中（まんなか）",
        "middle"
      ],
      [
        "真上（まうえ）",
        "just above"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "普",
    "kname": "fu(dangi)",
    "kstroke": 12,
    "kmeaning": "widespread, general",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "普通（ふつう）",
        "ordinarily"
      ],
      [
        "普段（ふだん）",
        "usually"
      ],
      [
        "普遍的な（ふへんてきな）",
        "universal"
      ],
      [
        "普及する（ふきゅうする）",
        "spread"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "意",
    "kname": "(ketsu)i",
    "kstroke": 13,
    "kmeaning": "mind, meaning, will",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "意味（いみ）",
        "meaning"
      ],
      [
        "意識（いしき）",
        "consciousness"
      ],
      [
        "意見（いけん）",
        "opinion"
      ],
      [
        "意志（いし）",
        "will [n.]"
      ],
      [
        "好意（こうい）",
        "good will, favor"
      ],
      [
        "意外な（いがいな）",
        "surprising"
      ],
      [
        "意地悪な（いじわるな）",
        "malicious"
      ],
      [
        "注意する（ちゅういする）",
        "be careful, warn"
      ],
      [
        "用意する（よういする）",
        "prepare"
      ],
      [
        "決意する（けついする）",
        "decide"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "忘",
    "kname": "wasu(reru)",
    "kstroke": 7,
    "kmeaning": "forget",
    "kgrade": 6,
    "kunyomi_ja": "わす、わすれる",
    "kunyomi": "wasu, wasureru",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "忘年会（ぼうねんかい）",
        "year-end party"
      ],
      [
        "忘却する（ぼうきゃくする）",
        "forget"
      ],
      [
        "忘れる（わすれる）",
        "forget"
      ],
      [
        "忘れ物（わすれもの）",
        "something forgotten"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "覚",
    "kname": "kaku-obo(eru)",
    "kstroke": 12,
    "kmeaning": "perceive, remember, awake",
    "kgrade": 4,
    "kunyomi_ja": "おぼ、さ、おぼえる、さます、さめる",
    "kunyomi": "obo, sa, oboeru, samasu, sameru",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "感覚（かんかく）",
        "sense, sensation"
      ],
      [
        "覚悟する（かくごする）",
        "prepare, steel oneself"
      ],
      [
        "知覚する（ちかくする）",
        "perceive"
      ],
      [
        "自覚する（じかくする）",
        "become aware of oneself"
      ],
      [
        "発覚する（はっかくする）",
        "come to light"
      ],
      [
        "覚える（おぼえる）",
        "remember, memorize"
      ],
      [
        "覚める（さめる）",
        "wake up [v.i.]"
      ],
      [
        "覚ます（さます）",
        "awaken [v.t.]"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "席",
    "kname": "(za)seki",
    "kstroke": 10,
    "kmeaning": "seat",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "出席する（しゅっせきする）",
        "attend [v.i.]"
      ],
      [
        "欠席する（けっせきする）",
        "be absent"
      ],
      [
        "座席（ざせき）",
        "seat"
      ],
      [
        "議席（ぎせき）",
        "parliamentary seat"
      ],
      [
        "指定席（していせき）",
        "reserved seat"
      ],
      [
        "自由席（じゆうせき）",
        "unreserved seat"
      ],
      [
        "即席ラーメン（そくせきラーメン）",
        "instant noodles"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "君",
    "kname": "kimi",
    "kstroke": 7,
    "kmeaning": "ruler, familiar title, you",
    "kgrade": 3,
    "kunyomi_ja": "きみ",
    "kunyomi": "kimi",
    "onyomi_ja": "クン",
    "onyomi": "kun",
    "examples": [
      [
        "君主（くんしゅ）",
        "monarch"
      ],
      [
        "暴君（ぼうくん）",
        "tyrant"
      ],
      [
        "田中君（たなかくん）",
        "Tanaka (surname)"
      ],
      [
        "諸君（しょくん）",
        "Ladies and gentlemen!"
      ],
      [
        "君臨する（くんりんする）",
        "reign"
      ],
      [
        "君（きみ）",
        "you"
      ],
      [
        "君が代（きみがよ）",
        "Japanese national anthem"
      ],
      [
        "姫君（ひめぎみ）",
        "princess"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "百",
    "kname": "hyaku-momo",
    "kstroke": 6,
    "kmeaning": "hundred",
    "kgrade": 1,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヒャク",
    "onyomi": "hyaku",
    "examples": [
      [
        "百（ひゃく）",
        "100"
      ],
      [
        "百倍（ひゃくばい）",
        "hundredfold"
      ],
      [
        "百姓（ひゃくしょう）",
        "farmer"
      ],
      [
        "三百（さんびゃく）",
        "300"
      ],
      [
        "六百（ろっぴゃく）",
        "600"
      ],
      [
        "八百（はっぴゃく）",
        "800"
      ],
      [
        "*八百屋（やおや）",
        "greengrocer"
      ]
    ],
    "radical": "⽩",
    "rad_order": 133,
    "rad_stroke": 5,
    "rad_name_ja": "しろ",
    "rad_name": "shiro",
    "rad_meaning": "white",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "熱",
    "kname": "netsu",
    "kstroke": 15,
    "kmeaning": "heat, hot, fever",
    "kgrade": 4,
    "kunyomi_ja": "あつ、あつい",
    "kunyomi": "atsu, atsui",
    "onyomi_ja": "ネツ",
    "onyomi": "netsu",
    "examples": [
      [
        "熱（ねつ）",
        "fever, temperature"
      ],
      [
        "高熱（こうねつ）",
        "high fever, high temperature"
      ],
      [
        "情熱（じょうねつ）",
        "passion"
      ],
      [
        "光熱費（こうねつひ）",
        "lighting and heating expenses"
      ],
      [
        "熱湯（ねっとう）",
        "boiling water"
      ],
      [
        "熱心な（ねっしんな）",
        "enthusiastic"
      ],
      [
        "加熱する（かねつする）",
        "heat [v.t.]"
      ],
      [
        "発熱する（はつねつする）",
        "generate heat"
      ],
      [
        "熱中する（ねっちゅうする）",
        "be absorbed, enthusiastic"
      ],
      [
        "熱い（あつい）",
        "hot"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "死",
    "kname": "shi(nu)",
    "kstroke": 6,
    "kmeaning": "die, death",
    "kgrade": 3,
    "kunyomi_ja": "し、しぬ、しに",
    "kunyomi": "shi, shinu, shini",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "死去（しきょ）",
        "death"
      ],
      [
        "死刑（しけい）",
        "death penalty"
      ],
      [
        "死後（しご）",
        "after death"
      ],
      [
        "死体（したい）",
        "corpse"
      ],
      [
        "脳死（のうし）",
        "brain death"
      ],
      [
        "必死に（ひっしに）",
        "desperately"
      ],
      [
        "死亡する（しぼうする）",
        "die"
      ],
      [
        "殉死する（じゅんしする）",
        "die a martyr"
      ],
      [
        "戦死する（せんしする）",
        "die in war"
      ],
      [
        "即死する（そくしする）",
        "die instantly"
      ],
      [
        "死ぬ（しぬ）",
        "die"
      ]
    ],
    "radical": "⽍",
    "rad_order": 101,
    "rad_stroke": 4,
    "rad_name_ja": "がつ",
    "rad_name": "gatsu",
    "rad_meaning": "death & dying, to decompose",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "結",
    "kname": "musu(bu)",
    "kstroke": 12,
    "kmeaning": "tie, conclude",
    "kgrade": 4,
    "kunyomi_ja": "むす、ゆ、むすぶ、ゆう、ゆわえる",
    "kunyomi": "musu, yu, musubu, yuu, yuwaeru",
    "onyomi_ja": "ケツ",
    "onyomi": "ketsu",
    "examples": [
      [
        "結論（けつろん）",
        "conclusion"
      ],
      [
        "結局（けっきょく）",
        "after all"
      ],
      [
        "結果（けっか）",
        "result"
      ],
      [
        "結核（けっかく）",
        "tuberculosis"
      ],
      [
        "結構な（けっこうな）",
        "splendid, good"
      ],
      [
        "結婚する（けっこんする）",
        "marry"
      ],
      [
        "結合する（けつごうする）",
        "combine [v.i.]"
      ],
      [
        "完結する（かんけつする）",
        "be completed"
      ],
      [
        "結ぶ（むすぶ）",
        "tie"
      ],
      [
        "結う（ゆう）",
        "do up (e.g. hair)"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "婚",
    "kname": "kon(yaku)",
    "kstroke": 11,
    "kmeaning": "marry",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コン",
    "onyomi": "kon",
    "examples": [
      [
        "新婚（しんこん）",
        "newly-wed"
      ],
      [
        "未婚（みこん）",
        "unmarried"
      ],
      [
        "既婚（きこん）",
        "married"
      ],
      [
        "結婚式（けっこんしき）",
        "wedding ceremony"
      ],
      [
        "結婚する（けっこんする）",
        "marry/get married"
      ],
      [
        "求婚する（きゅうこんする）",
        "propose (marriage)"
      ],
      [
        "再婚する（さいこんする）",
        "remarry"
      ],
      [
        "離婚する（りこんする）",
        "divorce/get divorced"
      ],
      [
        "婚約する（こんやくする）",
        "become engaged"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "式",
    "kname": "(kei)shiki",
    "kstroke": 6,
    "kmeaning": "style, ceremony",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シキ",
    "onyomi": "shiki",
    "examples": [
      [
        "結婚式（けっこんしき）",
        "wedding ceremony"
      ],
      [
        "卒業式（そつぎょうしき）",
        "graduation ceremony"
      ],
      [
        "葬式（そうしき）",
        "funeral"
      ],
      [
        "儀式（ぎしき）",
        "ceremony, service"
      ],
      [
        "様式（ようしき）",
        "style, form"
      ],
      [
        "形式（けいしき）",
        "form, format"
      ],
      [
        "公式（こうしき）",
        "formula [n.], official [adj.]"
      ],
      [
        "方程式（ほうていしき）",
        "equation"
      ],
      [
        "正式な（せいしきな）",
        "official"
      ],
      [
        "株式会社（かぶしきがいしゃ）",
        "corporation"
      ]
    ],
    "radical": "⼷",
    "rad_order": 66,
    "rad_stroke": 3,
    "rad_name_ja": "いぐるみ",
    "rad_name": "igurumi",
    "rad_meaning": "javelin",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "牛",
    "kname": "gyuu-ushi",
    "kstroke": 4,
    "kmeaning": "cattle, cow, ox",
    "kgrade": 2,
    "kunyomi_ja": "うし",
    "kunyomi": "ushi",
    "onyomi_ja": "ギュウ",
    "onyomi": "gyuu",
    "examples": [
      [
        "牛乳（ぎゅうにゅう）",
        "(cow) milk"
      ],
      [
        "牛肉（ぎゅうにく）",
        "beef"
      ],
      [
        "闘牛（とうぎゅう）",
        "bull fight"
      ],
      [
        "牛（うし）",
        "cow"
      ],
      [
        "子牛（こうし）",
        "calf"
      ]
    ],
    "radical": "⽜",
    "rad_order": 116,
    "rad_stroke": 4,
    "rad_name_ja": "うし",
    "rad_name": "ushi",
    "rad_meaning": "cow",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "乳",
    "kname": "nyuu-chichi",
    "kstroke": 8,
    "kmeaning": "milk",
    "kgrade": 6,
    "kunyomi_ja": "ちち、ち",
    "kunyomi": "chichi, chi",
    "onyomi_ja": "ニュウ",
    "onyomi": "nyuu",
    "examples": [
      [
        "牛乳（ぎゅうにゅう）",
        "(cow's) milk"
      ],
      [
        "母乳（ぼにゅう）",
        "mother's milk"
      ],
      [
        "乳牛（にゅうぎゅう）",
        "dairy cattle"
      ],
      [
        "乳児（にゅうじ）",
        "infant"
      ],
      [
        "乳歯（にゅうし）",
        "milk (baby) tooth"
      ],
      [
        "乳（ちち）",
        "milk, breast"
      ],
      [
        "乳房（ちぶさ）",
        "breast"
      ]
    ],
    "radical": "⺃",
    "rad_order": 6.5,
    "rad_stroke": 1,
    "rad_name_ja": "おつ",
    "rad_name": "otsu",
    "rad_meaning": "the second",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "沢",
    "kname": "taku-sawa",
    "kstroke": 7,
    "kmeaning": "marsh",
    "kgrade": "n/a",
    "kunyomi_ja": "さわ",
    "kunyomi": "sawa",
    "onyomi_ja": "タク",
    "onyomi": "taku",
    "examples": [
      [
        "沢山（たくさん）",
        "many, a lot, much"
      ],
      [
        "贅沢な（ぜいたくな）",
        "luxurious"
      ],
      [
        "沢（さわ）",
        "swamp"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "町",
    "kname": "chou-machi",
    "kstroke": 7,
    "kmeaning": "town",
    "kgrade": 1,
    "kunyomi_ja": "まち",
    "kunyomi": "machi",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "町長（ちょうちょう）",
        "town headman"
      ],
      [
        "町名（ちょうめい）",
        "name of a town"
      ],
      [
        "市町村（しちょうそん）",
        "cities, towns and villages"
      ],
      [
        "町（まち）",
        "town"
      ],
      [
        "町並み（まちなみ）",
        "the appearance of a town/street"
      ],
      [
        "下町（したまち）",
        "old commercial area of Tokyo"
      ]
    ],
    "radical": "",
    "rad_order": 129,
    "rad_stroke": 5,
    "rad_name_ja": "たへん",
    "rad_name": "tahen",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "他",
    "kname": "ta-hoka",
    "kstroke": 5,
    "kmeaning": "other",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タ",
    "onyomi": "ta",
    "examples": [
      [
        "他人（たにん）",
        "stranger [n.]"
      ],
      [
        "排他的な（はいたてきな）",
        "exclusive"
      ],
      [
        "その他（そのた）",
        "etc."
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "千",
    "kname": "sen-chi",
    "kstroke": 3,
    "kmeaning": "thousand",
    "kgrade": 1,
    "kunyomi_ja": "ち",
    "kunyomi": "chi",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "千（せん）",
        "1000"
      ],
      [
        "三千（さんぜん）",
        "3000"
      ],
      [
        "八千（はっせん）",
        "8000"
      ],
      [
        "千切れる（ちぎれる）",
        "be torn off"
      ],
      [
        "千鳥（ちどり）",
        "plover"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "飯",
    "kname": "meshi",
    "kstroke": 12,
    "kmeaning": "cooked rice, meal",
    "kgrade": 4,
    "kunyomi_ja": "めし",
    "kunyomi": "meshi",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "御飯（ごはん）",
        "rice (cooked), meal"
      ],
      [
        "夕飯（ゆうはん）",
        "dinner"
      ],
      [
        "朝御飯（あさごはん）",
        "breakfast"
      ],
      [
        "昼御飯（ひるごはん）",
        "lunch"
      ],
      [
        "晩御飯（ばんごはん）",
        "dinner"
      ],
      [
        "炊飯器（すいはんき）",
        "rice cooker"
      ],
      [
        "飯（めし）",
        "meal, food (derogatory)"
      ],
      [
        "朝飯前（あさめしまえ）",
        "simple, a piece of cake"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "答",
    "kname": "tou-kota(e)",
    "kstroke": 12,
    "kmeaning": "answer",
    "kgrade": 2,
    "kunyomi_ja": "こた、こたえ、こたえる",
    "kunyomi": "kota, kotae, kotaeru",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "解答する（かいとうする）",
        "solve, figure out"
      ],
      [
        "回答する（かいとうする）",
        "reply [v.i.]"
      ],
      [
        "応答する（おうとうする）",
        "respond [v.i.]"
      ],
      [
        "返答する（へんとうする）",
        "reply [v.i.]"
      ],
      [
        "答案（とうあん）",
        "examination paper"
      ],
      [
        "答える（こたえる）",
        "answer [v.i.]"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "店",
    "kname": "mise",
    "kstroke": 8,
    "kmeaning": "shop, store",
    "kgrade": 2,
    "kunyomi_ja": "みせ",
    "kunyomi": "mise",
    "onyomi_ja": "テン",
    "onyomi": "ten",
    "examples": [
      [
        "商店（しょうてん）",
        "shop [n.]"
      ],
      [
        "書店（しょてん）",
        "bookstore"
      ],
      [
        "売店（ばいてん）",
        "stand [n.]"
      ],
      [
        "本店（ほんてん）",
        "head office"
      ],
      [
        "支店（してん）",
        "branch office"
      ],
      [
        "喫茶店（きっさてん）",
        "coffee shop"
      ],
      [
        "店員（てんいん）",
        "salesperson"
      ],
      [
        "店頭（てんとう）",
        "shop front"
      ],
      [
        "店（みせ）",
        "store [n.]"
      ],
      [
        "店先（みせさき）",
        "store front"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "愛",
    "kname": "ito(shii)",
    "kstroke": 13,
    "kmeaning": "love",
    "kgrade": 4,
    "kunyomi_ja": "いと、いとしい、いとおしむ",
    "kunyomi": "ito, itoshii, itooshimu",
    "onyomi_ja": "アイ",
    "onyomi": "ai",
    "examples": [
      [
        "愛する（あいする）",
        "love [v.t.]"
      ],
      [
        "愛用する（あいようする）",
        "use habitually"
      ],
      [
        "愛（あい）",
        "love [n.]"
      ],
      [
        "愛情（あいじょう）",
        "love [n.]"
      ],
      [
        "愛妻（あいさい）",
        "beloved wife"
      ],
      [
        "愛人（あいじん）",
        "lover, mistress"
      ],
      [
        "愛国心（あいこくしん）",
        "patriotism"
      ],
      [
        "恋愛（れんあい）",
        "love affair"
      ],
      [
        "母性愛（ぼせいあい）",
        "maternal love"
      ],
      [
        "愛しい（いとしい）",
        "lovely"
      ],
      [
        "愛おしむ（いとおしむ）",
        "love [v.t.]"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "合",
    "kname": "gou-a(u)",
    "kstroke": 6,
    "kmeaning": "combine, fit, match",
    "kgrade": 2,
    "kunyomi_ja": "あ、あう、あい、あわす、あわせる",
    "kunyomi": "a, au, ai, awasu, awaseru",
    "onyomi_ja": "ゴウ、カ、ガ",
    "onyomi": "gou, ka, ga",
    "examples": [
      [
        "合計する（ごうけいする）",
        "add up"
      ],
      [
        "合意する（ごういする）",
        "agree"
      ],
      [
        "集合する（しゅうごうする）",
        "gather [v.i.]"
      ],
      [
        "都合（つごう）",
        "convenience"
      ],
      [
        "合戦（かっせん）",
        "battle"
      ],
      [
        "合唱（がっしょう）",
        "chorus"
      ],
      [
        "合衆国（がっしゅうこく）",
        "United States of America"
      ],
      [
        "合う（あう）",
        "match [v.i.]"
      ],
      [
        "助け合う（たすけあう）",
        "help each other"
      ],
      [
        "合わせる（あわせる）",
        "put together, join, adapt"
      ],
      [
        "知り合い（しりあい）",
        "acquaintance"
      ],
      [
        "試合（しあい）",
        "game, match"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "悲",
    "kname": "hi-kana(shii)",
    "kstroke": 12,
    "kmeaning": "sad",
    "kgrade": 3,
    "kunyomi_ja": "かな、かなしい、かなしむ、かなしさ、かなしみ",
    "kunyomi": "kana, kanashii, kanashimu, kanashisa, kanashimi",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "悲劇（ひげき）",
        "tragedy"
      ],
      [
        "悲鳴（ひめい）",
        "scream [n.]"
      ],
      [
        "慈悲（じひ）",
        "benevolence"
      ],
      [
        "悲惨な（ひさんな）",
        "tragic"
      ],
      [
        "悲観的な（ひかんてきな）",
        "pessimistic"
      ],
      [
        "悲観する（ひかんする）",
        "be pessimistic"
      ],
      [
        "悲しい（かなしい）",
        "sad"
      ],
      [
        "悲しむ（かなしむ）",
        "mourn"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "職",
    "kname": "shoku(gyou)",
    "kstroke": 18,
    "kmeaning": "employment",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショク",
    "onyomi": "shoku",
    "examples": [
      [
        "職（しょく）",
        "job"
      ],
      [
        "職業（しょくぎょう）",
        "occupation"
      ],
      [
        "職場（しょくば）",
        "workplace"
      ],
      [
        "職務（しょくむ）",
        "professional duties"
      ],
      [
        "職員室（しょくいんしつ）",
        "teachers'/faculty room"
      ],
      [
        "無職（むしょく）",
        "unemployed [n.]"
      ],
      [
        "就職する（しゅうしょくする）",
        "find employment"
      ],
      [
        "退職する（たいしょくする）",
        "retire"
      ]
    ],
    "radical": "",
    "rad_order": 164,
    "rad_stroke": 6,
    "rad_name_ja": "みみへん",
    "rad_name": "mimihen",
    "rad_meaning": "ear",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "員",
    "kname": "(ginkou)in",
    "kstroke": 10,
    "kmeaning": "member",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イン",
    "onyomi": "in",
    "examples": [
      [
        "社員（しゃいん）",
        "company employee"
      ],
      [
        "店員（てんいん）",
        "salesperson"
      ],
      [
        "職員（しょくいん）",
        "staff member"
      ],
      [
        "議員（ぎいん）",
        "member of congress"
      ],
      [
        "委員（いいん）",
        "committee member"
      ],
      [
        "全員（ぜんいん）",
        "all members"
      ],
      [
        "満員（まんいん）",
        "full, crowded [n.]"
      ],
      [
        "定員（ていいん）",
        "fixed number, capacity"
      ],
      [
        "会社員（かいしゃいん）",
        "company employee"
      ],
      [
        "公務員（こうむいん）",
        "public (civil) servant"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "幸",
    "kname": "saiwa(i)",
    "kstroke": 8,
    "kmeaning": "happiness, happy",
    "kgrade": 3,
    "kunyomi_ja": "さいわ、さいわい、さち、しあわ、しあわせ",
    "kunyomi": "saiwa, saiwai, sachi, shiawa, shiawase",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "幸運な（こううんな）",
        "fortunate"
      ],
      [
        "幸福な（こうふくな）",
        "happy"
      ],
      [
        "不幸な（ふこうな）",
        "unhappy"
      ],
      [
        "薄幸な（はっこうな）",
        "unfortunate"
      ],
      [
        "幸い（さいわい）",
        "happiness [n.], luckily [adv.]"
      ],
      [
        "幸（さち）",
        "happiness"
      ],
      [
        "幸せな（しあわせな）",
        "happy"
      ],
      [
        "不幸せな（ふしあわせな）",
        "unhappy"
      ]
    ],
    "radical": "⼲",
    "rad_order": 61,
    "rad_stroke": 3,
    "rad_name_ja": "かん",
    "rad_name": "kan",
    "rad_meaning": "to dry, shield",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "飛",
    "kname": "hi-to(bu)",
    "kstroke": 9,
    "kmeaning": "fly",
    "kgrade": 4,
    "kunyomi_ja": "と、とぶ、とばす",
    "kunyomi": "to, tobu, tobasu",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "飛行機（ひこうき）",
        "airplane"
      ],
      [
        "飛行場（ひこうじょう）",
        "airport"
      ],
      [
        "飛行船（ひこうせん）",
        "airship"
      ],
      [
        "飛躍する（ひやくする）",
        "leap [v.i.]"
      ],
      [
        "飛ぶ（とぶ）",
        "jump, fly [v.i.]"
      ],
      [
        "飛び込む（とびこむ）",
        "jump in"
      ],
      [
        "飛び上がる（とびあがる）",
        "jump up"
      ],
      [
        "飛ばす（とばす）",
        "send, fly [v.t.]"
      ]
    ],
    "radical": "⾶",
    "rad_order": 219,
    "rad_stroke": 9,
    "rad_name_ja": "とぶ",
    "rad_name": "tobu",
    "rad_meaning": "to fly",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "今",
    "kname": "ima",
    "kstroke": 4,
    "kmeaning": "present, this",
    "kgrade": 2,
    "kunyomi_ja": "いま",
    "kunyomi": "ima",
    "onyomi_ja": "コン、キン",
    "onyomi": "kon, kin",
    "examples": [
      [
        "今月（こんげつ）",
        "this month"
      ],
      [
        "今週（こんしゅう）",
        "this week"
      ],
      [
        "今晩（こんばん）",
        "tonight"
      ],
      [
        "今後（こんご）",
        "from now on"
      ],
      [
        "今回（こんかい）",
        "this time"
      ],
      [
        "今度（こんど）",
        "this time, next time"
      ],
      [
        "今上（きんじょう）",
        "current emperor"
      ],
      [
        "今（いま）",
        "now"
      ],
      [
        "今風（いまふう）",
        "modern style"
      ],
      [
        "*今年（ことし）",
        "this year"
      ],
      [
        "*今日（きょう）",
        "today"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "耳",
    "kname": "mimi",
    "kstroke": 6,
    "kmeaning": "ear",
    "kgrade": 1,
    "kunyomi_ja": "みみ",
    "kunyomi": "mimi",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "耳鼻科（じびか）",
        "otolaryngology"
      ],
      [
        "耳（みみ）",
        "ear"
      ],
      [
        "初耳（はつみみ）",
        "heard for the first time"
      ]
    ],
    "radical": "⽿",
    "rad_order": 163,
    "rad_stroke": 6,
    "rad_name_ja": "みみ",
    "rad_name": "mimi",
    "rad_meaning": "ear",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "嫌",
    "kname": "kira(u)",
    "kstroke": 13,
    "kmeaning": "dislike, unpleasant",
    "kgrade": "n/a",
    "kunyomi_ja": "きら、きらう、きらい、いや、いやがる",
    "kunyomi": "kira, kirau, kirai, iya, iyagaru",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "自己嫌悪（じこけんお）",
        "self-hatred"
      ],
      [
        "機嫌（きげん）",
        "mood"
      ],
      [
        "嫌う（きらう）",
        "dislike [v.t.]"
      ],
      [
        "嫌いな（きらいな）",
        "dislike"
      ],
      [
        "好き嫌い（すききらい）",
        "likes and dislikes"
      ],
      [
        "食わず嫌い（くわずぎらい）",
        "prejudiced against (some food)"
      ],
      [
        "嫌な（いやな）",
        "unpleasant"
      ],
      [
        "嫌がる（いやがる）",
        "dislike, unwilling, reluctant [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "窓",
    "kname": "mado",
    "kstroke": 11,
    "kmeaning": "window",
    "kgrade": 6,
    "kunyomi_ja": "まど",
    "kunyomi": "mado",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "車窓（しゃそう）",
        "car window"
      ],
      [
        "同窓会（どうそうかい）",
        "class reunion"
      ],
      [
        "窓（まど）",
        "window"
      ],
      [
        "窓口（まどぐち）",
        "ticket window"
      ],
      [
        "窓際（まどぎわ）",
        "(at the) window"
      ]
    ],
    "radical": "",
    "rad_order": 147,
    "rad_stroke": 5,
    "rad_name_ja": "あなかんむり",
    "rad_name": "anakanmuri",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "喜",
    "kname": "ki-yoroko(bu)",
    "kstroke": 12,
    "kmeaning": "happy, happiness, be glad",
    "kgrade": 4,
    "kunyomi_ja": "よろこ、よろこぶ、よろこび、よろこばす",
    "kunyomi": "yoroko, yorokobu, yorokobi, yorokobasu",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "歓喜する（かんきする）",
        "rejoice"
      ],
      [
        "喜劇（きげき）",
        "comedy"
      ],
      [
        "一喜一憂（いっきいちゆう）",
        "mixed blessings"
      ],
      [
        "喜ぶ（よろこぶ）",
        "be delighted [v.i.]"
      ],
      [
        "喜ばす（よろこばす）",
        "give pleasure, please [v.t.]"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "反",
    "kname": "han-so(ru)",
    "kstroke": 4,
    "kmeaning": "counter, anti-",
    "kgrade": 3,
    "kunyomi_ja": "そ、そる、そらす",
    "kunyomi": "so, soru, sorasu",
    "onyomi_ja": "ハン、ホン、タン",
    "onyomi": "han, hon, tan",
    "examples": [
      [
        "反対する（はんたいする）",
        "disagree"
      ],
      [
        "反抗する（はんこうする）",
        "rebel [v.i.]"
      ],
      [
        "反応する（はんのうする）",
        "react"
      ],
      [
        "反省する（はんせいする）",
        "reflect on"
      ],
      [
        "違反する（いはんする）",
        "violate"
      ],
      [
        "反感（はんかん）",
        "antipathy"
      ],
      [
        "反戦（はんせん）",
        "anti-war"
      ],
      [
        "反日（はんにち）",
        "anti-Japanese"
      ],
      [
        "謀反（むほん）",
        "rebellion"
      ],
      [
        "一反（いったん）",
        "one-tenth of a hectare"
      ],
      [
        "反る（そる）",
        "curve [v.i.]"
      ],
      [
        "反らす（そらす）",
        "bend [v.t.]"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "対",
    "kname": "(han)tai",
    "kstroke": 7,
    "kmeaning": "oppose, opposite, against",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タイ、ツイ",
    "onyomi": "tai, tsui",
    "examples": [
      [
        "反対する（はんたいする）",
        "disagree, object"
      ],
      [
        "対抗する（たいこうする）",
        "oppose, cope"
      ],
      [
        "対応する（たいおうする）",
        "deal with"
      ],
      [
        "対立する（たいりつする）",
        "confront"
      ],
      [
        "対象（たいしょう）",
        "target [n.], object [n.]"
      ],
      [
        "対日（たいにち）",
        "with respect to Japan"
      ],
      [
        "絶対（ぜったい）",
        "absolute"
      ],
      [
        "対等な（たいとうな）",
        "equivalent"
      ],
      [
        "対（つい）",
        "pair, couple"
      ]
    ],
    "radical": "",
    "rad_order": 49.5,
    "rad_stroke": 3,
    "rad_name_ja": "すんづくり",
    "rad_name": "sunzukuri",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "恋",
    "kname": "ren-koi",
    "kstroke": 10,
    "kmeaning": "love",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こう、こい、こいしい、こいする",
    "kunyomi": "ko, kou, koi, koishii, koisuru",
    "onyomi_ja": "レン",
    "onyomi": "ren",
    "examples": [
      [
        "恋愛（れんあい）",
        "love affair"
      ],
      [
        "失恋する（しつれんする）",
        "be broken hearted"
      ],
      [
        "恋う（こう）",
        "love [v.t.]"
      ],
      [
        "恋する（こいする）",
        "love [v.t.]"
      ],
      [
        "恋（こい）",
        "love [n.]"
      ],
      [
        "恋人（こいびと）",
        "lover"
      ],
      [
        "恋しい（こいしい）",
        "dear"
      ],
      [
        "初恋（はつこい）",
        "first love"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "告",
    "kname": "koku-tsu(geru)",
    "kstroke": 7,
    "kmeaning": "notify, tell, inform",
    "kgrade": 4,
    "kunyomi_ja": "つ、つぐ、つげる",
    "kunyomi": "tsu, tsugu, tsugeru",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "報告する（ほうこくする）",
        "report [v.t.]"
      ],
      [
        "忠告する（ちゅうこくする）",
        "advise, warn"
      ],
      [
        "警告する（けいこくする）",
        "warn"
      ],
      [
        "申告する（しんこくする）",
        "file a report"
      ],
      [
        "告訴する（こくそする）",
        "accuse"
      ],
      [
        "告白する（こくはくする）",
        "confess"
      ],
      [
        "広告（こうこく）",
        "advertisement"
      ],
      [
        "被告（ひこく）",
        "defendant"
      ],
      [
        "原告（げんこく）",
        "prosecutor"
      ],
      [
        "告げる（つげる）",
        "inform"
      ],
      [
        "告げ口（つげぐち）",
        "tell on (someone) [n.]"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "許",
    "kname": "kyo-yuru(su)",
    "kstroke": 11,
    "kmeaning": "permit, allow",
    "kgrade": 5,
    "kunyomi_ja": "ゆる、ゆるす、ゆるし",
    "kunyomi": "yuru, yurusu, yurushi",
    "onyomi_ja": "キョ",
    "onyomi": "kyo",
    "examples": [
      [
        "免許（めんきょ）",
        "license [n.]"
      ],
      [
        "特許（とっきょ）",
        "patent [n.]"
      ],
      [
        "許可する（きょかする）",
        "approve, permit, admit"
      ],
      [
        "許す（ゆるす）",
        "allow, forgive, permit, admit"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "件",
    "kname": "(ji)ken",
    "kstroke": 6,
    "kmeaning": "matter",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "件（けん）",
        "incident"
      ],
      [
        "事件（じけん）",
        "incident, criminal case"
      ],
      [
        "条件（じょうけん）",
        "condition [n.]"
      ],
      [
        "用件（ようけん）",
        "(one's) business, concerns"
      ],
      [
        "人件費（じんけんひ）",
        "cost of labor"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "小",
    "kname": "chii(sai)",
    "kstroke": 3,
    "kmeaning": "small",
    "kgrade": 1,
    "kunyomi_ja": "ちい、ちいさい、こ、お",
    "kunyomi": "chii, chiisai, ko, o",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "小説（しょうせつ）",
        "a novel"
      ],
      [
        "小学校（しょうがっこう）",
        "elementary school"
      ],
      [
        "最小（さいしょう）",
        "minimum"
      ],
      [
        "大小（だいしょう）",
        "size"
      ],
      [
        "小さい（ちいさい）",
        "small"
      ],
      [
        "小麦（こむぎ）",
        "wheat"
      ],
      [
        "小鳥（ことり）",
        "small bird"
      ],
      [
        "小川（おがわ）",
        "small stream, brook"
      ]
    ],
    "radical": "⼩",
    "rad_order": 50,
    "rad_stroke": 3,
    "rad_name_ja": "しょう",
    "rad_name": "shou",
    "rad_meaning": "small",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "戻",
    "kname": "modo(ru)",
    "kstroke": 7,
    "kmeaning": "return",
    "kgrade": "n/a",
    "kunyomi_ja": "もど、もどす、もどる",
    "kunyomi": "modo, modosu, modoru",
    "onyomi_ja": "レイ",
    "onyomi": "rei",
    "examples": [
      [
        "返戻する（へんれいする）",
        "return [v.t.]"
      ],
      [
        "戻す（もどす）",
        "restore, put back [v.t.]"
      ],
      [
        "取り戻す（とりもどす）",
        "regain"
      ],
      [
        "買い戻す（かいもどす）",
        "buy back"
      ],
      [
        "払い戻し（はらいもどし）",
        "refund, rebate [n.]"
      ],
      [
        "戻る（もどる）",
        "return [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 83,
    "rad_stroke": 4,
    "rad_name_ja": "とだれ",
    "rad_name": "todare",
    "rad_meaning": "door",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "服",
    "kname": "(you)fuku",
    "kstroke": 8,
    "kmeaning": "clothes, clothing, submit",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "服（ふく）",
        "clothes"
      ],
      [
        "洋服（ようふく）",
        "Western-style clothes"
      ],
      [
        "和服（わふく）",
        "Japanese clothes"
      ],
      [
        "制服（せいふく）",
        "uniform"
      ],
      [
        "服装（ふくそう）",
        "clothes"
      ],
      [
        "服従する（ふくじゅうする）",
        "obey"
      ],
      [
        "服役する（ふくえきする）",
        "serve time in prison"
      ],
      [
        "克服する（こくふくする）",
        "conquer"
      ],
      [
        "不服な（ふふくな）",
        "dissatisfied"
      ],
      [
        "内服薬（ないふくやく）",
        "medicine taken internally"
      ]
    ],
    "radical": "⺝",
    "rad_order": 95.5,
    "rad_stroke": 4,
    "rad_name_ja": "つきへん",
    "rad_name": "tsukihen",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "曜",
    "kname": "you(bi)",
    "kstroke": 18,
    "kmeaning": "day of the week",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "曜日（ようび）",
        "day of the week"
      ],
      [
        "日曜日（にちようび）",
        "Sunday"
      ],
      [
        "月曜日（げつようび）",
        "Monday"
      ],
      [
        "火曜日（かようび）",
        "Tuesday"
      ],
      [
        "水曜日（すいようび）",
        "Wednesday"
      ],
      [
        "木曜日（もくようび）",
        "Thursday"
      ],
      [
        "金曜日（きんようび）",
        "Friday"
      ],
      [
        "土曜日（どようび）",
        "Saturday"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "品",
    "kname": "shina",
    "kstroke": 9,
    "kmeaning": "article, goods",
    "kgrade": 3,
    "kunyomi_ja": "しな",
    "kunyomi": "shina",
    "onyomi_ja": "ヒン",
    "onyomi": "hin",
    "examples": [
      [
        "品質（ひんしつ）",
        "quality"
      ],
      [
        "品種（ひんしゅ）",
        "brand"
      ],
      [
        "作品（さくひん）",
        "work (of fiction, etc.) [n.]"
      ],
      [
        "製品（せいひん）",
        "manufactured goods"
      ],
      [
        "食品（しょくひん）",
        "food product"
      ],
      [
        "商品（しょうひん）",
        "merchandise"
      ],
      [
        "貴重品（きちょうひん）",
        "valuables"
      ],
      [
        "上品な（じょうひんな）",
        "elegant"
      ],
      [
        "返品する（へんぴんする）",
        "return (an item)"
      ],
      [
        "品（しな）",
        "goods"
      ],
      [
        "品物（しなもの）",
        "goods"
      ],
      [
        "品切れ（しなぎれ）",
        "out of stock"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "未",
    "kname": "mi(rai)",
    "kstroke": 5,
    "kmeaning": "not yet",
    "kgrade": 4,
    "kunyomi_ja": "いま、ま、いまだ、まだ",
    "kunyomi": "ima, ma, imada, mada",
    "onyomi_ja": "ミ",
    "onyomi": "mi",
    "examples": [
      [
        "未来（みらい）",
        "future [n.]"
      ],
      [
        "未完成（みかんせい）",
        "unfinished"
      ],
      [
        "未払い（みはらい）",
        "unpaid"
      ],
      [
        "未婚（みこん）",
        "unmarried"
      ],
      [
        "未成年（みせいねん）",
        "minority (as in age) [n.]"
      ],
      [
        "未熟な（みじゅくな）",
        "inexperienced, immature"
      ],
      [
        "前代未聞（ぜんだいみもん）",
        "unheard-of"
      ],
      [
        "未だ（いまだ/まだ）",
        "as yet"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "完",
    "kname": "kan(peki)",
    "kstroke": 7,
    "kmeaning": "complete",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "完成する（かんせいする）",
        "complete, finish"
      ],
      [
        "完了する（かんりょうする）",
        "complete"
      ],
      [
        "完結する（かんけつする）",
        "conclude, finish"
      ],
      [
        "完備する（かんびする）",
        "equip fully"
      ],
      [
        "完全な（かんぜんな）",
        "perfect"
      ],
      [
        "完璧な（かんぺきな）",
        "flawless"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "海",
    "kname": "kai-umi",
    "kstroke": 9,
    "kmeaning": "sea, ocean",
    "kgrade": 2,
    "kunyomi_ja": "うみ",
    "kunyomi": "umi",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "日本海（にほんかい）",
        "Sea of Japan"
      ],
      [
        "航海（こうかい）",
        "sailing"
      ],
      [
        "海岸（かいがん）",
        "coast"
      ],
      [
        "海外（かいがい）",
        "abroad"
      ],
      [
        "海水浴（かいすいよく）",
        "sea bathing"
      ],
      [
        "海（うみ）",
        "sea"
      ],
      [
        "海辺（うみべ）",
        "beach"
      ],
      [
        "*海老（えび）",
        "shrimp"
      ],
      [
        "*海苔（のり）",
        "sea seed sheet"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "島",
    "kname": "tou-shima",
    "kstroke": 10,
    "kmeaning": "island",
    "kgrade": 3,
    "kunyomi_ja": "しま",
    "kunyomi": "shima",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "島民（とうみん）",
        "islander"
      ],
      [
        "日本列島（にほんれっとう）",
        "Japanese archipelago"
      ],
      [
        "半島（はんとう）",
        "peninsula"
      ],
      [
        "無人島（むじんとう）",
        "deserted island"
      ],
      [
        "島（しま）",
        "island"
      ],
      [
        "島国（しまぐに）",
        "island country"
      ],
      [
        "宝島（たからじま）",
        "treasure island"
      ],
      [
        "島々（しまじま）",
        "islands"
      ]
    ],
    "radical": "⼭",
    "rad_order": 54,
    "rad_stroke": 3,
    "rad_name_ja": "やま",
    "rad_name": "yama",
    "rad_meaning": "mountain",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "級",
    "kname": "(ni)kyuu",
    "kstroke": 9,
    "kmeaning": "grade",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "進級する（しんきゅうする）",
        "advance (in school)"
      ],
      [
        "級友（きゅうゆう）",
        "classmate"
      ],
      [
        "同級生（どうきゅうせい）",
        "classmate"
      ],
      [
        "上級（じょうきゅう）",
        "advanced level, senior"
      ],
      [
        "中級（ちゅうきゅう）",
        "intermediate level"
      ],
      [
        "初級（しょきゅう）",
        "elementary level"
      ],
      [
        "高級（こうきゅう）",
        "high class"
      ],
      [
        "低級（ていきゅう）",
        "low grade"
      ],
      [
        "一級（いっきゅう）",
        "first class"
      ],
      [
        "階級（かいきゅう）",
        "class, rank"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "顔",
    "kname": "kao",
    "kstroke": 18,
    "kmeaning": "face",
    "kgrade": 2,
    "kunyomi_ja": "かお",
    "kunyomi": "kao",
    "onyomi_ja": "ガン",
    "onyomi": "gan",
    "examples": [
      [
        "洗顔する（せんがんする）",
        "wash one's face"
      ],
      [
        "童顔（どうがん）",
        "baby-faced"
      ],
      [
        "厚顔無恥（こうがんむち）",
        "brazen and unscrupulous"
      ],
      [
        "顔（かお）",
        "(a person's) face"
      ],
      [
        "顔色（かおいろ）",
        "complexion"
      ],
      [
        "素顔（すがお）",
        "face with no make-up"
      ],
      [
        "笑顔（えがお）",
        "smile, smiling face"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "休",
    "kname": "yasu(mi)",
    "kstroke": 6,
    "kmeaning": "rest",
    "kgrade": 1,
    "kunyomi_ja": "やす、やすむ、やすみ、やすめる",
    "kunyomi": "yasu, yasumu, yasumi, yasumeru",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "休日（きゅうじつ）",
        "holiday"
      ],
      [
        "週休（しゅうきゅう）",
        "weekly holiday"
      ],
      [
        "休講（きゅうこう）",
        "a cancelled lecture"
      ],
      [
        "休暇（きゅうか）",
        "vacation"
      ],
      [
        "休み（やすみ）",
        "rest, absence, break, recess"
      ],
      [
        "休む（やすむ）",
        "rest [v.i.]"
      ],
      [
        "休める（やすめる）",
        "put to rest [v.t.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "面",
    "kname": "men-omote",
    "kstroke": 9,
    "kmeaning": "face, mask, surface",
    "kgrade": 3,
    "kunyomi_ja": "おも、おもて、つら",
    "kunyomi": "omo, omote, tsura",
    "onyomi_ja": "メン",
    "onyomi": "men",
    "examples": [
      [
        "表面（ひょうめん）",
        "surface"
      ],
      [
        "両面（りょうめん）",
        "both sides"
      ],
      [
        "場面（ばめん）",
        "scene"
      ],
      [
        "洗面所（せんめんじょ）",
        "washroom"
      ],
      [
        "直面する（ちょくめんする）",
        "confront"
      ],
      [
        "面接する（めんせつする）",
        "interview [v.t.]"
      ],
      [
        "面倒くさい（めんどうくさい）",
        "troublesome"
      ],
      [
        "面白い（おもしろい）",
        "interesting"
      ],
      [
        "面（おもて）",
        "face"
      ],
      [
        "面（つら）",
        "face [derogatory]"
      ],
      [
        "仏頂面（ぶっちょうづら）",
        "sour look"
      ],
      [
        "字面（じづら）",
        "typeface"
      ]
    ],
    "radical": "⾯",
    "rad_order": 214,
    "rad_stroke": 9,
    "rad_name_ja": "めん",
    "rad_name": "men",
    "rad_meaning": "face, surface",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "企",
    "kname": "kuwada(teru)",
    "kstroke": 6,
    "kmeaning": "project, plan, attempt",
    "kgrade": "n/a",
    "kunyomi_ja": "くわだ、くわだてる",
    "kunyomi": "kuwada, kuwadateru",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "企業（きぎょう）",
        "enterprise"
      ],
      [
        "企画（きかく）",
        "project [n.]"
      ],
      [
        "企て（くわだて）",
        "plot [n.]"
      ],
      [
        "企てる（くわだてる）",
        "plot [v.t.]"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "市",
    "kname": "shi-ichi",
    "kstroke": 5,
    "kmeaning": "city, market",
    "kgrade": 2,
    "kunyomi_ja": "いち",
    "kunyomi": "ichi",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "横浜市（よこはまし）",
        "Yokohama city"
      ],
      [
        "都市（とし）",
        "city, urban area"
      ],
      [
        "市内（しない）",
        "(within a) city"
      ],
      [
        "市外（しがい）",
        "outside the city"
      ],
      [
        "市民（しみん）",
        "citizen"
      ],
      [
        "市長（しちょう）",
        "mayor"
      ],
      [
        "市役所（しやくしょ）",
        "city hall"
      ],
      [
        "市場（しじょう/いちば）",
        "market (business) / market place"
      ],
      [
        "市（いち）",
        "market place"
      ],
      [
        "競り市（せりいち）",
        "auction market"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "頼",
    "kname": "tayo(ru)",
    "kstroke": 16,
    "kmeaning": "rely on, request",
    "kgrade": "n/a",
    "kunyomi_ja": "たの、たのむ、たのもしい、たよ、たよる",
    "kunyomi": "tano, tanomu, tanomoshii, tayo, tayoru",
    "onyomi_ja": "ライ",
    "onyomi": "rai",
    "examples": [
      [
        "信頼する（しんらいする）",
        "trust [v.t.]"
      ],
      [
        "依頼する（いらいする）",
        "request [v.t.]"
      ],
      [
        "頼む（たのむ）",
        "request, ask"
      ],
      [
        "頼もしい（たのもしい）",
        "trustworthy"
      ],
      [
        "頼る（たよる）",
        "depend on"
      ],
      [
        "頼りない（たよりない）",
        "undependable"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "第",
    "kname": "dai(ichi)",
    "kstroke": 11,
    "kmeaning": "ordinal number prefix, degree",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダイ",
    "onyomi": "dai",
    "examples": [
      [
        "第一（だいいち）",
        "first"
      ],
      [
        "第六感（だいろっかん）",
        "sixth sense"
      ],
      [
        "第三者（だいさんしゃ）",
        "third person"
      ],
      [
        "次第に（しだいに）",
        "gradually"
      ],
      [
        "落第する（らくだいする）",
        "fail, flunk"
      ],
      [
        "及第点（きゅうだいてん）",
        "the cutoff point (for exams)"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "表",
    "kname": "hyou-omote",
    "kstroke": 8,
    "kmeaning": "express, surface, table",
    "kgrade": 3,
    "kunyomi_ja": "おもて、あらわ、あらわす、あらわれる",
    "kunyomi": "omote, arawa, arawasu, arawareru",
    "onyomi_ja": "ヒョウ",
    "onyomi": "hyou",
    "examples": [
      [
        "表（ひょう）",
        "table, chart"
      ],
      [
        "表情（ひょうじょう）",
        "facial expression"
      ],
      [
        "表面（ひょうめん）",
        "surface"
      ],
      [
        "予定表（よていひょう）",
        "schedule"
      ],
      [
        "表現する（ひょうげんする）",
        "express [v.t.]"
      ],
      [
        "代表する（だいひょうする）",
        "represent"
      ],
      [
        "発表する（はっぴょうする）",
        "announce, present"
      ],
      [
        "表（おもて）",
        "surface, front"
      ],
      [
        "裏表（うらおもて）",
        "both sides"
      ],
      [
        "表す（あらわす）",
        "show [v.t.]"
      ],
      [
        "表れる（あらわれる）",
        "appear, come out [v.i.]"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "将",
    "kname": "shou(gun)",
    "kstroke": 10,
    "kmeaning": "general, officer",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "将来（しょうらい）",
        "future, prospects"
      ],
      [
        "将軍（しょうぐん）",
        "general, shogun"
      ],
      [
        "大将（たいしょう）",
        "general, admiral"
      ],
      [
        "王将（おうしょう）",
        "king (shogi game)"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "希",
    "kname": "ki(bou)",
    "kstroke": 7,
    "kmeaning": "hope, aspire",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "希望する（きぼうする）",
        "hope [v.t.]"
      ],
      [
        "希求する（ききゅうする）",
        "aspire to, seek"
      ],
      [
        "希望者（きぼうしゃ）",
        "candidate, a hopeful"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "場",
    "kname": "jou-ba",
    "kstroke": 12,
    "kmeaning": "place",
    "kgrade": 2,
    "kunyomi_ja": "ば",
    "kunyomi": "ba",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "入場する（にゅうじょうする）",
        "enter"
      ],
      [
        "出場する（しゅつじょうする）",
        "participate (game)"
      ],
      [
        "会場（かいじょう）",
        "assembly hall, meeting place"
      ],
      [
        "式場（しきじょう）",
        "ceremonial hall"
      ],
      [
        "工場（こうじょう）",
        "factory"
      ],
      [
        "市場（しじょう）",
        "market (business)"
      ],
      [
        "試験場（しけんじょう）",
        "examination room, laboratory"
      ],
      [
        "野球場（やきゅうじょう）",
        "baseball field"
      ],
      [
        "場所（ばしょ）",
        "location"
      ],
      [
        "場面（ばめん）",
        "scene"
      ],
      [
        "場合（ばあい）",
        "case"
      ],
      [
        "立場（たちば）",
        "standpoint"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "査",
    "kname": "(shin)sa",
    "kstroke": 9,
    "kmeaning": "look into, investigate",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サ",
    "onyomi": "sa",
    "examples": [
      [
        "検査する（けんさする）",
        "inspect"
      ],
      [
        "調査する（ちょうさする）",
        "research, investigate"
      ],
      [
        "捜査する（そうさする）",
        "investigate (criminal case)"
      ],
      [
        "審査する（しんさする）",
        "examine"
      ],
      [
        "巡査（じゅんさ）",
        "policeman"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "学",
    "kname": "mana(bu)",
    "kstroke": 8,
    "kmeaning": "study, educational, institution",
    "kgrade": 1,
    "kunyomi_ja": "まな、まなぶ",
    "kunyomi": "mana, manabu",
    "onyomi_ja": "ガク",
    "onyomi": "gaku",
    "examples": [
      [
        "学生（がくせい）",
        "student"
      ],
      [
        "学者（がくしゃ）",
        "scholar"
      ],
      [
        "大学（だいがく）",
        "university"
      ],
      [
        "大学院（だいがくいん）",
        "graduate school"
      ],
      [
        "奨学金（しょうがくきん）",
        "scholarship"
      ],
      [
        "人類学（じんるいがく）",
        "anthropology"
      ],
      [
        "言語学（げんごがく）",
        "linguistics"
      ],
      [
        "学校（がっこう）",
        "school"
      ],
      [
        "学期（がっき）",
        "term, semester"
      ],
      [
        "学ぶ（まなぶ）",
        "study"
      ]
    ],
    "radical": "⼦",
    "rad_order": 46,
    "rad_stroke": 3,
    "rad_name_ja": "こ",
    "rad_name": "ko",
    "rad_meaning": "child, son",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "行",
    "kname": "i(ku)-gyou",
    "kstroke": 6,
    "kmeaning": "go, act, line",
    "kgrade": 2,
    "kunyomi_ja": "い、いく、ゆ、ゆく、おこな、おこなう",
    "kunyomi": "i, iku, yu, yuku, okona, okonau",
    "onyomi_ja": "コウ、ギョウ、アン",
    "onyomi": "kou, gyou, an",
    "examples": [
      [
        "旅行する（りょこうする）",
        "travel"
      ],
      [
        "歩行する（ほこうする）",
        "walk"
      ],
      [
        "実行する（じっこうする）",
        "act, carry out, practice"
      ],
      [
        "銀行（ぎんこう）",
        "bank"
      ],
      [
        "行政（ぎょうせい）",
        "administration"
      ],
      [
        "一行目（いちぎょうめ）",
        "first line"
      ],
      [
        "行事（ぎょうじ）",
        "event"
      ],
      [
        "行脚する（あんぎゃする）",
        "go on pilgrimage"
      ],
      [
        "行く（いく/ゆく）",
        "go"
      ],
      [
        "行き先（いきさき/ゆきさき）",
        "destination"
      ],
      [
        "行う（おこなう）",
        "do"
      ]
    ],
    "radical": "⾏",
    "rad_order": 176,
    "rad_stroke": 6,
    "rad_name_ja": "ぎょうがまえ",
    "rad_name": "gyougamae",
    "rad_meaning": "to go",
    "rad_position_ja": "かまえ, ぎょうがまえ",
    "rad_position": "kamae, gyougamae"
  },
  {
    "kanji": "係",
    "kname": "kei-kaka(ri)",
    "kstroke": 9,
    "kmeaning": "connect, person in charge",
    "kgrade": 3,
    "kunyomi_ja": "かか、かかる、かかり、かかわる、かかわり",
    "kunyomi": "kaka, kakaru, kakari, kakawaru, kakawari",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "関係する（かんけいする）",
        "be related to"
      ],
      [
        "連係する（れんけいする）",
        "work in a team"
      ],
      [
        "係る（かかる）",
        "affect, concern, depend on"
      ],
      [
        "係わる（かかわる）",
        "be involved"
      ],
      [
        "係（かかり）",
        "person in charge"
      ],
      [
        "案内係（あんないがかり）",
        "clerk at the information desk"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "訳",
    "kname": "wake",
    "kstroke": 11,
    "kmeaning": "translate, sense, reason",
    "kgrade": 6,
    "kunyomi_ja": "わけ",
    "kunyomi": "wake",
    "onyomi_ja": "ヤク",
    "onyomi": "yaku",
    "examples": [
      [
        "訳（やく）",
        "translation"
      ],
      [
        "訳者（やくしゃ）",
        "translator"
      ],
      [
        "訳す（やくす）",
        "translate"
      ],
      [
        "通訳する（つうやくする）",
        "translate (speech)"
      ],
      [
        "翻訳する（ほんやくする）",
        "translate (text)"
      ],
      [
        "訳（わけ）",
        "reason"
      ],
      [
        "言い訳（いいわけ）",
        "excuse [n.]"
      ],
      [
        "申し訳ない（もうしわけない）",
        "inexcusable"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "課",
    "kname": "(hou)ka(go)",
    "kstroke": 15,
    "kmeaning": "section, lesson",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "一課（いっか）",
        "lesson one"
      ],
      [
        "日課（にっか）",
        "daily routine"
      ],
      [
        "放課後（ほうかご）",
        "after school"
      ],
      [
        "人事課（じんじか）",
        "personnel department"
      ],
      [
        "課長（かちょう）",
        "section manager"
      ],
      [
        "課題（かだい）",
        "task"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "続",
    "kname": "tsuzu(ku)",
    "kstroke": 13,
    "kmeaning": "continue",
    "kgrade": 4,
    "kunyomi_ja": "つづ、つづく、つづける、つづき",
    "kunyomi": "tsuzu, tsuzuku, tsuzukeru, tsuzuki",
    "onyomi_ja": "ゾク",
    "onyomi": "zoku",
    "examples": [
      [
        "継続する（けいぞくする）",
        "continue"
      ],
      [
        "連続する（れんぞくする）",
        "occur in succession"
      ],
      [
        "接続する（せつぞくする）",
        "connect"
      ],
      [
        "続出する（ぞくしゅつする）",
        "appear one after another"
      ],
      [
        "続く（つづく）",
        "continue [v.i.]"
      ],
      [
        "続ける（つづける）",
        "continue [v.t.]"
      ],
      [
        "手続き（てつづき）",
        "formalities, procedure"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "際",
    "kname": "sai-kiwa",
    "kstroke": 14,
    "kmeaning": "verge, occasion, edge",
    "kgrade": 5,
    "kunyomi_ja": "きわ",
    "kunyomi": "kiwa",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "実際に（じっさいに）",
        "in fact"
      ],
      [
        "国際的な（こくさいてきな）",
        "international"
      ],
      [
        "交際する（こうさいする）",
        "go out with, date"
      ],
      [
        "際（きわ）",
        "edge"
      ],
      [
        "間際（まぎわ）",
        "on the point of"
      ],
      [
        "死に際（しにぎわ）",
        "verge of death"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "望",
    "kname": "bou-nozo(mi)",
    "kstroke": 11,
    "kmeaning": "hope, desire, look after",
    "kgrade": 4,
    "kunyomi_ja": "のぞ、のぞむ、のぞみ",
    "kunyomi": "nozo, nozomu, nozomi",
    "onyomi_ja": "ボウ、モウ",
    "onyomi": "bou, mou",
    "examples": [
      [
        "希望する（きぼうする）",
        "hope [v.t.]"
      ],
      [
        "要望する（ようぼうする）",
        "request [v.t.]"
      ],
      [
        "絶望する（ぜつぼうする）",
        "despair [v.t.]"
      ],
      [
        "失望する（しつぼうする）",
        "be disappointed"
      ],
      [
        "望遠鏡（ぼうえんきょう）",
        "telescope"
      ],
      [
        "欲望（よくぼう）",
        "desire [n.]"
      ],
      [
        "本望（ほんもう）",
        "long cherished ambition"
      ],
      [
        "望む（のぞむ）",
        "wish for"
      ],
      [
        "望ましい（のぞましい）",
        "desirable"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "成",
    "kname": "sei-na(ru)",
    "kstroke": 6,
    "kmeaning": "form, achieve",
    "kgrade": 4,
    "kunyomi_ja": "な、なる、なす",
    "kunyomi": "na, naru, nasu",
    "onyomi_ja": "セイ、ジョウ",
    "onyomi": "sei, jou",
    "examples": [
      [
        "成功する（せいこうする）",
        "succeed [v.i.]"
      ],
      [
        "成長する（せいちょうする）",
        "grow"
      ],
      [
        "成立する（せいりつする）",
        "form, be born, be completed"
      ],
      [
        "賛成する（さんせいする）",
        "agree"
      ],
      [
        "完成する（かんせいする）",
        "complete, achieve"
      ],
      [
        "成績（せいせき）",
        "grades (school)"
      ],
      [
        "成人式（せいじんしき）",
        "coming-of-age celebration"
      ],
      [
        "成就する（じょうじゅする）",
        "accomplish, fulfill"
      ],
      [
        "成仏する（じょうぶつする）",
        "die (peacefully)"
      ],
      [
        "成る（なる）",
        "become [v.i.]"
      ],
      [
        "成す（なす）",
        "accomplish [v.t.]"
      ]
    ],
    "radical": "⼽",
    "rad_order": 81,
    "rad_stroke": 4,
    "rad_name_ja": "ほこ",
    "rad_name": "hoko",
    "rad_meaning": "spear, weapon",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "功",
    "kname": "(sei)kou",
    "kstroke": 5,
    "kmeaning": "merit, success",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ、ク",
    "onyomi": "kou, ku",
    "examples": [
      [
        "成功する（せいこうする）",
        "succeed"
      ],
      [
        "年功序列（ねんこうじょれつ）",
        "achievement"
      ],
      [
        "功績（こうせき）",
        "seniority system"
      ],
      [
        "功労者（こうろうしゃ）",
        "meritorious person"
      ],
      [
        "功徳（くどく）",
        "piousness, charity"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "約",
    "kname": "yaku(soku)",
    "kstroke": 9,
    "kmeaning": "promise, contract, approximately",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヤク",
    "onyomi": "yaku",
    "examples": [
      [
        "約一年（やくいちねん）",
        "about one year"
      ],
      [
        "約束する（やくそくする）",
        "promise [v.t.]"
      ],
      [
        "予約する（よやくする）",
        "reserve"
      ],
      [
        "契約する（けいやくする）",
        "make a contract"
      ],
      [
        "解約する（かいやくする）",
        "cancel a contract"
      ],
      [
        "婚約する（こんやくする）",
        "get engaged (marriage)"
      ],
      [
        "要約する（ようやくする）",
        "summarize"
      ],
      [
        "節約する（せつやくする）",
        "save, conserve"
      ],
      [
        "先約（せんやく）",
        "previous engagement"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "束",
    "kname": "taba(neru)",
    "kstroke": 7,
    "kmeaning": "tie up, bundle",
    "kgrade": 4,
    "kunyomi_ja": "たば、たばねる",
    "kunyomi": "taba, tabaneru",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "約束する（やくそくする）",
        "promise [v.t.]"
      ],
      [
        "結束する（けっそくする）",
        "band together, unite"
      ],
      [
        "束縛する（そくばくする）",
        "restrain, bind, shackle"
      ],
      [
        "束ねる（たばねる）",
        "bundle [v.t.]"
      ],
      [
        "花束（はなたば）",
        "bouquet"
      ],
      [
        "札束（さつたば）",
        "roll of banknotes"
      ],
      [
        "*束の間（つかのま）",
        "brief moment"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "家",
    "kname": "ie",
    "kstroke": 10,
    "kmeaning": "house, family",
    "kgrade": 2,
    "kunyomi_ja": "いえ、や",
    "kunyomi": "ie, ya",
    "onyomi_ja": "カ、ケ",
    "onyomi": "ka, ke",
    "examples": [
      [
        "家族（かぞく）",
        "family"
      ],
      [
        "家内（かない）",
        "wife"
      ],
      [
        "家具（かぐ）",
        "furniture"
      ],
      [
        "作曲家（さっきょくか）",
        "composer"
      ],
      [
        "作家（さっか）",
        "writer, artist"
      ],
      [
        "徳川家（とくがわけ）",
        "the House of Tokugawa"
      ],
      [
        "家（いえ）",
        "house"
      ],
      [
        "家出する（いえでする）",
        "run away from home"
      ],
      [
        "家賃（やちん）",
        "rent"
      ],
      [
        "一軒家（いっけんや）",
        "free standing home"
      ],
      [
        "大家（おおや）",
        "landlord"
      ],
      [
        "*家（うち）",
        "house, family"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "受",
    "kname": "ju-u(keru)",
    "kstroke": 8,
    "kmeaning": "receive",
    "kgrade": 3,
    "kunyomi_ja": "う、うける、うかる",
    "kunyomi": "u, ukeru, ukaru",
    "onyomi_ja": "ジュ",
    "onyomi": "ju",
    "examples": [
      [
        "受講する（じゅこうする）",
        "attend class"
      ],
      [
        "受賞する（じゅしょうする）",
        "win (a prize)"
      ],
      [
        "受験する（じゅけんする）",
        "take an exam"
      ],
      [
        "受信する（じゅしんする）",
        "receive (transmission)"
      ],
      [
        "受動的な（じゅどうてきな）",
        "passive"
      ],
      [
        "感受性（かんじゅせい）",
        "sensitivity"
      ],
      [
        "受ける（うける）",
        "receive, accept, take [v.t.]"
      ],
      [
        "受かる（うかる）",
        "pass (exam, interview) [v.i.]"
      ],
      [
        "*受付（うけつけ）",
        "reception desk"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "有",
    "kname": "yuu-a(ru)",
    "kstroke": 6,
    "kmeaning": "have",
    "kgrade": 3,
    "kunyomi_ja": "あ、ある",
    "kunyomi": "a, aru",
    "onyomi_ja": "ユウ、ウ",
    "onyomi": "yuu, u",
    "examples": [
      [
        "有料（ゆうりょう）",
        "toll"
      ],
      [
        "有名な（ゆうめいな）",
        "famous"
      ],
      [
        "有力な（ゆうりょくな）",
        "influential, powerful"
      ],
      [
        "有利な（ゆうりな）",
        "advantageous"
      ],
      [
        "有望な（ゆうぼうな）",
        "promising"
      ],
      [
        "有害な（ゆうがいな）",
        "harmful"
      ],
      [
        "有意義な（ゆういぎな）",
        "worthwhile"
      ],
      [
        "所有する（しょゆうする）",
        "possess"
      ],
      [
        "有無（うむ）",
        "presence or absence"
      ],
      [
        "有る（ある）",
        "be, have"
      ],
      [
        "有り難う（ありがとう）",
        "Thank you"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "点",
    "kname": "ten(suu)",
    "kstroke": 9,
    "kmeaning": "point",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テン",
    "onyomi": "ten",
    "examples": [
      [
        "点（てん）",
        "point, dot"
      ],
      [
        "点線（てんせん）",
        "dotted line"
      ],
      [
        "点字（てんじ）",
        "Braille"
      ],
      [
        "点数（てんすう）",
        "points, grade, score"
      ],
      [
        "得点（とくてん）",
        "points, score"
      ],
      [
        "同点（どうてん）",
        "tie, draw (sports)"
      ],
      [
        "欠点（けってん）",
        "defect [n.]"
      ],
      [
        "焦点（しょうてん）",
        "focus [n.]"
      ],
      [
        "終点（しゅうてん）",
        "last stop (e.g train)"
      ],
      [
        "交差点（こうさてん）",
        "intersection"
      ],
      [
        "点在する（てんざいする）",
        "be dotted with"
      ],
      [
        "点滅する（てんめつする）",
        "blink, turn on and off"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "識",
    "kname": "(nin)shiki",
    "kstroke": 19,
    "kmeaning": "discriminate, knowledge, know",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シキ",
    "onyomi": "shiki",
    "examples": [
      [
        "知識（ちしき）",
        "knowledge"
      ],
      [
        "常識（じょうしき）",
        "common sense"
      ],
      [
        "良識（りょうしき）",
        "good sense"
      ],
      [
        "認識する（にんしきする）",
        "recognize"
      ],
      [
        "意識する（いしきする）",
        "be aware of"
      ],
      [
        "識別する（しきべつする）",
        "discriminate"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "感",
    "kname": "(sekinin)kan",
    "kstroke": 13,
    "kmeaning": "sense, feel",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "感じる（かんじる）",
        "feel, sense"
      ],
      [
        "感動する（かんどうする）",
        "be deeply moved"
      ],
      [
        "感謝する（かんしゃする）",
        "thank"
      ],
      [
        "感心する（かんしんする）",
        "be impressed"
      ],
      [
        "共感する（きょうかんする）",
        "sympathize"
      ],
      [
        "感覚（かんかく）",
        "sense, sensation"
      ],
      [
        "感情（かんじょう）",
        "feeling, emotion"
      ],
      [
        "感想（かんそう）",
        "impression, thought, sentiments"
      ],
      [
        "責任感（せきにんかん）",
        "sense of responsibility"
      ],
      [
        "第六感（だいろっかん）",
        "sixth sense"
      ],
      [
        "敏感な（びんかんな）",
        "sensitive"
      ],
      [
        "鈍感な（どんかんな）",
        "thick skinned, insensitive"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "送",
    "kname": "sou-oku(ru)",
    "kstroke": 9,
    "kmeaning": "send",
    "kgrade": 3,
    "kunyomi_ja": "おく、おくる",
    "kunyomi": "oku, okuru",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "発送する（はっそうする）",
        "ship [v.t.]"
      ],
      [
        "返送する（へんそうする）",
        "send back"
      ],
      [
        "郵送する（ゆうそうする）",
        "mail [v.t.]"
      ],
      [
        "放送する（ほうそうする）",
        "broadcast [v.t.]"
      ],
      [
        "送金する（そうきんする）",
        "send money"
      ],
      [
        "送料（そうりょう）",
        "shipping fee"
      ],
      [
        "送別会（そうべつかい）",
        "farewell party"
      ],
      [
        "送る（おくる）",
        "send, spend time"
      ],
      [
        "送り仮名（おくりがな）",
        "conjugational ending in kana"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "数",
    "kname": "kazo(eru)",
    "kstroke": 13,
    "kmeaning": "number, count",
    "kgrade": 2,
    "kunyomi_ja": "かず、かぞ、かぞえる",
    "kunyomi": "kazu, kazo, kazoeru",
    "onyomi_ja": "スウ、ス",
    "onyomi": "suu, su",
    "examples": [
      [
        "数学（すうがく）",
        "mathematics"
      ],
      [
        "数字（すうじ）",
        "numeral, number, figures"
      ],
      [
        "算数（さんすう）",
        "arithmetic"
      ],
      [
        "多数（たすう）",
        "great number, majority"
      ],
      [
        "少数（しょうすう）",
        "few, minority"
      ],
      [
        "総数（そうすう）",
        "total (number)"
      ],
      [
        "奇数（きすう）",
        "odd number"
      ],
      [
        "偶数（ぐうすう）",
        "even number"
      ],
      [
        "人数（にんずう）",
        "head count"
      ],
      [
        "数寄屋（すきや）",
        "tea-ceremony arbor"
      ],
      [
        "数（かず）",
        "number"
      ],
      [
        "数える（かぞえる）",
        "count [v.t.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "球",
    "kname": "kyuu-tama",
    "kstroke": 11,
    "kmeaning": "ball",
    "kgrade": 3,
    "kunyomi_ja": "たま",
    "kunyomi": "tama",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "地球（ちきゅう）",
        "the earth"
      ],
      [
        "電球（でんきゅう）",
        "light bulb"
      ],
      [
        "野球（やきゅう）",
        "baseball"
      ],
      [
        "卓球（たっきゅう）",
        "ping-pong"
      ],
      [
        "球場（きゅうじょう）",
        "baseball stadium"
      ],
      [
        "球根（きゅうこん）",
        "(plant) bulb"
      ],
      [
        "球（たま）",
        "ball"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "遊",
    "kname": "aso(bu)",
    "kstroke": 12,
    "kmeaning": "play",
    "kgrade": 3,
    "kunyomi_ja": "あそ、あそび、あそぶ",
    "kunyomi": "aso, asobi, asobu",
    "onyomi_ja": "ユウ、ユ",
    "onyomi": "yuu, yu",
    "examples": [
      [
        "遊園地（ゆうえんち）",
        "amusement park"
      ],
      [
        "遊説（ゆうぜい）",
        "election campaign"
      ],
      [
        "物見遊山（ものみゆさん）",
        "a pleasure trip"
      ],
      [
        "遊ぶ（あそぶ）",
        "play [v.i.]"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "招",
    "kname": "mane(ku)",
    "kstroke": 8,
    "kmeaning": "invite",
    "kgrade": 5,
    "kunyomi_ja": "まね、まねく、まねき",
    "kunyomi": "mane, maneku, maneki",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "招待する（しょうたいする）",
        "invite"
      ],
      [
        "招待状（しょうたいじょう）",
        "invitation letter"
      ],
      [
        "招く（まねく）",
        "invite"
      ],
      [
        "招き猫（まねきねこ）",
        "beckoning cat"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "帰",
    "kname": "ki-kae(ru)",
    "kstroke": 10,
    "kmeaning": "return",
    "kgrade": 2,
    "kunyomi_ja": "かえ、かえる",
    "kunyomi": "kae, kaeru",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "帰国する（きこくする）",
        "return to one's own country"
      ],
      [
        "帰宅する（きたくする）",
        "return home"
      ],
      [
        "復帰する（ふっきする）",
        "come back"
      ],
      [
        "帰る（かえる）",
        "go home, go back"
      ],
      [
        "日帰り（ひがえり）",
        "day trip"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "選",
    "kname": "sen-era(bu)",
    "kstroke": 15,
    "kmeaning": "choose, elect",
    "kgrade": 4,
    "kunyomi_ja": "えら、えらぶ",
    "kunyomi": "era, erabu",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "選択する（せんたくする）",
        "choose"
      ],
      [
        "選考する（せんこうする）",
        "screen, select [v.t.]"
      ],
      [
        "当選する（とうせんする）",
        "be elected"
      ],
      [
        "抽選する（ちゅうせんする）",
        "draw (of lots)"
      ],
      [
        "選挙（せんきょ）",
        "election"
      ],
      [
        "選手（せんしゅ）",
        "player"
      ],
      [
        "予選（よせん）",
        "preliminaries, try-outs"
      ],
      [
        "選ぶ（えらぶ）",
        "choose"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "講",
    "kname": "(ju)kou(suru)",
    "kstroke": 17,
    "kmeaning": "lecture",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "講演（こうえん）",
        "lecture [n.]"
      ],
      [
        "講義（こうぎ）",
        "lecture [n.]"
      ],
      [
        "講座（こうざ）",
        "course"
      ],
      [
        "講師（こうし）",
        "lecturer"
      ],
      [
        "講堂（こうどう）",
        "auditorium"
      ],
      [
        "休講（きゅうこう）",
        "lecture cancelled"
      ],
      [
        "聴講する（ちょうこうする）",
        "audit (lecture)"
      ],
      [
        "受講する（じゅこうする）",
        "take (class)"
      ],
      [
        "開講する（かいこうする）",
        "start a new course"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "義",
    "kname": "(sei)gi",
    "kstroke": 13,
    "kmeaning": "righteousness, meaning, justice",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ギ",
    "onyomi": "gi",
    "examples": [
      [
        "義務（ぎむ）",
        "obligation, responsibility"
      ],
      [
        "義理（ぎり）",
        "duty, debt, obligation"
      ],
      [
        "義父（ぎふ）",
        "father-in-law"
      ],
      [
        "義母（ぎぼ）",
        "mother-in-law"
      ],
      [
        "正義（せいぎ）",
        "justice"
      ],
      [
        "主義（しゅぎ）",
        "doctrine"
      ],
      [
        "民主主義（みんしゅしゅぎ）",
        "democracy"
      ],
      [
        "意義（いぎ）",
        "meaning"
      ],
      [
        "定義（ていぎ）",
        "definition"
      ],
      [
        "同義語（どうぎご）",
        "synonym"
      ]
    ],
    "radical": "⺷",
    "rad_order": 160,
    "rad_stroke": 6,
    "rad_name_ja": "ひつじ",
    "rad_name": "hitsuji",
    "rad_meaning": "sheep",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "役",
    "kname": "yaku(me)",
    "kstroke": 7,
    "kmeaning": "service, role",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヤク、エキ",
    "onyomi": "yaku, eki",
    "examples": [
      [
        "役（やく）",
        "role"
      ],
      [
        "役者（やくしゃ）",
        "actor, actress"
      ],
      [
        "役割（やくわり）",
        "role, duties"
      ],
      [
        "役所（やくしょ）",
        "public office"
      ],
      [
        "役人（やくにん）",
        "government official"
      ],
      [
        "役に立つ（やくにたつ）",
        "useful"
      ],
      [
        "役立つ（やくだつ）",
        "useful"
      ],
      [
        "使役（しえき）",
        "enslavement"
      ],
      [
        "懲役（ちょうえき）",
        "imprisonment with hard labor"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "立",
    "kname": "ritsu-ta(tsu)",
    "kstroke": 5,
    "kmeaning": "stand, establish",
    "kgrade": 1,
    "kunyomi_ja": "た、たて、たつ、たち、たてる",
    "kunyomi": "ta, tate, tatsu, tachi, tateru",
    "onyomi_ja": "リツ、リュウ",
    "onyomi": "ritsu, ryuu",
    "examples": [
      [
        "独立する（どくりつする）",
        "become independent"
      ],
      [
        "自立する（じりつする）",
        "become independent"
      ],
      [
        "確立する（かくりつする）",
        "establish [v.t.], be established"
      ],
      [
        "成立する（せいりつする）",
        "form, be born, be completed"
      ],
      [
        "対立する（たいりつする）",
        "confront"
      ],
      [
        "国立（こくりつ）",
        "national"
      ],
      [
        "私立（しりつ/わたくしりつ）",
        "private (establishment)"
      ],
      [
        "立派な（りっぱな）",
        "splendid"
      ],
      [
        "建立する（こんりゅうする）",
        "build (temple, monument, etc.)"
      ],
      [
        "立つ（たつ）",
        "stand up [v.i.]"
      ],
      [
        "立場（たちば）",
        "standpoint"
      ],
      [
        "立てる（たてる）",
        "stand (something) up [v.t.]"
      ]
    ],
    "radical": "⽴",
    "rad_order": 148,
    "rad_stroke": 5,
    "rad_name_ja": "たつ",
    "rad_name": "tatsu",
    "rad_meaning": "to stand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "論",
    "kname": "ron(jiru)",
    "kstroke": 15,
    "kmeaning": "argue, theory, thesis",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ロン",
    "onyomi": "ron",
    "examples": [
      [
        "論じる（ろんじる）",
        "argue, discuss"
      ],
      [
        "論文（ろんぶん）",
        "thesis"
      ],
      [
        "論拠（ろんきょ）",
        "grounds of an argument"
      ],
      [
        "論理的な（ろんりてきな）",
        "logical"
      ],
      [
        "論外な（ろんがいな）",
        "out of the question"
      ],
      [
        "議論する（ぎろんする）",
        "argue, discuss"
      ],
      [
        "理論（りろん）",
        "theory"
      ],
      [
        "結論（けつろん）",
        "conclusion"
      ],
      [
        "世論（よろん/せろん）",
        "public opinion"
      ],
      [
        "評論（ひょうろん）",
        "critique"
      ],
      [
        "卒論（そつろん）",
        "B.A. thesis"
      ],
      [
        "勿論（もちろん）",
        "of course, needless to say"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "基",
    "kname": "motoi",
    "kstroke": 11,
    "kmeaning": "base, foundation",
    "kgrade": 5,
    "kunyomi_ja": "もと、もとい",
    "kunyomi": "moto, motoi",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "基礎（きそ）",
        "foundation"
      ],
      [
        "基本（きほん）",
        "basis"
      ],
      [
        "基準（きじゅん）",
        "norm, standard"
      ],
      [
        "基地（きち）",
        "base [n.]"
      ],
      [
        "基金（ききん）",
        "funds"
      ],
      [
        "基（もと）",
        "basis"
      ],
      [
        "基づく（もとづく）",
        "be based on"
      ],
      [
        "基（もとい）",
        "basis"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "厚",
    "kname": "kou-atsu(i)",
    "kstroke": 9,
    "kmeaning": "thick, kind",
    "kgrade": 5,
    "kunyomi_ja": "あつ、あつい",
    "kunyomi": "atsu, atsui",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "厚意（こうい）",
        "kindness, favor"
      ],
      [
        "厚顔無恥（こうがんむち）",
        "brazen and unscrupulous"
      ],
      [
        "濃厚な（のうこうな）",
        "dense"
      ],
      [
        "温厚な（おんこうな）",
        "gentle"
      ],
      [
        "厚い（あつい）",
        "thick"
      ],
      [
        "厚かましい（あつかましい）",
        "impudent"
      ]
    ],
    "radical": "⼚",
    "rad_order": 31,
    "rad_stroke": 2,
    "rad_name_ja": "がんだれ",
    "rad_name": "gandare",
    "rad_meaning": "cliff",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "勧",
    "kname": "kan-susu(meru)",
    "kstroke": 13,
    "kmeaning": "urge, recommend, offer",
    "kgrade": "n/a",
    "kunyomi_ja": "すす、すすめる",
    "kunyomi": "susu, susumeru",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "勧告する（かんこくする）",
        "advise"
      ],
      [
        "勧誘する（かんゆうする）",
        "solicit, recruit"
      ],
      [
        "勧める（すすめる）",
        "recommend"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "般",
    "kname": "(zen)pan",
    "kstroke": 10,
    "kmeaning": "sort, carry, all, general",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "諸般（しょはん）",
        "circumstances"
      ],
      [
        "一般的な（いっぱんてきな）",
        "common, usual, average"
      ],
      [
        "全般的な（ぜんぱんてきな）",
        "general [adj.]"
      ]
    ],
    "radical": "",
    "rad_order": 171,
    "rad_stroke": 6,
    "rad_name_ja": "ふねへん",
    "rad_name": "funehen",
    "rad_meaning": "ship, boat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "近",
    "kname": "chika(ku)",
    "kstroke": 7,
    "kmeaning": "near, recent",
    "kgrade": 2,
    "kunyomi_ja": "ちか、ちかい、ちかく",
    "kunyomi": "chika, chikai, chikaku",
    "onyomi_ja": "キン",
    "onyomi": "kin",
    "examples": [
      [
        "近視（きんし）",
        "shortsightedness"
      ],
      [
        "近所（きんじょ）",
        "neighborhood"
      ],
      [
        "最近（さいきん）",
        "recently"
      ],
      [
        "近代（きんだい）",
        "modern"
      ],
      [
        "接近する（せっきんする）",
        "approach"
      ],
      [
        "近く（ちかく）",
        "nearby [n.]"
      ],
      [
        "近い（ちかい）",
        "nearby [adj.]"
      ],
      [
        "近付く（ちかづく）",
        "come near, approach"
      ],
      [
        "近道（ちかみち）",
        "shortcut"
      ],
      [
        "身近な（みぢかな）",
        "close, familiar"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "養",
    "kname": "yashina(u)",
    "kstroke": 15,
    "kmeaning": "foster, rear",
    "kgrade": 4,
    "kunyomi_ja": "やしな、やしなう",
    "kunyomi": "yashina, yashinau",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "栄養（えいよう）",
        "nutrition, nourishment"
      ],
      [
        "教養（きょうよう）",
        "sophistication, education"
      ],
      [
        "養子（ようし）",
        "adopted child"
      ],
      [
        "養育する（よういくする）",
        "bring up, raise"
      ],
      [
        "休養する（きゅうようする）",
        "rest [v.i.]"
      ],
      [
        "培養する（ばいようする）",
        "cultivate"
      ],
      [
        "養う（やしなう）",
        "rear, cultivate"
      ]
    ],
    "radical": "⾷",
    "rad_order": 220,
    "rad_stroke": 9,
    "rad_name_ja": "しょく",
    "rad_name": "shoku",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "化",
    "kname": "ba(keru)",
    "kstroke": 4,
    "kmeaning": "change into",
    "kgrade": 3,
    "kunyomi_ja": "ば、ばける、ばかす",
    "kunyomi": "ba, bakeru, bakasu",
    "onyomi_ja": "カ、ケ",
    "onyomi": "ka, ke",
    "examples": [
      [
        "変化する（へんかする）",
        "change [v.i.]"
      ],
      [
        "強化する（きょうかする）",
        "strengthen"
      ],
      [
        "悪化する（あっかする）",
        "grow worse"
      ],
      [
        "消化する（しょうかする）",
        "digest"
      ],
      [
        "近代化する（きんだいかする）",
        "modernize"
      ],
      [
        "映画化する（えいがかする）",
        "adapt (a book) to film"
      ],
      [
        "化学（かがく）",
        "chemistry"
      ],
      [
        "化粧品（けしょうひん）",
        "cosmetics"
      ],
      [
        "化ける（ばける）",
        "appear in disguise [v.i.]"
      ],
      [
        "お化け（おばけ）",
        "ghost"
      ],
      [
        "化かす（ばかす）",
        "bewitch [v.t.]"
      ]
    ],
    "radical": "⼔",
    "rad_order": 26,
    "rad_stroke": 2,
    "rad_name_ja": "さじ",
    "rad_name": "saji",
    "rad_meaning": "spoon",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "科",
    "kname": "(nai)ka",
    "kstroke": 9,
    "kmeaning": "subject of study",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "科学（かがく）",
        "science"
      ],
      [
        "科目（かもく）",
        "(school) subject"
      ],
      [
        "学科（がっか）",
        "course of study"
      ],
      [
        "理科（りか）",
        "science"
      ],
      [
        "百科事典（ひゃっかじてん）",
        "encyclopedia"
      ],
      [
        "内科（ないか）",
        "internal medicine"
      ],
      [
        "外科（げか）",
        "surgical department"
      ],
      [
        "歯科（しか）",
        "dentistry"
      ],
      [
        "小児科（しょうにか）",
        "pediatrics"
      ],
      [
        "前科（ぜんか）",
        "criminal record"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "績",
    "kname": "bou(seki)",
    "kstroke": 17,
    "kmeaning": "achievements",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "成績（せいせき）",
        "grades (school)"
      ],
      [
        "実績（じっせき）",
        "achievements"
      ],
      [
        "功績（こうせき）",
        "meritorious deed"
      ],
      [
        "業績（ぎょうせき）",
        "performance (work)"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "型",
    "kname": "(mo)kei",
    "kstroke": 9,
    "kmeaning": "type",
    "kgrade": 4,
    "kunyomi_ja": "かた",
    "kunyomi": "kata",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "原型（げんけい）",
        "prototype"
      ],
      [
        "模型（もけい）",
        "model"
      ],
      [
        "典型（てんけい）",
        "archetype"
      ],
      [
        "定型（ていけい）",
        "fixed form"
      ],
      [
        "体型（たいけい）",
        "figure (body)"
      ],
      [
        "型（かた）",
        "shape [n.]"
      ],
      [
        "朝型（あさがた）",
        "morning person"
      ],
      [
        "夜型（よるがた）",
        "night person"
      ],
      [
        "大型（おおがた）",
        "large scale"
      ],
      [
        "小型（こがた）",
        "small size"
      ],
      [
        "歯型（はがた）",
        "tooth-mark"
      ],
      [
        "血液型（けつえきがた）",
        "blood type"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "苦",
    "kname": "niga(i)",
    "kstroke": 8,
    "kmeaning": "suffering, bitter, painful",
    "kgrade": 3,
    "kunyomi_ja": "くる、にが、くるしい、くるしむ、くるしめる、にがい、にがる",
    "kunyomi": "kuru, niga, kurushii, kurushimu, kurushimeru, nigai, nigaru",
    "onyomi_ja": "ク",
    "onyomi": "ku",
    "examples": [
      [
        "苦労する（くろうする）",
        "suffer, toil"
      ],
      [
        "苦悩する（くのうする）",
        "agonize, be in anguish"
      ],
      [
        "苦心する（くしんする）",
        "make an effort, take pains"
      ],
      [
        "苦笑する（くしょうする）",
        "smile bitterly"
      ],
      [
        "苦痛（くつう）",
        "pain"
      ],
      [
        "苦情（くじょう）",
        "complaint"
      ],
      [
        "苦しい（くるしい）",
        "painful"
      ],
      [
        "苦い（にがい）",
        "bitter"
      ],
      [
        "苦手な（にがてな）",
        "poor (at)"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "満",
    "kname": "man-mi(tasu)",
    "kstroke": 12,
    "kmeaning": "full",
    "kgrade": 4,
    "kunyomi_ja": "み、みちる、みつ、みたす",
    "kunyomi": "mi, michiru, mitsu, mitasu",
    "onyomi_ja": "マン",
    "onyomi": "man",
    "examples": [
      [
        "満足する（まんぞくする）",
        "be satisfied"
      ],
      [
        "満員（まんいん）",
        "full, crowded"
      ],
      [
        "満腹（まんぷく）",
        "full stomach"
      ],
      [
        "満開（まんかい）",
        "full bloom"
      ],
      [
        "満月（まんげつ）",
        "full moon"
      ],
      [
        "満点（まんてん）",
        "perfect score"
      ],
      [
        "未満（みまん）",
        "less than"
      ],
      [
        "不満な（ふまんな）",
        "dissatisfied"
      ],
      [
        "円満な（えんまんな）",
        "harmonious, peaceful"
      ],
      [
        "満ちる（みちる）",
        "be full [v.i.]"
      ],
      [
        "満たす（みたす）",
        "fill, fulfill [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "増",
    "kname": "zou-fu(eru)",
    "kstroke": 14,
    "kmeaning": "increase",
    "kgrade": 5,
    "kunyomi_ja": "ま、ふ、ます、まし、ふえる、ふやす",
    "kunyomi": "ma, fu, masu, mashi, fueru, fuyasu",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "増加する（ぞうかする）",
        "increase in number [v.i.]"
      ],
      [
        "増大する（ぞうだいする）",
        "increase in size [v.i.]"
      ],
      [
        "増減する（ぞうげんする）",
        "increase and decrease [v.i.]"
      ],
      [
        "増税する（ぞうぜいする）",
        "raise taxes"
      ],
      [
        "急増する（きゅうぞうする）",
        "increase rapidly"
      ],
      [
        "倍増する（ばいぞうする）",
        "double [v.i., v.t.]"
      ],
      [
        "増す（ます）",
        "increase [v.i., v.t.]"
      ],
      [
        "増える（ふえる）",
        "increase [v.i.]"
      ],
      [
        "増やす（ふやす）",
        "increase [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "声",
    "kname": "koe",
    "kstroke": 7,
    "kmeaning": "voice",
    "kgrade": 2,
    "kunyomi_ja": "こえ、こわ",
    "kunyomi": "koe, kowa",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "発声する（はっせいする）",
        "make an utterance"
      ],
      [
        "音声（おんせい）",
        "voice, sound"
      ],
      [
        "名声（めいせい）",
        "fame"
      ],
      [
        "擬声語（ぎせいご）",
        "onomatopoeia"
      ],
      [
        "声援（せいえん）",
        "cheering"
      ],
      [
        "大音声（だいおんじょう）",
        "very loud voice"
      ],
      [
        "声（こえ）",
        "voice"
      ],
      [
        "大声（おおごえ）",
        "loud voice"
      ],
      [
        "小声（こごえ）",
        "low voice"
      ],
      [
        "声色（こわいろ）",
        "tone of voice"
      ]
    ],
    "radical": "",
    "rad_order": 39.5,
    "rad_stroke": 3,
    "rad_name_ja": "さむらいかんむり",
    "rad_name": "samuraikanmuri",
    "rad_meaning": "man, scholar, samurai",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "現",
    "kname": "gen-arawa(reru)",
    "kstroke": 11,
    "kmeaning": "actual, appear, present",
    "kgrade": 5,
    "kunyomi_ja": "あらわ、あらわれる、あらわす",
    "kunyomi": "arawa, arawareru, arawasu",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "現在（げんざい）",
        "present, current"
      ],
      [
        "現代（げんだい）",
        "present-day"
      ],
      [
        "現実（げんじつ）",
        "reality"
      ],
      [
        "現金（げんきん）",
        "cash"
      ],
      [
        "現住所（げんじゅうしょ）",
        "present address"
      ],
      [
        "現存する（げんそんする）",
        "exist currently"
      ],
      [
        "出現する（しゅつげんする）",
        "appear"
      ],
      [
        "表現する（ひょうげんする）",
        "express [v.t.]"
      ],
      [
        "再現する（さいげんする）",
        "reproduce, recreate"
      ],
      [
        "現れる（あらわれる）",
        "appear [v.i.]"
      ],
      [
        "現す（あらわす）",
        "show, display [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "父",
    "kname": "fu-chichi",
    "kstroke": 4,
    "kmeaning": "father",
    "kgrade": 2,
    "kunyomi_ja": "ちち",
    "kunyomi": "chichi",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "父母（ふぼ）",
        "one's own father and mother"
      ],
      [
        "祖父（そふ）",
        "one's own grandfather"
      ],
      [
        "父（ちち）",
        "one's own father"
      ],
      [
        "父親（ちちおや）",
        "father"
      ],
      [
        "*お父さん（おとうさん）",
        "father [hon.]"
      ]
    ],
    "radical": "⽗",
    "rad_order": 113,
    "rad_stroke": 4,
    "rad_name_ja": "ちち",
    "rad_name": "chichi",
    "rad_meaning": "father",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "在",
    "kname": "zai-a(ru)",
    "kstroke": 6,
    "kmeaning": "be, exist",
    "kgrade": 5,
    "kunyomi_ja": "あ、ある",
    "kunyomi": "a, aru",
    "onyomi_ja": "ザイ",
    "onyomi": "zai",
    "examples": [
      [
        "在学する（ざいがくする）",
        "be enrolled (school)"
      ],
      [
        "在籍する（ざいせきする）",
        "be registered (school)"
      ],
      [
        "在宅する（ざいたくする）",
        "be at home"
      ],
      [
        "存在する（そんざいする）",
        "exist"
      ],
      [
        "実在する（じつざいする）",
        "(really) exist"
      ],
      [
        "滞在する（たいざいする）",
        "stay"
      ],
      [
        "在日（ざいにち）",
        "living/staying in Japan"
      ],
      [
        "在庫（ざいこ）",
        "stock, inventory"
      ],
      [
        "現在（げんざい）",
        "present [n.]"
      ],
      [
        "不在（ふざい）",
        "absent"
      ],
      [
        "自由自在に（じゆうじざいに）",
        "freely"
      ],
      [
        "在る（ある）",
        "be, exist"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "夢",
    "kname": "yume",
    "kstroke": 13,
    "kmeaning": "dream",
    "kgrade": 5,
    "kunyomi_ja": "ゆめ",
    "kunyomi": "yume",
    "onyomi_ja": "ム",
    "onyomi": "mu",
    "examples": [
      [
        "夢中で（むちゅうで）",
        "be absorbed, be engrossed"
      ],
      [
        "夢想家（むそうか）",
        "dreamer"
      ],
      [
        "悪夢（あくむ）",
        "nightmare"
      ],
      [
        "夢（ゆめ）",
        "dream [n.]"
      ],
      [
        "初夢（はつゆめ）",
        "first dream of the year"
      ],
      [
        "正夢（まさゆめ）",
        "dream that comes true"
      ]
    ],
    "radical": "⼣",
    "rad_order": 42,
    "rad_stroke": 3,
    "rad_name_ja": "ゆうべ",
    "rad_name": "yuube",
    "rad_meaning": "evening",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "乗",
    "kname": "jou-no(ru)",
    "kstroke": 9,
    "kmeaning": "ride, get on",
    "kgrade": 3,
    "kunyomi_ja": "の、のる、のり、のせる",
    "kunyomi": "no, noru, nori, noseru",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "乗用車（じょうようしゃ）",
        "automobile"
      ],
      [
        "乗客（じょうきゃく）",
        "passenger"
      ],
      [
        "乗車する（じょうしゃする）",
        "get inside (train, car, bus, etc.)"
      ],
      [
        "乗馬する（じょうばする）",
        "ride a horse"
      ],
      [
        "同乗する（どうじょうする）",
        "ride together"
      ],
      [
        "試乗する（しじょうする）",
        "test drive [v.i.]"
      ],
      [
        "乗じる（じょうじる）",
        "take advantage of"
      ],
      [
        "乗る（のる）",
        "get on [v.i.]"
      ],
      [
        "乗り物（のりもの）",
        "vehicle"
      ],
      [
        "乗せる（のせる）",
        "give a ride [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 5,
    "rad_stroke": 1,
    "rad_name_ja": "のかんむり",
    "rad_name": "nokanmuri",
    "rad_meaning": "diagonal sweeping stroke",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "放",
    "kname": "hou-hana(su)",
    "kstroke": 8,
    "kmeaning": "let go, release",
    "kgrade": 3,
    "kunyomi_ja": "はな、はなす、はなつ、はなれる",
    "kunyomi": "hana, hanasu, hanatsu, hanareru",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "放送する（ほうそうする）",
        "broadcast"
      ],
      [
        "放置する（ほうちする）",
        "leave as is"
      ],
      [
        "放火する（ほうかする）",
        "set fire to"
      ],
      [
        "開放する（かいほうする）",
        "throw open, make public"
      ],
      [
        "解放する（かいほうする）",
        "release"
      ],
      [
        "追放する（ついほうする）",
        "exile, expel"
      ],
      [
        "放課後（ほうかご）",
        "after school"
      ],
      [
        "放す（はなす）",
        "separate [v.t.]"
      ],
      [
        "放つ（はなつ）",
        "set free"
      ],
      [
        "放れる（はなれる）",
        "leave [v.i.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "協",
    "kname": "(da)kyou",
    "kstroke": 8,
    "kmeaning": "cooperate",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "協力する（きょうりょくする）",
        "cooperate"
      ],
      [
        "協調する（きょうちょうする）",
        "cooperate"
      ],
      [
        "協議する（きょうぎする）",
        "discuss, negotiate"
      ],
      [
        "妥協する（だきょうする）",
        "compromise"
      ],
      [
        "協会（きょうかい）",
        "association"
      ],
      [
        "協定（きょうてい）",
        "pact, agreement"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "力",
    "kname": "chikara",
    "kstroke": 2,
    "kmeaning": "power, force",
    "kgrade": 1,
    "kunyomi_ja": "ちから",
    "kunyomi": "chikara",
    "onyomi_ja": "リョク、リキ",
    "onyomi": "ryoku, riki",
    "examples": [
      [
        "体力（たいりょく）",
        "physical strength"
      ],
      [
        "能力（のうりょく）",
        "ability"
      ],
      [
        "実力（じつりょく）",
        "real ability"
      ],
      [
        "努力（どりょく）",
        "effort"
      ],
      [
        "暴力（ぼうりょく）",
        "violence"
      ],
      [
        "権力（けんりょく）",
        "(political) power"
      ],
      [
        "魅力（みりょく）",
        "charm [n.]"
      ],
      [
        "協力する（きょうりょくする）",
        "cooperate"
      ],
      [
        "人力車（じんりきしゃ）",
        "rickshaw"
      ],
      [
        "力む（りきむ）",
        "strain"
      ],
      [
        "力（ちから）",
        "force [n.]"
      ],
      [
        "底力（そこぢから）",
        "latent energy, potentiality"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "賛",
    "kname": "san(pi)",
    "kstroke": 15,
    "kmeaning": "praise, agreement",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "賛成する（さんせいする）",
        "agree"
      ],
      [
        "賛同する（さんどうする）",
        "agree"
      ],
      [
        "賞賛する（しょうさんする）",
        "praise"
      ],
      [
        "絶賛する（ぜっさんする）",
        "praise highly"
      ],
      [
        "協賛する（きょうさんする）",
        "cooperate, cosponsor"
      ],
      [
        "賛否（さんぴ）",
        "yes and no"
      ],
      [
        "賛意（さんい）",
        "assent"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "説",
    "kname": "setsu-to(ku)",
    "kstroke": 14,
    "kmeaning": "explain, theory, opinion",
    "kgrade": 4,
    "kunyomi_ja": "と、とく",
    "kunyomi": "to, toku",
    "onyomi_ja": "セツ、ゼイ",
    "onyomi": "setsu, zei",
    "examples": [
      [
        "説明する（せつめいする）",
        "explain"
      ],
      [
        "説得する（せっとくする）",
        "persuade"
      ],
      [
        "説教する（せっきょうする）",
        "preach, sermon"
      ],
      [
        "解説する（かいせつする）",
        "give commentary"
      ],
      [
        "演説する（えんぜつする）",
        "give a speech"
      ],
      [
        "小説（しょうせつ）",
        "novel [n.]"
      ],
      [
        "小説家（しょうせつか）",
        "novelist"
      ],
      [
        "仮説（かせつ）",
        "hypothesis"
      ],
      [
        "社説（しゃせつ）",
        "editorial"
      ],
      [
        "遊説する（ゆうぜいする）",
        "campaign (for an election)"
      ],
      [
        "説く（とく）",
        "preach, persuade"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "落",
    "kname": "raku-o(chiru)",
    "kstroke": 12,
    "kmeaning": "fall",
    "kgrade": 3,
    "kunyomi_ja": "お、おちる、おとす",
    "kunyomi": "o, ochiru, otosu",
    "onyomi_ja": "ラク",
    "onyomi": "raku",
    "examples": [
      [
        "落下する（らっかする）",
        "fall, drop"
      ],
      [
        "落馬する（らくばする）",
        "fall from a horse"
      ],
      [
        "落選する（らくせんする）",
        "lose an election"
      ],
      [
        "墜落する（ついらくする）",
        "fall, crash"
      ],
      [
        "暴落する（ぼうらくする）",
        "crash (stock market)"
      ],
      [
        "堕落する（だらくする）",
        "decay, be corrupted"
      ],
      [
        "落書き（らくがき）",
        "scribble, graffiti"
      ],
      [
        "落語（らくご）",
        "rakugo (comic story-telling)"
      ],
      [
        "段落（だんらく）",
        "paragraph"
      ],
      [
        "落ちる（おちる）",
        "fall, get worse [v.i.]"
      ],
      [
        "落とす（おとす）",
        "drop, lose, let fall [v.t.]"
      ],
      [
        "落ち着く（おちつく）",
        "settle down, keep calm"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "名",
    "kname": "na(mae)",
    "kstroke": 6,
    "kmeaning": "name",
    "kgrade": 1,
    "kunyomi_ja": "な",
    "kunyomi": "na",
    "onyomi_ja": "メイ、ミョウ",
    "onyomi": "mei, myou",
    "examples": [
      [
        "氏名（しめい）",
        "full name"
      ],
      [
        "題名（だいめい）",
        "title"
      ],
      [
        "一名（いちめい）",
        "one person"
      ],
      [
        "有名な（ゆうめいな）",
        "famous"
      ],
      [
        "名物（めいぶつ）",
        "local speciality"
      ],
      [
        "名曲（めいきょく）",
        "great music"
      ],
      [
        "名刺（めいし）",
        "business card"
      ],
      [
        "名誉な（めいよな）",
        "honorable"
      ],
      [
        "本名（ほんみょう）",
        "real name"
      ],
      [
        "名字（みょうじ）",
        "family name"
      ],
      [
        "名前（なまえ）",
        "name"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "母",
    "kname": "haha",
    "kstroke": 5,
    "kmeaning": "mother",
    "kgrade": 2,
    "kunyomi_ja": "はは",
    "kunyomi": "haha",
    "onyomi_ja": "ボ",
    "onyomi": "bo",
    "examples": [
      [
        "母国語（ぼこくご）",
        "mother tongue"
      ],
      [
        "母音（ぼいん）",
        "vowel"
      ],
      [
        "母校（ぼこう）",
        "alma mater"
      ],
      [
        "祖母（そぼ）",
        "grandmother"
      ],
      [
        "母（はは）",
        "one's own mother"
      ],
      [
        "母親（ははおや）",
        "mother"
      ],
      [
        "*お母さん（おかあさん）",
        "mother [hon.]"
      ]
    ],
    "radical": "⽏",
    "rad_order": 104,
    "rad_stroke": 4,
    "rad_name_ja": "なかれ",
    "rad_name": "nakare",
    "rad_meaning": "not, mother",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "機",
    "kname": "hata(ori)",
    "kstroke": 16,
    "kmeaning": "machine, opportunity",
    "kgrade": 4,
    "kunyomi_ja": "はた",
    "kunyomi": "hata",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "機械（きかい）",
        "machine"
      ],
      [
        "機会（きかい）",
        "opportunity"
      ],
      [
        "機能（きのう）",
        "function"
      ],
      [
        "機嫌（きげん）",
        "mood"
      ],
      [
        "機敏な（きびんな）",
        "smart, quick"
      ],
      [
        "危機（きき）",
        "crisis"
      ],
      [
        "動機（どうき）",
        "incentive"
      ],
      [
        "飛行機（ひこうき）",
        "airplane"
      ],
      [
        "待機する（たいきする）",
        "stand by [v.i.]"
      ],
      [
        "投機する（とうきする）",
        "speculate (stock, currency)"
      ],
      [
        "機（はた）",
        "loom"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "具",
    "kname": "(dou)gu",
    "kstroke": 8,
    "kmeaning": "implement, tool",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "グ",
    "onyomi": "gu",
    "examples": [
      [
        "具（ぐ）",
        "ingredients"
      ],
      [
        "道具（どうぐ）",
        "tool"
      ],
      [
        "家具（かぐ）",
        "furniture"
      ],
      [
        "文房具（ぶんぼうぐ）",
        "stationery"
      ],
      [
        "用具（ようぐ）",
        "tool"
      ],
      [
        "具合（ぐあい）",
        "condition [n.]"
      ],
      [
        "具体的な（ぐたいてきな）",
        "concrete [adj.]"
      ],
      [
        "具備する（ぐびする）",
        "be furnished/equipped with [v.t.]"
      ]
    ],
    "radical": "⼋",
    "rad_order": 15,
    "rad_stroke": 2,
    "rad_name_ja": "はち",
    "rad_name": "hachi",
    "rad_meaning": "eight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "詳",
    "kname": "kuwa(shii)",
    "kstroke": 13,
    "kmeaning": "detailed",
    "kgrade": "n/a",
    "kunyomi_ja": "くわ、くわしい",
    "kunyomi": "kuwa, kuwashii",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "詳細（しょうさい）",
        "detail"
      ],
      [
        "詳しい（くわしい）",
        "detailed, knowledgable"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "解",
    "kname": "kai-to(ku)",
    "kstroke": 13,
    "kmeaning": "take apart, dissolve, clarify, untie",
    "kgrade": 5,
    "kunyomi_ja": "と、とく、とかす、とける",
    "kunyomi": "to, toku, takasu, tokeru",
    "onyomi_ja": "カイ、ゲ",
    "onyomi": "kai, ge",
    "examples": [
      [
        "解決する（かいけつする）",
        "settle, solve"
      ],
      [
        "解散する（かいさんする）",
        "break up"
      ],
      [
        "理解する（りかいする）",
        "understand"
      ],
      [
        "誤解する（ごかいする）",
        "misunderstand"
      ],
      [
        "分解する（ぶんかいする）",
        "disassemble"
      ],
      [
        "弁解する（べんかいする）",
        "justify"
      ],
      [
        "和解する（わかいする）",
        "reconcile"
      ],
      [
        "了解する（りょうかいする）",
        "give consent"
      ],
      [
        "解熱剤（げねつざい）",
        "medicine for a fever"
      ],
      [
        "解く（とく）",
        "solve [v.t.]"
      ],
      [
        "解かす（とかす）",
        "melt [v.t.]"
      ],
      [
        "解ける（とける）",
        "melt, loosen [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 181,
    "rad_stroke": 7,
    "rad_name_ja": "つのへん",
    "rad_name": "tsunohen",
    "rad_meaning": "horn, corner",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "構",
    "kname": "kama(eru)",
    "kstroke": 14,
    "kmeaning": "construct, mind",
    "kgrade": 5,
    "kunyomi_ja": "かま、かまえる、かまう",
    "kunyomi": "kama, kamaeru, kamau",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "構造（こうぞう）",
        "structure [n.]"
      ],
      [
        "構図（こうず）",
        "composition (of a painting)"
      ],
      [
        "構内（こうない）",
        "campus, premises"
      ],
      [
        "構成する（こうせいする）",
        "compose"
      ],
      [
        "構想する（こうそうする）",
        "plot [v.t.]"
      ],
      [
        "結構な（けっこうな）",
        "wonderful, well enough"
      ],
      [
        "構う（かまう）",
        "be concerned about [v.t.]"
      ],
      [
        "構える（かまえる）",
        "hold, have"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "情",
    "kname": "nasa(ke)",
    "kstroke": 11,
    "kmeaning": "emotion, actual conditions",
    "kgrade": 5,
    "kunyomi_ja": "なさ、なさけ",
    "kunyomi": "nasa, nasake",
    "onyomi_ja": "ジョウ、セイ",
    "onyomi": "jou, sei",
    "examples": [
      [
        "情（じょう）",
        "feelings"
      ],
      [
        "感情（かんじょう）",
        "emotion(s)"
      ],
      [
        "愛情（あいじょう）",
        "love [n.]"
      ],
      [
        "友情（ゆうじょう）",
        "friendship"
      ],
      [
        "表情（ひょうじょう）",
        "facial expression"
      ],
      [
        "事情（じじょう）",
        "circumstances"
      ],
      [
        "情報（じょうほう）",
        "information"
      ],
      [
        "強情な（ごうじょうな）",
        "stubborn"
      ],
      [
        "同情する（どうじょうする）",
        "sympathize"
      ],
      [
        "風情（ふぜい）",
        "taste, appearance"
      ],
      [
        "情け（なさけ）",
        "sympathy, compassion"
      ],
      [
        "情けない（なさけない）",
        "miserable, shameful"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "共",
    "kname": "tomo(domo)",
    "kstroke": 6,
    "kmeaning": "joint, together, both",
    "kgrade": 4,
    "kunyomi_ja": "とも",
    "kunyomi": "tomo",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "共通（きょうつう）",
        "common, shared"
      ],
      [
        "共通語（きょうつうご）",
        "common language"
      ],
      [
        "共同（きょうどう）",
        "collaboration, partnership"
      ],
      [
        "共産党（きょうさんとう）",
        "Communist Party"
      ],
      [
        "公共（こうきょう）",
        "public"
      ],
      [
        "共感する（きょうかんする）",
        "resonate"
      ],
      [
        "共有する（きょうゆうする）",
        "share [v.t.]"
      ],
      [
        "共存する（きょうそんする）",
        "coexist"
      ],
      [
        "共に（ともに）",
        "together, both"
      ],
      [
        "共稼ぎ（ともかせぎ）",
        "working couple"
      ],
      [
        "両方共（りょうほうとも）",
        "both"
      ],
      [
        "私共（わたくしども）",
        "we [hum.]"
      ]
    ],
    "radical": "⼋",
    "rad_order": 15,
    "rad_stroke": 2,
    "rad_name_ja": "はち",
    "rad_name": "hachi",
    "rad_meaning": "eight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "存",
    "kname": "son(zai)",
    "kstroke": 6,
    "kmeaning": "exist, know",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソン、ゾン",
    "onyomi": "son, zon",
    "examples": [
      [
        "存在する（そんざいする）",
        "exist"
      ],
      [
        "存続する（そんぞくする）",
        "continue to exist"
      ],
      [
        "現存する（げんそんする）",
        "exist currently"
      ],
      [
        "依存する（いぞんする）",
        "depend on"
      ],
      [
        "生存する（せいぞんする）",
        "be in existence, survive"
      ],
      [
        "保存する（ほぞんする）",
        "preserve"
      ],
      [
        "実存主義（じつぞんしゅぎ）",
        "existentialism"
      ],
      [
        "異存（いぞん）",
        "objection"
      ],
      [
        "所存（しょぞん）",
        "intention"
      ],
      [
        "存分に（ぞんぶんに）",
        "freely"
      ],
      [
        "御存知（ごぞんじ）",
        "know [hon.]"
      ],
      [
        "存じる（ぞんじる）",
        "know [hum.]"
      ]
    ],
    "radical": "⼦",
    "rad_order": 46,
    "rad_stroke": 3,
    "rad_name_ja": "こ",
    "rad_name": "ko",
    "rad_meaning": "child, son",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "静",
    "kname": "shizu(ka)",
    "kstroke": 14,
    "kmeaning": "quiet",
    "kgrade": 4,
    "kunyomi_ja": "しず、しずか、しずまる、しずめる",
    "kunyomi": "shizu, shizuka, shizumaru, shizumeru",
    "onyomi_ja": "セイ、ジョウ",
    "onyomi": "sei, jou",
    "examples": [
      [
        "静寂（せいじゃく）",
        "silence"
      ],
      [
        "安静（あんせい）",
        "rest [n.]"
      ],
      [
        "冷静な（れいせいな）",
        "calm, cool-headed"
      ],
      [
        "静止する（せいしする）",
        "stand still"
      ],
      [
        "静聴する（せいちょうする）",
        "listen quietly"
      ],
      [
        "静脈（じょうみゃく）",
        "vein"
      ],
      [
        "静かな（しずかな）",
        "quiet"
      ],
      [
        "静まる（しずまる）",
        "quiet down, calm down [v.i.]"
      ],
      [
        "静める（しずめる）",
        "appease, pacify, calm [v.t.]"
      ]
    ],
    "radical": "⻘",
    "rad_order": 212,
    "rad_stroke": 8,
    "rad_name_ja": "あお",
    "rad_name": "ao",
    "rad_meaning": "blue, green",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "流",
    "kname": "ryuu-naga(re)",
    "kstroke": 10,
    "kmeaning": "flow, current, style",
    "kgrade": 3,
    "kunyomi_ja": "なが、ながれる、ながれ、ながす",
    "kunyomi": "naga, nagareru, nagare, nagasu",
    "onyomi_ja": "リュウ、ル",
    "onyomi": "ryuu, ru",
    "examples": [
      [
        "流行する（りゅうこうする）",
        "be fashionable, widespread"
      ],
      [
        "合流する（ごうりゅうする）",
        "merge"
      ],
      [
        "上流（じょうりゅう）",
        "upper stream, upper classes"
      ],
      [
        "下流（かりゅう）",
        "downstream, lower classes"
      ],
      [
        "主流（しゅりゅう）",
        "main current"
      ],
      [
        "一流（いちりゅう）",
        "first class, top-notch"
      ],
      [
        "電流（でんりゅう）",
        "electric current"
      ],
      [
        "流派（りゅうは）",
        "school (e.g. of ikebana)"
      ],
      [
        "流暢な（りゅうちょうな）",
        "fluent"
      ],
      [
        "流布する（るふする）",
        "circulate, disseminate"
      ],
      [
        "流れる（ながれる）",
        "flow [v.i.]"
      ],
      [
        "流す（ながす）",
        "drain, shed (blood, tears) [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "兄",
    "kname": "ani",
    "kstroke": 5,
    "kmeaning": "older brother",
    "kgrade": 2,
    "kunyomi_ja": "あに",
    "kunyomi": "ani",
    "onyomi_ja": "ケイ、キョウ",
    "onyomi": "kei, kyou",
    "examples": [
      [
        "父兄（ふけい）",
        "guardians"
      ],
      [
        "兄弟（きょうだい）",
        "siblings"
      ],
      [
        "兄（あに）",
        "one's own older brother"
      ],
      [
        "*お兄さん（おにいさん）",
        "older brother [hon.]"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "芸",
    "kname": "gei(jutsu)",
    "kstroke": 7,
    "kmeaning": "art, craft",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゲイ",
    "onyomi": "gei",
    "examples": [
      [
        "芸（げい）",
        "art, performance"
      ],
      [
        "芸術（げいじゅつ）",
        "fine arts"
      ],
      [
        "芸術家（げいじゅつか）",
        "artist"
      ],
      [
        "芸能（げいのう）",
        "public entertainment"
      ],
      [
        "芸者（げいしゃ）",
        "geisha"
      ],
      [
        "文芸（ぶんげい）",
        "belles-lettres"
      ],
      [
        "手芸（しゅげい）",
        "handicrafts"
      ],
      [
        "工芸（こうげい）",
        "industrial arts"
      ],
      [
        "園芸（えんげい）",
        "gardening"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "術",
    "kname": "(gei)jutsu",
    "kstroke": 11,
    "kmeaning": "practical art, technique",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジュツ",
    "onyomi": "jutsu",
    "examples": [
      [
        "技術（ぎじゅつ）",
        "technology, skill"
      ],
      [
        "美術（びじゅつ）",
        "fine arts"
      ],
      [
        "芸術（げいじゅつ）",
        "fine arts"
      ],
      [
        "手術（しゅじゅつ）",
        "surgical operation"
      ],
      [
        "魔術（まじゅつ）",
        "sorcery"
      ],
      [
        "術語（じゅつご）",
        "technical term"
      ]
    ],
    "radical": "⾏",
    "rad_order": 176,
    "rad_stroke": 6,
    "rad_name_ja": "ぎょうがまえ",
    "rad_name": "gyougamae",
    "rad_meaning": "to go",
    "rad_position_ja": "かまえ, ぎょうがまえ",
    "rad_position": "kamae, gyougamae"
  },
  {
    "kanji": "光",
    "kname": "hikari",
    "kstroke": 6,
    "kmeaning": "light",
    "kgrade": 2,
    "kunyomi_ja": "ひか、ひかる、ひかり",
    "kunyomi": "hika, hikaru, hikari",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "光線（こうせん）",
        "light ray"
      ],
      [
        "光景（こうけい）",
        "scene, spectacle"
      ],
      [
        "光年（こうねん）",
        "light year"
      ],
      [
        "日光（にっこう）",
        "sunlight"
      ],
      [
        "月光（げっこう）",
        "moonlight"
      ],
      [
        "栄光（えいこう）",
        "glory"
      ],
      [
        "観光する（かんこうする）",
        "go sightseeing"
      ],
      [
        "発光する（はっこうする）",
        "luminescence, radiation"
      ],
      [
        "光る（ひかる）",
        "shine [v.i.]"
      ],
      [
        "光（ひかり）",
        "light [n.]"
      ],
      [
        "稲光（いなびかり）",
        "(flash of) lightning"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "景",
    "kname": "(fuu)kei",
    "kstroke": 12,
    "kmeaning": "scene",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "風景（ふうけい）",
        "scenery"
      ],
      [
        "絶景（ぜっけい）",
        "picturesque scenery"
      ],
      [
        "夜景（やけい）",
        "night view"
      ],
      [
        "背景（はいけい）",
        "background, setting"
      ],
      [
        "光景（こうけい）",
        "scene, spectacle"
      ],
      [
        "景気（けいき）",
        "business/economic conditions"
      ],
      [
        "不景気（ふけいき）",
        "economic depression"
      ],
      [
        "*景色（けしき）",
        "scenery"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "驚",
    "kname": "odoro(ku)",
    "kstroke": 22,
    "kmeaning": "surprise",
    "kgrade": "n/a",
    "kunyomi_ja": "おどろ、おどろく、おどろかす",
    "kunyomi": "odoro, odoroku, odorokasu",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "驚嘆する（きょうたんする）",
        "marvel [v.t.]"
      ],
      [
        "驚喜する（きょうきする）",
        "exult"
      ],
      [
        "驚異（きょうい）",
        "wonder [n.]"
      ],
      [
        "驚く（おどろく）",
        "be surprised [v.i.]"
      ],
      [
        "驚かす（おどろかす）",
        "surprise [v.t.]"
      ]
    ],
    "radical": "⾺",
    "rad_order": 224,
    "rad_stroke": 10,
    "rad_name_ja": "うま",
    "rad_name": "uma",
    "rad_meaning": "horse",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "助",
    "kname": "tasu(keru)",
    "kstroke": 7,
    "kmeaning": "help, rescue, assistance",
    "kgrade": 3,
    "kunyomi_ja": "たす、たすける、たすかる、すけ",
    "kunyomi": "tasu, tasukeru, tasukaru, suke",
    "onyomi_ja": "ジョ",
    "onyomi": "jo",
    "examples": [
      [
        "助詞（じょし）",
        "(grammar) particle"
      ],
      [
        "助手（じょしゅ）",
        "assistant"
      ],
      [
        "助教授（じょきょうじゅ）",
        "assistant professor"
      ],
      [
        "助監督（じょかんとく）",
        "assistant director"
      ],
      [
        "助言する（じょげんする）",
        "advise"
      ],
      [
        "援助する（えんじょする）",
        "aid, support"
      ],
      [
        "救助する（きゅうじょする）",
        "rescue [v.t.]"
      ],
      [
        "助ける（たすける）",
        "help, save [v.t.]"
      ],
      [
        "手助け（てだすけ）",
        "help [n.]"
      ],
      [
        "助かる（たすかる）",
        "be saved, survive [v.i.], helpful [adj.]"
      ],
      [
        "助っ人（すけっと）",
        "helper"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "求",
    "kname": "moto(meru)",
    "kstroke": 7,
    "kmeaning": "seek, demand",
    "kgrade": 4,
    "kunyomi_ja": "もと、もとめる",
    "kunyomi": "moto, motomeru",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "求人（きゅうじん）",
        "help wanted, position vacant"
      ],
      [
        "求職（きゅうしょく）",
        "job search"
      ],
      [
        "欲求（よっきゅう）",
        "desire [n.]"
      ],
      [
        "求婚する（きゅうこんする）",
        "propose (marriage)"
      ],
      [
        "要求する（ようきゅうする）",
        "demand [v.t.]"
      ],
      [
        "請求する（せいきゅうする）",
        "claim, request [v.t.]"
      ],
      [
        "追求する（ついきゅうする）",
        "investigate, pursue"
      ],
      [
        "求める（もとめる）",
        "seek, request"
      ]
    ],
    "radical": "氺",
    "rad_order": 152,
    "rad_stroke": 5,
    "rad_name_ja": "したみず",
    "rad_name": "shitamizu",
    "rad_meaning": "water",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "留",
    "kname": "ryuu-to(meru)",
    "kstroke": 10,
    "kmeaning": "keep, stay",
    "kgrade": 5,
    "kunyomi_ja": "と、とど、とめる、とまる、とどまる、とどめる",
    "kunyomi": "to, todo, tomeru, tomaru, todomaru, todomeru",
    "onyomi_ja": "リュウ、ル",
    "onyomi": "ryuu, ru",
    "examples": [
      [
        "留学する（りゅうがくする）",
        "study abroad"
      ],
      [
        "留年する（りゅうねんする）",
        "repeat the same grade (school)"
      ],
      [
        "保留する（ほりゅうする）",
        "put on hold"
      ],
      [
        "留学生（りゅうがくせい）",
        "overseas student"
      ],
      [
        "停留所（ていりゅうじょ）",
        "bus stop"
      ],
      [
        "留守（るす）",
        "being away from home [n.]"
      ],
      [
        "留守番（るすばん）",
        "house-watching"
      ],
      [
        "留守番電話（るすばんでんわ）",
        "answering machine"
      ],
      [
        "留める（とめる）",
        "fasten [v.t.]"
      ],
      [
        "留まる（とまる）",
        "remain, come to a halt [v.i.]"
      ],
      [
        "留める（とどめる）",
        "hold, detain [v.t.]"
      ],
      [
        "留まる（とどまる）",
        "stay (in the one place) [v.i.]"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "興",
    "kname": "kyou-oko(su)",
    "kstroke": 16,
    "kmeaning": "prosper, amusement, interest, revive",
    "kgrade": 5,
    "kunyomi_ja": "おこ、おこる、おこす",
    "kunyomi": "oko, okoru, okosu",
    "onyomi_ja": "コウ、キョウ",
    "onyomi": "kou, kyou",
    "examples": [
      [
        "興奮する（こうふんする）",
        "be excited [v.i.]"
      ],
      [
        "興隆する（こうりゅうする）",
        "prosper"
      ],
      [
        "復興する（ふっこうする）",
        "revive [vi., vt.]"
      ],
      [
        "興亡（こうぼう）",
        "rise and fall"
      ],
      [
        "興（きょう）",
        "interest, entertainment"
      ],
      [
        "興味（きょうみ）",
        "interest (in something)"
      ],
      [
        "余興（よきょう）",
        "side show"
      ],
      [
        "即興（そっきょう）",
        "improvisation"
      ],
      [
        "興る（おこる）",
        "rise, flourish [v.i.]"
      ],
      [
        "興す（おこす）",
        "revive [v.t.]"
      ]
    ],
    "radical": "⾅",
    "rad_order": 168,
    "rad_stroke": 6,
    "rad_name_ja": "うす",
    "rad_name": "usu",
    "rad_meaning": "mortar, quern",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "深",
    "kname": "fuka(i)",
    "kstroke": 11,
    "kmeaning": "deep",
    "kgrade": 3,
    "kunyomi_ja": "ふか、ふかい、ふかまる、ふかめる",
    "kunyomi": "fuka, fukai, fukamaru, fukameru",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "深夜（しんや）",
        "late at night"
      ],
      [
        "深海（しんかい）",
        "deep-sea"
      ],
      [
        "深部（しんぶ）",
        "the depths"
      ],
      [
        "深刻な（しんこくな）",
        "serious"
      ],
      [
        "深い（ふかい）",
        "deep, profound"
      ],
      [
        "深める（ふかめる）",
        "deepen [v.t.]"
      ],
      [
        "深まる（ふかまる）",
        "be deepened [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "弟",
    "kname": "otouto",
    "kstroke": 7,
    "kmeaning": "younger brother",
    "kgrade": 2,
    "kunyomi_ja": "おとうと",
    "kunyomi": "otouto",
    "onyomi_ja": "テイ、ダイ、デ",
    "onyomi": "tei, dai, de",
    "examples": [
      [
        "師弟（してい）",
        "teacher and student"
      ],
      [
        "義弟（ぎてい）",
        "younger brother-in-law"
      ],
      [
        "兄弟（きょうだい）",
        "siblings"
      ],
      [
        "弟子（でし）",
        "disciple"
      ],
      [
        "弟（おとうと）",
        "one's own younger brother"
      ]
    ],
    "radical": "⼸",
    "rad_order": 67,
    "rad_stroke": 3,
    "rad_name_ja": "ゆみ",
    "rad_name": "yumi",
    "rad_meaning": "bow（in archery）",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "猫",
    "kname": "neko",
    "kstroke": 11,
    "kmeaning": "cat",
    "kgrade": "n/a",
    "kunyomi_ja": "ねこ",
    "kunyomi": "neko",
    "onyomi_ja": "ビョウ",
    "onyomi": "byou",
    "examples": [
      [
        "愛猫家（あいびょうか）",
        "cat lover"
      ],
      [
        "猫（ねこ）",
        "cat"
      ],
      [
        "子猫（こねこ）",
        "kitten"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "想",
    "kname": "(yo)sou",
    "kstroke": 13,
    "kmeaning": "conceive, idea, thought",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ、ソ",
    "onyomi": "sou, so",
    "examples": [
      [
        "感想（かんそう）",
        "impressions, thoughts"
      ],
      [
        "理想（りそう）",
        "ideal [n.]"
      ],
      [
        "思想（しそう）",
        "thought, ideas"
      ],
      [
        "発想する（はっそうする）",
        "generate ideas"
      ],
      [
        "予想する（よそうする）",
        "predict"
      ],
      [
        "連想する（れんそうする）",
        "associate [v.t.]"
      ],
      [
        "想像する（そうぞうする）",
        "imagine"
      ],
      [
        "想定する（そうていする）",
        "suppose, assume"
      ],
      [
        "愛想（あいそ）",
        "civility, sociability"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "像",
    "kname": "(ga)zou",
    "kstroke": 14,
    "kmeaning": "image",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "想像する（そうぞうする）",
        "imagine"
      ],
      [
        "現像する（げんぞうする）",
        "develop (film)"
      ],
      [
        "映像（えいぞう）",
        "image [n.]"
      ],
      [
        "画像（がぞう）",
        "image, picture [n.]"
      ],
      [
        "実像（じつぞう）",
        "one's real life"
      ],
      [
        "仏像（ぶつぞう）",
        "Buddhist statue"
      ],
      [
        "肖像（しょうぞう）",
        "portrait"
      ],
      [
        "銅像（どうぞう）",
        "bronze statue"
      ],
      [
        "自画像（じがぞう）",
        "self portrait"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "平",
    "kname": "tai(ra)",
    "kstroke": 5,
    "kmeaning": "flat, calm",
    "kgrade": 3,
    "kunyomi_ja": "たい、ひらたい、たいら、ひら",
    "kunyomi": "tai, hiratai, taira, hira",
    "onyomi_ja": "ヘイ、ビョウ",
    "onyomi": "hei, byou",
    "examples": [
      [
        "平野（へいや）",
        "plain, open field"
      ],
      [
        "平均（へいきん）",
        "average [n.]"
      ],
      [
        "平日（へいじつ）",
        "weekdays"
      ],
      [
        "平気な（へいきな）",
        "unconcerned"
      ],
      [
        "平凡な（へいぼんな）",
        "mediocre"
      ],
      [
        "公平な（こうへいな）",
        "fair, impartial"
      ],
      [
        "平等な（びょうどうな）",
        "equal, impartial"
      ],
      [
        "平らな（たいらな）",
        "flat"
      ],
      [
        "平たい（ひらたい）",
        "flat"
      ],
      [
        "手の平（てのひら）",
        "palm (of one's hand)"
      ],
      [
        "平社員（ひらしゃいん）",
        "employee without a title"
      ],
      [
        "平仮名（ひらがな）",
        "hiragana"
      ]
    ],
    "radical": "⼲",
    "rad_order": 61,
    "rad_stroke": 3,
    "rad_name_ja": "かん",
    "rad_name": "kan",
    "rad_meaning": "to dry, shield",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "位",
    "kname": "kurai",
    "kstroke": 7,
    "kmeaning": "rank, position",
    "kgrade": 4,
    "kunyomi_ja": "くらい",
    "kunyomi": "kurai",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "位置（いち）",
        "position, location"
      ],
      [
        "地位（ちい）",
        "(social) status"
      ],
      [
        "順位（じゅんい）",
        "rank [n.]"
      ],
      [
        "優位（ゆうい）",
        "superiority"
      ],
      [
        "単位（たんい）",
        "unit, credit (in school)"
      ],
      [
        "一位（いちい）",
        "first place"
      ],
      [
        "位（くらい）",
        "rank, about, almost"
      ],
      [
        "十分位（じゅっぷんぐらい）",
        "about 10 minutes"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "置",
    "kname": "chi-o(ku)",
    "kstroke": 13,
    "kmeaning": "place, put",
    "kgrade": 4,
    "kunyomi_ja": "お、おく",
    "kunyomi": "o, oku",
    "onyomi_ja": "チ",
    "onyomi": "chi",
    "examples": [
      [
        "位置（いち）",
        "position, location"
      ],
      [
        "措置（そち）",
        "measure, precaution [n.]"
      ],
      [
        "装置（そうち）",
        "apparatus"
      ],
      [
        "配置する（はいちする）",
        "arrange"
      ],
      [
        "設置する（せっちする）",
        "install"
      ],
      [
        "放置する（ほうちする）",
        "leave as is"
      ],
      [
        "置く（おく）",
        "put, place"
      ]
    ],
    "radical": "⺫",
    "rad_order": 150,
    "rad_stroke": 5,
    "rad_name_ja": "あみがしら",
    "rad_name": "amigashira",
    "rad_meaning": "net",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "進",
    "kname": "susu(mu)",
    "kstroke": 11,
    "kmeaning": "advance, progress",
    "kgrade": 3,
    "kunyomi_ja": "すす、すすむ、すすめる",
    "kunyomi": "susu, susumu, susumeru",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "進行する（しんこうする）",
        "advance [v.i.]"
      ],
      [
        "進学する（しんがくする）",
        "advance to a higher school"
      ],
      [
        "進歩する（しんぽする）",
        "progress [v.i]"
      ],
      [
        "進化する（しんかする）",
        "evolve [v.i.]"
      ],
      [
        "前進する（ぜんしんする）",
        "advance [v.i.]"
      ],
      [
        "促進する（そくしんする）",
        "promote, advance, help [v.t.]"
      ],
      [
        "昇進する（しょうしんする）",
        "be promoted"
      ],
      [
        "進路（しんろ）",
        "course, route"
      ],
      [
        "先進国（せんしんこく）",
        "developed country"
      ],
      [
        "進む（すすむ）",
        "progress, advance [v.i.]"
      ],
      [
        "進める（すすめる）",
        "advance [v.t.]"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "越",
    "kname": "etsu-ko(su)",
    "kstroke": 12,
    "kmeaning": "go beyond, exceed",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こす、こえる",
    "kunyomi": "ko, kosu, koeru",
    "onyomi_ja": "エツ",
    "onyomi": "etsu",
    "examples": [
      [
        "超越する（ちょうえつする）",
        "transcend"
      ],
      [
        "卓越する（たくえつする）",
        "excel, exceed"
      ],
      [
        "越冬する（えっとうする）",
        "pass the winter"
      ],
      [
        "優越感（ゆうえつかん）",
        "superiority complex"
      ],
      [
        "越す（こす）",
        "go over, exceed, move [v.i]"
      ],
      [
        "引っ越す（ひっこす）",
        "move [v.i.]"
      ],
      [
        "越える（こえる）",
        "go over, exceed [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 191,
    "rad_stroke": 7,
    "rad_name_ja": "そうにょう",
    "rad_name": "sounyou",
    "rad_meaning": "to run",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "庭",
    "kname": "niwa",
    "kstroke": 10,
    "kmeaning": "court, garden",
    "kgrade": 3,
    "kunyomi_ja": "にわ",
    "kunyomi": "niwa",
    "onyomi_ja": "テイ",
    "onyomi": "tei",
    "examples": [
      [
        "校庭（こうてい）",
        "campus play ground"
      ],
      [
        "石庭（せきてい）",
        "rock garden"
      ],
      [
        "家庭（かてい）",
        "family, household"
      ],
      [
        "庭園（ていえん）",
        "garden, park"
      ],
      [
        "庭（にわ）",
        "garden"
      ],
      [
        "中庭（なかにわ）",
        "courtyard"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "勢",
    "kname": "ikio(i)",
    "kstroke": 13,
    "kmeaning": "power, force, vigor",
    "kgrade": 5,
    "kunyomi_ja": "いきお、いきおい",
    "kunyomi": "ikio, ikioi",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "勢力（せいりょく）",
        "strength, force"
      ],
      [
        "威勢（いせい）",
        "power, energy"
      ],
      [
        "態勢（たいせい）",
        "attitude, condition"
      ],
      [
        "姿勢（しせい）",
        "attitude, posture"
      ],
      [
        "情勢（じょうせい）",
        "situation"
      ],
      [
        "優勢な（ゆうせいな）",
        "superior"
      ],
      [
        "豪勢な（ごうせいな）",
        "luxurious"
      ],
      [
        "大勢（おおぜい）",
        "great number of people"
      ],
      [
        "勢い（いきおい）",
        "force"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "姉",
    "kname": "ane",
    "kstroke": 8,
    "kmeaning": "older sister",
    "kgrade": 2,
    "kunyomi_ja": "あね",
    "kunyomi": "ane",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "姉妹（しまい）",
        "sisters"
      ],
      [
        "姉（あね）",
        "one's own older sister"
      ],
      [
        "*お姉さん（おねえさん）",
        "older sister [hon.]"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "性",
    "kname": "(ko)sei",
    "kstroke": 8,
    "kmeaning": "nature, sex, -ity, gender",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "性格（せいかく）",
        "personality"
      ],
      [
        "性質（せいしつ）",
        "nature, disposition"
      ],
      [
        "性能（せいのう）",
        "ability"
      ],
      [
        "性別（せいべつ）",
        "gender"
      ],
      [
        "個性（こせい）",
        "individuality"
      ],
      [
        "人間性（にんげんせい）",
        "humanity"
      ],
      [
        "可能性（かのうせい）",
        "potentiality, possibility"
      ],
      [
        "性急な（せいきゅうな）",
        "impatient"
      ],
      [
        "性的な（せいてきな）",
        "sexual"
      ],
      [
        "本性（ほんしょう）",
        "true nature"
      ],
      [
        "根性（こんじょう）",
        "guts"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "団",
    "kname": "(shuu)dan",
    "kstroke": 6,
    "kmeaning": "body, group",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダン、トン",
    "onyomi": "dan, ton",
    "examples": [
      [
        "団結する（だんけつする）",
        "unite [v.i.]"
      ],
      [
        "団体（だんたい）",
        "group, organization"
      ],
      [
        "集団（しゅうだん）",
        "group, mass"
      ],
      [
        "劇団（げきだん）",
        "drama troupe"
      ],
      [
        "財団（ざいだん）",
        "foundation (for charity)"
      ],
      [
        "軍団（ぐんだん）",
        "army corps"
      ],
      [
        "布団（ふとん）",
        "futon"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "弁",
    "kname": "ben(go)",
    "kstroke": 5,
    "kmeaning": "speak eloquently, speech, valve, petal",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ベン",
    "onyomi": "ben",
    "examples": [
      [
        "弁護する（べんごする）",
        "defend"
      ],
      [
        "弁解する（べんかいする）",
        "justify"
      ],
      [
        "弁償する（べんしょうする）",
        "compensate, reimburse"
      ],
      [
        "代弁する（だいべんする）",
        "speak for another"
      ],
      [
        "答弁する（とうべんする）",
        "reply (in meeting)"
      ],
      [
        "関西弁（かんさいべん）",
        "Kansai dialect"
      ],
      [
        "安全弁（あんぜんべん）",
        "safety valve"
      ],
      [
        "花弁（かべん）",
        "(flower) petal"
      ],
      [
        "雄弁な（ゆうべんな）",
        "eloquent"
      ],
      [
        "多弁な（たべんな）",
        "verbose"
      ],
      [
        "弁護士（べんごし）",
        "lawyer"
      ],
      [
        "弁当（べんとう）",
        "boxed lunch"
      ]
    ],
    "radical": "⼶",
    "rad_order": 65,
    "rad_stroke": 3,
    "rad_name_ja": "にじゅうあし",
    "rad_name": "nijuuashi",
    "rad_meaning": "folded hands",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "護",
    "kname": "(ben)go",
    "kstroke": 20,
    "kmeaning": "protect",
    "kgrade": 5,
    "kunyomi_ja": "まも、まもる",
    "kunyomi": "mamo, mamoru",
    "onyomi_ja": "ゴ",
    "onyomi": "go",
    "examples": [
      [
        "保護する（ほごする）",
        "protect"
      ],
      [
        "弁護する（べんごする）",
        "defend"
      ],
      [
        "擁護する（ようごする）",
        "support [v.t.]"
      ],
      [
        "看護する（かんごする）",
        "nurse [v.t.]"
      ],
      [
        "護衛する（ごえいする）",
        "guard, escort [v.t.]"
      ],
      [
        "護身術（ごしんじゅつ）",
        "art of self-defense"
      ],
      [
        "保護者（ほごしゃ）",
        "protector, guardian"
      ],
      [
        "弁護士（べんごし）",
        "lawyer, attorney"
      ],
      [
        "護る（まもる）",
        "protect"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "条",
    "kname": "jou(ken)",
    "kstroke": 7,
    "kmeaning": "article, line",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "条件（じょうけん）",
        "conditions, terms"
      ],
      [
        "条約（じょうやく）",
        "treaty, pact"
      ],
      [
        "条項（じょうこう）",
        "article, stipulations"
      ],
      [
        "第九条（だいきゅうじょう）",
        "article number nine"
      ],
      [
        "信条（しんじょう）",
        "creed"
      ],
      [
        "星条旗（せいじょうき）",
        "Stars and Stripes"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "影",
    "kname": "ei-kage",
    "kstroke": 15,
    "kmeaning": "shadow, silhouette",
    "kgrade": "n/a",
    "kunyomi_ja": "かげ",
    "kunyomi": "kage",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "影響する（えいきょうする）",
        "influence [v.t.]"
      ],
      [
        "撮影する（さつえいする）",
        "take a picture, film a movie"
      ],
      [
        "投影する（とうえいする）",
        "project [v.t.]"
      ],
      [
        "陰影（いんえい）",
        "shading"
      ],
      [
        "影（かげ）",
        "shadow"
      ],
      [
        "影武者（かげむしゃ）",
        "Kagemusha (shadow warrior)"
      ],
      [
        "面影（おもかげ）",
        "vestiges"
      ]
    ],
    "radical": "⼺",
    "rad_order": 69,
    "rad_stroke": 3,
    "rad_name_ja": "さんづくり",
    "rad_name": "sanzukuri",
    "rad_meaning": "hair-style, light rays",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "響",
    "kname": "hibi(ku)",
    "kstroke": 20,
    "kmeaning": "reverberate, echo, resound, affect",
    "kgrade": "n/a",
    "kunyomi_ja": "ひび、ひびく、ひびき、ひびかす",
    "kunyomi": "hibi, hibiku, hibiki, hibikasu",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "影響する（えいきょうする）",
        "influence [v.t.]"
      ],
      [
        "反響する（はんきょうする）",
        "echo [v.i.]"
      ],
      [
        "音響（おんきょう）",
        "acoustic(s)"
      ],
      [
        "交響曲（こうきょうきょく）",
        "symphony"
      ],
      [
        "響く（ひびく）",
        "resound [v.i.]"
      ],
      [
        "響かす（ひびかす）",
        "make resound [v.t.]"
      ]
    ],
    "radical": "⾳",
    "rad_order": 216,
    "rad_stroke": 9,
    "rad_name_ja": "おと",
    "rad_name": "oto",
    "rad_meaning": "sound, noise",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "訪",
    "kname": "otozu(reru)",
    "kstroke": 11,
    "kmeaning": "visit",
    "kgrade": 6,
    "kunyomi_ja": "おとずれる、たずねる、おとず、たず",
    "kunyomi": "otozureru, tazuneru, otozu, tazu",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "歴訪する（れきほうする）",
        "make a tour of"
      ],
      [
        "訪問する（ほうもんする）",
        "visit [v.t.]"
      ],
      [
        "訪れる（おとずれる）",
        "visit [v.i., v.t.]"
      ],
      [
        "訪ねる（たずねる）",
        "visit [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "参",
    "kname": "san-mai(ru)",
    "kstroke": 8,
    "kmeaning": "participate, visit a holy place",
    "kgrade": 4,
    "kunyomi_ja": "まいる、まい",
    "kunyomi": "mairu, mai",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "参加する（さんかする）",
        "participate"
      ],
      [
        "参戦する（さんせんする）",
        "participate in a war"
      ],
      [
        "参拝する（さんぱいする）",
        "worship"
      ],
      [
        "持参する（じさんする）",
        "bring"
      ],
      [
        "降参する（こうさんする）",
        "surrender, give up [v.i.]"
      ],
      [
        "参考書（さんこうしょ）",
        "reference book"
      ],
      [
        "参議院（さんぎいん）",
        "House of Councilors"
      ],
      [
        "参る（まいる）",
        "visit, go [hum.], be beaten"
      ],
      [
        "墓参り（はかまいり）",
        "visit to a grave [n.]"
      ],
      [
        "*人参（にんじん）",
        "carrot"
      ]
    ],
    "radical": "⼛",
    "rad_order": 32,
    "rad_stroke": 2,
    "rad_name_ja": "む",
    "rad_name": "mu",
    "rad_meaning": "private, Katakana Mu",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "御",
    "kname": "go(chisou)",
    "kstroke": 12,
    "kmeaning": "general honorific term, polite prefix",
    "kgrade": "n/a",
    "kunyomi_ja": "おん",
    "kunyomi": "on",
    "onyomi_ja": "ギョ、ゴ",
    "onyomi": "gyo, go",
    "examples": [
      [
        "制御する（せいぎょする）",
        "control, restrain"
      ],
      [
        "防御する（ぼうぎょする）",
        "defend, protect"
      ],
      [
        "御両親（ごりょうしん）",
        "parents [hon.]"
      ],
      [
        "御家族（ごかぞく）",
        "family [hon.]"
      ],
      [
        "御自身（ごじしん）",
        "oneself [hon.]"
      ],
      [
        "御馳走（ごちそう）",
        "feast [n.]"
      ],
      [
        "御飯（ごはん）",
        "rice (cooked), meal"
      ],
      [
        "御存知（ごぞんじ）",
        "know [hon.]"
      ],
      [
        "御身（おんみ）",
        "(polite term for) your body [hon.]"
      ],
      [
        "*御日様（おひさま）",
        "sun"
      ],
      [
        "*御顔（おかお）",
        "face [hon.]"
      ],
      [
        "*御堂（みどう）",
        "temple building [hon.]"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "妹",
    "kname": "imouto",
    "kstroke": 8,
    "kmeaning": "younger sister",
    "kgrade": 2,
    "kunyomi_ja": "いもうと",
    "kunyomi": "imouto",
    "onyomi_ja": "マイ",
    "onyomi": "mai",
    "examples": [
      [
        "姉妹（しまい）",
        "sisters"
      ],
      [
        "姉妹校（しまいこう）",
        "sister school"
      ],
      [
        "妹（いもうと）",
        "one's own younger sister"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "果",
    "kname": "ha(tasu)",
    "kstroke": 8,
    "kmeaning": "fruit",
    "kgrade": 4,
    "kunyomi_ja": "はたす、はてる、はて、は",
    "kunyomi": "hatasu, hateru, hate, ha",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "果実（かじつ）",
        "fruit, nut"
      ],
      [
        "結果（けっか）",
        "result, consequence"
      ],
      [
        "効果（こうか）",
        "effect, effectiveness"
      ],
      [
        "因果関係（いんがかんけい）",
        "causal relationship"
      ],
      [
        "果たす（はたす）",
        "accomplish, fulfill [v.t.]"
      ],
      [
        "果てる（はてる）",
        "be exhausted, die [v.i]"
      ],
      [
        "果てしない（はてしない）",
        "endless"
      ],
      [
        "*果物（くだもの）",
        "fruit"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "慣",
    "kname": "kan-na(reru)",
    "kstroke": 14,
    "kmeaning": "habitual practice, get used",
    "kgrade": 5,
    "kunyomi_ja": "なれる、ならす、な",
    "kunyomi": "nareru, narasu, na",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "習慣（しゅうかん）",
        "custom, habit"
      ],
      [
        "慣例（かんれい）",
        "custom, convention"
      ],
      [
        "慣用句（かんようく）",
        "idiomatic phrase"
      ],
      [
        "慣れる（なれる）",
        "grow accustomed"
      ],
      [
        "使い慣らす（つかいならす）",
        "accustom oneself to using"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "専",
    "kname": "moppa(ra)",
    "kstroke": 9,
    "kmeaning": "exclusive",
    "kgrade": 6,
    "kunyomi_ja": "もっぱら、もっぱ",
    "kunyomi": "moppara, moppa",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "専門（せんもん）",
        "speciality"
      ],
      [
        "専攻（せんこう）",
        "major (at university)"
      ],
      [
        "専念する（せんねんする）",
        "devote oneself to [v.i.]"
      ],
      [
        "専ら（もっぱら）",
        "wholly, mostly"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "攻",
    "kname": "kou-se(meru)",
    "kstroke": 7,
    "kmeaning": "attack",
    "kgrade": "n/a",
    "kunyomi_ja": "せめる、せ",
    "kunyomi": "semeru, se",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "専攻（せんこう）",
        "major (at university)"
      ],
      [
        "攻撃する（こうげきする）",
        "attack [v.t.]"
      ],
      [
        "攻略する（こうりゃくする）",
        "capture"
      ],
      [
        "攻める（せめる）",
        "attack, criticize"
      ],
      [
        "質問攻め（しつもんぜめ）",
        "barrage of questions"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "趣",
    "kname": "omomuki",
    "kstroke": 15,
    "kmeaning": "flavor, taste, elegance",
    "kgrade": "n/a",
    "kunyomi_ja": "おもむき",
    "kunyomi": "omomuki",
    "onyomi_ja": "シュ",
    "onyomi": "shu",
    "examples": [
      [
        "趣味（しゅみ）",
        "hobby, interest, tastes"
      ],
      [
        "趣旨（しゅし）",
        "object, goal"
      ],
      [
        "趣向（しゅこう）",
        "plan, scheme"
      ],
      [
        "趣（おもむき）",
        "grace, refinement"
      ]
    ],
    "radical": "",
    "rad_order": 191,
    "rad_stroke": 7,
    "rad_name_ja": "そうにょう",
    "rad_name": "sounyou",
    "rad_meaning": "to run",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "賞",
    "kname": "shou(batsu)",
    "kstroke": 15,
    "kmeaning": "prize",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "賞金（しょうきん）",
        "monetary award"
      ],
      [
        "賞状（しょうじょう）",
        "certificate of merit"
      ],
      [
        "賞品（しょうひん）",
        "prize"
      ],
      [
        "一等賞（いっとうしょう）",
        "first prize"
      ],
      [
        "鑑賞する（かんしょうする）",
        "admire (art or decoration)"
      ],
      [
        "受賞する（じゅしょうする）",
        "win a prize"
      ],
      [
        "授賞する（じゅしょうする）",
        "award a prize"
      ],
      [
        "賞賛する（しょうさんする）",
        "praise, admire"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誌",
    "kname": "(shuukan)shi",
    "kstroke": 14,
    "kmeaning": "magazine",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "雑誌（ざっし）",
        "journal, magazine"
      ],
      [
        "日誌（にっし）",
        "diary"
      ],
      [
        "週刊誌（しゅうかんし）",
        "weekly publication"
      ],
      [
        "月刊誌（げっかんし）",
        "monthly publication"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "復",
    "kname": "fuku(shuu)",
    "kstroke": 12,
    "kmeaning": "return to, be restored",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "復習する（ふくしゅうする）",
        "review [v.t.]"
      ],
      [
        "復活する（ふっかつする）",
        "revive"
      ],
      [
        "復元する（ふくげんする）",
        "restore"
      ],
      [
        "復讐する（ふくしゅうする）",
        "take revenge [v.i.]"
      ],
      [
        "復職する（ふくしょくする）",
        "be reinstated"
      ],
      [
        "往復する（おうふくする）",
        "make a round trip"
      ],
      [
        "回復する（かいふくする）",
        "recover (from illness)"
      ],
      [
        "反復する（はんぷくする）",
        "repeat"
      ],
      [
        "報復する（ほうふくする）",
        "retaliate, take revenge"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "限",
    "kname": "kagi(ru)",
    "kstroke": 9,
    "kmeaning": "limit",
    "kgrade": 5,
    "kunyomi_ja": "かぎる、かぎり、かぎ",
    "kunyomi": "kagiru, kagiri, kagi",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "限度（げんど）",
        "limit [n.]"
      ],
      [
        "限界（げんかい）",
        "limit [n.]"
      ],
      [
        "期限（きげん）",
        "expiration date, due date"
      ],
      [
        "無限（むげん）",
        "infinity"
      ],
      [
        "最小限（さいしょうげん）",
        "minimum"
      ],
      [
        "最大限（さいだいげん）",
        "maximum"
      ],
      [
        "制限する（せいげんする）",
        "restrict, limit"
      ],
      [
        "限定する（げんていする）",
        "restrict, limit"
      ],
      [
        "限る（かぎる）",
        "restrict, limit"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "確",
    "kname": "tashi(kameru)",
    "kstroke": 15,
    "kmeaning": "certain, verify",
    "kgrade": 5,
    "kunyomi_ja": "たしか、たしかめる、たし",
    "kunyomi": "tashika, tashikameru, tashi",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "確率（かくりつ）",
        "probability"
      ],
      [
        "正確な（せいかくな）",
        "accurate, exact"
      ],
      [
        "明確な（めいかくな）",
        "clear"
      ],
      [
        "確実な（かくじつな）",
        "certain"
      ],
      [
        "確認する（かくにんする）",
        "confirm"
      ],
      [
        "確保する（かくほする）",
        "guarantee, ensure"
      ],
      [
        "確定する（かくていする）",
        "be settled"
      ],
      [
        "確信する（かくしんする）",
        "believe firmly, be sure"
      ],
      [
        "確かめる（たしかめる）",
        "check, ascertain"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "院",
    "kname": "(byou)in",
    "kstroke": 10,
    "kmeaning": "institution",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イン",
    "onyomi": "in",
    "examples": [
      [
        "大学院（だいがくいん）",
        "graduate school"
      ],
      [
        "病院（びょういん）",
        "hospital"
      ],
      [
        "美容院（びよういん）",
        "beauty salon"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "来",
    "kname": "rai-ku(ru)",
    "kstroke": 7,
    "kmeaning": "come",
    "kgrade": 2,
    "kunyomi_ja": "く、くる、きた、きたる",
    "kunyomi": "ku, kuru, kita, kitaru",
    "onyomi_ja": "ライ",
    "onyomi": "rai",
    "examples": [
      [
        "来月（らいげつ）",
        "next month"
      ],
      [
        "来週（らいしゅう）",
        "next week"
      ],
      [
        "来年（らいねん）",
        "next year"
      ],
      [
        "未来（みらい）",
        "future"
      ],
      [
        "将来（しょうらい）",
        "future"
      ],
      [
        "以来（いらい）",
        "since"
      ],
      [
        "来日する（らいにちする）",
        "visit Japan"
      ],
      [
        "来る（くる）",
        "come"
      ],
      [
        "来す（きたす）",
        "cause"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "保",
    "kname": "tamo(tsu)",
    "kstroke": 9,
    "kmeaning": "preserve",
    "kgrade": 5,
    "kunyomi_ja": "たもつ、たも",
    "kunyomi": "tamotsu, tamo",
    "onyomi_ja": "ホ",
    "onyomi": "ho",
    "examples": [
      [
        "保険（ほけん）",
        "insurance"
      ],
      [
        "保護者（ほごしゃ）",
        "guardian"
      ],
      [
        "保育園（ほいくえん）",
        "nursery school"
      ],
      [
        "保証する（ほしょうする）",
        "guarantee"
      ],
      [
        "保護する（ほごする）",
        "shelter, protect"
      ],
      [
        "保有する（ほゆうする）",
        "possess"
      ],
      [
        "保存する（ほぞんする）",
        "preserve, store"
      ],
      [
        "保管する（ほかんする）",
        "deposit, store"
      ],
      [
        "保つ（たもつ）",
        "keep, retain, maintain"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "証",
    "kname": "(menkyo)shou",
    "kstroke": 12,
    "kmeaning": "prove, certificate",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "証拠（しょうこ）",
        "evidence, proof"
      ],
      [
        "証人（しょうにん）",
        "witness [n.]"
      ],
      [
        "証言（しょうげん）",
        "testimony"
      ],
      [
        "証書（しょうしょ）",
        "certificate"
      ],
      [
        "証券（しょうけん）",
        "bonds, stock certificates"
      ],
      [
        "免許証（めんきょしょう）",
        "(driver's) license"
      ],
      [
        "保証する（ほしょうする）",
        "guarantee [v.t.]"
      ],
      [
        "証明する（しょうめいする）",
        "prove, verify"
      ],
      [
        "検証する（けんしょうする）",
        "inspect"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "追",
    "kname": "tsui-o(u)",
    "kstroke": 9,
    "kmeaning": "chase, pursue",
    "kgrade": 3,
    "kunyomi_ja": "おう、お",
    "kunyomi": "ou, o",
    "onyomi_ja": "ツイ",
    "onyomi": "tsui",
    "examples": [
      [
        "追伸（ついしん）",
        "postscript"
      ],
      [
        "追求する（ついきゅうする）",
        "investigate, pursue (goal)"
      ],
      [
        "追放する（ついほうする）",
        "exile [v.t.]"
      ],
      [
        "追加する（ついかする）",
        "add"
      ],
      [
        "追突する（ついとつする）",
        "collide"
      ],
      [
        "追う（おう）",
        "chase, pursue"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "便",
    "kname": "ben-tayo(ri)",
    "kstroke": 9,
    "kmeaning": "mail, post, convenient, excrement",
    "kgrade": 4,
    "kunyomi_ja": "たより、たよ",
    "kunyomi": "tayori, tayo",
    "onyomi_ja": "ビン、ベン",
    "onyomi": "bin, ben",
    "examples": [
      [
        "郵便（ゆうびん）",
        "postal service"
      ],
      [
        "別便（べつびん）",
        "separate mail"
      ],
      [
        "宅急便（たっきゅうびん）",
        "express home delivery"
      ],
      [
        "便利な（べんりな）",
        "convenient"
      ],
      [
        "不便な（ふべんな）",
        "inconvenient"
      ],
      [
        "便所（べんじょ）",
        "toilet"
      ],
      [
        "大便（だいべん）",
        "feces"
      ],
      [
        "小便（しょうべん）",
        "urine"
      ],
      [
        "便り（たより）",
        "news, letter"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "著",
    "kname": "ichijiru(shii)",
    "kstroke": 11,
    "kmeaning": "write, publish, author, remarkable, conspicuous",
    "kgrade": 6,
    "kunyomi_ja": "あらわす、いちじるしい、あらわ、いちじる",
    "kunyomi": "arawasu, ichijirushii, arawa, ichijiru",
    "onyomi_ja": "チョ",
    "onyomi": "cho",
    "examples": [
      [
        "著者（ちょしゃ）",
        "author"
      ],
      [
        "著作（ちょさく）",
        "book"
      ],
      [
        "著作権（ちょさくけん）",
        "copyright"
      ],
      [
        "共著（きょうちょ）",
        "co-authorship"
      ],
      [
        "名著（めいちょ）",
        "famous book"
      ],
      [
        "顕著な（けんちょな）",
        "remarkable"
      ],
      [
        "著名な（ちょめいな）",
        "well-known, celebrated"
      ],
      [
        "書き著す（かきあらわす）",
        "publish (a book)"
      ],
      [
        "著しい（いちじるしい）",
        "considerable"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "代",
    "kname": "dai-ka(waru)",
    "kstroke": 5,
    "kmeaning": "substitute, generation, charge",
    "kgrade": 3,
    "kunyomi_ja": "かわる、かわり、かえる、よ、しろ、か",
    "kunyomi": "kawaru, kawari, kaeru, yo, shiro, ka",
    "onyomi_ja": "ダイ、タイ",
    "onyomi": "dai, tai",
    "examples": [
      [
        "時代（じだい）",
        "era"
      ],
      [
        "現代（げんだい）",
        "modern times"
      ],
      [
        "世代（せだい）",
        "generation"
      ],
      [
        "10代（じゅうだい）",
        "years between age 10 and 19"
      ],
      [
        "70年代（ななじゅうねんだい）",
        "seventies"
      ],
      [
        "電気代（でんきだい）",
        "electric utility expenses"
      ],
      [
        "代表する（だいひょうする）",
        "represent"
      ],
      [
        "交代する（こうたいする）",
        "take turns, alternate"
      ],
      [
        "代わる（かわる）",
        "take the place of [v.i.]"
      ],
      [
        "代える（かえる）",
        "exchange, replace [v.t.]"
      ],
      [
        "明治の代（めいじのよ）",
        "Meiji era"
      ],
      [
        "身代金（みのしろきん）",
        "ransom"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "抜",
    "kname": "nu(kasu)",
    "kstroke": 7,
    "kmeaning": "pull out, stand out, surpass",
    "kgrade": "n/a",
    "kunyomi_ja": "ぬく、ぬき、ぬける、ぬかす、ぬかる、ぬ",
    "kunyomi": "nuku, nuki, nukeru, nukasu, nukaru, nu",
    "onyomi_ja": "バツ",
    "onyomi": "batsu",
    "examples": [
      [
        "抜群（ばつぐん）",
        "pre-eminence"
      ],
      [
        "海抜（かいばつ）",
        "height above sea level"
      ],
      [
        "奇抜な（きばつな）",
        "original, eccentric"
      ],
      [
        "抜本的な（ばっぽんてきな）",
        "drastic, radical"
      ],
      [
        "抜粋する（ばっすいする）",
        "extract, select"
      ],
      [
        "選抜する（せんばつする）",
        "select"
      ],
      [
        "抜ける（ぬける）",
        "come out, be missing, [v.i.]"
      ],
      [
        "抜く（ぬく）",
        "draw out, unplug [v.t.]"
      ],
      [
        "抜かす（ぬかす）",
        "omit, leave out [v.t.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "肩",
    "kname": "ken-kata",
    "kstroke": 8,
    "kmeaning": "shoulder",
    "kgrade": "n/a",
    "kunyomi_ja": "かた",
    "kunyomi": "kata",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "肩甲骨（けんこうこつ）",
        "shoulder-blade"
      ],
      [
        "強肩（きょうけん）",
        "strong throwing arm"
      ],
      [
        "肩（かた）",
        "shoulder"
      ],
      [
        "肩書き（かたがき）",
        "title"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "伺",
    "kname": "shi-ukaga(u)",
    "kstroke": 7,
    "kmeaning": "inquire",
    "kgrade": "n/a",
    "kunyomi_ja": "うかがう、うかがい、うかが",
    "kunyomi": "ukagau, ukagai, ukaga",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "奉伺する（ほうしする）",
        "inquire about (one's health)"
      ],
      [
        "伺う（うかがう）",
        "visit, ask [hum.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "材",
    "kname": "(moku)zai",
    "kstroke": 7,
    "kmeaning": "timber, material",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ザイ",
    "onyomi": "zai",
    "examples": [
      [
        "教材（きょうざい）",
        "teaching materials"
      ],
      [
        "木材（もくざい）",
        "lumber, timber"
      ],
      [
        "人材（じんざい）",
        "man of talent"
      ],
      [
        "素材（そざい）",
        "raw materials"
      ],
      [
        "材料（ざいりょう）",
        "ingredients"
      ],
      [
        "材質（ざいしつ）",
        "quality of material"
      ],
      [
        "取材する（しゅざいする）",
        "gather material (for news story)"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "起",
    "kname": "o(kiru)",
    "kstroke": 10,
    "kmeaning": "rise, get up",
    "kgrade": 3,
    "kunyomi_ja": "お、おきる、おこす",
    "kunyomi": "o, okiru, okosu",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "起床する（きしょうする）",
        "get out of bed"
      ],
      [
        "提起する（ていきする）",
        "raise (a question/demand)"
      ],
      [
        "起訴する（きそする）",
        "prosecute"
      ],
      [
        "起きる（おきる）",
        "get up, happen [v.i.]"
      ],
      [
        "起こす（おこす）",
        "wake someone, cause [v.t.]"
      ],
      [
        "早起きする（はやおきする）",
        "wake up early"
      ]
    ],
    "radical": "",
    "rad_order": 191,
    "rad_stroke": 7,
    "rad_name_ja": "そうにょう",
    "rad_name": "sounyou",
    "rad_meaning": "to run",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "残",
    "kname": "zan-noko(ru)",
    "kstroke": 10,
    "kmeaning": "remain, ruthless",
    "kgrade": 4,
    "kunyomi_ja": "のこる、のこす、のこり、のこ",
    "kunyomi": "nokoru, nokosu, nokori, noko",
    "onyomi_ja": "ザン",
    "onyomi": "zan",
    "examples": [
      [
        "残念な（ざんねんな）",
        "unfortunate, disappointing"
      ],
      [
        "残酷な（ざんこくな）",
        "cruel"
      ],
      [
        "残業（ざんぎょう）",
        "overtime (work)"
      ],
      [
        "残高（ざんだか）",
        "(bank) balance"
      ],
      [
        "残雪（ざんせつ）",
        "lingering snow"
      ],
      [
        "残る（のこる）",
        "remain, be left [v.i.]"
      ],
      [
        "残す（のこす）",
        "leave (behind), reserve [v.t.]"
      ],
      [
        "*名残（なごり）",
        "remains, traces"
      ]
    ],
    "radical": "",
    "rad_order": 102,
    "rad_stroke": 4,
    "rad_name_ja": "がつへん",
    "rad_name": "gatsuhen",
    "rad_meaning": "death & dying, to decompose",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "念",
    "kname": "(zan)nen",
    "kstroke": 8,
    "kmeaning": "thought, desire, attention",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ネン",
    "onyomi": "nen",
    "examples": [
      [
        "残念な（ざんねんな）",
        "unfortunate, disappointing"
      ],
      [
        "概念（がいねん）",
        "idea, notion"
      ],
      [
        "信念（しんねん）",
        "faith, conviction"
      ],
      [
        "記念日（きねんび）",
        "anniversary"
      ],
      [
        "念願（ねんがん）",
        "one's heart's desire"
      ],
      [
        "記念する（きねんする）",
        "commemorate"
      ],
      [
        "専念する（せんねんする）",
        "devote oneself to [v.i.]"
      ],
      [
        "断念する（だんねんする）",
        "abandon (hope, plan)"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "恥",
    "kname": "ha(zukashii)",
    "kstroke": 10,
    "kmeaning": "shame, disgrace, shy",
    "kgrade": "n/a",
    "kunyomi_ja": "は、はじ、はじらう、はじらい、はじる、はずかしい",
    "kunyomi": "ha, haji, hajirau, hajirai, hajiru, hazukashii",
    "onyomi_ja": "チ",
    "onyomi": "chi",
    "examples": [
      [
        "恥辱（ちじょく）",
        "disgrace, shame"
      ],
      [
        "羞恥心（しゅうちしん）",
        "shyness"
      ],
      [
        "厚顔無恥な（こうがんむちな）",
        "brazen and unscrupulous"
      ],
      [
        "恥（はじ）",
        "shame, embarrassment"
      ],
      [
        "恥ずかしい（はずかしい）",
        "shy, be embarrassed"
      ],
      [
        "恥じる（はじる）",
        "feel ashamed"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "都",
    "kname": "to-miyako",
    "kstroke": 11,
    "kmeaning": "capital (city), metropolis",
    "kgrade": 3,
    "kunyomi_ja": "みやこ",
    "kunyomi": "miyako",
    "onyomi_ja": "ト、ツ",
    "onyomi": "to, tsu",
    "examples": [
      [
        "都市（とし）",
        "city"
      ],
      [
        "都会（とかい）",
        "city"
      ],
      [
        "都心（としん）",
        "heart (of city)"
      ],
      [
        "都営（とえい）",
        "municipally owned"
      ],
      [
        "都立（とりつ）",
        "municipal"
      ],
      [
        "都庁（とちょう）",
        "Tokyo Government Office"
      ],
      [
        "東京都（とうきょうと）",
        "Tokyo Metropolitan area"
      ],
      [
        "京都（きょうと）",
        "Kyoto"
      ],
      [
        "首都（しゅと）",
        "capital city"
      ],
      [
        "都合（つごう）",
        "circumstances, convenience"
      ],
      [
        "都度（つど）",
        "each (every) time"
      ],
      [
        "都（みやこ）",
        "metropolis, city, capital"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "洗",
    "kname": "sen-ara(u)",
    "kstroke": 9,
    "kmeaning": "wash",
    "kgrade": 6,
    "kunyomi_ja": "あらう、あら",
    "kunyomi": "arau, ara",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "洗顔する（せんがんする）",
        "wash one's face"
      ],
      [
        "洗髪する（せんぱつする）",
        "wash one's hair"
      ],
      [
        "洗練する（せんれんする）",
        "polish, refine"
      ],
      [
        "洗面所（せんめんじょ）",
        "washroom, bathroom"
      ],
      [
        "洗濯機（せんたくき）",
        "washing machine"
      ],
      [
        "洗剤（せんざい）",
        "detergent"
      ],
      [
        "洗う（あらう）",
        "wash"
      ],
      [
        "お手洗い（おてあらい）",
        "restroom"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "州",
    "kname": "shuu(ritsu)",
    "kstroke": 6,
    "kmeaning": "state",
    "kgrade": 3,
    "kunyomi_ja": "す",
    "kunyomi": "su",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "州（しゅう）",
        "state"
      ],
      [
        "州立（しゅうりつ）",
        "state-run"
      ],
      [
        "州都（しゅうと）",
        "state capital"
      ],
      [
        "九州（きゅうしゅう）",
        "Kyushu"
      ],
      [
        "本州（ほんしゅう）",
        "Honshu"
      ],
      [
        "イリノイ州（イリノイしゅう）",
        "state of Illinois"
      ],
      [
        "三角州（さんかくす）",
        "delta"
      ]
    ],
    "radical": "川",
    "rad_order": 56,
    "rad_stroke": 3,
    "rad_name_ja": "さんぼんがわ",
    "rad_name": "sanbongawa",
    "rad_meaning": "river",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "福",
    "kname": "(dai)fuku",
    "kstroke": 13,
    "kmeaning": "fortune",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "福岡（ふくおか）",
        "Fukuoka"
      ],
      [
        "福利（ふくり）",
        "welfare"
      ],
      [
        "福祉（ふくし）",
        "social welfare"
      ],
      [
        "祝福する（しゅくふくする）",
        "bless"
      ],
      [
        "幸福な（こうふくな）",
        "happy, blessed"
      ],
      [
        "裕福な（ゆうふくな）",
        "affluent"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "側",
    "kname": "soku(men)",
    "kstroke": 11,
    "kmeaning": "side",
    "kgrade": 4,
    "kunyomi_ja": "かわ",
    "kunyomi": "kawa",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "側面（そくめん）",
        "side"
      ],
      [
        "側近（そっきん）",
        "close advisor"
      ],
      [
        "東側（ひがしがわ）",
        "east side"
      ],
      [
        "右側（みぎがわ）",
        "right side"
      ],
      [
        "反対側（はんたいがわ）",
        "opposite side"
      ],
      [
        "内側（うちがわ）",
        "inside"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "恐",
    "kname": "oso(roshii)",
    "kstroke": 10,
    "kmeaning": "fear",
    "kgrade": "n/a",
    "kunyomi_ja": "おそれる、おそる、おそろしい、おそ",
    "kunyomi": "osoreru, osoru, osoroshii, oso",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "恐怖（きょうふ）",
        "terror"
      ],
      [
        "恐慌（きょうこう）",
        "financial panic"
      ],
      [
        "恐竜（きょうりゅう）",
        "dinosaur"
      ],
      [
        "恐妻家（きょうさいか）",
        "hen-pecked husband"
      ],
      [
        "恐縮する（きょうしゅくする）",
        "feel obliged, indebted"
      ],
      [
        "恐らく（おそらく）",
        "perhaps"
      ],
      [
        "恐れる（おそれる）",
        "fear [v.t.]"
      ],
      [
        "恐る恐る（おそるおそる）",
        "timidly"
      ],
      [
        "恐ろしい（おそろしい）",
        "terrible, dreadful"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "敗",
    "kname": "hai-yabu(reru)",
    "kstroke": 11,
    "kmeaning": "be defeated",
    "kgrade": 4,
    "kunyomi_ja": "やぶれる、やぶ",
    "kunyomi": "yabureru, yabu",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "勝敗（しょうはい）",
        "victory or defeat"
      ],
      [
        "敗戦（はいせん）",
        "defeat (in war)"
      ],
      [
        "敗北する（はいぼくする）",
        "be defeated [v.i.]"
      ],
      [
        "腐敗する（ふはいする）",
        "decay [v.i.]"
      ],
      [
        "失敗する（しっぱいする）",
        "fail, make a mistake"
      ],
      [
        "敗れる（やぶれる）",
        "be defeated [v.i.]"
      ],
      [
        "敗る（やぶる）",
        "defeat [v.t.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "毎",
    "kname": "goto",
    "kstroke": 6,
    "kmeaning": "every",
    "kgrade": 2,
    "kunyomi_ja": "ごと",
    "kunyomi": "goto",
    "onyomi_ja": "マイ",
    "onyomi": "mai",
    "examples": [
      [
        "毎朝（まいあさ）",
        "every morning"
      ],
      [
        "毎日（まいにち）",
        "every day"
      ],
      [
        "毎回（まいかい）",
        "every time"
      ],
      [
        "毎度（まいど）",
        "each time"
      ],
      [
        "毎週（まいしゅう）",
        "every week"
      ],
      [
        "三日毎に（みっかごとに）",
        "every 3 days"
      ]
    ],
    "radical": "⽏",
    "rad_order": 104,
    "rad_stroke": 4,
    "rad_name_ja": "なかれ",
    "rad_name": "nakare",
    "rad_meaning": "not, mother",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "比",
    "kname": "hi-kura(beru)",
    "kstroke": 4,
    "kmeaning": "compare",
    "kgrade": 5,
    "kunyomi_ja": "くらべる、くら",
    "kunyomi": "kuraberu, kura",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "比較的な（ひかくてきな）",
        "comparatively, relatively"
      ],
      [
        "比率（ひりつ）",
        "ratio, proportion"
      ],
      [
        "比喩（ひゆ）",
        "simile, metaphor"
      ],
      [
        "比較する（ひかくする）",
        "compare"
      ],
      [
        "比例する（ひれいする）",
        "be in proportion to"
      ],
      [
        "対比する（たいひする）",
        "contrast with"
      ],
      [
        "比べる（くらべる）",
        "compare"
      ]
    ],
    "radical": "⽐",
    "rad_order": 105,
    "rad_stroke": 4,
    "rad_name_ja": "くらべる",
    "rad_name": "kuraberu",
    "rad_meaning": "to compare",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "倍",
    "kname": "bai(ritsu)",
    "kstroke": 10,
    "kmeaning": "times, double",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "バイ",
    "onyomi": "bai",
    "examples": [
      [
        "百倍（ひゃくばい）",
        "hundredfold"
      ],
      [
        "倍率（ばいりつ）",
        "magnification rate"
      ],
      [
        "倍数（ばいすう）",
        "multiple [n.]"
      ],
      [
        "倍増する（ばいぞうする）",
        "double"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "詩",
    "kname": "(joji)shi",
    "kstroke": 13,
    "kmeaning": "poetry, poem",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "詩（し）",
        "poem"
      ],
      [
        "詩人（しじん）",
        "poet"
      ],
      [
        "詩集（ししゅう）",
        "poetry collection"
      ],
      [
        "詩的な（してきな）",
        "poetic"
      ],
      [
        "漢詩（かんし）",
        "Chinese poetry"
      ],
      [
        "叙事詩（じょじし）",
        "epic poem"
      ],
      [
        "*詩歌（しいか）",
        "poem"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "素",
    "kname": "su-moto",
    "kstroke": 10,
    "kmeaning": "element, plain",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソ、ス",
    "onyomi": "so, su",
    "examples": [
      [
        "要素（ようそ）",
        "element"
      ],
      [
        "酸素（さんそ）",
        "oxygen"
      ],
      [
        "素材（そざい）",
        "raw materials"
      ],
      [
        "素朴な（そぼくな）",
        "simple, artless"
      ],
      [
        "簡素な（かんそな）",
        "simple, plain"
      ],
      [
        "質素な（しっそな）",
        "frugal"
      ],
      [
        "素晴らしい（すばらしい）",
        "wonderful, splendid"
      ],
      [
        "素足（すあし）",
        "bare feet"
      ],
      [
        "素敵な（すてきな）",
        "lovely, beautiful"
      ],
      [
        "素直な（すなおな）",
        "obedient, docile"
      ],
      [
        "*素人（しろうと）",
        "amateur, novice"
      ]
    ],
    "radical": "⽷",
    "rad_order": 157,
    "rad_stroke": 6,
    "rad_name_ja": "いと",
    "rad_name": "ito",
    "rad_meaning": "thread",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "胸",
    "kname": "kyou-mune",
    "kstroke": 10,
    "kmeaning": "chest, breast",
    "kgrade": 6,
    "kunyomi_ja": "むね、むな",
    "kunyomi": "mune, muna",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "胸囲（きょうい）",
        "chest measurement"
      ],
      [
        "胸中（きょうちゅう）",
        "one's heart, one's mind"
      ],
      [
        "度胸（どきょう）",
        "bravery, grit"
      ],
      [
        "胸（むね）",
        "breast, chest"
      ],
      [
        "胸元（むなもと）",
        "breast, pit of stomach"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "打",
    "kname": "da-u(tsu)",
    "kstroke": 5,
    "kmeaning": "strike, hit",
    "kgrade": 3,
    "kunyomi_ja": "うつ、うち",
    "kunyomi": "utsu, uchi",
    "onyomi_ja": "ダ",
    "onyomi": "da",
    "examples": [
      [
        "打者（だしゃ）",
        "batter (baseball)"
      ],
      [
        "打率（だりつ）",
        "batting average"
      ],
      [
        "打撃（だげき）",
        "damage, batting (baseball)"
      ],
      [
        "打算的な（ださんてきな）",
        "calculating, mercenary"
      ],
      [
        "打破する（だはする）",
        "overthrow, abolish"
      ],
      [
        "打診する（だしんする）",
        "sound someone out"
      ],
      [
        "打倒する（だとうする）",
        "knockdown, overthrow"
      ],
      [
        "打つ（うつ）",
        "hit, strike"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "厳",
    "kname": "kibi(shii)",
    "kstroke": 17,
    "kmeaning": "severe, strict, solemn",
    "kgrade": 6,
    "kunyomi_ja": "おごそか、きびしい、おごそ、きび",
    "kunyomi": "ogosoka, kibishii, ogoso, kibi",
    "onyomi_ja": "ゲン、ゴン",
    "onyomi": "gen, gon",
    "examples": [
      [
        "厳冬（げんとう）",
        "severe winter"
      ],
      [
        "威厳（いげん）",
        "dignity"
      ],
      [
        "戒厳令（かいげんれい）",
        "martial law"
      ],
      [
        "厳格な（げんかくな）",
        "severe, strict, rigid"
      ],
      [
        "厳密な（げんみつな）",
        "accurate"
      ],
      [
        "厳重な（げんじゅうな）",
        "strict, austere"
      ],
      [
        "厳守する（げんしゅする）",
        "observe (a rule) strictly"
      ],
      [
        "荘厳な（そうごんな）",
        "solemn, sublime, majestic"
      ],
      [
        "厳かな（おごそかな）",
        "solemn"
      ],
      [
        "厳しい（きびしい）",
        "intense (e.g. cold), severe, strict"
      ]
    ],
    "radical": "⺍",
    "rad_order": 75,
    "rad_stroke": 3,
    "rad_name_ja": "つ",
    "rad_name": "tsu",
    "rad_meaning": "Katakana Tsu",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "優",
    "kname": "yuu-yasa(shii)",
    "kstroke": 17,
    "kmeaning": "superior, actor, gentle, excel",
    "kgrade": 6,
    "kunyomi_ja": "やさし、やさしさ、すぐれる、やさ、すぐ",
    "kunyomi": "yasashi, yasashisa, sugureru, yasa, sugu",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "俳優（はいゆう）",
        "actor, actress"
      ],
      [
        "男優（だんゆう）",
        "actor"
      ],
      [
        "女優（じょゆう）",
        "actress"
      ],
      [
        "優先権（ゆうせんけん）",
        "priority"
      ],
      [
        "優等生（ゆうとうせい）",
        "honor student"
      ],
      [
        "優越感（ゆうえつかん）",
        "superiority complex"
      ],
      [
        "優秀な（ゆうしゅうな）",
        "superior, excellent"
      ],
      [
        "優雅な（ゆうがな）",
        "elegant, refined"
      ],
      [
        "優勝する（ゆうしょうする）",
        "win a championship"
      ],
      [
        "優先する（ゆうせんする）",
        "prioritize"
      ],
      [
        "優しい（やさしい）",
        "tender, kind, gentle"
      ],
      [
        "優れる（すぐれる）",
        "excel"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "可",
    "kname": "ka(nousei)",
    "kstroke": 5,
    "kmeaning": "",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "可能性（かのうせい）",
        "potentiality, possibility"
      ],
      [
        "可燃物（かねんぶつ）",
        "flammable materials"
      ],
      [
        "可愛らしい（かわいらしい）",
        "lovely, sweet"
      ],
      [
        "可能な（かのうな）",
        "possible"
      ],
      [
        "不可能な（ふかのうな）",
        "impossible"
      ],
      [
        "不可分な（ふかぶんな）",
        "indivisible"
      ],
      [
        "不可解な（ふかかいな）",
        "mysterious, baffling"
      ],
      [
        "可決する（かけつする）",
        "approve"
      ],
      [
        "許可する（きょかする）",
        "permit [v.t.]"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "形",
    "kname": "katachi",
    "kstroke": 7,
    "kmeaning": "shape",
    "kgrade": 2,
    "kunyomi_ja": "かた、かたち",
    "kunyomi": "kata, katachi",
    "onyomi_ja": "ケイ、ギョウ",
    "onyomi": "kei, gyou",
    "examples": [
      [
        "形容詞（けいようし）",
        "adjective"
      ],
      [
        "形式（けいしき）",
        "form, format"
      ],
      [
        "正方形（せいほうけい）",
        "square"
      ],
      [
        "長方形（ちょうほうけい）",
        "rectangle"
      ],
      [
        "形成する（けいせいする）",
        "form [v.t.]"
      ],
      [
        "変形する（へんけいする）",
        "be transformed, transform"
      ],
      [
        "人形（にんぎょう）",
        "doll"
      ],
      [
        "形見（かたみ）",
        "memento"
      ],
      [
        "手形（てがた）",
        "draft, promissory note"
      ],
      [
        "卵形（たまごがた）",
        "oval, egg-shaped"
      ],
      [
        "形（かたち）",
        "shape"
      ]
    ],
    "radical": "⼺",
    "rad_order": 69,
    "rad_stroke": 3,
    "rad_name_ja": "さんづくり",
    "rad_name": "sanzukuri",
    "rad_meaning": "hair-style, light rays",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "朝",
    "kname": "chou-asa",
    "kstroke": 12,
    "kmeaning": "morning, dynasty",
    "kgrade": 2,
    "kunyomi_ja": "あさ",
    "kunyomi": "asa",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "朝食（ちょうしょく）",
        "breakfast"
      ],
      [
        "朝刊（ちょうかん）",
        "morning newspaper"
      ],
      [
        "平安朝（へいあんちょう）",
        "Heian period"
      ],
      [
        "朝（あさ）",
        "morning"
      ],
      [
        "毎朝（まいあさ）",
        "every morning"
      ],
      [
        "朝日（あさひ）",
        "morning sun"
      ],
      [
        "朝御飯（あさごはん）",
        "breakfast"
      ],
      [
        "*今朝（けさ）",
        "this morning"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "詞",
    "kname": "(zenchi)shi",
    "kstroke": 12,
    "kmeaning": "words",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "形容詞（けいようし）",
        "adjective"
      ],
      [
        "動詞（どうし）",
        "verb"
      ],
      [
        "名詞（めいし）",
        "noun"
      ],
      [
        "助詞（じょし）",
        "particle, postposition"
      ],
      [
        "歌詞（かし）",
        "song lyrics"
      ],
      [
        "作詞する（さくしする）",
        "write a song"
      ],
      [
        "*祝詞（のりと）",
        "Shinto ritual prayer"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "程",
    "kname": "hodo",
    "kstroke": 12,
    "kmeaning": "extent, established form, degree",
    "kgrade": 5,
    "kunyomi_ja": "ほど",
    "kunyomi": "hodo",
    "onyomi_ja": "テイ",
    "onyomi": "tei",
    "examples": [
      [
        "程度（ていど）",
        "degree, grade"
      ],
      [
        "音程（おんてい）",
        "musical interval"
      ],
      [
        "過程（かてい）",
        "process"
      ],
      [
        "日程（にってい）",
        "itinerary, day's agenda"
      ],
      [
        "方程式（ほうていしき）",
        "equation"
      ],
      [
        "程（ほど）",
        "degree, extent"
      ],
      [
        "三日程（みっかほど）",
        "about three days"
      ],
      [
        "先程（さきほど）",
        "some time ago"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "命",
    "kname": "inochi",
    "kstroke": 8,
    "kmeaning": "order, life",
    "kgrade": 3,
    "kunyomi_ja": "いのち",
    "kunyomi": "inochi",
    "onyomi_ja": "メイ、ミョウ",
    "onyomi": "mei, myou",
    "examples": [
      [
        "使命（しめい）",
        "mission"
      ],
      [
        "運命（うんめい）",
        "fate"
      ],
      [
        "生命（せいめい）",
        "life"
      ],
      [
        "革命（かくめい）",
        "revolution"
      ],
      [
        "任命する（にんめいする）",
        "appoint"
      ],
      [
        "命令する（めいれいする）",
        "order, command [v.t.]"
      ],
      [
        "命中する（めいちゅうする）",
        "hit a target"
      ],
      [
        "命じる（めいじる）",
        "order, command [v.t.]"
      ],
      [
        "寿命（じゅみょう）",
        "life expectancy"
      ],
      [
        "命（いのち）",
        "life"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "令",
    "kname": "(mei)rei",
    "kstroke": 5,
    "kmeaning": "command",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "レイ",
    "onyomi": "rei",
    "examples": [
      [
        "命令する（めいれいする）",
        "order, command [v.t.]"
      ],
      [
        "辞令（じれい）",
        "notice of personnel change"
      ],
      [
        "号令（ごうれい）",
        "word of command, order"
      ],
      [
        "政令（せいれい）",
        "government ordinance"
      ],
      [
        "戒厳令（かいげんれい）",
        "martial law"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "容",
    "kname": "(bi)you",
    "kstroke": 10,
    "kmeaning": "appearance, contain",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "形容詞（けいようし）",
        "adjective"
      ],
      [
        "美容院（びよういん）",
        "beauty salon"
      ],
      [
        "内容（ないよう）",
        "contents, details"
      ],
      [
        "容器（ようき）",
        "container"
      ],
      [
        "容姿（ようし）",
        "appearance"
      ],
      [
        "容量（ようりょう）",
        "capacity"
      ],
      [
        "容態（ようだい/ようたい）",
        "one's condition, health"
      ],
      [
        "容疑者（ようぎしゃ）",
        "suspect [n.]"
      ],
      [
        "許容する（きょようする）",
        "pardon [v.t.]"
      ],
      [
        "収容する（しゅうようする）",
        "house, seat [v.t.]"
      ],
      [
        "受容する（じゅようする）",
        "accept, receive"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "議",
    "kname": "(fushi)gi",
    "kstroke": 20,
    "kmeaning": "discuss, legislative body, deliberation",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ギ",
    "onyomi": "gi",
    "examples": [
      [
        "議会（ぎかい）",
        "congress"
      ],
      [
        "議員（ぎいん）",
        "member of congress"
      ],
      [
        "議長（ぎちょう）",
        "chairman"
      ],
      [
        "議題（ぎだい）",
        "topic of discussion"
      ],
      [
        "議論（ぎろん）",
        "argument, discussion"
      ],
      [
        "会議（かいぎ）",
        "meeting, conference"
      ],
      [
        "異議（いぎ）",
        "objection, dissent"
      ],
      [
        "衆議院（しゅうぎいん）",
        "House of Representatives"
      ],
      [
        "参議院（さんぎいん）",
        "House of Councilors"
      ],
      [
        "不思議な（ふしぎな）",
        "strange, mysterious"
      ],
      [
        "論議する（ろんぎする）",
        "argue, discuss"
      ],
      [
        "審議する（しんぎする）",
        "discuss a case (e.g. law)"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "印",
    "kname": "in-shirushi",
    "kstroke": 6,
    "kmeaning": "mark, seal, stamp",
    "kgrade": 4,
    "kunyomi_ja": "しるし",
    "kunyomi": "shirushi",
    "onyomi_ja": "イン",
    "onyomi": "in",
    "examples": [
      [
        "印象（いんしょう）",
        "impression"
      ],
      [
        "印鑑（いんかん）",
        "stamp [n.]"
      ],
      [
        "印税（いんぜい）",
        "royalty (on book)"
      ],
      [
        "消印（けしいん）",
        "postmark"
      ],
      [
        "印刷する（いんさつする）",
        "print [v.t.]"
      ],
      [
        "印（しるし）",
        "mark [n.]"
      ],
      [
        "目印（めじるし）",
        "mark, landmark"
      ],
      [
        "矢印（やじるし）",
        "arrow mark, signpost"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "象",
    "kname": "(afurika)zou",
    "kstroke": 12,
    "kmeaning": "phenomenon, elephant",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ、ゾウ",
    "onyomi": "shou, zou",
    "examples": [
      [
        "印象（いんしょう）",
        "impression"
      ],
      [
        "対象（たいしょう）",
        "target, object, subject"
      ],
      [
        "現象（げんしょう）",
        "phenomenon"
      ],
      [
        "気象（きしょう）",
        "climate"
      ],
      [
        "抽象的（ちゅうしょうてき）",
        "abstract"
      ],
      [
        "象徴する（しょうちょうする）",
        "symbolize"
      ],
      [
        "象形文字（しょうけいもじ）",
        "hieroglyph"
      ],
      [
        "象（ぞう）",
        "elephant"
      ],
      [
        "象牙（ぞうげ）",
        "ivory"
      ]
    ],
    "radical": "⾗",
    "rad_order": 186,
    "rad_stroke": 7,
    "rad_name_ja": "いのこ",
    "rad_name": "inoko",
    "rad_meaning": "pig",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "句",
    "kname": "(hai)ku",
    "kstroke": 5,
    "kmeaning": "phrase, haiku, verse",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ク",
    "onyomi": "ku",
    "examples": [
      [
        "文句（もんく）",
        "phrase, complaint"
      ],
      [
        "慣用句（かんようく）",
        "idiomatic phrase"
      ],
      [
        "語句（ごく）",
        "words and phrases"
      ],
      [
        "俳句（はいく）",
        "haiku poetry"
      ],
      [
        "句読点（くとうてん）",
        "punctuation marks"
      ],
      [
        "句会（くかい）",
        "gathering of haiku poets"
      ],
      [
        "句集（くしゅう）",
        "collection of haiku poems"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "線",
    "kname": "(suihei)sen",
    "kstroke": 15,
    "kmeaning": "line",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "線（せん）",
        "line [n.]"
      ],
      [
        "線路（せんろ）",
        "train track"
      ],
      [
        "直線（ちょくせん）",
        "straight line"
      ],
      [
        "曲線（きょくせん）",
        "curve"
      ],
      [
        "電線（でんせん）",
        "electric wire"
      ],
      [
        "戦線（せんせん）",
        "front (in a war)"
      ],
      [
        "前線（ぜんせん）",
        "front line, weather front"
      ],
      [
        "沿線（えんせん）",
        "along a train line"
      ],
      [
        "一番線（いちばんせん）",
        "Track No. 1"
      ],
      [
        "新幹線（しんかんせん）",
        "Shinkansen"
      ],
      [
        "水平線（すいへいせん）",
        "horizon"
      ],
      [
        "脱線する（だっせんする）",
        "derail, digress"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "晩",
    "kname": "(kon)ban",
    "kstroke": 12,
    "kmeaning": "evening",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "バン",
    "onyomi": "ban",
    "examples": [
      [
        "今晩（こんばん）",
        "tonight"
      ],
      [
        "明晩（みょうばん）",
        "tomorrow evening"
      ],
      [
        "昨晩（さくばん）",
        "last night"
      ],
      [
        "毎晩（まいばん）",
        "every night"
      ],
      [
        "晩御飯（ばんごはん）",
        "dinner"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "輩",
    "kname": "(jaku)hai",
    "kstroke": 15,
    "kmeaning": "fellow",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "後輩（こうはい）",
        "junior (at work or school)"
      ],
      [
        "若輩（じゃくはい）",
        "young or inexperienced person"
      ],
      [
        "吾輩（わがはい）",
        "I (nuance of arrogance)"
      ],
      [
        "我が輩（わがはい）",
        "I (nuance of arrogance)"
      ],
      [
        "先輩（せんぱい）",
        "senior (at work or school)"
      ]
    ],
    "radical": "⾞",
    "rad_order": 195,
    "rad_stroke": 7,
    "rad_name_ja": "くるま",
    "rad_name": "kuruma",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "倒",
    "kname": "tao(su)",
    "kstroke": 10,
    "kmeaning": "topple, collapse, fall over",
    "kgrade": "n/a",
    "kunyomi_ja": "たおれる、たおす、たお",
    "kunyomi": "taoreru, taosu, tao",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "倒産する（とうさんする）",
        "go bankrupt (corporate)"
      ],
      [
        "転倒する（てんとうする）",
        "tumble, fall down, be upset"
      ],
      [
        "卒倒する（そっとうする）",
        "faint [v.i.]"
      ],
      [
        "打倒する（だとうする）",
        "knockdown, overthrow"
      ],
      [
        "圧倒する（あっとうする）",
        "overwhelm"
      ],
      [
        "面倒な（めんどうな）",
        "tiresome"
      ],
      [
        "面倒臭い（めんどうくさい）",
        "tiresome"
      ],
      [
        "倒れる（たおれる）",
        "collapse, fall down [v.i.]"
      ],
      [
        "倒す（たおす）",
        "beat, knock down [v.t.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "応",
    "kname": "ou(jiru)",
    "kstroke": 7,
    "kmeaning": "respond, reply",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "オウ、ノウ",
    "onyomi": "ou, nou",
    "examples": [
      [
        "応じる（おうじる）",
        "respond, satisfy, accept [v.i.]"
      ],
      [
        "応募する（おうぼする）",
        "apply (e.g. position)"
      ],
      [
        "応答する（おうとうする）",
        "reply, answer [v.i.]"
      ],
      [
        "応援する（おうえんする）",
        "aid, support, cheer"
      ],
      [
        "応用する（おうようする）",
        "apply, put to practical use"
      ],
      [
        "対応する（たいおうする）",
        "cope with, deal with"
      ],
      [
        "適応する（てきおうする）",
        "adapt, accommodate, conform"
      ],
      [
        "反応する（はんのうする）",
        "react, respond"
      ],
      [
        "順応する（じゅんのうする）",
        "adapt"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "募",
    "kname": "tsuno(ru)",
    "kstroke": 12,
    "kmeaning": "raise, invite",
    "kgrade": "n/a",
    "kunyomi_ja": "つのる",
    "kunyomi": "tsunoru",
    "onyomi_ja": "ボ",
    "onyomi": "bo",
    "examples": [
      [
        "募金（ぼきん）",
        "fund-raising"
      ],
      [
        "応募者（おうぼしゃ）",
        "applicant"
      ],
      [
        "募集する（ぼしゅうする）",
        "recruit, accept applications"
      ],
      [
        "応募する（おうぼする）",
        "apply (e.g. position)"
      ],
      [
        "公募する（こうぼする）",
        "advertise, make public appeal"
      ],
      [
        "募る（つのる）",
        "invite, solicit"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "制",
    "kname": "(kan)sei(tou)",
    "kstroke": 8,
    "kmeaning": "system, control",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "制度（せいど）",
        "system"
      ],
      [
        "制服（せいふく）",
        "uniform [n.]"
      ],
      [
        "体制（たいせい）",
        "system, set-up"
      ],
      [
        "税制（ぜいせい）",
        "tax system"
      ],
      [
        "天皇制（てんのうせい）",
        "the Emperor System"
      ],
      [
        "共和制（きょうわせい）",
        "republicanism"
      ],
      [
        "制定する（せいていする）",
        "enact (law)"
      ],
      [
        "制限する（せいげんする）",
        "restrict, limit"
      ],
      [
        "強制する（きょうせいする）",
        "coerce"
      ],
      [
        "規制する（きせいする）",
        "regulate"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "量",
    "kname": "(suu)ryou",
    "kstroke": 12,
    "kmeaning": "quantity, measure, weigh",
    "kgrade": 4,
    "kunyomi_ja": "はかる、はかり、はか",
    "kunyomi": "hakaru, hakari, haka",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "量（りょう）",
        "quantity, amount"
      ],
      [
        "数量（すうりょう）",
        "number, quantity"
      ],
      [
        "重量（じゅうりょう）",
        "weight"
      ],
      [
        "交通量（こうつうりょう）",
        "traffic volume"
      ],
      [
        "消費量（しょうひりょう）",
        "amount of consumption"
      ],
      [
        "大量な（たいりょうな）",
        "large (quantity)"
      ],
      [
        "量産する（りょうさんする）",
        "produce in large quantity"
      ],
      [
        "測量する（そくりょうする）",
        "measure"
      ],
      [
        "推量する（すいりょうする）",
        "guess"
      ],
      [
        "量る（はかる）",
        "measure, weigh"
      ],
      [
        "推し量る（おしはかる）",
        "conjecture, surmise"
      ]
    ],
    "radical": "⾥",
    "rad_order": 200,
    "rad_stroke": 7,
    "rad_name_ja": "さと",
    "rad_name": "sato",
    "rad_meaning": "village, (3.93 km)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "各",
    "kname": "onoono",
    "kstroke": 6,
    "kmeaning": "each",
    "kgrade": 4,
    "kunyomi_ja": "おのおの",
    "kunyomi": "onoono",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "各地（かくち）",
        "each place"
      ],
      [
        "各国（かっこく）",
        "each nation"
      ],
      [
        "各種（かくしゅ）",
        "each type"
      ],
      [
        "各大学（かくだいがく）",
        "each university"
      ],
      [
        "各々（おのおの）",
        "respectively"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "評",
    "kname": "(tei)hyou",
    "kstroke": 12,
    "kmeaning": "comment, criticism",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヒョウ",
    "onyomi": "hyou",
    "examples": [
      [
        "評判（ひょうばん）",
        "reputation"
      ],
      [
        "評論（ひょうろん）",
        "critique"
      ],
      [
        "評決（ひょうけつ）",
        "verdict"
      ],
      [
        "評議会（ひょうぎかい）",
        "council"
      ],
      [
        "好評（こうひょう）",
        "established opinion, favorable reputation"
      ],
      [
        "書評（しょひょう）",
        "book review"
      ],
      [
        "定評（ていひょう）",
        "established opinion"
      ],
      [
        "評価する（ひょうかする）",
        "evaluate"
      ],
      [
        "批評する（ひひょうする）",
        "criticize, review"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "判",
    "kname": "han(ketsu)",
    "kstroke": 7,
    "kmeaning": "stamp, seal, judge",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン、バン",
    "onyomi": "han, ban",
    "examples": [
      [
        "判（はん）",
        "stamp [n.]"
      ],
      [
        "判事（はんじ）",
        "judge [n.]"
      ],
      [
        "判決（はんけつ）",
        "judicial decision"
      ],
      [
        "判断する（はんだんする）",
        "judge, decipher"
      ],
      [
        "判明する（はんめいする）",
        "prove, turn out"
      ],
      [
        "批判する（ひはんする）",
        "criticize"
      ],
      [
        "評判（ひょうばん）",
        "reputation"
      ],
      [
        "裁判（さいばん）",
        "trial"
      ],
      [
        "裁判所（さいばんしょ）",
        "court"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "換",
    "kname": "kan-ka(eru)",
    "kstroke": 12,
    "kmeaning": "exchange, substitute",
    "kgrade": "n/a",
    "kunyomi_ja": "かえる、かわる、か",
    "kunyomi": "kaeru, kawaru, ka",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "換気する（かんきする）",
        "ventilate"
      ],
      [
        "換算する（かんさんする）",
        "convert (calculation)"
      ],
      [
        "交換する（こうかんする）",
        "exchange [v.t.]"
      ],
      [
        "変換する（へんかんする）",
        "change, convert, transform"
      ],
      [
        "転換期（てんかんき）",
        "turning point, transitional period"
      ],
      [
        "互換性（ごかんせい）",
        "compatibility"
      ],
      [
        "換える（かえる）",
        "replace [v.t.]"
      ],
      [
        "乗り換える（のりかえる）",
        "transfer (bus, trains)"
      ],
      [
        "換わる（かわる）",
        "take the place of [v.i.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "族",
    "kname": "(ka)zoku",
    "kstroke": 11,
    "kmeaning": "family, tribe",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾク",
    "onyomi": "zoku",
    "examples": [
      [
        "家族（かぞく）",
        "family"
      ],
      [
        "民族（みんぞく）",
        "race, nation"
      ],
      [
        "水族館（すいぞくかん）",
        "aquarium"
      ],
      [
        "遺族（いぞく）",
        "bereaved family"
      ]
    ],
    "radical": "",
    "rad_order": 91,
    "rad_stroke": 4,
    "rad_name_ja": "ほうへん",
    "rad_name": "houhen",
    "rad_meaning": "direction, flag",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "競",
    "kname": "kyou-kiso(u)",
    "kstroke": 20,
    "kmeaning": "compete",
    "kgrade": 4,
    "kunyomi_ja": "きそう、せる、きそ、せ",
    "kunyomi": "kisou, seru, kiso, se",
    "onyomi_ja": "キョウ、ケイ",
    "onyomi": "kyou, kei",
    "examples": [
      [
        "競争する（きょうそうする）",
        "compete"
      ],
      [
        "競走する（きょうそうする）",
        "race [v.i.]"
      ],
      [
        "競争率（きょうそうりつ）",
        "ratio of successful (applicants)"
      ],
      [
        "競技（きょうぎ）",
        "game, match"
      ],
      [
        "競売（きょうばい）",
        "auction"
      ],
      [
        "競輪（けいりん）",
        "bicycle racing"
      ],
      [
        "競馬（けいば）",
        "horse racing"
      ],
      [
        "競う（きそう）",
        "compete, contend"
      ],
      [
        "競る（せる）",
        "compete, bid"
      ]
    ],
    "radical": "⽴",
    "rad_order": 148,
    "rad_stroke": 5,
    "rad_name_ja": "たつ",
    "rad_name": "tatsu",
    "rad_meaning": "to stand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "争",
    "kname": "sou-araso(u)",
    "kstroke": 6,
    "kmeaning": "contend, dispute, argue",
    "kgrade": 4,
    "kunyomi_ja": "あらそう、あらそい、あらそ",
    "kunyomi": "arasou, arasoi, araso",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "競争する（きょうそうする）",
        "compete"
      ],
      [
        "戦争（せんそう）",
        "war"
      ],
      [
        "紛争（ふんそう）",
        "dispute"
      ],
      [
        "論争（ろんそう）",
        "controversy, dispute"
      ],
      [
        "闘争（とうそう）",
        "strife, conflict"
      ],
      [
        "争点（そうてん）",
        "point at issue"
      ],
      [
        "争う（あらそう）",
        "dispute, argue, compete"
      ]
    ],
    "radical": "⼅",
    "rad_order": 7,
    "rad_stroke": 1,
    "rad_name_ja": "はねぼう",
    "rad_name": "hanebou",
    "rad_meaning": "vertical stroke with a hook",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "率",
    "kname": "hiki(iru)",
    "kstroke": 11,
    "kmeaning": "rate, lead, command",
    "kgrade": 5,
    "kunyomi_ja": "ひきいる、ひき",
    "kunyomi": "hikiiru, hiki",
    "onyomi_ja": "ソツ、リツ",
    "onyomi": "sotsu, ritsu",
    "examples": [
      [
        "引率する（いんそつする）",
        "lead (a group)"
      ],
      [
        "統率する（とうそつする）",
        "command, lead"
      ],
      [
        "率先する（そっせんする）",
        "take initiative"
      ],
      [
        "率直な（そっちょくな）",
        "frank, openhearted"
      ],
      [
        "軽率な（けいそつな）",
        "rash"
      ],
      [
        "率（りつ）",
        "rate, proportion"
      ],
      [
        "比率（ひりつ）",
        "rate, proportion"
      ],
      [
        "利率（りりつ）",
        "interest rate"
      ],
      [
        "確率（かくりつ）",
        "probability"
      ],
      [
        "能率（のうりつ）",
        "efficiency"
      ],
      [
        "競争率（きょうそうりつ）",
        "ratio of successful (applicants)"
      ],
      [
        "率いる（ひきいる）",
        "spearhead (a group)"
      ]
    ],
    "radical": "⽞",
    "rad_order": 122,
    "rad_stroke": 5,
    "rad_name_ja": "げん",
    "rad_name": "gen",
    "rad_meaning": "darkness",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "得",
    "kname": "toku-e(ru)",
    "kstroke": 11,
    "kmeaning": "acquire, gain, profit",
    "kgrade": 4,
    "kunyomi_ja": "える、うる、え、う",
    "kunyomi": "eru, uru, e, u",
    "onyomi_ja": "トク",
    "onyomi": "toku",
    "examples": [
      [
        "得な（とくな）",
        "profitable, economical"
      ],
      [
        "得意な（とくいな）",
        "be good at"
      ],
      [
        "お得意さん（おとくいさん）",
        "customer"
      ],
      [
        "所得（しょとく）",
        "income"
      ],
      [
        "損得（そんとく）",
        "loss and gain"
      ],
      [
        "納得する（なっとくする）",
        "convince oneself, consent"
      ],
      [
        "説得する（せっとくする）",
        "persuade"
      ],
      [
        "習得する（しゅうとくする）",
        "learn, master"
      ],
      [
        "獲得する（かくとくする）",
        "obtain, acquire"
      ],
      [
        "得る（える/うる）",
        "obtain, acquire"
      ],
      [
        "得難い（えがたい）",
        "hard to get"
      ],
      [
        "止むを得ない（やむをえない）",
        "unavoidable, inevitable"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "張",
    "kname": "chou-ha(ru)",
    "kstroke": 11,
    "kmeaning": "spread, strain, stretch",
    "kgrade": 5,
    "kunyomi_ja": "はる、はり、は",
    "kunyomi": "haru, hari, ha",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "拡張する（かくちょうする）",
        "extend, expand"
      ],
      [
        "緊張する（きんちょうする）",
        "be nervous"
      ],
      [
        "主張する（しゅちょうする）",
        "assert, claim, insist"
      ],
      [
        "出張する（しゅっちょうする）",
        "go on a business trip"
      ],
      [
        "張る（はる）",
        "stick, stretch"
      ],
      [
        "頑張る（がんばる）",
        "try one's best"
      ],
      [
        "威張る（いばる）",
        "swagger, put on airs"
      ],
      [
        "引っ張る（ひっぱる）",
        "pull, stretch"
      ]
    ],
    "radical": "",
    "rad_order": 68,
    "rad_stroke": 3,
    "rad_name_ja": "ゆみへん",
    "rad_name": "yumihen",
    "rad_meaning": "bow（in archery）",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "価",
    "kname": "ka-atai",
    "kstroke": 8,
    "kmeaning": "price, value",
    "kgrade": 5,
    "kunyomi_ja": "あたい",
    "kunyomi": "atai",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "価格（かかく）",
        "price"
      ],
      [
        "価値（かち）",
        "value"
      ],
      [
        "物価（ぶっか）",
        "cost-of-living"
      ],
      [
        "定価（ていか）",
        "list price"
      ],
      [
        "高価な（こうかな）",
        "expensive"
      ],
      [
        "安価な（あんかな）",
        "cheap"
      ],
      [
        "評価する（ひょうかする）",
        "evaluate"
      ],
      [
        "価（あたい）",
        "value"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "抑",
    "kname": "yoku-osa(eru)",
    "kstroke": 7,
    "kmeaning": "suppress, control",
    "kgrade": "n/a",
    "kunyomi_ja": "おさえる、おさ",
    "kunyomi": "osaeru, osa",
    "onyomi_ja": "ヨク",
    "onyomi": "yoku",
    "examples": [
      [
        "抑圧する（よくあつする）",
        "oppress"
      ],
      [
        "抑制する（よくせいする）",
        "control, restrain"
      ],
      [
        "抑止力（よくしりょく）",
        "(nuclear) deterrent"
      ],
      [
        "抑揚（よくよう）",
        "intonation, inflection"
      ],
      [
        "抑える（おさえる）",
        "control, restrain"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "弱",
    "kname": "yowa(i)",
    "kstroke": 10,
    "kmeaning": "weak",
    "kgrade": 2,
    "kunyomi_ja": "よわい、よわる、よわまる、よわめる、よわ",
    "kunyomi": "yowai, yowaru, yowamaru, yowameru, yowa",
    "onyomi_ja": "ジャク",
    "onyomi": "jaku",
    "examples": [
      [
        "弱点（じゃくてん）",
        "weakness"
      ],
      [
        "弱震（じゃくしん）",
        "mild earthquake"
      ],
      [
        "弱者（じゃくしゃ）",
        "the weak"
      ],
      [
        "十ドル弱（じゅうドルじゃく）",
        "a little less than ten dollars"
      ],
      [
        "弱い（よわい）",
        "weak, frail"
      ],
      [
        "弱る（よわる）",
        "be weakened, be troubled [v.i.]"
      ],
      [
        "弱める（よわめる）",
        "weaken [v.t.]"
      ],
      [
        "弱まる（よわまる）",
        "abate, be weakened [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 68,
    "rad_stroke": 3,
    "rad_name_ja": "ゆみへん",
    "rad_name": "yumihen",
    "rad_meaning": "bow（in archery）",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "技",
    "kname": "gi-waza",
    "kstroke": 7,
    "kmeaning": "skill, technique",
    "kgrade": 5,
    "kunyomi_ja": "わざ",
    "kunyomi": "waza",
    "onyomi_ja": "ギ",
    "onyomi": "gi",
    "examples": [
      [
        "技術（ぎじゅつ）",
        "technique"
      ],
      [
        "技能（ぎのう）",
        "technical skill"
      ],
      [
        "技巧（ぎこう）",
        "skill, technique, craftsmanship"
      ],
      [
        "特技（とくぎ）",
        "special skill"
      ],
      [
        "競技（きょうぎ）",
        "game, match"
      ],
      [
        "演技する（えんぎする）",
        "act, perform"
      ],
      [
        "技（わざ）",
        "art, technique"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "律",
    "kname": "(hou)ritsu",
    "kstroke": 9,
    "kmeaning": "law, rhythm, regulation",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リツ、リチ",
    "onyomi": "ritsu, richi",
    "examples": [
      [
        "法律（ほうりつ）",
        "law"
      ],
      [
        "規律（きりつ）",
        "rules"
      ],
      [
        "一律（いちりつ）",
        "uniformity, monotony"
      ],
      [
        "旋律（せんりつ）",
        "melody"
      ],
      [
        "不文律（ふぶんりつ）",
        "unwritten law"
      ],
      [
        "自律神経（じりつしんけい）",
        "autonomic nerves"
      ],
      [
        "調律する（ちょうりつする）",
        "tune (instrument)"
      ],
      [
        "律儀な（りちぎな）",
        "conscientious"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "勉",
    "kname": "ben(kyou)",
    "kstroke": 10,
    "kmeaning": "endeavor",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ベン",
    "onyomi": "ben",
    "examples": [
      [
        "勉強する（べんきょうする）",
        "study"
      ],
      [
        "勤勉な（きんべんな）",
        "diligent"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "尊",
    "kname": "son-touto(i)",
    "kstroke": 12,
    "kmeaning": "honor, respect, valuable, noble",
    "kgrade": 6,
    "kunyomi_ja": "たっとい、たっとぶ、とうとい、とうとぶ、たっと、とうと",
    "kunyomi": "tattoi, tattobu, toutoi, toutobu, tatto, touto",
    "onyomi_ja": "ソン",
    "onyomi": "son",
    "examples": [
      [
        "尊敬する（そんけいする）",
        "respect (person)"
      ],
      [
        "尊重する（そんちょうする）",
        "respect (idea, right)"
      ],
      [
        "尊敬語（そんけいご）",
        "honorific word"
      ],
      [
        "尊大な（そんだいな）",
        "condescending, arrogant"
      ],
      [
        "自尊心（じそんしん）",
        "self-esteem"
      ],
      [
        "尊い（とうとい/たっとい）",
        "precious, valuable"
      ],
      [
        "尊ぶ（とうとぶ/たっとぶ）",
        "value highly"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "敬",
    "kname": "uyama(u)",
    "kstroke": 12,
    "kmeaning": "respect",
    "kgrade": 6,
    "kunyomi_ja": "うやまう、うやまい、うやま",
    "kunyomi": "uyamau, uyamai, uyama",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "尊敬する（そんけいする）",
        "respect (person)"
      ],
      [
        "敬愛する（けいあいする）",
        "respect and love (person)"
      ],
      [
        "敬遠する（けいえんする）",
        "keep at a distance"
      ],
      [
        "敬意（けいい）",
        "respect, honor [n.]"
      ],
      [
        "敬語（けいご）",
        "honorific word"
      ],
      [
        "敬具（けいぐ）",
        "Sincerely yours"
      ],
      [
        "敬称（けいしょう）",
        "title of honor"
      ],
      [
        "敬老の日（けいろうのひ）",
        "Respect-for-the-Aged Day"
      ],
      [
        "失敬な（しっけいな）",
        "rude, impolite"
      ],
      [
        "敬う（うやまう）",
        "show respect"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "観",
    "kname": "kan(koukyaku)",
    "kstroke": 18,
    "kmeaning": "view",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "観点（かんてん）",
        "point of view"
      ],
      [
        "観念（かんねん）",
        "idea, notion"
      ],
      [
        "景観（けいかん）",
        "scenery"
      ],
      [
        "外観（がいかん）",
        "appearance, exterior"
      ],
      [
        "歴史観（れきしかん）",
        "historical viewpoint"
      ],
      [
        "先入観（せんにゅうかん）",
        "preconception"
      ],
      [
        "主観的な（しゅかんてきな）",
        "subjective"
      ],
      [
        "客観的な（きゃっかんてきな）",
        "objective [adj.]"
      ],
      [
        "楽観的な（らっかんてきな）",
        "optimistic"
      ],
      [
        "悲観的な（ひかんてきな）",
        "pessimistic"
      ],
      [
        "観光する（かんこうする）",
        "go sightseeing"
      ],
      [
        "観察する（かんさつする）",
        "observe"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "種",
    "kname": "tane",
    "kstroke": 14,
    "kmeaning": "variety, seed, type, kind",
    "kgrade": 4,
    "kunyomi_ja": "たね",
    "kunyomi": "tane",
    "onyomi_ja": "シュ",
    "onyomi": "shu",
    "examples": [
      [
        "人種（じんしゅ）",
        "race (of people)"
      ],
      [
        "職種（しょくしゅ）",
        "occupational category"
      ],
      [
        "業種（ぎょうしゅ）",
        "type of industry"
      ],
      [
        "品種（ひんしゅ）",
        "brand, kind"
      ],
      [
        "各種（かくしゅ）",
        "each kind"
      ],
      [
        "一種（いっしゅ）",
        "one variety, one class"
      ],
      [
        "種子（しゅし）",
        "seed"
      ],
      [
        "種（たね）",
        "seed"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "能",
    "kname": "nou(ryoku)",
    "kstroke": 10,
    "kmeaning": "ability, function, Noh play",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "能（のう）",
        "talent, Noh drama"
      ],
      [
        "能面（のうめん）",
        "Noh mask"
      ],
      [
        "能力（のうりょく）",
        "ability"
      ],
      [
        "能率（のうりつ）",
        "efficiency"
      ],
      [
        "才能（さいのう）",
        "talent"
      ],
      [
        "本能（ほんのう）",
        "instinct"
      ],
      [
        "機能（きのう）",
        "function"
      ],
      [
        "万能な（ばんのうな）",
        "all-purpose"
      ],
      [
        "有能な（ゆうのうな）",
        "capable, skillful"
      ],
      [
        "芸能人（げいのうじん）",
        "celebrity"
      ],
      [
        "可能性（かのうせい）",
        "potentiality, possibility"
      ],
      [
        "放射能（ほうしゃのう）",
        "radioactivity"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "延",
    "kname": "en-no(biru)",
    "kstroke": 8,
    "kmeaning": "extend, postpone",
    "kgrade": 6,
    "kunyomi_ja": "のびる、のべる、のべ、のばす、の",
    "kunyomi": "nobiru, noberu, nobe, nobasu, no",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "延期する（えんきする）",
        "postpone"
      ],
      [
        "延滞する（えんたいする）",
        "be in arrears"
      ],
      [
        "延長する（えんちょうする）",
        "extend, elongate"
      ],
      [
        "延ばす（のばす）",
        "postpone, prolong [v.t.]"
      ],
      [
        "延びる（のびる）",
        "be postponed [v.i.]"
      ],
      [
        "延べる（のべる）",
        "lengthen, spread [v.t.]"
      ],
      [
        "延べ（のべ）",
        "in total"
      ]
    ],
    "radical": "⼵",
    "rad_order": 64,
    "rad_stroke": 3,
    "rad_name_ja": "えんにょう",
    "rad_name": "ennyou",
    "rad_meaning": "to move, stretch",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "薬",
    "kname": "kusuri",
    "kstroke": 16,
    "kmeaning": "drug, medicine",
    "kgrade": 3,
    "kunyomi_ja": "くすり",
    "kunyomi": "kusuri",
    "onyomi_ja": "ヤク",
    "onyomi": "yaku",
    "examples": [
      [
        "薬品（やくひん）",
        "medicine, chemical [n.]"
      ],
      [
        "薬局（やっきょく）",
        "pharmacy"
      ],
      [
        "薬味（やくみ）",
        "spice"
      ],
      [
        "麻薬（まやく）",
        "narcotic drug"
      ],
      [
        "火薬（かやく）",
        "gunpowder"
      ],
      [
        "農薬（のうやく）",
        "agricultural chemicals"
      ],
      [
        "胃腸薬（いちょうやく）",
        "medicine for digestion"
      ],
      [
        "薬（くすり）",
        "medicine"
      ],
      [
        "薬屋（くすりや）",
        "pharmacy"
      ],
      [
        "薬指（くすりゆび）",
        "ring finger"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "笑",
    "kname": "wara(u)",
    "kstroke": 10,
    "kmeaning": "laugh",
    "kgrade": 4,
    "kunyomi_ja": "わら、え、わらう、わらい、えむ、えみ",
    "kunyomi": "wara, e, warau, warai, emu, emi",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "爆笑する（ばくしょうする）",
        "laugh hard"
      ],
      [
        "苦笑する（くしょうする）",
        "smile bitterly"
      ],
      [
        "冷笑する（れいしょうする）",
        "laugh scornfully"
      ],
      [
        "一笑する（いっしょうする）",
        "laugh off"
      ],
      [
        "笑う（わらう）",
        "laugh, smile [v.i.]"
      ],
      [
        "笑い話（わらいばなし）",
        "funny story"
      ],
      [
        "笑顔（えがお）",
        "smiling face"
      ],
      [
        "笑み（えみ）",
        "smile [n.]"
      ],
      [
        "微笑む（ほほえむ）",
        "smile [v.i.]"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "非",
    "kname": "(ze)hi",
    "kstroke": 8,
    "kmeaning": "is not, mistake, non-, un-",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "非（ひ）",
        "faulty, non-"
      ],
      [
        "非常に（ひじょうに）",
        "very, extremely"
      ],
      [
        "非常事態（ひじょうじたい）",
        "state of emergency"
      ],
      [
        "非常口（ひじょうぐち）",
        "emergency exit"
      ],
      [
        "非常識（ひじょうしき）",
        "lack of common sense"
      ],
      [
        "非売品（ひばいひん）",
        "article not for sale"
      ],
      [
        "非公式な（ひこうしきな）",
        "informal"
      ],
      [
        "非科学的な（ひかがくてきな）",
        "unscientific"
      ],
      [
        "非難する（ひなんする）",
        "blame [v.t.]"
      ],
      [
        "是非（ぜひ）",
        "certainly, right or wrong"
      ]
    ],
    "radical": "⾮",
    "rad_order": 213,
    "rad_stroke": 8,
    "rad_name_ja": "あらず",
    "rad_name": "arazu",
    "rad_meaning": "wrong, non-",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "常",
    "kname": "jou-tsune",
    "kstroke": 11,
    "kmeaning": "normal, regular, ever-, always",
    "kgrade": 5,
    "kunyomi_ja": "つね、とこ",
    "kunyomi": "tsune, toko",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "常識（じょうしき）",
        "common sense"
      ],
      [
        "常緑樹（じょうりょくじゅ）",
        "evergreen tree"
      ],
      [
        "常用漢字（じょうようかんじ）",
        "common use kanji"
      ],
      [
        "非常識（ひじょうしき）",
        "lack of common sense"
      ],
      [
        "非常口（ひじょうぐち）",
        "emergency exit"
      ],
      [
        "正常な（せいじょうな）",
        "normal"
      ],
      [
        "異常な（いじょうな）",
        "abnormal"
      ],
      [
        "日常（にちじょう）",
        "daily, everyday"
      ],
      [
        "常に（つねに）",
        "always, customarily"
      ],
      [
        "常夏（とこなつ）",
        "everlasting summer"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "強",
    "kname": "tsuyo(i)",
    "kstroke": 11,
    "kmeaning": "strong",
    "kgrade": 2,
    "kunyomi_ja": "つよ、つよい、つよめる、つよまる、し、しいる",
    "kunyomi": "tsuyo, tsuyoi, tsuyomeru, tsuyomaru, shi, shiiru",
    "onyomi_ja": "キョウ、ゴウ",
    "onyomi": "kyou, gou",
    "examples": [
      [
        "勉強する（べんきょうする）",
        "study"
      ],
      [
        "強化する（きょうかする）",
        "strengthen"
      ],
      [
        "強力な（きょうりょくな）",
        "powerful"
      ],
      [
        "強情な（ごうじょうな）",
        "obstinate"
      ],
      [
        "強引な（ごういんな）",
        "coercive"
      ],
      [
        "強盗（ごうとう）",
        "robbery"
      ],
      [
        "強い（つよい）",
        "strong"
      ],
      [
        "強まる（つよまる）",
        "get strong [v.i.]"
      ],
      [
        "強める（つよめる）",
        "strengthen [v.t.]"
      ],
      [
        "強いる（しいる）",
        "force, compel"
      ]
    ],
    "radical": "",
    "rad_order": 68,
    "rad_stroke": 3,
    "rad_name_ja": "ゆみへん",
    "rad_name": "yumihen",
    "rad_meaning": "bow（in archery）",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "客",
    "kname": "(rai)kyaku",
    "kstroke": 9,
    "kmeaning": "visitor, customer, guest",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キャク、カク",
    "onyomi": "kyaku, kaku",
    "examples": [
      [
        "客（きゃく）",
        "guest, customer"
      ],
      [
        "客席（きゃくせき）",
        "seat (e.g. theater)"
      ],
      [
        "来客（らいきゃく）",
        "visitor"
      ],
      [
        "乗客（じょうきゃく）",
        "passenger"
      ],
      [
        "観光客（かんこうきゃく）",
        "tourist"
      ],
      [
        "客観的な（きゃっかんてきな）",
        "objective [adj.]"
      ],
      [
        "刺客（しかく）",
        "assassin"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "届",
    "kname": "todo(ku)",
    "kstroke": 8,
    "kmeaning": "deliver, reach, report, notify",
    "kgrade": 6,
    "kunyomi_ja": "とど、とどく、とどける",
    "kunyomi": "todo, todoku, todokeru",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "届く（とどく）",
        "reach, arrive [v.i.]"
      ],
      [
        "届ける（とどける）",
        "deliver, file notice [v.t.]"
      ],
      [
        "届け先（とどけさき）",
        "receiver's address"
      ],
      [
        "出生届け（しゅっせいとどけ）",
        "birth registration"
      ],
      [
        "欠席届け（けっせきとどけ）",
        "report of a school absence"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "舎",
    "kname": "(chou)sha",
    "kstroke": 8,
    "kmeaning": "building, quarters",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "校舎（こうしゃ）",
        "school building"
      ],
      [
        "兵舎（へいしゃ）",
        "barracks"
      ],
      [
        "寄宿舎（きしゅくしゃ）",
        "boarding house"
      ],
      [
        "*田舎（いなか）",
        "country side, home town"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "暮",
    "kname": "bo-ku(rasu)",
    "kstroke": 14,
    "kmeaning": "dusk, live, come to an end",
    "kgrade": 6,
    "kunyomi_ja": "く、くれる、くらす",
    "kunyomi": "ku, kureru, kurasu",
    "onyomi_ja": "ボ",
    "onyomi": "bo",
    "examples": [
      [
        "暮色（ぼしょく）",
        "dusk, evening shades"
      ],
      [
        "薄暮（はくぼ）",
        "nightfall"
      ],
      [
        "歳暮（せいぼ）",
        "end of the year, year-end gift"
      ],
      [
        "野暮（やぼ）",
        "uncouthness"
      ],
      [
        "暮らす（くらす）",
        "live [v.i.]"
      ],
      [
        "暮れる（くれる）",
        "end, get dark"
      ],
      [
        "夕暮れ（ゆうぐれ）",
        "evening twilight"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "怖",
    "kname": "fu-kowa(i)",
    "kstroke": 8,
    "kmeaning": "fearful, scary",
    "kgrade": "n/a",
    "kunyomi_ja": "こわ、こわい、こわがる",
    "kunyomi": "kowa, kowai, kowagaru",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "恐怖（きょうふ）",
        "terror"
      ],
      [
        "恐怖症（きょうふしょう）",
        "phobia"
      ],
      [
        "怖い（こわい）",
        "scary, frightening [adj.]"
      ],
      [
        "怖がる（こわがる）",
        "be afraid of, fear [v.i.]"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "息",
    "kname": "soku-iki",
    "kstroke": 10,
    "kmeaning": "breath",
    "kgrade": 3,
    "kunyomi_ja": "いき",
    "kunyomi": "iki",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "子息（しそく）",
        "son"
      ],
      [
        "消息（しょうそく）",
        "news, information"
      ],
      [
        "利息（りそく）",
        "interest (bank)"
      ],
      [
        "喘息（ぜんそく）",
        "asthma"
      ],
      [
        "休息する（きゅうそくする）",
        "take a rest"
      ],
      [
        "窒息する（ちっそくする）",
        "suffocate [v.i.]"
      ],
      [
        "息（いき）",
        "breath"
      ],
      [
        "ため息（ためいき）",
        "sigh"
      ],
      [
        "*息子（むすこ）",
        "son"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "拾",
    "kname": "shuu-hiro(u)",
    "kstroke": 9,
    "kmeaning": "pick up, ten (in documents)",
    "kgrade": 3,
    "kunyomi_ja": "ひろ、ひろう",
    "kunyomi": "hiro, hirou",
    "onyomi_ja": "シュウ、ジュウ",
    "onyomi": "shuu, juu",
    "examples": [
      [
        "拾得する（しゅうとくする）",
        "pick up, find"
      ],
      [
        "収拾する（しゅうしゅうする）",
        "control, deal with, manage"
      ],
      [
        "拾万円（じゅうまんえん）",
        "100,000 yen"
      ],
      [
        "拾う（ひろう）",
        "pick up"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "段",
    "kname": "(ne)dan",
    "kstroke": 9,
    "kmeaning": "step, stairs, rank",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダン",
    "onyomi": "dan",
    "examples": [
      [
        "段階（だんかい）",
        "stage, level"
      ],
      [
        "段落（だんらく）",
        "paragraph"
      ],
      [
        "段々畑（だんだんばたけ）",
        "terraced fields"
      ],
      [
        "階段（かいだん）",
        "stairs"
      ],
      [
        "石段（せきだん）",
        "stone steps"
      ],
      [
        "手段（しゅだん）",
        "means, way"
      ],
      [
        "値段（ねだん）",
        "price"
      ],
      [
        "普段（ふだん）",
        "usually"
      ],
      [
        "初段（しょだん）",
        "first grade"
      ],
      [
        "一段と（いちだんと）",
        "further, still more [adv.]"
      ]
    ],
    "radical": "⽎",
    "rad_order": 103,
    "rad_stroke": 4,
    "rad_name_ja": "るまた",
    "rad_name": "rumata",
    "rad_meaning": "lance shaft, action",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "暇",
    "kname": "ka-hima",
    "kstroke": 13,
    "kmeaning": "free time, leisure",
    "kgrade": "n/a",
    "kunyomi_ja": "ひま",
    "kunyomi": "hima",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "余暇（よか）",
        "leisure, spare time"
      ],
      [
        "休暇（きゅうか）",
        "holiday"
      ],
      [
        "暇（ひま）",
        "free time"
      ],
      [
        "暇つぶし（ひまつぶし）",
        "killing time"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "預",
    "kname": "azu(keru)",
    "kstroke": 13,
    "kmeaning": "deposit, entrust",
    "kgrade": 5,
    "kunyomi_ja": "あず、あずける、あずかる",
    "kunyomi": "azu, azukeru, azukaru",
    "onyomi_ja": "ヨ",
    "onyomi": "yo",
    "examples": [
      [
        "預金する（よきんする）",
        "deposit [v.t.]"
      ],
      [
        "預かる（あずかる）",
        "take charge of [v.t.]"
      ],
      [
        "預ける（あずける）",
        "leave in the care of [v.i]"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "昨",
    "kname": "saku(jitsu)",
    "kstroke": 9,
    "kmeaning": "yesterday, last",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サク",
    "onyomi": "saku",
    "examples": [
      [
        "昨夜（さくや）",
        "last night"
      ],
      [
        "昨晩（さくばん）",
        "last night"
      ],
      [
        "昨日（さくじつ/*きのう）",
        "yesterday"
      ],
      [
        "昨年（さくねん）",
        "last year"
      ],
      [
        "*一昨日（おととい）",
        "day before yesterday"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "断",
    "kname": "kotowa(ru)",
    "kstroke": 11,
    "kmeaning": "cut off, decision, refuse",
    "kgrade": 5,
    "kunyomi_ja": "た、ことわ、たつ、ことわる、ことわり",
    "kunyomi": "ta, korowa, tatsu, kotowaru, kotowari",
    "onyomi_ja": "ダン",
    "onyomi": "dan",
    "examples": [
      [
        "断食（だんじき）",
        "fasting"
      ],
      [
        "断面（だんめん）",
        "cross-section"
      ],
      [
        "横断歩道（おうだんほどう）",
        "pedestrian crossing"
      ],
      [
        "断続的な（だんぞくてきな）",
        "intermittent"
      ],
      [
        "断定的な（だんていてきな）",
        "assertive"
      ],
      [
        "判断する（はんだんする）",
        "judge [v.i.]"
      ],
      [
        "決断する（けつだんする）",
        "decide"
      ],
      [
        "中断する（ちゅうだんする）",
        "interrupt, break off"
      ],
      [
        "油断する（ゆだんする）",
        "neglect, be off guard [v.i.]"
      ],
      [
        "診断する（しんだんする）",
        "diagnose"
      ],
      [
        "断つ（たつ）",
        "cut off, sever, abstain from"
      ],
      [
        "断る（ことわる）",
        "refuse, decline"
      ]
    ],
    "radical": "⽄",
    "rad_order": 89,
    "rad_stroke": 4,
    "rad_name_ja": "おのづくり",
    "rad_name": "onozukuri",
    "rad_meaning": "axe",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "承",
    "kname": "uketamawa(ru)",
    "kstroke": 8,
    "kmeaning": "agree to, hear, be told",
    "kgrade": 5,
    "kunyomi_ja": "うけたまわ、うけたまわる",
    "kunyomi": "uketamawa, uketamawaru",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "承諾する（しょうだくする）",
        "consent, accept, be informed"
      ],
      [
        "承知する（しょうちする）",
        "agree, consent"
      ],
      [
        "承認する（しょうにんする）",
        "approve"
      ],
      [
        "継承する（けいしょうする）",
        "inherit"
      ],
      [
        "伝承（でんしょう）",
        "oral tradition (e.g. folklore)"
      ],
      [
        "承る（うけたまわる）",
        "hear, take (an order) [hum.]"
      ]
    ],
    "radical": "⼿",
    "rad_order": 84,
    "rad_stroke": 4,
    "rad_name_ja": "て",
    "rad_name": "te",
    "rad_meaning": "hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "丸",
    "kname": "maru(meru)",
    "kstroke": 3,
    "kmeaning": "round, suffix for names of ships/people",
    "kgrade": 2,
    "kunyomi_ja": "まる、まるい、まるめる",
    "kunyomi": "maru, marui, marumeru",
    "onyomi_ja": "ガン",
    "onyomi": "gan",
    "examples": [
      [
        "丸薬（がんやく）",
        "pill"
      ],
      [
        "弾丸（だんがん）",
        "bullet"
      ],
      [
        "一丸（いちがん）",
        "one lump"
      ],
      [
        "丸い（まるい）",
        "round, spherical"
      ],
      [
        "丸顔（まるがお）",
        "round face"
      ],
      [
        "丸っきり（まるっきり）",
        "completely, just as if"
      ],
      [
        "丸める（まるめる）",
        "round off, roll up, cajole [v.t.]"
      ],
      [
        "丸まる（まるまる）",
        "roll up, be rounded off [v.i.]"
      ],
      [
        "日の丸（ひのまる）",
        "the Japanese flag"
      ],
      [
        "日本丸（にほんまる）",
        "Nihonmaru (name of a ship)"
      ],
      [
        "牛若丸（うしわかまる）",
        "Ushiwakamaru (name of a boy)"
      ]
    ],
    "radical": "⼂",
    "rad_order": 3,
    "rad_stroke": 1,
    "rad_name_ja": "てん",
    "rad_name": "ten",
    "rad_meaning": "dot",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "謝",
    "kname": "sha-ayama(ru)",
    "kstroke": 17,
    "kmeaning": "thank, apologize, gratitude",
    "kgrade": 5,
    "kunyomi_ja": "あやまる、あやま",
    "kunyomi": "ayamaru, ayama",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "謝礼（しゃれい）",
        "honorarium"
      ],
      [
        "謝恩会（しゃおんかい）",
        "thank-you party"
      ],
      [
        "月謝（げっしゃ）",
        "monthly tuition fee"
      ],
      [
        "感謝祭（かんしゃさい）",
        "Thanksgiving"
      ],
      [
        "新陳代謝（しんちんたいしゃ）",
        "metabolism"
      ],
      [
        "謝罪する（しゃざいする）",
        "apologize"
      ],
      [
        "感謝する（かんしゃする）",
        "show gratitude"
      ],
      [
        "謝る（あやまる）",
        "apologize"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "敵",
    "kname": "teki-kataki",
    "kstroke": 15,
    "kmeaning": "enemy",
    "kgrade": 5,
    "kunyomi_ja": "かたき",
    "kunyomi": "kataki",
    "onyomi_ja": "テキ",
    "onyomi": "teki",
    "examples": [
      [
        "敵（てき）",
        "enemy"
      ],
      [
        "敵意（てきい）",
        "hostility"
      ],
      [
        "強敵（きょうてき）",
        "formidable enemy"
      ],
      [
        "不敵な（ふてきな）",
        "daring, fearless"
      ],
      [
        "素敵な（すてきな）",
        "lovely, beautiful"
      ],
      [
        "敵対する（てきたいする）",
        "be antagonistic"
      ],
      [
        "敵（かたき）",
        "enemy"
      ],
      [
        "敵討ち（かたきうち）",
        "revenge"
      ],
      [
        "商売敵（しょうばいがたき）",
        "business rival"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "坊",
    "kname": "(ne)bou",
    "kstroke": 7,
    "kmeaning": "Buddhist priest, boy, colloquial person suffix",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ、ボツ",
    "onyomi": "bou, bot",
    "examples": [
      [
        "坊主（ぼうず）",
        "Buddhist priest [derogatory]"
      ],
      [
        "お坊さん（おぼうさん）",
        "Buddhist priest"
      ],
      [
        "坊ちゃん（ぼっちゃん）",
        "son (of others)"
      ],
      [
        "坊や（ぼうや）",
        "boy"
      ],
      [
        "赤ん坊（あかんぼう）",
        "baby"
      ],
      [
        "食いしん坊（くいしんぼう）",
        "glutton"
      ],
      [
        "けちん坊（けちんぼう）",
        "miser, cheapskate"
      ],
      [
        "朝寝坊（あさねぼう）",
        "oversleeping"
      ],
      [
        "寝坊する（ねぼうする）",
        "sleep in late"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "岸",
    "kname": "kishi",
    "kstroke": 8,
    "kmeaning": "shore, bank, coast",
    "kgrade": 3,
    "kunyomi_ja": "きし",
    "kunyomi": "kishi",
    "onyomi_ja": "ガン",
    "onyomi": "gan",
    "examples": [
      [
        "岸壁（がんぺき）",
        "wharf, steep cliff"
      ],
      [
        "海岸（かいがん）",
        "coast, beach"
      ],
      [
        "沿岸（えんがん）",
        "(along) coast, shore"
      ],
      [
        "対岸（たいがん）",
        "opposite bank"
      ],
      [
        "彼岸（ひがん）",
        "equinoctial week, Nirvana"
      ],
      [
        "岸（きし）",
        "bank"
      ],
      [
        "向こう岸（むこうぎし）",
        "opposite bank"
      ],
      [
        "*河岸（かし）",
        "riverbank, fish market"
      ]
    ],
    "radical": "",
    "rad_order": 55,
    "rad_stroke": 3,
    "rad_name_ja": "やまかんむり",
    "rad_name": "yamakanmuri",
    "rad_meaning": "mountain",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "良",
    "kname": "ryou-yo(i)",
    "kstroke": 7,
    "kmeaning": "good",
    "kgrade": 4,
    "kunyomi_ja": "よ、い、よい、いい",
    "kunyomi": "yo, i, yoi, ii",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "良心（りょうしん）",
        "conscience"
      ],
      [
        "良質（りょうしつ）",
        "good quality"
      ],
      [
        "良識（りょうしき）",
        "good sense"
      ],
      [
        "良好な（りょうこうな）",
        "favorable"
      ],
      [
        "不良（ふりょう）",
        "bad, delinquent"
      ],
      [
        "最良（さいりょう）",
        "the best"
      ],
      [
        "善良な（ぜんりょうな）",
        "virtuous"
      ],
      [
        "優良な（ゆうりょうな）",
        "excellent"
      ],
      [
        "改良する（かいりょうする）",
        "improve"
      ],
      [
        "良い（よい/いい）",
        "good"
      ],
      [
        "仲良し（なかよし）",
        "close friend"
      ],
      [
        "*野良犬（のらいぬ）",
        "stray dog"
      ]
    ],
    "radical": "⾉",
    "rad_order": 172,
    "rad_stroke": 6,
    "rad_name_ja": "こん",
    "rad_name": "kon",
    "rad_meaning": "boundary",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "散",
    "kname": "chi(ru)",
    "kstroke": 12,
    "kmeaning": "scatter",
    "kgrade": 4,
    "kunyomi_ja": "ち、ちる、ちらす、ちらかす、ちらかる、ちらばる、ちらばす",
    "kunyomi": "chi, chiru, chirasu, chirakasu, chirakaru, chirabaru, chirabasu",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "散歩（さんぽ）",
        "walk, stroll [n.]"
      ],
      [
        "散文（さんぶん）",
        "prose"
      ],
      [
        "散乱する（さんらんする）",
        "be scattered about"
      ],
      [
        "散髪する（さんぱつする）",
        "have a hair cut"
      ],
      [
        "散会する（さんかいする）",
        "adjourn"
      ],
      [
        "解散する（かいさんする）",
        "break up, dissolve, be dissolved"
      ],
      [
        "散る（ちる）",
        "fall, scatter [v.i.]"
      ],
      [
        "散らす（ちらす）",
        "disperse [v.t.]"
      ],
      [
        "散らかす（ちらかす）",
        "leave untidy [v.t.]"
      ],
      [
        "散らばる（ちらばる）",
        "be scattered about [v.i.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "訓",
    "kname": "kun(ren)",
    "kstroke": 10,
    "kmeaning": "instruct, teaching, precept",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "クン",
    "onyomi": "kun",
    "examples": [
      [
        "訓練する（くんれんする）",
        "train [v.t.]"
      ],
      [
        "訓辞（くんじ）",
        "admonitory speech"
      ],
      [
        "訓読み（くんよみ）",
        "Japanese reading of kanji"
      ],
      [
        "訓読（くんどく）",
        "Japanese reading of Chinese text"
      ],
      [
        "教訓（きょうくん）",
        "lesson, moral (of a story)"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "食",
    "kname": "ta(beru)",
    "kstroke": 9,
    "kmeaning": "eat, food",
    "kgrade": 2,
    "kunyomi_ja": "く、くう、た、たべる",
    "kunyomi": "ku, kuu, ta, taberu",
    "onyomi_ja": "ショク、ジキ",
    "onyomi": "shoku, jiki",
    "examples": [
      [
        "食堂（しょくどう）",
        "dining hall"
      ],
      [
        "食欲（しょくよく）",
        "appetite (for food)"
      ],
      [
        "食後（しょくご）",
        "after a meal"
      ],
      [
        "夕食（ゆうしょく）",
        "dinner"
      ],
      [
        "朝食（ちょうしょく）",
        "breakfast"
      ],
      [
        "和食（わしょく）",
        "Japanese-style meal"
      ],
      [
        "食事する（しょくじする）",
        "have a meal"
      ],
      [
        "断食する（だんじきする）",
        "fast [v.i.]"
      ],
      [
        "食い物（くいもの）",
        "food"
      ],
      [
        "食べる（たべる）",
        "eat"
      ],
      [
        "食べ物（たべもの）",
        "food"
      ]
    ],
    "radical": "⾷",
    "rad_order": 220,
    "rad_stroke": 9,
    "rad_name_ja": "しょく",
    "rad_name": "shoku",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "支",
    "kname": "sasa(eru)",
    "kstroke": 4,
    "kmeaning": "branch, support",
    "kgrade": 5,
    "kunyomi_ja": "ささ、ささえる",
    "kunyomi": "sasa, sasaeru",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "支店（してん）",
        "branch store"
      ],
      [
        "支社（ししゃ）",
        "branch office"
      ],
      [
        "支出（ししゅつ）",
        "expenditure"
      ],
      [
        "収支（しゅうし）",
        "income and expenditure"
      ],
      [
        "支払う（しはらう）",
        "pay [v.t.]"
      ],
      [
        "支持する（しじする）",
        "support [v.t.]"
      ],
      [
        "支援する（しえんする）",
        "support, aid [v.t.]"
      ],
      [
        "支度する（したくする）",
        "prepare"
      ],
      [
        "支配する（しはいする）",
        "rule, control"
      ],
      [
        "支給する（しきゅうする）",
        "provide, pay"
      ],
      [
        "支える（ささえる）",
        "support, prop up"
      ],
      [
        "*差し支える（さしつかえる）",
        "be hindered [v.i.]"
      ]
    ],
    "radical": "⽀",
    "rad_order": 85,
    "rad_stroke": 4,
    "rad_name_ja": "しにょう",
    "rad_name": "shinyou",
    "rad_meaning": "branch",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "組",
    "kname": "kumi",
    "kstroke": 11,
    "kmeaning": "organize, assemble, group, class, gang",
    "kgrade": 2,
    "kunyomi_ja": "く、くむ、くみ",
    "kunyomi": "ku, kumu, kumi",
    "onyomi_ja": "ソ",
    "onyomi": "so",
    "examples": [
      [
        "組織する（そしきする）",
        "organize"
      ],
      [
        "組閣する（そかくする）",
        "form a cabinet"
      ],
      [
        "労組（ろうそ）",
        "labor union"
      ],
      [
        "組む（くむ）",
        "put together"
      ],
      [
        "組（くみ）",
        "class, team, set"
      ],
      [
        "一年一組（いちねんいちくみ）",
        "1st grade, homeroom 1"
      ],
      [
        "組合（くみあい）",
        "union, association"
      ],
      [
        "番組（ばんぐみ）",
        "program (TV)"
      ],
      [
        "三人組（さんにんぐみ）",
        "trio"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "守",
    "kname": "shu-mamo(ru)",
    "kstroke": 6,
    "kmeaning": "protect, obey, babysitter",
    "kgrade": 3,
    "kunyomi_ja": "まも、もり、まもる、まもり",
    "kunyomi": "mamo, mori, mamoru, mamori",
    "onyomi_ja": "シュ、ス",
    "onyomi": "shu, su",
    "examples": [
      [
        "守備（しゅび）",
        "defense"
      ],
      [
        "守衛（しゅえい）",
        "security guard"
      ],
      [
        "死守する（ししゅする）",
        "defend to the last"
      ],
      [
        "厳守する（げんしゅする）",
        "observe (a rule) strictly"
      ],
      [
        "保守的な（ほしゅてきな）",
        "conservative"
      ],
      [
        "留守（るす）",
        "being away from home"
      ],
      [
        "留守番（るすばん）",
        "house-watching"
      ],
      [
        "留守番電話（るすばんでんわ）",
        "answering machine"
      ],
      [
        "守る（まもる）",
        "protect, obey"
      ],
      [
        "お守り（おまもり）",
        "amulet"
      ],
      [
        "子守歌（こもりうた）",
        "lullaby"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "消",
    "kname": "ki(eru)",
    "kstroke": 10,
    "kmeaning": "extinguish, delete, disappear, erase",
    "kgrade": 3,
    "kunyomi_ja": "き、け、きえる、けす",
    "kunyomi": "ki, ke, kieru, kesu",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "消防車（しょうぼうしゃ）",
        "fire-engine"
      ],
      [
        "消費者（しょうひしゃ）",
        "consumer"
      ],
      [
        "消火器（しょうかき）",
        "fire extinguisher"
      ],
      [
        "消極的な（しょうきょくてきな）",
        "passive"
      ],
      [
        "消火する（しょうかする）",
        "extinguish a fire"
      ],
      [
        "消化する（しょうかする）",
        "digest [v.t.]"
      ],
      [
        "消毒する（しょうどくする）",
        "disinfect, sterilize"
      ],
      [
        "解消する（かいしょうする）",
        "cancel, liquidate"
      ],
      [
        "消える（きえる）",
        "go out, disappear [v.i.]"
      ],
      [
        "消す（けす）",
        "erase, delete, turn off [v.t.]"
      ],
      [
        "消しゴム（けしゴム）",
        "eraser"
      ],
      [
        "消印（けしいん）",
        "postmark"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "商",
    "kname": "akina(u)",
    "kstroke": 11,
    "kmeaning": "trade, deal",
    "kgrade": 3,
    "kunyomi_ja": "あきな、あきなう、あきない",
    "kunyomi": "akina, akinau, akinai",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "商業（しょうぎょう）",
        "commerce"
      ],
      [
        "商人（しょうにん）",
        "merchant"
      ],
      [
        "商売（しょうばい）",
        "business"
      ],
      [
        "商品（しょうひん）",
        "merchandise"
      ],
      [
        "商談（しょうだん）",
        "business negotiation"
      ],
      [
        "商店（しょうてん）",
        "shop [n.]"
      ],
      [
        "貿易商（ぼうえきしょう）",
        "trader"
      ],
      [
        "通商（つうしょう）",
        "trade [n.]"
      ],
      [
        "商う（あきなう）",
        "deal in"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "似",
    "kname": "ji-ni(ru)",
    "kstroke": 7,
    "kmeaning": "resemble, be similar",
    "kgrade": 5,
    "kunyomi_ja": "にる、に",
    "kunyomi": "niru, ni",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "類似する（るいじする）",
        "be analogous to [v.i.]"
      ],
      [
        "酷似する（こくじする）",
        "have a striking resemblance [v.i.]"
      ],
      [
        "近似値（きんじち）",
        "approximate value"
      ],
      [
        "似ている（にている）",
        "be similar [v.i.]"
      ],
      [
        "似顔絵（にがおえ）",
        "portrait"
      ],
      [
        "似合う（にあう）",
        "suit, match"
      ],
      [
        "空似（そらに）",
        "chance resemblance"
      ],
      [
        "*真似（まね）",
        "imitation, mimicry"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "冒",
    "kname": "bou-oka(su)",
    "kstroke": 9,
    "kmeaning": "risk, brave, desecrate",
    "kgrade": "n/a",
    "kunyomi_ja": "おか、おかす",
    "kunyomi": "oka, okasu",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "冒険（ぼうけん）",
        "adventure [n.]"
      ],
      [
        "冒頭（ぼうとう）",
        "opening (of a story, article, etc.)"
      ],
      [
        "冒涜する（ぼうとくする）",
        "desecrate, blaspheme"
      ],
      [
        "冒す（おかす）",
        "risk, take a risk"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "険",
    "kname": "ken-kewa(shii)",
    "kstroke": 11,
    "kmeaning": "danger, steep",
    "kgrade": 5,
    "kunyomi_ja": "けわ、けわしい",
    "kunyomi": "kewa, kewashii",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "冒険する（ぼうけんする）",
        "go on an adventure, take a risk"
      ],
      [
        "探険する（たんけんする）",
        "explore, go on an expedition"
      ],
      [
        "保険（ほけん）",
        "insurance"
      ],
      [
        "険悪な（けんあくな）",
        "grim, threatening"
      ],
      [
        "危険な（きけんな）",
        "dangerous, hazardous"
      ],
      [
        "険しい（けわしい）",
        "steep (place), sharp (eyes)"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "捨",
    "kname": "sha-su(teru)",
    "kstroke": 11,
    "kmeaning": "discard, throw away, abandon",
    "kgrade": 6,
    "kunyomi_ja": "す、すてる",
    "kunyomi": "su, suteru",
    "onyomi_ja": "シャ",
    "onyomi": "sha",
    "examples": [
      [
        "四捨五入（ししゃごにゅう）",
        "rounding up (fractions)"
      ],
      [
        "取捨選択（しゅしゃせんたく）",
        "decision to adopt or reject"
      ],
      [
        "捨てる（すてる）",
        "throw away"
      ],
      [
        "見捨てる（みすてる）",
        "abandon"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "状",
    "kname": "(byou)jou",
    "kstroke": 7,
    "kmeaning": "form, condition, letter, circumstances",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "状態（じょうたい）",
        "condition, state"
      ],
      [
        "状況（じょうきょう）",
        "situation, circumstances"
      ],
      [
        "形状（けいじょう）",
        "shape [n.]"
      ],
      [
        "液状（えきじょう）",
        "liquid state"
      ],
      [
        "現状（げんじょう）",
        "status quo, present state"
      ],
      [
        "症状（しょうじょう）",
        "symptoms"
      ],
      [
        "病状（びょうじょう）",
        "condition of disease or patient"
      ],
      [
        "賞状（しょうじょう）",
        "certificate of merit"
      ],
      [
        "礼状（れいじょう）",
        "letter of thanks"
      ],
      [
        "招待状（しょうたいじょう）",
        "written invitation"
      ],
      [
        "年賀状（ねんがじょう）",
        "New Year's card"
      ],
      [
        "白状する（はくじょうする）",
        "confess"
      ]
    ],
    "radical": "⽝",
    "rad_order": 118,
    "rad_stroke": 4,
    "rad_name_ja": "いぬ",
    "rad_name": "inu",
    "rad_meaning": "dog",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "年",
    "kname": "nen-toshi",
    "kstroke": 6,
    "kmeaning": "year",
    "kgrade": 1,
    "kunyomi_ja": "とし",
    "kunyomi": "toshi",
    "onyomi_ja": "ネン",
    "onyomi": "nen",
    "examples": [
      [
        "一年生（いちねんせい）",
        "first-year student"
      ],
      [
        "去年（きょねん）",
        "last year"
      ],
      [
        "来年（らいねん）",
        "next year"
      ],
      [
        "中年（ちゅうねん）",
        "middle age"
      ],
      [
        "万年筆（まんねんひつ）",
        "fountain pen"
      ],
      [
        "お年寄り（おとしより）",
        "elderly person"
      ],
      [
        "今年（ことし）",
        "this year"
      ],
      [
        "年上（としうえ）",
        "older"
      ],
      [
        "半年（はんとし）",
        "half a year"
      ]
    ],
    "radical": "⼲",
    "rad_order": 61,
    "rad_stroke": 3,
    "rad_name_ja": "かん",
    "rad_name": "kan",
    "rad_meaning": "to dry, shield",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "作",
    "kname": "saku-tsuku(ru)",
    "kstroke": 7,
    "kmeaning": "make, work",
    "kgrade": 2,
    "kunyomi_ja": "つく、つくる、つくり",
    "kunyomi": "tsuku, tsukuru, tsukuri",
    "onyomi_ja": "サク、サ",
    "onyomi": "saku, sa",
    "examples": [
      [
        "作成する（さくせいする）",
        "produce"
      ],
      [
        "試作する（しさくする）",
        "make a prototype"
      ],
      [
        "作戦（さくせん）",
        "strategy"
      ],
      [
        "作曲家（さっきょくか）",
        "composer"
      ],
      [
        "作曲する（さっきょくする）",
        "compose"
      ],
      [
        "操作する（そうさする）",
        "operate"
      ],
      [
        "作業する（さぎょうする）",
        "work [v.i.]"
      ],
      [
        "動作（どうさ）",
        "movements"
      ],
      [
        "作る（つくる）",
        "make"
      ],
      [
        "形作る（かたちづくる）",
        "form [v.t.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "態",
    "kname": "tai(do)",
    "kstroke": 14,
    "kmeaning": "state, condition",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "態度（たいど）",
        "attitude, behavior, manner"
      ],
      [
        "態勢（たいせい）",
        "conditions, preparations"
      ],
      [
        "状態（じょうたい）",
        "condition, state"
      ],
      [
        "実態（じったい）",
        "true condition"
      ],
      [
        "重態（じゅうたい）",
        "serious condition"
      ],
      [
        "事態（じたい）",
        "state of affairs"
      ],
      [
        "生態系（せいたいけい）",
        "ecosystem"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "勇",
    "kname": "isa(mashii)",
    "kstroke": 9,
    "kmeaning": "brave, be spirited, encouraged",
    "kgrade": 4,
    "kunyomi_ja": "いさ、いさむ、いさましい",
    "kunyomi": "isa, isamu, isamashii",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "勇気（ゆうき）",
        "courage"
      ],
      [
        "勇士（ゆうし）",
        "brave warrior"
      ],
      [
        "武勇伝（ぶゆうでん）",
        "tale of heroic exploits"
      ],
      [
        "勇敢な（ゆうかんな）",
        "brave"
      ],
      [
        "勇退する（ゆうたいする）",
        "retire voluntarily"
      ],
      [
        "勇ましい（いさましい）",
        "brave"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "敢",
    "kname": "kan-a(ete)",
    "kstroke": 12,
    "kmeaning": "bold, boldly, daring",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "勇敢な（ゆうかんな）",
        "brave"
      ],
      [
        "果敢な（かかんな）",
        "bold, resolute"
      ],
      [
        "敢然と（かんぜんと）",
        "boldly"
      ],
      [
        "*敢えて（あえて）",
        "dare to, run a risk of [adv.]"
      ],
      [
        "*取り敢えず（とりあえず）",
        "for the time being"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "派",
    "kname": "ha(batsu)",
    "kstroke": 9,
    "kmeaning": "sect, group, dispatch",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハ",
    "onyomi": "ha",
    "examples": [
      [
        "派閥（はばつ）",
        "political faction"
      ],
      [
        "派出所（はしゅつしょ）",
        "local police station"
      ],
      [
        "特派員（とくはいん）",
        "correspondent"
      ],
      [
        "流派（りゅうは）",
        "school (e.g. of ikebana)"
      ],
      [
        "左派（さは）",
        "left wing"
      ],
      [
        "右派（うは）",
        "right wing"
      ],
      [
        "宗派（しゅうは）",
        "(religious) denomination"
      ],
      [
        "党派（とうは）",
        "faction"
      ],
      [
        "立派な（りっぱな）",
        "splendid"
      ],
      [
        "派手な（はでな）",
        "flashy, gaudy"
      ],
      [
        "派遣する（はけんする）",
        "dispatch"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "再",
    "kname": "futata(bi)",
    "kstroke": 6,
    "kmeaning": "another time, again, twice",
    "kgrade": 5,
    "kunyomi_ja": "ふたた、ふたたび",
    "kunyomi": "futata, futatabi",
    "onyomi_ja": "サイ、サ",
    "onyomi": "sai, sa",
    "examples": [
      [
        "再度（さいど）",
        "again"
      ],
      [
        "再開する（さいかいする）",
        "reopen"
      ],
      [
        "再現する（さいげんする）",
        "reappear, reproduce"
      ],
      [
        "再生する（さいせいする）",
        "playback, regenerate"
      ],
      [
        "再婚する（さいこんする）",
        "remarry"
      ],
      [
        "再会する（さいかいする）",
        "meet again"
      ],
      [
        "再来月（さらいげつ）",
        "month after next"
      ],
      [
        "再来週（さらいしゅう）",
        "week after next"
      ],
      [
        "再来年（さらいねん）",
        "year after next"
      ],
      [
        "再び（ふたたび）",
        "again"
      ]
    ],
    "radical": "⼌",
    "rad_order": 17,
    "rad_stroke": 2,
    "rad_name_ja": "けいがまえ",
    "rad_name": "keigamae",
    "rad_meaning": "to enclose",
    "rad_position_ja": "かまえ, けいがまえ",
    "rad_position": "kamae, keigamae"
  },
  {
    "kanji": "与",
    "kname": "yo-ata(eru)",
    "kstroke": 3,
    "kmeaning": "give, grant",
    "kgrade": "n/a",
    "kunyomi_ja": "あた、あたえる",
    "kunyomi": "ata, ataeru",
    "onyomi_ja": "ヨ",
    "onyomi": "yo",
    "examples": [
      [
        "与党（よとう）",
        "government party"
      ],
      [
        "給与（きゅうよ）",
        "salary"
      ],
      [
        "賞与（しょうよ）",
        "bonus pay"
      ],
      [
        "関与する（かんよする）",
        "participate in, take part in"
      ],
      [
        "寄与する（きよする）",
        "contribute"
      ],
      [
        "贈与する（ぞうよする）",
        "donate"
      ],
      [
        "授与する（じゅよする）",
        "award [v.t.]"
      ],
      [
        "与える（あたえる）",
        "give"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "案",
    "kname": "(gen)an",
    "kstroke": 10,
    "kmeaning": "proposal, plan",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "アン",
    "onyomi": "an",
    "examples": [
      [
        "案（あん）",
        "plan, draft [n.]"
      ],
      [
        "案外（あんがい）",
        "unexpectedly"
      ],
      [
        "案の定（あんのじょう）",
        "sure enough"
      ],
      [
        "名案（めいあん）",
        "good idea"
      ],
      [
        "法案（ほうあん）",
        "bill (law)"
      ],
      [
        "議案（ぎあん）",
        "legislative bill"
      ],
      [
        "答案用紙（とうあんようし）",
        "exam answer sheet"
      ],
      [
        "案内する（あんないする）",
        "guide [v.t.]"
      ],
      [
        "立案する（りつあんする）",
        "draft [v.t.]"
      ],
      [
        "考案する（こうあんする）",
        "plan, devise, contrive"
      ],
      [
        "提案する（ていあんする）",
        "propose"
      ],
      [
        "案じる/ずる（あんじる/ずる）",
        "be anxious, devise a plan"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "美",
    "kname": "utsuku(shii)",
    "kstroke": 9,
    "kmeaning": "beautiful, beauty",
    "kgrade": 3,
    "kunyomi_ja": "うつく、うつくしい",
    "kunyomi": "utsuku, utsukushii",
    "onyomi_ja": "ビ",
    "onyomi": "bi",
    "examples": [
      [
        "美（び）",
        "beauty"
      ],
      [
        "美学（びがく）",
        "aesthetics"
      ],
      [
        "美人（びじん）",
        "beautiful woman"
      ],
      [
        "美女（びじょ）",
        "beautiful woman"
      ],
      [
        "美術館（びじゅつかん）",
        "art museum"
      ],
      [
        "美容院（びよういん）",
        "beauty salon"
      ],
      [
        "美化する（びかする）",
        "beautify, glorify"
      ],
      [
        "賛美する（さんびする）",
        "praise"
      ],
      [
        "優美な（ゆうびな）",
        "graceful"
      ],
      [
        "甘美な（かんびな）",
        "sweet"
      ],
      [
        "美しい（うつくしい）",
        "beautiful"
      ],
      [
        "*美味しい（おいしい）",
        "delicious"
      ]
    ],
    "radical": "⺷",
    "rad_order": 160,
    "rad_stroke": 6,
    "rad_name_ja": "ひつじ",
    "rad_name": "hitsuji",
    "rad_meaning": "sheep",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "絵",
    "kname": "kai(ga)",
    "kstroke": 12,
    "kmeaning": "picture",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カイ、エ",
    "onyomi": "kai, e",
    "examples": [
      [
        "絵画（かいが）",
        "painting"
      ],
      [
        "絵（え）",
        "drawing, painting"
      ],
      [
        "絵はがき（えはがき）",
        "picture postcard"
      ],
      [
        "絵描き（えかき）",
        "painter"
      ],
      [
        "絵本（えほん）",
        "picture book"
      ],
      [
        "油絵（あぶらえ）",
        "oil painting"
      ],
      [
        "墨絵（すみえ）",
        "ink painting"
      ],
      [
        "浮世絵（うきよえ）",
        "ukiyoe print"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "農",
    "kname": "nou(gyou)",
    "kstroke": 13,
    "kmeaning": "farming, agriculture",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "農民（のうみん）",
        "farmers"
      ],
      [
        "農業（のうぎょう）",
        "agriculture"
      ],
      [
        "農家（のうか）",
        "farm family"
      ],
      [
        "農村（のうそん）",
        "farm village"
      ],
      [
        "農場（のうじょう）",
        "farm [n.]"
      ],
      [
        "農協（のうきょう）",
        "agricultural cooperative"
      ],
      [
        "農作物（のうさくもつ）",
        "crops"
      ],
      [
        "農産物（のうさんぶつ）",
        "agricultural produce"
      ],
      [
        "酪農（らくのう）",
        "dairy"
      ]
    ],
    "radical": "⾠",
    "rad_order": 198,
    "rad_stroke": 7,
    "rad_name_ja": "しんのたつ",
    "rad_name": "shinnotatsu",
    "rad_meaning": "Fifth zodiac sign, 7–9 A.M.",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "読",
    "kname": "yo(mu)",
    "kstroke": 14,
    "kmeaning": "read",
    "kgrade": 2,
    "kunyomi_ja": "よ、よむ",
    "kunyomi": "yo, yomu",
    "onyomi_ja": "ドク、トク、トウ",
    "onyomi": "doku, toku, tou",
    "examples": [
      [
        "読者（どくしゃ）",
        "reader"
      ],
      [
        "読書（どくしょ）",
        "reading"
      ],
      [
        "読解力（どっかいりょく）",
        "reading ability"
      ],
      [
        "読本（とくほん）",
        "a reading primer"
      ],
      [
        "読点（とうてん）",
        "comma"
      ],
      [
        "読む（よむ）",
        "read"
      ],
      [
        "読売新聞（よみうりしんぶん）",
        "Yomiuri (newspaper)"
      ],
      [
        "立ち読みする（たちよみする）",
        "browse in a bookstore"
      ],
      [
        "読み方（よみかた）",
        "way of reading"
      ],
      [
        "読み直す（よみなおす）",
        "read something over again"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "描",
    "kname": "byou-ega(ku)",
    "kstroke": 11,
    "kmeaning": "depict, draw, paint",
    "kgrade": "n/a",
    "kunyomi_ja": "えが、えがく",
    "kunyomi": "ega, egaku",
    "onyomi_ja": "ビョウ",
    "onyomi": "byou",
    "examples": [
      [
        "点描（てんびょう）",
        "sketch (using stippling)"
      ],
      [
        "素描（そびょう）",
        "rough sketch"
      ],
      [
        "線描（せんびょう）",
        "line drawing"
      ],
      [
        "描写する（びょうしゃする）",
        "depict, portray, describe"
      ],
      [
        "描く（えがく）",
        "draw, sketch"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "徒",
    "kname": "to(ho)",
    "kstroke": 10,
    "kmeaning": "follower, vain, useless, on foot",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ト",
    "onyomi": "to",
    "examples": [
      [
        "生徒（せいと）",
        "student"
      ],
      [
        "教徒（きょうと）",
        "believer (religion)"
      ],
      [
        "信徒（しんと）",
        "believer (religion)"
      ],
      [
        "使徒（しと）",
        "apostle"
      ],
      [
        "暴徒（ぼうと）",
        "insurgent, rioter"
      ],
      [
        "徒労（とろう）",
        "fruitless effort"
      ],
      [
        "徒歩（とほ）",
        "travel by foot [n.]"
      ],
      [
        "徒弟制度（とていせいど）",
        "apprentice system"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "城",
    "kname": "jou-shiro",
    "kstroke": 9,
    "kmeaning": "castle",
    "kgrade": 6,
    "kunyomi_ja": "しろ",
    "kunyomi": "shiro",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "城下町（じょうかまち）",
        "castle town"
      ],
      [
        "城主（じょうしゅ）",
        "lord of a castle"
      ],
      [
        "城壁（じょうへき）",
        "rampart"
      ],
      [
        "城塞（じょうさい）",
        "fortress"
      ],
      [
        "大阪城（おおさかじょう）",
        "Osaka castle"
      ],
      [
        "築城する（ちくじょうする）",
        "construct a castle"
      ],
      [
        "落城する（らくじょうする）",
        "surrender (a castle) [v.i.]"
      ],
      [
        "城（しろ）",
        "castle"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "激",
    "kname": "geki(sen)",
    "kstroke": 16,
    "kmeaning": "violent, intense, fierce",
    "kgrade": 6,
    "kunyomi_ja": "はげ、はげしい",
    "kunyomi": "hage, hageshii",
    "onyomi_ja": "ゲキ",
    "onyomi": "geki",
    "examples": [
      [
        "激戦（げきせん）",
        "fierce battle"
      ],
      [
        "激痛（げきつう）",
        "severe pain"
      ],
      [
        "急激な（きゅうげきな）",
        "sudden"
      ],
      [
        "過激な（かげきな）",
        "extreme"
      ],
      [
        "激化する（げきかする）",
        "intensify [v.i.]"
      ],
      [
        "激増する（げきぞうする）",
        "increase dramatically"
      ],
      [
        "激減する（げきげんする）",
        "decreasing dramatically"
      ],
      [
        "激励する（げきれいする）",
        "encourage"
      ],
      [
        "激突する（げきとつする）",
        "clash, crash [v.i]"
      ],
      [
        "感激する（かんげきする）",
        "be deeply moved [v.i.]"
      ],
      [
        "刺激する（しげきする）",
        "stimulate"
      ],
      [
        "激しい（はげしい）",
        "intense, fierce, violent"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "異",
    "kname": "koto(naru)",
    "kstroke": 11,
    "kmeaning": "different",
    "kgrade": 6,
    "kunyomi_ja": "こと、ことなる",
    "kunyomi": "koto, kotonaru",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "異質（いしつ）",
        "heterogeneous"
      ],
      [
        "異国（いこく）",
        "foreign country"
      ],
      [
        "異議（いぎ）",
        "objection"
      ],
      [
        "異性（いせい）",
        "the opposite sex"
      ],
      [
        "異色（いしょく）",
        "unique"
      ],
      [
        "異文化（いぶんか）",
        "foreign culture"
      ],
      [
        "異常な（いじょうな）",
        "abnormal"
      ],
      [
        "異様な（いような）",
        "bizarre"
      ],
      [
        "異なる（ことなる）",
        "differ"
      ]
    ],
    "radical": "⽥",
    "rad_order": 128,
    "rad_stroke": 5,
    "rad_name_ja": "た",
    "rad_name": "ta",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "総",
    "kname": "sou(gousuru)",
    "kstroke": 14,
    "kmeaning": "total, general, overall",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "総長（そうちょう）",
        "(college) president"
      ],
      [
        "総額（そうがく）",
        "sum total"
      ],
      [
        "総論（そうろん）",
        "general remarks"
      ],
      [
        "総会（そうかい）",
        "general meeting"
      ],
      [
        "総選挙（そうせんきょ）",
        "general election"
      ],
      [
        "総理大臣（そうりだいじん）",
        "Prime Minister"
      ],
      [
        "総括する（そうかつする）",
        "recap, summarize"
      ],
      [
        "総合する（そうごうする）",
        "put together, integrate"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "注",
    "kname": "chuu-soso(gu)",
    "kstroke": 8,
    "kmeaning": "pour, concentrate, note",
    "kgrade": 3,
    "kunyomi_ja": "そそ、そそぐ",
    "kunyomi": "soso, sosogu",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "注射（ちゅうしゃ）",
        "injection"
      ],
      [
        "注解（ちゅうかい）",
        "explanatory, notes, annotation"
      ],
      [
        "脚注（きゃくちゅう）",
        "footnote"
      ],
      [
        "注目する（ちゅうもくする）",
        "pay attention, watch [v.i.]"
      ],
      [
        "注文する（ちゅうもんする）",
        "order, request [v.t.]"
      ],
      [
        "注視する（ちゅうしする）",
        "gaze steadily at"
      ],
      [
        "注意する（ちゅういする）",
        "be careful, beware [v.i.]"
      ],
      [
        "発注する（はっちゅうする）",
        "place an order"
      ],
      [
        "注ぐ（そそぐ）",
        "pour"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "改",
    "kname": "arata(meru)",
    "kstroke": 7,
    "kmeaning": "reform",
    "kgrade": 4,
    "kunyomi_ja": "あらた、あらためる、あらたまる",
    "kunyomi": "arata, aratameru, aratamaru",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "改革する（かいかくする）",
        "reform"
      ],
      [
        "改良する（かいりょうする）",
        "improve"
      ],
      [
        "改正する（かいせいする）",
        "revise (e.g. law)"
      ],
      [
        "改築する（かいちくする）",
        "rebuild, reconstruct"
      ],
      [
        "改善する（かいぜんする）",
        "improve"
      ],
      [
        "改行する（かいぎょうする）",
        "start a new line or paragraph"
      ],
      [
        "改札口（かいさつぐち）",
        "ticket gate"
      ],
      [
        "改める（あらためる）",
        "revise, change [v.t.]"
      ],
      [
        "改まる（あらたまる）",
        "become formal, be renewed [v.i.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "革",
    "kname": "kaku-kawa",
    "kstroke": 9,
    "kmeaning": "leather, reform",
    "kgrade": 6,
    "kunyomi_ja": "かわ",
    "kunyomi": "kawa",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "革命（かくめい）",
        "revolution"
      ],
      [
        "革新的な（かくしんてきな）",
        "revolutionary"
      ],
      [
        "改革する（かいかくする）",
        "reform [v.t.]"
      ],
      [
        "革（かわ）",
        "leather"
      ],
      [
        "革靴（かわぐつ）",
        "leather shoes"
      ],
      [
        "牛革（ぎゅうかわ）",
        "cowhide"
      ]
    ],
    "radical": "⾰",
    "rad_order": 215,
    "rad_stroke": 9,
    "rad_name_ja": "つくりがわ",
    "rad_name": "tsukurigawa",
    "rad_meaning": "leather",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "任",
    "kname": "nin-maka(su)",
    "kstroke": 6,
    "kmeaning": "office, duty, responsibility, leave to, entrust",
    "kgrade": 5,
    "kunyomi_ja": "まか、まかせる、まかす",
    "kunyomi": "maka, makaseru, makasu",
    "onyomi_ja": "ニン",
    "onyomi": "nin",
    "examples": [
      [
        "任期（にんき）",
        "term of appointment"
      ],
      [
        "任務（にんむ）",
        "duty, task"
      ],
      [
        "任意（にんい）",
        "optional, voluntary"
      ],
      [
        "責任（せきにん）",
        "responsibility"
      ],
      [
        "主任（しゅにん）",
        "chief, manager"
      ],
      [
        "任命する（にんめいする）",
        "appoint"
      ],
      [
        "就任する（しゅうにんする）",
        "be inaugurated, take office [v.i.]"
      ],
      [
        "赴任する（ふにんする）",
        "transfer to a new post [v.i.]"
      ],
      [
        "担任する（たんにんする）",
        "be in charge (class) [v.t.]"
      ],
      [
        "辞任する（じにんする）",
        "resign"
      ],
      [
        "任せる（まかせる）",
        "entrust to another [v.t.]"
      ],
      [
        "任す（まかす）",
        "entrust [v.t.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "週",
    "kname": "shuu(matsu)",
    "kstroke": 11,
    "kmeaning": "week",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "今週（こんしゅう）",
        "this week"
      ],
      [
        "先週（せんしゅう）",
        "last week"
      ],
      [
        "来週（らいしゅう）",
        "next week"
      ],
      [
        "週末（しゅうまつ）",
        "weekend"
      ],
      [
        "一週間（いっしゅうかん）",
        "one week"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "抗",
    "kname": "(tei)kou",
    "kstroke": 7,
    "kmeaning": "resist",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "抗争（こうそう）",
        "resistance"
      ],
      [
        "不可抗力（ふかこうりょく）",
        "irresistible force"
      ],
      [
        "抗議する（こうぎする）",
        "protest [v.i.]"
      ],
      [
        "反抗する（はんこうする）",
        "resist, disobey [v.i.]"
      ],
      [
        "対抗する（たいこうする）",
        "oppose [v.i.]"
      ],
      [
        "抵抗する（ていこうする）",
        "resist, stand against [v.i.]"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "身",
    "kname": "mi(gara)",
    "kstroke": 7,
    "kmeaning": "body, oneself",
    "kgrade": 3,
    "kunyomi_ja": "み",
    "kunyomi": "mi",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "身体（しんたい）",
        "body"
      ],
      [
        "身長（しんちょう）",
        "height (of body)"
      ],
      [
        "身辺（しんぺん）",
        "one's affairs"
      ],
      [
        "全身（ぜんしん）",
        "the whole body"
      ],
      [
        "独身（どくしん）",
        "unmarried [n.]"
      ],
      [
        "出身（しゅっしん）",
        "birth place, graduate [n.]"
      ],
      [
        "自身（じしん）",
        "one's self [n.]"
      ],
      [
        "変身する（へんしんする）",
        "transform, metamorphose [v.i.]"
      ],
      [
        "身（み）",
        "body, meaty part"
      ],
      [
        "身近な（みぢかな）",
        "familiar"
      ],
      [
        "中身（なかみ）",
        "contents"
      ],
      [
        "刺身（さしみ）",
        "sliced raw fish"
      ]
    ],
    "radical": "⾝",
    "rad_order": 194,
    "rad_stroke": 7,
    "rad_name_ja": "み",
    "rad_name": "mi",
    "rad_meaning": "body",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "門",
    "kname": "(nyuu)mon",
    "kstroke": 8,
    "kmeaning": "gate",
    "kgrade": 2,
    "kunyomi_ja": "かど",
    "kunyomi": "kado",
    "onyomi_ja": "モン",
    "onyomi": "mon",
    "examples": [
      [
        "門（もん）",
        "gate"
      ],
      [
        "正門（せいもん）",
        "main gate"
      ],
      [
        "校門（こうもん）",
        "school gate"
      ],
      [
        "専門（せんもん）",
        "speciality"
      ],
      [
        "部門（ぶもん）",
        "category"
      ],
      [
        "名門（めいもん）",
        "distinguished family"
      ],
      [
        "入門する（にゅうもんする）",
        "enter an institute"
      ],
      [
        "破門する（はもんする）",
        "expel"
      ],
      [
        "門（かど）",
        "gate"
      ],
      [
        "門出（かどで）",
        "departure, setting out"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "禁",
    "kname": "kin(shisuru)",
    "kstroke": 13,
    "kmeaning": "prohibit",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キン",
    "onyomi": "kin",
    "examples": [
      [
        "禁制（きんせい）",
        "prohibition, taboo"
      ],
      [
        "禁句（きんく）",
        "taboo phrase"
      ],
      [
        "禁欲的な（きんよくてきな）",
        "ascetic, abstemious"
      ],
      [
        "禁止する（きんしする）",
        "prohibit, ban"
      ],
      [
        "禁煙する（きんえんする）",
        "stop smoking"
      ],
      [
        "禁酒する（きんしゅする）",
        "stop drinking"
      ],
      [
        "厳禁する（げんきんする）",
        "strictly prohibit"
      ],
      [
        "解禁する（かいきんする）",
        "lift a ban"
      ]
    ],
    "radical": "⽰",
    "rad_order": 144,
    "rad_stroke": 5,
    "rad_name_ja": "しめす",
    "rad_name": "shimesu",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "根",
    "kname": "kon-ne",
    "kstroke": 10,
    "kmeaning": "root",
    "kgrade": 3,
    "kunyomi_ja": "ね",
    "kunyomi": "ne",
    "onyomi_ja": "コン",
    "onyomi": "kon",
    "examples": [
      [
        "根拠（こんきょ）",
        "basis"
      ],
      [
        "根性（こんじょう）",
        "will-power, guts"
      ],
      [
        "根気（こんき）",
        "patience"
      ],
      [
        "根本的な（こんぽんてきな）",
        "fundamental"
      ],
      [
        "大根（だいこん）",
        "Japanese white radish"
      ],
      [
        "球根（きゅうこん）",
        "(plant) bulb"
      ],
      [
        "根（ね）",
        "root"
      ],
      [
        "根元（ねもと）",
        "root, base"
      ],
      [
        "根回し（ねまわし）",
        "groundwork, preparatory work"
      ],
      [
        "根強い（ねづよい）",
        "firmly rooted"
      ],
      [
        "屋根（やね）",
        "roof"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "提",
    "kname": "tei-sa(geru)",
    "kstroke": 12,
    "kmeaning": "present, submit",
    "kgrade": 5,
    "kunyomi_ja": "さげる、さ",
    "kunyomi": "sageru, sa",
    "onyomi_ja": "テイ",
    "onyomi": "tei",
    "examples": [
      [
        "前提（ぜんてい）",
        "premise"
      ],
      [
        "提案する（ていあんする）",
        "propose"
      ],
      [
        "提示する（ていじする）",
        "exhibit, suggest"
      ],
      [
        "提出する（ていしゅつする）",
        "submit"
      ],
      [
        "提供する（ていきょうする）",
        "offer [v.t.]"
      ],
      [
        "提議する（ていぎする）",
        "propose a topic"
      ],
      [
        "提携する（ていけいする）",
        "cooperate, align with"
      ],
      [
        "提げる（さげる）",
        "hold in one's hand"
      ],
      [
        "*提灯（ちょうちん）",
        "lantern"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "稲",
    "kname": "ine",
    "kstroke": 14,
    "kmeaning": "rice plant",
    "kgrade": "n/a",
    "kunyomi_ja": "いね、いな",
    "kunyomi": "ine, ina",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "水稲（すいとう）",
        "wet-land rice"
      ],
      [
        "稲（いね）",
        "rice-plant"
      ],
      [
        "稲刈り（いねかり）",
        "rice reaping"
      ],
      [
        "稲作（いなさく）",
        "rice crop"
      ],
      [
        "稲穂（いなほ）",
        "ear of rice"
      ],
      [
        "稲荷（いなり）",
        "Inari shrine"
      ],
      [
        "稲妻（いなづま）",
        "lightning"
      ],
      [
        "稲光（いなびかり）",
        "lightning"
      ],
      [
        "*早稲田（わせだ）",
        "Waseda (place name)"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "耕",
    "kname": "tagaya(su)",
    "kstroke": 10,
    "kmeaning": "till, cultivate, plough",
    "kgrade": 5,
    "kunyomi_ja": "たがや、たがやす",
    "kunyomi": "tagaya, tagayasu",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "耕作（こうさく）",
        "farming"
      ],
      [
        "耕地（こうち）",
        "arable land"
      ],
      [
        "耕運機（こううんき）",
        "farm tractor"
      ],
      [
        "農耕（のうこう）",
        "agriculture, farming"
      ],
      [
        "耕す（たがやす）",
        "plow [v.t.]"
      ]
    ],
    "radical": "⽾",
    "rad_order": 162,
    "rad_stroke": 6,
    "rad_name_ja": "らいすき",
    "rad_name": "raisuki",
    "rad_meaning": "plow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "営",
    "kname": "itona(mu)",
    "kstroke": 12,
    "kmeaning": "manage, barracks, conduct business",
    "kgrade": 5,
    "kunyomi_ja": "いとな、いとなむ、いとなみ",
    "kunyomi": "itona, itonamu, itonami",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "営利（えいり）",
        "profit making, gain [n.]"
      ],
      [
        "陣営（じんえい）",
        "camp [n.]"
      ],
      [
        "都営（とえい）",
        "run by the city Tokyo"
      ],
      [
        "市営（しえい）",
        "run by the city, municipal"
      ],
      [
        "営業する（えいぎょうする）",
        "run a business"
      ],
      [
        "経営する（けいえいする）",
        "manage"
      ],
      [
        "運営する（うんえいする）",
        "administer"
      ],
      [
        "営む（いとなむ）",
        "hold (ceremony), run (business)"
      ]
    ],
    "radical": "⺍",
    "rad_order": 75,
    "rad_stroke": 3,
    "rad_name_ja": "つ",
    "rad_name": "tsu",
    "rad_meaning": "Katakana Tsu",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "展",
    "kname": "ten(jisuru)",
    "kstroke": 10,
    "kmeaning": "unfold, display, expand",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テン",
    "onyomi": "ten",
    "examples": [
      [
        "展覧会（てんらんかい）",
        "exhibition"
      ],
      [
        "展望（てんぼう）",
        "view, outlook"
      ],
      [
        "個展（こてん）",
        "one person exhibition"
      ],
      [
        "展開する（てんかいする）",
        "develop"
      ],
      [
        "展示する（てんじする）",
        "exhibit, display"
      ],
      [
        "発展する（はってんする）",
        "develop, grow"
      ],
      [
        "進展する（しんてんする）",
        "progress [v.i.]"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "回",
    "kname": "kai-mawa(ru)",
    "kstroke": 6,
    "kmeaning": "turn round, time",
    "kgrade": 2,
    "kunyomi_ja": "まわ、まわる、まわす",
    "kunyomi": "mawa, mawaru, mawasu",
    "onyomi_ja": "カイ、エ",
    "onyomi": "kai, e",
    "examples": [
      [
        "回数券（かいすうけん）",
        "book of tickets"
      ],
      [
        "何回（なんかい）",
        "how many times"
      ],
      [
        "三回（さんかい）",
        "3 times"
      ],
      [
        "今回（こんかい）",
        "this time"
      ],
      [
        "最終回（さいしゅうかい）",
        "last part"
      ],
      [
        "回転する（かいてんする）",
        "rotate"
      ],
      [
        "回向（えこう）",
        "Buddhist memorial service"
      ],
      [
        "回る（まわる）",
        "turn round [v.i.]"
      ],
      [
        "回す（まわす）",
        "turn round [v.t.]"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "疑",
    "kname": "utaga(u)",
    "kstroke": 14,
    "kmeaning": "doubt",
    "kgrade": 6,
    "kunyomi_ja": "うたが、うたがう、うたがい",
    "kunyomi": "utaga, utagau, utagai",
    "onyomi_ja": "ギ",
    "onyomi": "gi",
    "examples": [
      [
        "疑問（ぎもん）",
        "question, doubt [n.]"
      ],
      [
        "疑問詞（ぎもんし）",
        "interrogative word"
      ],
      [
        "疑惑（ぎわく）",
        "suspicion"
      ],
      [
        "容疑者（ようぎしゃ）",
        "suspect [n.]"
      ],
      [
        "半信半疑（はんしんはんぎ）",
        "half in doubt"
      ],
      [
        "質疑応答（しつぎおうとう）",
        "question and answer session"
      ],
      [
        "疑う（うたがう）",
        "doubt, suspect [v.t.]"
      ],
      [
        "疑わしい（うたがわしい）",
        "questionable, suspicious"
      ]
    ],
    "radical": "⽦",
    "rad_order": 130,
    "rad_stroke": 5,
    "rad_name_ja": "ひき",
    "rad_name": "hiki",
    "rad_meaning": "bolt of cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "漁",
    "kname": "gyo(gyou)",
    "kstroke": 14,
    "kmeaning": "fish, fishing",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ギョ、リョウ",
    "onyomi": "gyo, ryou",
    "examples": [
      [
        "漁村（ぎょそん）",
        "fishing village"
      ],
      [
        "漁業（ぎょぎょう）",
        "fishing"
      ],
      [
        "漁船（ぎょせん）",
        "fishing boat"
      ],
      [
        "漁（りょう）",
        "fishing catch"
      ],
      [
        "漁師（りょうし）",
        "fisherman"
      ],
      [
        "出漁する（しゅつりょうする）",
        "go fishing"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "突",
    "kname": "totsu-tsu(ku)",
    "kstroke": 8,
    "kmeaning": "dash, thrust, poke, strike",
    "kgrade": "n/a",
    "kunyomi_ja": "つ、つく",
    "kunyomi": "tsu, tsuku",
    "onyomi_ja": "トツ",
    "onyomi": "totsu",
    "examples": [
      [
        "突然（とつぜん）",
        "suddenly"
      ],
      [
        "煙突（えんとつ）",
        "chimney"
      ],
      [
        "突撃する（とつげきする）",
        "charge, rush at"
      ],
      [
        "突入する（とつにゅうする）",
        "rush into"
      ],
      [
        "突進する（とっしんする）",
        "rush, charge"
      ],
      [
        "突破する（とっぱする）",
        "break through"
      ],
      [
        "衝突する（しょうとつする）",
        "collide"
      ],
      [
        "追突する（ついとつする）",
        "collide (from behind)"
      ],
      [
        "突飛な（とっぴな）",
        "wild, extraordinary"
      ],
      [
        "突く（つく）",
        "poke, nudge"
      ]
    ],
    "radical": "",
    "rad_order": 147,
    "rad_stroke": 5,
    "rad_name_ja": "あなかんむり",
    "rad_name": "anakanmuri",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "批",
    "kname": "hi(han)",
    "kstroke": 7,
    "kmeaning": "criticize, critique",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "批評家（ひひょうか）",
        "critic"
      ],
      [
        "批判する（ひはんする）",
        "criticize"
      ],
      [
        "批評する（ひひょうする）",
        "review (a book, etc.)"
      ],
      [
        "批難する（ひなんする）",
        "blame [v.t.]"
      ],
      [
        "批判的な（ひはんてきな）",
        "critical"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "端",
    "kname": "tan-hashi",
    "kstroke": 14,
    "kmeaning": "end, edge, side",
    "kgrade": "n/a",
    "kunyomi_ja": "はし、は、はた",
    "kunyomi": "hashi, ha, hata",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "端子（たんし）",
        "terminal"
      ],
      [
        "端的な（たんてきな）",
        "frank"
      ],
      [
        "先端（せんたん）",
        "pointed end"
      ],
      [
        "発端（ほったん）",
        "the beginning"
      ],
      [
        "末端（まったん）",
        "tip, extremity"
      ],
      [
        "途端に（とたんに）",
        "just as, just when"
      ],
      [
        "極端な（きょくたんな）",
        "extreme"
      ],
      [
        "端（はし）",
        "edge"
      ],
      [
        "両端（りょうはし）",
        "both ends"
      ],
      [
        "右端（みぎはし）",
        "right end"
      ],
      [
        "端数（はすう）",
        "fraction"
      ],
      [
        "道端（みちばた）",
        "roadside"
      ]
    ],
    "radical": "",
    "rad_order": 149,
    "rad_stroke": 5,
    "rad_name_ja": "たつへん",
    "rad_name": "tatsuhen",
    "rad_meaning": "to stand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "列",
    "kname": "retsu",
    "kstroke": 6,
    "kmeaning": "row",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "レツ",
    "onyomi": "retsu",
    "examples": [
      [
        "列（れつ）",
        "line"
      ],
      [
        "列車（れっしゃ）",
        "train"
      ],
      [
        "列島（れっとう）",
        "chain of islands"
      ],
      [
        "行列（ぎょうれつ）",
        "line, procession, matrix"
      ],
      [
        "前列（ぜんれつ）",
        "front row"
      ],
      [
        "後列（こうれつ）",
        "back row"
      ],
      [
        "系列（けいれつ）",
        "a group of businesses"
      ],
      [
        "列挙する（れっきょする）",
        "enumerate, list"
      ],
      [
        "整列する（せいれつする）",
        "stand in a row [v.i.]"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "即",
    "kname": "soku(bai)",
    "kstroke": 7,
    "kmeaning": "immediate, namely, conform",
    "kgrade": "n/a",
    "kunyomi_ja": "すなわ、すなわち",
    "kunyomi": "sunawa, sunawachi",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "即刻（そっこく）",
        "instantly"
      ],
      [
        "即興（そっきょう）",
        "improvised, impromptu"
      ],
      [
        "即効性（そっこうせい）",
        "immediate effect"
      ],
      [
        "即座に（そくざに）",
        "right away"
      ],
      [
        "即死する（そくしする）",
        "die instantly"
      ],
      [
        "即答する（そくとうする）",
        "reply immediately"
      ],
      [
        "即する（そくする）",
        "conform to"
      ],
      [
        "即ち（すなわち）",
        "namely"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "指",
    "kname": "yubi",
    "kstroke": 9,
    "kmeaning": "finger, point",
    "kgrade": 3,
    "kunyomi_ja": "ゆび、さ、さす",
    "kunyomi": "yubi, sa, sasu",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "指紋（しもん）",
        "fingerprint"
      ],
      [
        "指令（しれい）",
        "orders"
      ],
      [
        "指揮者（しきしゃ）",
        "(orchestral) conductor"
      ],
      [
        "指定席（していせき）",
        "reserved seat"
      ],
      [
        "指定する（していする）",
        "specify"
      ],
      [
        "指示する（しじする）",
        "instruct"
      ],
      [
        "指摘する（してきする）",
        "point out"
      ],
      [
        "指導する（しどうする）",
        "guide, lead, coach [v.t.]"
      ],
      [
        "指（ゆび）",
        "finger [n.]"
      ],
      [
        "指輪（ゆびわ）",
        "ring"
      ],
      [
        "親指（おやゆび）",
        "thumb"
      ],
      [
        "指す（さす）",
        "point at"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "値",
    "kname": "atai",
    "kstroke": 10,
    "kmeaning": "value, price",
    "kgrade": 6,
    "kunyomi_ja": "ね、あたい",
    "kunyomi": "ne, atai",
    "onyomi_ja": "チ",
    "onyomi": "chi",
    "examples": [
      [
        "価値（かち）",
        "value"
      ],
      [
        "数値（すうち）",
        "numerical value"
      ],
      [
        "平均値（へいきんち）",
        "mean value"
      ],
      [
        "値段（ねだん）",
        "price"
      ],
      [
        "値上げ（ねあげ）",
        "mark-up"
      ],
      [
        "値切る（ねぎる）",
        "knock down a price"
      ],
      [
        "値引きする（ねびきする）",
        "discount [v.t.]"
      ],
      [
        "値する（あたいする）",
        "be worth it, be deserving"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "熟",
    "kname": "juku-u(reru)",
    "kstroke": 15,
    "kmeaning": "mature, ripen",
    "kgrade": 6,
    "kunyomi_ja": "う、うれる",
    "kunyomi": "u, ureru",
    "onyomi_ja": "ジュク",
    "onyomi": "juku",
    "examples": [
      [
        "熟す（じゅくす）",
        "ripen"
      ],
      [
        "熟語（じゅくご）",
        "idiom"
      ],
      [
        "未熟な（みじゅくな）",
        "inexperienced"
      ],
      [
        "早熟な（そうじゅくな）",
        "precocious"
      ],
      [
        "熟練する（じゅくれんする）",
        "become skilled"
      ],
      [
        "熟成する（じゅくせいする）",
        "mature [v.i.]"
      ],
      [
        "成熟する（せいじゅくする）",
        "mature [v.i.]"
      ],
      [
        "円熟する（えんじゅくする）",
        "reach perfection [v.i.]"
      ],
      [
        "熟れる（うれる）",
        "ripen"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "明",
    "kname": "aka(rui)",
    "kstroke": 8,
    "kmeaning": "bright, clear",
    "kgrade": 2,
    "kunyomi_ja": "あ、あける、あか、あかるい、あからむ、あき、あきらか",
    "kunyomi": "a, akeru, aka, akarui, akaramu, aki, akiraka",
    "onyomi_ja": "メイ、ミョウ",
    "onyomi": "mei, myou",
    "examples": [
      [
        "証明する（しょうめいする）",
        "prove"
      ],
      [
        "説明する（せつめいする）",
        "explain"
      ],
      [
        "賢明な（けんめいな）",
        "wise"
      ],
      [
        "明治（めいじ）",
        "Meiji era"
      ],
      [
        "明晩（みょうばん）",
        "tomorrow evening"
      ],
      [
        "夜明け（よあけ）",
        "dawn"
      ],
      [
        "明くる日（あくるひ）",
        "following day"
      ],
      [
        "明るい（あかるい）",
        "bright, cheerful"
      ],
      [
        "明らむ（あからむ）",
        "become luminous"
      ],
      [
        "明らかな（あきらかな）",
        "obvious"
      ],
      [
        "*明後日（あさって）",
        "day after tomorrow"
      ],
      [
        "*明日（あした/あす）",
        "tomorrow"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "易",
    "kname": "eki-yasa(shii)",
    "kstroke": 8,
    "kmeaning": "easy, exchange",
    "kgrade": 5,
    "kunyomi_ja": "やさ、やさしい、やすい",
    "kunyomi": "yasa, yasashii, yasui",
    "onyomi_ja": "エキ、イ",
    "onyomi": "eki, i",
    "examples": [
      [
        "易者（えきしゃ）",
        "fortuneteller"
      ],
      [
        "貿易（ぼうえき）",
        "trade [n.]"
      ],
      [
        "容易な（よういな）",
        "easy"
      ],
      [
        "安易な（あんいな）",
        "easy-going"
      ],
      [
        "難易度（なんいど）",
        "degree of difficulty"
      ],
      [
        "易しい（やさしい）",
        "easy"
      ],
      [
        "壊れ易い（こわれやすい）",
        "fragile"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "皇",
    "kname": "kou(taishi)",
    "kstroke": 9,
    "kmeaning": "emperor",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ、オウ",
    "onyomi": "kou, ou",
    "examples": [
      [
        "皇帝（こうてい）",
        "emperor"
      ],
      [
        "皇后（こうごう）",
        "empress"
      ],
      [
        "皇太子（こうたいし）",
        "crown prince"
      ],
      [
        "皇室（こうしつ）",
        "Imperial household"
      ],
      [
        "皇居（こうきょ）",
        "Imperial Palace"
      ],
      [
        "天皇（てんのう）",
        "Emperor of Japan"
      ]
    ],
    "radical": "⽩",
    "rad_order": 133,
    "rad_stroke": 5,
    "rad_name_ja": "しろ",
    "rad_name": "shiro",
    "rad_meaning": "white",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "権",
    "kname": "ken(ri)",
    "kstroke": 15,
    "kmeaning": "right, power, authority",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン、ゴン",
    "onyomi": "ken, gon",
    "examples": [
      [
        "権利（けんり）",
        "right"
      ],
      [
        "権限（けんげん）",
        "power, jurisdiction"
      ],
      [
        "権威（けんい）",
        "authority"
      ],
      [
        "権力（けんりょく）",
        "power"
      ],
      [
        "特権（とっけん）",
        "privilege"
      ],
      [
        "人権（じんけん）",
        "human rights"
      ],
      [
        "政権（せいけん）",
        "political power"
      ],
      [
        "参政権（さんせいけん）",
        "suffrage"
      ],
      [
        "所有権（しょゆうけん）",
        "right of ownership"
      ],
      [
        "有権者（ゆうけんしゃ）",
        "electorate"
      ],
      [
        "三権分立（さんけんぶんりつ）",
        "separation of powers"
      ],
      [
        "権化（ごんげ）",
        "incarnation"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "神",
    "kname": "shin-kami",
    "kstroke": 9,
    "kmeaning": "god, mind",
    "kgrade": 3,
    "kunyomi_ja": "かみ、かん、こう",
    "kunyomi": "kami, kan, kou",
    "onyomi_ja": "シン、ジン",
    "onyomi": "shin, jin",
    "examples": [
      [
        "神道（しんとう）",
        "Shinto"
      ],
      [
        "神話（しんわ）",
        "myth"
      ],
      [
        "神経（しんけい）",
        "nerve, sensitivity"
      ],
      [
        "神聖な（しんせいな）",
        "sacred"
      ],
      [
        "精神（せいしん）",
        "mind, spirit"
      ],
      [
        "失神する（しっしんする）",
        "faint [v.i.]"
      ],
      [
        "神社（じんじゃ）",
        "Shinto shrine"
      ],
      [
        "神（かみ）",
        "god"
      ],
      [
        "神業（かみわざ）",
        "miracle"
      ],
      [
        "神主（かんぬし）",
        "Shinto priest"
      ],
      [
        "神戸（こうべ）",
        "Kobe"
      ],
      [
        "*神輿（みこし）",
        "portable shrine"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "免",
    "kname": "manuga(reru)",
    "kstroke": 8,
    "kmeaning": "exempt, escape, avoid",
    "kgrade": "n/a",
    "kunyomi_ja": "まぬか、まぬかれる",
    "kunyomi": "manuka, manukareru",
    "onyomi_ja": "メン",
    "onyomi": "men",
    "examples": [
      [
        "免許（めんきょ）",
        "license, certificate"
      ],
      [
        "免税（めんぜい）",
        "tax exemption"
      ],
      [
        "免疫（めんえき）",
        "immunity"
      ],
      [
        "免責する（めんせきする）",
        "exempt from responsibility"
      ],
      [
        "免職する（めんしょくする）",
        "dismiss from office"
      ],
      [
        "免除する（めんじょする）",
        "discharge"
      ],
      [
        "御免なさい（ごめんなさい）",
        "I am sorry, excuse me"
      ],
      [
        "免れる（まぬかれる）",
        "escape from"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "逆",
    "kname": "saka(rau)",
    "kstroke": 9,
    "kmeaning": "reverse, be contrary",
    "kgrade": 5,
    "kunyomi_ja": "さか、さかさ、さからう",
    "kunyomi": "saka, sakasa, sakarau",
    "onyomi_ja": "ギャク",
    "onyomi": "gyaku",
    "examples": [
      [
        "逆（ぎゃく）",
        "opposite [n.]"
      ],
      [
        "逆説（ぎゃくせつ）",
        "paradox"
      ],
      [
        "逆流（ぎゃくりゅう）",
        "counter-current"
      ],
      [
        "逆境（ぎゃっきょう）",
        "adversity"
      ],
      [
        "逆効果（ぎゃくこうか）",
        "opposite effect"
      ],
      [
        "逆転する（ぎゃくてんする）",
        "reverse [v.i.]"
      ],
      [
        "反逆する（はんぎゃくする）",
        "rebel [v.i.]"
      ],
      [
        "逆さま（さかさま）",
        "upside down"
      ],
      [
        "逆らう（さからう）",
        "go against, disobey"
      ],
      [
        "逆立ち（さかだち）",
        "handstand"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "製",
    "kname": "(te)sei",
    "kstroke": 14,
    "kmeaning": "manufacture, produce, make",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "製品（せいひん）",
        "manufactured goods"
      ],
      [
        "製図（せいず）",
        "drafting, drawing"
      ],
      [
        "製造業（せいぞうぎょう）",
        "manufacturing industry"
      ],
      [
        "日本製（にほんせい）",
        "Japan made"
      ],
      [
        "特製（とくせい）",
        "specially made"
      ],
      [
        "手製（てせい）",
        "handmade"
      ],
      [
        "木製（もくせい）",
        "made of wood"
      ],
      [
        "製作する（せいさくする）",
        "manufacture"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "偉",
    "kname": "era(i)",
    "kstroke": 12,
    "kmeaning": "great, eminent, remarkable",
    "kgrade": "n/a",
    "kunyomi_ja": "えら、えらい",
    "kunyomi": "era, erai",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "偉才（いさい）",
        "great talent"
      ],
      [
        "偉業（いぎょう）",
        "great enterprise"
      ],
      [
        "偉大な（いだいな）",
        "great, grand"
      ],
      [
        "偉い（えらい）",
        "remarkable"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "故",
    "kname": "yue",
    "kstroke": 9,
    "kmeaning": "old, the late, deceased, reason",
    "kgrade": 5,
    "kunyomi_ja": "ゆえ",
    "kunyomi": "yue",
    "onyomi_ja": "コ",
    "onyomi": "ko",
    "examples": [
      [
        "故郷（こきょう）",
        "home town"
      ],
      [
        "故国（ここく）",
        "one's native land"
      ],
      [
        "故人（こじん）",
        "the deceased"
      ],
      [
        "故田中氏（こたなかし）",
        "the late Mr. Tanaka"
      ],
      [
        "事故（じこ）",
        "accident"
      ],
      [
        "故意に（こいに）",
        "purposefully"
      ],
      [
        "故障する（こしょうする）",
        "break down, malfunction [v.i.]"
      ],
      [
        "故（ゆえ）",
        "reason [n.]"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "修",
    "kname": "shuu(ri)",
    "kstroke": 10,
    "kmeaning": "cultivate, repair, study, master",
    "kgrade": 5,
    "kunyomi_ja": "おさ、おさめる、おさまる",
    "kunyomi": "osa, osameru, osamaru",
    "onyomi_ja": "シュウ、シュ",
    "onyomi": "shuu, shu",
    "examples": [
      [
        "修士（しゅうし）",
        "Master's degree"
      ],
      [
        "研修（けんしゅう）",
        "(in-service) training"
      ],
      [
        "必修科目（ひっしゅうかもく）",
        "required course"
      ],
      [
        "修理する（しゅうりする）",
        "repair"
      ],
      [
        "修正する（しゅうせいする）",
        "modify"
      ],
      [
        "補修する（ほしゅうする）",
        "repair"
      ],
      [
        "改修する（かいしゅうする）",
        "revise"
      ],
      [
        "履修する（りしゅうする）",
        "take a class"
      ],
      [
        "修行する（しゅぎょうする）",
        "receive training (education)"
      ],
      [
        "修める（おさめる）",
        "study to complete, master [v.t.]"
      ],
      [
        "修まる（おさまる）",
        "govern oneself [v.i.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "早",
    "kname": "sou-haya(i)",
    "kstroke": 6,
    "kmeaning": "early, quick",
    "kgrade": 1,
    "kunyomi_ja": "はや、はやい、はやまる、はやめる、はやく",
    "kunyomi": "haya, hayai, hayamaru, hayameru, hayaku",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "早朝（そうちょう）",
        "early morning"
      ],
      [
        "早急な（そうきゅうな）",
        "urgent"
      ],
      [
        "早い（はやい）",
        "early"
      ],
      [
        "早起きする（はやおきする）",
        "wake up early"
      ],
      [
        "早まる（はやまる）",
        "be rash [v.i.]"
      ],
      [
        "早める（はやめる）",
        "hasten [v.t.]"
      ],
      [
        "*早速（さっそく）",
        "immediately"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "街",
    "kname": "gai-machi",
    "kstroke": 12,
    "kmeaning": "city quarter, street",
    "kgrade": 4,
    "kunyomi_ja": "まち",
    "kunyomi": "machi",
    "onyomi_ja": "ガイ、カイ",
    "onyomi": "gai, kai",
    "examples": [
      [
        "街灯（がいとう）",
        "street light"
      ],
      [
        "街路樹（がいろじゅ）",
        "roadside trees"
      ],
      [
        "繁華街（はんかがい）",
        "bustling street"
      ],
      [
        "住宅街（じゅうたくがい）",
        "residential area"
      ],
      [
        "商店街（しょうてんがい）",
        "shopping district"
      ],
      [
        "地下街（ちかがい）",
        "underground shopping center"
      ],
      [
        "街道（かいどう）",
        "highway"
      ],
      [
        "街（まち）",
        "street, town"
      ],
      [
        "街角（まちかど）",
        "street corner"
      ]
    ],
    "radical": "⾏",
    "rad_order": 176,
    "rad_stroke": 6,
    "rad_name_ja": "ぎょうがまえ",
    "rad_name": "gyougamae",
    "rad_meaning": "to go",
    "rad_position_ja": "かまえ, ぎょうがまえ",
    "rad_position": "kamae, gyougamae"
  },
  {
    "kanji": "停",
    "kname": "tei(shisuru)",
    "kstroke": 11,
    "kmeaning": "halt, stop",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テイ",
    "onyomi": "tei",
    "examples": [
      [
        "停学（ていがく）",
        "suspension from school"
      ],
      [
        "停職（ていしょく）",
        "suspension from work"
      ],
      [
        "バス停（バスてい）",
        "bus stop"
      ],
      [
        "停車する（ていしゃする）",
        "stop one's car"
      ],
      [
        "停止する（ていしする）",
        "stop [v.i., v.t.]"
      ],
      [
        "停電する（ていでんする）",
        "go out, get cut off (electricity)"
      ],
      [
        "停戦する（ていせんする）",
        "suspend hostilities"
      ],
      [
        "停滞する（ていたいする）",
        "stagnate"
      ],
      [
        "調停する（ちょうていする）",
        "conciliate"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "路",
    "kname": "(tsuu)ro",
    "kstroke": 13,
    "kmeaning": "road, way, street",
    "kgrade": 3,
    "kunyomi_ja": "じ",
    "kunyomi": "ji",
    "onyomi_ja": "ロ",
    "onyomi": "ro",
    "examples": [
      [
        "路上（ろじょう）",
        "street-side, road-side"
      ],
      [
        "路線（ろせん）",
        "route, line"
      ],
      [
        "路地（ろじ）",
        "alley"
      ],
      [
        "道路（どうろ）",
        "road"
      ],
      [
        "線路（せんろ）",
        "train track"
      ],
      [
        "通路（つうろ）",
        "passage"
      ],
      [
        "回路（かいろ）",
        "circuit"
      ],
      [
        "滑走路（かっそうろ）",
        "runway"
      ],
      [
        "旅路（たびじ）",
        "journey"
      ]
    ],
    "radical": "⻊",
    "rad_order": 193,
    "rad_stroke": 7,
    "rad_name_ja": "あしへん",
    "rad_name": "ashihen",
    "rad_meaning": "foot, leg",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "章",
    "kname": "(kun)shou",
    "kstroke": 11,
    "kmeaning": "chapter, badge",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "章（しょう）",
        "chapter"
      ],
      [
        "文章（ぶんしょう）",
        "sentence [n.]"
      ],
      [
        "校章（こうしょう）",
        "school badge"
      ],
      [
        "勲章（くんしょう）",
        "medal"
      ],
      [
        "第一章（だいいっしょう）",
        "first chapter"
      ]
    ],
    "radical": "⽴",
    "rad_order": 148,
    "rad_stroke": 5,
    "rad_name_ja": "たつ",
    "rad_name": "tatsu",
    "rad_meaning": "to stand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "政",
    "kname": "(gyou)sei",
    "kstroke": 9,
    "kmeaning": "political administration, government, rule",
    "kgrade": 5,
    "kunyomi_ja": "まつりごと",
    "kunyomi": "matsurigoto",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "政府（せいふ）",
        "government"
      ],
      [
        "政治（せいじ）",
        "politics"
      ],
      [
        "政権（せいけん）",
        "political power"
      ],
      [
        "政策（せいさく）",
        "policy"
      ],
      [
        "政党（せいとう）",
        "political party"
      ],
      [
        "政界（せいかい）",
        "political world"
      ],
      [
        "政局（せいきょく）",
        "political situation"
      ],
      [
        "政治家（せいじか）",
        "politician"
      ],
      [
        "行政（ぎょうせい）",
        "administration"
      ],
      [
        "財政（ざいせい）",
        "financial affairs"
      ],
      [
        "摂政（せっしょう）",
        "regency"
      ],
      [
        "政（まつりごと）",
        "politics"
      ]
    ],
    "radical": "⺙",
    "rad_order": 86,
    "rad_stroke": 4,
    "rad_name_ja": "ぼくづくり",
    "rad_name": "bokuzukuri",
    "rad_meaning": "activity, to strike, hit",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "府",
    "kname": "(souri)fu",
    "kstroke": 8,
    "kmeaning": "urban prefecture, government office, capital city",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "府立（ふりつ）",
        "managed by an urban prefecture"
      ],
      [
        "首府（しゅふ）",
        "metropolis"
      ],
      [
        "政府（せいふ）",
        "government"
      ],
      [
        "幕府（ばくふ）",
        "bakufu, shogunate"
      ],
      [
        "大阪府（おおさかふ）",
        "Osaka prefecture"
      ],
      [
        "京都府（きょうとふ）",
        "Kyoto prefecture"
      ],
      [
        "総理府（そうりふ）",
        "Prime Minister's office"
      ],
      [
        "無政府（むせいふ）",
        "anarchy"
      ],
      [
        "都道府県（とどうふけん）",
        "administrative divisions of Japan"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "堅",
    "kname": "ken-kata(i)",
    "kstroke": 12,
    "kmeaning": "firm, hard, solid",
    "kgrade": "n/a",
    "kunyomi_ja": "かた、かたい、かたさ",
    "kunyomi": "kata, katai, katasa",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "堅実な（けんじつな）",
        "reliable, solid"
      ],
      [
        "堅固な（けんごな）",
        "solid, firm"
      ],
      [
        "中堅（ちゅうけん）",
        "backbone, mainstay, center"
      ],
      [
        "堅い（かたい）",
        "firm, hard, formal (writing)"
      ],
      [
        "堅苦しい（かたくるしい）",
        "stiff (mannered)"
      ],
      [
        "堅物（かたぶつ）",
        "overly serious person"
      ],
      [
        "手堅い（てがたい）",
        "secure [adj.]"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "担",
    "kname": "tan-nina(u)",
    "kstroke": 8,
    "kmeaning": "bear on shoulder, undertake",
    "kgrade": 6,
    "kunyomi_ja": "かつ、かつぐ、にな、になう",
    "kunyomi": "katsu, katsugu, nina, ninau",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "担保（たんぽ）",
        "security deposit"
      ],
      [
        "担当する（たんとうする）",
        "be in charge"
      ],
      [
        "担任する（たんにんする）",
        "be in charge (class)"
      ],
      [
        "負担する（ふたんする）",
        "bear a burden"
      ],
      [
        "分担する（ぶんたんする）",
        "apportion [v.t.]"
      ],
      [
        "担ぐ（かつぐ）",
        "carry on one's shoulder"
      ],
      [
        "担う（になう）",
        "bear to one's shoulder"
      ],
      [
        "担い手（にないて）",
        "person in charge"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "産",
    "kname": "san-u(mu)",
    "kstroke": 11,
    "kmeaning": "give birth, produce",
    "kgrade": 4,
    "kunyomi_ja": "う、うむ、うまれる、うぶ",
    "kunyomi": "u, umu, umareru, ubu",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "産業（さんぎょう）",
        "industry"
      ],
      [
        "産地（さんち）",
        "area"
      ],
      [
        "名産（めいさん）",
        "local specialty"
      ],
      [
        "財産（ざいさん）",
        "assets"
      ],
      [
        "不動産（ふどうさん）",
        "real estate"
      ],
      [
        "共産主義（きょうさんしゅぎ）",
        "communism"
      ],
      [
        "産出する（さんしゅつする）",
        "yield [v.t.]"
      ],
      [
        "倒産する（とうさんする）",
        "go bankrupt (company)"
      ],
      [
        "破産する（はさんする）",
        "go bankrupt"
      ],
      [
        "出産する（しゅっさんする）",
        "give birth to"
      ],
      [
        "産む（うむ）",
        "give birth to"
      ],
      [
        "産声（うぶごえ）",
        "baby's first cry"
      ]
    ],
    "radical": "⽣",
    "rad_order": 126,
    "rad_stroke": 5,
    "rad_name_ja": "うまれる",
    "rad_name": "umareru",
    "rad_meaning": "birth, to be born, live",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "省",
    "kname": "habu(ku)",
    "kstroke": 9,
    "kmeaning": "ministry, save, reflect on, omit",
    "kgrade": 4,
    "kunyomi_ja": "かえり、かえりみる、はぶ、はぶく",
    "kunyomi": "kaeri, kaerimiru, habu, habuku",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "反省する（はんせいする）",
        "reflect on, think over"
      ],
      [
        "帰省する（きせいする）",
        "go home (for a holiday)"
      ],
      [
        "省庁（しょうちょう）",
        "ministries & government offices"
      ],
      [
        "省エネ（しょうエネ）",
        "economical use of energy"
      ],
      [
        "大蔵省（おおくらしょう）",
        "Ministry of Finance"
      ],
      [
        "省略する（しょうりゃくする）",
        "omit, abbreviate"
      ],
      [
        "省みる（かえりみる）",
        "reflect on"
      ],
      [
        "省く（はぶく）",
        "omit"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "昼",
    "kname": "hiru",
    "kstroke": 9,
    "kmeaning": "daytime",
    "kgrade": 2,
    "kunyomi_ja": "ひる",
    "kunyomi": "hiru",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "昼食（ちゅうしょく）",
        "lunch"
      ],
      [
        "昼（ひる）",
        "noon"
      ],
      [
        "真昼（まひる）",
        "midday"
      ],
      [
        "昼間（ひるま）",
        "daytime"
      ],
      [
        "昼過ぎ（ひるすぎ）",
        "afternoon"
      ],
      [
        "昼休み（ひるやすみ）",
        "lunch break"
      ],
      [
        "昼寝（ひるね）",
        "nap"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "輪",
    "kname": "rin-wa",
    "kstroke": 15,
    "kmeaning": "wheel, ring, circle",
    "kgrade": 4,
    "kunyomi_ja": "わ",
    "kunyomi": "wa",
    "onyomi_ja": "リン",
    "onyomi": "rin",
    "examples": [
      [
        "輪郭（りんかく）",
        "contours, outlines"
      ],
      [
        "車輪（しゃりん）",
        "wheel"
      ],
      [
        "年輪（ねんりん）",
        "annual tree ring"
      ],
      [
        "駐輪場（ちゅうりんじょう）",
        "parking area for bicycles"
      ],
      [
        "輪（わ）",
        "circle, loop"
      ],
      [
        "輪ゴム（わゴム）",
        "rubber band"
      ],
      [
        "指輪（ゆびわ）",
        "ring"
      ],
      [
        "*高輪（たかなわ）",
        "Takanawa (place name)"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "老",
    "kname": "o(iru)",
    "kstroke": 6,
    "kmeaning": "old, grow old",
    "kgrade": 4,
    "kunyomi_ja": "お、おいる、ふ、ふける",
    "kunyomi": "o, oiru, fu, fukeru",
    "onyomi_ja": "ロウ",
    "onyomi": "rou",
    "examples": [
      [
        "老人（ろうじん）",
        "the aged"
      ],
      [
        "老後（ろうご）",
        "old age"
      ],
      [
        "老眼（ろうがん）",
        "farsightedness due to old age"
      ],
      [
        "老化する（ろうかする）",
        "grow old, become senile"
      ],
      [
        "老いる（おいる）",
        "grow old [v.i.]"
      ],
      [
        "老ける（ふける）",
        "grow old [v.i.]"
      ]
    ],
    "radical": "⺹",
    "rad_order": 119,
    "rad_stroke": 4,
    "rad_name_ja": "おいかんむり",
    "rad_name": "oikanmuri",
    "rad_meaning": "old, old-age",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "荷",
    "kname": "ni(motsu)",
    "kstroke": 10,
    "kmeaning": "load, cargo, baggage",
    "kgrade": 3,
    "kunyomi_ja": "に",
    "kunyomi": "ni",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "負荷（ふか）",
        "burden, load"
      ],
      [
        "荷担する（かたんする）",
        "assist, conspire"
      ],
      [
        "入荷する（にゅうかする）",
        "(shipment) arrive [v.i.]"
      ],
      [
        "出荷する（しゅっかする）",
        "ship goods (business) [v.t.]"
      ],
      [
        "荷（に）",
        "load, cargo"
      ],
      [
        "荷物（にもつ）",
        "luggage"
      ],
      [
        "荷造り（にづくり）",
        "packing, crating"
      ],
      [
        "重荷（おもに）",
        "heavy load, heavy responsibility"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "貧",
    "kname": "mazu(shii)",
    "kstroke": 11,
    "kmeaning": "poor",
    "kgrade": 5,
    "kunyomi_ja": "まず、まずしい、まずしさ",
    "kunyomi": "mazu, mazushii, mazushisa",
    "onyomi_ja": "ヒン、ビン",
    "onyomi": "hin, bin",
    "examples": [
      [
        "貧血（ひんけつ）",
        "anemia"
      ],
      [
        "貧困（ひんこん）",
        "poverty"
      ],
      [
        "貧富（ひんぷ）",
        "rich and poor"
      ],
      [
        "貧弱な（ひんじゃくな）",
        "meagre, insubstantial"
      ],
      [
        "貧乏な（びんぼうな）",
        "poor"
      ],
      [
        "貧相な（ひんそうな）",
        "seedy-looking"
      ],
      [
        "貧乏人（びんぼうにん）",
        "the poor"
      ],
      [
        "貧しい（まずしい）",
        "poor"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "乏",
    "kname": "tobo(shii)",
    "kstroke": 4,
    "kmeaning": "scanty, meager, scarce",
    "kgrade": "n/a",
    "kunyomi_ja": "とぼ、とぼしい、とぼしさ",
    "kunyomi": "tobo, toboshii, toboshisa",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "貧乏な（びんぼうな）",
        "poor"
      ],
      [
        "欠乏する（けつぼうする）",
        "run short"
      ],
      [
        "乏しい（とぼしい）",
        "meagre, scarce"
      ]
    ],
    "radical": "",
    "rad_order": 5,
    "rad_stroke": 1,
    "rad_name_ja": "のかんむり",
    "rad_name": "nokanmuri",
    "rad_meaning": "diagonal sweeping stroke",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "記",
    "kname": "ki-shiru(su)",
    "kstroke": 10,
    "kmeaning": "write down",
    "kgrade": 2,
    "kunyomi_ja": "しる、しるす",
    "kunyomi": "shiru, shirusu",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "記事（きじ）",
        "news story"
      ],
      [
        "記者（きしゃ）",
        "reporter"
      ],
      [
        "記号（きごう）",
        "symbol"
      ],
      [
        "記念日（きねんび）",
        "anniversary, memorial day"
      ],
      [
        "日記（にっき）",
        "diary"
      ],
      [
        "伝記（でんき）",
        "biography"
      ],
      [
        "下記（かき）",
        "things mentioned below (writing)"
      ],
      [
        "記憶する（きおくする）",
        "remember"
      ],
      [
        "記録する（きろくする）",
        "record, document [v.t.]"
      ],
      [
        "記入する（きにゅうする）",
        "fill in forms"
      ],
      [
        "暗記する（あんきする）",
        "memorize, learn by heart"
      ],
      [
        "記す（しるす）",
        "write down"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "清",
    "kname": "kiyo(i)",
    "kstroke": 11,
    "kmeaning": "clear, purify, pure",
    "kgrade": 4,
    "kunyomi_ja": "きよ、きよい、きよまる、きよめる",
    "kunyomi": "kiyo, kiyoi, kiyomaru, kiyomeru",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "清潔な（せいけつな）",
        "clean"
      ],
      [
        "清純な（せいじゅんな）",
        "pure, innocent"
      ],
      [
        "清掃する（せいそうする）",
        "clean [v.t.]"
      ],
      [
        "清算する（せいさんする）",
        "liquidate, settle (an account)"
      ],
      [
        "清浄（しょうじょう）",
        "pure, clean"
      ],
      [
        "清い（きよい）",
        "clear pure noble"
      ],
      [
        "清める（きよめる）",
        "purify, cleanse, exorcise [v.t.]"
      ],
      [
        "清まる（きよまる）",
        "be purified or cleansed [v.i.]"
      ],
      [
        "*清水（しみず）",
        "a spring, spring water"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "給",
    "kname": "kyuu(yu)",
    "kstroke": 12,
    "kmeaning": "supply, pay",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キュウ",
    "onyomi": "kyuu",
    "examples": [
      [
        "給料（きゅうりょう）",
        "salary, wages"
      ],
      [
        "月給（げっきゅう）",
        "monthly salary"
      ],
      [
        "時給（じきゅう）",
        "hourly pay hourly wage"
      ],
      [
        "初任給（しょにんきゅう）",
        "initial salary"
      ],
      [
        "給付する（きゅうふする）",
        "pay, provide"
      ],
      [
        "供給する（きょうきゅうする）",
        "supply, provide"
      ],
      [
        "支給する（しきゅうする）",
        "pay, provide, grant"
      ],
      [
        "補給する（ほきゅうする）",
        "supply, replenish"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "費",
    "kname": "tsui(yasu)",
    "kstroke": 12,
    "kmeaning": "expense, spend, waste",
    "kgrade": 4,
    "kunyomi_ja": "つい、ついやす",
    "kunyomi": "tsui, tsuiyasu",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "費用（ひよう）",
        "cost, expense"
      ],
      [
        "学費（がくひ）",
        "tuition, school expenses"
      ],
      [
        "食費（しょくひ）",
        "food expense"
      ],
      [
        "会費（かいひ）",
        "membership fee"
      ],
      [
        "経費（けいひ）",
        "expenses, cost outlay"
      ],
      [
        "出費（しゅっぴ）",
        "expenses, disbursements"
      ],
      [
        "生活費（せいかつひ）",
        "living expenses"
      ],
      [
        "交通費（こうつうひ）",
        "traveling expenses, carfare"
      ],
      [
        "消費する（しょうひする）",
        "consume, spend"
      ],
      [
        "浪費する（ろうひする）",
        "waste, squander"
      ],
      [
        "費やす（ついやす）",
        "spend, waste"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "刺",
    "kname": "sa(saru)",
    "kstroke": 8,
    "kmeaning": "stab, pierce",
    "kgrade": "n/a",
    "kunyomi_ja": "さ、さす、ささる、さし",
    "kunyomi": "sa, sasu, sasaru, sashi",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "刺繍（ししゅう）",
        "embroidery"
      ],
      [
        "刺客（しかく）",
        "assassin"
      ],
      [
        "名刺（めいし）",
        "business card"
      ],
      [
        "刺激する（しげきする）",
        "stimulate, stir up, excite"
      ],
      [
        "刺傷する（ししょうする）",
        "stab, puncture, wound"
      ],
      [
        "風刺する（ふうしする）",
        "satirize, lampoon"
      ],
      [
        "刺す（さす）",
        "pierce, stab [v.t.]"
      ],
      [
        "刺さる（ささる）",
        "be stuck [v.i.]"
      ],
      [
        "刺身（さしみ）",
        "sliced raw fish"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "才",
    "kname": "(nan)sai",
    "kstroke": 3,
    "kmeaning": "talent, counter for age",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "十八才（じゅうはっさい）",
        "18 years old"
      ],
      [
        "何才（なんさい）",
        "how old"
      ],
      [
        "才能（さいのう）",
        "talent"
      ],
      [
        "天才（てんさい）",
        "genius"
      ],
      [
        "漫才（まんざい）",
        "comic dialogue"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "紹",
    "kname": "shou(kaisuru)",
    "kstroke": 11,
    "kmeaning": "introduce",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "紹介状（しょうかいじょう）",
        "letter of introduction"
      ],
      [
        "自己紹介（じこしょうかい）",
        "self-introduction"
      ],
      [
        "紹介する（しょうかいする）",
        "introduce"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "介",
    "kname": "(bai)kai",
    "kstroke": 4,
    "kmeaning": "mediate, be in between",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "介入する（かいにゅうする）",
        "intervene, interfere"
      ],
      [
        "介抱する（かいほうする）",
        "nurse, look after"
      ],
      [
        "紹介する（しょうかいする）",
        "introduce"
      ],
      [
        "媒介する（ばいかいする）",
        "mediate, transmit (disease)"
      ],
      [
        "仲介する（ちゅうかいする）",
        "mediate, act as go-between"
      ],
      [
        "厄介な（やっかいな）",
        "troublesome, annoying"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "責",
    "kname": "seki-se(meru)",
    "kstroke": 11,
    "kmeaning": "responsibility, blame, condemn",
    "kgrade": 5,
    "kunyomi_ja": "せ、せめる",
    "kunyomi": "se, semeru",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "責務（せきむ）",
        "duty, obligation"
      ],
      [
        "責任（せきにん）",
        "duty, responsibility"
      ],
      [
        "責任感（せきにんかん）",
        "sense of responsibility"
      ],
      [
        "重責（じゅうせき）",
        "heavy responsibility"
      ],
      [
        "自責（じせき）",
        "self reproach"
      ],
      [
        "免責する（めんせきする）",
        "exempt from responsibility"
      ],
      [
        "叱責する（しっせきする）",
        "reprimand rebuke"
      ],
      [
        "責める（せめる）",
        "condemn, blame, criticize"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誤",
    "kname": "go(sa)",
    "kstroke": 14,
    "kmeaning": "mistake, err",
    "kgrade": 6,
    "kunyomi_ja": "あやま、あやまる、あやまり",
    "kunyomi": "ayama, ayamaru, ayamari",
    "onyomi_ja": "ゴ",
    "onyomi": "go",
    "examples": [
      [
        "誤字（ごじ）",
        "misprint"
      ],
      [
        "誤算（ごさん）",
        "miscalculation"
      ],
      [
        "誤差（ごさ）",
        "error"
      ],
      [
        "誤報（ごほう）",
        "misinformation"
      ],
      [
        "誤解する（ごかいする）",
        "misunderstand"
      ],
      [
        "誤る（あやまる）",
        "make a mistake"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "益",
    "kname": "eki-ma(su)",
    "kstroke": 10,
    "kmeaning": "benefit, profit, advantage",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "エキ、ヤク",
    "onyomi": "eki, yaku",
    "examples": [
      [
        "益鳥（えきちょう）",
        "useful bird species"
      ],
      [
        "益虫（えきちゅう）",
        "useful insect species"
      ],
      [
        "利益（りえき）",
        "benefit, profit, gain [n.]"
      ],
      [
        "実益（じつえき）",
        "actual benefit, real gain"
      ],
      [
        "収益（しゅうえき）",
        "earnings, proceeds, returns"
      ],
      [
        "有益な（ゆうえきな）",
        "beneficial, profitable"
      ],
      [
        "無益な（むえきな）",
        "useless, futile, vain"
      ],
      [
        "御利益（ごりやく）",
        "grace of God"
      ],
      [
        "*益々（ますます）",
        "increasingly, still more"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "毒",
    "kname": "(chuu)doku",
    "kstroke": 8,
    "kmeaning": "poison",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ドク",
    "onyomi": "doku",
    "examples": [
      [
        "毒（どく）",
        "poison"
      ],
      [
        "毒ガス（どくガス）",
        "poison gas"
      ],
      [
        "毒薬（どくやく）",
        "poison"
      ],
      [
        "毒物（どくぶつ）",
        "poison"
      ],
      [
        "中毒（ちゅうどく）",
        "poisoning, addiction"
      ],
      [
        "有毒な（ゆうどくな）",
        "poisonous, toxic"
      ],
      [
        "気の毒な（きのどくな）",
        "unfortunate, a pity"
      ],
      [
        "消毒する（しょうどくする）",
        "disinfect, sterilize"
      ],
      [
        "毒する（どくする）",
        "poison[v.t.]"
      ]
    ],
    "radical": "⽏",
    "rad_order": 104,
    "rad_stroke": 4,
    "rad_name_ja": "なかれ",
    "rad_name": "nakare",
    "rad_meaning": "not, mother",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "骨",
    "kname": "hone",
    "kstroke": 10,
    "kmeaning": "bone",
    "kgrade": 6,
    "kunyomi_ja": "ほね",
    "kunyomi": "hone",
    "onyomi_ja": "コツ",
    "onyomi": "kotsu",
    "examples": [
      [
        "骨格（こっかく）",
        "physique, build frame"
      ],
      [
        "骨髄（こつずい）",
        "marrow, true spirit"
      ],
      [
        "白骨（はっこつ）",
        "bleached white bone"
      ],
      [
        "遺骨（いこつ）",
        "remains, ashes of deceased"
      ],
      [
        "骸骨（がいこつ）",
        "skeleton"
      ],
      [
        "鉄骨（てっこつ）",
        "steel frame"
      ],
      [
        "骨折する（こっせつする）",
        "break a bone"
      ],
      [
        "骨（ほね）",
        "bone"
      ],
      [
        "骨っぽい（ほねっぽい）",
        "bony, tough, plucky"
      ],
      [
        "骨組み（ほねぐみ）",
        "skeleton, framework"
      ],
      [
        "骨惜しみ（ほねおしみ）",
        "sparing oneself laziness"
      ]
    ],
    "radical": "⾻",
    "rad_order": 226,
    "rad_stroke": 10,
    "rad_name_ja": "ほね",
    "rad_name": "hone",
    "rad_meaning": "bone",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "健",
    "kname": "suko(yaka)",
    "kstroke": 11,
    "kmeaning": "robust, healthy",
    "kgrade": 4,
    "kunyomi_ja": "すこ、すこやかな",
    "kunyomi": "suko, sukoyakana",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "健康（けんこう）",
        "health"
      ],
      [
        "健康保険（けんこうほけん）",
        "health insurance"
      ],
      [
        "健全な（けんぜんな）",
        "healthy, sound, wholesome"
      ],
      [
        "穏健な（おんけんな）",
        "quiet, dependable, moderate"
      ],
      [
        "健康的な（けんこうてきな）",
        "hygienic, healthful, sanitary"
      ],
      [
        "健やかな（すこやかな）",
        "healthy"
      ],
      [
        "*健気な（けなげな）",
        "heroic, brave, admirable"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "康",
    "kname": "(ken)kou",
    "kstroke": 11,
    "kmeaning": "healthy, composure",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "健康（けんこう）",
        "health"
      ],
      [
        "小康（しょうこう）",
        "lull [n.]"
      ],
      [
        "健康的な（けんこうてきな）",
        "healthful, hygienic, sanitary"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "快",
    "kname": "kokoroyo(i)",
    "kstroke": 7,
    "kmeaning": "pleasant",
    "kgrade": 5,
    "kunyomi_ja": "こころよ、こころよい、こころよさ",
    "kunyomi": "kokoroyo, kokoroyoi, kokoroyosa",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "快晴（かいせい）",
        "good weather"
      ],
      [
        "快挙（かいきょ）",
        "brilliant achievement"
      ],
      [
        "快感（かいかん）",
        "pleasant feeling"
      ],
      [
        "快楽（かいらく）",
        "pleasure"
      ],
      [
        "快速電車（かいそくでんしゃ）",
        "high-speed train"
      ],
      [
        "快適な（かいてきな）",
        "pleasant, comfortable"
      ],
      [
        "快活な（かいかつな）",
        "cheerful, lively"
      ],
      [
        "愉快な（ゆかいな）",
        "pleasant, happy"
      ],
      [
        "不快な（ふかいな）",
        "unpleasant"
      ],
      [
        "軽快な（けいかいな）",
        "light, nimble, jaunty"
      ],
      [
        "全快する（ぜんかいする）",
        "recover completely (illness)"
      ],
      [
        "快い（こころよい）",
        "pleasant, agreeable"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "本",
    "kname": "hon-moto",
    "kstroke": 5,
    "kmeaning": "basis, book, this",
    "kgrade": 1,
    "kunyomi_ja": "もと",
    "kunyomi": "moto",
    "onyomi_ja": "ホン",
    "onyomi": "hon",
    "examples": [
      [
        "本（ほん）",
        "book"
      ],
      [
        "本日（ほんじつ）",
        "today"
      ],
      [
        "本店（ほんてん）",
        "head office"
      ],
      [
        "本当に（ほんとうに）",
        "really"
      ],
      [
        "基本（きほん）",
        "basis"
      ],
      [
        "絵本（えほん）",
        "picture book"
      ],
      [
        "日本（にほん）",
        "Japan"
      ],
      [
        "日本語（にほんご）",
        "Japanese language"
      ],
      [
        "三本（さんぼん）",
        "3 (long cylindrical objects)"
      ],
      [
        "六本（ろっぽん）",
        "6 (long cylindrical objects)"
      ],
      [
        "十本（じゅっぽん）",
        "10 (long cylindrical objects)"
      ],
      [
        "山本（やまもと）",
        "Yamamoto (surname)"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "積",
    "kname": "tsu(moru)",
    "kstroke": 16,
    "kmeaning": "accumulate",
    "kgrade": 4,
    "kunyomi_ja": "つ、つむ、つもる、つもり",
    "kunyomi": "tsu, tsumu, tsumoru, tsumori",
    "onyomi_ja": "セキ",
    "onyomi": "seki",
    "examples": [
      [
        "積雪（せきせつ）",
        "fallen snow"
      ],
      [
        "面積（めんせき）",
        "area, square measure"
      ],
      [
        "体積（たいせき）",
        "capacity volume"
      ],
      [
        "容積（ようせき）",
        "capacity volume"
      ],
      [
        "積極的な（せっきょくてきな）",
        "positive, active, proactive"
      ],
      [
        "蓄積する（ちくせきする）",
        "accumulate, store"
      ],
      [
        "山積する（さんせきする）",
        "pile up, lie in a heap [v.i.]"
      ],
      [
        "積む（つむ）",
        "pile, stack, load [v.t.]"
      ],
      [
        "山積み（やまづみ）",
        "huge mound, heap"
      ],
      [
        "積もる（つもる）",
        "pile up [v.i.]"
      ],
      [
        "見積もる（みつもる）",
        "estimate [v.t.]"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "極",
    "kname": "kyoku-kiwa(mi)",
    "kstroke": 13,
    "kmeaning": "extreme, pole",
    "kgrade": 4,
    "kunyomi_ja": "きわ、きわめる、きわまる、きわまり、きわみ",
    "kunyomi": "kiwa, kiwameru, kiwamaru, kiwamari, kiwami",
    "onyomi_ja": "キョク、ゴク",
    "onyomi": "kyoku, goku",
    "examples": [
      [
        "極限（きょくげん）",
        "limit [n.]"
      ],
      [
        "北極（ほっきょく）",
        "north pole, Arctic"
      ],
      [
        "南極（なんきょく）",
        "south pole, Antarctic"
      ],
      [
        "極端な（きょくたんな）",
        "extreme"
      ],
      [
        "積極的な（せっきょくてきな）",
        "positive, active, proactive"
      ],
      [
        "消極的な（しょうきょくてきな）",
        "passive"
      ],
      [
        "多極化する（たきょくかする）",
        "become multipolar"
      ],
      [
        "極（ごく）",
        "very, extremely"
      ],
      [
        "極楽（ごくらく）",
        "paradise"
      ],
      [
        "極める（きわめる）",
        "carry to extremes [v.t.]"
      ],
      [
        "極まる（きわまる）",
        "reach an extreme [v.i.]"
      ],
      [
        "極み（きわみ）",
        "height, acme, extremity"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "哲",
    "kname": "tetsu(gaku)",
    "kstroke": 10,
    "kmeaning": "sagacious, philosophy",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テツ",
    "onyomi": "tetsu",
    "examples": [
      [
        "哲学（てつがく）",
        "philosophy"
      ],
      [
        "哲理（てつり）",
        "philosophic principles"
      ],
      [
        "哲学者（てつがくしゃ）",
        "philosopher"
      ],
      [
        "哲学的な（てつがくてきな）",
        "philosophical"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "公",
    "kname": "ooyake",
    "kstroke": 4,
    "kmeaning": "public, official",
    "kgrade": 2,
    "kunyomi_ja": "おおやけ",
    "kunyomi": "ooyake",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "公園（こうえん）",
        "park"
      ],
      [
        "公害（こうがい）",
        "public nuisance, pollution"
      ],
      [
        "公判（こうはん）",
        "public hearing, trial"
      ],
      [
        "公式（こうしき）",
        "formula, formal, official"
      ],
      [
        "公立（こうりつ）",
        "public"
      ],
      [
        "公務員（こうむいん）",
        "public employee"
      ],
      [
        "主人公（しゅじんこう）",
        "main character, hero"
      ],
      [
        "公平な（こうへいな）",
        "fair, impartial"
      ],
      [
        "公認する（こうにんする）",
        "recognize officially, authorize"
      ],
      [
        "公表する（こうひょうする）",
        "announce publicly"
      ],
      [
        "公開する（こうかいする）",
        "present to the public"
      ],
      [
        "公（おおやけ）",
        "official, public, formal [n.]"
      ]
    ],
    "radical": "",
    "rad_order": 16,
    "rad_stroke": 2,
    "rad_name_ja": "はちがしら",
    "rad_name": "hachigashira",
    "rad_meaning": "eight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "等",
    "kname": "(byou)dou",
    "kstroke": 12,
    "kmeaning": "equal, class",
    "kgrade": 3,
    "kunyomi_ja": "ひと、ひとしい",
    "kunyomi": "hito, hitoshii",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "等級（とうきゅう）",
        "grade, class"
      ],
      [
        "等号（とうごう）",
        "an equal sign"
      ],
      [
        "一等（いっとう）",
        "first class, first rank"
      ],
      [
        "劣等感（れっとうかん）",
        "inferiority complex"
      ],
      [
        "対等な（たいとうな）",
        "equivalent"
      ],
      [
        "上等な（じょうとうな）",
        "superior, first class"
      ],
      [
        "均等な（きんとうな）",
        "equal, uniform, even"
      ],
      [
        "平等な（びょうどうな）",
        "equal, impartial"
      ],
      [
        "二等分する（にとうぶんする）",
        "bisect"
      ],
      [
        "等しい（ひとしい）",
        "equal, similar, equivalent"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "節",
    "kname": "fushi",
    "kstroke": 13,
    "kmeaning": "joint, season of the year, section, melody",
    "kgrade": 4,
    "kunyomi_ja": "ふし",
    "kunyomi": "fushi",
    "onyomi_ja": "セツ、セチ",
    "onyomi": "setsu, sechi",
    "examples": [
      [
        "節句（せっく）",
        "seasonal festival"
      ],
      [
        "節電（せつでん）",
        "conservation of electricity"
      ],
      [
        "節度（せつど）",
        "moderation"
      ],
      [
        "関節（かんせつ）",
        "joints"
      ],
      [
        "季節（きせつ）",
        "season"
      ],
      [
        "礼節（れいせつ）",
        "decorum, propriety, politeness"
      ],
      [
        "章節（しょうせつ）",
        "chapters and sections"
      ],
      [
        "使節（しせつ）",
        "envoy, embassy, delegate"
      ],
      [
        "調節する（ちょうせつする）",
        "regulate, adjust, control"
      ],
      [
        "節約する（せつやくする）",
        "conserve, economize"
      ],
      [
        "お節料理（おせちりょうり）",
        "New Year's dish"
      ],
      [
        "節（ふし）",
        "node, section, occasion, time"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "独",
    "kname": "doku(ritsu)",
    "kstroke": 9,
    "kmeaning": "alone, Germany",
    "kgrade": 5,
    "kunyomi_ja": "ひと、ひとり",
    "kunyomi": "hito, hitori",
    "onyomi_ja": "ドク",
    "onyomi": "doku",
    "examples": [
      [
        "独身（どくしん）",
        "single, unmarried"
      ],
      [
        "独学（どくがく）",
        "self-education"
      ],
      [
        "独文（どくぶん）",
        "German literature"
      ],
      [
        "独裁政治（どくさいせいじ）",
        "dictatorship, despotism"
      ],
      [
        "独善的な（どくぜんてきな）",
        "self-righteous"
      ],
      [
        "単独（たんどく）",
        "sole, single, solo"
      ],
      [
        "孤独な（こどくな）",
        "alone, isolate, lonely"
      ],
      [
        "独立する（どくりつする）",
        "gain independence"
      ],
      [
        "独占する（どくせんする）",
        "monopolize"
      ],
      [
        "独走する（どくそうする）",
        "run alone, do as one likes"
      ],
      [
        "独り（ひとり）",
        "alone, unmarried"
      ],
      [
        "独り者（ひとりもの）",
        "single person"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "迎",
    "kname": "(kan)gei",
    "kstroke": 7,
    "kmeaning": "welcome, go to meet, pick up",
    "kgrade": "n/a",
    "kunyomi_ja": "むか、むかえる",
    "kunyomi": "muka, mukaeru",
    "onyomi_ja": "ゲイ",
    "onyomi": "gei",
    "examples": [
      [
        "迎賓館（げいひんかん）",
        "reception hall"
      ],
      [
        "送迎バス（そうげいバス）",
        "a pick up and drop off bus"
      ],
      [
        "迎合する（げいごうする）",
        "flatter, ingratiate"
      ],
      [
        "歓迎する（かんげいする）",
        "welcome, give warm reception"
      ],
      [
        "迎える（むかえる）",
        "go to meet, pick up"
      ],
      [
        "送り迎え（おくりむかえ）",
        "dropping off and picking up"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "輸",
    "kname": "yu(ketsu)",
    "kstroke": 16,
    "kmeaning": "transport",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ユ",
    "onyomi": "yu",
    "examples": [
      [
        "運輸会社（うんゆがいしゃ）",
        "transit company"
      ],
      [
        "輸送する（ゆそうする）",
        "transport [v.t.]"
      ],
      [
        "輸出する（ゆしゅつする）",
        "export"
      ],
      [
        "輸入する（ゆにゅうする）",
        "import"
      ],
      [
        "輸血する（ゆけつする）",
        "give a blood transfusion"
      ],
      [
        "密輸する（みつゆする）",
        "smuggle"
      ],
      [
        "空輸する（くうゆする）",
        "transport by air"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "片",
    "kname": "hen-kata",
    "kstroke": 4,
    "kmeaning": "fragment, one (of two), part",
    "kgrade": 6,
    "kunyomi_ja": "かた",
    "kunyomi": "kata",
    "onyomi_ja": "ヘン",
    "onyomi": "hen",
    "examples": [
      [
        "破片（はへん）",
        "fragment, splinter, piece"
      ],
      [
        "断片（だんぺん）",
        "fragment, shred"
      ],
      [
        "片手（かたて）",
        "one hand"
      ],
      [
        "片目（かため）",
        "one eye"
      ],
      [
        "片側（かたがわ）",
        "one side"
      ],
      [
        "片面（かためん）",
        "one side"
      ],
      [
        "片道（かたみち）",
        "one-way"
      ],
      [
        "片言（かたこと）",
        "baby talk, broken speech"
      ],
      [
        "片仮名（かたかな）",
        "katakana"
      ],
      [
        "片思い（かたおもい）",
        "unrequited love"
      ],
      [
        "片寄る（かたよる）",
        "lean, incline, be biased"
      ],
      [
        "片付ける（かたづける）",
        "tidy up"
      ]
    ],
    "radical": "⽚",
    "rad_order": 114,
    "rad_stroke": 4,
    "rad_name_ja": "かた",
    "rad_name": "kata",
    "rad_meaning": "split wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "冊",
    "kname": "(nan)satsu",
    "kstroke": 5,
    "kmeaning": "counter for books",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サツ、サク",
    "onyomi": "satsu, saku",
    "examples": [
      [
        "一冊（いっさつ）",
        "one (bound object)"
      ],
      [
        "冊数（さっすう）",
        "number of bound things"
      ],
      [
        "別冊（べっさつ）",
        "extra issue"
      ],
      [
        "短冊（たんざく）",
        "small vertical card for poem"
      ]
    ],
    "radical": "⼌",
    "rad_order": 17,
    "rad_stroke": 2,
    "rad_name_ja": "けいがまえ",
    "rad_name": "keigamae",
    "rad_meaning": "to enclose",
    "rad_position_ja": "かまえ, けいがまえ",
    "rad_position": "kamae, keigamae"
  },
  {
    "kanji": "狭",
    "kname": "sema(i)",
    "kstroke": 9,
    "kmeaning": "narrow",
    "kgrade": "n/a",
    "kunyomi_ja": "せま、せまい、せば、せばめる、せばまる",
    "kunyomi": "sema, semai, seba, sebameru, sebamaru",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "狭義（きょうぎ）",
        "narrow, strict"
      ],
      [
        "狭心症（きょうしんしょう）",
        "heart attack, angina pectoris"
      ],
      [
        "狭量な（きょうりょうな）",
        "narrow minded"
      ],
      [
        "偏狭な（へんきょうな）",
        "narrow minded, intolerant"
      ],
      [
        "狭い（せまい）",
        "narrow, confined, small"
      ],
      [
        "狭苦しい（せまくるしい）",
        "cramped"
      ],
      [
        "狭める（せばめる）",
        "narrow, reduce, contract [v.t.]"
      ],
      [
        "狭まる（せばまる）",
        "narrow, contract [v.i.]"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "差",
    "kname": "(ji)sa",
    "kstroke": 10,
    "kmeaning": "difference",
    "kgrade": 4,
    "kunyomi_ja": "さ、さす、さし",
    "kunyomi": "sa, sasu, sashi",
    "onyomi_ja": "サ",
    "onyomi": "sa",
    "examples": [
      [
        "差（さ）",
        "difference, variation"
      ],
      [
        "差額（さがく）",
        "balance, difference, margin"
      ],
      [
        "大差（たいさ）",
        "great difference"
      ],
      [
        "時差（じさ）",
        "time difference"
      ],
      [
        "個人差（こじんさ）",
        "personal differences"
      ],
      [
        "交差点（こうさてん）",
        "(street) intersection"
      ],
      [
        "差別する（さべつする）",
        "discriminate"
      ],
      [
        "差す（さす）",
        "raise (hand, umbrella)"
      ],
      [
        "差し当たり（さしあたり）",
        "for the time being, at present"
      ],
      [
        "差し支え（さしつかえ）",
        "hindrance, impediment"
      ]
    ],
    "radical": "⼯",
    "rad_order": 57,
    "rad_stroke": 3,
    "rad_name_ja": "たくみ",
    "rad_name": "takumi",
    "rad_meaning": "work, carpenter, skill",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "刷",
    "kname": "(in)satsu",
    "kstroke": 8,
    "kmeaning": "print",
    "kgrade": 4,
    "kunyomi_ja": "す、する",
    "kunyomi": "su, suru",
    "onyomi_ja": "サツ",
    "onyomi": "satsu",
    "examples": [
      [
        "刷新する（さっしんする）",
        "reform, renovate"
      ],
      [
        "印刷する（いんさつする）",
        "print"
      ],
      [
        "縮刷する（しゅくさつする）",
        "print in reduced size"
      ],
      [
        "増刷する（ぞうさつする）",
        "reprint"
      ],
      [
        "刷る（する）",
        "print [v.t.]"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "利",
    "kname": "ri(yousuru)",
    "kstroke": 7,
    "kmeaning": "advantage, profit, be effective",
    "kgrade": 4,
    "kunyomi_ja": "き、きく、きき",
    "kunyomi": "ki, kiku, kiki",
    "onyomi_ja": "リ",
    "onyomi": "ri",
    "examples": [
      [
        "利点（りてん）",
        "advantage, point in favor"
      ],
      [
        "利益（りえき）",
        "benefit, profit, gain [n.]"
      ],
      [
        "利害（りがい）",
        "advantages and disadvantages interest"
      ],
      [
        "利息（りそく）",
        "interest"
      ],
      [
        "権利（けんり）",
        "right, privilege"
      ],
      [
        "利口な（りこうな）",
        "clever, shrewd, bright, sharp"
      ],
      [
        "便利な（べんりな）",
        "convenient, handy, useful"
      ],
      [
        "有利な（ゆうりな）",
        "advantageous, profitable"
      ],
      [
        "利用する（りようする）",
        "use, utilize, apply"
      ],
      [
        "勝利する（しょうりする）",
        "triumph, succeed, be victorious"
      ],
      [
        "利く（きく）",
        "be effective"
      ],
      [
        "左利き（ひだりきき）",
        "left handed"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "拡",
    "kname": "kaku(daisuru)",
    "kstroke": 8,
    "kmeaning": "enlarge, extend, expand",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "拡声器（かくせいき）",
        "megaphone, bullhorn"
      ],
      [
        "拡大する（かくだいする）",
        "magnify, enlarge"
      ],
      [
        "拡張する（かくちょうする）",
        "extend, expand"
      ],
      [
        "拡充する（かくじゅうする）",
        "expand"
      ],
      [
        "拡散する（かくさんする）",
        "scatter"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "陸",
    "kname": "riku",
    "kstroke": 11,
    "kmeaning": "land",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リク",
    "onyomi": "riku",
    "examples": [
      [
        "陸（りく）",
        "land, shore"
      ],
      [
        "陸地（りくち）",
        "land"
      ],
      [
        "陸上（りくじょう）",
        "land, ground, shore"
      ],
      [
        "陸橋（りっきょう）",
        "overland bridge, overpass"
      ],
      [
        "陸軍（りくぐん）",
        "army"
      ],
      [
        "陸路（りくろ）",
        "overland route, land route"
      ],
      [
        "大陸（たいりく）",
        "continent"
      ],
      [
        "着陸する（ちゃくりくする）",
        "land, touch down"
      ],
      [
        "上陸する（じょうりくする）",
        "land, go ashore"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "末",
    "kname": "matsu-sue",
    "kstroke": 5,
    "kmeaning": "last part, end",
    "kgrade": 4,
    "kunyomi_ja": "すえ",
    "kunyomi": "sue",
    "onyomi_ja": "マツ、バツ",
    "onyomi": "matsu, batsu",
    "examples": [
      [
        "末端（まったん）",
        "end, tip, extremity"
      ],
      [
        "週末（しゅうまつ）",
        "weekend"
      ],
      [
        "月末（げつまつ）",
        "end of the month"
      ],
      [
        "年末（ねんまつ）",
        "end-of-year"
      ],
      [
        "結末（けつまつ）",
        "end conclusion"
      ],
      [
        "期末試験（きまつしけん）",
        "final exam"
      ],
      [
        "粗末な（そまつな）",
        "coarse, shabby"
      ],
      [
        "末期的な（まっきてきな）",
        "decadent, terminal, final"
      ],
      [
        "始末する（しまつする）",
        "manage, deal, settle"
      ],
      [
        "末子（ばっし）",
        "youngest child"
      ],
      [
        "末（すえ）",
        "top, end, tip"
      ],
      [
        "末っ子（すえっこ）",
        "youngest child"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "燃",
    "kname": "mo(yasu)",
    "kstroke": 16,
    "kmeaning": "burn",
    "kgrade": 5,
    "kunyomi_ja": "も、もえる、もやす、もす",
    "kunyomi": "mo, moeru, moyasu, mosu",
    "onyomi_ja": "ネン",
    "onyomi": "nen",
    "examples": [
      [
        "燃料（ねんりょう）",
        "fuel"
      ],
      [
        "燃費（ねんぴ）",
        "fuel, consumption, gas mileage"
      ],
      [
        "可燃性（かねんせい）",
        "combustibility, flammability"
      ],
      [
        "不燃性（ふねんせい）",
        "non-inflammability"
      ],
      [
        "燃焼する（ねんしょうする）",
        "burn, combust"
      ],
      [
        "再燃する（さいねんする）",
        "resuscitate, revive, recur"
      ],
      [
        "燃やす（もやす）",
        "burn [v.t.]"
      ],
      [
        "燃える（もえる）",
        "burn [v.i.]"
      ],
      [
        "燃す（もす）",
        "burn [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 111,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "fire",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "馬",
    "kname": "uma",
    "kstroke": 10,
    "kmeaning": "horse",
    "kgrade": 2,
    "kunyomi_ja": "うま、ま",
    "kunyomi": "uma, ma",
    "onyomi_ja": "バ",
    "onyomi": "ba",
    "examples": [
      [
        "馬車（ばしゃ）",
        "horse-drawn vehicle"
      ],
      [
        "馬力（ばりき）",
        "horse-power, h.p."
      ],
      [
        "乗馬（じょうば）",
        "horseback riding"
      ],
      [
        "競馬（けいば）",
        "horse racing"
      ],
      [
        "馬鹿な（ばかな）",
        "stupid, silly"
      ],
      [
        "竹馬の友（ちくばのとも）",
        "childhood friend"
      ],
      [
        "出馬する（しゅつばする）",
        "stand as a candidate"
      ],
      [
        "落馬する（らくばする）",
        "fall from a horse"
      ],
      [
        "馬（うま）",
        "horse"
      ],
      [
        "絵馬（えま）",
        "votive picture"
      ]
    ],
    "radical": "⾺",
    "rad_order": 224,
    "rad_stroke": 10,
    "rad_name_ja": "うま",
    "rad_name": "uma",
    "rad_meaning": "horse",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "鹿",
    "kname": "shika",
    "kstroke": 11,
    "kmeaning": "deer",
    "kgrade": "n/a",
    "kunyomi_ja": "しか",
    "kunyomi": "shika",
    "onyomi_ja": "ロク",
    "onyomi": "roku",
    "examples": [
      [
        "鹿苑寺（ろくおんじ）",
        "formal name of Kinkakuji Temple"
      ],
      [
        "鹿鳴館（ろくめいかん）",
        "name of a building in Meiji period"
      ],
      [
        "鹿（しか）",
        "deer"
      ],
      [
        "*馬鹿な（ばかな）",
        "stupid, silly"
      ]
    ],
    "radical": "⿅",
    "rad_order": 231,
    "rad_stroke": 11,
    "rad_name_ja": "しか",
    "rad_name": "shika",
    "rad_meaning": "deer",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "生",
    "kname": "u(mu)",
    "kstroke": 5,
    "kmeaning": "life, be born, student",
    "kgrade": 1,
    "kunyomi_ja": "い、いきる、う、うまれる、うむ、お、は、はえる、はやす、なま、き",
    "kunyomi": "i, ikiru, u, umareru, umu, o, ha, haeru, hayasu, nama, ki",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "学生（がくせい）",
        "student"
      ],
      [
        "先生（せんせい）",
        "teacher, master, doctor"
      ],
      [
        "一生（いっしょう）",
        "one's whole life"
      ],
      [
        "誕生日（たんじょうび）",
        "birthday"
      ],
      [
        "生きる（いきる）",
        "live"
      ],
      [
        "生まれる（うまれる）",
        "be born"
      ],
      [
        "生い立ち（おいたち）",
        "upbringing, background"
      ],
      [
        "生える（はえる）",
        "grow [v.i.]"
      ],
      [
        "生やす（はやす）",
        "grow [v.t.]"
      ],
      [
        "生卵（なまたまご）",
        "raw egg"
      ],
      [
        "生地（きじ）",
        "cloth"
      ]
    ],
    "radical": "⽣",
    "rad_order": 126,
    "rad_stroke": 5,
    "rad_name_ja": "うまれる",
    "rad_name": "umareru",
    "rad_meaning": "birth, to be born, live",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "枚",
    "kname": "(nan)mai",
    "kstroke": 8,
    "kmeaning": "counter for flat things",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "マイ",
    "onyomi": "mai",
    "examples": [
      [
        "一枚（いちまい）",
        "one (flat object)"
      ],
      [
        "何枚（なんまい）",
        "how many flat objects"
      ],
      [
        "枚数（まいすう）",
        "number of flat objects"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "負",
    "kname": "fu(tan)",
    "kstroke": 9,
    "kmeaning": "bear, lose, defeat, owe",
    "kgrade": 3,
    "kunyomi_ja": "ま、まける、まかす、まけ、お、おう",
    "kunyomi": "ma, makeru, makasu, make, o, ou",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "負債（ふさい）",
        "debt, liabilities"
      ],
      [
        "負数（ふすう）",
        "negative number"
      ],
      [
        "負担する（ふたんする）",
        "bear a burden"
      ],
      [
        "負傷する（ふしょうする）",
        "get injured, get hurt"
      ],
      [
        "勝負する（しょうぶする）",
        "play, have a match"
      ],
      [
        "自負する（じふする）",
        "flatter oneself, feel proud"
      ],
      [
        "負ける（まける）",
        "lose, be defeated [v.i.]"
      ],
      [
        "負け犬（まけいぬ）",
        "underdog, loser"
      ],
      [
        "負かす（まかす）",
        "defeat [v.t.]"
      ],
      [
        "負う（おう）",
        "carry, bear, be in debt"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "渉",
    "kname": "shou(gaibu)",
    "kstroke": 11,
    "kmeaning": "have relation with, cross over",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "渉外部（しょうがいぶ）",
        "public relations department"
      ],
      [
        "交渉する（こうしょうする）",
        "negotiate, discuss"
      ],
      [
        "干渉する（かんしょうする）",
        "interfere, intervene"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "卓",
    "kname": "(den)taku",
    "kstroke": 8,
    "kmeaning": "table, prominent",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タク",
    "onyomi": "taku",
    "examples": [
      [
        "卓上（たくじょう）",
        "tabletop, desktop"
      ],
      [
        "卓球（たっきゅう）",
        "table tennis, ping-pong"
      ],
      [
        "卓見（たくけん）",
        "penetration, excellent idea"
      ],
      [
        "食卓（しょくたく）",
        "dining table"
      ],
      [
        "電卓（でんたく）",
        "calculator"
      ],
      [
        "卓抜な（たくばつな）",
        "excellent, superior"
      ],
      [
        "卓越する（たくえつする）",
        "excel, surpass"
      ],
      [
        "卓立する（たくりつする）",
        "excel, stand out"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "適",
    "kname": "teki(dona)",
    "kstroke": 14,
    "kmeaning": "suitable, fit, suit, appropriate",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テキ",
    "onyomi": "teki",
    "examples": [
      [
        "適量（てきりょう）",
        "proper quantity"
      ],
      [
        "適性（てきせい）",
        "aptitude"
      ],
      [
        "適齢期（てきれいき）",
        "marriageable age"
      ],
      [
        "適当な（てきとうな）",
        "fit, suitable, adequate"
      ],
      [
        "適切な（てきせつな）",
        "pertinent, appropriate"
      ],
      [
        "適度な（てきどな）",
        "moderate"
      ],
      [
        "適正な（てきせいな）",
        "reasonable, suitable"
      ],
      [
        "最適な（さいてきな）",
        "optimal, most suitable"
      ],
      [
        "適する（てきする）",
        "fit, suit [v.i.]"
      ],
      [
        "適用する（てきようする）",
        "apply"
      ],
      [
        "適合する（てきごうする）",
        "suit, adapted, conform [v.i.]"
      ],
      [
        "適応する（てきおうする）",
        "adapt, accommodate [v.i.]"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "創",
    "kname": "sou(ritsu)",
    "kstroke": 12,
    "kmeaning": "create",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "創意（そうい）",
        "original idea, originality"
      ],
      [
        "創世記（そうせいき）",
        "Genesis"
      ],
      [
        "創設者（そうせつしゃ）",
        "founder"
      ],
      [
        "創始者（そうししゃ）",
        "originator"
      ],
      [
        "独創的な（どくそうてきな）",
        "creative, original"
      ],
      [
        "創造する（そうぞうする）",
        "create"
      ],
      [
        "創作する（そうさくする）",
        "create, write a novel"
      ],
      [
        "創立する（そうりつする）",
        "establish, found"
      ],
      [
        "創刊する（そうかんする）",
        "launching (a magazine)"
      ],
      [
        "創業する（そうぎょうする）",
        "establish (a company)"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "精",
    "kname": "sei(mitsuna)",
    "kstroke": 14,
    "kmeaning": "refine, essence, spirit, energy",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ、ショウ",
    "onyomi": "sei, shou",
    "examples": [
      [
        "精神（せいしん）",
        "mind, soul, heart, spirit"
      ],
      [
        "精力（せいりょく）",
        "energy, vigor, vitality"
      ],
      [
        "精度（せいど）",
        "precision, accuracy"
      ],
      [
        "精一杯（せいいっぱい）",
        "with all one's might"
      ],
      [
        "精密な（せいみつな）",
        "precise, exact, detailed"
      ],
      [
        "精巧な（せいこうな）",
        "elaborate, delicate, exquisite"
      ],
      [
        "精製する（せいせいする）",
        "purify"
      ],
      [
        "精通する（せいつうする）",
        "be well versed in"
      ],
      [
        "精算する（せいさんする）",
        "adjust the fare"
      ],
      [
        "受精する（じゅせいする）",
        "fertilize, inseminate"
      ],
      [
        "無精な（ぶしょうな）",
        "indolent, lazy"
      ],
      [
        "精進する（しょうじんする）",
        "devote oneself to a pursuit"
      ]
    ],
    "radical": "",
    "rad_order": 156,
    "rad_stroke": 6,
    "rad_name_ja": "こめへん",
    "rad_name": "komehen",
    "rad_meaning": "rice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "認",
    "kname": "mito(meru)",
    "kstroke": 14,
    "kmeaning": "recognize",
    "kgrade": 6,
    "kunyomi_ja": "みと、みとめる",
    "kunyomi": "mito, mitomeru",
    "onyomi_ja": "ニン",
    "onyomi": "nin",
    "examples": [
      [
        "認識する（にんしきする）",
        "recognize, become aware of"
      ],
      [
        "認知する（にんちする）",
        "acknowledge, recognize"
      ],
      [
        "認可する（にんかする）",
        "approve, give permission"
      ],
      [
        "認定する（にんていする）",
        "authorize, acknowledge"
      ],
      [
        "確認する（かくにんする）",
        "affirm, confirm"
      ],
      [
        "承認する（しょうにんする）",
        "approve, acknowledge"
      ],
      [
        "黙認する（もくにんする）",
        "tolerate, give tacit consent"
      ],
      [
        "認める（みとめる）",
        "recognize, acknowledge"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "導",
    "kname": "michibi(ku)",
    "kstroke": 15,
    "kmeaning": "guide, lead",
    "kgrade": 5,
    "kunyomi_ja": "みちび、みちびく、みちびき",
    "kunyomi": "michibi, michibiku, michibiki",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "主導権（しゅどうけん）",
        "hegemony, leadership, initiative"
      ],
      [
        "盲導犬（もうどうけん）",
        "seeing eye dog"
      ],
      [
        "半導体（はんどうたい）",
        "semiconductor"
      ],
      [
        "導入する（どうにゅうする）",
        "introduce, bring in"
      ],
      [
        "指導する（しどうする）",
        "lead, guide, coach"
      ],
      [
        "誘導する（ゆうどうする）",
        "guide, lead, conduct"
      ],
      [
        "導く（みちびく）",
        "lead, guide, show the way"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "固",
    "kname": "kata(mari)",
    "kstroke": 8,
    "kmeaning": "solid, firm, hard",
    "kgrade": 4,
    "kunyomi_ja": "かた、かためる、かたまる、かたまり、かたい",
    "kunyomi": "kata, katameru, katamaru, katamari, katai",
    "onyomi_ja": "コ",
    "onyomi": "ko",
    "examples": [
      [
        "固体（こたい）",
        "solid"
      ],
      [
        "固形（こけい）",
        "solid"
      ],
      [
        "固有（こゆう）",
        "peculiar (to), characteristic (of)"
      ],
      [
        "頑固な（がんこな）",
        "stubborn, obstinate"
      ],
      [
        "強固な（きょうこな）",
        "firm, stable, strong"
      ],
      [
        "固定する（こていする）",
        "fix, be fixed"
      ],
      [
        "固辞する（こじする）",
        "refuse firmly"
      ],
      [
        "凝固する（ぎょうこする）",
        "coagulate, freeze, solidify"
      ],
      [
        "固める（かためる）",
        "harden, freeze, fortify [v.t.]"
      ],
      [
        "固まる（かたまる）",
        "harden, solidify [v.i.]"
      ],
      [
        "固い（かたい）",
        "hard, firm, certain"
      ]
    ],
    "radical": "⼞",
    "rad_order": 36,
    "rad_stroke": 3,
    "rad_name_ja": "くにがまえ",
    "rad_name": "kunigamae",
    "rad_meaning": "border, territorial boundaries",
    "rad_position_ja": "かまえ, くにがまえ",
    "rad_position": "kamae, kunigamae"
  },
  {
    "kanji": "隣",
    "kname": "tona(ri)",
    "kstroke": 16,
    "kmeaning": "neighbor",
    "kgrade": "n/a",
    "kunyomi_ja": "とな、となり",
    "kunyomi": "tona, tonari",
    "onyomi_ja": "リン",
    "onyomi": "rin",
    "examples": [
      [
        "隣人（りんじん）",
        "neighbor"
      ],
      [
        "隣国（りんごく）",
        "neighboring country"
      ],
      [
        "近隣（きんりん）",
        "neighborhood, vicinity"
      ],
      [
        "隣接する（りんせつする）",
        "adjoin, be adjacent, be related"
      ],
      [
        "隣席する（りんせきする）",
        "sit next to"
      ],
      [
        "隣（となり）",
        "next to, next door to"
      ],
      [
        "隣近所（となりきんじょ）",
        "neighbors, neighborhood"
      ],
      [
        "隣り合う（となりあう）",
        "adjoin, sit side by side"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "台",
    "kname": "dai(za)",
    "kstroke": 5,
    "kmeaning": "stand, counter for machinery",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ダイ、タイ",
    "onyomi": "dai, tai",
    "examples": [
      [
        "台（だい）",
        "stand, rack"
      ],
      [
        "台座（だいざ）",
        "pedestal"
      ],
      [
        "台所（だいどころ）",
        "kitchen"
      ],
      [
        "台地（だいち）",
        "plateau"
      ],
      [
        "一台（いちだい）",
        "one (machine)"
      ],
      [
        "気象台（きしょうだい）",
        "meteorological observatory"
      ],
      [
        "台湾（たいわん）",
        "Taiwan"
      ],
      [
        "台風（たいふう）",
        "typhoon"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "戦",
    "kname": "ikusa",
    "kstroke": 13,
    "kmeaning": "war, fight, battle",
    "kgrade": 4,
    "kunyomi_ja": "いくさ、たたか、たたかう、たたかわす",
    "kunyomi": "ikusa, tataka, tatakau, tatakawasu",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "戦争（せんそう）",
        "war"
      ],
      [
        "戦闘（せんとう）",
        "battle, fight, combat"
      ],
      [
        "戦場（せんじょう）",
        "battlefield, battleground"
      ],
      [
        "戦前（せんぜん）",
        "pre-war"
      ],
      [
        "戦後（せんご）",
        "postwar"
      ],
      [
        "作戦（さくせん）",
        "tactics, strategy"
      ],
      [
        "決勝戦（けっしょうせん）",
        "finals game of a tournament decision of a contest"
      ],
      [
        "観戦する（かんせんする）",
        "watch a game"
      ],
      [
        "敗戦する（はいせんする）",
        "lose, be defeated"
      ],
      [
        "挑戦する（ちょうせんする）",
        "challenge, defy [v.i.]"
      ],
      [
        "戦（いくさ）",
        "war, battle, campaign, fight"
      ],
      [
        "戦う（たたかう）",
        "fight [v.i.]"
      ]
    ],
    "radical": "⼽",
    "rad_order": 81,
    "rad_stroke": 4,
    "rad_name_ja": "ほこ",
    "rad_name": "hoko",
    "rad_meaning": "spear, weapon",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "和",
    "kname": "yawa(ragu)",
    "kstroke": 8,
    "kmeaning": "harmony, peace, Japan",
    "kgrade": 3,
    "kunyomi_ja": "やわ、やわらぐ、やわらげる、なご、なごむ、なごやか",
    "kunyomi": "yawa, yawaragu, yawarageru, nago, nagomu, nagoyaka",
    "onyomi_ja": "ワ、オ",
    "onyomi": "wa, o",
    "examples": [
      [
        "和食（わしょく）",
        "Japanese-style meal"
      ],
      [
        "和歌（わか）",
        "31 syllable poem"
      ],
      [
        "平和（へいわ）",
        "peace, harmony"
      ],
      [
        "温和な（おんわな）",
        "gentle, mild, moderate"
      ],
      [
        "緩和する（かんわする）",
        "relief, mitigate"
      ],
      [
        "調和する（ちょうわする）",
        "harmonize, be in harmony"
      ],
      [
        "和尚（おしょう）",
        "Buddhist priest"
      ],
      [
        "和らげる（やわらげる）",
        "soften, moderate, relieve"
      ],
      [
        "和らぐ（やわらぐ）",
        "soften, calm down"
      ],
      [
        "和やかな（なごやかな）",
        "peaceful, mild, amicable"
      ],
      [
        "和む（なごむ）",
        "soften, calm down"
      ],
      [
        "*大和（やまと）",
        "Yamato, Japan"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "忠",
    "kname": "chuu(koku)",
    "kstroke": 8,
    "kmeaning": "loyalty, faithfulness",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "忠義（ちゅうぎ）",
        "loyalty, devotion"
      ],
      [
        "忠誠心（ちゅうせいしん）",
        "loyalty, sincerity"
      ],
      [
        "忠実な（ちゅうじつな）",
        "faithful, loyal"
      ],
      [
        "忠告する（ちゅうこくする）",
        "advise, warn"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "混",
    "kname": "kon-ma(zeru)",
    "kstroke": 11,
    "kmeaning": "mix",
    "kgrade": 5,
    "kunyomi_ja": "ま、まじる、まじり、まざる、まぜる",
    "kunyomi": "ma, majiru, majiri, mazaru, mazeru",
    "onyomi_ja": "コン",
    "onyomi": "kon",
    "examples": [
      [
        "混浴（こんよく）",
        "co-ed bathing"
      ],
      [
        "混声合唱（こんせいがっしょう）",
        "co-ed chorus"
      ],
      [
        "混同する（こんどうする）",
        "confuse, mix, merge"
      ],
      [
        "混合する（こんごうする）",
        "mix"
      ],
      [
        "混入する（こんにゅうする）",
        "mix in, adulterate"
      ],
      [
        "混雑する（こんざつする）",
        "be crowded, be congested"
      ],
      [
        "混乱する（こんらんする）",
        "be in disorder, confusion, chaos"
      ],
      [
        "混ぜる（まぜる）",
        "mix, stir [v.t.]"
      ],
      [
        "混ざる（まざる）",
        "mix, blend [v.i.]"
      ],
      [
        "混じる（まじる）",
        "mix, blend [v.i.]"
      ],
      [
        "*混む（こむ）",
        "be crowded, be congested"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "鉄",
    "kname": "tetsu(dou)",
    "kstroke": 13,
    "kmeaning": "iron",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "テツ",
    "onyomi": "tetsu",
    "examples": [
      [
        "鉄（てつ）",
        "iron"
      ],
      [
        "鉄道（てつどう）",
        "railroad"
      ],
      [
        "鉄骨（てっこつ）",
        "steel frame"
      ],
      [
        "鉄砲（てっぽう）",
        "gun"
      ],
      [
        "鉄鋼（てっこう）",
        "iron and steel"
      ],
      [
        "製鉄（せいてつ）",
        "steelmaking"
      ],
      [
        "私鉄（してつ）",
        "private railway"
      ],
      [
        "地下鉄（ちかてつ）",
        "underground train, subway"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "喫",
    "kname": "kitsu(ensuru)",
    "kstroke": 12,
    "kmeaning": "ingest, drink, smoke",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キツ",
    "onyomi": "kitsu",
    "examples": [
      [
        "喫茶店（きっさてん）",
        "coffee shop"
      ],
      [
        "喫煙する（きつえんする）",
        "smoke, have a smoke"
      ],
      [
        "満喫する（まんきつする）",
        "have enough of fully enjoy"
      ]
    ],
    "radical": "",
    "rad_order": 35,
    "rad_stroke": 3,
    "rad_name_ja": "くちへん",
    "rad_name": "kuchihen",
    "rad_meaning": "mouth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "座",
    "kname": "za-suwa(ru)",
    "kstroke": 10,
    "kmeaning": "seat, sit",
    "kgrade": 6,
    "kunyomi_ja": "すわ、すわる",
    "kunyomi": "suwa, suwaru",
    "onyomi_ja": "ザ",
    "onyomi": "za",
    "examples": [
      [
        "座席（ざせき）",
        "seat"
      ],
      [
        "座敷（ざしき）",
        "tatami room"
      ],
      [
        "座禅（ざぜん）",
        "meditation"
      ],
      [
        "座談会（ざだんかい）",
        "symposium, round-table"
      ],
      [
        "座右の書（ざゆうのしょ）",
        "one's bedside book"
      ],
      [
        "星座（せいざ）",
        "constellation"
      ],
      [
        "王座（おうざ）",
        "throne"
      ],
      [
        "銀座（ぎんざ）",
        "silver mint, Ginza (place name)"
      ],
      [
        "講座（こうざ）",
        "course (of lectures)"
      ],
      [
        "銀行口座（ぎんこうこうざ）",
        "bank account"
      ],
      [
        "座る（すわる）",
        "sit, squat"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "鼻",
    "kname": "bi-hana",
    "kstroke": 14,
    "kmeaning": "nose",
    "kgrade": 3,
    "kunyomi_ja": "はな",
    "kunyomi": "hana",
    "onyomi_ja": "ビ",
    "onyomi": "bi",
    "examples": [
      [
        "鼻炎（びえん）",
        "nasal inflammation"
      ],
      [
        "鼻音（びおん）",
        "nasal sound"
      ],
      [
        "耳鼻科（じびか）",
        "otolaryngology"
      ],
      [
        "鼻（はな）",
        "nose"
      ],
      [
        "鼻水（はなみず）",
        "mucus"
      ],
      [
        "鼻血（はなぢ）",
        "nosebleed"
      ]
    ],
    "radical": "⿐",
    "rad_order": 234,
    "rad_stroke": 14,
    "rad_name_ja": "はな",
    "rad_name": "hana",
    "rad_meaning": "nose",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "首",
    "kname": "shu-kubi",
    "kstroke": 9,
    "kmeaning": "head, neck, leader",
    "kgrade": 2,
    "kunyomi_ja": "くび",
    "kunyomi": "kubi",
    "onyomi_ja": "シュ",
    "onyomi": "shu",
    "examples": [
      [
        "首都（しゅと）",
        "capital city"
      ],
      [
        "首脳（しゅのう）",
        "head, leader, chief"
      ],
      [
        "首相（しゅしょう）",
        "Prime Minister, Chancellor"
      ],
      [
        "首席（しゅせき）",
        "top seat"
      ],
      [
        "首位（しゅい）",
        "first place, head position"
      ],
      [
        "部首（ぶしゅ）",
        "radical (of kanji)"
      ],
      [
        "党首（とうしゅ）",
        "party leader"
      ],
      [
        "機首（きしゅ）",
        "nose of a plane"
      ],
      [
        "絞首刑（こうしゅけい）",
        "death by hanging"
      ],
      [
        "自首する（じしゅする）",
        "surrender, give oneself up"
      ],
      [
        "首（くび）",
        "neck"
      ],
      [
        "手首（てくび）",
        "wrist"
      ]
    ],
    "radical": "⾸",
    "rad_order": 222,
    "rad_stroke": 9,
    "rad_name_ja": "くび",
    "rad_name": "kubi",
    "rad_meaning": "head",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "震",
    "kname": "furu(eru)",
    "kstroke": 15,
    "kmeaning": "quake, shake, tremble",
    "kgrade": "n/a",
    "kunyomi_ja": "ふる、ふるえる、ふるえ",
    "kunyomi": "furu, furueru, furue",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "震動（しんどう）",
        "shock, tremor, impact"
      ],
      [
        "震度（しんど）",
        "Japanese earthquake scale"
      ],
      [
        "震源（しんげん）",
        "epicenter"
      ],
      [
        "震災（しんさい）",
        "earthquake (disaster)"
      ],
      [
        "地震（じしん）",
        "earthquake"
      ],
      [
        "強震（きょうしん）",
        "severe earthquake"
      ],
      [
        "弱震（じゃくしん）",
        "mild earthquake"
      ],
      [
        "震える（ふるえる）",
        "shiver, shake, quake [v.i.]"
      ],
      [
        "身震いする（みぶるいする）",
        "shiver, tremble, shudder"
      ]
    ],
    "radical": "⻗",
    "rad_order": 211,
    "rad_stroke": 8,
    "rad_name_ja": "あめかんむり",
    "rad_name": "amekanmuri",
    "rad_meaning": "rain",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "個",
    "kname": "ko(sei)",
    "kstroke": 10,
    "kmeaning": "individual, general counter",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コ、カ",
    "onyomi": "ko, ka",
    "examples": [
      [
        "一個（いっこ）",
        "1 (piece)"
      ],
      [
        "何個（なんこ）",
        "how many pieces"
      ],
      [
        "個室（こしつ）",
        "private room"
      ],
      [
        "個人（こじん）",
        "individual"
      ],
      [
        "個性（こせい）",
        "personality"
      ],
      [
        "二個所（にかしょ）",
        "2 places"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "災",
    "kname": "sai(nan)",
    "kstroke": 7,
    "kmeaning": "calamity, disaster, misfortune",
    "kgrade": 5,
    "kunyomi_ja": "わざわ、わざわい",
    "kunyomi": "wazawa, wazawai",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "災難（さいなん）",
        "mishap, calamity, misfortune"
      ],
      [
        "災害（さいがい）",
        "calamity, disaster"
      ],
      [
        "震災（しんさい）",
        "earthquake (disaster)"
      ],
      [
        "火災（かさい）",
        "fire (disaster)"
      ],
      [
        "人災（じんさい）",
        "man-made disaster"
      ],
      [
        "天災（てんさい）",
        "natural disaster"
      ],
      [
        "戦災（せんさい）",
        "war damage"
      ],
      [
        "被災地（ひさいち）",
        "disaster-struck area"
      ],
      [
        "災い（わざわい）",
        "calamity, catastrophe, evil"
      ]
    ],
    "radical": "⽕",
    "rad_order": 110,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "fire",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "焦",
    "kname": "ko(geru)",
    "kstroke": 12,
    "kmeaning": "scorch, be impatient, yearn for",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こげる、こがす、こがれる、あせ、あせる、あせり",
    "kunyomi": "ko, kogeru, kogasu, kogareru, ase, aseru, aseri",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "焦土（しょうど）",
        "scorched earth"
      ],
      [
        "焦点（しょうてん）",
        "focus, point"
      ],
      [
        "焦燥感（しょうそうかん）",
        "impatience, uneasiness"
      ],
      [
        "焦げる（こげる）",
        "burn, be burned [v.i.]"
      ],
      [
        "焦がす（こがす）",
        "burn, scorch, singe [v.t.]"
      ],
      [
        "恋焦がれる（こいこがれる）",
        "yearn for, be deeply in love"
      ],
      [
        "待ち焦がれる（まちこがれる）",
        "long for"
      ],
      [
        "焦る（あせる）",
        "be in a hurry, be impatient"
      ]
    ],
    "radical": "⺣",
    "rad_order": 112,
    "rad_stroke": 4,
    "rad_name_ja": "れっか",
    "rad_name": "rekka",
    "rad_meaning": "fire",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "破",
    "kname": "ha(kaisuru)",
    "kstroke": 10,
    "kmeaning": "break, tear",
    "kgrade": 5,
    "kunyomi_ja": "やぶ、やぶる、やぶれる",
    "kunyomi": "yabu, yaburu, yabureru",
    "onyomi_ja": "ハ",
    "onyomi": "ha",
    "examples": [
      [
        "破局（はきょく）",
        "catastrophe, cataclysm"
      ],
      [
        "破片（はへん）",
        "fragment, splinter, broken piece"
      ],
      [
        "破壊する（はかいする）",
        "destroy, demolish"
      ],
      [
        "破棄する（はきする）",
        "revoke, annul, break"
      ],
      [
        "破産する（はさんする）",
        "go bankrupt"
      ],
      [
        "破滅する（はめつする）",
        "fall into ruin"
      ],
      [
        "読破する（どくはする）",
        "finish reading a book"
      ],
      [
        "爆破する（ばくはする）",
        "explode, blow up"
      ],
      [
        "難波する（なんぱする）",
        "be wrecked (ship)"
      ],
      [
        "突破する（とっぱする）",
        "break through"
      ],
      [
        "破る（やぶる）",
        "tear, violate, defeat [v.t.]"
      ],
      [
        "破れる（やぶれる）",
        "wear out, get torn [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "壊",
    "kname": "kai-kowa(su)",
    "kstroke": 16,
    "kmeaning": "break down, destroy, damage",
    "kgrade": "n/a",
    "kunyomi_ja": "こわ、こわす、こわれる",
    "kunyomi": "kowa, kowasu, kowareru",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "壊滅する（かいめつする）",
        "destroy, annihilate [v.t.][v.i.]"
      ],
      [
        "破壊する（はかいする）",
        "destroy, demolish"
      ],
      [
        "崩壊する（ほうかいする）",
        "collapse, crumble"
      ],
      [
        "倒壊する（とうかいする）",
        "collapse, fall down"
      ],
      [
        "全壊する（ぜんかいする）",
        "be completely destroyed"
      ],
      [
        "壊す（こわす）",
        "break, destroy [v.t.]"
      ],
      [
        "壊れる（こわれる）",
        "break [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "造",
    "kname": "zou-tsuku(ru)",
    "kstroke": 10,
    "kmeaning": "make, produce, build",
    "kgrade": 5,
    "kunyomi_ja": "つく、つくる、つくり",
    "kunyomi": "tsuku, tsukuru, tukuri",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "造花（ぞうか）",
        "artificial flowers"
      ],
      [
        "造船（ぞうせん）",
        "shipbuilding"
      ],
      [
        "構造（こうぞう）",
        "structure, construction"
      ],
      [
        "木造（もくぞう）",
        "wooden, made of wood"
      ],
      [
        "人造湖（じんぞうこ）",
        "artificial lake"
      ],
      [
        "創造する（そうぞうする）",
        "create"
      ],
      [
        "改造する（かいぞうする）",
        "remodel"
      ],
      [
        "製造する（せいぞうする）",
        "manufacture, produce"
      ],
      [
        "造る（つくる）",
        "make, create, manufacture"
      ],
      [
        "酒造り（さけづくり）",
        "sake brewing"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "我",
    "kname": "ga-ware",
    "kstroke": 7,
    "kmeaning": "self, I, my, our",
    "kgrade": 6,
    "kunyomi_ja": "われ、わ",
    "kunyomi": "ware, wa",
    "onyomi_ja": "ガ",
    "onyomi": "ga",
    "examples": [
      [
        "我流（がりゅう）",
        "one's own style"
      ],
      [
        "我欲（がよく）",
        "selfishness"
      ],
      [
        "自我（じが）",
        "self, ego"
      ],
      [
        "無我（むが）",
        "selflessness"
      ],
      [
        "怪我（けが）",
        "injury"
      ],
      [
        "我慢する（がまんする）",
        "endure, put up with"
      ],
      [
        "我（われ）",
        "I, self, oneself, ego"
      ],
      [
        "我々（われわれ）",
        "we"
      ],
      [
        "我が家（わがや）",
        "our house, our home"
      ],
      [
        "我が国（わがくに）",
        "our country, our land"
      ]
    ],
    "radical": "⼽",
    "rad_order": 81,
    "rad_stroke": 4,
    "rad_name_ja": "ほこ",
    "rad_name": "hoko",
    "rad_meaning": "spear, weapon",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "去",
    "kname": "kyo-sa(ru)",
    "kstroke": 5,
    "kmeaning": "go away, leave",
    "kgrade": 3,
    "kunyomi_ja": "さ、さる",
    "kunyomi": "sa, saru",
    "onyomi_ja": "キョ、コ",
    "onyomi": "kyo, ko",
    "examples": [
      [
        "去年（きょねん）",
        "last year"
      ],
      [
        "去来する（きょらいする）",
        "come and go"
      ],
      [
        "退去する（たいきょする）",
        "depart, leave"
      ],
      [
        "死去する（しきょする）",
        "pass away, die"
      ],
      [
        "過去（かこ）",
        "the past"
      ],
      [
        "去る（さる）",
        "leave, go away"
      ]
    ],
    "radical": "⼛",
    "rad_order": 32,
    "rad_stroke": 2,
    "rad_name_ja": "む",
    "rad_name": "mu",
    "rad_meaning": "private, Katakana Mu",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "巨",
    "kname": "kyo(daina)",
    "kstroke": 5,
    "kmeaning": "huge, gigantic, large",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョ",
    "onyomi": "kyo",
    "examples": [
      [
        "巨人（きょじん）",
        "giant"
      ],
      [
        "巨岩（きょがん）",
        "huge rock, crag"
      ],
      [
        "巨視的な（きょしてきな）",
        "macroscopic"
      ],
      [
        "巨大な（きょだいな）",
        "enormous, colossal"
      ]
    ],
    "radical": "⼆",
    "rad_order": 8,
    "rad_stroke": 2,
    "rad_name_ja": "に",
    "rad_name": "ni",
    "rad_meaning": "two",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "並",
    "kname": "hei-nara(bu)",
    "kstroke": 8,
    "kmeaning": "line up, ordinary",
    "kgrade": 6,
    "kunyomi_ja": "なみ、な、ならべる、なら、ならぶ、ならびに、ならび",
    "kunyomi": "nami, na, naraberu, nara, narabu, narabini, narabi",
    "onyomi_ja": "ヘイ",
    "onyomi": "hei",
    "examples": [
      [
        "並列する（へいれつする）",
        "stand in a row"
      ],
      [
        "並（なみ）",
        "common, ordinary, average"
      ],
      [
        "並木（なみき）",
        "row of trees"
      ],
      [
        "並外れる（なみはずれる）",
        "out of the ordinary"
      ],
      [
        "町並み（まちなみ）",
        "stores and houses on a street"
      ],
      [
        "軒並み（のきなみ）",
        "row of houses, at every door"
      ],
      [
        "人並み（ひとなみ）",
        "average, ordinary"
      ],
      [
        "月並みな（つきなみな）",
        "trite, commonplace, hackneyed"
      ],
      [
        "並べる（ならべる）",
        "line up [v.t.]"
      ],
      [
        "並ぶ（ならぶ）",
        "line up [v.i.]"
      ],
      [
        "並びに（ならびに）",
        "and"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "坂",
    "kname": "saka",
    "kstroke": 7,
    "kmeaning": "slope, hill",
    "kgrade": 3,
    "kunyomi_ja": "さか",
    "kunyomi": "saka",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "登坂する（とはんする）",
        "climb a hill"
      ],
      [
        "坂（さか）",
        "slope hill"
      ],
      [
        "坂道（さかみち）",
        "hill road"
      ],
      [
        "上り坂（のぼりざか）",
        "uphill, upgrade"
      ],
      [
        "下り坂（くだりざか）",
        "downhill, downgrade"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "匹",
    "kname": "(nan)hiki",
    "kstroke": 4,
    "kmeaning": "counter for animals",
    "kgrade": "n/a",
    "kunyomi_ja": "ひき",
    "kunyomi": "hiki",
    "onyomi_ja": "ヒツ",
    "onyomi": "hitsu",
    "examples": [
      [
        "匹敵する（ひってきする）",
        "match, be equal to"
      ],
      [
        "一匹（いっぴき）",
        "1 (animal)"
      ],
      [
        "三匹（さんびき）",
        "3 (animals)"
      ],
      [
        "六匹（ろっぴき）",
        "6 (animals)"
      ],
      [
        "八匹（はっぴき）",
        "8 (animals)"
      ],
      [
        "十匹（じゅっぴき）",
        "10 (animals)"
      ],
      [
        "何匹（なんびき）",
        "how many animals"
      ]
    ],
    "radical": "⼕",
    "rad_order": 27,
    "rad_stroke": 2,
    "rad_name_ja": "はこがまえ",
    "rad_name": "hakogamae",
    "rad_meaning": "box",
    "rad_position_ja": "かまえ, はこがまえ",
    "rad_position": "kamae, hakogamae"
  },
  {
    "kanji": "緑",
    "kname": "ryoku-midori",
    "kstroke": 14,
    "kmeaning": "green",
    "kgrade": 3,
    "kunyomi_ja": "みどり",
    "kunyomi": "midori",
    "onyomi_ja": "リョク、ロク",
    "onyomi": "ryoku, roku",
    "examples": [
      [
        "緑茶（りょくちゃ）",
        "green tea, Japanese tea"
      ],
      [
        "新緑（しんりょく）",
        "fresh verdure"
      ],
      [
        "葉緑素（ようりょくそ）",
        "chlorophyl"
      ],
      [
        "緑青（ろくしょう）",
        "copper rust, verdigris"
      ],
      [
        "緑（みどり）",
        "greenery"
      ],
      [
        "緑色（みどりいろ）",
        "green"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "植",
    "kname": "u(waru)",
    "kstroke": 12,
    "kmeaning": "plant",
    "kgrade": 3,
    "kunyomi_ja": "う、うえる、うわる",
    "kunyomi": "u, ueru, uwaru",
    "onyomi_ja": "ショク",
    "onyomi": "shoku",
    "examples": [
      [
        "植物（しょくぶつ）",
        "plant, vegetation"
      ],
      [
        "植物園（しょくぶつえん）",
        "botanical garden"
      ],
      [
        "植民地（しょくみんち）",
        "colony"
      ],
      [
        "臓器移植（ぞうきいしょく）",
        "organ transplant"
      ],
      [
        "移植する（いしょくする）",
        "transplant, implant"
      ],
      [
        "入植する（にゅうしょくする）",
        "settle, immigrate"
      ],
      [
        "植える（うえる）",
        "plant, grow [v.t.]"
      ],
      [
        "植木（うえき）",
        "garden shrubs, potted plant"
      ],
      [
        "田植え（たうえ）",
        "rice planting"
      ],
      [
        "植わる（うわる）",
        "be planted [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "脈",
    "kname": "myaku",
    "kstroke": 10,
    "kmeaning": "vein, pulse",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ミャク",
    "onyomi": "myaku",
    "examples": [
      [
        "脈（みゃく）",
        "pulse"
      ],
      [
        "脈拍（みゃくはく）",
        "pulse, pulsation"
      ],
      [
        "脈絡（みゃくらく）",
        "chain of reasoning, coherence"
      ],
      [
        "文脈（ぶんみゃく）",
        "context"
      ],
      [
        "動脈（どうみゃく）",
        "artery"
      ],
      [
        "静脈（じょうみゃく）",
        "vein"
      ],
      [
        "山脈（さんみゃく）",
        "mountain range"
      ],
      [
        "葉脈（ようみゃく）",
        "veins of a leaf"
      ],
      [
        "不整脈（ふせいみゃく）",
        "irregular pulse, arrhythmia"
      ],
      [
        "乱脈な（らんみゃくな）",
        "chaotic, disorderly"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "設",
    "kname": "(ken)setsu",
    "kstroke": 11,
    "kmeaning": "set up, establish",
    "kgrade": 5,
    "kunyomi_ja": "もう、もうける",
    "kunyomi": "mou, moukeru",
    "onyomi_ja": "セツ",
    "onyomi": "setsu",
    "examples": [
      [
        "設備（せつび）",
        "equipment, facilities"
      ],
      [
        "施設（しせつ）",
        "institution, facility"
      ],
      [
        "私設（しせつ）",
        "private"
      ],
      [
        "設計する（せっけいする）",
        "plan, design"
      ],
      [
        "設定する（せっていする）",
        "establish, set up"
      ],
      [
        "設立する（せつりつする）",
        "establish, found, organize"
      ],
      [
        "設置する（せっちする）",
        "establish, found"
      ],
      [
        "創設する（そうせつする）",
        "establish, found"
      ],
      [
        "開設する（かいせつする）",
        "establish, open"
      ],
      [
        "建設する（けんせつする）",
        "build, establish, construct"
      ],
      [
        "設ける（もうける）",
        "create, establish"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "築",
    "kname": "kizu(ku)",
    "kstroke": 16,
    "kmeaning": "construct, build",
    "kgrade": 5,
    "kunyomi_ja": "きず、きずく",
    "kunyomi": "kizu, kizuku",
    "onyomi_ja": "チク",
    "onyomi": "chiku",
    "examples": [
      [
        "建築（けんちく）",
        "construction, architecture"
      ],
      [
        "建築家（けんちくか）",
        "architect"
      ],
      [
        "築城する（ちくじょうする）",
        "fortify, construct a castle"
      ],
      [
        "新築する（しんちくする）",
        "build, construct"
      ],
      [
        "増築する（ぞうちくする）",
        "build an addition"
      ],
      [
        "改築する（かいちくする）",
        "rebuild, reconstruct"
      ],
      [
        "構築する（こうちくする）",
        "build, construct"
      ],
      [
        "築く（きずく）",
        "build, construct"
      ],
      [
        "*築山（つきやま）",
        "artificial hill (in a garden)"
      ],
      [
        "*築地（つきじ）",
        "Tsukiji (place name)"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "局",
    "kname": "(yuubin)kyoku",
    "kstroke": 7,
    "kmeaning": "bureau, limited part, office",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョク",
    "onyomi": "kyoku",
    "examples": [
      [
        "局長（きょくちょう）",
        "bureau director, office chief"
      ],
      [
        "局面（きょくめん）",
        "checkerboard, aspect, situation"
      ],
      [
        "破局（はきょく）",
        "catastrophe, cataclysm"
      ],
      [
        "戦局（せんきょく）",
        "the state of the war"
      ],
      [
        "政局（せいきょく）",
        "political situation"
      ],
      [
        "結局（けっきょく）",
        "after all, eventually"
      ],
      [
        "薬局（やっきょく）",
        "pharmacy, drugstore"
      ],
      [
        "水道局（すいどうきょく）",
        "water bureau or department"
      ],
      [
        "郵便局（ゆうびんきょく）",
        "post office"
      ],
      [
        "放送局（ほうそうきょく）",
        "broadcasting office"
      ],
      [
        "局地的な（きょくちてきな）",
        "local"
      ],
      [
        "局限する（きょくげんする）",
        "limit, localize"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "温",
    "kname": "on(sen)",
    "kstroke": 12,
    "kmeaning": "warm",
    "kgrade": 3,
    "kunyomi_ja": "あたた、あたたか、あたたかい、あたたまる、あたためる",
    "kunyomi": "atata, atataka, atatakai, atatamaru, atatameru",
    "onyomi_ja": "オン",
    "onyomi": "on",
    "examples": [
      [
        "温度（おんど）",
        "temperature"
      ],
      [
        "温度計（おんどけい）",
        "thermometer"
      ],
      [
        "温室（おんしつ）",
        "greenhouse"
      ],
      [
        "温泉（おんせん）",
        "spa, hot spring, onsen"
      ],
      [
        "気温（きおん）",
        "air temperature"
      ],
      [
        "体温（たいおん）",
        "body temperature"
      ],
      [
        "温暖な（おんだんな）",
        "warm, mild, temperate"
      ],
      [
        "温和な（おんわな）",
        "gentle, mild, mild-tempered"
      ],
      [
        "保温する（ほおんする）",
        "retain warmth, keep in heat"
      ],
      [
        "温める（あたためる）",
        "warm, heat up [v.t.]"
      ],
      [
        "温まる（あたたまる）",
        "warm up [v.i.]"
      ],
      [
        "温かい（あたたかい）",
        "warm [adj.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "華",
    "kname": "(gou)ka",
    "kstroke": 10,
    "kmeaning": "magnificent, flower, brilliant, China",
    "kgrade": "n/a",
    "kunyomi_ja": "はな、はなやかな",
    "kunyomi": "hana, hanayakana",
    "onyomi_ja": "カ、ケ",
    "onyomi": "ka, ke",
    "examples": [
      [
        "華道（かどう）",
        "flower arrangement"
      ],
      [
        "華氏（かし）",
        "Fahrenheit"
      ],
      [
        "中華料理（ちゅうかりょうり）",
        "Chinese food"
      ],
      [
        "華麗な（かれいな）",
        "splendid, magnificent"
      ],
      [
        "華美な（かびな）",
        "splendid, showy, gaudy"
      ],
      [
        "豪華な（ごうかな）",
        "gorgeous, luxurious"
      ],
      [
        "法華経（ほけきょう）",
        "the Lotus Sutra"
      ],
      [
        "華（はな）",
        "flower, essence"
      ],
      [
        "華やかな（はなやかな）",
        "flowery, flamboyant"
      ],
      [
        "華々しい（はなばなしい）",
        "spectacular, brilliant, glorious"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "氏",
    "kname": "shi-uji",
    "kstroke": 4,
    "kmeaning": "courtesy title, family name, lineage",
    "kgrade": 4,
    "kunyomi_ja": "うじ",
    "kunyomi": "uji",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "氏名（しめい）",
        "full name, identity"
      ],
      [
        "氏族（しぞく）",
        "clan, family"
      ],
      [
        "田中氏（たなかし）",
        "Mr. Tanaka"
      ],
      [
        "彼氏（かれし）",
        "boyfriend"
      ],
      [
        "摂氏（せっし）",
        "Centigrade, Celsius"
      ],
      [
        "華氏（かし）",
        "Fahrenheit"
      ],
      [
        "氏（うじ）",
        "lineage, family, Mr."
      ],
      [
        "氏神（うじがみ）",
        "Shinto god, patron god"
      ],
      [
        "氏素性（うじすじょう）",
        "(a person's) family background"
      ]
    ],
    "radical": "⽒",
    "rad_order": 107,
    "rad_stroke": 4,
    "rad_name_ja": "うじ",
    "rad_name": "uji",
    "rad_meaning": "family, clan",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "算",
    "kname": "san(suu)",
    "kstroke": 14,
    "kmeaning": "calculate",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "算数（さんすう）",
        "arithmetic"
      ],
      [
        "採算（さいさん）",
        "profit"
      ],
      [
        "暗算（あんざん）",
        "mental arithmetic"
      ],
      [
        "予算（よさん）",
        "estimate, budget"
      ],
      [
        "足し算（たしざん）",
        "addition"
      ],
      [
        "引き算（ひきざん）",
        "subtraction"
      ],
      [
        "計算する（けいさんする）",
        "calculate, reckon"
      ],
      [
        "概算する（がいさんする）",
        "approximate, estimate"
      ],
      [
        "精算する（せいさんする）",
        "adjust a fare, settle up"
      ],
      [
        "換算する（かんさんする）",
        "convert, change"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "円",
    "kname": "en-maru",
    "kstroke": 4,
    "kmeaning": "circle, yen",
    "kgrade": 1,
    "kunyomi_ja": "まる、まるい",
    "kunyomi": "maru, marui",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "千円（せんえん）",
        "a thousand yen"
      ],
      [
        "円高（えんだか）",
        "strong yen"
      ],
      [
        "円安（えんやす）",
        "cheap yen"
      ],
      [
        "円満な（えんまんな）",
        "peaceful"
      ],
      [
        "円滑な（えんかつな）",
        "smooth"
      ],
      [
        "円い（まるい）",
        "round"
      ]
    ],
    "radical": "⼌",
    "rad_order": 17,
    "rad_stroke": 2,
    "rad_name_ja": "けいがまえ",
    "rad_name": "keigamae",
    "rad_meaning": "to enclose",
    "rad_position_ja": "かまえ, けいがまえ",
    "rad_position": "kamae, keigamae"
  },
  {
    "kanji": "邪",
    "kname": "ja(akuna)",
    "kstroke": 8,
    "kmeaning": "evil, wrong",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジャ",
    "onyomi": "ja",
    "examples": [
      [
        "邪心（じゃしん）",
        "malice, evil intentions"
      ],
      [
        "邪道な（じゃどうな）",
        "heresy, the course of evil"
      ],
      [
        "邪魔な（じゃまな）",
        "obstructive, burdensome"
      ],
      [
        "邪悪な（じゃあくな）",
        "wicked, evil"
      ],
      [
        "無邪気な（むじゃきな）",
        "innocent, simple"
      ],
      [
        "邪魔する（じゃまする）",
        "get in the way, be a nuisance"
      ],
      [
        "*風邪（かぜ）",
        "a cold (as in an illness)"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "軽",
    "kname": "karu(i)",
    "kstroke": 12,
    "kmeaning": "light",
    "kgrade": 3,
    "kunyomi_ja": "かる、かるい、かろ、かろやかな",
    "kunyomi": "karu, karui, karo, karoyakana",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "軽傷（けいしょう）",
        "minor injury"
      ],
      [
        "軽食（けいしょく）",
        "light meal"
      ],
      [
        "軽工業（けいこうぎょう）",
        "light industry"
      ],
      [
        "軽率な（けいそつな）",
        "rash, impulsive, careless"
      ],
      [
        "軽薄な（けいはくな）",
        "frivolous, superficial"
      ],
      [
        "軽快な（けいかいな）",
        "rhythmical, casual, light, nimble"
      ],
      [
        "軽視する（けいしする）",
        "despise, slight, ignore, neglect"
      ],
      [
        "軽減する（けいげんする）",
        "lighten, lessen, abate [v.i.]"
      ],
      [
        "軽い（かるい）",
        "light, minor, not serious"
      ],
      [
        "気軽な（きがるな）",
        "cheerful, buoyant, lighthearted"
      ],
      [
        "手軽な（てがるな）",
        "easy, simple, informal, offhand"
      ],
      [
        "軽やかな（かろやかな）",
        "light, airy, easy"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "絡",
    "kname": "kara(maru)",
    "kstroke": 12,
    "kmeaning": "interlink, entwine, get entangled",
    "kgrade": "n/a",
    "kunyomi_ja": "から、からむ、からまる、からめる",
    "kunyomi": "kara, karamu, karamaru, karameru",
    "onyomi_ja": "ラク",
    "onyomi": "raku",
    "examples": [
      [
        "脈絡（みゃくらく）",
        "chain of reasoning, logic"
      ],
      [
        "短絡的な（たんらくてきな）",
        "over-abbreviated, simplistic"
      ],
      [
        "連絡する（れんらくする）",
        "notify, communicate, contact"
      ],
      [
        "絡む（からむ）",
        "become entangled with [v.i.]"
      ],
      [
        "絡める（からめる）",
        "entwine [v.t.]"
      ],
      [
        "絡まる（からまる）",
        "get caught in, entwine [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "毛",
    "kname": "mou(fu)",
    "kstroke": 4,
    "kmeaning": "hair, fur, feather, down",
    "kgrade": 2,
    "kunyomi_ja": "け",
    "kunyomi": "ke",
    "onyomi_ja": "モウ",
    "onyomi": "mou",
    "examples": [
      [
        "毛布（もうふ）",
        "blanket"
      ],
      [
        "毛筆（もうひつ）",
        "(writing) brush"
      ],
      [
        "羽毛（うもう）",
        "feathers, plumage, down,"
      ],
      [
        "羊毛（ようもう）",
        "wool,"
      ],
      [
        "純毛（じゅんもう）",
        "100 % wool"
      ],
      [
        "不毛（ふもう）",
        "sterile, barren, unproductive [n.]"
      ],
      [
        "毛（け）",
        "hair, fur"
      ],
      [
        "毛糸（けいと）",
        "knitting wool"
      ],
      [
        "髪の毛（かみのけ）",
        "hair (on the head)"
      ],
      [
        "鼻毛（はなげ）",
        "nose hair"
      ],
      [
        "赤毛（あかげ）",
        "red hair"
      ]
    ],
    "radical": "⽑",
    "rad_order": 106,
    "rad_stroke": 4,
    "rad_name_ja": "け",
    "rad_name": "ke",
    "rad_meaning": "hair",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "布",
    "kname": "nuno",
    "kstroke": 5,
    "kmeaning": "cloth, spread",
    "kgrade": 5,
    "kunyomi_ja": "ぬの",
    "kunyomi": "nuno",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "布団（ふとん）",
        "bedding, futon"
      ],
      [
        "毛布（もうふ）",
        "blanket"
      ],
      [
        "財布（さいふ）",
        "purse, wallet"
      ],
      [
        "湿布（しっぷ）",
        "compress, poultice"
      ],
      [
        "布告する（ふこくする）",
        "proclaim, declare"
      ],
      [
        "布教する（ふきょうする）",
        "propagate (a religion)"
      ],
      [
        "配布する（はいふする）",
        "distribute [v.t.]"
      ],
      [
        "流布する（るふする）",
        "circulate, spread (a rumor) [v.i.]"
      ],
      [
        "分布する（ぶんぷする）",
        "distribute [v.i.]"
      ],
      [
        "布（ぬの）",
        "cloth"
      ],
      [
        "布地（ぬのじ）",
        "cloth, fabric"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "仮",
    "kname": "ka(men)",
    "kstroke": 6,
    "kmeaning": "temporary, tentative",
    "kgrade": 5,
    "kunyomi_ja": "かり、かりに",
    "kunyomi": "kari, karini",
    "onyomi_ja": "カ、ケ",
    "onyomi": "ka, ke",
    "examples": [
      [
        "仮名（かな）",
        "kana (hiragana, katakana)"
      ],
      [
        "仮名（かめい）",
        "pseudonym"
      ],
      [
        "仮面（かめん）",
        "mask, disguise"
      ],
      [
        "仮説（かせつ）",
        "hypothesis, supposition"
      ],
      [
        "仮装（かそう）",
        "fancy dress, masquerade"
      ],
      [
        "仮眠する（かみんする）",
        "nap, doze [v.i.]"
      ],
      [
        "仮定する（かていする）",
        "assume, suppose, presume"
      ],
      [
        "仮病（けびょう）",
        "feigned illness"
      ],
      [
        "仮に（かりに）",
        "temporarily, provisionally"
      ],
      [
        "仮住まい（かりずまい）",
        "temporary residence"
      ],
      [
        "仮契約（かりけいやく）",
        "provisional contract"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "狂",
    "kname": "kuru(u)",
    "kstroke": 7,
    "kmeaning": "crazy, go mad",
    "kgrade": "n/a",
    "kunyomi_ja": "くる、くるう、くるおしい、くるわす、くるわせる",
    "kunyomi": "kuru, kuruu, kuruoshii, kuruwasu, kuruwaseru",
    "onyomi_ja": "キョウ",
    "onyomi": "kyou",
    "examples": [
      [
        "狂気（きょうき）",
        "madness"
      ],
      [
        "狂人（きょうじん）",
        "lunatic, madman"
      ],
      [
        "狂言（きょうげん）",
        "Noh farce"
      ],
      [
        "狂犬病（きょうけんびょう）",
        "rabies, hydrophobia"
      ],
      [
        "発狂する（はっきょうする）",
        "go mad, lose one's mind"
      ],
      [
        "狂う（くるう）",
        "go mad, get out of order [v.i.]"
      ],
      [
        "狂わす（くるわす）",
        "drive mad, disrupt [v.t.]"
      ],
      [
        "狂おしい（くるおしい）",
        "mad, crazy, distraught [adj.]"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "障",
    "kname": "shou-sawa(ru)",
    "kstroke": 14,
    "kmeaning": "hindrance, interfere with",
    "kgrade": 6,
    "kunyomi_ja": "さわ、さわる",
    "kunyomi": "sawa, sawaru",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "障子（しょうじ）",
        "paper sliding door"
      ],
      [
        "障壁（しょうへき）",
        "enclosing wall, barrier"
      ],
      [
        "障害（しょうがい）",
        "obstacle, impediment, damage"
      ],
      [
        "障害者（しょうがいしゃ）",
        "handicapped person"
      ],
      [
        "支障（ししょう）",
        "obstacle, hindrance, impediment"
      ],
      [
        "保障する（ほしょうする）",
        "guarantee, secure"
      ],
      [
        "故障する（こしょうする）",
        "break down, be out of order"
      ],
      [
        "障る（さわる）",
        "hinder, interfere, offend [v.i.]"
      ],
      [
        "差し障り（さしさわり）",
        "offense, hindrance"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "害",
    "kname": "(hei)gai",
    "kstroke": 10,
    "kmeaning": "harm, damage",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ガイ",
    "onyomi": "gai",
    "examples": [
      [
        "害（がい）",
        "harm, damage"
      ],
      [
        "被害（ひがい）",
        "damage"
      ],
      [
        "弊害（へいがい）",
        "an abuse, an evil"
      ],
      [
        "公害（こうがい）",
        "public nuisance, pollution"
      ],
      [
        "損害（そんがい）",
        "damage, loss"
      ],
      [
        "災害（さいがい）",
        "calamity, disaster, misfortune"
      ],
      [
        "障害者（しょうがいしゃ）",
        "handicapped person"
      ],
      [
        "被害者（ひがいしゃ）",
        "victim, injured party, sufferer"
      ],
      [
        "加害者（かがいしゃ）",
        "assailant, perpetrator"
      ],
      [
        "妨害する（ぼうがいする）",
        "disturb, obstruct, interfere"
      ],
      [
        "阻害する（そがいする）",
        "block, check, hinder"
      ],
      [
        "侵害する（しんがいする）",
        "infringe, violate, trespass"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "演",
    "kname": "en(geki)",
    "kstroke": 14,
    "kmeaning": "perform",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "演劇（えんげき）",
        "play, performance"
      ],
      [
        "演説（えんぜつ）",
        "speech, address,"
      ],
      [
        "講演（こうえん）",
        "lecture, address"
      ],
      [
        "主演俳優（しゅえんはいゆう）",
        "star (of a play or film)"
      ],
      [
        "演じる（えんじる）",
        "perform, act"
      ],
      [
        "演技する（えんぎする）",
        "act, perform"
      ],
      [
        "演出する（えんしゅつする）",
        "direct, produce, stage"
      ],
      [
        "演奏する（えんそうする）",
        "perform music"
      ],
      [
        "上演する（じょうえんする）",
        "present, project (a play)"
      ],
      [
        "共演する（きょうえんする）",
        "appear together, co-star"
      ],
      [
        "出演する（しゅつえんする）",
        "make an appearance [v.i.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "安",
    "kname": "yasu(i)",
    "kstroke": 6,
    "kmeaning": "peaceful, inexpensive",
    "kgrade": 3,
    "kunyomi_ja": "やす、やすい、やすまる、やすらか",
    "kunyomi": "yasu, yasui, yasumaru, yasuraka",
    "onyomi_ja": "アン",
    "onyomi": "an",
    "examples": [
      [
        "安定する（あんていする）",
        "become stable"
      ],
      [
        "安心する（あんしんする）",
        "be relieved"
      ],
      [
        "不安な（ふあんな）",
        "anxious"
      ],
      [
        "安全な（あんぜんな）",
        "safe"
      ],
      [
        "治安（ちあん）",
        "public peace and order"
      ],
      [
        "安い（やすい）",
        "cheap"
      ],
      [
        "安らぎ（やすらぎ）",
        "peace"
      ],
      [
        "安らか（やすらか）",
        "restful"
      ],
      [
        "安まる（やすまる）",
        "feel rested"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "劇",
    "kname": "(en)geki",
    "kstroke": 15,
    "kmeaning": "drama, play",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゲキ",
    "onyomi": "geki",
    "examples": [
      [
        "劇（げき）",
        "drama, play"
      ],
      [
        "劇場（げきじょう）",
        "theatre, playhouse"
      ],
      [
        "劇団（げきだん）",
        "troupe, theatrical company"
      ],
      [
        "演劇（えんげき）",
        "play, performance"
      ],
      [
        "喜劇（きげき）",
        "comedy"
      ],
      [
        "悲劇（ひげき）",
        "tragedy"
      ],
      [
        "歌劇（かげき）",
        "opera"
      ],
      [
        "時代劇（じだいげき）",
        "historical drama"
      ],
      [
        "劇的な（げきてきな）",
        "dramatic"
      ],
      [
        "悲劇的な（ひげきてきな）",
        "tragic"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "葉",
    "kname": "(ochi)ba",
    "kstroke": 12,
    "kmeaning": "leaf、foliage",
    "kgrade": 3,
    "kunyomi_ja": "は",
    "kunyomi": "ha",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "葉緑素（ようりょくそ）",
        "chlorophyl"
      ],
      [
        "紅葉（こうよう）",
        "autumn colors, autumn leaves"
      ],
      [
        "針葉樹（しんようじゅ）",
        "conifer, needle-leaved tree"
      ],
      [
        "枝葉末節（しようまっせつ）",
        "trivial details"
      ],
      [
        "葉（は）",
        "leaf, foliage"
      ],
      [
        "葉っぱ（はっぱ）",
        "leaf"
      ],
      [
        "葉書（はがき）",
        "postcard"
      ],
      [
        "言葉（ことば）",
        "word, language, speech"
      ],
      [
        "落ち葉（おちば）",
        "fallen leaves"
      ],
      [
        "*紅葉（もみじ）",
        "Japanese maple"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "板",
    "kname": "ita",
    "kstroke": 8,
    "kmeaning": "board, plate",
    "kgrade": 3,
    "kunyomi_ja": "いた",
    "kunyomi": "ita",
    "onyomi_ja": "ハン、バン",
    "onyomi": "han, ban",
    "examples": [
      [
        "黒板（こくばん）",
        "blackboard"
      ],
      [
        "看板（かんばん）",
        "signboard, billboard"
      ],
      [
        "掲示板（けいじばん）",
        "bulletin board, clipboard"
      ],
      [
        "鉄板（てっぱん）",
        "iron plate"
      ],
      [
        "甲板（かんぱん）",
        "deck"
      ],
      [
        "板（いた）",
        "board, plank"
      ],
      [
        "板前（いたまえ）",
        "chef, cook"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "階",
    "kname": "(chi)kai",
    "kstroke": 12,
    "kmeaning": "floor, rank, stair, level",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "階段（かいだん）",
        "stairs"
      ],
      [
        "階下（かいか）",
        "lower floor, downstairs"
      ],
      [
        "階級（かいきゅう）",
        "class, rank, grade"
      ],
      [
        "階層（かいそう）",
        "class, level, stratum, hierarchy"
      ],
      [
        "地階（ちかい）",
        "basement, cellar"
      ],
      [
        "五階（ごかい）",
        "fifth floor"
      ],
      [
        "各階（かくかい）",
        "each floor"
      ],
      [
        "段階（だんかい）",
        "grade, step, stage"
      ],
      [
        "音階（おんかい）",
        "musical scale"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "芝",
    "kname": "shiba(fu)",
    "kstroke": 6,
    "kmeaning": "lawn",
    "kgrade": "n/a",
    "kunyomi_ja": "しば",
    "kunyomi": "shiba",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "芝（しば）",
        "lawn, sod, turf"
      ],
      [
        "芝生（しばふ）",
        "lawn"
      ],
      [
        "芝居（しばい）",
        "play, drama"
      ],
      [
        "人工芝（じんこうしば）",
        "artificial grass"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "居",
    "kname": "kyo-i(ru)",
    "kstroke": 8,
    "kmeaning": "reside, exist",
    "kgrade": 5,
    "kunyomi_ja": "い、いる、お、おる",
    "kunyomi": "i, iru, o, oru",
    "onyomi_ja": "キョ",
    "onyomi": "kyo",
    "examples": [
      [
        "居住地（きょじゅうち）",
        "residence, address"
      ],
      [
        "住居（じゅうきょ）",
        "house, residence"
      ],
      [
        "皇居（こうきょ）",
        "Imperial Palace"
      ],
      [
        "入居する（にゅうきょする）",
        "move in"
      ],
      [
        "転居する（てんきょする）",
        "move, change residence"
      ],
      [
        "同居する（どうきょする）",
        "live together"
      ],
      [
        "別居する（べっきょする）",
        "separate (from spouse)"
      ],
      [
        "居る（いる）",
        "be, exist"
      ],
      [
        "居間（いま）",
        "living room"
      ],
      [
        "居眠り（いねむり）",
        "nap"
      ],
      [
        "居留守（いるす）",
        "pretend to be out"
      ],
      [
        "居る（おる）",
        "be, exist [hum.]"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "移",
    "kname": "i-utsu(su)",
    "kstroke": 11,
    "kmeaning": "shift, move, transfer",
    "kgrade": 5,
    "kunyomi_ja": "うつ、うつす、うつる",
    "kunyomi": "utsu, utsusu, utsuru",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "移民（いみん）",
        "immigrant"
      ],
      [
        "移動する（いどうする）",
        "move, transfer, migrate"
      ],
      [
        "移転する（いてんする）",
        "move, move house"
      ],
      [
        "移植する（いしょくする）",
        "transplant, graft [v.t.]"
      ],
      [
        "移籍する（いせきする）",
        "change family or team"
      ],
      [
        "移住する（いじゅうする）",
        "migrate, immigrate, emigrate"
      ],
      [
        "転移する（てんいする）",
        "spread, metastasize"
      ],
      [
        "移る（うつる）",
        "move, spread, transfer [v.i.]"
      ],
      [
        "移す（うつす）",
        "move, spread, transfer [v.t.]"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "努",
    "kname": "do-tsuto(meru)",
    "kstroke": 7,
    "kmeaning": "exert, make efforts, strive",
    "kgrade": 4,
    "kunyomi_ja": "つと、つとめる、つとめて",
    "kunyomi": "tsuto, tsutomeru, tsutomete",
    "onyomi_ja": "ド",
    "onyomi": "do",
    "examples": [
      [
        "努力家（どりょくか）",
        "hard worker"
      ],
      [
        "努力賞（どりょくしょう）",
        "awarded for a person's effort"
      ],
      [
        "努力する（どりょくする）",
        "exert oneself, strive"
      ],
      [
        "努める（つとめる）",
        "work, strive, exert oneself"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "折",
    "kname": "setsu-o(reru)",
    "kstroke": 7,
    "kmeaning": "break off, fold, bend",
    "kgrade": 4,
    "kunyomi_ja": "お、おる、おり、おれる",
    "kunyomi": "o, oru, ori, oreru",
    "onyomi_ja": "セツ",
    "onyomi": "setsu",
    "examples": [
      [
        "和洋折衷（わようせっちゅう）",
        "blend of Japanese and Western"
      ],
      [
        "紆余曲折（うよきょくせつ）",
        "twists and turns, ups and downs"
      ],
      [
        "右折する（うせつする）",
        "turn right"
      ],
      [
        "左折する（させつする）",
        "turn left"
      ],
      [
        "屈折する（くっせつする）",
        "bend, refract, distort"
      ],
      [
        "骨折する（こっせつする）",
        "break a bone"
      ],
      [
        "折る（おる）",
        "break, fold [v.t.]"
      ],
      [
        "折り紙（おりがみ）",
        "origami"
      ],
      [
        "折れる（おれる）",
        "break, be folded, give in [v.i.]"
      ],
      [
        "折（おり）",
        "an occasion, a chance"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "欠",
    "kname": "ketsu-ka(keru)",
    "kstroke": 4,
    "kmeaning": "lack",
    "kgrade": 4,
    "kunyomi_ja": "か、かける、かく、かかす",
    "kunyomi": "ka, kakeru, kaku, kakasu",
    "onyomi_ja": "ケツ",
    "onyomi": "ketsu",
    "examples": [
      [
        "欠員（けついん）",
        "vacancy, vacant position"
      ],
      [
        "欠点（けってん）",
        "faults, defect, weakness"
      ],
      [
        "欠陥（けっかん）",
        "defect, fault, deficiency"
      ],
      [
        "出欠（しゅっけつ）",
        "presence or absence"
      ],
      [
        "補欠（ほけつ）",
        "substitute, spare, alternate"
      ],
      [
        "不可欠な（ふかけつな）",
        "indispensable, essential"
      ],
      [
        "欠席する（けっせきする）",
        "be absent, not attend"
      ],
      [
        "欠乏する（けつぼうする）",
        "be short of, lack, want"
      ],
      [
        "欠如する（けつじょする）",
        "be short of, lack, want"
      ],
      [
        "欠ける（かける）",
        "be lacking, be chipped [v.i.]"
      ],
      [
        "欠く（かく）",
        "be short of, lack, neglect [v.t.]"
      ],
      [
        "欠かせない（かかせない）",
        "indispensable"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "買",
    "kname": "bai-ka(u)",
    "kstroke": 12,
    "kmeaning": "buy",
    "kgrade": 2,
    "kunyomi_ja": "か、かう",
    "kunyomi": "ka, kau",
    "onyomi_ja": "バイ",
    "onyomi": "bai",
    "examples": [
      [
        "買収する（ばいしゅうする）",
        "purchase, buy, bribe"
      ],
      [
        "売買する（ばいばいする）",
        "trade"
      ],
      [
        "購買（こうばい）",
        "purchasing"
      ],
      [
        "買う（かう）",
        "buy"
      ],
      [
        "買い物（かいもの）",
        "shopping"
      ],
      [
        "買い手（かいて）",
        "buyer"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "皆",
    "kname": "mina",
    "kstroke": 9,
    "kmeaning": "all",
    "kgrade": "n/a",
    "kunyomi_ja": "みな",
    "kunyomi": "mina",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "皆目（かいもく）",
        "entirely, completely"
      ],
      [
        "皆無（かいむ）",
        "nothing, none"
      ],
      [
        "皆勤（かいきん）",
        "perfect attendance"
      ],
      [
        "皆既食（かいきしょく）",
        "total eclipse"
      ],
      [
        "皆さん（みなさん）",
        "all, everyone"
      ],
      [
        "*皆（みな/みんな）",
        "everyone"
      ]
    ],
    "radical": "⽩",
    "rad_order": 133,
    "rad_stroke": 5,
    "rad_name_ja": "しろ",
    "rad_name": "shiro",
    "rad_meaning": "white",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "虫",
    "kname": "mushi",
    "kstroke": 6,
    "kmeaning": "insect, bug",
    "kgrade": 1,
    "kunyomi_ja": "むし",
    "kunyomi": "mushi",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "虫害（ちゅうがい）",
        "insect damage"
      ],
      [
        "昆虫（こんちゅう）",
        "insect, bug"
      ],
      [
        "防虫（ぼうちゅう）",
        "pesticide"
      ],
      [
        "害虫（がいちゅう）",
        "harmful insect, noxious insect"
      ],
      [
        "殺虫剤（さっちゅうざい）",
        "insecticide, pesticide"
      ],
      [
        "寄生虫（きせいちゅう）",
        "parasite"
      ],
      [
        "虫（むし）",
        "insect"
      ],
      [
        "虫歯（むしば）",
        "(tooth) cavity"
      ],
      [
        "毛虫（けむし）",
        "caterpillar"
      ],
      [
        "水虫（みずむし）",
        "athlete's foot"
      ],
      [
        "弱虫（よわむし）",
        "coward, weakling"
      ],
      [
        "泣き虫（なきむし）",
        "crybaby, blubberer"
      ]
    ],
    "radical": "⾍",
    "rad_order": 174,
    "rad_stroke": 6,
    "rad_name_ja": "むし",
    "rad_name": "mushi",
    "rad_meaning": "worm, insect, bug",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "歯",
    "kname": "shi-ha",
    "kstroke": 12,
    "kmeaning": "tooth",
    "kgrade": 3,
    "kunyomi_ja": "は",
    "kunyomi": "ha",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "歯科医（しかい）",
        "dentist"
      ],
      [
        "永久歯（えいきゅうし）",
        "permanent tooth"
      ],
      [
        "乳歯（にゅうし）",
        "milk tooth, first set of teeth"
      ],
      [
        "歯（は）",
        "tooth"
      ],
      [
        "歯車（はぐるま）",
        "gear, cog"
      ],
      [
        "歯医者（はいしゃ）",
        "dentist"
      ],
      [
        "歯ブラシ（はブラシ）",
        "toothbrush"
      ],
      [
        "歯磨き（はみがき）",
        "brushing (one's ) teeth"
      ],
      [
        "歯止め（はどめ）",
        "brake [n.]"
      ],
      [
        "虫歯（むしば）",
        "(tooth) cavity"
      ]
    ],
    "radical": "⻭",
    "rad_order": 235,
    "rad_stroke": 12,
    "rad_name_ja": "は",
    "rad_name": "ha",
    "rad_meaning": "tooth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "圧",
    "kname": "atsu(ryoku)",
    "kstroke": 5,
    "kmeaning": "pressure",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "アツ",
    "onyomi": "atsu",
    "examples": [
      [
        "圧力（あつりょく）",
        "stress, pressure"
      ],
      [
        "圧巻（あっかん）",
        "best part of a book, masterpiece"
      ],
      [
        "気圧（きあつ）",
        "atmospheric pressure"
      ],
      [
        "血圧（けつあつ）",
        "blood pressure"
      ],
      [
        "電圧（でんあつ）",
        "voltage"
      ],
      [
        "圧倒的な（あっとうてきな）",
        "overwhelming"
      ],
      [
        "圧迫する（あっぱくする）",
        "pressure, coerce, oppress"
      ],
      [
        "圧倒する（あっとうする）",
        "overwhelm, overpower"
      ],
      [
        "圧勝する（あっしょうする）",
        "win a sweeping victory"
      ],
      [
        "圧縮する（あっしゅくする）",
        "compress, condense"
      ],
      [
        "弾圧する（だんあつする）",
        "oppress, suppress"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "転",
    "kname": "koro(bu)",
    "kstroke": 11,
    "kmeaning": "turn, roll over, fall down",
    "kgrade": 3,
    "kunyomi_ja": "ころ、ころがる、ころげる、ころがす、ころぶ",
    "kunyomi": "koro, korogaru, korogeru, korogasu, korobu",
    "onyomi_ja": "テン",
    "onyomi": "ten",
    "examples": [
      [
        "転機（てんき）",
        "turning point"
      ],
      [
        "自転車（じてんしゃ）",
        "bicycle"
      ],
      [
        "転倒する（てんとうする）",
        "tumble, fall down"
      ],
      [
        "転換する（てんかんする）",
        "convert, divert, change"
      ],
      [
        "転職する（てんしょくする）",
        "change occupations"
      ],
      [
        "回転する（かいてんする）",
        "rotate"
      ],
      [
        "運転する（うんてんする）",
        "operate, drive"
      ],
      [
        "好転する（こうてんする）",
        "change for the better"
      ],
      [
        "逆転する（ぎゃくてんする）",
        "reverse, turn around"
      ],
      [
        "転がす（ころがす）",
        "roll [v.t.]"
      ],
      [
        "転がる（ころがる）",
        "roll, tumble, fall down [v.i.]"
      ],
      [
        "転ぶ（ころぶ）",
        "fall down [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 196,
    "rad_stroke": 7,
    "rad_name_ja": "くるまへん",
    "rad_name": "kurumahen",
    "rad_meaning": "vehicle, wheel, car",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "遺",
    "kname": "yui(gon)",
    "kstroke": 15,
    "kmeaning": "leave behind",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イ、ユイ",
    "onyomi": "i, yui",
    "examples": [
      [
        "遺産（いさん）",
        "inheritance, bequest"
      ],
      [
        "遺族（いぞく）",
        "bereaved family"
      ],
      [
        "遺骨（いこつ）",
        "remains, ashes of deceased"
      ],
      [
        "遺伝（いでん）",
        "hereditary, genetic [n.]"
      ],
      [
        "遺品（いひん）",
        "articles of the deceased"
      ],
      [
        "遺憾な（いかんな）",
        "regrettable, unsatisfactory"
      ],
      [
        "遺失物（いしつぶつ）",
        "lost article"
      ],
      [
        "後遺症（こういしょう）",
        "after-effect (of illness)"
      ],
      [
        "遺言（ゆいごん）",
        "will, testament, last request"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "冗",
    "kname": "jou(chouna)",
    "kstroke": 4,
    "kmeaning": "redundant, superfluous",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "冗談（じょうだん）",
        "joke"
      ],
      [
        "冗長な（じょうちょうな）",
        "tedious, verbose, redundancy"
      ]
    ],
    "radical": "⼍",
    "rad_order": 18,
    "rad_stroke": 2,
    "rad_name_ja": "わかんむり",
    "rad_name": "wakanmuri",
    "rad_meaning": "cover, crown",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "皮",
    "kname": "hi-kawa",
    "kstroke": 5,
    "kmeaning": "skin, hide, rind, leather, bark",
    "kgrade": 3,
    "kunyomi_ja": "かわ",
    "kunyomi": "kawa",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "皮膚（ひふ）",
        "skin [n.]"
      ],
      [
        "皮肉（ひにく）",
        "cynicism, sarcasm, irony, satire"
      ],
      [
        "皮相（ひそう）",
        "superficial"
      ],
      [
        "皮下注射（ひかちゅうしゃ）",
        "hypodermic injection"
      ],
      [
        "樹皮（じゅひ）",
        "bark"
      ],
      [
        "脱皮する（だっぴする）",
        "molt, shed, emerge"
      ],
      [
        "皮（かわ）",
        "skin, hide, leather, fur, pelt, bark"
      ],
      [
        "毛皮（けがわ）",
        "fur, skin, pelt"
      ]
    ],
    "radical": "⽪",
    "rad_order": 135,
    "rad_stroke": 5,
    "rad_name_ja": "けがわ",
    "rad_name": "kegawa",
    "rad_meaning": "skin, hide",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "肉",
    "kname": "niku",
    "kstroke": 6,
    "kmeaning": "flesh, meat",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ニク",
    "onyomi": "niku",
    "examples": [
      [
        "肉屋（にくや）",
        "butcher [n.]"
      ],
      [
        "肉食（にくしょく）",
        "meat-eating, carnivorous"
      ],
      [
        "肉体（にくたい）",
        "body, flesh"
      ],
      [
        "肉親（にくしん）",
        "blood relative"
      ],
      [
        "肉眼（にくがん）",
        "naked eye"
      ],
      [
        "肉筆（にくひつ）",
        "one's own handwriting"
      ],
      [
        "皮肉（ひにく）",
        "cynicism, sarcasm, irony, satire"
      ],
      [
        "牛肉（ぎゅうにく）",
        "beef"
      ],
      [
        "豚肉（ぶたにく）",
        "pork"
      ],
      [
        "鳥肉（とりにく）",
        "chicken meat"
      ],
      [
        "筋肉（きんにく）",
        "muscle, sinew"
      ],
      [
        "挽き肉（ひきにく）",
        "minced, ground meat"
      ]
    ],
    "radical": "⾁",
    "rad_order": 165,
    "rad_stroke": 6,
    "rad_name_ja": "にく",
    "rad_name": "niku",
    "rad_meaning": "flesh, meat",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "怪",
    "kname": "aya(shimu)",
    "kstroke": 8,
    "kmeaning": "mysterious, strange, doubt",
    "kgrade": "n/a",
    "kunyomi_ja": "あや、あやしい、あやしむ",
    "kunyomi": "aya, ayashii, ayashimu",
    "onyomi_ja": "カイ、ケ",
    "onyomi": "kai, ke",
    "examples": [
      [
        "怪獣（かいじゅう）",
        "monster"
      ],
      [
        "怪物（かいぶつ）",
        "monster"
      ],
      [
        "怪談（かいだん）",
        "ghost story"
      ],
      [
        "妖怪（ようかい）",
        "monstrous creature, hobgoblin"
      ],
      [
        "怪事件（かいじけん）",
        "unsolved mystery"
      ],
      [
        "怪奇な（かいきな）",
        "bizarre, strange"
      ],
      [
        "怪我（けが）",
        "injury"
      ],
      [
        "怪しい（あやしい）",
        "suspicious, dubious, doubtful"
      ],
      [
        "怪しむ（あやしむ）",
        "suspect [v.t.]"
      ]
    ],
    "radical": "⺖",
    "rad_order": 79,
    "rad_stroke": 3,
    "rad_name_ja": "りっしんべん",
    "rad_name": "risshinben",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "売",
    "kname": "bai-u(ru)",
    "kstroke": 7,
    "kmeaning": "sell",
    "kgrade": 2,
    "kunyomi_ja": "う、うる",
    "kunyomi": "u, uru",
    "onyomi_ja": "バイ",
    "onyomi": "bai",
    "examples": [
      [
        "売買する（ばいばいする）",
        "trade"
      ],
      [
        "商売する（しょうばいする）",
        "do business"
      ],
      [
        "発売する（はつばいする）",
        "put a product on the market"
      ],
      [
        "売店（ばいてん）",
        "shop, kiosk"
      ],
      [
        "売る（うる）",
        "sell"
      ],
      [
        "売り切れ（うりきれ）",
        "sold-out"
      ],
      [
        "売り場（うりば）",
        "sales floor"
      ]
    ],
    "radical": "",
    "rad_order": 39.5,
    "rad_stroke": 3,
    "rad_name_ja": "さむらいかんむり",
    "rad_name": "samuraikanmuri",
    "rad_meaning": "man, scholar, samurai",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "系",
    "kname": "kei(retsu)",
    "kstroke": 7,
    "kmeaning": "system, lineage",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "系統（けいとう）",
        "system, genealogy, phylogeny"
      ],
      [
        "系列（けいれつ）",
        "order, succession, series"
      ],
      [
        "系図（けいず）",
        "family tree, pedigree, genealogy"
      ],
      [
        "体系（たいけい）",
        "system, organization"
      ],
      [
        "直系（ちょっけい）",
        "direct descent, direct line"
      ],
      [
        "家系（かけい）",
        "family lineage"
      ],
      [
        "日系人（にっけいじん）",
        "person of Japanese descent"
      ]
    ],
    "radical": "⽷",
    "rad_order": 157,
    "rad_stroke": 6,
    "rad_name_ja": "いと",
    "rad_name": "ito",
    "rad_meaning": "thread",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "統",
    "kname": "tou(itsu)",
    "kstroke": 12,
    "kmeaning": "unite, interconnected system, govern, control",
    "kgrade": 5,
    "kunyomi_ja": "す、すべる、すべて",
    "kunyomi": "su, suberu, subete",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "統計（とうけい）",
        "statistics"
      ],
      [
        "統率力（とうそつりょく）",
        "leadership, generalship"
      ],
      [
        "伝統（でんとう）",
        "tradition, convention"
      ],
      [
        "系統（けいとう）",
        "system, genealogy, phylogeny"
      ],
      [
        "血統（けっとう）",
        "lineage, pedigree, family line"
      ],
      [
        "大統領（だいとうりょう）",
        "president, head of state"
      ],
      [
        "正統派（せいとうは）",
        "orthodox school"
      ],
      [
        "統制する（とうせいする）",
        "regulate, control"
      ],
      [
        "統治する（とうちする）",
        "rule, reign, govern"
      ],
      [
        "統一する（とういつする）",
        "unite, consolidate"
      ],
      [
        "統合する（とうごうする）",
        "integrate, unify, synthesize"
      ],
      [
        "統べる（すべる）",
        "control, supervise"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "鳥",
    "kname": "(haku)chou",
    "kstroke": 11,
    "kmeaning": "bird, fowl, poultry",
    "kgrade": 2,
    "kunyomi_ja": "とり",
    "kunyomi": "tori",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "鳥類（ちょうるい）",
        "birds, avian"
      ],
      [
        "野鳥（やちょう）",
        "wild bird"
      ],
      [
        "白鳥（はくちょう）",
        "swan"
      ],
      [
        "益鳥（えきちょう）",
        "beneficial bird"
      ],
      [
        "一石二鳥（いっせきにちょう）",
        "killing two birds with one stone"
      ],
      [
        "七面鳥（しちめんちょう）",
        "turkey"
      ],
      [
        "鳥（とり）",
        "bird, fowl, poultry"
      ],
      [
        "鳥居（とりい）",
        "torii, gateway to a Shinto shrine"
      ],
      [
        "鳥肉（とりにく）",
        "chicken meat"
      ],
      [
        "渡り鳥（わたりどり）",
        "migratory bird, bird of passage"
      ]
    ],
    "radical": "⿃",
    "rad_order": 230,
    "rad_stroke": 11,
    "rad_name_ja": "とり",
    "rad_name": "tori",
    "rad_meaning": "bird",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "県",
    "kname": "ken(chiji)",
    "kstroke": 9,
    "kmeaning": "prefecture",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "県（けん）",
        "prefecture"
      ],
      [
        "県庁（けんちょう）",
        "prefectural office"
      ],
      [
        "県民（けんみん）",
        "citizens of a prefecture"
      ],
      [
        "県立（けんりつ）",
        "prefecturally run"
      ],
      [
        "県道（けんどう）",
        "prefectural road"
      ],
      [
        "県知事（けんちじ）",
        "prefectural governor"
      ],
      [
        "広島県（ひろしまけん）",
        "Hiroshima prefecture"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "尺",
    "kname": "(is)shaku",
    "kstroke": 4,
    "kmeaning": "shaku (unit of length, about 30 cm), measure",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シャク",
    "onyomi": "shaku",
    "examples": [
      [
        "尺八（しゃくはち）",
        "bamboo flute, fellatio"
      ],
      [
        "尺度（しゃくど）",
        "linear measure, scale"
      ],
      [
        "一尺（いっしゃく）",
        "one shaku, approx. 30 cm"
      ],
      [
        "縮尺（しゅくしゃく）",
        "reduced scale"
      ],
      [
        "巻き尺（まきじゃく）",
        "measure"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "収",
    "kname": "shuu(nousuru)",
    "kstroke": 4,
    "kmeaning": "take in, obtain, collect",
    "kgrade": 6,
    "kunyomi_ja": "おさ、おさめる、おさまる",
    "kunyomi": "osa, osameru, osamaru",
    "onyomi_ja": "シュウ",
    "onyomi": "shuu",
    "examples": [
      [
        "収入（しゅうにゅう）",
        "income, receipts, revenue"
      ],
      [
        "収支（しゅうし）",
        "income and expenditure"
      ],
      [
        "月収（げっしゅう）",
        "monthly income"
      ],
      [
        "年収（ねんしゅう）",
        "annual income"
      ],
      [
        "領収書（りょうしゅうしょ）",
        "receipt"
      ],
      [
        "収穫する（しゅうかくする）",
        "harvest, gather in, reap"
      ],
      [
        "収集する（しゅうしゅうする）",
        "collect, gather, accumulate"
      ],
      [
        "収拾する（しゅうしゅうする）",
        "get under control, handle"
      ],
      [
        "吸収する（きゅうしゅうする）",
        "absorb, assimilate, suck in"
      ],
      [
        "買収する（ばいしゅうする）",
        "buy, purchase, bribe"
      ],
      [
        "収める（おさめる）",
        "pay, deliver, store, keep"
      ],
      [
        "収まる（おさまる）",
        "fall into place, settle down"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "穫",
    "kname": "(shuu)kaku",
    "kstroke": 18,
    "kmeaning": "harvest",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "収穫高（しゅうかくだか）",
        "crop yield"
      ],
      [
        "収穫期（しゅうかくき）",
        "harvest time"
      ],
      [
        "収穫する（しゅうかくする）",
        "harvest, gather in, reap"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "肥",
    "kname": "ko(yasu)",
    "kstroke": 8,
    "kmeaning": "fatten, fertilize",
    "kgrade": 5,
    "kunyomi_ja": "こ、こえ、こえる、こやす、こやし",
    "kunyomi": "ko, koe, koeru, koyasu, koyashi",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "肥満（ひまん）",
        "corpulence, obesity"
      ],
      [
        "肥料（ひりょう）",
        "manure, fertilizer"
      ],
      [
        "堆肥（たいひ）",
        "compost"
      ],
      [
        "肥大する（ひだいする）",
        "swell, grow fat"
      ],
      [
        "肥やす（こやす）",
        "fertilize, fatten [v.t.]"
      ],
      [
        "肥やし（こやし）",
        "manure, dung, fertilizer"
      ],
      [
        "肥える（こえる）",
        "grow fat, grow fertile [v.i.]"
      ],
      [
        "肥（こえ）",
        "manure, dung, fertilizer"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "草",
    "kname": "kusa(ki)",
    "kstroke": 9,
    "kmeaning": "grass",
    "kgrade": 1,
    "kunyomi_ja": "くさ",
    "kunyomi": "kusa",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "草原（そうげん）",
        "grass-covered plain, grasslands"
      ],
      [
        "草食（そうしょく）",
        "herbivorous"
      ],
      [
        "草稿（そうこう）",
        "notes, draft, manuscript"
      ],
      [
        "草案（そうあん）",
        "draft"
      ],
      [
        "雑草（ざっそう）",
        "weed"
      ],
      [
        "野草（やそう）",
        "wild grasses, wildflowers"
      ],
      [
        "海草（かいそう）",
        "seaweed"
      ],
      [
        "除草剤（じょそうざい）",
        "herbicide"
      ],
      [
        "草（くさ）",
        "grass"
      ],
      [
        "草分け（くさわけ）",
        "pioneer, trailblazer"
      ],
      [
        "*草履（ぞうり）",
        "zori, straw sandals"
      ],
      [
        "*煙草（たばこ）",
        "tobacco"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "泳",
    "kname": "oyo(gu)",
    "kstroke": 8,
    "kmeaning": "swim",
    "kgrade": 3,
    "kunyomi_ja": "およ、およぐ、およぎ",
    "kunyomi": "oyo, oyogu, oyogi",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "水泳（すいえい）",
        "swimming"
      ],
      [
        "競泳（きょうえい）",
        "swimming race"
      ],
      [
        "遠泳（えんえい）",
        "long-distance swimming"
      ],
      [
        "泳ぐ（およぐ）",
        "swim"
      ],
      [
        "平泳ぎ（ひらおよぎ）",
        "breaststroke"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "犬",
    "kname": "inu",
    "kstroke": 4,
    "kmeaning": "dog",
    "kgrade": 1,
    "kunyomi_ja": "いぬ",
    "kunyomi": "inu",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "番犬（ばんけん）",
        "watchdog"
      ],
      [
        "盲導犬（もうどうけん）",
        "seeing eye dog"
      ],
      [
        "犬（いぬ）",
        "dog"
      ],
      [
        "飼い犬（かいいぬ）",
        "pet dog"
      ],
      [
        "子犬（こいぬ）",
        "puppy"
      ]
    ],
    "radical": "⽝",
    "rad_order": 118,
    "rad_stroke": 4,
    "rad_name_ja": "いぬ",
    "rad_name": "inu",
    "rad_meaning": "dog",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "亡",
    "kname": "bou(mei)",
    "kstroke": 3,
    "kmeaning": "decease, dead",
    "kgrade": 6,
    "kunyomi_ja": "な、ない、なき、なくす、なくなる",
    "kunyomi": "na, nai, naki, nakusu, nakunaru",
    "onyomi_ja": "ボウ、モウ",
    "onyomi": "bou, mou",
    "examples": [
      [
        "亡霊（ぼうれい）",
        "ghost, departed spirits"
      ],
      [
        "存亡（そんぼう）",
        "life or death"
      ],
      [
        "未亡人（みぼうじん）",
        "widow"
      ],
      [
        "亡命する（ぼうめいする）",
        "flee one's country, defect"
      ],
      [
        "死亡する（しぼうする）",
        "die"
      ],
      [
        "逃亡する（とうぼうする）",
        "escape [v.i.]"
      ],
      [
        "滅亡する（めつぼうする）",
        "fall, be ruined, collapse"
      ],
      [
        "亡者（もうじゃ）",
        "the dead"
      ],
      [
        "亡くす（なくす）",
        "lose (a loved one)"
      ],
      [
        "亡くなる（なくなる）",
        "pass away"
      ],
      [
        "亡き母（なきはは）",
        "one's deceased mother"
      ]
    ],
    "radical": "⼇",
    "rad_order": 9,
    "rad_stroke": 2,
    "rad_name_ja": "なべぶた",
    "rad_name": "nabebuta",
    "rad_meaning": "lid, top",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "豊",
    "kname": "hou-yuta(kana)",
    "kstroke": 13,
    "kmeaning": "plentiful, abundant, rich",
    "kgrade": 5,
    "kunyomi_ja": "ゆた、ゆたか",
    "kunyomi": "yuta, yutaka",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "豊作（ほうさく）",
        "abundant harvest, bumper crop"
      ],
      [
        "豊漁（ほうりょう）",
        "good catch, good haul"
      ],
      [
        "豊穣（ほうじょう）",
        "good harvest, abundant crop"
      ],
      [
        "豊富な（ほうふな）",
        "abundant, rich"
      ],
      [
        "豊潤な（ほうじゅんな）",
        "rich, luxurious, abundant"
      ],
      [
        "豊かな（ゆたかな）",
        "abundant, rich"
      ]
    ],
    "radical": "⾖",
    "rad_order": 185,
    "rad_stroke": 7,
    "rad_name_ja": "まめ",
    "rad_name": "mame",
    "rad_meaning": "bean",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "寮",
    "kname": "(gakusei)ryou",
    "kstroke": 15,
    "kmeaning": "dormitory",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "寮（りょう）",
        "hostel, dormitory"
      ],
      [
        "寮長（りょうちょう）",
        "dormitory head"
      ],
      [
        "寮生（りょうせい）",
        "boarder, boarding student"
      ],
      [
        "寮母（りょうぼ）",
        "dorm mother"
      ],
      [
        "独身寮（どくしんりょう）",
        "dormitory for unmarried people"
      ],
      [
        "社員寮（しゃいんりょう）",
        "company dormitory"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "飽",
    "kname": "hou-a(kiru)",
    "kstroke": 13,
    "kmeaning": "satiated, get tired of",
    "kgrade": "n/a",
    "kunyomi_ja": "あ、あきる、あかす",
    "kunyomi": "a, akiru, akasu",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "飽和する（ほうわする）",
        "saturate"
      ],
      [
        "飽食する（ほうしょくする）",
        "glut oneself, eat well"
      ],
      [
        "飽きる（あきる）",
        "get tired of [v.i.]"
      ],
      [
        "飽きっぽい（あきっぽい）",
        "fickle, capricious"
      ],
      [
        "飽き飽きする（あきあきする）",
        "be bored, be sick of"
      ],
      [
        "飽かす（あかす）",
        "satiate, glut, indulge [v.t.]"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "油",
    "kname": "yu-abura",
    "kstroke": 8,
    "kmeaning": "oil",
    "kgrade": 3,
    "kunyomi_ja": "あぶら",
    "kunyomi": "abura",
    "onyomi_ja": "ユ",
    "onyomi": "yu",
    "examples": [
      [
        "油脂（ゆし）",
        "fat, fats and oils"
      ],
      [
        "石油（せきゆ）",
        "oil, petroleum, kerosene"
      ],
      [
        "灯油（とうゆ）",
        "lamp oil, kerosene"
      ],
      [
        "醤油（しょうゆ）",
        "soy sauce"
      ],
      [
        "潤滑油（じゅんかつゆ）",
        "lubricating oil"
      ],
      [
        "油断する（ゆだんする）",
        "neglect, relax one's guard"
      ],
      [
        "油（あぶら）",
        "oil"
      ],
      [
        "油絵（あぶらえ）",
        "oil painting"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "菜",
    "kname": "(ya)sai",
    "kstroke": 11,
    "kmeaning": "vegetable, greens",
    "kgrade": 4,
    "kunyomi_ja": "な",
    "kunyomi": "na",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "菜園（さいえん）",
        "vegetable garden"
      ],
      [
        "菜食主義（さいしょくしゅぎ）",
        "vegetarianism"
      ],
      [
        "野菜（やさい）",
        "vegetable"
      ],
      [
        "白菜（はくさい）",
        "Chinese cabbage"
      ],
      [
        "山菜（さんさい）",
        "edible wild plants"
      ],
      [
        "前菜（ぜんさい）",
        "relishes, hors d'oeuvres"
      ],
      [
        "惣菜（そうざい）",
        "everyday household dish"
      ],
      [
        "菜の花（なのはな）",
        "rape blossoms"
      ],
      [
        "菜っ葉（なっぱ）",
        "rape leaves, greens"
      ],
      [
        "青菜（あおな）",
        "greens"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "玉",
    "kname": "gyoku-tama",
    "kstroke": 5,
    "kmeaning": "gem, jewel, ball",
    "kgrade": 1,
    "kunyomi_ja": "たま",
    "kunyomi": "tama",
    "onyomi_ja": "ギョク",
    "onyomi": "gyoku",
    "examples": [
      [
        "玉座（ぎょくざ）",
        "throne"
      ],
      [
        "玉石混淆（ぎょくせきこんこう）",
        "mixture of wheat and chaff"
      ],
      [
        "玉（たま）",
        "ball, jewel"
      ],
      [
        "玉子（たまご）",
        "egg"
      ],
      [
        "玉葱（たまねぎ）",
        "onion"
      ],
      [
        "水玉模様（みずたまもよう）",
        "polka dots"
      ],
      [
        "目玉（めだま）",
        "eyeball"
      ],
      [
        "鉄砲玉（てっぽうだま）",
        "bullet"
      ],
      [
        "十円玉（じゅうえんだま）",
        "10 yen coin"
      ]
    ],
    "radical": "⽟",
    "rad_order": 123,
    "rad_stroke": 5,
    "rad_name_ja": "たま",
    "rad_name": "tama",
    "rad_meaning": "jewelry",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "減",
    "kname": "he(rasu)",
    "kstroke": 12,
    "kmeaning": "decrease",
    "kgrade": 5,
    "kunyomi_ja": "へ、へる、へらす",
    "kunyomi": "he, heru, herasu",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "加減（かげん）",
        "moderation"
      ],
      [
        "減少する（げんしょうする）",
        "decrease, be reduced, lessen"
      ],
      [
        "減点する（げんてんする）",
        "take off points, give bad mark"
      ],
      [
        "減税する（げんぜいする）",
        "reduce taxes"
      ],
      [
        "減速する（げんそくする）",
        "decelerate"
      ],
      [
        "削減する（さくげんする）",
        "cut down on, curtail"
      ],
      [
        "増減する（ぞうげんする）",
        "fluctuate"
      ],
      [
        "半減する（はんげんする）",
        "reduce by half"
      ],
      [
        "減る（へる）",
        "decrease, diminish [v.i.]"
      ],
      [
        "減らす（へらす）",
        "reduce, curtail [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "皿",
    "kname": "sara",
    "kstroke": 5,
    "kmeaning": "plate, dish, saucer",
    "kgrade": 3,
    "kunyomi_ja": "さら",
    "kunyomi": "sara",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "皿（さら）",
        "plate"
      ],
      [
        "皿洗い（さらあらい）",
        "dish-washing"
      ],
      [
        "一皿（ひとさら）",
        "one dish"
      ],
      [
        "大皿（おおざら）",
        "large plate, platter"
      ],
      [
        "小皿（こざら）",
        "small plate"
      ],
      [
        "受け皿（うけざら）",
        "saucer"
      ],
      [
        "製氷皿（せいひょうざら）",
        "ice-making pan"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "湯",
    "kname": "(o)yu",
    "kstroke": 12,
    "kmeaning": "hot water",
    "kgrade": 3,
    "kunyomi_ja": "ゆ",
    "kunyomi": "yu",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "湯治（とうじ）",
        "hot spring cure"
      ],
      [
        "熱湯（ねっとう）",
        "boiling water"
      ],
      [
        "給湯（きゅうとう）",
        "hot-water supply"
      ],
      [
        "銭湯（せんとう）",
        "bath-house, public bath"
      ],
      [
        "湯（ゆ）",
        "hot water"
      ],
      [
        "湯気（ゆげ）",
        "steam, vapor [n.]"
      ],
      [
        "湯飲み（ゆのみ）",
        "teacup (for green tea)"
      ],
      [
        "湯船（ゆぶね）",
        "bathtub"
      ],
      [
        "茶の湯（ちゃのゆ）",
        "tea ceremony"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "子",
    "kname": "shi-ko",
    "kstroke": 3,
    "kmeaning": "child, noun suffix",
    "kgrade": 1,
    "kunyomi_ja": "こ",
    "kunyomi": "ko",
    "onyomi_ja": "シ、ス",
    "onyomi": "shi, su",
    "examples": [
      [
        "帽子（ぼうし）",
        "hat, cap"
      ],
      [
        "電子レンジ（でんしレンジ）",
        "microwave oven"
      ],
      [
        "調子（ちょうし）",
        "pitch, mood, condition"
      ],
      [
        "菓子屋（かしや）",
        "candy shop"
      ],
      [
        "遺伝子（いでんし）",
        "gene"
      ],
      [
        "養子（ようし）",
        "adopted child"
      ],
      [
        "利子（りし）",
        "interest (bank)"
      ],
      [
        "椅子（いす）",
        "chair"
      ],
      [
        "様子（ようす）",
        "appearance"
      ],
      [
        "子供（こども）",
        "child"
      ],
      [
        "息子（むすこ）",
        "son"
      ],
      [
        "迷子（まいご）",
        "lost child"
      ]
    ],
    "radical": "⼦",
    "rad_order": 46,
    "rad_stroke": 3,
    "rad_name_ja": "こ",
    "rad_name": "ko",
    "rad_meaning": "child, son",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "除",
    "kname": "jo-nozo(ku)",
    "kstroke": 10,
    "kmeaning": "rid of, exclude",
    "kgrade": 6,
    "kunyomi_ja": "のぞ、のぞく",
    "kunyomi": "nozo, nozoku",
    "onyomi_ja": "ジョ、ジ",
    "onyomi": "jo, ji",
    "examples": [
      [
        "除外する（じょがいする）",
        "exclude"
      ],
      [
        "除去する（じょきょする）",
        "remove, get rid of"
      ],
      [
        "除雪する（じょせつする）",
        "remove snow"
      ],
      [
        "除名する（じょめいする）",
        "dismiss, expel, excommunicate"
      ],
      [
        "免除する（めんじょする）",
        "exempt, exonerate"
      ],
      [
        "排除する（はいじょする）",
        "exclude, remove, reject"
      ],
      [
        "解除する（かいじょする）",
        "cancel, rescind, release"
      ],
      [
        "削除する（さくじょする）",
        "eliminate, cancel, delete"
      ],
      [
        "控除する（こうじょする）",
        "deduct, subtract"
      ],
      [
        "掃除する（そうじする）",
        "clean, sweep"
      ],
      [
        "除く（のぞく）",
        "remove, exclude, exempt"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "控",
    "kname": "hika(eru)",
    "kstroke": 11,
    "kmeaning": "hold back, refrain from, wait",
    "kgrade": "n/a",
    "kunyomi_ja": "ひか、ひかえる、ひかえ",
    "kunyomi": "hika, hikaeru, hikae",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "控訴する（こうそする）",
        "appeal [v.t.]"
      ],
      [
        "控除する（こうじょする）",
        "deduct, subtract"
      ],
      [
        "控える（ひかえる）",
        "restrain oneself, hold back, wait"
      ],
      [
        "控え室（ひかえしつ）",
        "waiting room"
      ],
      [
        "控え目な（ひかえめな）",
        "moderate, reserved, humble"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "蔵",
    "kname": "zou-kura",
    "kstroke": 15,
    "kmeaning": "store, warehouse",
    "kgrade": 6,
    "kunyomi_ja": "くら",
    "kunyomi": "kura",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "蔵書（ぞうしょ）",
        "book collection"
      ],
      [
        "蔵相（ぞうしょう）",
        "Minister of Finance"
      ],
      [
        "所蔵（しょぞう）",
        "(in one's) possession"
      ],
      [
        "冷蔵庫（れいぞうこ）",
        "refrigerator"
      ],
      [
        "秘蔵する（ひぞうする）",
        "treasure [v.t.]"
      ],
      [
        "貯蔵する（ちょぞうする）",
        "store, preserve"
      ],
      [
        "蔵（くら）",
        "warehouse"
      ],
      [
        "大蔵省（おおくらしょう）",
        "Ministry of Finance"
      ],
      [
        "米蔵（こめぐら）",
        "rice granary"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "庫",
    "kname": "(hou)ko",
    "kstroke": 10,
    "kmeaning": "storage chamber, storehouse",
    "kgrade": 3,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コ、ク",
    "onyomi": "ko, ku",
    "examples": [
      [
        "倉庫（そうこ）",
        "storehouse, warehouse"
      ],
      [
        "金庫（きんこ）",
        "safe [n.]"
      ],
      [
        "車庫（しゃこ）",
        "garage"
      ],
      [
        "宝庫（ほうこ）",
        "treasury, treasure house"
      ],
      [
        "在庫（ざいこ）",
        "stockpile, stock"
      ],
      [
        "文庫本（ぶんこぼん）",
        "paperback"
      ],
      [
        "格納庫（かくのうこ）",
        "hangar"
      ],
      [
        "庫裏（くり）",
        "temple kitchen"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "器",
    "kname": "utsuwa",
    "kstroke": 15,
    "kmeaning": "vessel, instrument, container, capacity",
    "kgrade": 4,
    "kunyomi_ja": "うつわ",
    "kunyomi": "utsuwa",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "器械（きかい）",
        "instrument"
      ],
      [
        "容器（ようき）",
        "container, vessel"
      ],
      [
        "陶器（とうき）",
        "pottery, ceramics"
      ],
      [
        "便器（べんき）",
        "bedpan, chamber pot, urinal"
      ],
      [
        "食器（しょっき）",
        "tableware"
      ],
      [
        "楽器（がっき）",
        "musical instrument"
      ],
      [
        "兵器（へいき）",
        "arms, weapons, ordinance"
      ],
      [
        "臓器（ぞうき）",
        "viscera, internal organs"
      ],
      [
        "消化器（しょうかき）",
        "digestive organs"
      ],
      [
        "器用な（きような）",
        "skillful, handy"
      ],
      [
        "不器用な（ぶきような）",
        "clumsy, unskillful"
      ],
      [
        "器（うつわ）",
        "bowl, vessel, container"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "凍",
    "kname": "kogo(eru)",
    "kstroke": 10,
    "kmeaning": "freeze",
    "kgrade": "n/a",
    "kunyomi_ja": "こ、こおる、こご、こごえる",
    "kunyomi": "ko, kooru, kogo, kogoeru",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "凍傷（とうしょう）",
        "frostbite"
      ],
      [
        "冷凍庫（れいとうこ）",
        "freezer"
      ],
      [
        "凍結する（とうけつする）",
        "freeze"
      ],
      [
        "凍死する（とうしする）",
        "freeze to death"
      ],
      [
        "解凍する（かいとうする）",
        "thaw"
      ],
      [
        "凍る（こおる）",
        "freeze [v.i.]"
      ],
      [
        "凍える（こごえる）",
        "be numb with cold [v.i.]"
      ]
    ],
    "radical": "⼎",
    "rad_order": 19,
    "rad_stroke": 2,
    "rad_name_ja": "にすい",
    "rad_name": "nisui",
    "rad_meaning": "ice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "聖",
    "kname": "sei(kadai)",
    "kstroke": 13,
    "kmeaning": "holy, saint",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "聖書（せいしょ）",
        "Bible"
      ],
      [
        "聖歌（せいか）",
        "hymn"
      ],
      [
        "聖人（せいじん）",
        "saint [n.]"
      ],
      [
        "聖母（せいぼ）",
        "Virgin Mary"
      ],
      [
        "聖火（せいか）",
        "sacred fire, Olympic flame"
      ],
      [
        "聖域（せいいき）",
        "sacred precincts"
      ],
      [
        "神聖な（しんせいな）",
        "holy, sacred, consecrated"
      ]
    ],
    "radical": "⽿",
    "rad_order": 163,
    "rad_stroke": 6,
    "rad_name_ja": "みみ",
    "rad_name": "mimi",
    "rad_meaning": "ear",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "豚",
    "kname": "buta",
    "kstroke": 11,
    "kmeaning": "pig",
    "kgrade": "n/a",
    "kunyomi_ja": "ぶた",
    "kunyomi": "buta",
    "onyomi_ja": "トン",
    "onyomi": "ton",
    "examples": [
      [
        "豚カツ（とんカツ）",
        "pork cutlet"
      ],
      [
        "豚舎（とんしゃ）",
        "pigpen, pigsty"
      ],
      [
        "養豚（ようとん）",
        "pig-keeping, pig farming"
      ],
      [
        "豚（ぶた）",
        "pig"
      ],
      [
        "豚肉（ぶたにく）",
        "pork"
      ],
      [
        "子豚（こぶた）",
        "piglet"
      ]
    ],
    "radical": "⾗",
    "rad_order": 186,
    "rad_stroke": 7,
    "rad_name_ja": "いのこ",
    "rad_name": "inoko",
    "rad_meaning": "pig",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "絶",
    "kname": "ta(yasu)",
    "kstroke": 12,
    "kmeaning": "break off, come to an end",
    "kgrade": 5,
    "kunyomi_ja": "た、たえる、たやす、たつ",
    "kunyomi": "ta, taeru, tayasu, tatsu",
    "onyomi_ja": "ゼツ",
    "onyomi": "zetsu",
    "examples": [
      [
        "絶版（ぜっぱん）",
        "out of print"
      ],
      [
        "絶対（ぜったい）",
        "absolute, unconditional"
      ],
      [
        "絶好（ぜっこう）",
        "best, perfect"
      ],
      [
        "絶妙な（ぜつみょうな）",
        "miraculous"
      ],
      [
        "絶交する（ぜっこうする）",
        "break off friendship"
      ],
      [
        "絶望する（ぜつぼうする）",
        "despair, give up hope]"
      ],
      [
        "絶滅する（ぜつめつする）",
        "exterminate, annihilate"
      ],
      [
        "中絶する（ちゅうぜつする）",
        "interrupt, abort"
      ],
      [
        "気絶する（きぜつする）",
        "faint [v.i.]"
      ],
      [
        "絶やす（たやす）",
        "exterminate, eradicate [v.t.]"
      ],
      [
        "絶える（たえる）",
        "go extinct, cease, expire [v.i.]"
      ],
      [
        "絶つ（たつ）",
        "sever, cut [v.t.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "牧",
    "kname": "boku(jou)",
    "kstroke": 8,
    "kmeaning": "pasture",
    "kgrade": 4,
    "kunyomi_ja": "まき",
    "kunyomi": "maki",
    "onyomi_ja": "ボク",
    "onyomi": "boku",
    "examples": [
      [
        "牧場（ぼくじょう/まきば）",
        "farm pasture land, meadow"
      ],
      [
        "牧草（ぼくそう）",
        "pasture, grass"
      ],
      [
        "牧畜（ぼくちく）",
        "livestock farming"
      ],
      [
        "遊牧民（ゆうぼくみん）",
        "nomads"
      ],
      [
        "牧歌的な（ぼっかてきな）",
        "pastoral, idyllic"
      ],
      [
        "放牧する（ほうぼくする）",
        "put out to pasture"
      ],
      [
        "牧（まき）",
        "pasture, grazing land"
      ]
    ],
    "radical": "",
    "rad_order": 117,
    "rad_stroke": 4,
    "rad_name_ja": "うしへん",
    "rad_name": "ushihen",
    "rad_meaning": "cow",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "私",
    "kname": "watashi",
    "kstroke": 7,
    "kmeaning": "I, private",
    "kgrade": 6,
    "kunyomi_ja": "わたし、わたくし",
    "kunyomi": "watashi, watakushi",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "私鉄（してつ）",
        "privately-owned railway"
      ],
      [
        "私（わたし/わたくし）",
        "I"
      ],
      [
        "私立（しりつ/わたくしりつ）",
        "privately-owned (institution)"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "万",
    "kname": "(nan)man",
    "kstroke": 3,
    "kmeaning": "ten thousand",
    "kgrade": 2,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "マン、バン",
    "onyomi": "man, ban",
    "examples": [
      [
        "一万円（いちまんえん）",
        "ten thousand yen"
      ],
      [
        "万年筆（まんねんひつ）",
        "fountain pen"
      ],
      [
        "万引きする（まんびきする）",
        "shoplift"
      ],
      [
        "万歳（ばんざい）",
        "banzai! (cheer)"
      ],
      [
        "万能（ばんのう）",
        "all-purpose"
      ],
      [
        "万事（ばんじ）",
        "everything"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "民",
    "kname": "tami",
    "kstroke": 5,
    "kmeaning": "people",
    "kgrade": 4,
    "kunyomi_ja": "たみ",
    "kunyomi": "tami",
    "onyomi_ja": "ミン",
    "onyomi": "min",
    "examples": [
      [
        "民衆（みんしゅう）",
        "people, populace, masses"
      ],
      [
        "民族（みんぞく）",
        "race, nation, people"
      ],
      [
        "民謡（みんよう）",
        "(traditional) folk song"
      ],
      [
        "民営（みんえい）",
        "private management"
      ],
      [
        "国民（こくみん）",
        "citizen, people, nation"
    ],