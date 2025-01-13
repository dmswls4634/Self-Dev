import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import '../css/new.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import LoginForm from './LoginForm';
import Throttle from './R095_reactThrottle';
import FloatingPopulationList from './Floating_population/floatingPopulationList';
import Recharts from './Floating_population/rechartsSimpleLineChart';
import FloatingPopulationLineChart from './Floating_population/floatingPopulationListChart';
import FloatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart';
import FloatingPopulationBarChart from './Floating_population/floatingPopulationBarChart';
import FloatingPopulationComposedChart from './Floating_population/floatingPopulationComposedChart';
import FloatingPopulationScatterChart from './Floating_population/floatingPopulationScatterChart';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/> 
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/floatingList' element={<FloatingPopulationList/>}/>
          <Route path='/throttle' element={<Throttle/>}/>
          <Route path='/recharts' element={<Recharts/>}/>
          <Route path='/floatingLine' element={<FloatingPopulationLineChart/>}/>
          <Route path='/floatingArea' element={<FloatingPopulationAreaChart/>}/>
          <Route path='/floatingBar' element={<FloatingPopulationBarChart/>}/>
          <Route path='/floatingComposed' element={<FloatingPopulationComposedChart/>}/>
          <Route path='/*' element={<FloatingPopulationScatterChart/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;