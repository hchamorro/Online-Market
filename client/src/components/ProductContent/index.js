import React from 'react';
import './style.css';
import { PromiseProvider } from 'mongoose';
import DetailDiv from '../DetailDiv';
import { Link, Route } from 'react-router-dom';

function ProductContent(props) {
  return (
    <>
      <div className="img-container" key={props.key} id={props.id}>
        <img
          alt="no pics yet"
          src={props.imgURL}
          style={{ height: '125px' }}
        ></img>
      </div>
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
        <li>${props.price} </li>
      </ul>
      {/* <div className="details-btn">
        <Link to={`${props.match.url}/details`} role="button">
          More Details..
        </Link>{' '}
        <button
          onClick={props.onClick}
          className={`card-btn ${props['data-value']}`}
        >
          Add to Cart
        </button>
        <Route
          exact
          path={`${props.match.url}/details`}
          component={DetailDiv}
        />
      </div> */}
    </>
  );
}
export default ProductContent;
