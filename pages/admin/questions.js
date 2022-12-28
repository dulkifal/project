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
    const lang = document.getElementById('l'+index).value ? document.getElementById('l'+index).value : 'ar';
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
            <label htmlFor="lang"> اختر لغة</label>
            <select onChange={(e)=> changeLang(e.target.value)} id={'l'+index} defaultValue={question.lang} >
              <option value="ar">عربية</option>
              <option value="ur">اردو</option>

            </select>
           
             
            <h3>السؤال: {question.question}</h3>
            <div className={s.answer}>
            <label htmlFor="aswer">الجواب:</label>
            <textarea defaultValue={question.answer}  id={index} rows={15} cols={150} />
            <button  data-theme="add" onClick={()=>addAnswer(question.id, index)}>add answer</button> 
            </div>
            <p>{question.name}</p>
            <p>{question.email}</p>
            <button data-theme="remove" onClick={()=> deleteIt(question.id)}>delete</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowQuestions;
