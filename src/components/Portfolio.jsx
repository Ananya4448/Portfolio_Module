import { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { category: "uiux", title: "UI/UX Design", image: "portfolio/1.jpg" },
    { category: "web", title: "Website Devlopment", image: "portfolio/2.jpg" },
    { category: "web", title: "Model prediction", image: "portfolio/3.jpg" },
    { category: "web", title: "Web Development", image: "portfolio/4.jpg" },
    { category: "uiux", title: "UI/UX Design", image: "portfolio/5.jpg" },
    {
      category: "branding",
      title: "Web Development",
      image: "portfolio/6.jpg",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>what i will do for you</span>
      </div>
      <div className="fillter-buttons">
        <button
          className={`button ${filter === "all" ? "mixitup-control-active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Work
        </button>
        <button
          className={`button ${filter === "web" ? "mixitup-control-active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web Development
        </button>
        <button
          className={`button ${filter === "uiux" ? "mixitup-control-active" : ""}`}
          onClick={() => setFilter("uiux")}
        >
          website Devlopment
        </button>
        <button
          className={`button ${filter === "branding" ? "mixitup-control-active" : ""}`}
          onClick={() => setFilter("branding")}
        >
          prediction model
        </button>
      </div>

      <div className="portfolio-gallery">
        {filteredItems.map((item, index) => (
          <div className={`portfolio-box mix ${item.category}`} key={index}>
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, soluta.
              </p>
              <a href="#" className="readMore">
                Explore More
              </a>
            </div>
            <div className="portfolio-img">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
