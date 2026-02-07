import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaBars, FaTimes, FaExchangeAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "50px",
            fontWeight: "500",
            fontSize: "15px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            backgroundColor: isActive ? "#f97316" : "transparent",
            color: isActive ? "white" : "#374151",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          onClick={() => setIsMenuOpen(false)}
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "50px",
            fontWeight: "500",
            fontSize: "15px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            backgroundColor: isActive ? "#f97316" : "transparent",
            color: isActive ? "white" : "#374151",
          })}
        >
          Skill Listings
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/my-profile"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              display: "inline-block",
              padding: "10px 24px",
              borderRadius: "50px",
              fontWeight: "500",
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backgroundColor: isActive ? "#f97316" : "transparent",
              color: isActive ? "white" : "#374151",
            })}
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #ffedd5",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="px-4 sm:px-6 lg:px-12"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div style={{ position: "relative" }}>
              <FaExchangeAlt
                className="text-2xl sm:text-3xl"
                style={{
                  color: "#3b82f6",
                  animation: "spin 4s linear infinite",
                }}
              />
            </div>
            <span
              className="text-xl sm:text-2xl"
              style={{
                fontWeight: "700",
                background: "linear-gradient(to right, #f97316, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SkillSwap
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks}
            </ul>

            {/* Auth Section */}
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div className="relative group">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/0jZ3k4Y/default-avatar.png"
                    }
                    alt={user.displayName}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      border: "2px solid #fb923c",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute right-0 top-12 bg-white shadow-xl rounded-lg py-2 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-max z-50 border border-gray-100">
                    <p
                      style={{ color: "#1f2937", fontWeight: "600", margin: 0 }}
                    >
                      {user.displayName || "User"}
                    </p>
                    <p
                      style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}
                    >
                      {user.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "linear-gradient(to right, #ef4444, #dc2626)",
                    color: "white",
                    padding: "10px 24px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginLeft: "16px",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(to right, #f97316, #ea580c)",
                    color: "white",
                    padding: "10px 28px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(to right, #3b82f6, #2563eb)",
                    color: "white",
                    padding: "10px 28px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{
              color: "#374151",
              fontSize: "24px",
              padding: "8px",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            style={{
              padding: "16px 0",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks}
            </ul>
            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid #f3f4f6",
              }}
            >
              {user ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/0jZ3k4Y/default-avatar.png"
                      }
                      alt={user.displayName}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid #fb923c",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          color: "#1f2937",
                          fontWeight: "600",
                          margin: 0,
                        }}
                      >
                        {user.displayName || "User"}
                      </p>
                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    style={{
                      background: "linear-gradient(to right, #ef4444, #dc2626)",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                      width: "100%",
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      background: "linear-gradient(to right, #f97316, #ea580c)",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #2563eb)",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
