import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from "./NetFlixLogo.png";
import image1 from "./NetflixAvatar.png";
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    const [toggled, setToggled] = useState(false);

    const toggleImage = () => setToggled(!toggled);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>

        <img 
            className='nav__logo'
            src={image}
            alt=" Netflix Logo"
        />
        <img onClick={toggleImage} 
            className='nav__avatar'
            src={image1}
            alt=" Netflix Logo"
        />
        {toggled && 
            <Link to="/" className='btn1 btn-rounded'>
                Sign Out
            </Link>
        }
    </div>
  )
}

export default Nav