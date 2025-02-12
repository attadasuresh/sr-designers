  import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
  import './Home.css'; 
  const Home = () => {
    const projects = [
      {
        title: "Renu beauty parlour",
        description: "we created frindly beauty parlour website",
        link: "https://beauty-parlour-xi.vercel.app/",
        image: "images/image.png",
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
      <>
              {/* Intro Card */}
        <section className="intro-card">
          <div className="intro-card-content">
            <h1 className="intro-title" >Welcome to <br/><spa className="home-heading-span-sr" > SR-Tech Creators</spa>   </h1>
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
       
      <div >

       
        {/* Intro Section */}
        <section className="intro">
          <h1 className="home-heading-services-top" style={{fontFamily:"roboto"}}>We Providing Web Services</h1>
          <p className="home-paragraph-services-top" style={{fontFamily:"roboto",textAlign:"center"}}>
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

        <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <a href="/">

        <img  src="images/mainlogo.png" alt="sr designres Logo" className="contact-logo" />
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
      </>
    );
  };

  export default Home;
