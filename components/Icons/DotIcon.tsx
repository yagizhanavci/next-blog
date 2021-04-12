import * as React from "react";

interface IDotIconProps extends React.SVGProps<SVGSVGElement> {}

export const DotIcon: React.FC<IDotIconProps> = (props) => {
  return (
    <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
    </svg>
  );
};
