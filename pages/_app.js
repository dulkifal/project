import "../styles/globals.css";
import Layout from "../compontents/layouts";
import { createContext, useState } from "react";
import Head from "next/head";

export const LangContext = createContext();


function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Layout>
        
          <title> التفقه </title>
          <meta name="description" content="التفقه" />
          <lang lang='ar' />

        <Component {...pageProps} />
      </Layout>
    </LangContext.Provider>
  );
}

export default MyApp;
