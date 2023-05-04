import './App.css'
import React from 'react'

import fblogo from "./images/facebook.png"
import insave from "./images/insave.png"

function App() {

  return (
    <div className="container">
      <div className="page">
        <img src={insave}alt="img-insta" className='insave' />
      <div className="pageone">

        <div className="first-container">
          <h1 className="title">Instagram</h1>
          <input type="text" className="username inpt" placeholder='Phone, username, or email address' />
          <input type="text" className="password inpt" placeholder='Password'/>
          <button className="loginbtn">Log in</button>
          <p className="or">OR</p>
          <div className="facebook">
            <img src={fblogo} alt="fb" className="fb" />
            <p className='logfb'>Log in with facebook</p>
          </div>
            <p className="pass">Forgotten your password?</p>
        </div>

        <div className="second-container">
          <p className="signup">Don't have an account? <span>Sign up</span> </p>
        </div>

        <div className="third-container">
          <p className="get-the-app">Get the app.</p>
        </div>

        <div className="forth-container">
          <img className='app appone' src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="app link" />
          <img className='app' src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="app link" />
        </div>

      </div>
      </div>
    </div>    
  )
}

export default App
