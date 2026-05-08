import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Experience",
    "Main Skills",
    "Certificates",
    "Education",
    "Quality",
  ];

  const tabContent = [
    // Experience
    <div className="content" key="experience">
      <div className="text-box">
        <p>Company Name: Gramener</p>
        <span>Experience: NOV 2024 to Present</span>
      </div>
    </div>,
    // Main Skills
    <div className="content" key="skills">
      {[
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "LangChain",
        "RAG",
        "Prompt Engineering",
        "PyTorch",
        "Transformers",
        "FastAPI",
        "SQL",
        "REST APIs",
        "NLP",
        "Scikit-learn",
      ].map((skill, i) => (
        <div className="text-box" key={i}>
          <span>{skill}</span>
        </div>
      ))}
    </div>,
    // Certificates
    <div className="content" key="certificates">
      {[
        "1. DataScience using python with Real world projects 2024- Udemy",
        "2. Project Devlopment using java 2023 by Udemy",
        "3. Mastering Visual Studio code -2023 by Udemy",
        "4. Front End Web Development Ultimate Guide by Udemy",
        "5. Eduonix Learning Solution Certificates in Basic C programming, Data Structure, Bootstrap - Mar 2021 by Udemy",
        "6. Participation Certificate of NEO 7 -2022",
      ].map((cert, i) => (
        <div className="text-box" key={i}>
          <span>{cert}</span>
        </div>
      ))}
    </div>,
    // Education
    <div className="content" key="education">
      <div className="text-box">
        <p>GRADUATION-BTECH</p>
        <span>
          PASSING YEAR: 2024
          <br />
          National Institute of Technology, Calicut ,Kozhikode, KERALA Bachelor
          of Technology Computer Science and Engineering CGPA: 6.35
        </span>
      </div>
      <div className="text-box">
        <p>HIGHER SECONDARY</p>
        <span>
          PASSING YEAR: 2019
          <br />
          Bidhannagar Govt. High School, Kolkata Qualification: Science
          Percentage: 78%
        </span>
      </div>
      <div className="text-box">
        <p>SECONDARY</p>
        <span>
          PASSING YEAR: 2017
          <br />
          Bidhannagar Govt. HigH School ,Kolkata Secondary Qualification
          Percentage: 88%
        </span>
      </div>
    </div>,
    // Quality
    <div className="content" key="quality">
      {[
        "1. team Player",
        "2. Leadership Qualities",
        "3. Ability to self-start",
        "4. Honesty and Loyalty",
      ].map((quality, i) => (
        <div className="text-box" key={i}>
          <span>{quality}</span>
        </div>
      ))}
    </div>,
  ];

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="aboutme.jpg" alt="" className="aboutMyself" />
        <div className="showcase-ring">
          <img src="ring.png" className="ring" />
          <img src="circle.png" className="circle" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <p>
          Enthusiastic Graduate from NIT Calicut, showcasing exceptional skills
          in computer science and engineering. Adept in diverse domains, from
          algorithm design to software development, with a passion for solving
          complex problems. Eager to contribute innovative solutions and
          leverage cutting-edge technologies to make a meaningful impact in the
          field. Fast Learner , Problem Solver 5 star in HackerRank in C,
          java,python, DP A Growing Aspirant.cheered up with Drawing, Reading
          Story Books , and planting.
        </p>
        <div className="about-btn">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="content-btn">{tabContent[activeTab]}</div>
        <div className="cvContent">
          <a
            href="myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn d-CV"
          >
            Download CV <i className="bx bx-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
