import Head from "next/head";
import { useEffect, useState } from "react";
import s from "../../styles/admin/answer.module.css";
import { getData } from "../../lib/baseApi";
import Link from "next/link";



const Article = () => {
  const [article, setArticle] = useState([]);
  

  useEffect(() => {
    getData("/api/article").then((data) => {
      setArticle(data );
    });
  }, [ ]);

  return (
    <div className={s.container}>
      <Head>
        <title>التفقه</title>
        <meta name="description" content="قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
        <div className={s.blogs}>
          {article.map((article) => (
            <div key={article.id} className={s.card}>
              <Link href={`/article/${article.id}`}>
                <h4>{article.title}</h4>
                <p>{article.content.slice(0, 100)}....</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Article;