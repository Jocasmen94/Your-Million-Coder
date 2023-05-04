import React from 'react'
import './App.css'

import twitlogo from "./image/twitter.png"
import googlelogo from "./image/search.png"
import profilelogo from "./image/profile.png"
import applelogo from "./image/apple.png"

function App() {

  return (
    <div className="container">
        <img className='twitterimg' src={twitlogo} alt="twitlogo" />
      <div className="up">
        <h2 className="heading">Sign in to Twitter</h2>
        <div className="google">
          <div className="left">
            <img src={profilelogo} alt="" className="profile" />
            <div className="google-sign">
              <p className="line-one">Sign in as User</p>
              <p className="line-two">username.example@gmail.com</p>
            </div>
            
          </div>
          <div className="right">
            <img className='google-logo' src={googlelogo} alt="ggl" />
          </div>
        </div>
        <div className="apple">
          <img className='apple-logo' src={applelogo} alt="applelogo" />
          <p className="apple-line">Sign in with Apple</p>
        </div>
      </div>
      <p className="or">or</p>
      <div className="down">
        <input type="text" placeholder='Phone, email, or username' />
        <button className="next">Next</button>
        <button className="password">Forgot password?</button>
      </div>
    </div>
  )
}

export default App
