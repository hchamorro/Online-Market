import React, { useState, useEffect } from 'react';
import Card from './../components/Card';
import Wrapper from '../components/Wrapper';
import Title from './../components/Title';
import { Input } from './../components/Form';
import ProductContent from './../components/ProductContent';
import API from '../utils';

function Search() {
  let [search, setSearch] = useState([]);
  let [results, setResults] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('this has been handled!', search);
    searchProducts(search.search);
  }

  function searchProducts(query) {
    console.log('this is the query in the search js', query);
    API.productsAPI
      .queryProducts(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Title>Search Products</Title>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="search items"
            onChange={handleInputChange}
          />
        </form>
      </Card>

      <Wrapper>
        <Card name="this will be an item">
          <ProductContent></ProductContent>
        </Card>
      </Wrapper>
    </>
  );
}

export default Search;
