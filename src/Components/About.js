import React from "react";
import "./About.css";

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor:'#c2c7cc',
    flexWrap: 'wrap', // Ensures responsiveness for smaller screens
  };
  
  const textContainerStyle = {
    flex: '1',
    padding: '20px',
    color: '#333',
  };
  
  const headingStyle = {
    fontSize: '2rem',
    color: '#1e3a8a', // Glue color
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  
  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  };
  
  const imageContainerStyle = {
    flex: '1',
    textAlign: 'center',
    padding: '20px',
    
  };
  
  const imageStyle = {
    width: '100%', // Make the image take up the full width of its container
    height: 'auto', // Maintain the aspect ratio
    maxHeight: '450px', // Prevent the image from becoming too tall
    objectFit: 'auto', // Ensures the image fills the container without distortion
    borderRadius: '10px',
    boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  };
  
  // Use media queries for responsiveness
  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: flex-start;
      }
  
      .imageContainer {
        width: 100%;
        margin-top: 20px;
      }
   containerStyle {
  
    alignItems: 'center',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor:'#c2c7cc',
    flexWrap: 'wrap', 
  };
    }
  `;

  return (
    <div className="about-page">
        <div className="about-page">
      <h1  style={{fontFamily:"roboto",textAlign:"center"}}>About Us</h1>
      <div className="container">
        {/* Image Section */}
        <div className="imageContainer">
          <img
            className="imageStyle"
            src="images/suresh.jpeg"
            alt="Full Stack Development"
          />
        </div>
        {/* Text Section */}
        <div className="textContainer">
        <h1 className="heading-names" >Suresh </h1>
        <h1 className="heading-names" >( Web Developer ) </h1>
          <p className="paragraph-names">
            Dive into the world of web development with expertise in both
            front-end and back-end technologies. Build responsive, dynamic
            websites and applications that provide seamless user experiences.
          </p>
        </div>
      </div>
      <div className="container">
        {/* Image Section */}
        <div className="imageContainer">
          <img
            className="imageStyle"
            src="images/ramarao.jpeg"
            alt="Full Stack Development"
          />
        </div> 
        {/* Text Section */}
        <div className="textContainer">
          <h1 className="heading-names" >Ramarao </h1>
          <h1 className="heading-names" >( Web Developer ) </h1>

          <p className="paragraph-names">
            Dive into the world of web development with expertise in both
            front-end and back-end technologies. Build responsive, dynamic
            websites and applications that provide seamless user experiences.
          </p>
        </div>
      </div>
    </div>
        <div className="about-content">
        <div className="freelance-card">

        <div className="card-content">
          <img
            src="images/istockphoto-616902766-612x612.jpg"
            alt="Web Design"
            className="card-image"
          />
          <div className="text-content">
            <h2>OUR TEAM</h2>
            <p>
              At SR designers, we specialize in designing high-quality,
              responsive websites that cater to your business needs. From concept
              to creation, our web design services ensure a seamless experience.
            </p>
            <p>
              Additionally, we provide custom posters and logos that capture your
              brand’s identity and stand out in the digital world.
            </p>
            <p>
              Our goal is to help businesses establish a professional online
              presence that makes an impact.
            </p>

            <p>
              Whether you need a fresh website, a poster for an event, or a unique
              logo, our team is here to bring your vision to life.
            </p>

          </div>
        </div>
        
   




      </div>
        </div>

      <div className="about-content">
        <div className="freelance-card">
        <div className="card-content">
          <img
            src="images/media_1132acbaaf72680b84753f2d51880603efeae51b7.png"
            alt="Web Design"
            className="card-image"
          />
          <div className="text-content">
            <h2>My Mission</h2>
            <p>
            I strive to create websites that are not only aesthetically pleasing but also highly functional and user-friendly. Every project I undertake is tailored to meet your specific goals and requirements.
            </p>

          </div>
        </div>
        </div>

        <div className="freelance-card">
        <div className="card-content">
          <img
            src="images/about-us.png"
            alt="Web Design"
            className="card-image"
          />
          <div className="text-content">
            <h2>Why Choose Me?</h2>
            <p>
            With expertise in modern web design trends and technologies, I ensure your website stands out in the digital crowd. I believe in seamless collaboration and delivering results that exceed expectations.
            </p>

          </div>
        </div>

        </div>
      </div>

      
      <div className="about-cards-row">
        <div className="about-card">
          <h2 className="about-heading-top">Creative Designs</h2>
          <p>
            I create visually stunning and user-friendly designs that align with your brand.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-heading-top"> Responsive Layouts</h2>
          <p>
            Every website I build is fully responsive, ensuring a seamless experience on all devices.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-heading-top">Professional Work</h2>
          <p>
            Combining aesthetics and functionality to deliver high-quality results for my clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
