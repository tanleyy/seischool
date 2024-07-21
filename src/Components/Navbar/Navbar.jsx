import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] =useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) :setMobileMenu(true);
    
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Curriculum</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>School</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Experiences </Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Log In </Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
