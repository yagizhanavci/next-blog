import { Header } from "@/components";
import Head from "next/head";

interface IPageProps {}

export const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="root">
        <div className="container">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};
