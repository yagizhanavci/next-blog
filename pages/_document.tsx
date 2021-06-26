import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="yandex-verification" content="46d9f89f2ff3f3e1" />
          <meta
            content="dd1TwCL86tqk92cmgiC9e88fHVAyWx374Xs_iQB2MOY"
            name="google-site-verification"
          />
        </Head>
        <body
          style={{ WebkitTapHighlightColor: "transparent" }}
          className="font-sans antialiased text-black bg-white theme-switch dark:bg-black dark:text-white"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
