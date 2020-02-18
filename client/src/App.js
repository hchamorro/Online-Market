import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={['/', '/signup']} component={Signup} />
      </div>
    </Router>
  );
}

export default App;
