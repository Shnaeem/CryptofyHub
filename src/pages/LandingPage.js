import React from "react"
import { Link } from "react-router-dom"


function LandingPage() {

  return (
    <div className="container">
      <div className="home" >
        <div className="text-container">
          <h2>Welcome to Cryptofy Hub</h2>
          <div  className="button-container">
            <Link to="/Aboutus"><button className="landButton">Learn About Us</button></Link>
            <Link to="/Lodc"><button className="landButton">Crypto Currency List</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;