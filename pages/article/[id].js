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
  }, [id]);

  return (
    <div className={s.container}>
      <Head>
        <title> {article.title}</title>
        <meta name="description" content={article.content} />
      </Head>

      <main className={s.main}>
        <div className={s.blogs}>
          {article && (
            <div key={article.id} className={s.card}>
              <h3> {article.title}</h3>
              <p>{article.content} </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
