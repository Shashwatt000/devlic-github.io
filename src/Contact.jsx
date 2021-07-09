import React, { useState } from "react";
const Contact=()=>{
const [data,setData]=useState({
    fname:"",
    phone:""
});
const inputEvent=(event)=>{
    const{name,value}=event.target
setData((preval)=>{
    return{...preval,
    [name]:value};
});
};

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fname} and mobile no is ${data.phone}`);
    };
    return(<><div className="Contactclass col-10 mx-auto">
    <div className="container contact_div">
    <div className="row gx-4">
    <div className="col-md-6 col-10 mx-auto">
    <h1 style={{color: "blue"}}>Contact Us</h1>
    <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="Name" class="hisar" id="exampleInputEmail1"
    name="fname"
    value={Date.fname}
    onChange={inputEvent}
     placeholder="Apka shub naam" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="Mobile">Phone-No.</label>
    <input type="num" class="hansi" 
     name="phone"
    value={data.phone}
    onChange={inputEvent}
    placeholder="9999-999-999"  id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="contactbtn">Submit</button>
</form>
    </div>
    </div>
    </div>
    </div>
    </>);
};
export default Contact;