import Head from "next/head";
 
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../../styles/Home.module.css";
import { getData } from "../../lib/baseApi";
 
import { LangContext } from "../_app";
 
 
export default function Masael() {
  const [masala, setMasala] = useState([]);
  const {lang} = useContext(LangContext)
   

  useEffect(() => {
    getData("/api/masael").then((data) => {
        setMasala(data.filter((masala) => masala.lang === lang)
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
            masala.map((masala) => (
            <div key={masala.id} className={s.card}>
                <Link href={`/article/${masala.id}`}>
                <h4> {masala.title}</h4>
                <p>{masala.content.slice(0,100)}....</p>
                </Link>
            </div>

            ))}
        </div>


 
        
      </main>
    </div>

  );
}
