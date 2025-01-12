import React, { Component } from 'react';
import Header from './Header/Header';
import { Routes, Route } from "react-router-dom";
import Footer from './Footer/Footer';
import '../css/new.css';
import Throttle from './R095_reactThrottle'
import LoginForm from './LoginForm';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/> 
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/*' element={<Throttle/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;