import security1 from "../assets/security1.jpeg";
import "../styles/global.css";

export default function Gallery() {
  const images = [
    { src: security1, alt: "Security work 1" },
    
  ];

  return (
    <>
      <section className="gallery-page">
        <h2>Our Gallery</h2>
        <p className="gallery-subtitle">
          A glimpse into our professional security operations
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

     
    </>
  );
}
