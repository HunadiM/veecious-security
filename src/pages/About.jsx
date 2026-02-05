
import "../styles/global.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <section className="about-intro">
        <h2>About Us</h2>
        <p>
          Veecious Security Solutions (PTY) Ltd provides professional armed and
          unarmed security services, protection, training and consultancy solutions.
        </p>
        <p>
          We operate in full compliance with South African security regulations.
        </p>
        <p><strong>Company Registration:</strong> 2020/900992/07</p>
      </section>

      <section className="accreditation">
        <h2>Our Accreditations</h2>
        <div className="accreditations-list">
          {["SAPS", "PFTC", "PSIRA", "SASSETA", "SASA"].map(a => (
            <div key={a} className="accreditation-card">{a}</div>
          ))}
        </div>
      </section>

    
      <section className="gallery-cta">
        <h2>See Our Work</h2>
        
        <button
          className="gallery-btn"
          onClick={() => navigate("/Gallery")}
        >
          View Full Gallery
        </button>

        
      </section>

      
    </>
  );
}
