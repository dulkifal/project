import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getData} from '../../lib/baseApi';
import s from "../../styles/admin/answer.module.css";



const Masala = ( ) => {
  const [masala, setMasala] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData(`/api/masael/${id}`).then((data) => {
      setMasala(data[0]);
    });
  }, []);

  return (
    <div className={s.searchCard}>
      <h3>{masala.title}</h3>
      <p>{masala.content}</p>
      <p>{masala.writer} </p>
      
    </div>
  );
}
 
export default Masala;
