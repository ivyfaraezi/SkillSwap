import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../hooks/useAuth";
import {
  FaUser,
  FaImage,
  FaArrowLeft,
  FaSave,
  FaExchangeAlt,
} from "react-icons/fa";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    photoURL: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    if (user) {
      setFormData({
        name: user.displayName || "",
        photoURL: user.photoURL || "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    setLoading(true);

    try {
      await updateUserProfile(
        formData.name,
        formData.photoURL || user.photoURL,
      );
      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, white, #ffedd5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorations */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "80px",
          width: "128px",
          height: "128px",
          background: "#fed7aa",
          borderRadius: "50%",
          opacity: "0.5",
          filter: "blur(40px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "80px",
          width: "192px",
          height: "192px",
          background: "#bfdbfe",
          borderRadius: "50%",
          opacity: "0.5",
          filter: "blur(40px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "33%",
          left: "40px",
          color: "#93c5fd",
          fontSize: "60px",
          opacity: "0.3",
        }}
      >
        <FaExchangeAlt style={{ animation: "spin 4s linear infinite" }} />
      </div>

      <div
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "24px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          padding: "40px",
        }}
        data-aos="fade-up"
      >
        {/* Back Button */}
        <Link
          to="/my-profile"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#4b5563",
            textDecoration: "none",
            marginBottom: "24px",
          }}
        >
          <FaArrowLeft />
          <span>Back to Profile</span>
        </Link>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          {/* Current Avatar Preview */}
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "16px",
              border: "4px solid #fed7aa",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              overflow: "hidden",
              margin: "0 auto 16px",
            }}
          >
            {formData.photoURL || user?.photoURL ? (
              <img
                src={formData.photoURL || user?.photoURL}
                alt={formData.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://i.ibb.co/0jZ3k4Y/default-avatar.png";
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to right, #f97316, #ea580c)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaUser style={{ color: "white", fontSize: "30px" }} />
              </div>
            )}
          </div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "8px",
            }}
          >
            Update Profile
          </h2>
          <p style={{ color: "#6b7280" }}>Update your personal information</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Display Name
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
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "white",
                }}
                required
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Photo URL
            </label>
            <div style={{ position: "relative" }}>
              <FaImage
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type="url"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleInputChange}
                placeholder="Enter your photo URL"
                style={{
                  width: "100%",
                  paddingLeft: "48px",
                  paddingRight: "16px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "white",
                }}
              />
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "8px" }}>
              💡 You can use{" "}
              <a
                href="https://imgbb.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "none" }}
              >
                imgbb.com
              </a>{" "}
              to upload your image and get a URL
            </p>
          </div>

          {/* Email (Read-only) */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                value={user?.email || ""}
                disabled
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  background: "#f9fafb",
                  color: "#6b7280",
                  cursor: "not-allowed",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "8px" }}>
              Email cannot be changed
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "linear-gradient(to right, #f97316, #ea580c)",
              color: "white",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "18px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid white",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                ></span>
                <span>Updating...</span>
              </>
            ) : (
              <>
                <FaSave />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </form>

        {/* Cancel Button */}
        <Link
          to="/my-profile"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "16px",
            border: "2px solid #e5e7eb",
            borderRadius: "12px",
            fontWeight: "600",
            color: "#4b5563",
            textDecoration: "none",
            marginTop: "16px",
            boxSizing: "border-box",
          }}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
