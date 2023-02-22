import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData } from "../../lib/baseApi";
import s from "../../styles/admin/answer.module.css";


const SearchPage = () => {
  const { query } = useRouter();
  const [term, setTerm] = useState(query.term || "");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTerm(query.term || "");
    getSearchResults();
  }, [query.term, getSearchResults]);

  const getSearchResults = async () => {
    const res = await getData(`/api/fatwa/search?term=${term}`);

    setResults(res);
  };

  return (
    <div className={s.answerSection}>
        <h1> نتيجة البحث</h1>
      <div className={s.aswerContainer}></div>
      {results.map((result) => (
        <div key={result.id} className={s.searchCard}>
          <h3>السؤال: {result.question}</h3>
          <label htmlFor="">الجواب :</label>
          <p> {result.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
