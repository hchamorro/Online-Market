import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';
import LocalUserContext from '../utils/Context/LocalUserContext';
import useAuthDataContext from '../utils/Context/AuthDataProvider';

function LogIn({ history }) {
  const [formInfo, setFormInfo] = useState({});
  const { user, onLogin, onLogout } = useAuthDataContext();

  const [localUser, setLocalUser] = useState({
    loggedIn: false,
    email: '',
    id: '',
    cart: []
  });

  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('ive been clicked!');
    if (formInfo.password && formInfo.email) {
      API.userAPI
        .logInUser({
          password: formInfo.password,
          email: formInfo.email
        })
        .then(res => {
          setLocalUser({
            loggedIn: true,
            id: res.data.user._id,
            email: res.data.user.email,
            cart: res.data.user.cart
          });
          onLogin(res.data);
          // history.push('/search'),
        })
        .catch(setError, console.log(error));
    }
  }

  return (
    <div>
      {console.log('this is the user at any state', user)}
      <Card name="Log In">
        <form>
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="email"
          />
          <Input
            onChange={handleInputChange}
            name="password"
            placeholder="password"
          />
          <FormBtn
            disable={!(formInfo.email && formInfo.password)}
            onClick={handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </Card>
    </div>
  );
}

export default LogIn;
