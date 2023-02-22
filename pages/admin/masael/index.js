import Link from "next/link";
import { useEffect, useState } from "react";
import { getData, deleteData, postData } from "../../../lib/baseApi";
import s from "../../../styles/admin/answer.module.css";

const ShowMasael = () => {
  const [masael, setMasael] = useState([]);

  useEffect(() => {
    fetchMasael();
  }, []);

  const fetchMasael = () => {
    getData("/api/masael/").then((data) => {
      setMasael(data);
    });
  };

  const deleteIt = (id) => {
    deleteData("/api/masael/", {
      id,
    }).then(() => {
      fetchMasael();
    });
  };
   const addMasael = () => {
    const title = document.getElementById("newTitle").value;
    const content = document.getElementById("newContent").value;
    const writer = document.getElementById("newAutor").value;
    const lang = document.getElementById("newLang").value
      ? document.getElementById("newLang").value
      : "ar";
    console.log(document.getElementById("newLang").value);

    postData("/api/masael", {
      title,
      content,
      writer,
      lang,
    }).then(() => {
      fetchMasael();
    });
  };

  return (
    <div className={s.answerSection}>
      <h1>أسئلة</h1>
      <div className={s.aswerContainer}>
        {masael.map((masael, index) => (
          <div key={masael.id} className={s.card}>
            
            <div className={s.answer}>
              <label htmlFor="question">السؤال:</label>
              <h3>{masael.title}</h3>
                

              <label htmlFor="aswer">الجواب:</label>
              <p>{masael.content}</p>
               
              
            </div>
            <p>{masael.name}</p>
            
            {/* edit button */}
            <Link href={`/admin/masael/${masael.id}`}>
              <button data-theme="edit">edit</button>
            </Link>
            {/* delete button */}
            

            <button data-theme="remove" onClick={() => deleteIt(masael.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
     <div className={s.newCard}>
          {/* input area for adding new masael */}
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
              onClick={(e) => {
                e.preventDefault();
                addMasael();
              }}
            >
              add
            </button>
          </form>
        </div>
    </div>
  );
};

export default ShowMasael;
