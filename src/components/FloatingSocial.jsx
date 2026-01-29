import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../styles/FloatingSocial.css"

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a href="https://www.facebook.com/VeeciousSecurity" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/VeeciousSecurity" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/VeeciousSec" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/company/VeeciousSecurity" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
