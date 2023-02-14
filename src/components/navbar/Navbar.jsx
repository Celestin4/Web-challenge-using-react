import React, {useState} from 'react';
import './navbar.css';
import Logo from '../../assets/logo.svg';


const Navbar = () => {
  const [toggleMenu, setToggleMwnu] = useState(false);
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar_links'>
        <div className='gpt3_navbar_links_logo'>
          <img src={Logo} alt="Logo" />
        </div>
         <div className='gpt3_navbar_links_container'>
          <p><a href="#dsas">Home</a></p>
          <p><a href="#gp3">WhatGPT3</a></p>
          <p><a href="#sdss">Open AI</a></p>
          <p><a href="#dc">Case studies</a></p>
          <p><a href="#dd">Library</a></p>
         </div>
        <div className='gpt3_navbar_sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='gpt3_navbar_menu'>

        </div>
      </div>
     
    </div>
  )
}

export default Navbar