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
        <h1> بسم لله الرحمن الرحيم</h1>

        <div>
          {fatwas.map((fatwa) => (
            <div key={fatwa.id}>
              <Link href={`/fatwa/${fatwa.id}`}>{fatwa.question}</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
