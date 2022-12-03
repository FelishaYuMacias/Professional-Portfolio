import React, {useState} from 'react';
import cover from './assets/cover-image.jpg'
import './assets/style.css'

function Header() {

    return (
      <div>
        <header className=" header flex-row space-between px-1">
          <h1 className='header-h1'>Felisha Yu-Macias</h1>
          <img className="cover-img" src={cover} alt="boockshelf"></img>
        </header>
      </div>
  );
  }
  
  export default Header;
  