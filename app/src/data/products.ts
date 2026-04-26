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
      '現場の調査情報をモバイルとWebでつなぎ、建材単位で管理できる業務アプリ。',
    overview:
      '部位、階層、室内、写真、建材情報を現場起点で整理しながら記録できる石綿調査向けアプリです。現地での入力と事務所での確認を一つの流れにまとめ、調査漏れや記録のばらつきを抑えられるように設計しました。',
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
      '部位や建材ごとに調査内容が変わるため、現場では入力項目を毎回判断する負荷が高かった。',
      '調査メモと写真が建材単位に分離しやすく、あとから報告書へ反映する際に確認工数が増えていた。',
    ],
    solutions: [
      '部位、階層、室内、建材を自走的にたどれる入力構造にして、現場で迷いにくい調査フローへ整理した。',
      '写真と調査情報をひとまとまりで保存し、あとから確認しても追跡しやすい記録導線にした。',
    ],
  },
  {
    slug: 'analysis-qr-code-system',
    title: '分析業務QRコード管理システム',
    category: 'Lab Workflow',
    shortDescription:
      'ラベル印刷、QR読み取り、受入から報告までの進行管理を一つの流れでつなぐ分析業務システム。',
    overview:
      '分析業務で発生するラベル発行、サンプル受入、工程管理、再印刷や状態更新をQRコード起点でまとめた運用システムです。物理ラベルと画面上の進行状態を連動させることで、現場の作業ミスを減らしながら、検体ごとの履歴を追いやすくしました。',
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
      'ラベル発行と検体進行の管理が分断されると、現場では貼り間違いや状態反映漏れが起きやすかった。',
      '紙やExcel中心の運用では、工程変更や再印刷が入るたびに履歴確認と転記負荷が大きくなっていた。',
    ],
    solutions: [
      'QRコードを共通キーにしてラベル発行、読み取り、工程遷移を一本化し、現場での識別ミスを抑えた。',
      '一覧画面と詳細画面を横断して同じ状態を追えるようにし、再印刷や工程更新の判断を速くした。',
    ],
  },
  {
    slug: 'kinyacho',
    title: 'キンヤチョ',
    category: 'Mobile Form Builder',
    shortDescription:
      '現場ごとの帳票テンプレートを自分で組み立て、モバイルで記録作成から保存まで完結できる業務アプリ。',
    overview:
      'キンヤチョは、業務ごとに必要な入力項目をテンプレートとして定義し、その場で記録を作成できるモバイルアプリです。帳票の種類や入力項目が頻繁に変わる現場でも、アプリ改修を待たずにテンプレート側で運用を調整できるようにして、記録作成の柔軟性と継続運用のしやすさを両立しました。',
    techStack: ['Flutter'],
    coverImage: '/images/kinyacho/kinyacho-thumbnail.png',
    links: [
      {
        label: 'LP',
        url: 'https://lp.asb-screening.com/kinyacho/',
      },
      {
        label: 'iOS',
        url: 'https://apps.apple.com/jp/app/%E3%82%AD%E3%83%B3%E3%83%A4%E3%83%81%E3%83%A7/id6760176793',
      },
    ],
    screenshots: [
      {
        src: '/images/kinyacho/kinyacho-mobile-01.png',
        alt: 'Kinyacho mobile screen showing selectable item categories',
        orientation: 'portrait',
      },
      {
        src: '/images/kinyacho/kinyacho-mobile-02.png',
        alt: 'Kinyacho mobile screen showing template editing',
        orientation: 'portrait',
      },
      {
        src: '/images/kinyacho/kinyacho-mobile-03.png',
        alt: 'Kinyacho mobile screen showing record form input',
        orientation: 'portrait',
      },
      {
        src: '/images/kinyacho/kinyacho-mobile-04.png',
        alt: 'Kinyacho mobile screen showing record list',
        orientation: 'portrait',
      },
      {
        src: '/images/kinyacho/kinyacho-mobile-05.png',
        alt: 'Kinyacho mobile screen showing template list',
        orientation: 'portrait',
      },
    ],
    challenges: [
      '現場ごとに必要な帳票や入力項目が違うため、固定フォームでは運用変更に追従しづらかった。',
      '紙や単純なメモアプリでは、テンプレート管理と記録作成が分かれていて再利用性が低かった。',
    ],
    solutions: [
      'テンプレート自体をアプリ内で編集できる構成にして、業務ごとの入力ルールを現場側で調整できるようにした。',
      'テンプレート一覧、記録一覧、記録入力を一続きの導線でまとめ、作成から保存までをモバイルで完結させた。',
    ],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
