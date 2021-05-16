import { GithubIcon, IconButton, LinkedinIcon } from "@/components";
import { MailIcon } from "./Icons";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className="flex items-center justify-center h-[44px] space-x-2">
      <IconButton
        icon={<MailIcon className="w-5 h-5 text-black dark:text-white" />}
        external
        href="mailto:ygzhn14@gmail.com"
        ariaLabel="Mail"
      />
      <IconButton
        icon={<GithubIcon className="w-5 h-5 text-black dark:text-white" />}
        external
        href="https://github.com/yagizhanavci"
        ariaLabel="Github Profile"
      />
      <IconButton
        icon={<LinkedinIcon className="w-5 h-5 text-black dark:text-white" />}
        external
        href="https://www.linkedin.com/in/ya%C4%9F%C4%B1zhan-avc%C4%B1-b06556181/"
        ariaLabel="Linkedin Profile"
      />
    </footer>
  );
};
