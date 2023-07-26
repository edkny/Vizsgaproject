import React, { useState } from 'react';
import Logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';
import Icon from '../imgs/icon.png';
import '../styles/Navbar.css';

function Navbar() {

    const [openIcon, setOpenIcon] = useState(false)

    const clickNavbar = () => {
        setOpenIcon(!openIcon);

    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openIcon ? "open" : "close"}>
            <img src={Logo} alt='logo' />
            <div className='hiddenLinks'>
            < Link to="/"> Főoldal </Link>
            < Link to="/menu"> Étlap </Link>
            < Link to="/drink"> Itallap </Link>
            < Link to="/contact"> Kapcsolat </Link>
            </div>
        </div>
        <div className='rightSide'>
            < Link to="/"> Főoldal </Link>
            < Link to="/menu"> Étlap </Link>
            < Link to="/drink"> Itallap </Link>
            < Link to="/contact"> Kapcsolat </Link>
            <button onClick={clickNavbar}>
                <img src={Icon} alt='icon' />
            </button>
        </div>
      
    </div>
  )
}

export default Navbar 
