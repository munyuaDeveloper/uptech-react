
import './App.css';
import './css/owl.carousel.css'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Service from './components/services/Service';
import pricing from './components/pricing/pricing';
import contact from './components/contact/contact';
import NavbarSlider from "./components/NavbarSlider";

function App() {
  return (
    <div className="App">

      <Router>

          <Route path='/' exact component={Home}></Route>

          <Route path='/about' component={AboutUs}></Route>

          <Route path='/service' component={Service}></Route>

          <Route path='/pricing' component={pricing}></Route>

          <Route path='/contact' component={contact}></Route>

          <Footer/>
      </Router>
    </div>
  );
}

export default App;
