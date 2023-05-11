import React from 'react'
import './App.css'
import menu from "./assets/menu (2).png"
import option from "./assets/option (1).png"
import search from "./assets/search.png"
import rainyday from "./assets/rainy-day.png"
import rainfall from "./assets/rainfall.png"
import wind from "./assets/wind.png"
import humidity from "./assets/humidity.png"
import sun from "./assets/sun.png"
import cloud from "./assets/cloud.png"

function App() {

  return (
    <div className="container">
      <div className="mobile">
        <div className="navbar">
          <img src={search} alt="" className="one-l" />
          <img src={option} alt="" className="one-l" />
          <img src={menu} alt="" className="one-l" />
        </div>
        <div className="place">
          <p className="title">Snowhall, Decaster</p>
          <p className="subtitle">MAY, THU 11</p>
        </div>
        <div className="temp">
          <img src={rainyday} alt="" className='rainyday' />
          <p className='deg'>19°c</p>
        </div>

        <div className="report">
          <div className="item">
            <img src={rainfall} alt="" />
            <p>3cm</p>
          </div>
          <div className="item">
            <img src={wind} alt="" />
            <p>18km/hour</p>
          </div>
          <div className="item">
            <img src={humidity} alt="" />
            <p>60%</p>
          </div>
        </div>

        <div className="day">
          <p className="today">Today</p>
          <p className="today">Tomorrow</p>
          <p className="today">Next 7 Days</p>
        </div>

        <div className="cast">
          <div className="news">
            <p>12.00</p>
            <img src={cloud} alt="" />
            <p>20°c</p>
          </div>
          <div className="news">
            <p>12.00</p>
            <img src={sun} alt="" />
            <p>20°c</p>
          </div>
          <div className="news">
            <p>12.00</p>
            <img src={cloud} alt="" />
            <p>20°c</p>
          </div>
          <div className="news">
            <p>12.00</p>
            <img src={sun} alt="" />
            <p>20°c</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
