import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  NodeIcon,
  Page,
  ReactIcon,
} from "@/components";
import { ProjectCard } from "@/components/ProjectCard";
import { IProject } from "@/models";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

const projects = {
  en: [
    {
      title: "Quis",
      description:
        "Quis is a web and mobile application that you can interact with your followers on social media. You can ask questions to your followers and your followers will earn points once they answer it.",
      img: "/static/images/quis.png",
      href: "https://landing.quisapp.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "SPA",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
    {
      title: "Surumio",
      description:
        "Surumio provides a management system for your ovines. You can track vaccinations, diseases, births, feedings and locations of your ovines.",
      img: "/static/images/surumio.png",
      href: "http://surumio.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "SPA",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
    {
      title: "HUQQA IMS",
      description:
        "HUQQA IMS is an intergrated management system for HuQQa company. This application provides modules like meeting, accounting, purchasing, workorders, job advertisements etc.",
      img: "/static/images/huqqa.jpg",
      href: "http://im.qfoodbeverage.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "Microfrontend",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
  ],
  tr: [
    {
      title: "Quis",
      description:
        "Quis, sosyal medyadaki takipçileriniz ile etkileşime geçebileceğiniz bir web ve mobil uygulamadır. Takipçilerinize sorular sorup onlara cevapladıklarında puan kazandırabilirsiniz.",
      img: "/static/images/quis.png",
      href: "https://landing.quisapp.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "SPA",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
    {
      title: "Surumio",
      description:
        "Surumio hayvanlarınız için bir yönetim sistemi sağlar. Hayvanlarınızın aşılarını, hastalıklarını, doğumlarını, yem durumlarını ve konumlarını takip edebilirsiniz.",
      img: "/static/images/surumio.png",
      href: "http://surumio.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "SPA",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
    {
      title: "HUQQA IMS",
      description:
        "HUQQA IMS HuQQa şirketi için bir entegre yönetim sistemi uygulamasıdır. Bu uygulama toplantı, satın alma, iş akışı ve iş ilanları gibi modüller sağlar.",
      img: "/static/images/huqqa.jpg",
      href: "http://im.qfoodbeverage.com",
      tags: [
        "Frontend",
        "Web",
        "Mobile",
        "Microfrontend",
        "iOS",
        "Android",
        "React",
        "React Native",
      ],
    },
  ],
};

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
          <h2 className="my-8 text-2xl font-extrabold tracking-tight text-black md:text-4xl dark:text-white">
            {t("home:projects")}
          </h2>
          {projects[locale].map((project: IProject, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
      </div>
    </Page>
  );
};

export default Home;
