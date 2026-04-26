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
  publishedAt: string;
  problemSolved: string;
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
    publishedAt: '2026-04-18',
    problemSolved: '調査票作成と現場入力を一つの流れにまとめ、記録ミスを減らした。',
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
      '部屋や建材ごとに調査記録が増えるため、現場では入力単位の整理が煩雑になりやすかった。',
      '調査メモと写真が事務所側に分散しやすく、あとから報告書へ転記する負担が大きかった。',
    ],
    solutions: [
      '部位、階層、室内、建材を自然にたどれる入力構造にして、現場で迷いにくい調査フローへ整理した。',
      '写真と調査情報をひとまとめで保存し、あとから確認しても再入力が発生しにくい運用基盤にした。',
    ],
  },
  {
    slug: 'analysis-qr-code-system',
    title: '分析受付QRコード管理システム',
    category: 'Lab Workflow',
    publishedAt: '2026-03-08',
    problemSolved: '受付から分析進行までをQRでつなぎ、手戻りの多い運用を整理した。',
    shortDescription:
      'ラベル発行、QR読み取り、搬入から分析完了までの流れを一つの画面でつなぐ検体受付システム。',
    overview:
      '分析受付で発生するラベル発行、サンプル搬入、進捗記録、再分析の履歴更新をQRコード起点でまとめた業務システムです。受付ラベルと画面上の進行状態を連動させることで、現場の確認ミスを減らしながら、紙運用ごとの負荷を抑えやすくしました。',
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
      'ラベル発行と進捗確認の作業が分かれていて、現場では確認漏れや転記ミスが起きやすかった。',
      '紙やExcel中心の受付では、分析工程の更新を追うたびに複数画面を行き来する必要があった。',
    ],
    solutions: [
      'QRコードを共通キーにしてラベル発行、受付、分析工程を一画面で追えるようにし、現場の認知負荷を下げた。',
      '同じ画面で詳細表示と状態更新を完結できる構成にして、工程ごとの切り替え作業を減らした。',
    ],
  },
  {
    slug: 'kinyacho',
    title: 'キンヤチョ',
    category: 'Mobile Form Builder',
    publishedAt: '2026-02-12',
    problemSolved: '現場ごとの記録テンプレートを手元で組めるようにし、入力準備の負担を下げた。',
    shortDescription:
      '現場ごとの記録テンプレートを自分で組み替え、モバイルで記録から集計まで進められる業務アプリ。',
    overview:
      'キンヤチョは、業務ごとに必要な入力項目をテンプレートとして作成し、その場で記録を蓄積できるモバイルアプリです。紙帳票や固定フォームでは拾いきれない現場差分にも対応しやすく、アプリ側で記録項目を調整できるようにして、記録作成の自由度と運用のしやすさを両立しました。',
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
      '現場ごとに必要な記録項目が違うため、固定フォームでは運用に追いつきづらかった。',
      '紙や汎用メモアプリでは、テンプレート設計と記録作成が分かれていて再利用性が弱かった。',
    ],
    solutions: [
      'テンプレート設計をアプリ側で完結できるようにして、業務ごとの入力ルールを現場起点で調整しやすくした。',
      'テンプレート一覧、記録一覧、記録入力を一体化し、運用開始までの準備コストを抑えた。',
    ],
  },
  {
    slug: 'photowake',
    title: 'フォトワケ',
    category: 'Photo Workflow',
    publishedAt: '2026-01-24',
    problemSolved: '大量写真の仕分けを片手で進められるようにし、整理時間を圧縮した。',
    shortDescription:
      '大量の現場写真をスワイプだけで採用・保留・削除候補に振り分け、整理作業を短時間で終えられるモバイルアプリ。',
    overview:
      'フォトワケは、現場や調査で撮りためた大量写真を、あとから素早く整理するためのiOSアプリです。撮影直後の写真確認にかかる時間を減らすために、スワイプ中心の操作、フォルダ振り分け、削除候補の一時退避までを一画面で設計し、個人利用でも業務利用でも扱いやすい形にまとめました。',
    techStack: ['Flutter', 'GoogleAdMob'],
    coverImage: '/images/photowake/photowake-thumbnail.png',
    links: [
      {
        label: 'LP',
        url: 'https://lp.asb-screening.com/photowake/',
      },
      {
        label: 'iOS',
        url: 'https://apps.apple.com/jp/app/%E3%83%95%E3%82%A9%E3%83%88%E3%83%AF%E3%82%B1/id6762072585',
      },
    ],
    screenshots: [
      {
        src: '/images/photowake/photowake-mobile-01.png',
        alt: 'Photowake mobile screen showing photo import grid',
        orientation: 'portrait',
      },
      {
        src: '/images/photowake/photowake-mobile-02.png',
        alt: 'Photowake mobile screen showing photo sorting canvas',
        orientation: 'portrait',
      },
      {
        src: '/images/photowake/photowake-mobile-03.png',
        alt: 'Photowake mobile screen showing folder management actions',
        orientation: 'portrait',
      },
      {
        src: '/images/photowake/photowake-mobile-04.png',
        alt: 'Photowake mobile screen showing billing options',
        orientation: 'portrait',
      },
      {
        src: '/images/photowake/photowake-mobile-05.png',
        alt: 'Photowake mobile screen showing main status dashboard',
        orientation: 'portrait',
      },
    ],
    challenges: [
      '現場写真は撮影後の整理に時間がかかり、採用候補の見極めだけでも負担が大きかった。',
      'フォルダ移動、削除候補の退避、再確認の導線が分散していて、個人利用でも煩雑になりやすかった。',
    ],
    solutions: [
      'スワイプだけで整理判断を進められる操作に寄せて、撮影後の仕分け時間を短縮した。',
      'フォルダ管理、保留、削除候補を同じ画面遷移で扱えるようにして、整理フローを単純化した。',
    ],
  },
];

export const productsByNewest = [...products].sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
);

export const latestProductSlug = productsByNewest[0]?.slug;

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
