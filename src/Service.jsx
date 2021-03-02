import React from "react";
import Sercomponents from "./Sercomponents"

import Card from "./Card"
function Service(props) {


    return(<>   
               <div class="container my-5">
                <div class="row">
                {Card.map((curv,index)=>{
                    return <Sercomponents img={curv.img} title={curv.title} key={index}/>
                })}
                </div>
                </div>
               
                
                
                
    </>)
  
}

export default Service