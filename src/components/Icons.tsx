type IconProps = { className?: string };

const base = "h-full w-full";

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `${base} ${className}`,
    "aria-hidden": true,
  };

  switch (name) {
    case "container":
      return (
        <svg {...common}>
          <rect x="2.5" y="7" width="19" height="10" rx="1" />
          <path d="M7 7v10M12 7v10M17 7v10" />
        </svg>
      );
    case "tank":
      return (
        <svg {...common}>
          <rect x="2.5" y="8" width="19" height="8" rx="4" />
          <path d="M12 4v4M9.5 4h5" />
        </svg>
      );
    case "warehouse":
      return (
        <svg {...common}>
          <path d="M3 20V9l9-5 9 5v11" />
          <path d="M7.5 20v-6h9v6" />
        </svg>
      );
    case "customs":
      return (
        <svg {...common}>
          <path d="M12 3l7.5 3v5.5c0 4.2-3 7.6-7.5 9.5-4.5-1.9-7.5-5.3-7.5-9.5V6z" />
          <path d="M9.2 12.2l2 2 3.6-3.8" />
        </svg>
      );
    case "project":
      return (
        <svg {...common}>
          <path d="M4 20V4l11 3v3" />
          <path d="M4 4l9 2" />
          <rect x="13" y="13" width="8" height="7" rx="1" />
        </svg>
      );
    case "truck":
    default:
      return (
        <svg {...common}>
          <path d="M2.5 16.5V6h11v10.5" />
          <path d="M13.5 9.5h4l4 3.5v3.5h-8" />
          <circle cx="7" cy="17.5" r="1.9" />
          <circle cx="17.5" cy="17.5" r="1.9" />
        </svg>
      );
  }
}

export function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: `${base} ${className}`,
    "aria-hidden": true,
  };

  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm7 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.3-2.02 2.66v5.14h-4v-11z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76zm7.02-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23 12s0-3.6-.46-5.32a2.77 2.77 0 0 0-1.95-1.96C18.87 4.25 12 4.25 12 4.25s-6.87 0-8.59.47a2.77 2.77 0 0 0-1.95 1.96C1 8.4 1 12 1 12s0 3.6.46 5.32c.25.95 1 1.7 1.95 1.96 1.72.47 8.59.47 8.59.47s6.87 0 8.59-.47a2.77 2.77 0 0 0 1.95-1.96C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M17.53 3h3.24l-7.08 8.1L22 21h-6.53l-5.11-6.68L4.5 21H1.25l7.57-8.66L2 3h6.7l4.62 6.11L17.53 3zm-1.14 16.06h1.8L7.71 4.84H5.78l10.61 14.22z" />
        </svg>
      );
    case "facebook":
    default:
      return (
        <svg {...common}>
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
        </svg>
      );
  }
}

export function ChevronDown({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6 9.5L12 15l6-5.5" />
    </svg>
  );
}
