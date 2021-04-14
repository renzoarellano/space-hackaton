import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo_bbva_blanco.svg";
import FacebookIcon from "../../assets/images/FB.png";
import InstagramIcon from "../../assets/images/IG.png";
const Header = () => {
  const [scroll, setScroll] = React.useState(false);
  const [sideBar, setSideBar] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  });

  return (
    <React.Fragment>
      <div className={`headerEffect ${scroll ? "activeHeaderEffect" : ""}`}>
        <header className="container">
          <div className="row">
            <div className="col-6 mobileButtonMenu">
              <button onClick={() => setSideBar(!sideBar)}>
                <div className={`bar ${sideBar ? "bar1Effect" : ""}`}></div>
                <div className={`bar ${sideBar ? "bar2Effect" : ""}`}></div>
                <div className={`bar ${sideBar ? "bar3Effect" : ""}`}></div>
              </button>
            </div>
            <div className="col-6 col-md-3 mobileLogo">
              <NavLink exact to="/">
                <img className="logoIcon" src={Logo} alt="Logo Cineviajeros" />
              </NavLink>
            </div>
            <nav className="col-4 col-md-8 col-lg-6">
              {/* <NavLink active="active" to="/">
                Home
              </NavLink> */}
            </nav>
            <div className="col-md-1 col-lg-3 alignEndIcons">
              <a
                href="https://www.facebook.com/bbvaenperu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="Facebook BBVA" />
              </a>
              <a
                href="https://www.instagram.com/bbva_peru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram BBVA" />
              </a>
            </div>
          </div>
        </header>
        <div
          className={`sideBarMobile ${!sideBar ? "sideBarMobileEffect" : ""}`}
          onClick={() => setSideBar(!sideBar)}
        >
          <div className="containerNavHeaderMobile">
            <nav className="col-12">
              {/*  <NavLink
                active="active"
                to="/"
                onClick={() => setSideBar(!sideBar)}
              >
                Home
              </NavLink> */}
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
