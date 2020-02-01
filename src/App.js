
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Basket from './components/Basket';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesList from './components/ServicesList';
import Default from './components/Default';
import Contacts from './components/Contacts';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Navbar/>
        <Switch>
          <Route path="/services" component={ServicesList}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/basket" component={Basket}/>
          <Route path="/" component={HomePage}/>  
          <Route component={Default}/> 
        </Switch>
      </React.Fragment>
    );
  }
}

  

export default App;
