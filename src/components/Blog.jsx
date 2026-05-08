import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Blog() {
  const blogs = [
    {
      title: "Password Generator",
      date: "Sunday, April 14, 2023",
      image: "blog/1.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
    },
    {
      title: "veterinary Management Software",
      date: "Sunday, Nov 14, 2023",
      image: "blog/veterinary.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
    },
    {
      title: "Digital Clock",
      date: "Sunday, Jan 14, 2023",
      image: "blog/6.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
    },
  ];

  return (
    <section className="blog" id="blog">
      <div className="main-text">
        <h2 className="heading">Blog</h2>
        <span>Latest News & Post</span>
      </div>

      <div className="blog-box">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper cards"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index} className="card">
              <div className="card-top">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="card-info">
                <h2>{blog.title}</h2>
                <span className="date">{blog.date}</span>
                <p className="excerpt">{blog.excerpt}</p>
                <a href="#" className="readMore">
                  Explore More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="showcase">
        <img src="ring.png" className="ring" alt="" />
        <img src="second-circle.png" className="second-circle" alt="" />
        <img src="circle.png" className="circle" alt="" />
        <img src="half-ring.png" className="half-ring" alt="" />
      </div>
    </section>
  );
}

export default Blog;
