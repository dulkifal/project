import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { getData } from "../lib/baseApi";

export default function Home() {
  const [fatwas, setFatwas] = useState([]);
  useEffect(() => {
    getData("/api/fatwa/ask").then((data) => {
      setFatwas(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title> الفقه الشافعية</title>
        <meta name="description" content=" قسم الفقه وأصوله" />
      </Head>

      <main className={styles.main}>
       

        <div className="Blogs">
          {fatwas.map((fatwa) => (
            <div key={fatwa.id} className="card">
              <Link href={`/fatwa/${fatwa.id}`}>
                <h4>

                {fatwa.question}
                </h4>
                <p>{fatwa.answer.slice(0,100)}....</p>
                </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
