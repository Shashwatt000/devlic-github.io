import React from "react";
import web from "../src/photos/dev.JPG";
const Home=()=>{
    return(
        <>
        <div className="body_home">
        <section >
        <h1 class="heading_home">Life Insurance is Compulsory </h1>
<div class="home_img">
    <img src={web} alt="Agent" height="400px" width="400px"/>
</div>
        </section>
        </div>
        </>
    );
};
export default Home;

