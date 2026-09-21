const title = document.getElementById("newsTitle");
const body = document.getElementById("newsBody");
const meta = document.getElementById("newsMeta");
const btn = document.getElementById("generateBtn");
const dataByCategory = {
  "社会": {
    subjects: [
      "政府関係者",
      "会社員の男性",
      "40代女性",
      "高校生グループ",
      "○○市に住む大学生"
    ],
    actions: [
      "緊急会見を開く",
      "大規模なストライキを行う",
      "突然声明を発表する",
      "チョコレートの買い占めを行う",
      "俊敏な動きを見せる"
    ],
    bodies: [
      "専門家は『社会的影響は大きい』と指摘している。",
      "市民の間では驚きの声が広がっている。",
      "政府は対応を協議しているという。",
      "SNSではこの話題が急速に拡散している。",
      "関係者は慎重な対応を求めている。"
    ]
  },

  "科学": {
    subjects: [
      "AI",
      "最新型ロボット○○",
      "とあるAI研究チーム",
      "宇宙人",
      "未確認飛行物体"
    ],
    actions: [
      "新たな現象を引き起こす",
      "予期せぬ進化を遂げる",
      "異常な反応を示す",
      "画期的な発見を発表する",
      "科学界を揺るがす行動を取る"
    ],
    bodies: [
      "研究者は『これは歴史的発見だ』と語っている。",
      "科学界では議論が活発化している。",
      "今後の研究で詳細が明らかになる見込みだ。",
      "専門家は慎重な検証が必要だと強調している。",
      "世界中の研究機関が注目している。"
    ]
  },

  "エンタメ": {
    subjects: [
      "人気アイドル○○",
      "有名YouTuber○○",
      "謎のゆるキャラ",
      "実力派俳優の○○",
      "話題の子役○○"
    ],
    actions: [
      "突然の活動休止を発表",
      "ファンを驚かせるような行動を取る",
      "新企画を発表する",
      "予想外のコラボを行う",
      "迷惑行為か"
    ],
    bodies: [
      "ファンからは悲しみの声が上がっている。",
      "SNSでは関連ワードがトレンド入りしている。",
      "関係者は『想定外の展開』とコメントしている。",
      "エンタメ業界では注目が集まっている。",
      "今後の活動に期待が高まっている。"
    ]
  },

  "国際": {
    subjects: [
      "海外の要人",
      "国際機関○○",
      "外国人観光客",
      "謎の国家",
      "世界的企業○○"
    ],
    actions: [
      "緊急声明を発表する",
      "国際社会を揺るがす行動を取る",
      "予期せぬ動きを見せる",
      "世界的な議論を巻き起こす",
      "各国の対応を促す"
    ],
    bodies: [
      "国際社会では対応が求められている。",
      "各国の政府が状況を注視している。",
      "専門家は『世界的影響が出る可能性がある』と警告している。",
      "外交関係者の間で議論が続いている。",
      "今後の展開に注目が集まっている。"
    ]
  },

  "テクノロジー": {
    subjects: [
      "AIスタートアップ",
      "新型スマホ",
      "ハッカー集団○○",
      "量子コンピューター○○",
      "自律型ドローン○○"
    ],
    actions: [
      "新機能を公開する",
      "予期せぬ挙動を見せる",
      "世界的な注目を集める",
      "技術的なブレイクスルーを達成する",
      "ネット上で議論を巻き起こす"
    ],
    bodies: [
      "専門家は『技術革新の大きな一歩』と評価している。",
      "ユーザーの間で期待が高まっている。",
      "業界では大きな話題となっている。",
      "今後の展開に注目が集まっている。",
      "企業はさらなる技術開発を進めているという。"
    ]
  }
};

const prefectures = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県",
  "岐阜県","静岡県","愛知県","三重県",
  "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
  "鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県",
  "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県",
  "沖縄県"
];

const tabs = document.querySelectorAll(".tab");
let selectedCategory = null;

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    // すでに選択されているカテゴリをもう一度クリックしたら解除
    if (selectedCategory === category) {
      selectedCategory = null;

      // 見た目の選択状態も解除
      tabs.forEach(t => t.classList.remove("active"));
      return;
    }

    // 新しいカテゴリを選択
    selectedCategory = category;

    // 見た目の選択状態を更新
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

btn.addEventListener("click", () => {

  // カテゴリを決定（選択されていなければランダムにする）
  const categories = Object.keys(dataByCategory);
  const category = selectedCategory || categories[Math.floor(Math.random() * categories.length)];

  // カテゴリ別のデータを取得
  const categoryData = dataByCategory[category];

  // 主語・動作・本文をカテゴリ別に選ぶ
  const randomSubject = categoryData.subjects[Math.floor(Math.random() * categoryData.subjects.length)];
  const randomAction = categoryData.actions[Math.floor(Math.random() * categoryData.actions.length)];
  const randomBody = categoryData.bodies[Math.floor(Math.random() * categoryData.bodies.length)];

  // 都道府県
  const randomPrefecture = prefectures[Math.floor(Math.random() * prefectures.length)];

  // タイトル生成
  const randomTitle = `${randomPrefecture}で ${randomSubject}が${randomAction}`;

  // 日付
  const today = new Date().toLocaleDateString("ja-JP");

  // 反映
  title.textContent = randomTitle;
  body.textContent = randomBody;
  meta.textContent = `カテゴリ：${category} ｜ ${today}`;
});
