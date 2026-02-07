import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../components/ServiceCard";
import skills from "../data/skills.json";
import { FaSearch, FaFilter } from "react-icons/fa";

const Services = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    let result = skills;

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((skill) => skill.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (skill) =>
          skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.providerName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredSkills(result);
  }, [searchQuery, selectedCategory]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #eff6ff, white)",
      }}
      className="py-12 lg:py-20"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16" data-aos="fade-up">
          <span
            style={{
              color: "#f97316",
              fontWeight: "600",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Explore
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontWeight: "700",
              color: "#1f2937",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            Skill Listings
          </h1>
          <p
            style={{
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Browse and discover a variety of skills offered by local providers.
            Find your next learning opportunity or share your expertise!
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

        {/* Search and Filter Section */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            padding: "16px",
            marginBottom: "24px",
          }}
          data-aos="fade-up"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", width: "100%" }}>
              <FaSearch
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
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 44px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.2s",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Category Filter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <FaFilter style={{ color: "#9ca3af", flexShrink: 0 }} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "14px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div
          className="mb-4 sm:mb-6 text-gray-500 text-sm sm:text-base"
          data-aos="fade-up"
        >
          Showing{" "}
          <span style={{ fontWeight: "600", color: "#f97316" }}>
            {filteredSkills.length}
          </span>{" "}
          skills
          {selectedCategory !== "All" && (
            <span>
              {" "}
              in{" "}
              <span style={{ fontWeight: "600", color: "#3b82f6" }}>
                {selectedCategory}
              </span>
            </span>
          )}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredSkills.map((skill) => (
              <ServiceCard key={skill.skillId} service={skill} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-12 sm:py-16 lg:py-20 px-6 sm:px-10 bg-white rounded-2xl shadow-lg"
            data-aos="fade-up"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl mb-4">🔄</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              No Skills Found
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
