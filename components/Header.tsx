import { Moon, Sun, Toggle } from "@/components";
import { useTheme } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const theme = useTheme();

  const { pathname } = useRouter();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={pathname.includes("/posts") ? "active" : ""}>
                Posts
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/repos">
              <a className={pathname.includes("/repos") ? "active" : ""}>
                Repos
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
      <Toggle
        prefixContent={<Sun />}
        suffixContent={<Moon />}
        name="theme"
        onToggle={theme.onToggle}
        value={theme.isDarkTheme}
      />
    </header>
  );
};
