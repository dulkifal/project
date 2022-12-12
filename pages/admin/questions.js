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
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.question}</h3>
            <p>{question.answer}</p>
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
