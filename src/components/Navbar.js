import { useContext } from 'react';
import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Navbar.css';


function Navbar() {
    const { isUserLogin, userEmail } = useContext(UserContext);
    const [click, setClick] = useState(false);
    //const [dropdown, setDropdown] = useState(false);

    //const handleClick = () => setClick(!click);
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
                <div className='left-navBar'>
                    <Link to='/' className='navigation-logo' onClick={closeMobileMenu}>
                        In the eye of the storm
                        <i className="fa fa-desktop" aria-hidden="true"></i>
                    </Link>
                    <div id="user">
                        {isUserLogin && (
                            <div className='nav-item-logout'>
                                <Link to='/create-hero' className='nav-links-create' onClick={closeMobileMenu}>Create Hero</Link>
                                <span style={{ color: '#fff' }}>Hello {userEmail}</span>
                                <div className='nav-item'> <Link to="/logout" style={{padding: 20}}>Logout</Link></div>
                            </div>
                        )}
                        {!isUserLogin && <li>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>Login</Link>
                        </li>}
                    </div>
                </div>
                <div className='right-navBar'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/class' className='nav-links' onClick={closeMobileMenu}>Hero Class</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
                        </li>
                        <li className='nav-item'><Link to='/catalog' className='nav-links' onClick={closeMobileMenu}>Heroes</Link>
                        </li>
                    </ul>
                    <Button />
                </div>
            </nav>
        </>
    );
}

export default Navbar;