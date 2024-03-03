import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function LandingPage() {
    useEffect(() => {
        function createHeart() {
          const heart = document.createElement("div");
          heart.classList.add("heart");
          heart.style.left = Math.random() * window.innerWidth + "px";
          heart.style.animationDuration = Math.random() * 2 + 3 + "s";
          heart.innerText = "❤";
          document.body.appendChild(heart)
;
    
          // Remove heart from DOM after animation ends
          heart.addEventListener("animationend", () => {
            heart.remove();
          });
        }
    
        // Create hearts periodically
        const interval = setInterval(createHeart, 300);
    
        // Clean up function
        return () => clearInterval(interval);
      }, []);
      
  return (
    <Container fluid className="landingpage-container">
      <Container className="landingpage-layout">
        <div className="floating-rectangle">
          <div className="photo">[Your Photo]</div>
          <div className="paragraph-statement">[Paragraph Statement]</div>
        </div>
      </Container>
    </Container>
  );
}