import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
    <div className="App">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
    </div>
    </Router>
  );
}

export default App;
