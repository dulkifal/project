import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../styles/Home.module.css";
import { englishToArabic, getData } from "../lib/baseApi";

import { LangContext } from "./_app";

import Sidebar from "../compontents/sidebar";
import Skeleton from "../compontents/skelton";

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
    });
  }, [lang]);

  return (
    <div className={s.container}>
      <main className={s.main}>
        <div>
          <h2>بعض من الفتاوى</h2>
          {loading && <Skeleton count={3} />}
          <div className={s.blogs}>
            {fatwas.slice(0, 6).map((fatwa) => (
              <div key={fatwa.id} className={s.card}>
                <Link href={`/fatwa/${fatwa.id}`}>
                  <h3>{englishToArabic(fatwa.id) + ": " + fatwa.question}</h3>
                  <p>{fatwa.answer?.slice(0, 100)}....</p>
                </Link>
              </div>
            ))}
          </div>
          <h2>بعض من المقالات</h2>
          {loading && <Skeleton count={3} />}

          <div className={s.blogs}>
            {articles.slice(0, 6).map((article) => (
              <div key={article.id} className={s.card}>
                <Link href={`/article/${article.id}`}>
                  <h3>{englishToArabic(article.id) + ": " + article.title}</h3>
                  <p>{article.content?.slice(0, 100)}....</p>
                </Link>
              </div>
            ))}
          </div>
          <h2>بعض من المسائل</h2>
          {loading && <Skeleton count={3} />}

          <div className={s.blogs}>
            {masael.slice(0, 6).map((masael) => (
              <div key={masael.id} className={s.card}>
                <Link href={`/masael/${masael.id}`}>
                  <h3>{englishToArabic(masael.id) + ": " + masael.title}</h3>
                  <p>{masael.content?.slice(0, 100)}....</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
