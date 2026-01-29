
import React from 'react';
import { FaCertificate, FaBuilding, FaUsers } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  const accreditations = ["SAPS", "PFTC", "PSIRA", "SASSETA", "SASA"];
  const images = [
    { src: "security2.jpeg", alt: "Security Team" },
    { src: "security1.jpeg", alt: "Security Operations" }
  ];

  return (
    <>
      <section className="about-intro">
        <h2><i>About Us</i></h2>
        <div className="content">
          <p>
            <FaBuilding className="icon" /> Veecious Security Solutions (PTY) Ltd provides professional armed and
            unarmed security services, protection, training and consultancy solutions.
          </p>
          <p>
            <FaUsers className="icon" /> The training programs are for security officers to ensure they are fully equipped with the skills and knowledge required in the industry.
          </p>
          <p>
            We operate in full compliance with South African security
            regulations and industry standards.
          </p>
        </div>
        <p className="registration"><strong>Company Registration Number:</strong> 2020/900992/07</p>
      </section>

      <section className="accreditation">
        <h2><i>Our Accreditations</i></h2>
        <div className="accreditations-list">
          {accreditations.map((item, index) => (
            <div key={index} className="accreditation-card">
              <FaCertificate className="accred-icon" />
              {item}
            </div>
          ))}
        </div>
        
        <div className="image-gallery">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <div className="image-placeholder">
                {/* For now, using placeholder. Replace with actual images when available */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {img.alt}
                </div>
              </div>
              <p>{img.alt}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;