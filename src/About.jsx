import React from "react";
import {NavLink} from 'react-router-dom';


import Tom from './photos/lic 3.png';
const About=()=>{
    return(<>
    <h1 className="col-10 mx-auto">About Us</h1>

<div className="col-10 mx-auto">
<img src={Tom} alt="Lic"/>
</div>
    <p className="col-10 mx-auto">
        Good Experince  in insurance. IF you want any kind of services.I can suggest you best lic plans according to your age. Please feel free to conmtact me.
    </p>
    <div className="col-10 mx-auto">
    <NavLink to="/contact" className="lastclass ">Contact us</NavLink>
    </div>
    </>);
};
export default About;
