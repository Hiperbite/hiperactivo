import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: any) => {
  return (
    <div className="pages-wrapper" id="start">
      <NavBar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
