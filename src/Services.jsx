import React from "react";
import Card from './Card';
import Sdata from './Sdata.jsx';
const Services=()=>{
    return(<>
    <h1 className="ddy col-10 mx-auto">Services Provided By Me.</h1>
    <div className="row">
    
    {  
        Sdata.map((val,ind)=>{
            return<Card
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                lnkbtn={val.lnkbtn}
                naam={val.naam}
            />
        })
    }
    
    </div>
    
    </>);
};
export default Services;
