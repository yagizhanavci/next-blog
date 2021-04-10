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
        <label htmlFor={name}>
          <div />
        </label>
      </div>
      {suffixContent !== undefined && (
        <div className="ml-2">{suffixContent}</div>
      )}
    </div>
  );
};
