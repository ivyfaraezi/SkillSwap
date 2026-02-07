import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    title: "Learn & Share Skills Locally",
    subtitle:
      "Connect with talented people in your area and start learning today",
    btnText: "Browse Skills",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1200",
    title: "Teach What You Know",
    subtitle: "Offer your expertise and earn while helping others grow",
    btnText: "Start Teaching",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    title: "Build Your Community",
    subtitle: "Join a network of learners and providers exchanging skills",
    btnText: "Join Now",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    title: "Flexible & Affordable",
    subtitle: "Book sessions at your convenience with transparent pricing",
    btnText: "Explore",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-orange-400 !w-3 !h-3",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-orange-500 !w-4 !h-4",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-[500px] md:h-[600px] lg:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>

              {/* Snow Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="snow-animation"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div
                  className="hero-content"
                  style={{
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    marginLeft: "60px",
                  }}
                >
                  <div
                    className="max-w-xl lg:max-w-2xl"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <h1
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate__animated animate__fadeInUp"
                      style={{ marginBottom: "24px" }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-base md:text-lg lg:text-xl text-gray-200 animate__animated animate__fadeInUp animate__delay-1s"
                      style={{ marginBottom: "40px" }}
                    >
                      {slide.subtitle}
                    </p>
                    <Link
                      to="/skills"
                      style={{
                        display: "inline-block",
                        background:
                          "linear-gradient(to right, #f97316, #ea580c)",
                        color: "white",
                        padding: "12px 28px",
                        borderRadius: "50px",
                        fontSize: "15px",
                        fontWeight: "600",
                        textDecoration: "none",
                        boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
                      }}
                      className="animate__animated animate__fadeInUp animate__delay-2s"
                    >
                      {slide.btnText} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          className="swiper-button-prev !text-white !bg-orange-500/80 !rounded-full hover:!bg-orange-600 transition-all"
          style={{ width: "50px", height: "50px", left: "20px" }}
        ></div>
        <div
          className="swiper-button-next !text-white !bg-orange-500/80 !rounded-full hover:!bg-orange-600 transition-all"
          style={{ width: "50px", height: "50px", right: "20px" }}
        ></div>
      </Swiper>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 md:h-16 fill-current text-blue-50"
        >
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;
