export type ProductScreenshot = {
  src: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
};

export type ProductLink = {
  label: string;
  url: string;
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  techStack: string[];
  coverImage: string;
  iconImage?: string;
  screenshots: ProductScreenshot[];
  links?: ProductLink[];
  challenges: string[];
  solutions: string[];
};

export const products: Product[] = [
  {
    slug: 'building-material-log',
    title: 'AsbestosDetailSheet',
    category: 'Asbestos Screening',
    shortDescription:
      '石綿調査の記録構造を現場ごとに柔軟に組み替えながら、そのままデータ化できる業務アプリ。',
    overview:
      '案件、棟、内部外部、箇所、部位を現場ごとの考え方に合わせて柔軟に組み替えながら記録できる石綿調査向けアプリです。固定フォーマットに現場を合わせるのではなく、現場で考えた構造をそのまま残せることを重視しています。',
    techStack: ['FlutterFlow', 'Supabase', 'SQLite', 'Cloudflare Pages'],
    coverImage: '/images/asbestos-detail-sheet/ads-pc-01.png',
    iconImage: '/images/asbestos-detail-sheet-icon.png',
    links: [
      {
        label: 'LP',
        url: 'https://asb-screening.com/',
      },
      {
        label: 'Web App',
        url: 'https://app.asb-screening.com/login',
      },
    ],
    screenshots: [
      {
        src: '/images/asbestos-detail-sheet/ads-pc-02.png',
        alt: 'AsbestosDetailSheet web screen showing building material usage summary',
        orientation: 'landscape',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-pc-03.png',
        alt: 'AsbestosDetailSheet web screen showing template management',
        orientation: 'landscape',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-pc-04.png',
        alt: 'AsbestosDetailSheet web screen showing export menu',
        orientation: 'landscape',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-pc-05.png',
        alt: 'AsbestosDetailSheet web screen showing material list',
        orientation: 'landscape',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-mobile-01.png',
        alt: 'AsbestosDetailSheet mobile screen showing material detail editing',
        orientation: 'portrait',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-mobile-02.png',
        alt: 'AsbestosDetailSheet mobile screen showing login form',
        orientation: 'portrait',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-mobile-03.png',
        alt: 'AsbestosDetailSheet mobile screen showing member add modal',
        orientation: 'portrait',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-mobile-04.png',
        alt: 'AsbestosDetailSheet mobile screen showing project list',
        orientation: 'portrait',
      },
      {
        src: '/images/asbestos-detail-sheet/ads-mobile-05.png',
        alt: 'AsbestosDetailSheet mobile screen showing side menu',
        orientation: 'portrait',
      },
    ],
    challenges: [
      '内部外部や階層の切り方が案件ごとに異なるため、固定フォーマットでは現場の考え方を記録に落とし込みにくかった。',
      '調査メモと写真が現場ごとに分散しやすく、後工程で参照し直すたびに確認負荷が大きかった。',
    ],
    solutions: [
      '案件、棟、内部外部、箇所、部位を自由に組み替えられる記録構造にして、現場の流れを崩さず入力できるようにした。',
      '写真と記録をひとまとまりで保持し、後から同じ構造で追跡できるようにして確認作業を短縮した。',
    ],
  },
  {
    slug: 'analysis-qr-code-system',
    title: '分析業務QRコード管理システム',
    category: 'Lab Workflow',
    shortDescription:
      'ラベル印刷、QR読み取り、検体進行、履歴確認を1つの流れで管理し、分析業務の受入から記録までを繋げるシステム。',
    overview:
      '分析業務で発生するラベル印刷支援と検体記録管理を統合し、QRコードを軸に受入、前処理、秤量、分析、証明、報告までの進行を一連で追えるようにしたシステムです。印刷したラベルをその場で読み取り、検体コードと作業状態を紐付けることで、紙や手入力に依存しがちな業務フローを整理し、検索、再印刷、履歴確認までを一つの画面群で扱える構成にしました。',
    techStack: ['Next.js', 'TypeScript', 'SQL', 'JavaScript'],
    coverImage: '/images/qr-demo/qrdemo-pc-01.png',
    screenshots: [
      {
        src: '/images/qr-demo/qrdemo-pc-01.png',
        alt: 'QR code scanning workflow on sample bag',
        orientation: 'landscape',
      },
      {
        src: '/images/qr-demo/qrdemo-pc-02.png',
        alt: 'Label printer and QR workflow setup',
        orientation: 'landscape',
      },
      {
        src: '/images/qr-demo/qrdemo-pc-03.png',
        alt: 'Sample intake list with QR-based process tracking',
        orientation: 'landscape',
      },
      {
        src: '/images/qr-demo/qrdemo-pc-04.png',
        alt: 'Sample detail screen showing editable workflow state',
        orientation: 'landscape',
      },
    ],
    challenges: [
      'ラベル印刷と検体進行の記録が別々の運用になりやすく、現場では再印刷、検索、状態確認のたびに手戻りが発生していた。',
      '手入力やExcel中心の管理では、検体コード、工程、タイトル、更新履歴の紐付けが弱く、受入後の追跡性が不足しやすかった。',
    ],
    solutions: [
      'QRコードを共通キーとしてラベル印刷、読み取り、検体一覧、詳細編集を接続し、受入から報告までの進行状況を一つの流れで確認できるようにした。',
      '一覧画面での再読み込み、状態別タブ、詳細画面での編集保存、再印刷導線を揃えることで、現場運用の確認コストと転記ミスを抑えた。',
    ],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
