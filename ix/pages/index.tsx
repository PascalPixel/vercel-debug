import React from "react";
import Head from "next/head";
import Demo from "../components/Demo";

const Index = () => {
  return (
    <>
      <Head>
        <title>IX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Demo />
    </>
  );
};

export default Index;
