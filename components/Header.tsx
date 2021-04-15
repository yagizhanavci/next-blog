import { Dropdown, IconButton, Moon, Sun, Toggle } from "@/components";
import { useTheme } from "@/hooks";
import { flags } from "@/utils";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { pathname, asPath, locales, locale, push } = useRouter();

  const onLocaleChange = (locale: string) => {
    push(asPath, undefined, { locale });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={pathname === "/" ? "active" : ""}>
                {t("common:home")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={pathname.includes("/posts") ? "active" : ""}>
                {t("common:posts")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/repos">
              <a className={pathname.includes("/repos") ? "active" : ""}>
                {t("common:repos")}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Dropdown
          value={locale}
          placeholder="Select locale"
          onChange={onLocaleChange}
          options={locales.map((locale) => ({
            key: locale,
            text: flags[locale],
          }))}
        />
        <div className="hidden sm:inline-flex">
          <Toggle
            prefixContent={<Sun />}
            suffixContent={<Moon />}
            name="theme"
            onToggle={theme.onToggle}
            value={theme.isDarkTheme}
          />
        </div>
        <div className="inline-flex sm:hidden">
          <IconButton
            icon={theme.isDarkTheme ? <Sun /> : <Moon />}
            onClick={() => theme.onToggle(!theme.isDarkTheme)}
          />
        </div>
      </div>
    </header>
  );
};
