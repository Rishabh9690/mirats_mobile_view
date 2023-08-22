import React from "react";
import icon from "./image/icon.svg";
import "./navBar.css";

const Navbar=()=>{

    const homePage =()=>{
        window.location.replace("/");
    }
    const aboutPage =()=>{
        window.location.replace("/about");
    }
    // const BookACall =()=>{
    //     console.log("Book a call Button is clicked.")
    // }
    return(
        <div className="migrats_navbar_body">
            <div className="migrats_navbar_icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="migrats_navbar_pages">
                <p onClick={homePage}>Home</p>
                <p onClick={aboutPage}>About</p>
            </div>
            {/* <div className="migrats_navbar_call_button">
                <button onClick={BookACall}>Book a call</button>
            </div> */}
        </div>
    )
}

export default Navbar;