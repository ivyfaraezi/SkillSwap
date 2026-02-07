import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import skills from "../data/skills.json";
import useAuth from "../hooks/useAuth";
import {
  FaStar,
  FaClock,
  FaDollarSign,
  FaEnvelope,
  FaUser,
  FaCheck,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Find skill by ID
    const foundSkill = skills.find((s) => s.skillId === parseInt(id));
    setSkill(foundSkill);
  }, [id]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookNow = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    // Show success toast
    toast.success(
      `Successfully booked "${skill.skillName}"! We'll contact you at ${formData.email}`,
      {
        duration: 5000,
        icon: "🎉",
      },
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
    });
  };

  if (!skill) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #eff6ff, white)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>🔄</div>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
            Skill not found
          </h2>
          <p style={{ color: "#6b7280" }}>
            The skill you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #eff6ff, white, #fff7ed)",
        marginTop: "40px",
        marginBottom: "40px",
      }}
      className="py-12 lg:py-20"
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="px-4 sm:px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Main Content */}
          <div
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Service Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              data-aos="fade-up"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                <span
                  style={{
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "50px",
                    fontWeight: "500",
                    boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
                  }}
                >
                  {skill.category}
                </span>
              </div>
              <div style={{ position: "absolute", top: "16px", right: "16px" }}>
                <span
                  style={{
                    padding: "8px 20px",
                    borderRadius: "50px",
                    fontWeight: "500",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    backgroundColor:
                      skill.slotsAvailable > 3 ? "#22c55e" : "#eab308",
                    color: "white",
                  }}
                >
                  {skill.slotsAvailable} slots available
                </span>
              </div>
            </div>

            {/* Service Info */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                padding: "40px",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#1f2937",
                  marginBottom: "20px",
                }}
              >
                {skill.skillName}
              </h1>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#fefce8",
                    padding: "10px 20px",
                    borderRadius: "50px",
                  }}
                >
                  <FaStar style={{ color: "#eab308" }} />
                  <span style={{ fontWeight: "600", color: "#1f2937" }}>
                    {skill.rating} Rating
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f0fdf4",
                    padding: "10px 20px",
                    borderRadius: "50px",
                  }}
                >
                  <FaDollarSign style={{ color: "#22c55e" }} />
                  <span style={{ fontWeight: "600", color: "#1f2937" }}>
                    ${skill.price}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#eff6ff",
                    padding: "10px 20px",
                    borderRadius: "50px",
                  }}
                >
                  <FaClock style={{ color: "#3b82f6" }} />
                  <span style={{ fontWeight: "600", color: "#1f2937" }}>
                    {skill.slotsAvailable} slots
                  </span>
                </div>
              </div>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "32px",
                }}
              >
                {skill.description}
              </p>

              {/* Category Info */}
              <div
                style={{ borderTop: "1px solid #f3f4f6", paddingTop: "28px" }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "20px",
                  }}
                >
                  Skill Details
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  }}
                >
                  {[
                    `Category: ${skill.category}`,
                    `Provider: ${skill.providerName}`,
                    `Price: $${skill.price}/session`,
                    `Available Slots: ${skill.slotsAvailable}`,
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "#f9fafb",
                        padding: "16px",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          background: "#22c55e",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        <FaCheck />
                      </div>
                      <span style={{ color: "#374151" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Provider Info */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                padding: "40px",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1f2937",
                  marginBottom: "20px",
                }}
              >
                Service Provider
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  {skill.providerName.charAt(0)}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1f2937",
                      marginBottom: "8px",
                    }}
                  >
                    {skill.providerName}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#6b7280",
                      marginBottom: "6px",
                    }}
                  >
                    <FaEnvelope style={{ color: "#f97316" }} />
                    <span>{skill.providerEmail}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#6b7280",
                      marginBottom: "6px",
                    }}
                  >
                    <FaMapMarkerAlt style={{ color: "#f97316" }} />
                    <span>SkillSwap Local Area</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#6b7280",
                    }}
                  >
                    <FaPhoneAlt style={{ color: "#f97316" }} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Sidebar */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                padding: "32px",
                position: "sticky",
                top: "100px",
              }}
              data-aos="fade-left"
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1f2937",
                  marginBottom: "8px",
                }}
              >
                Book This Session
              </h3>
              <p style={{ color: "#9ca3af", marginBottom: "28px" }}>
                Fill in your details to book this skill session
              </p>

              <form onSubmit={handleBookNow}>
                {/* Name Field */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#374151",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                  >
                    Your Name
                  </label>
                  <div style={{ position: "relative" }}>
                    <FaUser
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#9ca3af",
                      }}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      style={{
                        width: "100%",
                        paddingLeft: "48px",
                        paddingRight: "16px",
                        paddingTop: "14px",
                        paddingBottom: "14px",
                        border: "2px solid #d1d5db",
                        borderRadius: "12px",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                        backgroundColor: "#f9fafb",
                        color: "#1f2937",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#374151",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                  >
                    Your Email
                  </label>
                  <div style={{ position: "relative" }}>
                    <FaEnvelope
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#9ca3af",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        paddingLeft: "48px",
                        paddingRight: "16px",
                        paddingTop: "14px",
                        paddingBottom: "14px",
                        border: "2px solid #d1d5db",
                        borderRadius: "12px",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                        backgroundColor: "#f9fafb",
                        color: "#1f2937",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div
                  style={{
                    background: "linear-gradient(to right, #fff7ed, #eff6ff)",
                    borderRadius: "12px",
                    padding: "20px",
                    border: "1px solid #fed7aa",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#6b7280" }}>Session Price</span>
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#ea580c",
                      }}
                    >
                      ${skill.price}
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    color: "white",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "18px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
                  }}
                >
                  Book Now →
                </button>
              </form>

              {/* Guarantee Info */}
              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "28px",
                  borderTop: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#6b7280",
                    marginBottom: "12px",
                  }}
                >
                  <FaCheck style={{ color: "#22c55e" }} />
                  <span style={{ fontSize: "14px" }}>
                    Free cancellation within 24 hours
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#6b7280",
                    marginBottom: "12px",
                  }}
                >
                  <FaCheck style={{ color: "#22c55e" }} />
                  <span style={{ fontSize: "14px" }}>
                    Satisfaction guaranteed
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#6b7280",
                  }}
                >
                  <FaCheck style={{ color: "#22c55e" }} />
                  <span style={{ fontSize: "14px" }}>
                    Secure booking process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
