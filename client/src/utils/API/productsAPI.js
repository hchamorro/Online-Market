import axios from 'axios';

const productAPI = {
  queryProducts: function(search) {
    console.log('in the products API looking for search', search);
    return axios.get(`/api/products/?q=${search}`);
  }
};

export default productAPI;
