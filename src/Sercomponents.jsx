import React from "react";
import {NavLink} from "react-router-dom"

function Sercomponents(props) {


    return(<>
          <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h6 className="card-title">{props.title}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
    </>)
  
}

export default Sercomponents