import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaExchangeAlt,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import "animate.css";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasMinLength: false,
  });

  const validatePassword = (password) => {
    const errors = {
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasMinLength: password.length >= 6,
    };
    setPasswordErrors(errors);
    return errors.hasUppercase && errors.hasLowercase && errors.hasMinLength;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      validatePassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(formData.password)) {
      toast.error("Please fix the password errors before registering.");
      return;
    }

    setLoading(true);

    try {
      // Create user
      await createUser(formData.email, formData.password);

      // Update profile
      await updateUserProfile(
        formData.name,
        formData.photoURL || "https://i.ibb.co/0jZ3k4Y/default-avatar.png",
      );

      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      let errorMessage = "Failed to create account. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "An account with this email already exists.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Please enter a valid email address.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success("Account created with Google successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign up with Google. Please try again.");
    }
  };

  const PasswordRequirement = ({ met, text }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "13px",
        color: met ? "#22c55e" : "#ef4444",
      }}
    >
      {met ? <FaCheck /> : <FaTimes />}
      <span>{text}</span>
    </div>
  );

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
          opacity: 0.5,
          filter: "blur(40px)",
        }}
        className="animate__animated animate__pulse animate__infinite"
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
          opacity: 0.5,
          filter: "blur(40px)",
        }}
        className="animate__animated animate__pulse animate__infinite animate__delay-1s"
      ></div>
      <div
        style={{
          position: "absolute",
          top: "33%",
          right: "40px",
          color: "#93c5fd",
          fontSize: "60px",
          opacity: 0.3,
        }}
        className="animate__animated animate__fadeIn"
      >
        <FaExchangeAlt />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "33%",
          left: "40px",
          color: "#fdba74",
          fontSize: "40px",
          opacity: 0.3,
        }}
        className="animate__animated animate__fadeIn animate__delay-1s"
      >
        �
      </div>

      <div
        style={{
          maxWidth: "440px",
          width: "100%",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderRadius: "24px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          padding: "40px 40px",
        }}
        className="animate__animated animate__fadeInUp"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              textDecoration: "none",
            }}
          >
            <FaExchangeAlt style={{ fontSize: "32px", color: "#3b82f6" }} />
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                background: "linear-gradient(to right, #f97316, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SkillSwap
            </span>
          </Link>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "8px",
            }}
          >
            Create Account
          </h2>
          <p style={{ color: "#6b7280", fontSize: "16px" }}>
            Join us to start exchanging skills locally
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              Full Name
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
                placeholder="Enter your full name"
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
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <FaEnvelope
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  zIndex: 1,
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
                  height: "52px",
                  paddingLeft: "48px",
                  paddingRight: "16px",
                  border: "2px solid #d1d5db",
                  borderRadius: "12px",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#f9fafb",
                  color: "#1f2937",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
                required
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "15px",
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
                placeholder="Enter your photo URL (optional)"
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
              />
            </div>
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <FaLock
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                style={{
                  width: "100%",
                  paddingLeft: "48px",
                  paddingRight: "48px",
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div
                style={{
                  marginTop: "12px",
                  padding: "12px",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <PasswordRequirement
                  met={passwordErrors.hasUppercase}
                  text="At least one uppercase letter"
                />
                <PasswordRequirement
                  met={passwordErrors.hasLowercase}
                  text="At least one lowercase letter"
                />
                <PasswordRequirement
                  met={passwordErrors.hasMinLength}
                  text="At least 6 characters long"
                />
              </div>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: "linear-gradient(to right, #f97316, #ea580c)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "16px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
            }}
          >
            {loading ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
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
                <span>Creating account...</span>
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div style={{ position: "relative", margin: "24px 0" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "100%", borderTop: "1px solid #e5e7eb" }}
            ></div>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                padding: "0 16px",
                background: "white",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignUp}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            background: "white",
            border: "2px solid #e5e7eb",
            padding: "14px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            color: "#374151",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          <FaGoogle style={{ color: "#ef4444", fontSize: "20px" }} />
          <span>Sign up with Google</span>
        </button>

        {/* Login Link */}
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginTop: "20px",
            fontSize: "15px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#f97316",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
