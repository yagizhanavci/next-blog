import { classnames } from "tailwindcss-classnames";

// container
const containerClassnames = classnames(
  "relative",
  "w-32",
  "h-8",
  "focus:outline-none",
  "ring-indigo-500",
  "cursor-pointer",
  "rounded-md",
);
const offDefaultContainerClassnames = classnames("bg-black");
const onDefaultContainerClassnames = classnames("bg-blue-500");
// const offDarkContainerClassnames = classnames("bg-white");
// const onDarkContainerClassnames = classnames("bg-blue-500");

//thumb
const thumbClassnames = classnames(
  "absolute",
  "transition-transform",
  "transform",
  "left-0",
  "top-0",
  "h-8",
  "w-8",
  "rounded-2xl",
  "bg-white",
);
const offDefaultThumbClassnames = classnames();
const onDefaultThumbClassnames = classnames("translate-x-full");

interface IToggleProps {
  prefixContent?: React.ReactNode;
  suffixContent?: React.ReactNode;
  onToggle: (v: boolean) => void;
  value: boolean;
  name: string;
}

export const Toggle: React.FC<IToggleProps> = ({
  name,
  value,
  onToggle,
  prefixContent,
  suffixContent,
}) => {
  return (
    <div className="flex items-center toggle">
      {prefixContent !== undefined && (
        <div className="mr-2">{prefixContent}</div>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          onChange={() => onToggle(!value)}
          className="hidden"
        />
        <label
          htmlFor={name}
          className={classnames(containerClassnames, {
            [onDefaultContainerClassnames]: value,
            [offDefaultContainerClassnames]: !value,
          })}
        >
          <div
            className={classnames(thumbClassnames, {
              [onDefaultThumbClassnames]: value,
              [offDefaultThumbClassnames]: !value,
            })}
          />
        </label>
      </div>
      {suffixContent !== undefined && (
        <div className="ml-2">{suffixContent}</div>
      )}
    </div>
  );
};
