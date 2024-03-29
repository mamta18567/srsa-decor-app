import { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons';
import NavMenu from "../components/nav-menu/navMenu"
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div>
        <div className={`header ${scrolling || showMenu ? 'scrolled' : ''}`}>
          {showMenu ? (<NavMenu
            setShowMenu={setShowMenu}
          />) :
            <>
              <div className="header-top">
                <div className="top-left">
                  <a href="tel:8287814994, 8527950443">8287814994, 8527950443</a>
                  <a href="mailto:srsadecor@gmail.com">srsadecor@gmail.com</a>
                </div>
                <div className="top-right">
                  <a href="https://www.facebook.com/SRSADECOR/"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="https://www.instagram.com/srsadecor/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
              <div className="horizontal-line">
                <hr />
              </div>
              <div className="header-container">
                <div>
                  <img src={logo} alt="Logo" />
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <ul className={`nav-container ${showMenu ? 'show-menu' : ''}`}>
                  <li><Link state={""} to={"/"} onClick={handleAboutClick}>Home</Link></li>
                  <li><Link state={""} to={"/about"} onClick={handleAboutClick}>About</Link></li>
                  <li><Link state={""} to={"/services"} onClick={handleAboutClick}>Services</Link></li>
                  <li><Link state={""} to={"/projects"} onClick={handleAboutClick}>Projects</Link></li>
                  <li className="dropdown">
                    <Link onClick={handleAboutClick}>Blog <FontAwesomeIcon icon={faAngleDownSolid} /></Link>
                    <div className="dropdown-content">
                      <div>
                        <Link state={""} to={"/blog-home"}>Blog Home</Link>
                      </div>
                      <div>
                        <a href="">Blog Single</a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a href="">Pages <FontAwesomeIcon icon={faAngleDownSolid} /></a>
                    <div className="dropdown-content">
                      <div>
                        <a href="">Project Details</a>
                      </div>
                      <div>
                        <a href="">Elements</a>
                      </div>
                      <div className="dd-list">
                        <a href="#" className="level2">Level 2<span className="dropdown-arrow">&gt;</span></a>
                      </div>
                      {/* <div className="dropdown-sub-content">
                      <div>
                        <a href="">Item One</a>
                      </div>
                      <div>
                        <a href="">Item Two</a>
                      </div>
                    </div> */}
                    </div>
                  </li>
                  <li><Link state={""} to={"/contact"} onClick={handleAboutClick}>Contact</Link></li>
                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Header;
