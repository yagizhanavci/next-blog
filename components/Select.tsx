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
            <Listbox.Button className="dropdown__button">
              {value
                ? options.find((option) => option.value === value).label
                : placeholder}
              <CaretIcon className="dropdown__button-caret" />
            </Listbox.Button>
            {open && (
              <Listbox.Options
                as={motion.div}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                static
                className="dropdown__options"
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
                          "dropdown__option",
                        )}
                      >
                        {option.label}
                        {selected ? (
                          <CheckIcon className="dropdown__option-check" />
                        ) : (
                          <div className="dropdown__option-check-filler" />
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
