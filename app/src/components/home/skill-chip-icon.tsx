import type { ReactNode } from 'react';

type SkillChipIconProps = {
  item: string;
};

type SvgProps = {
  className?: string;
};

function BaseIcon({
  className,
  viewBox = '0 0 24 24',
  children,
}: SvgProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function FlutterFlowIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 17.5L12.3 4h7.7l-8.3 13.5H4Z" fill="#4F46E5" />
      <path d="M12.3 20 20 7.5v8.3L17.2 20h-4.9Z" fill="#06B6D4" />
    </BaseIcon>
  );
}

function FlutterIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M7.2 15.2 12.9 9.5h3.8l-7.6 7.6H7.2Z" fill="#47C5FB" />
      <path d="M10.6 18.6 16.3 13h3.7l-5.6 5.6h-3.8Z" fill="#00569E" />
      <path d="M9 8.2 12.9 4.3h3.8L9 16h3.8l1.9 2.6H9.2L5.8 16l3.2-4.7Z" fill="#54C5F8" />
    </BaseIcon>
  );
}

function NextJsIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="9" fill="#111827" />
      <path d="M9 8v8l6-8v8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </BaseIcon>
  );
}

function HtmlIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M5 4h14l-1.3 15.2L12 21l-5.7-1.8L5 4Z" fill="#E44D26" />
      <path d="M12 5.4v14.1l4.6-1.4 1.1-12.7H12Z" fill="#F16529" />
      <path d="M8 8h8M8.6 11.2H16l-.5 4.6-3.5 1.1-3.3-1.1-.2-2.3" stroke="#fff" strokeLinecap="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

function CssIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M5 4h14l-1.3 15.2L12 21l-5.7-1.8L5 4Z" fill="#264DE4" />
      <path d="M12 5.4v14.1l4.6-1.4 1.1-12.7H12Z" fill="#2965F1" />
      <path d="M8.4 8h7.2M8.8 11.2H15l-.3 3.1-2.7.9-2.4-.8-.1-1.3" stroke="#fff" strokeLinecap="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

function JavaScriptIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="#F7DF1E" />
      <path d="M10.2 8.5v6.2c0 1.8-.9 2.8-2.5 2.8-.9 0-1.7-.3-2.4-.9l1-1.5c.4.4.8.6 1.2.6.6 0 .9-.3.9-1V8.5h1.8Zm4.2 9c-1.4 0-2.5-.5-3.4-1.4l1-1.4c.7.6 1.5 1 2.4 1 .9 0 1.4-.4 1.4-.9 0-.6-.5-.8-1.6-1.2-1.6-.5-2.7-1.1-2.7-2.7 0-1.6 1.3-2.7 3.1-2.7 1.2 0 2.2.4 3 1.1l-1 1.4a3 3 0 0 0-2-.8c-.8 0-1.2.3-1.2.8 0 .6.5.8 1.7 1.2 1.6.6 2.6 1.2 2.6 2.8 0 1.7-1.3 2.8-3.3 2.8Z" fill="#111827" />
    </BaseIcon>
  );
}

function TypeScriptIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="#3178C6" />
      <path d="M8 9h8M10.4 9v8M14.1 16.6c.5.5 1.1.8 1.8.8.8 0 1.3-.3 1.3-.8 0-.5-.3-.8-1.5-1.2-1.3-.5-2.1-1-2.1-2.3 0-1.4 1.2-2.3 2.8-2.3 1 0 1.9.3 2.6.9l-.9 1.3c-.5-.4-1-.6-1.6-.6-.7 0-1.1.3-1.1.7 0 .5.4.7 1.5 1.1 1.5.5 2.2 1.1 2.2 2.4 0 1.4-1.1 2.4-3 2.4-1.3 0-2.4-.4-3.1-1.1l1.1-1.3Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </BaseIcon>
  );
}

function SupabaseIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M13.7 4.5c.5-.7 1.6-.3 1.6.6v10.8c0 .3-.1.5-.2.7l-3.1 4.4c-.5.7-1.6.3-1.6-.6V9.6c0-.3.1-.5.2-.7l3.1-4.4Z" fill="#3ECF8E" />
      <path d="M8.8 9.5c-.5.7 0 1.6.9 1.6h4.4l-2.1 3c-.2.3-.5.4-.8.4H7c-.9 0-1.4-.9-.9-1.6l2.7-3.8Z" fill="#249361" />
    </BaseIcon>
  );
}

function DatabaseIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" fill="#2563EB" />
      <path d="M5.5 6.5v8c0 1.6 2.9 2.8 6.5 2.8s6.5-1.2 6.5-2.8v-8" fill="#60A5FA" />
      <path d="M5.5 10.5c0 1.6 2.9 2.8 6.5 2.8s6.5-1.2 6.5-2.8M5.5 14.5c0 1.6 2.9 2.8 6.5 2.8s6.5-1.2 6.5-2.8" stroke="#DBEAFE" strokeWidth="1.4" />
    </BaseIcon>
  );
}

function SqliteIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <rect x="5" y="4.5" width="14" height="15" rx="3" fill="#0F766E" />
      <path d="M9 8.5h6M9 12h6M9 15.5h4" stroke="#CCFBF1" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M6.5 6.5h11" stroke="#5EEAD4" strokeLinecap="round" strokeWidth="1.4" />
    </BaseIcon>
  );
}

function GitHubIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.6-.2.6-.4v-1.6c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.8-.5 0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1 1 2.6.7.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.3 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5.9a8.4 8.4 0 0 1 4.6 0c1.8-1.1 2.5-.9 2.5-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2.1 4-4.1 4.3.3.3.6.8.6 1.7v2.6c0 .2.2.5.6.4A8.2 8.2 0 0 0 12 3.8Z" fill="#111827" />
    </BaseIcon>
  );
}

function CloudflareIcon({ className, registrar = false }: SvgProps & { registrar?: boolean }) {
  return (
    <BaseIcon className={className} viewBox="0 0 28 24">
      <path d="M10.2 18.5h12.4a1.5 1.5 0 0 0 .3-3l-2.6-.6a5.1 5.1 0 0 0-5-6.3 5.7 5.7 0 0 0-5.4 4l-.3 1.1a3.7 3.7 0 0 0 .6 7.3Z" fill="#F38020" />
      <path d="M6.5 18.5h7.8a1.2 1.2 0 0 0 .2-2.4l-1.6-.4a3.6 3.6 0 0 0-3.5-4.4A4 4 0 0 0 5.7 14l-.2.7a2.9 2.9 0 0 0 1 3.8Z" fill="#FAAE40" />
      {registrar ? <circle cx="21.5" cy="7" r="2.1" fill="#111827" /> : null}
    </BaseIcon>
  );
}

function DefaultIcon({ className }: SvgProps) {
  return (
    <BaseIcon className={className}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="#CBD5E1" />
      <path d="M8.5 12h7" stroke="#475569" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M12 8.5v7" stroke="#475569" strokeLinecap="round" strokeWidth="1.8" />
    </BaseIcon>
  );
}

const skillIconMap: Record<string, (props: SvgProps) => ReactNode> = {
  Flutter: FlutterIcon,
  FlutterFlow: FlutterFlowIcon,
  'Next.js': NextJsIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  Supabase: SupabaseIcon,
  SQL: DatabaseIcon,
  SQLite: SqliteIcon,
  GitHub: GitHubIcon,
  'Cloudflare Pages': CloudflareIcon,
  'Cloudflare Registrar': (props) => CloudflareIcon({ ...props, registrar: true }),
};

export function SkillChipIcon({ item }: SkillChipIconProps) {
  const Icon = skillIconMap[item] ?? DefaultIcon;
  return <Icon className="chip__icon" />;
}
