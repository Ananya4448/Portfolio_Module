function Projects() {
  // Projects component
  const projects = [
    {
      icon: "bx bx-code-alt",
      title: "Jaundice Eye Detection using CNN Model",
      description:
        "This project focuses on detecting jaundice in eyes using a Convolutional Neural Network (CNN) model. It involves training the model to analyze eye images, identifying yellowish discoloration indicative of jaundice for accurate, automated diagnosis.",
      link: "#",
    },
    {
      icon: "bx bx-layer",
      title: "Detection of Brain Tumor by using MRI images",
      description:
        "A model to detect Brain Tumors by using MRI images. The analysis will be dependent on both videos and images. Used: Python, OpenCv, Tensorflow,Kaggle,CNN,Flask",
      link: "#",
    },
    {
      icon: "bx bx-code-alt",
      title: "Facial Expression Detection using CNN",
      description:
        "used to accurately identify emotions from facial images. By analyzing facial features and patterns, the CNN model classifies expressions such as happiness, sadness, and anger, offering insights into emotion recognition technology's potential applications in various fields.",
      link: "https://github.com/Ananya4448/Facial_Emotion_Detection",
    },
    {
      icon: "bx bx-desktop",
      title: "Lost and Found Software:",
      description:
        "A website where students can report about their lost things and the founders of lost things can inform them about their items. Used: Node JS, Express JS, Ejs template, MySQL, Axios, Rest API",
      link: "#",
    },
    {
      icon: "bx bxs-party",
      title: "Author Dashboard design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab recusandae modi voluptates maxime ipsam eveniet. Facilis.",
      link: "#",
    },
  ];

  console.log("Projects data:", projects[2]);

  return (
    <section className="projects" id="projects">
      <div className="main-text">
        <h2 className="heading">My Projects</h2>
        <span>what i will do for you</span>
      </div>

      <div className="allServices">
        {projects.map((project, index) => (
          <div className="servicesItem" key={index}>
            <div className="icon-services">
              <i className={project.icon}></i>
              <span></span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="readMore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      <div className="proposal">
        <div className="text-box">
          <span>Get It Touch</span>
          <h3>Have a Project On Your Mind</h3>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <img src="img/support.png" className="first" alt="support" />
      </div>

      <div className="showcase">
        <img src="ring.png" className="ring" alt="" />
        <img src="circle.png" className="circle" alt="" />
        <img src="circle.png" className="circle2" alt="" />
        <img src="circle.png" className="circle3" alt="" />
        <img src="half-ring.png" className="half-ring" alt="" />
      </div>
    </section>
  );
}

export default Projects;
