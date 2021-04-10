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
    <div className="toggle">
      {prefixContent !== undefined && (
        <div className="mr-2">{prefixContent}</div>
      )}
      <label className="toggle__container" htmlFor={name}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          onChange={() => onToggle(!value)}
          className="toggle__checkbox"
        />
        <span className="toggle__slider" />
      </label>
      {suffixContent !== undefined && (
        <div className="ml-2">{suffixContent}</div>
      )}
    </div>
  );
};
