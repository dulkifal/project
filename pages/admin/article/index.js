import Head from "next/head";
import { useEffect, useState } from "react";
import s from "../../../styles/admin/answer.module.css";
import { getData ,deleteData, postData} from "../../../lib/baseApi";
import Link from "next/link";



const Article = () => {
  const [article, setArticle] = useState([]);
  

  useEffect(() => {
    fetchArticle();

  }, [ ]);
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
  const addArticle = ( ) => {
    const title = document.getElementById("newTitle").value;
    const content = document.getElementById("newContent").value;
    const author = document.getElementById("newAutor").value;
    const lang = document.getElementById('newLang').value ? document.getElementById('newLang').value : 'ar';
    console.log(document.getElementById('newLang').value)


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
      <Head>
        <title>التفقه</title>
        <meta name="description" content="قسم الفقه وأصوله" />
      </Head>

      <main className={s.main}>
        <div className={s.blogs}>
          {article.map((article) => (
            <div key={article.id} className={s.card}>
               
                <h4>{article.title}</h4>
                <p>{article.content}</p>
                <p>{article.author}</p>
                 
                <p>{article.create_time.slice(0,10)}</p>
             

                 
                {/* button for edit */}
                <Link href={`/admin/article/${article.id}`}>
                  <button>edit</button>
                </Link>

                {/* button for delete */}
                <button onClick={()=>{deleteArticle(article.id)}}>delete</button>
              
            </div>
          ))}
          {/* div for adding new articles */}
          <div className={s.card}>
            {/* input area for adding new article */}
            <input type="text" placeholder="title" id="newTitle" />
            <input type="text" placeholder="content" id="newContent"/>
            <input type="text" placeholder="author" id="newAutor"/>
            {/* dropdown for select language */}
            <label htmlFor="lang"> اختر لغة</label>
            <select   id={'newLang'}   >
              <option value="ar">عربية</option>
              <option value="ur">اردو</option>

            </select>
            

            <button onClick={()=>{addArticle()}}>add</button>

          </div>            

        </div>
      </main>
    </div>
  );
};

export default Article;