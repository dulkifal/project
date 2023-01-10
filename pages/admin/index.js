import Link from "next/link";
import s from "./adminPage.module.css";

export default function Admin() {


 
  
  return (
    <div className={s.adminPage}>
      <h1>لوحة الادارة</h1>
      <div >

      <Link href="/admin/questions">
      <button >عرض الأسئلة</button>
      </Link>
      </div>

    
    </div>
  );
}

