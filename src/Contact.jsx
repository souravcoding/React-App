import React, { useState } from "react"
import Footer from "./Footer"

const Contact=()=>{
    const [values,updater]=useState({
        name:"",
        phone:"",
        mail:"",
        text:""
    })

   const submitted=(e)=>{
       let n=e.target.name
       let v=e.target.value
       updater((old)=>{
           return {...old,[n]:v}
       })

    //    alert(values.name)
   }

   const subm=()=>{
       alert(`My name is ${values.name} my mobile number is ${values.phone} my mail id is ${values.mail}  and i want to say that ${values.text}`)
   }

    return (<>
        <h1 className="my-5 text-center">Contact Us</h1>
        <div className="container">
        <form onSubmit={subm}>
             <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" name="name" value={values.name} onChange={submitted} />
             </div>
             <div class="form-group">
              <label for="exampleFormControlInput1">Contact Number</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact number" name="phone" value={values.phone} onChange={submitted}/>
             </div>
             <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="mail" value={values.mail} onChange={submitted}/>
             </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="text" value={values.text} onChange={submitted}></textarea>
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        </div>
    <Footer/>
    </>)
}
export default Contact