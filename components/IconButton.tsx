import Link from "next/link";

interface IconButtonProps {
  icon: React.ReactNode;
  href?: string;
  text?: string;
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  href,
  text,
  external,
  ariaLabel,
}) => {
  if (external && href)
    return (
      <a
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        href={href}
        target="_blank"
        className={`flex items-center self-start text-black dark:text-white focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 ${
          text !== undefined ? "px-4" : "px-2"
        } py-2 text-indigo-500 transition-colors rounded-full hover:bg-opacity-30 hover:bg-indigo-500`}
      >
        {icon}
        {text !== undefined && <span className="ml-2">{text}</span>}
      </a>
    );

  if (href !== undefined)
    return (
      <Link href={href}>
        <a
          aria-label={ariaLabel}
          className={`flex items-center self-start text-black dark:text-white  focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 ${
            text !== undefined ? "px-4" : "px-2"
          } py-2 text-indigo-500 transition-colors rounded-full hover:bg-opacity-30 hover:bg-indigo-500`}
        >
          {icon}
          {text !== undefined && (
            <span className="ml-2 text-black dark:text-white">{text}</span>
          )}
        </a>
      </Link>
    );

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`flex items-center self-start text-black dark:text-white focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 ${
        text !== undefined ? "px-4" : "px-2"
      } py-2 text-indigo-500 transition-colors rounded-full hover:bg-opacity-30 hover:bg-indigo-500`}
    >
      {icon}
      {text !== undefined && <span className="ml-2">{text}</span>}
    </button>
  );
};
