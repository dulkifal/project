import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData, patchData, deleteData } from "../../../lib/baseApi";
import s from "../../../styles/admin/answer.module.css";

const EditFatwa = () => {
  const [fatwa, setFatwa] = useState({
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
    fetchFatwa();
    fetchFatwa();
    console.log(fatwa);
  }, [id]);

  const fetchFatwa = () => {
    getData(`/api/fatwa/${id}`).then((data) => {
      setFatwa(data[0]);
    });
  };

  const addAnswer = (id) => {
    const question = document.getElementById("question").value;

    const answer = document.getElementById("answer").value;
    
    const lang = document.getElementById("lang").value
      ? document.getElementById("lang").value
      : "ar";
    patchData("/api/fatwa", { id, question, answer, lang }).then(() => {
      fetchFatwa();
    });
  };

  return (
    <div className={s.answerSection}>
      <h1>أسئلة</h1>
      <div className={s.aswerContainer}>
        <div key={fatwa.id} className={s.card}>
          {/* dropdown for select language */}
          <label htmlFor="lang"> اختر لغة</label>
          <select id="lang" defaultValue={fatwa.lang}>
            <option value="ar">عربية</option>
            <option value="ur">اردو</option>
          </select>

          <div className={s.answer}>
            <label htmlFor="question">السؤال:</label>
            <textarea
              defaultValue={fatwa.question}
              id="question"
              rows={2}
              cols={150}
            />

            <label htmlFor="aswer">الجواب:</label>
            <textarea
              defaultValue={fatwa.answer}
              id="answer"
              rows={15}
              cols={150}
            />
           
          {/* label */}
          <label htmlFor="name">الاسم:</label>
          <input defaultValue={fatwa.name}/>
          <label htmlFor="email">البريد الالكتروني:</label>
          <input defaultValue={fatwa.email} type='email' dir="ltr"/>
          </div>
           <button data-theme="add" onClick={() => addAnswer(fatwa.id)}>
              add answer
            </button>
          <button data-theme="remove" onClick={() => deleteIt(fatwa.id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFatwa;
