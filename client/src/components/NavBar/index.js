import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className={'navbar-brand'} to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === '/login'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === '/signup'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className={
                window.location.pathname === '/cart'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
