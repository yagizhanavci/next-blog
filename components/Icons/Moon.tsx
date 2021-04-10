import * as React from "react";

interface IMoonProps extends React.SVGProps<SVGSVGElement> {}

export const Moon: React.FC<IMoonProps> = (props) => {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
};
