import React from 'react';
import { Link } from 'react-router-dom';

function DetailDiv(props) {
  return (
    <div>
      <p>
        {console.log('i should be on the scren')}
        {props.details}
        here are a lot of details
        lalaksdjfoaiejrofkldjfoaiurekfjadsoifuapwkfadpiufapfj;dpofapof
      </p>
      <Link to="/search" role="button">
        Hide
      </Link>
    </div>
  );
}

export default DetailDiv;
