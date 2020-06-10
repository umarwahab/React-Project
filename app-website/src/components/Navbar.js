import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                

                <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
  {/* Text Logo - Use this if you don't have a graphic logo */}
  {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Leno</a> */}
  {/* Image Logo */}
  <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> 
  {/* Mobile Menu Toggle Button */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-awesome fas fa-bars" />
    <span className="navbar-toggler-awesome fas fa-times" />
  </button>
  {/* end of mobile menu toggle button */}
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#features">FEATURES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#preview">PREVIEW</a>
      </li>
      {/* Dropdown Menu */}          
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle page-scroll" href="#details" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">DETAILS</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
          <div className="dropdown-items-divide-hr" />
          <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
        </div>
      </li>
      {/* end of dropdown menu */}
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#contact">CONTACT</a>
      </li>
    </ul>
    <span className="nav-item social-icons">
      <span className="fa-stack">
        <a href="#your-link">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-stack-1x" />
        </a>
      </span>
      <span className="fa-stack">
        <a href="#your-link">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-twitter fa-stack-1x" />
        </a>
      </span>
    </span>
  </div>
</nav> {/* end of navbar */}




            </div>
        );
    }
}

export default Navbar;
