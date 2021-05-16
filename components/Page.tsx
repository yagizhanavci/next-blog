import { Footer, Header } from "@/components";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface IPageProps {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
}

export const Page: React.FC<IPageProps> = ({ children, ...customMeta }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const meta = React.useMemo(
    () => ({
      title: t("common:pageTitle"),
      description: t("common:pageDescription"),
      image: "https://yagizhanavci.com.tr/static/images/avatar.jpeg",
      type: "website",
      ...customMeta,
    }),
    [customMeta],
  );

  return (
    <div className="root">
      <Head>
        <title>{meta.title}</title>
        <link
          rel="canonical"
          href={`https://yagizhanavci.com.tr${router.asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="en-US"
          href={`https://yagizhanavci.com.tr${router.asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="tr"
          href={`https://yagizhanavci.com.tr/tr${router.asPath}`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yagizhanavci.com.tr${router.asPath}`}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Yağızhan Avcı" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {meta.date !== undefined && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="container">
        <Header />
        <div className="flex flex-col flex-grow content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
