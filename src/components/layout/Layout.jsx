import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
        <Header />
        <main className="mt-[5.275vw] flex-auto">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout