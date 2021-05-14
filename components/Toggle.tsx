import { classNames } from "@/utils";
import { Switch } from "@headlessui/react";
import * as React from "react";

interface IToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  ariaLabel?: string;
  ariaDescription?: string;
  prefixContent?: React.ReactNode;
  suffixContent?: React.ReactNode;
}

export const Toggle: React.FC<IToggleProps> = ({
  onChange,
  ariaLabel,
  ariaDescription,
  checked,
  prefixContent,
  suffixContent,
}) => {
  return (
    <Switch.Group as="div" className={classNames("flex", "items-center")}>
      {prefixContent !== undefined && (
        <div className="mr-2">{prefixContent}</div>
      )}
      <Switch
        checked={checked}
        onChange={() => onChange(!checked)}
        className={classNames(
          checked ? "bg-indigo-500" : "bg-gray-500",
          "relative",
          "inline-flex",
          "flex-shrink-0",
          "flex",
          "h-6",
          "w-11",
          "border-2",
          "border-transparent",
          "rounded-full",
          "cursor-pointer",
          "transition-colors",
          "ease-in-out",
          "duration-200",
        )}
      >
        {ariaLabel && (
          <Switch.Label className="sr-only" passive>
            {ariaLabel}
          </Switch.Label>
        )}
        {ariaDescription && (
          <Switch.Description className="sr-only">
            {ariaDescription}
          </Switch.Description>
        )}
        <span
          aria-hidden="true"
          className={classNames(
            checked ? "translate-x-5" : "translate-x-0",
            "pointer-events-none",
            "inline-block",
            "h-5",
            "w-5",
            "rounded-full",
            "bg-white",
            "shadow",
            "transform",
            "ring-0",
            "transition",
            "ease-in-out",
            "duration-200",
          )}
        />
      </Switch>

      {suffixContent !== undefined && (
        <div className="ml-2">{suffixContent}</div>
      )}
    </Switch.Group>
  );
};
