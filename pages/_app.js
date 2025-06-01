import "../styles/globals.css";
import Layout from "../compontents/layouts";
import { createContext, useState } from "react";
import Head from "next/head";

export const LangContext = createContext();


function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="التفقه - موقع إسلامي شامل" />
        <meta name="keywords" content="إسلام, فتاوى, مقالات, أحكام, تفقه" />
        <meta name="author" content="التفقه" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="التفقه - موقع إسلامي شامل" />
        <meta property="og:description" content="التفقه - موقع إسلامي شامل" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://al-fiqh.vercel.app/" />
          <link rel="icon" type="image/x-icon" href="/icons/pen-icon.svg" />
          <title> التفقه </title>
      </Head>
      <Layout>
        
          

        <Component {...pageProps} />
      </Layout>
    </LangContext.Provider>
  );
}

export default MyApp;
