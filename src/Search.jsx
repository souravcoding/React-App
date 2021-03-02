import React, { useState } from "react";
import Img from "./Img";

function Search() {
   const [img,up]=useState()

   const fun=(e)=>{
        up(e.target.value)
   }
      
    return (<>      

            <input placeholder="search image" value={img} onChange={fun} / >
            {(img==="")?null:(<Img images={img}/>)}
    </>);
}

export default Search