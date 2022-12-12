import { useEffect, useState } from "react";


const showQuestions = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
   fetchQuestions()
  },
  ),[]
const fetchQuestions = ()=>{
  fetch("/api/fatwa/ask").then((res)=>res.json()).then((data)=> {
    setQuestions(data)
  }
    )

}
 
   

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.question}</h3>
            <p>{question.name}</p>
            <p>{question.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default showQuestions;

