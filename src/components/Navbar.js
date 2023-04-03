import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  //const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*   const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    }; */

  return (
    <>
      <nav className='navibar'>
        <Link to='/' className='navigation-logo' onClick={closeMobileMenu}>
          In the eye of the storm
          <i className="fa fa-desktop" aria-hidden="true"></i>
        </Link>
        <div className='navi-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
          //  onMouseEnter={onMouseEnter}
          //   onMouseLeave={onMouseLeave}
          >
            <Link
              to='/class'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Hero Class
            </Link>

          </li>
          <li className='nav-item'>
            <Link
              to='/create-hero'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Create Hero
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/catalog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Heroes 
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;