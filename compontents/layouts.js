import Navbar from "./navbar"
import { AnalyticsWrapper } from "./analytics"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main dir="rtl">{children}</main>
      <Footer />
      <AnalyticsWrapper />
    </>
  )
}
export default Layout

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  )
}

const Footer = () => {
  return (
    <footer dir="rtl">
      {/* footer of copy write */}
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content__left">
            <div className="footer__content__left__logo">
              {/* <img src="/icons/logo.png" alt="logo" /> */}
            </div>
            <div className="footer__content__left__text">
              <p>
                الفقه الشافعية هو موقع يهتم بالفقه الشافعية والفقه الإسلامي بشكل عام
                ويهتم بالتوعية والتثقيف والتوجيه والإرشاد والتوجيه والإرشاد والتوجيه
                </p>
            </div>
          </div>
          <div className="footer__content__right">
            <div className="footer__content__right__title">
              <h3>الموقع</h3>
            </div>
            <div className="footer__content__right__links">
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
      </div>


      
    </footer>
  )
}