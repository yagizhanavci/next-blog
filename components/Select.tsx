import { CaretIcon, CheckIcon } from "@/components";
import { classNames } from "@/utils";
import { Listbox } from "@headlessui/react";
import { motion } from "framer-motion";
import * as React from "react";

export interface ISelectOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ISelectProps {
  options: ISelectOptionProps[];
  value: string | undefined;
  placeholder: string;
  onChange: (v: string) => void;
}

export const Select: React.FC<ISelectProps> = ({
  options,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="relative">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <React.Fragment>
            <Listbox.Button className="flex items-center pl-4 bg-white border border-gray-300 rounded-md appearance-none dark:border-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100">
              {value
                ? options.find((option) => option.value === value).label
                : placeholder}
              <CaretIcon className="w-2 h-2 m-4 pointer-events-none" />
            </Listbox.Button>
            {open && (
              <Listbox.Options
                as={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                static
                className="absolute z-10 w-full py-1 mt-1 bg-white border-2 border-t-0 border-gray-300 shadow-lg max-h-60overflow-auto dark:bg-black dark:border-gray-900 focus:outline-none focus:ring-offset-white dark:focus:ring-offset-black"
              >
                {options.map((option) => (
                  <Listbox.Option
                    as="span"
                    onClick={() => onChange(option.value)}
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {({ active, selected, disabled }) => (
                      <a
                        className={classNames(
                          disabled ? "text-gray-300 cursor-not-allowed" : "",
                          active
                            ? "bg-indigo-500 dark:bg-indigo-500"
                            : "bg-white dark:bg-black",
                          "min-w-full",
                          "hover:text-white text-black dark:text-white",
                          "block",
                          "cursor-pointer",
                          "border-2",
                          "border-transparent",
                          "flex",
                          "items-center",
                          "px-2",
                          "py-2",
                          "text-sm",
                          "text-gray-700",
                          "whitespace-nowrap",
                        )}
                      >
                        {option.label}
                        {selected ? (
                          <CheckIcon className="w-4 h-4 ml-4 text-black dark:text-white" />
                        ) : (
                          <div className="w-4 h-4 ml-4" />
                        )}
                      </a>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </React.Fragment>
        )}
      </Listbox>
    </div>
  );
};
