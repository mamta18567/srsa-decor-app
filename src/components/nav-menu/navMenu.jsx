/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons';
import "./navMenu.css"

const NavMenu = ({ setShowMenu }) => {
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [level2, setLevel2] = useState(false)

  const toggleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  const togglelevel2 = () => {
    setLevel2(!level2)
  }

  return (
    <>
      <div className='nav-menu'>
        <ul className='sidebar'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Projects</a></li>
          <li className={blogDropdownOpen ? "dropdown-open" : ""}>
            <a href="#" onClick={toggleBlogDropdown}>Blog <FontAwesomeIcon className='dropdown-icon' icon={faAngleDownSolid} /></a>
            <div className={blogDropdownOpen ? "open" : ""}>
              <div>
                {blogDropdownOpen ? (
                  <div className='blog-content'>
                    <div>
                      <a href="">Blog Home</a>
                    </div>
                    <div>
                      <a href="">Blog Single</a>
                    </div>
                  </div>
                ) : ""}
              </div>
            </div>
          </li>
          <li className={pagesDropdownOpen ? "dropdown-open" : ""}>
            <a href="#" onClick={togglePagesDropdown}>Pages <FontAwesomeIcon className='dropdown-icon' icon={faAngleDownSolid} /></a>
            <div className={pagesDropdownOpen ? "" : ""}>
              {pagesDropdownOpen ? (
                <div className='pages-content'>
                  <div>
                    <a href="">Project Details</a>
                  </div>
                  <div>
                    <a href="">Elements</a>
                  </div>
                  <div className="level2" onClick={togglelevel2}>
                    <a href="#" className="">Level 2<FontAwesomeIcon className='dropdown-icon' icon={faAngleDownSolid} /></a>
                    {level2 ? (<div className="level2-content">
                      <div>
                        <a href="">Item One</a>
                      </div>
                      <div>
                        <a href="">Item Two</a>
                      </div>
                    </div>) : ""}
                  </div>

                </div>
              ) : ""}
            </div>
          </li>
          <li><a href="">Contact</a></li>
        </ul>
        <div className='icon'>
          <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(false)} />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
