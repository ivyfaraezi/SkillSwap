import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaExchangeAlt,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(to right, #111827, #1f2937, #111827)",
        color: "white",
      }}
    >
      {/* Decorative Top Border */}
      <div
        style={{
          height: "4px",
          background: "linear-gradient(to right, #f97316, #3b82f6, #f97316)",
        }}
      ></div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", paddingTop: "40px" }}
        className="px-4 sm:px-6 lg:px-12 py-10 lg:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Section */}
          <div>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <FaExchangeAlt style={{ fontSize: "32px", color: "#60a5fa" }} />
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  background: "linear-gradient(to right, #fb923c, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SkillSwap
              </span>
            </Link>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Connect, learn, and share skills locally. SkillSwap helps you
              discover new talents, offer your expertise, and build a vibrant
              community of learners and providers.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#2563eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#0ea5e9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#dc2626",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fb923c",
              }}
            >
              Quick Links
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>→</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>→</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/my-profile"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>→</span>
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>→</span>
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fb923c",
              }}
            >
              Our Skills
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li style={{ color: "#9ca3af", cursor: "pointer" }}>
                Guitar Lessons
              </li>
              <li style={{ color: "#9ca3af", cursor: "pointer" }}>
                Language Exchange
              </li>
              <li style={{ color: "#9ca3af", cursor: "pointer" }}>
                Yoga Training
              </li>
              <li style={{ color: "#9ca3af", cursor: "pointer" }}>
                Coding Help
              </li>
              <li style={{ color: "#9ca3af", cursor: "pointer" }}>
                Photography Basics
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fb923c",
              }}
            >
              Contact Us
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#9ca3af",
                }}
              >
                <FaMapMarkerAlt style={{ color: "#fb923c" }} />
                <span>456 SkillSwap Ave, LocalTown, LT 45678</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#9ca3af",
                }}
              >
                <FaPhone style={{ color: "#fb923c" }} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#9ca3af",
                }}
              >
                <FaEnvelope style={{ color: "#fb923c" }} />
                <span>support@skillswap.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid #374151",
            marginTop: "48px",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <p style={{ color: "#9ca3af", fontSize: "14px", margin: 0 }}>
              © {new Date().getFullYear()} SkillSwap. All rights reserved.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "14px",
                color: "#9ca3af",
              }}
            >
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
