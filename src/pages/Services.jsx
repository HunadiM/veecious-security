
import "../styles/global.css";

export default function Services() {
  const services = [
    "Armed & Unarmed Reaction",
    "VIP Protection",
    "Access Control",
    "Crowd Control",
    "Retail & Industrial",
    "Patrol Services",
    "Escort Services",
    "Special Events",
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services">
        {services.map(s => (
          <div className="service" key={s}>
            <h3>{s}</h3>
            <p>Professional, reliable and compliant security solutions.</p>
          </div>
        ))}
      </div>
      

      <div className="cta">
        <h3>Ready to protect your Home and Business?</h3>
        <p>Contact us today for a security assessment.</p>
        <a href="/contact"><button className="button">Request a Quote</button></a>
      </div>
     
    </section>
   
  ); 
}
