import Link from "next/link";

export default function Admin() {
 
  
  return (
    <div>
      <h1>Admin</h1>
      <Link href="/admin/questions">
      <button>show questions</button>
      </Link>

    
    </div>
  );
}

