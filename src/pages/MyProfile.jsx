import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../hooks/useAuth";
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaCalendar,
  FaExchangeAlt,
  FaHeart,
  FaStar,
  FaBook,
  FaShoppingCart,
  FaHeadset,
  FaClipboardList,
} from "react-icons/fa";

const MyProfile = () => {
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eff6ff, white, #fff7ed)",
        padding: "32px 16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "672px" }}>
        {/* Profile Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            overflow: "hidden",
            marginBottom: "24px",
          }}
          data-aos="fade-up"
        >
          {/* Banner */}
          <div
            style={{
              height: "140px",
              background:
                "linear-gradient(to right, #f97316, #fb923c, #3b82f6)",
              position: "relative",
            }}
          >
            <FaExchangeAlt
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                color: "rgba(255,255,255,0.2)",
                fontSize: "24px",
              }}
            />
            <FaBook
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                color: "rgba(255,255,255,0.2)",
                fontSize: "24px",
              }}
            />
            <FaHeart
              style={{
                position: "absolute",
                top: "50%",
                right: "25%",
                color: "rgba(255,255,255,0.1)",
                fontSize: "20px",
              }}
            />
          </div>

          {/* Profile Content */}
          <div
            style={{
              padding: "0 24px 24px 24px",
              marginTop: "-64px",
            }}
          >
            {/* Avatar */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "128px",
                    height: "128px",
                    borderRadius: "50%",
                    border: "4px solid white",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right, #f97316, #ea580c)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaUser style={{ color: "white", fontSize: "48px" }} />
                    </div>
                  )}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#22c55e",
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                ></div>
              </div>
            </div>

            {/* Name & Title */}
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: 0,
                }}
              >
                {user?.displayName || "Skill Swapper"}
              </h1>
              <p
                style={{
                  color: "#f97316",
                  fontWeight: "500",
                  marginTop: "8px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <FaExchangeAlt style={{ fontSize: "12px" }} />
                SkillSwap Member
                <FaExchangeAlt style={{ fontSize: "12px" }} />
              </p>
            </div>

            {/* Edit Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Link
                to="/update-profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(to right, #f97316, #ea580c)",
                  color: "white",
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "12px 28px",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
                }}
              >
                <FaEdit />
                Edit Profile
              </Link>
            </div>

            {/* Info Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope style={{ color: "white" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      margin: 0,
                    }}
                  >
                    Email Address
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1f2937",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user?.email || "Not available"}
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#fff7ed",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f97316",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaCalendar style={{ color: "white" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      margin: 0,
                    }}
                  >
                    Member Since
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1f2937",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user?.metadata?.creationTime
                      ? new Date(user.metadata.creationTime).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background:
                  "linear-gradient(to bottom right, #f97316, #ef4444)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaHeart style={{ color: "white", fontSize: "16px" }} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: 0,
                }}
              >
                12
              </p>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                Skills Shared
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background:
                  "linear-gradient(to bottom right, #3b82f6, #6366f1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaBook style={{ color: "white", fontSize: "16px" }} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: 0,
                }}
              >
                5
              </p>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                Skills Learned
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background:
                  "linear-gradient(to bottom right, #facc15, #f59e0b)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaStar style={{ color: "white", fontSize: "16px" }} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: 0,
                }}
              >
                4.8
              </p>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            padding: "24px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Quick Actions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            <Link
              to="/skills"
              style={{
                backgroundColor: "#fff7ed",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom right, #f97316, #ea580c)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaShoppingCart style={{ color: "white" }} />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Browse Skills
              </span>
            </Link>

            <Link
              to="/update-profile"
              style={{
                backgroundColor: "#eff6ff",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom right, #3b82f6, #2563eb)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaEdit style={{ color: "white" }} />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Edit Profile
              </span>
            </Link>

            <button
              style={{
                backgroundColor: "#f0fdf4",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom right, #22c55e, #16a34a)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaClipboardList style={{ color: "white" }} />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                My Bookings
              </span>
            </button>

            <button
              style={{
                backgroundColor: "#faf5ff",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom right, #a855f7, #9333ea)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaHeadset style={{ color: "white" }} />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Support
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
