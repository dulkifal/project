import { useEffect, useState } from "react";
import { getData, patchData, deleteData, } from "../../lib/baseApi";
import s from "../../styles/admin/answer.module.css";

const ShowQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const fetchQuestions = () => {
    getData("/api/fatwa/ask")
      .then((data) => {
        setQuestions(data);
      });
  };

  const addAnswer = (id,index) => {
    const answer = document.getElementById(index).value;
    const lang = document.getElementById('l'+index).value ? document.getElementById('l'+index).value : 'arb';
    patchData("/api/fatwa/ask", { id, answer ,lang}
     ).then(() => {
      fetchQuestions();
    });
  };
  const deleteIt = (id) => {
   deleteData("/api/fatwa/ask", {
      
      id,
    }).then(() => {
      fetchQuestions();
    });
  };
  const changeLang = (lang) => {

   
  }




  return (
    <div  className={s.answerSection}>
      <h1>أسئلة</h1>
      <div className={s.aswerContainer}>
        {questions.map((question,index) => (
          <div key={question.id} className={s.card}>
            {/* dropdown for select language */}
            <label htmlFor="lang">select language</label>
            <select onChange={(e)=> changeLang(e.target.value)} id={'l'+index} defaultValue={question.lang} >
              <option value="arb">عربية</option>
              <option value="urd">اردو</option>

            </select>
            <h3>{question.question}</h3>
            <textarea defaultValue={question.answer}  id={index} rows={15} cols={150} />
            <button onClick={()=>addAnswer(question.id, index)}>add answer</button> 
            <p>{question.name}</p>
            <p>{question.email}</p>
            <button onClick={()=> deleteIt(question.id)}>delete</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowQuestions;
