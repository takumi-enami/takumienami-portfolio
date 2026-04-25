export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
  centerItems?: boolean;
};

export const skillLead =
  'アプリ開発からデータ設計、公開環境の整備まで、用途に応じて柔軟に組み合わせています。';

export const skillCategories: SkillCategory[] = [
  {
    title: 'App / Frontend',
    description: 'UI 設計から運用を意識したフロント実装まで、軽やかに組み立てます。',
    items: ['FlutterFlow', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend / Database',
    description: '記録や管理のフローを支えるために、扱いやすいデータ設計を重視します。',
    items: ['Supabase', 'SQL', 'SQLite'],
  },
  {
    title: 'Tools / Platform',
    description: '開発から公開までの流れを小さなチームでも回しやすく整備します。',
    items: ['GitHub', 'Cloudflare Pages', 'Cloudflare Registrar'],
    centerItems: true,
  },
];

export const skillNote =
  'UI を作るだけでなく、データの持ち方や運用方法まで含めて設計することを重視しています。';
