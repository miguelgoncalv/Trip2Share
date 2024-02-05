import React from 'react';
import './AboutUs.css'; 


function About() {
  return (
    <div className="about-us">
      <p>
      Traveling can be seen as one of the most enjoyable activities for many people across the world, finding a partner to explore cities and countries with similar interest can be quiet challenging sometimes. With this in mind, the creator of Trip 2Share came up with the ideia of an application that helps to connect people looking for adventures and new experiences with some company.
      </p>
      <p>
        Our team is composed by only one adventurous guy who have visited around 15 countries, many of them alone. Travelling alone can be very good sometimes but having the oportunity of sharing those moments with someone who has similar interests can be even more exciting.
      </p>
      <img src="/Images/image1.png" alt="Our Team" className="about-image"/>
      <p>
        We understand that although all the users has to verify themselves, there is always a risk of meeting someone who is not who they say they are. For this reason, we recommend that you always meet in a public place and let someone know where you are going and also take precautions measures.
      </p>

    </div>
  );
}

export default About;
