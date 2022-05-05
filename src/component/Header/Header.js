import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import image from "./NetFlixLogo.png";

const Header = () => {
  return (
    <header className='showcase'>
        <div className='showcase-top'>
            <img src={image} alt="logo" />
            <Link to="/sign-in" className="btn btn-rounded">
                Sign In
            </Link>
        </div>
        <div className='showcase-content'>
            <h1>Unlimited Movies, TV Shows and more</h1>
            <p>Watch anywhere. Cancel Anytime</p>
            <Link to="/netflix-show" className='btn btn-xl'>
                Watch Free For 30 Days
                <i className='fas fa-chevron-right btn-icon'></i>
            </Link>
        </div>
    </header>
  )
}

export default Header