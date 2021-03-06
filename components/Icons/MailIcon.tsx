import * as React from "react";

interface IMailIconProps extends React.SVGProps<SVGSVGElement> {}

export const MailIcon: React.FC<IMailIconProps> = React.memo((props) => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </g>
    </svg>
  );
});
