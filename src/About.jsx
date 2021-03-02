import React from "react";
// import {NavLink} from 'react-router-dom'
import Layout from "./Layout"
import Footer from "./Footer"
function About(props) {
    
    return(<>
        
        <Layout  heading="Welcome To About Page " para="
        We are the team of talented devloper creating website" 
        contact="/contact"
        button="Contact Us"  
        img="https://cdn.pixabay.com/photo/2015/10/30/10/41/internet-1013673_960_720.jpg" class="laptop"/>
           
           <Footer/>
  
    </>)
  
}

export default About