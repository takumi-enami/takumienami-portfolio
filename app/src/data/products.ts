export type Product = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  techStack: string[];
  coverImage: string;
  screenshots: string[];
  challenges: string[];
  solutions: string[];
};

export const products: Product[] = [
  {
    slug: 'building-material-log',
    title: '建材記録アプリ',
    category: 'Field Operations',
    shortDescription: '現場での建材記録をスマートフォンから入力し、写真と履歴を一元管理する業務支援アプリ。',
    overview:
      '紙やチャットで分散していた建材の搬入記録を一本化し、写真・数量・設置場所をひとつの画面で整理できるようにしたアプリです。入力負荷を抑えながら、あとで確認しやすいデータ構成を重視しました。',
    techStack: ['FlutterFlow', 'Supabase', 'SQLite', 'Cloudflare Pages'],
    coverImage: '/images/building-material-cover.svg',
    screenshots: [
      '/images/building-material-screen-1.svg',
      '/images/building-material-screen-2.svg',
    ],
    challenges: [
      '現場では入力に時間をかけられず、記録項目が増えるほど定着しにくかった。',
      '写真、数量、設置場所などの情報が別々に管理され、後から追跡しづらかった。',
    ],
    solutions: [
      '選択式 UI と下書き保存を組み合わせ、短時間でも記録できる画面構成に整理した。',
      '記録単位を統一し、写真とメモを同じデータモデルにひも付けることで検索性を高めた。',
    ],
  },
  {
    slug: 'label-print-support',
    title: '分析業務用ラベル印刷支援アプリ',
    category: 'Lab Workflow',
    shortDescription: '分析サンプルごとの情報を整形し、誤記を減らしながらラベル発行を行う印刷支援ツール。',
    overview:
      '分析業務で扱うラベル印刷の工程を整理し、入力値の揺れや転記ミスを抑えるための支援アプリです。対象ごとのルールをテンプレート化し、現場の運用変更にも対応しやすい構成にしました。',
    techStack: ['FileMaker', 'SQL', 'JavaScript'],
    coverImage: '/images/label-print-cover.svg',
    screenshots: ['/images/label-print-screen-1.svg', '/images/label-print-screen-2.svg'],
    challenges: [
      'ラベルごとに必要な項目が異なり、印刷前の確認コストが高かった。',
      'Excel や手入力に依存しており、入力ルールの標準化が難しかった。',
    ],
    solutions: [
      'ラベル種別ごとに入力テンプレートを分け、必要項目だけを表示する仕組みにした。',
      '印刷前チェックを画面内に集約し、差し戻しの発生を減らした。',
    ],
  },
  {
    slug: 'sample-record-manager',
    title: '業務記録・検体管理系アプリ',
    category: 'Record Management',
    shortDescription: '受付から保管、確認までの流れを見える化し、検体と業務記録を追跡しやすくした管理アプリ。',
    overview:
      '検体や業務記録の状態が複数の台帳に分かれていたため、進行状況が分かりにくいという課題に対して作成したアプリです。担当者ごとに必要な画面を整理し、状況確認と履歴参照をしやすくしました。',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare Pages'],
    coverImage: '/images/sample-record-cover.svg',
    screenshots: ['/images/sample-record-screen-1.svg', '/images/sample-record-screen-2.svg'],
    challenges: [
      '受付、保管、確認などの状態が分断され、担当間の引き継ぎに漏れが出やすかった。',
      '一覧性を重視すると入力しづらくなり、入力しやすさを優先すると情報が散らばる状態だった。',
    ],
    solutions: [
      '状態別の一覧と個別詳細を行き来しやすい構成にして、確認負荷を下げた。',
      'よく使う操作だけを前面に出し、詳細項目は段階的に見せる UI にした。',
    ],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
