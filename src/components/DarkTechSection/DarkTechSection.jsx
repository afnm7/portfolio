import { useState } from "react";
import "./DarkTechSection.css";
import { SectionLabel } from "../SectionLabel/SectionLabel";

const baseUrl = import.meta.env.BASE_URL;

const darkTechImages = [
  {
    src: `${baseUrl}images/darktech/port1.jpeg`,
    alt: "DarkTech expo setup with webcam and live tracking screen",
    caption: "Final expo setup with webcam and live tracking screen",
  },
  {
    src: `${baseUrl}images/darktech/port2.jpeg`,
    alt: "Raspberry Pi 5 setup with camera and wiring",
    caption: "Raspberry Pi 5 setup with camera and wiring",
  },
  {
    src: `${baseUrl}images/darktech/port3.jpeg`,
    alt: "Live coordinate output from the DarkTech tracker",
    caption: "Live X and Y coordinate output",
  },
  {
    src: `${baseUrl}images/darktech/port4.jpeg`,
    alt: "CSV file with saved tracking data",
    caption: "CSV file with saved tracking data",
  },
  {
    src: `${baseUrl}images/darktech/port5.jpeg`,
    alt: "MediaPipe body tracking during testing",
    caption: "MediaPipe body tracking during testing",
  },
];

export function DarkTechSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openImage(image) {
    setSelectedImage(image);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  return (
    <section id="darktech" className="darktech-section section reveal">
      <SectionLabel number="04" label="darktech / project page" />

      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">team project · ai tracking camera</p>

          <h2>DarkTech Body Tracker</h2>

          <p>
            DarkTech is a team project where we built a realtime tracking camera
            system. The installation uses a Logitech webcam, computer vision and
            a Raspberry Pi 5 to detect movement and show live tracking data.
          </p>
        </div>

        <div className="darktech-hero-media">
          {darkTechImages.slice(0, 2).map((image) => (
            <figure className="darktech-image-card" key={image.src}>
              <button
                type="button"
                className="darktech-image-button"
                onClick={() => openImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="darktech-image"
                />
              </button>

              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="darktech-grid">
          <article className="darktech-card darktech-card--large">
            <div className="darktech-card__top">
              <span>PROJECT</span>
              <span>TEAM INSTALLATION</span>
            </div>

            <h3>What we built</h3>

            <p>
              We created a tracking setup that detects a person in front of the
              camera and reads their position from the live video feed. The goal
              was to make a working installation that could run during a live
              expo.
            </p>

            <p>
              Our system combines Python, OpenCV, MediaPipe and Flask. The
              backend processes the camera feed, extracts tracking data and
              exposes that data so it can be shown live on screen.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>01</span>
              <span>CAMERA SETUP</span>
            </div>

            <h3>Physical prototype</h3>

            <p>
              We started with a Logitech webcam connected to a Raspberry Pi 5.
              This setup helped us test camera positioning, detection quality
              and movement tracking.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>02</span>
              <span>TRACKING SYSTEM</span>
            </div>

            <h3>Live body detection</h3>

            <p>
              We used computer vision to detect people in realtime. The system
              reads body landmarks from the camera feed and uses them to
              understand where a person is standing.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>03</span>
              <span>DATA OUTPUT</span>
            </div>

            <h3>Coordinates and direction</h3>

            <p>
              The tracking data is converted into X and Y coordinates, body
              center and direction values. This makes the camera output
              measurable instead of only visual.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>04</span>
              <span>LIVE DISPLAY</span>
            </div>

            <h3>Frontend feedback</h3>

            <p>
              The processed tracking data is shown live through the frontend.
              This allowed us to test whether the system responded correctly to
              movement in front of the camera.
            </p>
          </article>
        </div>

        <div className="darktech-gallery">
          {darkTechImages.slice(2).map((image) => (
            <figure className="darktech-image-card" key={image.src}>
              <button
                type="button"
                className="darktech-image-button"
                onClick={() => openImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="darktech-image"
                />
              </button>

              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="darktech-grid darktech-grid--role">
          <article className="darktech-card darktech-card--large">
            <div className="darktech-card__top">
              <span>MY ROLE</span>
              <span>AI ENGINEER</span>
            </div>

            <h3>My contribution</h3>

            <p>
              My role focused on the tracking functionality of the DarkTech
              camera. I worked on face tracking software and expanded it to full
              body tracking with MediaPipe.
            </p>

            <p>
              I also worked on reading coordinates from the tracking result and
              saving tracking data in CSV files. During testing, I researched
              which tracking approach worked best on the Raspberry Pi 5, because
              the system had to be accurate but also fast enough for the
              hardware.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>SKILL 01</span>
              <span>COMPUTER VISION</span>
            </div>

            <h3>Tracking logic</h3>

            <p>
              I worked with live camera input, body landmarks and coordinate
              calculations. This shows my ability to turn AI output into usable
              application data.
            </p>
          </article>

          <article className="darktech-card">
            <div className="darktech-card__top">
              <span>SKILL 02</span>
              <span>HARDWARE TESTING</span>
            </div>

            <h3>Raspberry Pi performance</h3>

            <p>
              I tested what worked well on the Raspberry Pi 5 and learned to
              balance accuracy, speed and stability on limited hardware.
            </p>
          </article>
        </div>

        <div className="darktech-learned">
          <div>
            <p className="eyebrow">individual reflection</p>

            <h2>AI tracking needs to work outside a demo.</h2>
          </div>

          <div className="darktech-learned__text">
            <p>
              In this project I learned that AI tracking is not only about
              getting a model to detect a person. The tracking also needs to be
              stable, readable and useful on the hardware where it actually
              runs.
            </p>

            <p>
              While testing on the Raspberry Pi 5, I noticed that AI models can
              become heavy quickly. That made me think more critically about
              performance, accuracy and how much data the system really needs to
              process in realtime.
            </p>

            <p>
              I also learned how important clear output is. By saving
              coordinates and tracking results in CSV files, I could better
              check whether the system was working correctly and whether the
              data was reliable enough to use.
            </p>
          </div>
        </div>

        <div className="darktech-stack">
          <span>Python</span>
          <span>Flask</span>
          <span>OpenCV</span>
          <span>MediaPipe</span>
          <span>Pose Tracking</span>
          <span>CSV Logging</span>
          <span>Raspberry Pi 5</span>
          <span>Computer Vision</span>
        </div>
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          onClick={closeImage}
        >
          <button
            type="button"
            className="image-modal__close"
            onClick={closeImage}
            aria-label="Close image"
          >
            ×
          </button>

          <figure
            className="image-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />

            <figcaption>{selectedImage.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}