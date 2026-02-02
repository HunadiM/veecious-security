
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import "../styles/global.css";


export default function Home() {
  return (
    <>

      <div className="hero">
        <h1>Your Safety, Our Priority</h1>
        <p>Professional Security Services You Can Trust</p>
        <a href="/services"><button>Get Protection Today</button></a>
      </div>

      <section>
        <h2>Contact Us</h2>
        <p><FaPhone /> <strong>Phone:</strong> 083 433 0177 | 082 866 0160</p>
        <p><FaEnvelope /> <strong>Email:</strong> info@veecioussecuritysolutions.co.za | office@veecioussecuritysolutions.co.za</p>
        <p><FaGlobe /> <strong>Website:</strong> www.veecioussecuritysolutions.co.za</p>
      </section>
    </>
  );
}
