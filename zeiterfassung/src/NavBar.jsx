import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <>
          <nav className="navbar">
            <div className="nav-container">
              <NavLink exact to='/' className="nav-logo">
                Logo
                <i className="fas fa-code"></i>
              </NavLink>
              <li className="nav-item">
                  <NavLink
                    exact
                    to='/showpersonal'
                    activeClassName="active"
                    className="nav-links"
                  >
                 Show Personal
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to='/payment'
                    activeClassName="active"
                    className="nav-links"
                  >
                   Payment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to='/contact'
                    activeClassName="active"
                    className="nav-links"
                  >
                    Contact
                  </NavLink>
                </li>
            </div>
          </nav>
        </>
      );
}
export default NavBar;