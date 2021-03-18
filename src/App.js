import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Lodc from './pages/Lodc';
import PostDetails from './components/PostDetails'
import './MainCss/custom.css'


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <nav className="Navbar">
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


              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Lodc" component={Lodc} />
                <Route exact path="/Faqs" component={Faqs} />
                <Route exact path="/Aboutus" component={Aboutus} />
                <Route exact path="/postdetails" component={PostDetails} />
                <Redirect to="/" />
              </Switch>

            </main>
            <footer className="footer">
              <p>Copyright &#169; 2021, Naeem Shafi, Nashid Chowdhury & Zipporah Najar </p>
            </footer>
          </div>
        </div>
      </div>
    </Router >

  );
}





export default App;