import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";
import '../css/new.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import LoginForm from './LoginForm';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';
import Register from './Register/Register';
import PwChangeForm from './PwChangeForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid') 
      , token2 : cookie.load('username') 
    })
    .then( response => {
        this.state.userid = response.data.token1
        let password = cookie.load('userpassword')
        if(password !== undefined){
          axios.post('/api/LoginForm?type=SessionSignin', {
            is_Email: this.state.userid,
            is_Token : password
          })
          .then( response => {
            if(response.data.json[0].useremail === undefined){
              this.noPermission()
            }
          })
          .catch( error => {
            this.noPermission()
          });
        }else{
          this.noPermission()
        }
    })
    .catch( response => this.noPermission());
  }

  noPermission = (e) => {
    if(window.location.hash != 'nocookie'){
      this.remove_cookie();
      window.location.href = '/login/#nocookie';
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render () {
    return (
      <div className="App">
        <Header/> 
        <Routes>
          <Route path='/*' element={<LoginForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/SoftwareList' element={<SoftwareList/>}/>
          <Route path='/SoftwareView/:swtcode' element={<SoftwareView/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/PwChangeForm/:email/:token' element={<PwChangeForm/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;