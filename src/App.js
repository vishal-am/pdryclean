// Packages import
import React, { Component } from 'react';
import './App.css';


//component imports below--
import Login from '../src/components/auth/Login';
import Home from './components/main/Home';

//front-end library below--
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'rsuite/dist/styles/rsuite-default.css'

//Contexts import
import DataContext from '../src/components/context/DataContext'


//Config import 
import config from '../src/env/config'

class App extends Component {

  state = { 
    isLoggedIn:false,
    userType:1,  //means no user
    data:{}
  }
  

  componentDidMount = ()=>{
    let token  = localStorage.getItem('currentUser')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    config.currentUser = currentUser;
    this.setState({
      isLoggedIn:token?true:false,
      data:currentUser
    })
  }

  handleLoginChange=(e)=>{
    this.setState({
      isLoggedIn:e
    })
  }
  handleDataChange=(e)=>{
    this.setState({
      data:e
    })
  }

  
  
  render() {  
      return ( 
    
    <DataContext.Provider 
      value={{
        data:this.state,
        handleLoginChange:this.handleLoginChange,
        handleDataChange:this.handleDataChange
        }}>
      {this.state.isLoggedIn?<Home/>:<Login/>}
    </DataContext.Provider> );
  }
}
 
export default App;