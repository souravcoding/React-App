import React from "react"
import { Redirect, Route, Switch } from "react-router"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Service from "./Service"
import Navbar from "./Navbar"


const App=()=>{
  
return (<>
<Navbar/>

<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/service" component={Service}/>
<Redirect to="/" />
</Switch>

</>)
}

export default App;
