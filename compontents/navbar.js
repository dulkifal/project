import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
 

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
        <ChangeLang />

        <Link  href="/" className={isActive("/")}  >الرئيسة</Link>
        <Link  href="/fatwa/ask"  className={isActive("/fatwa/ask")}>اسأل</Link>
        <Link  href="/" className={isActive("/")}  >البرامج</Link>
        <Link  href="/" className={isActive("/")}  > نبذة عنا</Link>
        <Link  href="/admin/login"  className={isActive("/admin/login")}>مشرف</Link>
         
        <Search />
      </div>
    </nav>
  );
 
}

export default Navbar;

const Search = () => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/fatwa/search?term=${term}`);
    setTerm("");
  };
  return (
    <div className="search">
      <form  >
        <input
          type="text"
          value={term}
          placeholder="كلمة البحث"
          onChange={(e) => setTerm(e.target.value)}
        />
      <img src="/icons/search.png" width={20} height={20} 
      onClick={handleSubmit}
      />
      </form>
    </div>
  );
};

const ChangeLang = () => {
  return (
    <div className="changeLang">
      <select name="" id="">
        <option value="ar">عربي</option>
        <option value="ur">اردو</option>
      </select>
       </div>
  );
}