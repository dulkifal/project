import Link from "next/link";
import { useEffect, useState } from "react";
import { getData, patchData, deleteData } from "../../../lib/baseApi";
import s from "../../../styles/admin/answer.module.css";

const ShowQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    getData("/api/fatwa/").then((data) => {
      setQuestions(data);
    });
  };

  const deleteIt = (id) => {
    deleteData("/api/fatwa/", {
      id,
    }).then(() => {
      fetchQuestions();
    });
  };

  return (
    <div className={s.answerSection}>
      <h1>أسئلة</h1>
      <div className={s.aswerContainer}>
        {questions.map((question, index) => (
          <div key={question.id} className={s.card}>
            
            <div className={s.answer}>
              <label htmlFor="question">السؤال:</label>
              <h3>{question.question}</h3>
                

              <label htmlFor="aswer">الجواب:</label>
              <p>{question.answer}</p>
               
              
            </div>
            <p>{question.name}</p>
            <p>{question.email}</p>
            {/* edit button */}
            <Link href={`/admin/fatwa/${question.id}`}>
              <button data-theme="edit">edit</button>
            </Link>
            {/* delete button */}
            

            <button data-theme="remove" onClick={() => deleteIt(question.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowQuestions;
