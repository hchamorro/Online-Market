import axios from 'axios';

// export default {
//   createUser: function(userInfo) {
//     return axios.post('/api/users/signup', userInfo);
//   },

//   logInUser: function(data) {
//     return axios.post('/api/users/login', data);
//   }
// };

const userAPI = {
  createUser: function(userInfo) {
    return axios.post('/api/users/signup', userInfo);
  },

  logInUser: function(data) {
    return axios.post('/api/users/login', data);
  }
};

export default userAPI;
