import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  NodeIcon,
  Page,
  ReactIcon,
} from "@/components";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <div className="mt-6">
        <h1 className="my-6 text-3xl font-bold tracking-tight text-black inline-blockmb-4 md:text-5xl dark:text-white">
          {t("home:title")}
        </h1>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-4xl dark:text-white">
          {t("home:subTitle")}
        </h2>
        <p>{t("home:description")}</p>
        <div className="flex items-center justify-between my-10">
          <HtmlIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <CssIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <JsIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <ReactIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <NodeIcon className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
    </Page>
  );
};

export default Home;
