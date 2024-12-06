  import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

  import './Home.css'; 
  const Home = () => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '1200px',
      borderRadius: '12px',
      
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      
      overflow: 'hidden',
      backgroundColor:'white',
      flexWrap: 'wrap', // Ensures responsiveness for smaller screens
    };
    
    const textContainerStyle = {
      flex: '1',
      padding: '20px',
      color: '#333',

    };
    
    const headingStyle = {
      color: '#1e3a8a', // Glue color
      fontWeight: 'bold',
      fontFamily:"roboto",
      marginBottom: '10px',
      fontSize:"30px",
   
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
      objectFit: 'fit', // Ensures the image fills the container without distortion
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
      }
    `;
    const projects = [
      {
        title: "Nirmaan Website",
        description: "We developed a dynamic and responsive website for Nirmaan Institute .",
        link: "https://vizag-nirmaan.vercel.app/home",
        image: "images/Screenshot 2024-12-04 105158.png",
      },

      {
        title: "Reco Form",
        description: "Streamlined Forms & Elements for divers categories",
        link: "http://form-maker.bedatatech.com/",
        image: "images/image_2024_12_04T18_46_42_802Z.png",
      },
      {
        title: "Echo Chat",
        description: "A ULTIMATE MESSAGING PLATFORM",
        link: "http://echochat.bedatatech.com/",
        image: "images/image_2024_12_04T18_52_41_710Z.png",
      },

    ];
    return (
      <div className="home">
        {/* Intro Card */}
        <section className="intro-card">
          <div className="intro-card-content">
            <h1 className="intro-title" >Welcome to <spa className="home-heading-span-sr" >SR designers</spa>   </h1>

            <h1 className="home-heading-top"> Creating the best websites for your bUSINESS</h1>
            <p className="intro-text">
              I am a passionate web designer with a keen eye for details and a focus on creating visually appealing and user-friendly websites. Explore my work and let's create something amazing together!
            </p>
            <a href='/contact'>
            <button className='home-top-button'>Contact Now</button>

            </a>

          </div>
          <div className="intro-card-image">
            <img src="https://hamid.com.au/wp-content/uploads/2024/02/Web-Design-Adelaide-Hamid-Websites-Portfolio.png" alt="Web Design" className="intro-image" />
          </div>
        </section>
        {/* Intro Section */}
        <section className="intro">
          <h1 className="home-heading-services-top" style={{fontFamily:"roboto"}}>We Providing Web Services</h1>
          <p className="home-paragraph-services-top" style={{fontFamily:"roboto"}}>
            I specialize in designing modern and responsive websites that deliver exceptional user experiences. Let's build something incredible!
          </p>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2 className="Services-heading-card" style={{fontFamily:"roboto"}}>Services</h2>
          <div className="service-cards">
            <div className="service-card">
          <img src='images/depositphotos_194982968-stock-photo-office-responsive-devices-website-builder.jpg' className='home-image-services' alt='web-img'/>
              <h3 className='home-services-card-heading'>Web Design</h3>
              <p>I create beautiful and responsive websites that look great on all devices.</p>
            </div>
            <div className="service-card">
          <img src='images/design-mobile-phone-laptop-computer-repair-logo.jpg' className='home-image-services' alt='logo-img' />
              <h3 className='home-services-card-heading'> LOGO designing</h3>
              <p>Optimizing user experience with intuitive and clean user interfaces.</p>
            </div>
            <div className="service-card">
          <img src='images/360_F_207056289_c2sZQ2gc8zdO1KzmSrHWvy8K1wjTRJ5u.jpg' className='home-image-services' alt='logo-img' />
              <h3 className='home-services-card-heading'>POSTERS designing</h3>
              <p>Optimizing user experience with intuitive and clean user interfaces.</p>
            </div>
            <div className="service-card">
          <img src='images/1719016355271.png' className='home-image-services' alt='frontend-img' />
              <h3 className='home-services-card-heading'>Front-End Development</h3>
              <p>Building interactive websites with the latest front-end technologies.</p>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="skills">
    <h2 className="section-title" style={{fontFamily:"roboto"}}>Skills & Expertise</h2>
    <div
      className="skills-container"
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        
        position: "relative",
        width: "100%",
      }}
    >
      <div
        className="skills-scroll"
        style={{
          display: "flex",
          gap: "20px",
          animation: "scrollRight 15s linear infinite",
        }}
      >
        {/* Duplicate cards for infinite scroll */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className="skill-card"
              style={{
                flex: "0 0 auto",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="images/1_MF5V_dkybUTcfzwHFh0VSw.jpg"
                alt="React.js"
                className="skill-img"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>React.js</h3>
            </div>
            
            <div
              className="skill-card"
              style={{
                flex: "0 0 auto",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="images/919825.png"
                alt="Node.js"
                className="skill-img"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>Node.js</h3>
            </div>
            <div
              className="skill-card"
              style={{
                flex: "0 0 auto",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="images/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
                alt="MySQL"
                className="skill-img"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>MySQL</h3>
            </div>
            <div
              className="skill-card"
              style={{
                flex: "0 0 auto",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="images/images (1).png"
                alt="JavaScript"
                className="skill-img"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>JavaScript</h3>
            </div>
            <div
              className="skill-card"
              style={{
                flex: "0 0 auto",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="images/images (2).png"
                alt="Hosting"
                className="skill-img"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>Hosting</h3>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>

    <style>
      {`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}
    </style>
  </section>



        {/* Portfolio Section */}
        <div className="projects-page">
        <h1 className="projects-title" style={{fontSize:'30px', fontFamily:"roboto"}}>our clients Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              
            }} >
              <img src={project.image} alt={project.title} className="project-image"  />
              <div className="project-details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Contact Section */}
        <h1 className="projects-title" style={{fontFamily:"roboto"}}>about us</h1>
        <div style={containerStyle} className="container">
               {/* Image Section */}
      <div style={imageContainerStyle} className="imageContainer">
        <img
          style={imageStyle}
          src="images/suresh.jpeg"
          alt="Full Stack Development"
        />
      </div>
      {/* Text Section */}
      <div style={textContainerStyle}>

        <h1 style={headingStyle } >SURESH - Web Developer  </h1>
        <p style={paragraphStyle}>
          Dive into the world of web development with expertise in both front-end and back-end technologies. 
          Build responsive, dynamic websites and applications that provide seamless user experiences.
        </p>
        <button
         style={{      padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#6A5ACD',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',}}
        >
          Learn More
        </button>
      </div>
      {/* Add media query styles for responsiveness */}
      <style>{mediaQueryStyles}</style>
    </div>
    <div style={containerStyle} className="container">
               {/* Image Section */}
      <div style={imageContainerStyle} className="imageContainer">
        <img
          style={imageStyle}
          src="images/ramarao.jpeg"
          alt="Full Stack Development"
        />
      </div>
      {/* Text Section */}
      <div style={textContainerStyle}>

        <h1 style={headingStyle}>Ram - Web Developer  </h1>
        <p style={paragraphStyle}>
          Dive into the world of web development with expertise in both front-end and back-end technologies. 
          Build responsive, dynamic websites and applications that provide seamless user experiences.
        </p>
        <button
         style={{      padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#6A5ACD',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',}}
        >
          Learn More
        </button>
      </div>

 

      {/* Add media query styles for responsiveness */}
      <style>{mediaQueryStyles}</style>
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
            <h2 style={{fontFamily:"roboto"}}>OUR TEAM</h2>
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
        
        <div className="freelance-card">
        <div className="card-content">
          <img
            src="images/media_1132acbaaf72680b84753f2d51880603efeae51b7.png"
            alt="Web Design"
            className="card-image"
          />
          <div className="text-content">
            <h2 style={{fontFamily:"roboto"}}>My Mission</h2>
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
            <h2 style={{fontFamily:"roboto"}}>Why Choose Me?</h2>
            <p>
            With expertise in modern web design trends and technologies, I ensure your website stands out in the digital crowd. I believe in seamless collaboration and delivering results that exceed expectations.
            </p>

          </div>
        </div>

        </div>


      </div>
        </div>
        <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <a href="/">

        <img  src="images/Screenshot 2024-12-04 113652.png" alt="sr designres Logo" className="contact-logo" />
        </a>
      
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Feel free to reach out to us through any of the channels below!</p>
      </header>

      {/* Contact Information Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3 className="contact-heading-content">Our Address</h3>
          <p> sr designres</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3 className="contact-heading-content">Email Us</h3>
          <p>srtechcreaters@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3 className="contact-heading-content">Call Us</h3>
          <p>9642909195</p>
          <p>7730020465</p>

        </div>
      </div>

      {/* More Info Section */}
      <div className="more-info">
        <h2>More Information</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/career">Career</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
      </div>
    );
  };

  export default Home;
