import * as React from "react";

interface ICheckIconProps extends React.SVGProps<SVGSVGElement> {}

export const CheckIcon: React.FC<ICheckIconProps> = React.memo((props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
});
