import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './pages/search';
import SignUpPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={SearchPage}/>
        <Route exact path='/signup' component={SignUpPage}/>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default withRouter(App);
