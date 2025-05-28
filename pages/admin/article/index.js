import { useEffect, useState } from "react";
import s from "../../../styles/admin/article.module.css";
import { getData, deleteData, postData } from "../../../lib/baseApi";
import Link from "next/link";

const Article = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, []);
  // fetch article
  const fetchArticle = () => {
    getData("/api/article").then((data) => {
      setArticle(data);
    });
  };
  // delete article
  const deleteArticle = (id) => {
    deleteData("/api/article", {
      id,
    }).then(() => {
      fetchArticle();
    });
  };

  // add article
  const addArticle = () => {
    const title = document.getElementById("newTitle").value;
    const content = document.getElementById("newContent").value;
    const author = document.getElementById("newAutor").value;
    const lang = document.getElementById("newLang").value
      ? document.getElementById("newLang").value
      : "ar";
    console.log(document.getElementById("newLang").value);

    postData("/api/article", {
      title,
      content,
      author,
      lang,
    }).then(() => {
      fetchArticle();
    });
  };

  return (
    <div className={s.container}>
     

      <main className={s.main}>
        <div className={s.blogs}>
          {article.map((article) => (
            <div key={article.id} className={s.card}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <p>{article.author}</p>

              <p>{article.create_time?.slice(0, 10)}</p>

              <div>
                {/* button for edit */}
                <Link href={`/admin/article/${article.id}`}>
                  <button data-theme="edit">edit</button>
                </Link>

                {/* button for delete */}

                <button
                  data-theme="remove"
                  onClick={() => {
                    deleteArticle(article.id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
          {/* div for adding new articles */}
       
        <div className={s.newCard}>
          {/* input area for adding new article */}
          <form action="" className={s.form}>
            <textarea
              type="text"
              placeholder="title"
              id="newTitle"
              rows={2}
              cols={114}
            />
            <textarea
              type="text"
              placeholder="content"
              id="newContent"
              rows={3}
              cols={114}
            />
            <input type="text" placeholder="author" id="newAutor" />
            {/* dropdown for select language */}
            <label htmlFor="lang"> اختر لغة</label>
            <select id={"newLang"}>
              <option value="ar">عربية</option>
              <option value="ur">اردو</option>
            </select>

            <button
              data-theme="add"
              onClick={() => {
                addArticle();
              }}
            >
              add
            </button>
          </form>
        </div>
         </div>
      </main>
    </div>
  );
};

export default Article;
