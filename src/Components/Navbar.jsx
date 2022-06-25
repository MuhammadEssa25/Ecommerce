import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Login} from './Buttons/Login';
import {Signup} from './Buttons/Signup';
export const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand mx-auto text-black fw-bold fs-4" to="/">Ecommerce</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons"></div>
              <Login/>
              <Signup/>
              <NavLink to="/cart" className="btn btn-outline-secondary ms-2"> <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;