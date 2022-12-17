import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData} from "../../lib/baseApi";


const SearchPage = () => {
  const { query } = useRouter();
  const [term, setTerm] = useState(query.term || "");
  const [results, setResults] = useState([]);
  

  useEffect(() => {
    setTerm(query.term || "");
    getSearchResults();
  }, [query.term]);

  const getSearchResults = async () => {
    const res = await getData(`/api/fatwa/search?term=${term}`);
    
    setResults(res);
  };
  console.log(results)


  
 
 
  return (
    <div>
      
      {
        results.map((result) => (
          <div key={result.id}>
            <h3>{result.question}</h3>
            <p>{result.answer}</p>
          </div>
        ))
      }
      
      
       
    </div>
  );
};

export default SearchPage;




