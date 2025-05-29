// Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    image: 'assets/img/testimonials/testimonials-1.jpg',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    image: 'assets/img/testimonials/testimonials-2.jpg',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum...',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    image: 'assets/img/testimonials/testimonials-3.jpg',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis...',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    image: 'assets/img/testimonials/testimonials-4.jpg',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat...',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: 'assets/img/testimonials/testimonials-5.jpg',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam...',
  },
];

const Testimonials = () => {
  return (
    
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img src={item.image} className="testimonial-img" alt={item.name} />
                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{item.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
