import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function LandingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  let animationFrameId: number;

  useEffect(() => {
    // Start date
    const startDate = new Date("2024-02-04T00:00:00Z");

    // Function to update time elapsed
    function updateTimeElapsed() {
      const currentDate = new Date();
      const timeDiff = Math.floor(
        (currentDate.getTime() - startDate.getTime()) / 1000
      ); // in seconds
      const daysElapsed = Math.floor(timeDiff / (3600 * 24));
      const hoursElapsed = Math.floor((timeDiff % (3600 * 24)) / 3600);
      const minutesElapsed = Math.floor((timeDiff % 3600) / 60);
      const secondsElapsed = timeDiff % 60;
      setTimeElapsed({
        days: daysElapsed,
        hours: hoursElapsed,
        minutes: minutesElapsed,
        seconds: secondsElapsed,
      });
      animationFrameId = requestAnimationFrame(updateTimeElapsed);
    }

    // Start updating time elapsed
    updateTimeElapsed();

    // Clean up function
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      heart.innerText = "❤";
      document.body.appendChild(heart);

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
          <div className="photo"></div>
          <div className="paragraph-statement">
            <Container>
              <h1 className="landingpage-text">Hi Mochi!</h1>
            </Container>
            <Container className="landingpage-text">
              {`It has been `}
              <span className="timeElapsed">{`${timeElapsed.days} days, ${timeElapsed.hours} hours, ${timeElapsed.minutes} minutes, and ${timeElapsed.seconds} seconds`}</span>
              {` since February 4.`}
            </Container>
            <Container className="landingpage-text-2">
              "I am always grateful to have you and will always love you with
              all of my efforts."
            </Container>
            <Container className="landingpage-text-3">
              <Button variant="outline-dark" onClick={handleShow}>
                {"Continue >>>"}
              </Button>
            </Container>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            Will You go on a date with me? <br />
            <br />
            When: <b>March 4, 2023 @9AM</b>
            <br />
            <br />
            Where: <b>Tagaytay, Philippines</b>
            <br />
            <br />
            What: Attire? <b>White</b>
            <br />
            <br />
            Why: <b>Because I LOVE YOU and that day is our first monthsarry</b>
            <br /><br />
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="success" onClick={handleClose}>
              YES
            </Button>
            <Button variant="danger" onClick={handleClose}>
              NO
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}
