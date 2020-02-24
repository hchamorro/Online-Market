import React, { useEffect, useState } from 'react';
import './App.css';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Search from './pages/Search';
import NavBar from './components/NavBar';
import LocalUserContext from './utils/Context/LocalUserContext';
import AuthDataProvider from './utils/Context/AuthDataProvider';
import { authDataContext } from './utils/Context/AuthDataProvider';

function App() {
  const [localUser, setLocalUser] = useState({
    loggedIn: false,
    email: '',
    id: '',
    cart: []
  });
  const value = { localUser, setLocalUser };

  return (
    <Router>
      <AuthDataProvider>
        <LocalUserContext.Provider value={value}>
          <div className="App">
            {/* do post of is auth
         ?run is Authcompenents: components */}
            <NavBar></NavBar>
            <Switch>
              <Route exact path={['/', '/signup']} component={Signup} />
              <Route exact path={'/login'} component={LogIn} />
              <Route path={'/search'} component={Search} />
            </Switch>
          </div>
        </LocalUserContext.Provider>
      </AuthDataProvider>
    </Router>
  );
}

export default App;
