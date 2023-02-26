import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData } from "../../lib/baseApi";
import s from "../../styles/Home.module.css";
import Head from "next/head";

const Fatwa = () => {
  const [fatwa, setFatwa] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData(`/api/fatwa/${id}`).then((data) => {
      setFatwa(data[0]);
    });
  }, [id]);

  return (
    <div className={s.container}>
      <Head>
        <title> {fatwa.question}</title>
        <meta name="description" content={fatwa.answer} />
      </Head>
      <main className={s.main}>
        <div className={s.blogs}>
          {fatwa && (
            <div key={fatwa.id} className={s.card}>
              <h3>{fatwa.question}</h3>
              <p>{fatwa.answer}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Fatwa;
