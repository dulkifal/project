import Head from "next/head";

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import s from "../../styles/Home.module.css";
import { getData } from "../../lib/baseApi";

import { LangContext } from "../_app";

export default function Article() {
  const [article, setArticle] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData(`/api/article/${id}`).then((data) => {
      setArticle(data[0]);
    });
  }, []);
  

  return (
    <div className={s.container}>
      <Head>
        <title> التفقه</title>
        <meta name="description" content=" قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
        <div className={s.blogs}>
          {article && (
            <div key={article.id} className={s.card}>
              <Link href={`/article/${article.id}`}>
                <h4> {article.title}</h4>
                <p>{article.content} </p>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
