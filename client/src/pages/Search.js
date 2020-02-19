import React, { useState, useEffect } from 'react';
import Card from './../components/Card';
import Wrapper from '../components/Wrapper';
import Title from './../components/Title';
import { Input } from './../components/Form';
import ProductContent from './../components/ProductContent';

function Search() {
  let [search, setSearch] = useState([]);
  let [results, setResults] = useState([]);

  function handleInputChange(e) {
    const searchInput = e.target.value;
    console.log('I am inside the search bar', searchInput);
  }

  return (
    <>
      <Title>Search Products</Title>
      <Card>
        <form>
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
