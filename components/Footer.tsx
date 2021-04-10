import { GithubIcon, IconButton, LinkedinIcon } from "@/components";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className="footer">
      <IconButton
        icon={<GithubIcon className="w-6 h-6 text-black dark:text-white" />}
        external
        href="https://github.com/yagizhanavci"
      />
      <IconButton
        icon={<LinkedinIcon className="w-6 h-6 text-black dark:text-white" />}
        external
        href="https://www.linkedin.com/in/ya%C4%9F%C4%B1zhan-avc%C4%B1-b06556181/"
      />
    </footer>
  );
};
