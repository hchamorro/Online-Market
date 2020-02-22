import React, { useState, useEffect } from 'react';
import Card from './../components/Card';
import Wrapper from '../components/Wrapper';
import Title from './../components/Title';
import { Input } from './../components/Form';
import ProductContent from './../components/ProductContent';
import API from '../utils/API';
import DetailDiv from './../components/DetailDiv';
import { Link, Route } from 'react-router-dom';

function Search(props) {
  let [search, setSearch] = useState([]);
  let [results, setResults] = useState([]);

  useEffect(() => {
    setSearch('');
  }, []);

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
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Title>Search Products {console.log(results)}</Title>
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
          <ProductContent
            name="Digipower - Quickpod Extreme Monopod - Black"
            price="39.99"
            imgURL="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1319/1319454_ra.jpg"
          ></ProductContent>
          <div className="details-btn">
            <Link to={`${props.match.url}/details`} role="button">
              More Details..
            </Link>{' '}
            <button
              onClick={props.onClick}
              className={`card-btn ${props['data-value']}`}
            >
              Add to Cart
            </button>
          </div>
          <Route
            exact
            path={`${props.match.url}/details`}
            component={DetailDiv}
          />
        </Card>
        {results.map(result => (
          <Card>
            <ProductContent
              name={result.name}
              price={result.regularPrice}
              imgURL={result.largeImage}
              key={result.productId}
              id={result.id}
            />
            <div className="details-btn">
              <Link
                to={`${props.match.url}/details/${result.productId}`}
                role="button"
              >
                More Details..
              </Link>{' '}
              <button
                onClick={props.onClick}
                className={`card-btn ${props['data-value']}`}
              >
                Add to Cart
              </button>
            </div>
            <Route
              exact
              path={`${props.match.url}/details/:id`}
              component={DetailDiv}
            />
          </Card>
        ))}
      </Wrapper>
    </>
  );
}

export default Search;
