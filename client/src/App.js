import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './pages/LogIn';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path={['/', '/signup']} component={Signup} />
          <Route exact path={'/login'} component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;