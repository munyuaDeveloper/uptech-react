
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TopNavbar from './components/TopNavbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Service from './components/services/Service';
import pricing from './components/pricing/pricing';
import contact from './components/contact/contact';

function App() {
  return (
    <div className="App">

      <Router>
          <TopNavbar />

          <Header />

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
