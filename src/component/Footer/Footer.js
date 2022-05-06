import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <p>Questions? Call 1-866-579-7172</p>
            <div className='footer-cols'>
                <ul>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a>Investor Relations</a>
                    </li>
                    <li>
                        <a>Corporate Information</a>
                    </li>
                    <li>
                        <a>Netflix Originals</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Help Center</a>
                    </li>
                    <li>
                        <a>Jobs</a>
                    </li>
                    <li>
                        <a>Term of Use</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Account</a>
                    </li>
                    <li>
                        <a>Redeem Gift Cards</a>
                    </li>
                    <li>
                        <a>Privacy</a>
                    </li>
                    <li>
                        <a>Speed Test</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Media Center</a>
                    </li>
                    <li>
                        <a>Buy Gift Cards</a>
                    </li>
                    <li>
                        <a>Cookie Preferences</a>
                    </li>
                    <li>
                        <a>Legal Notices</a>
                    </li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer