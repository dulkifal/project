import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData, patchData, deleteData } from "../../../lib/baseApi";
import s from "../../../styles/admin/answer.module.css";

const EditMasael = () => {
  const [masael, setMasael] = useState({
    id: "",
    question: "",
    answer: "",
    name: "",
    email: "",
    lang: "",
    });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchMasael();
    fetchMasael();
  }, [id]);

  const fetchMasael = () => {
    getData(`/api/masael/${id}`).then((data) => {
      setMasael(data[0]);
    });
  };

  const addAnswer = (id) => {
    const title = document.getElementById("title").value;

    const content = document.getElementById("content").value;
    const writer = document.getElementById("author").value;
    const lang = document.getElementById("lang").value
      ? document.getElementById("lang").value
      : "ar";
      const published = document.getElementById("publish").checked ? "true" : "false";
    patchData("/api/masael", { id, title, content, lang, published }).then(() => {
      fetchMasael();
    });
  };

  return (
    <div className={s.answerSection}>
      <h1>أسئلة</h1>
      <div className={s.aswerContainer}>
        <div key={masael.id} className={s.card}>
          {/* dropdown for select language */}
          <label htmlFor="lang"> اختر لغة</label>
          <select id="lang" defaultValue={masael.lang}>
            <option value="ar">عربية</option>
            <option value="ur">اردو</option>
          </select>

          <div className={s.answer}>
            <label htmlFor="question">السؤال:</label>
            <textarea
              defaultValue={masael.title}
              id="title"
              rows={2}
              cols={150}
            />

            <label htmlFor="aswer">الجواب:</label>
            <textarea
              defaultValue={masael.content}
              id="content"
              rows={15}
              cols={150}
            />
           
          {/* label */}
          <label htmlFor="name">الكاتب:</label>
          <input defaultValue={masael.writer} id="author" />
       
            <label htmlFor="lang">    نشر</label>
          
            <input type="checkbox" name="publish" id="publish" checked={masael.published} />
         
          </div>
           <button data-theme="add" onClick={() => addAnswer(masael.id)}>
              add answer
            </button>
          <button data-theme="remove" onClick={() => deleteIt(masael.id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMasael;
