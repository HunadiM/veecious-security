import { Link } from "react-router-dom";
import FloatingSocial from "../components/FloatingSocial";

export default function Training() {
  return (
    <>
      <section className="training">
        <h2>Security Training Programs</h2>
        <p>
          We offer PSIRA-accredited security training and firearm competency
          courses designed to prepare individuals for professional security
          roles across South Africa.
        </p>

        {/* PSIRA GRADES */}
        <h3>PSIRA Training Grades Explained</h3>
        <div className="psira-grades">

          <div className="grade">
            <h4>Grade E</h4>
            <p>
              Entry-level security training for individuals with no prior
              experience. Ideal for beginners starting a career in the
              security industry.
            </p>
          </div>

          <div className="grade">
            <h4>Grade D</h4>
            <p>
              Basic guarding skills focusing on access control, patrolling,
              and communication. Suitable for general security officers.
            </p>
          </div>

          <div className="grade">
            <h4>Grade C</h4>
            <p>
              Advanced operational training covering emergency procedures,
              incident reporting, and legal responsibilities of security
              officers.
            </p>
          </div>

          <div className="grade">
            <h4>Grade B</h4>
            <p>
              Supervisory-level training for senior security officers.
              Includes leadership skills, site supervision, and risk
              management.
            </p>
          </div>

          <div className="grade">
            <h4>Grade A</h4>
            <p>
              Management-level training designed for security managers and
              business owners. Focuses on security planning, operations
              management, and compliance.
            </p>
          </div>

        </div>

        {/* FIREARM COMPETENCY */}
        <h3>Firearm Competency Training</h3>
        <p>
          Our firearm competency courses comply with South African legal
          requirements and prepare candidates for responsible firearm handling.
        </p>

        <div className="firearm-competency">

          <div className="firearm">
            <h4>Handgun Competency</h4>
            <p>
              Training for pistols and revolvers. Covers safe handling,
              shooting fundamentals, firearm laws, and self-defence
              principles.
            </p>
          </div>

          <div className="firearm">
            <h4>Shotgun Competency</h4>
            <p>
              Designed for security and guarding purposes. Includes safe use,
              loading procedures, and operational deployment.
            </p>
          </div>

          <div className="firearm">
            <h4>Self-Loading Rifle Competency</h4>
            <p>
              Focuses on semi-automatic rifles commonly used in tactical and
              security environments. Includes safety, control, and legal use.
            </p>
          </div>

          <div className="firearm">
            <h4>Manual Operated Rifle Competency</h4>
            <p>
              Covers bolt-action and pump-action rifles, emphasizing precision,
              safety procedures, and lawful operation.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Your Training?</h2>
        <p>
          Contact us today to enroll or to get guidance on the right training
          program for your career goals.
        </p>

        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </>
  );
}
