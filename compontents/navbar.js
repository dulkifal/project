import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "./comp.module.css";
import { getCookie } from "../lib/getCookie";

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

 

  const isActive = (r) => {
    if (r === router.pathname) {
      return "active";
    } else {
      return "";
    }
  };
  const toggleNav = () => {
    
    setActive(!active);
  };

  const navLinksData = [
    { title: "الرئيسة", path: "/" },
    { title: "اسأل", path: "/fatwa/ask" },
    { title: "البرامج", path: "/program" },
    { title: "نبذة عنا", path: "/about" },
    { title: "مشرف", path: "/admin/login" },
  ];
 



  return (
    <nav className={s.navbar} dir="rtl">
      <h1> الفقه الشافعية</h1>
      <div className={s.navItems}>
         <div className={s.humburger}>
          <img src="/icons/hamburger.png" alt="" onClick={() => toggleNav()} />
        </div>
       

        <Search />
        {/* add two class to it */}
        
        <div className={`${s.navLinks}  ${active ? s.show : ''}`   }  >
        <ChangeLang />
          {navLinksData.map((link, index) => (
             <Link href={link.path} className={isActive(link.path)} onClick={()=>setActive(!active)}  key={index}>
        {link.title}
      </Link>
          ))}

        </div>
      </div>
    </nav>
  );
};

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
    <div className={s.search}>
      <form>
        <input
          type="text"
          value={term}
          placeholder="كلمة البحث"
          onChange={(e) => setTerm(e.target.value)}
        />
        <img
          src="/icons/search.png"
          width={20}
          height={20}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

const ChangeLang = () => {
  const [lang, setLang] = useState("ar");
useEffect(() => {

  setLang(getCookie("lang"));
}, [])
  return (
    <div className={s.changeLang}  
     
     >
      <select name="" id="" value={lang} onChange={(e)=>
     { document.cookie = `lang=${e.target.value}`,

      window.location.reload()}
      }>
        <option value="ar">عربي</option>
        <option value="ur">اردو</option>
      </select>
    </div>
  );
};
