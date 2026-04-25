export type Product = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  techStack: string[];
  coverImage: string;
  iconImage?: string;
  screenshots: string[];
  challenges: string[];
  solutions: string[];
};

export const products: Product[] = [
  {
    slug: 'building-material-log',
    title: 'AsbestosDetailSheet',
    category: 'Asbestos Screening',
    shortDescription:
      '石綿調査の考え方を崩さず、現場で決めた構造のまま建材単位の記録と写真整理を進められるオフライン対応アプリ。',
    overview:
      '建物の構造や調査の進め方が現場ごとに異なる前提で、案件・棟・内部外部・箇所・部位を柔軟に組み替えながら記録できるようにした石綿調査向けアプリです。固定フォーマットに現場を合わせるのではなく、現場で考えた構造をそのまま残せることを重視しています。',
    techStack: ['FlutterFlow', 'Supabase', 'SQLite', 'Cloudflare Pages'],
    coverImage: '/images/building-material-cover.svg',
    iconImage: '/images/asbestos-detail-sheet-icon.png',
    screenshots: [
      '/images/building-material-screen-1.svg',
      '/images/building-material-screen-2.svg',
    ],
    challenges: [
      '内部外部や階層の切り方が案件ごとに異なるため、固定フォーマットでは現場の考え方を記録に落とし込みにくかった。',
      '建材ごとの写真やメモが後工程で散らばりやすく、事務所に戻ってからの整理負荷が大きかった。',
    ],
    solutions: [
      '案件・棟・内部外部・箇所を自由に組み替えられる構造設計にして、現場の文脈を崩さずに記録できるようにした。',
      '建材を最小単位として写真とメモをひも付け、保存後は構造に沿って自動整理される導線にした。',
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
