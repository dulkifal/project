import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "../../styles/admin/answer.module.css";
import { englishToArabic, getData } from "../../lib/baseApi";
import Head from "next/head";

const Masala = () => {
  const [masala, setMasala] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData(`/api/masael/${id}`).then((data) => {
      setMasala(data[0]);
    });
  }, [id]);

  return (
    <div className={s.container}>
      <Head>
        <title>  {masala.title}</title>
        <meta name="description" content={masala.content} />
      </Head>

      <main className={s.main}>
        <div className={s.blogs}>
          {masala && (
            <div key={masala.id} className={s.card}>
              <h3>{   masala.title}</h3>
              <p>{masala.content}</p>
              <p>{masala.writer} </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Masala;
