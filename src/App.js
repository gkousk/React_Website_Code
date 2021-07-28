import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Products from './components/pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/products' component={Products} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
