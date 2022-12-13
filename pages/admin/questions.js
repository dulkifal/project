import { useEffect, useState } from "react";
import { getData, patchData, deleteData, } from "../../lib/baseApi";

const showQuestions = () => {
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
    patchData("/api/fatwa/ask", { id, answer}
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



  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question,index) => (
          <li key={question.id}>
            <h3>{question.question}</h3>
            <textarea defaultValue={question.answer}  id={index} />
            <button onClick={()=>addAnswer(question.id, index)}>add answer</button> 
            <p>{question.name}</p>
            <p>{question.email}</p>
            <button onClick={()=> deleteIt(question.id)}>delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default showQuestions;
