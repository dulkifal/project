import Link from "next/link";

export default function Admin() {
 
  
  return (
    <div>
      <h1>لوحة الادارة</h1>
      <Link href="/admin/questions">
      <button>عرض الأسئلة</button>
      </Link>

    
    </div>
  );
}

