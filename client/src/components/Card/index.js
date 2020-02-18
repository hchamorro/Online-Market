import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <h3>{props.name}</h3>
      </div>
      {props.children}
    </div>
  );
}

export default Card;
