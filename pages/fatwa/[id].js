import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getData} from '../../lib/baseApi';


const Fatwa = ( ) => {
  const [fatwa, setFatwa] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData(`/api/fatwa/${id}`).then((data) => {
      setFatwa(data[0]);
    });
  }, []);

  return (
    <div>
      <h1>{fatwa.question}</h1>
      <p>{fatwa.answer}</p>
    </div>
  );
}
 
export default Fatwa;
