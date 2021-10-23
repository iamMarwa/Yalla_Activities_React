import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages';
import RegistrationScreen from './pages/RegistrationScreen';
import LayoutRoute from './LayoutRoute';
import AboutScreen from './pages/AboutScreen';
import ActivitiesScreen from './pages/ActivitiesScreen';
import CategoryScreen from './pages/CategoryScreen';
import Navbar from './components/Navbar';
import ListingScreen from './ListingScreen';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen  from './pages/ProfileScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" component={Home} exact />
        <LayoutRoute path="/signin" exact={true} component={RegistrationScreen}  />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        <LayoutRoute path="/category" exact={true} component={CategoryScreen} />
        <LayoutRoute path="/activities" exact={true} component={ActivitiesScreen} />
        <LayoutRoute path="/listing" exact={true} component={ListingScreen} />
        <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
        </Switch>

      
    </BrowserRouter>
  );
}

export default App;
