import "../styles/globals.css";
import Layout from "../compontents/layouts";
import { createContext, useState } from "react";
import Head from "next/head";

export const LangContext = createContext();

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Layout>
        <Head>
          <title> التفقه</title>
          <meta
            name="description"
            content="  و الفقه الشافعي و  الفقه و فتوى  قسم الفقه وأصوله"
          />
          <lang lang="ar" />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </LangContext.Provider>
  );
}

export default MyApp;
