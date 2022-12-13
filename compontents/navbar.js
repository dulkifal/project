import Link from "next/link";
import { useRouter } from "next/router";
 

const Navbar = () => {
  const router = useRouter();
   
  const isActive = (r) => {
    if (r === router.pathname) {
      return "active";
    } else {
      return "";
    }
  };
   
 
  
  return (
    <nav className="navbar" dir="rtl">
      <h1> الفقه الشافعية</h1>
      <div className="navItems" >

        <Link  href="/" className={isActive("/")} onClick={()=>toggleActive}>الرئيسة</Link>
        <Link  href="/fatwa/ask"  className={isActive("/fatwa/ask")}>اسأل</Link>
      </div>
    </nav>
  );
 
}

export default Navbar;