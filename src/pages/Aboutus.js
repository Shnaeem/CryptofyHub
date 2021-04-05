import '../MainCss/aboutus.css';

function Aboutus() {

  return (
    <div className="aboutus-container">
      <h1 className="aboutus-heading"> About Us</h1>
     <div className="conts">
        <div className="left-container">
          <div className="about">
            <h3>Who are we?</h3>
            <p>CryptofyHub is a digital currency platform. User’s can check up-to-date digital currency prices. Coinspot is the most up to date and intuitive digital currency platform where users can check for latest digital currency rates.
            </p>
          </div>
          <div className="features">
            <h3>Our Features</h3>
            <ul className="features-list">
              <li>Trending Top 7 Cryptos</li>
              <li>Display list of most popular digital currency</li>
              <li>Display details of individual currency</li>
              <li>FAQ for beginners</li>
            </ul>
          </div>
        </div>  
        <div className="developers">
          <h3>Developers:</h3>
          <ul>
            <li>Naeem</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>

          <ul >
            <li>Zipporah</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>

        
          <ul >
          
            <li>Nashid</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Aboutus;