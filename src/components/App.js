import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import '../css/new.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import LoginForm from './LoginForm';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/> 
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/*' element={<SoftwareList/>}/>
          <Route path='/SoftwareView/:swtcode' element={<SoftwareView/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;