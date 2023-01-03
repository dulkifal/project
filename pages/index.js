import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../styles/Home.module.css";
import { getData } from "../lib/baseApi";
 
import { LangContext } from "./_app";
 
 
export default function Home() {
  const [fatwas, setFatwas] = useState([]);
  const {lang} = useContext(LangContext)
   

  useEffect(() => {
    getData("/api/fatwa/ask").then((data) => {
       
     
      setFatwas( data.filter((fatwa) => fatwa.lang === lang));
    });
  }, [lang]);
  console.log(lang)
   
  return (
    <div className={s.container}>
      <Head>
        <title> الفقه الشافعية</title>
        <meta name="description" content=" قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
       

        <div className={s.blogs}>
          {fatwas.map((fatwa) => (
            <div key={fatwa.id} className={s.card}>
              <Link href={`/fatwa/${fatwa.id}`}>
                <h4>

                {fatwa.question}
                </h4>
                <p>{fatwa.answer.slice(0,100)}....</p>
                </Link>
            </div>
          ))}
        </div>
        <aside className={s.sideBar}>
          <div className={s.question}>
             <Link href="/fatwa/ask">
            <h3>اطرح سؤالك</h3>
          </Link>

          </div>
          <Link href="/fatwa">
            المزيد
          </Link>

        </aside>
      </main>
    </div>

  );
}
