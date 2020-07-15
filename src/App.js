import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './pages/search';
import SignUpPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/profile'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={SearchPage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/profile' component={ProfilePage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default withRouter(App);
