import React from 'react';

const LocalUserContext = React.createContext({
  loggedIn: false,
  email: '',
  id: '',
  setUser: () => {},
  cart: []
});

export default LocalUserContext;
