import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../../styles/Home.module.css";
import { getData } from "../../lib/baseApi";

import { LangContext } from "../_app";
import Sidebar from "../../components/sidebar";

const Fatwas = () => {
   const [fatwas, setFatwas] = useState([]);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    getData("/api/fatwa").then((data) => {
      setFatwas(data.filter((fatwa) => fatwa.lang === lang));
    });
  }, [lang]);

  return (
     <div className={s.container}>
     
      <main className={s.main}>
       <div className={s.blogs}>
          {fatwas.map((fatwa) => (
            <div key={fatwa.id} className={s.card}>
              <Link href={`/fatwa/${fatwa.id}`}>
                <h3>{fatwa.question}</h3>
                <p>{fatwa.answer?.slice(0, 100)}....</p>
              </Link>
            </div>
          ))}
        </div>
        <Sidebar/>
        </main>
    </div>
  )
}
 

export default Fatwas
