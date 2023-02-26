import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../styles/Home.module.css";
import { englishToArabic, getData } from "../lib/baseApi";

import { LangContext } from "./_app";
import Sidebar from "../compontents/sidebar";
import Skeleton from "../compontents/skelton";

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

//  കാരണവർ `

export default function Home() {
  const [fatwas, setFatwas] = useState([]);
  const [articles, setArticles] = useState([]);
  const [masael, setMasael] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    getData("/api/fatwa").then((data) => {
      setFatwas(data.filter((fatwa) => fatwa.lang === lang));
      setLoading(false);
    });
    getData("/api/article").then((data) => {
      setArticles(data.filter((article) => article.lang === lang));
      setLoading(false);
    });
    getData("/api/masael").then((data) => {
      setMasael(data.filter((masael) => masael.lang === lang));
      setLoading(false);
    }
    );
  }, [lang]);

  return (
    <div className={s.container}>
      <Head>
        <title> التفقه</title>
        <meta name="description" content="  و الفقه الشافعي و  الفقه و فتوى  قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
        <div>

          <h3>بعض من الفتاوى</h3>
  {loading && <Skeleton count={3} />}
        <div className={s.blogs}>
          
          {fatwas.slice(0,6).map((fatwa) => (
            <div key={fatwa.id} className={s.card}>
              <Link href={`/fatwa/${fatwa.id}`}>
                <h4>{englishToArabic(fatwa.id)+ ': ' + fatwa.question }</h4>
                <p>{fatwa.answer?.slice(0, 100)}....</p>
              </Link>
            </div>
          ))}
        </div>
        <h3>بعض من المقالات</h3>
  {loading && <Skeleton count={3} />}

        <div className={s.blogs}>
          {articles.slice(0,6).map((article) => (
            <div key={article.id} className={s.card}>
              <Link href={`/article/${article.id}`}>
                <h4>{englishToArabic(article.id)+ ': ' + article.title}</h4>
                <p>{article.content?.slice(0, 100)}....</p>
              </Link>
              </div>
          ))}
          </div>
          <h3>بعض من المسائل</h3>
  {loading && <Skeleton count={3} />}

          <div className={s.blogs}>
          {masael.slice(0,6).map((masael) => (
            <div key={masael.id} className={s.card}>
              <Link href={`/masael/${masael.id}`}>
                <h4>{englishToArabic(masael.id)+ ': ' + masael.title}</h4>
                <p>{masael.content?.slice(0, 100)}....</p>
              </Link>
              </div>
          ))}
          </div>
        </div>

      <Sidebar/>  
      </main>
    </div>
  );
}
