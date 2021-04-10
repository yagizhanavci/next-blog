import React from "react";

interface IArrowLeftProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLeft: React.FC<IArrowLeftProps> = React.memo((props) => {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
});
