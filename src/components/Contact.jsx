import { useEffect, useRef, useState } from "react";

function Contact() {
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillBoxRef = useRef(null);

  const skills = [
    { name: "Machine Learning,Deep Learning", percentage: 88 },
    { name: "GenAi,LangChain,RAG,Prompt Engineering", percentage: 87 },
    { name: "Python Flask", percentage: 86 },
    { name: "MySQL", percentage: 90 },
    {
      name: "Python Libraries (Scikit-learn, PyTorch, Keras, NumPy, Pandas, OpenCV)",
      percentage: 89,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsAnimated && skillBoxRef.current) {
        const rect = skillBoxRef.current.getBoundingClientRect();
        if (window.innerHeight >= rect.top + skillBoxRef.current.offsetHeight) {
          setSkillsAnimated(true);
          animateSkills();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skillsAnimated]);

  const animateSkills = () => {
    const counters = document.querySelectorAll(".counter span");
    const progressBars = document.querySelectorAll(".skills svg circle");

    counters.forEach((counter, i) => {
      const target = parseInt(counter.dataset.target);
      const strokeValue = 465 - 465 * (target / 100);

      if (progressBars[i]) {
        progressBars[i].style.setProperty("--target", strokeValue);
        progressBars[i].style.animation = "progress 2s ease-in-out forwards";
      }

      let current = 0;
      const updateCount = () => {
        if (current < target) {
          current++;
          counter.textContent = current;
          setTimeout(updateCount, 12);
        }
      };
      setTimeout(updateCount, 400);
    });
  };

  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>get in touch with me</span>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="#" id="" cols="30" rows="10"></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="skills" ref={skillBoxRef}>
          <div className="container">
            <div className="skillBox">
              <div className="main-text">
                <h2 className="heading">My Skills</h2>
                <span>Let Me Help you</span>
              </div>
              <div className="skill-wrap">
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <div className="outer-circle">
                      <div className="inner-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="180px"
                          height="180px"
                        >
                          <defs>
                            <linearGradient id={`GradientColor${index}`}>
                              <stop offset="0%" stopColor="#e91e63" />
                              <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                          </defs>
                          <circle
                            cx="85"
                            cy="85"
                            r="75"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h2 className="counter">
                          <span data-target={skill.percentage}>0</span>%
                        </h2>
                      </div>
                    </div>
                    <div className="sk-title">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
