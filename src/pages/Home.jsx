import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import skills from "../data/skills.json";
import {
  FaArrowRight,
  FaStar,
  FaSearch,
  FaHandshake,
  FaCalendarCheck,
  FaUserPlus,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Get top 6 skills for display
  const popularSkills = skills.slice(0, 6);

  // Top Rated Providers (static data)
  const topProviders = [
    {
      name: "Alex Martin",
      skill: "Guitar Lessons",
      rating: 4.8,
      sessions: 120,
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Priya Singh",
      skill: "Yoga Training",
      rating: 4.9,
      sessions: 95,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "John Lee",
      skill: "Coding Help",
      rating: 4.7,
      sessions: 200,
      image: "https://i.pravatar.cc/150?img=53",
    },
    {
      name: "Marie Dubois",
      skill: "French Language",
      rating: 4.5,
      sessions: 80,
      image: "https://i.pravatar.cc/150?img=44",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section
        style={{ width: "100%", background: "#eff6ff" }}
        className="py-10 lg:py-16"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                icon: <FaSearch />,
                title: "Discover Skills",
                desc: "Find skills taught by local experts",
              },
              {
                icon: <FaHandshake />,
                title: "Connect & Learn",
                desc: "Book sessions with trusted providers",
              },
              {
                icon: <FaCalendarCheck />,
                title: "Flexible Scheduling",
                desc: "Learn at your own pace and time",
              },
              {
                icon: <FaStar />,
                title: "Rated & Reviewed",
                desc: "Choose top-rated skill providers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  transition: "all 0.3s ease",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: "600",
                      color: "#1f2937",
                      fontSize: "16px",
                      marginBottom: "4px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "14px" }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section
        style={{ width: "100%", background: "white", marginTop: "40px" }}
        className="py-12 lg:py-20"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}
        >
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
            data-aos="fade-up"
          >
            <span
              style={{
                color: "#f97316",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              What We Offer
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1f2937",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              Popular Skills
            </h2>
            <p
              style={{
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Discover the most popular skills offered by talented local
              providers. Start learning something new today!
            </p>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #f97316, #3b82f6)",
                margin: "24px auto 0",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularSkills.map((skill) => (
              <ServiceCard key={skill.skillId} service={skill} />
            ))}
          </div>

          <div
            style={{ textAlign: "center", marginTop: "60px" }}
            data-aos="fade-up"
          >
            <Link
              to="/skills"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(to right, #f97316, #ea580c)",
                color: "white",
                padding: "16px 40px",
                borderRadius: "50px",
                fontSize: "18px",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <span>View All Skills</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Rated Providers Section */}
      <section
        style={{ width: "100%", background: "#f9fafb", marginTop: "40px" }}
        className="py-12 lg:py-20"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}
        >
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
            data-aos="fade-up"
          >
            <span
              style={{
                color: "#3b82f6",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Our Best
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1f2937",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              Top Rated Providers
            </h2>
            <p
              style={{
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Meet the highest-rated skill providers trusted by our community
            </p>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #3b82f6, #f97316)",
                margin: "24px auto 0",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProviders.map((provider, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 16px",
                    border: "3px solid #f97316",
                  }}
                />
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  {provider.name}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "12px",
                  }}
                >
                  {provider.skill}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "8px",
                  }}
                >
                  <FaStar style={{ color: "#facc15" }} />
                  <span style={{ fontWeight: "600", color: "#1f2937" }}>
                    {provider.rating}
                  </span>
                </div>
                <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                  {provider.sessions} sessions completed
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{ width: "100%", background: "white", marginTop: "40px" }}
        className="py-12 lg:py-20"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}
        >
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
            data-aos="fade-up"
          >
            <span
              style={{
                color: "#f97316",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Simple Steps
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1f2937",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              How It Works
            </h2>
            <p
              style={{
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Getting started with SkillSwap is easy. Follow these simple steps
              to begin your learning journey.
            </p>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #f97316, #3b82f6)",
                margin: "24px auto 0",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <FaUserPlus />,
                title: "Create an Account",
                desc: "Sign up for free and set up your profile to get started with SkillSwap.",
              },
              {
                step: "02",
                icon: <FaSearch />,
                title: "Browse & Discover",
                desc: "Search through a variety of skills offered by local providers near you.",
              },
              {
                step: "03",
                icon: <FaCalendarCheck />,
                title: "Book a Session",
                desc: "Pick a skill, book a session, and start learning from an expert today!",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "40px 24px",
                  borderRadius: "16px",
                  background: "#f9fafb",
                  position: "relative",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
                  }}
                >
                  {item.step}
                </div>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(to right, #3b82f6, #2563eb)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                    margin: "16px auto 20px",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section: Upcoming Skill Events */}
      <section
        style={{ width: "100%", background: "#eff6ff", marginTop: "40px" }}
        className="py-12 lg:py-20"
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}
        >
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
            data-aos="fade-up"
          >
            <span
              style={{
                color: "#3b82f6",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Coming Soon
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1f2937",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              Upcoming Skill Events
            </h2>
            <p
              style={{
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Join exciting community events, workshops, and meetups to enhance
              your skills and meet fellow learners.
            </p>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #3b82f6, #f97316)",
                margin: "24px auto 0",
                borderRadius: "4px",
              }}
            ></div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginBottom: "40px" }}
          >
            {[
              {
                title: "Community Coding Hackathon",
                date: "March 15, 2026",
                location: "LocalTown Community Center",
                spots: 25,
                color: "#3b82f6",
              },
              {
                title: "Photography Walk & Workshop",
                date: "March 22, 2026",
                location: "City Park, Downtown",
                spots: 15,
                color: "#f97316",
              },
              {
                title: "Language Exchange Meetup",
                date: "April 5, 2026",
                location: "SkillSwap Hub Cafe",
                spots: 30,
                color: "#22c55e",
              },
            ].map((event, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  style={{
                    height: "6px",
                    background: event.color,
                  }}
                ></div>
                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1f2937",
                      marginBottom: "16px",
                    }}
                  >
                    {event.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <p style={{ color: "#6b7280", fontSize: "14px" }}>
                      📅 {event.date}
                    </p>
                    <p style={{ color: "#6b7280", fontSize: "14px" }}>
                      📍 {event.location}
                    </p>
                    <p style={{ color: "#6b7280", fontSize: "14px" }}>
                      👥 {event.spots} spots available
                    </p>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: event.color,
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          width: "100%",
          background: "linear-gradient(to right, #f97316, #ea580c, #3b82f6)",
          position: "relative",
          overflow: "hidden",
          padding: "64px 16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "250px",
            height: "250px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "350px",
            height: "350px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            transform: "translate(50%, 50%)",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{ textAlign: "center", color: "white" }}
            data-aos="fade-up"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Ready to Swap Skills?
            </h2>
            <p
              style={{
                fontSize: "20px",
                opacity: 0.9,
                marginBottom: "40px",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Join thousands of learners and providers who trust SkillSwap for
              local skill exchange
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/skills"
                style={{
                  background: "white",
                  color: "#f97316",
                  padding: "18px 45px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "18px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                Browse Skills
              </Link>
              <Link
                to="/register"
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "18px 45px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "18px",
                  border: "2px solid white",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
