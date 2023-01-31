import "../styles/globals.css";
import Layout from "../compontents/layouts";
import { createContext, useState } from "react";

export const LangContext = createContext();
function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangContext.Provider>
  );
}

export default MyApp;
