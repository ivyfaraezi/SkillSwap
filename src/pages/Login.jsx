import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaExchangeAlt,
} from "react-icons/fa";
import "animate.css";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      let errorMessage = "Failed to login. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please try again later.";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Failed to login with Google. Please try again.");
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
          left: "80px",
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
          right: "80px",
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
          top: "50%",
          left: "40px",
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
          bottom: "25%",
          right: "40px",
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
          padding: "48px 40px",
        }}
        className="animate__animated animate__fadeInUp"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
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
            Welcome Back!
          </h2>
          <p style={{ color: "#6b7280", fontSize: "16px" }}>
            Sign in to continue swapping skills
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
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
                  paddingRight: "48px",
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

          {/* Password Field */}
          <div style={{ marginBottom: "16px" }}>
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
                placeholder="Enter your password"
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
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "right", marginBottom: "24px" }}>
            <Link
              to="/forgot-password"
              state={{ email: formData.email }}
              style={{
                color: "#f97316",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
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
                <span>Signing in...</span>
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div style={{ position: "relative", margin: "28px 0" }}>
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

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
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
          <span>Sign in with Google</span>
        </button>

        {/* Sign Up Link */}
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginTop: "24px",
            fontSize: "15px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#f97316",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
