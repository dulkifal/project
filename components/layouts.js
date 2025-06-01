import Link from "next/link";
import Navbar from "./navbar";
import { AnalyticsWrapper } from "./analytics";
import s from "./comp.module.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js"
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main dir="rtl" className={s.main}>{children}</main>
      <Footer />
      <AnalyticsWrapper />
    </>
  );
};

export default Layout;

const Header = () => {
  return (
    <header>
       
      <Navbar />
    </header>
  );
};

const Footer = () => {
  return (
    <footer dir="rtl" style={{zIndex: 0}}>
      <div className={s.footer}>
        <div>
          <p>
            الفقه الشافعية هو موقع يهتم بالفقه الشافعية والفقه الإسلامي بشكل عام
            ويهتم بالتوعية والتثقيف والتوجيه والإرشاد والتوجيه والإرشاد والتوجيه
          </p>
          <p style={{textAlign: "center"}}>جميع الحقوق محفوظة لموقع الفقه الشافعية</p>
        </div>
        <div>
          <h3>الموقع</h3>
          <div className={s.footerLinks}>
            <ul>
              <li>
                <Link href="/">الرئيسة</Link>
              </li>
              <li>
                <Link href="/fatwa/ask">اسأل</Link>
              </li>
              <li>
                <Link href="/">نبذة عنا</Link>
              </li>
              <li>
                <Link href="/admin/login">مشرف</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
