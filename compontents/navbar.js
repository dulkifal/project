import Link from "next/link";
import { useRouter } from "next/router";
import {   useState, useContext } from "react";
import s from "./comp.module.css";
import { LangContext } from "../pages/_app";
 
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
    {title:"المقالات",path:"/article"},
    {title: "الفتاوى",path:"/fatwa"},
    {title: "المسائل",path:"/masael"},
    // { title: "البرامج", path: "/program" },
    { title: "نبذة عنا", path: "/about" },
    { title: "مشرف", path: "/admin/login" },
  ];

  return (
    <nav className={s.navbar} dir="rtl">
      <h1>  التفقه</h1>
      <div className={s.navItems}>
        <div className={s.humburger}>
          <img src="/icons/hamburger.png" alt="" onClick={() => toggleNav()} />
        </div>

        <Search />
        {/* add two class to it */}

        <div className={`${s.navLinks}  ${active ? s.show : ""}`}>
          {/* <ChangeLang /> */}
          {navLinksData.map((link, index) => (
            <Link
              href={link.path}
              className={isActive(link.path)}
              onClick={() => setActive(!active)}
              key={index}
            >
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

   const  {lang, setLang} = useContext(LangContext )
  
  
  return (
    <div className={s.changeLang}>
      <select
        name=""
        id=""
        value={lang}
        onChange={(e) => {
          setLang(e.target.value)
        }}
      >
        <option value="ar">عربي</option>
        <option value="ur">اردو</option>
      </select>
    </div>
  );
};
