"use client";

type IconProps = {
  classes?: string;
};

export const Icons = {
  sun: (props: IconProps) => (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={`w-4 h-4 ${props.classes}`}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={`w-4 h-4 ${props.classes}`}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  monitor: (props: IconProps) => (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={`w-4 h-4 ${props.classes}`}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
};
