import { useEffect, useState } from "react";

const showQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const fetchQuestions = () => {
    fetch("/api/fatwa/ask")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  };

  const addAnswer = (id,index) => {
    const answer = document.getElementById(index).value;
    fetch("/api/fatwa/ask", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer, id }),
    }).then(() => {
      fetchQuestions();
    });
  };
  const deleteIt = (id) => {
    fetch("/api/fatwa/ask", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"id": id }),
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
