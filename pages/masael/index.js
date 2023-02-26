import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import s from "../../styles/Home.module.css";
import { getData } from "../../lib/baseApi";

import { LangContext } from "../_app";

export default function Masael() {
  const [masala, setMasala] = useState([]);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    getData("/api/masael").then((data) => {
      setMasala(data.filter((masala) => masala.lang === lang));
    });
  }, [lang]);

  return (
    <div className={s.container}>
      <main className={s.main}>
        <div className={s.blogs}>
          {masala.map((masala) => (
            <div key={masala.id} className={s.card}>
              <Link href={`/masael/${masala.id}`}>
                <h3> {masala.title}</h3>
                <p>{masala.content.slice(0, 100)}....</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
