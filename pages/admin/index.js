import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../lib/baseApi";
import s from "./adminPage.module.css";

export default function Admin() {
  const [article, setArticle] = useState([]);
  const [fatwa, setFatwa] =   useState([]);
  const [masael, setMasael] = useState([]);

  useEffect(() => {
    fetchArticle();
    fetchFatwa();
    fetchMasael();
  }, []);
  // fetch article
  const fetchArticle = () => {
    getData("/api/article").then((data) => {
      setArticle(data);
    });
  };
  const fetchFatwa = () => {
    getData("/api/fatwa/").then((data) => {
      setFatwa(data);
    });
  };
   const fetchMasael = () => {
    getData("/api/masael/").then((data) => {
      setMasael(data);
    });
  };

  return (
    <div className={s.adminPage}>
      <h2>لوحة الادارة</h2>
      <div className={s.table}>
        <table>
          <tr>
            <th>رقم</th>
            <th>الأسئلة</th>
            <th>الجواب</th>
            <th>تعديل</th>
            <th>نشر</th>
          </tr>
           {fatwa && fatwa.map((fatwa)=>(
            <tr key={fatwa.id}>
              <td>{fatwa.id}</td>
              <td>{fatwa.question}</td>
              <td>{fatwa.answer.slice(0,100)}</td>
              <td>
                {" "}
                <Link href={`/admin/fatwa/${fatwa.id}`}>
                  <button>تعديل</button>
                </Link>
              </td>
              {fatwa.published ? <td>منشور</td> : <td> غير منشور</td>}

            </tr>
           ))
           }
          <tr>
            <Link href="/admin/fatwa">
              <button>عرض الأسئلة</button>
            </Link>
          </tr>
        </table>
        <table>
          <tr>
            <th>رقم</th>
            <th>المقالات</th>
            <th>المحتوى</th>
            <th>تعديل</th>
            <th>نشر</th>
          </tr>
          {article &&
            article.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.content.slice(0, 100)}</td>
                <td>
                  {" "}
                  <Link href={`/admin/article/${article.id}`}>
                    <button>تعديل</button>
                  </Link>
                </td>
                {article.published ? <td>منشور</td> : <td> غير منشور</td>}
              </tr>
            ))}
          <tr>
            <Link href="/admin/article">
              <button>عرض المقالات</button>
            </Link>
          </tr>
        </table>
        <table>
          <tr>
            <th>رقم</th>
            <th>الاسئلة</th>
            <th>الجواب</th>
            <th>تعديل</th>
            <th>نشر</th>
          </tr>
          {masael &&
            masael.map((masael) => (
              <tr key={masael.id}>
                <td>{masael.id}</td>
                <td>{masael.title}</td>
                <td>{masael.content.slice(0, 100)}</td>
                <td>
                  {" "}
                  <Link href={`/admin/masael/${masael.id}`}>
                    <button>تعديل</button>
                  </Link>
                </td>
                {masael.published ? <td>منشور</td> : <td> غير منشور</td>}
              </tr>
            ))}
          <tr>
            <Link href="/admin/masael">
              <button>عرض المسائل</button>
            </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}
