import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Input, FormBtn } from '../components/Form';
import API from '../utils';

function LogIn() {
  const [formInfo, setFormInfo] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(`this is the name and value of inputs.....  ${name}: ${value}`);
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
        .then(res => console.log('log in successful'))
        .catch(err => console.log(err));
    }
  }

  console.log('this is whats in the form info', formInfo);

  return (
    <div>
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
