import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getData} from '../../lib/baseApi';
import s from "../../styles/admin/answer.module.css";



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
    <div className={s.searchCard}>
      <h3>{fatwa.question}</h3>
      <p>{fatwa.answer}</p>
    </div>
  );
}
 
export default Fatwa;
