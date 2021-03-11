import './App.css';
import './MainCss/custom.css'
import {Link, Route} from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import Home from './components/Pages/Home';
import Lodc from './components/Pages/Lodc';
import Faqs from './components/Pages/Faqs';
import Aboutus from './components/Pages/Aboutus';

function App() {
  return (
    <div className = "App">
      <div className="page-container">
          <nav className = "Navbar">
            <li>
              <Link exact to="/LandingPage">Icon</Link>
            </li>
            <li>
              <Link exact to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Lodc">List of Digital Currency</Link>
            </li>
            <li>
              <Link to="/Faqs">FAQS</Link>
            </li>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
          </nav>
          <div className="content-wrap">
            <main>
              <Route exact path="/LandingPage" component={LandingPage} />
              <Route exact path="/Home" component={Home} />
              <Route path="/Lodc" component={Lodc} />
              <Route path="/Faqs" component={Faqs} />
              <Route path="/Aboutus" component={Aboutus} />
            </main>
            <footer className="footer">
              <p>Copyight &#169; Naeem Shafi, Nasheed Chowdhary && Zipporah Najar 2021</p>
            </footer>
          </div>
      </div>
    </div>
      
    
  );
}

export default App;
