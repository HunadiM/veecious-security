import FloatingSocial from "../components/FloatingSocial";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <h2>Get in Touch</h2>
        
        <div className="working-hours-box">
          <h3> Office Hours</h3>
          <p>Control Room: <strong>24 hours/7 days</strong></p>
          <p>Monday – Friday: <strong>08:00 – 17:00</strong></p>
          <p>Saturday & Sunday: <strong>09:00 – 13:00</strong></p>
          
        </div>
       
        <p>Reach out to us using the form below.</p>
        <form
          className="contact-form"
          action="mailto:info@veecioussecurity.co.za"
          method="post"
        >
          <input placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button>Send Message</button>
        </form>
      </section>

      
    </>
  );
}
