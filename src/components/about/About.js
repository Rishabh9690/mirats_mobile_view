import react from "react"
import client1 from "./image/client1.png";
import client2 from "./image/client2.png";
import "./about.css";

const About =()=>{

    const clients=[{
        image: client1,
        name: "Cameron Green",
        designation: "CEO & CTO, AB Technology",
        text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu."
    },{
        image: client2,
        name: "Alice",
        designation: "COO, AB Technology",
        text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu. Sapien pharetra tempus semper euismod cursus morbi id. Arcu est ultrices vulputate commodo tempus facilisis "
    }]

    return(
        <div className="migrats_about">
           <div className="migrats_about_level_one">
                <div className="migrats_about_level_one_text">
                    <p>Mirats Insights</p>
                    <h2>About Us</h2>
                    <p>Build technology that anyone can access and get insights with our innovative software and services, from any corner of the world to bring change.</p>
                </div>
           </div>
           <div className="migrats_about_level_two">
                <div className="migrats_about_level_two_about_info">
                    <h2>About <span>Mirats Insights</span></h2>
                    <p>Our journey began in 2013 as Unitech Survey Solutions, where we provided offline qualitative and quantitative solutions to our clients. In 2016, we introduced our online quantitative and qualitative solutions and rebranded as Macer. In 2020, during the lockdown, we successfully incorporated our company as "Macer India Research & Technology Services Private Limited," and we started our operations with 21 countries. Today, we have expanded our reach and cover 69 countries globally through our subsidiary organization, Mirats Insights Private Limited. Our team at Mirats Insights comprises experts from various fields who have extensive experience in market research. We are passionate about our work and dedicated to delivering actionable insights and exceptional results for our clients. Our parent organization, Macer India Research and Technology Services Private Limited, has over 70 employees, and we have a team of 30 employees at Mirats Insights. Our team is based in two cities in India - Lucknow and Mumbai - and one city in Wyoming State, USA - Sheridan.</p>
                </div>
           </div>
           <div className="migrats_about_level_three">
                <p>Our Testimonial</p>
                <h1>What our client says</h1>
                <div className="migrats_about_level_three_clients_parent">
                    {clients.map((client, index)=>{
                        return(
                            <div className="migrats_about_level_three_clients_chlid" key={index}>
                                <img src={client.image} alt="clientImage" />
                                <section>
                                    <h2>{client.name}</h2>
                                    <p>{client.designation}</p>
                                    <p>{client.text}</p>
                                </section>
                            </div>
                        )
                    })}
                </div>
           </div>
           <div className="migrats_about_level_four">
                <h2>For better view, please visit using Desktop</h2>
                <h2>Thank you for visiting.</h2>
           </div>
        </div>
    )
}

export default About;