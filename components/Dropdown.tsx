import { CaretIcon } from "@/components";
import * as React from "react";

interface IDropdownOption {
  key: string;
  text: string;
}

interface IDropdownProps {
  value?: string;
  options: IDropdownOption[];
  placeholder?: string;
  onChange: (v: string) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="relative inline-flex">
      <CaretIcon className="absolute top-0 right-0 w-2 h-2 m-4 pointer-events-none" />
      <select
        className="h-10 pl-2 pr-10 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none dark:border-gray-900 focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-100"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
