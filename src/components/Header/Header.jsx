import h from './header.module.css';
import React from 'react';
import logo from './logo.png'
const Header = () => {
return (

<header className={h.header}>
   <img src={logo} alt=""/>
   </header>

);


}

export default Header;


