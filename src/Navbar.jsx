import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(props) {

    return (<>
 <div class="col-lg-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-lightstar ">
  <div className="container-fluid">
    <NavLink className="brand" to="/">Trending Tech's</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 ml-auto mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" exact activeClassName="its_active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" exact activeClassName="its_active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" exact activeClassName="its_active" aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" exact activeClassName="its_active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      
    
      </ul>
      
    </div>
  </div>
</nav>
</div>
    </>)
  
}

export default Navbar