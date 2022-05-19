// import PropTypes from 'prop-types'


import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light">

    <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">🅳🅼🅲🅽🅴🆃 </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">🅳🅼🅲🅽🅴🆃 NEWS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown"/>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link to="/business" className="nav-link">Business </Link></li> 
        <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
        <li className="nav-item"><Link to="/general" className="nav-link">General </Link></li> 
        <li className="nav-item"><Link to="/health" className="nav-link">Health </Link></li> 
        <li className="nav-item"><Link to="/science" className="nav-link">Science </Link></li> 
        <li className="nav-item"><Link to="/sports" className="nav-link">Sports </Link></li> 
        <li className="nav-item"><Link to="/technology" className="nav-link">Technology </Link></li>
      </ul>
          
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/">Features</a>
        </li>
        <li className="nav-item"><Link to="/business" className="nav-link">Business </Link></li> 
        <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
        <li className="nav-item"><Link to="/general" className="nav-link">General </Link></li> 
        <li className="nav-item"><Link to="/health" className="nav-link">Health </Link></li> 
        <li className="nav-item"><Link to="/science" className="nav-link">Science </Link></li> 
        <li className="nav-item"><Link to="/sports" className="nav-link">Sports </Link></li> 
        <li className="nav-item"><Link to="/technology" className="nav-link">Technology </Link></li>
      </ul>
    </div>

</nav>
      </>
    )
  }
}

export default navbar
