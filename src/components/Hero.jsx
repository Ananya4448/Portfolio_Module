import { useEffect, useRef } from "react";

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      const content = text.textContent;
      text.innerHTML = content
        .split("")
        .map(
          (char, i) => `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`,
        )
        .join("");
    }
  }, []);

  return (
    <section className="home" id="home">
      <div className="hero-info">
        <h3>Welcome To my portfolio Website</h3>
        <h1>Hello , I am Ananya Saha</h1>

        <div className="text-animate">
          <h2>AssociateDataEngineer</h2>
        </div>

        <p>
          As an Associate Data Engineer at our organization, I play a pivotal
          role in leveraging data-driven insights to inform strategic
          decision-making processes. my responsibilities include analyzing large
          datasets, developing predictive models, and extracting actionable
          insights to drive business outcomes. Collaborating with
          cross-functional teams, you utilize statistical methods and machine
          learning algorithms to uncover patterns and trends within data,
          ultimately contributing to the development of innovative solutions and
          products. With your strong analytical skills and proficiency in
          programming languages like Python and R, you help unlock the potential
          of data to address complex challenges and drive organizational growth
          in the ever-evolving data landscape.
        </p>

        <div className="btn-box">
          <a href="ananyasaha4444.com" className="btn">
            Hire Me <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a
            href="myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn d-CV"
          >
            Download CV <i className="bx bx-download"></i>
          </a>
        </div>

        <div className="social-media">
          <div className="bg-icon">
            <a
              href="https://github.com/Ananya4448"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <span></span>
          </div>

          <div className="bg-icon">
            <a
              href="https://www.linkedin.com/in/ananya-saha-064a311a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <span></span>
          </div>

          <div className="bg-icon">
            <a
              href="https://portfoliomodul.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-briefcase"></i>
            </a>
            <span></span>
          </div>
        </div>
      </div>
      <div className="img-hero">
        <img src="self.jpg" alt="" />
        <div className="rotate-text">
          <div className="text">
            <p ref={textRef}>
              I'm an Associate Data Engineer And A Growing Artist
            </p>
          </div>
          <span>
            <i></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
