import React from 'react';

const UserContext = React.createContext({
  loggedIn: false,
  email: '',
  id: '',
  cart: []
});

export default UserContext;
