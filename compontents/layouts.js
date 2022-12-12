const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
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