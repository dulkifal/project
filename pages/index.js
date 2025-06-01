import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../styles/Home.module.css";
import { englishToArabic, getData } from "../lib/baseApi";

import { LangContext } from "./_app";

import Sidebar from "../components/sidebar";
import Skeleton from "../components/skelton";

export default function Home() {
  const [fatwas, setFatwas] = useState([]);
  const [articles, setArticles] = useState([]);
  const [masael, setMasael] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    // getData("/api/fatwa/").then((data) => {
    //   setFatwas(data.filter((fatwa) => fatwa.lang === lang));
    //   setLoading(false);
    //   console.log(data)

    // });
    getData("/api/article").then((res) => {
      setArticles(res.filter((data) => data.lang === lang));
      setLoading(false);
    });
    // getData("/api/masael").then((data) => {
    //   setMasael(data.filter((masael) => masael.lang === lang));
    //   setLoading(false);
    // });
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
                  <h3>{fatwa.id + ": " + fatwa.question}</h3>
                  <p>{fatwa.answer?.slice(0, 100)}....</p>
                </Link>
              </div>
            ))}
          </div>
          <h2>بعض من المقالات</h2>
          {loading && <Skeleton count={3} />}

          <div className={s.blogs}>
            {articles.slice(0, 6).map((article, index) => (
              <div key={index} className={s.card}>
                <Link href={`/article/${article.id}`}>
                  <h3>{article.title}</h3>
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
                  <h3>{masael.id + ": " + masael.title}</h3>
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
