import { Page } from "@/components";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Home | Yağızhan Avcı</title>
      </Head>
      <h1>Next Blog</h1>
      <div className="h-screen"></div>
    </Page>
  );
};

export default Home;
