import { Link } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaSadTear } from "react-icons/fa";
import "animate.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-50 blur-2xl animate__animated animate__pulse animate__infinite"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-50 blur-2xl animate__animated animate__pulse animate__infinite animate__delay-1s"></div>
      <div className="absolute top-1/4 right-20 text-blue-300 text-6xl opacity-30">
        <FaExchangeAlt />
      </div>
      <div className="absolute bottom-1/4 left-20 text-orange-300 text-4xl opacity-30">
        🐾
      </div>

      <div className="text-center animate__animated animate__fadeIn">
        {/* 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 leading-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-6xl md:text-8xl animate__animated animate__bounce animate__infinite animate__slow">
              🐕
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
            <FaSadTear className="text-orange-500" />
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            It seems like our furry friend wandered off with the page you're
            looking for. Let's get you back on track!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaHome />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-white border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
          >
            <span>Browse Services</span>
          </Link>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto shadow-lg border border-gray-100">
          <p className="text-gray-600">
            <span className="font-semibold text-orange-500">Fun Fact:</span> Did
            you know? Dogs can keep warm in winter because they have a two-layer
            coat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
