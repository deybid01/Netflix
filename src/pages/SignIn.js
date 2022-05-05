import React from 'react';
import CheckBox from './CheckBox';
import logo from './NetFlixLogo.png';
import './SignIn.css';

function SignIn() {
return(

	<div className='showcase1'>
	    <a href="/" ><img src= {logo} alt="logo"/> </a>
      <div className="login-box">
	    <h1 className="head">Sign In</h1>

	    <div className="textbox">
	
		    <input type="text" placeholder="Email or Phone Number" name="" className="color"></input>
      </div>
	
	<div className="textbox">
		
		<input type="password" placeholder="Password" name="" className="color"></input>
        </div>
        
	
		<form method="get" action="/netflix-show"> 
    <button className="btn2">Sign In</button>
    </form>
    <CheckBox /> 
    <h className="color">Remember me</h>
    <h5 className="text-color">
      New to Netflix? 
        </h5>
    </div>			
    </div>       
                   
)
}

export default SignIn;