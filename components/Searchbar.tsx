import { SearchIcon } from "@/components";

interface ISearchbarProps {
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export const Searchbar: React.FC<ISearchbarProps> = ({
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute w-4 h-4 text-gray-400 top-3 left-3 dark:text-gray-300" />
      <input
        value={value}
        aria-label={placeholder}
        type="text"
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
        className="block w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-100"
      />
    </div>
  );
};
