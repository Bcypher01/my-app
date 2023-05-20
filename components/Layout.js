import Nav from "./Nav";
// import styles from "../styles/Layout.module.css";
import Header from "./Header";
import LandingPageImage from "./LandingPageImage";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>
          <div>
            <LandingPageImage />
          </div>
          <div className="pt-[5vh] px-6 lg:px-32">
            <Nav />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
