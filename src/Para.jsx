import React from "react";
import {NavLink} from "react-router-dom"



function Para(){
   
    return (<>
        
        <NavLink to="/" activeClassName="active_class">Heading</NavLink>
        <NavLink to="/note" activeClassName="active_class">Notes</NavLink>
        <NavLink to="/a/sourav/sharma" activeClassName="active_class">Amzon</NavLink>
        <NavLink to="/search" activeClassName="active_class">Search</NavLink>    </>)
}

export default Para