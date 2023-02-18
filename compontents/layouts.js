import Navbar from "./navbar";
import { AnalyticsWrapper } from "./analytics";
import s from "./comp.module.css";

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
      {/* footer of copy write */}
      <div className={s.footer}>
        <div>
          <p>
            الفقه الشافعية هو موقع يهتم بالفقه الشافعية والفقه الإسلامي بشكل عام
            ويهتم بالتوعية والتثقيف والتوجيه والإرشاد والتوجيه والإرشاد والتوجيه
          </p>
          <p>جميع الحقوق محفوظة لموقع الفقه الشافعية</p>
        </div>
        <div>
          <h3>الموقع</h3>

          <div className={s.footerLinks}>
            <ul>
              <li>
                <a href="/">الرئيسة</a>
              </li>
              <li>
                <a href="/fatwa/ask">اسأل</a>
              </li>
              <li>
                <a href="/">البرامج</a>
              </li>
              <li>
                <a href="/">نبذة عنا</a>
              </li>
              <li>
                <a href="/admin/login">مشرف</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer  >
  );
};
