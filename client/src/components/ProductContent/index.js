import React from 'react';
import './style.css';

function ProductContent(props) {
  return (
    <>
      hello world
      <div className="img-container">
        <img
          alt="no pics yet"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1319/1319454_ra.jpg"
        ></img>
      </div>
      <ul>
        <li>
          <strong>
            {props.name}Digipower - Quickpod Extreme Monopod - Black
          </strong>
        </li>
        <li> {props.price} $39.99 </li>
      </ul>
      <div className="details-btn">
        <span onClick={props.onClick} className="card-details">
          More Details
        </span>
        <button
          onClick={props.onClick}
          className={`card-btn ${props['data-value']}`}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
export default ProductContent;
