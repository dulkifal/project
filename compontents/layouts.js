import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main dir="rtl">{children}</main>
      <Footer />
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
    <footer>
      <h1>Footer</h1>
    </footer>
  )
}