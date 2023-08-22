import React, { useState } from "react";
import image from "./image/MiratsProductHero.png";
import "./home.css";

const Home=()=>{

    const [ans1, setAns1] = useState(false);
    const [ans2, setAns2] = useState(false);
    const [ans3, setAns3] = useState(false);

    const handleMainBtn=()=>{
        console.log("Clicked");
    }
    const BookACall =()=>{
        console.log("Book a call Button is clicked.")
    }

    return(
        <div className="mirats_home">
            <div className="mirats_level_one">
                {/* <p>Mirats supplier Portal is launched. <a href="#"> Learn more &#62;</a></p> */}
                <button onClick={BookACall}>Book a call</button>
            </div>
            <div className="mirats_level_two">
                <div className="mirats_level_two_image">
                    <img src={image} alt="imageHero" />
                </div>
                <div className="mirats_level_two_text">
                    <h2>All Mirats Products.</h2>
                    <button onClick={handleMainBtn}>Visit more.</button>
                    <p>Mirats Insights Official Website is work in progress. Releasing our new website super soon.</p>
                </div>
            </div>
            <div className="mirats_level_three">
                <h2>Mirats Insights is now going to launch Restech products super soon.</h2>
                <h2>Atomos Technologies and Mirats Insights partnered to make the technology based SaaS products for ResTech products.</h2>
            </div>
            <div className="mirats_level_four">
                <div className="mirats_level_four_sec">
                    <p>Launching in one month.</p>
                    <h2>Mirats One.</h2>
                    <p>You can create, manage and deploy projects from one single application. All-in-one tool for Research industry.</p>
                    <button>
                        Visit to know more.
                    </button>
                </div>
                <div className="mirats_level_four_sec">
                    <p>Recently Launched</p>
                    <h2>Mirats Supplier Portal</h2>
                    <p>Apply for onboarding in our supply chain and contribute in our projects. <br/> 
                        <a href="#"> learn more &#62;</a>
                    </p> 
                    <button>
                        Visit to know more.
                    </button>
                </div>
            </div>
            <div className="mirats_level_five">
                <h1>Questions? Answers.</h1>
                <div className="mirats_level_five_faq">
                    <h2 onClick={()=>{setAns1(!ans1)}}>What is Mirats One?</h2>
                    {ans1? <h3>Mirats One is all in one stop for all the research needs.</h3>: <></>}
                </div>
                <hr></hr>
                <div className="mirats_level_five_faq">
                    <h2 onClick={()=>{setAns2(!ans2)}}>What is Mirats One?</h2>
                    {ans2? <h3>Mirats One is all in one stop for all the research needs.</h3>: <></>}
                </div>
                <hr></hr>
                <div className="mirats_level_five_faq">
                    <h2 onClick={()=>{setAns3(!ans3)}}>What is Mirats One?</h2>
                    {ans3? <h3>Mirats One is all in one stop for all the research needs.</h3>: <></>}
                </div>
            </div>
        </div>
    )
}

export default Home;