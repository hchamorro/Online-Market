import axios from 'axios';

export default {
  createUser: function(userInfo) {
    return axios.post('/api/users/signup', userInfo);
  }
};
