import React  from "react";
import {NavLink} from 'react-router-dom'


function Layout(props) {
        
    return (<>      
         <div class="container">
  <div class="row">
    <div class="col">
    <h1 className="mar">{props.heading} <strong className="text-danger">Trending Techs</strong></h1>
    <h6>{props.para}</h6>
    <NavLink to={props.contact} className="btn btn-outline-primary">{props.button}</NavLink>
    </div>
    <div class="col">
       <img src={props.img} alt="asd" className="robot" />
    </div>
  </div>
  </div>

    </>);
}

export default Layout