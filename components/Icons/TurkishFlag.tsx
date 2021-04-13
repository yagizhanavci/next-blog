import React from "react";

interface ITurkishFlagProps extends React.SVGProps<SVGSVGElement> {}

export const TurkishFlag: React.FC<ITurkishFlagProps> = React.memo((props) => {
  return (
    <svg className="w-5 h-5" viewBox="0 0 512 512" {...props}>
      <circle cx={256} cy={256} r={256} fill="#d80027" />
      <g fill="#f0f0f0">
        <path d="M245.518 209.186l21.005 28.945 34.017-11.03-21.038 28.92 21.002 28.944-34.005-11.072-21.037 28.92.022-35.761-34.006-11.072 34.018-11.03z" />
        <path d="M188.194 328.348c-39.956 0-72.348-32.392-72.348-72.348s32.392-72.348 72.348-72.348c12.458 0 24.18 3.151 34.414 8.696-16.055-15.702-38.012-25.392-62.24-25.392-49.178 0-89.043 39.866-89.043 89.043s39.866 89.043 89.043 89.043c24.23 0 46.186-9.691 62.24-25.392-10.234 5.547-21.956 8.698-34.414 8.698z" />
      </g>
    </svg>
  );
});
