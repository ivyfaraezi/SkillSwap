import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { FaEnvelope, FaExchangeAlt, FaArrowLeft } from "react-icons/fa";
import "animate.css";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from login page if available
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");

      // Open Gmail in new tab
      window.open("https://mail.google.com", "_blank");

      // Navigate back to login after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      let errorMessage = "Failed to send reset email. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email address.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Please enter a valid email address.";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-50 blur-2xl animate__animated animate__pulse animate__infinite"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-50 blur-2xl animate__animated animate__pulse animate__infinite animate__delay-1s"></div>
      <div className="absolute top-1/2 right-10 text-blue-300 text-6xl opacity-30 animate__animated animate__fadeIn">
        <FaExchangeAlt />
      </div>

      <div className="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate__animated animate__fadeInUp">
        {/* Back Button */}
        <Link
          to="/login"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Login</span>
        </Link>

        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Forgot Password?</h2>
          <p className="text-gray-600 mt-2">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Sending...</span>
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        {/* Info */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-blue-700 text-sm text-center">
            💡 After clicking the button, you'll be redirected to Gmail to check
            your inbox.
          </p>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
