import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  NodeIcon,
  Page,
  ReactIcon,
} from "@/components";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content";
import { IProject } from "@/models";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <Page>
      <div className="mt-6">
        <h1 className="my-6 text-3xl font-extrabold tracking-tight text-black inline-blockmb-4 md:text-5xl dark:text-white">
          {t("home:title")}
        </h1>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-4xl dark:text-white">
          {t("home:subTitle")}
        </h2>
        <p>{t("home:description")}</p>
        <section className="flex items-center justify-between my-10">
          <HtmlIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <CssIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <JsIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <ReactIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          <NodeIcon className="w-10 h-10 sm:w-12 sm:h-12" />
        </section>
        <section className="my-10">
          <h2 className="my-8 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            {t("home:projects")}
          </h2>
          {projects[locale].map((project: IProject, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
        {/* <section className="my-10">
          <h2 className="my-8 text-2xl font-extrabold tracking-tight text-black md:text-4xl dark:text-white">
            My Tech Stack
          </h2>
          <a
            data-theme="light"
            data-layers="1,2,3,4"
            data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/65c71113beaf2d5a7a81e5a6ca912e"
          />
        </section> */}
      </div>
    </Page>
  );
};

export default Home;
