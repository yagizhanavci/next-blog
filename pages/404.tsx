import { ArrowLeft, IconButton, Page } from "@/components";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

interface ICustom404Props {}

const Custom404: React.FC<ICustom404Props> = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Page>
      <div className="flex flex-col items-center justify-center flex-grow w-full h-full space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-black inline-blockmb-4 md:text-5xl dark:text-white">
          404
        </h1>
        <p className="text-sm text-gray-500">{t("404:lost")}</p>
        <div className="inline-block">
          <IconButton
            icon={<ArrowLeft className="w-6 h-6 text-indigo-500" />}
            text={t("404:goHome")}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </Page>
  );
};

export default Custom404;
