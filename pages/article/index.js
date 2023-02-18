import Head from "next/head";
 
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../../styles/Home.module.css";
import { getData } from "../../lib/baseApi";
 
import { LangContext } from "../_app";
import Sidebar from "../../compontents/sidebar";
 
 
export default function Article() {
  const [article,  setArticle] = useState([]);
  const {lang} = useContext(LangContext)
   

  useEffect(() => {
    getData("/api/article").then((data) => {
        setArticle(data.filter((article) => article.lang === lang)
        );
    });
  }, [lang]);
   
   
  return (
    <div className={s.container}>
      <Head>
        <title>  التفقه</title>
        <meta name="description" content=" قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
       

        <div className={s.blogs}>
          {
            article.map((article) => (
            <div key={article.id} className={s.card}>
                <Link href={`/article/${article.id}`}>
                <h4> {article.title}</h4>
                <p>{article.content.slice(0,100)}....</p>
                </Link>
            </div>

            ))}
        </div>
              <Sidebar/>

 
        
      </main>
    </div>

  );
}
