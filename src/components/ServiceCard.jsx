import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    skillId,
    skillName,
    providerName,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  return (
    <div
      className="service-card w-full"
      data-aos="fade-up"
      data-aos-duration="800"
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Image Container */}
      <div
        style={{ position: "relative", overflow: "hidden", height: "200px" }}
      >
        <img
          src={image}
          alt={skillName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
          }}
        />
        {/* Category Badge */}
        <div style={{ position: "absolute", top: "16px", left: "16px" }}>
          <span
            style={{
              background: "linear-gradient(to right, #f97316, #ea580c)",
              color: "white",
              padding: "6px 14px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: "500",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            {category}
          </span>
        </div>
        {/* Slots Badge */}
        <div style={{ position: "absolute", top: "16px", right: "16px" }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: "500",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              background:
                slotsAvailable > 3
                  ? "#22c55e"
                  : slotsAvailable > 0
                    ? "#eab308"
                    : "#ef4444",
              color: "white",
            }}
          >
            {slotsAvailable} slots left
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {skillName}
        </h3>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "8px" }}>
          by {providerName}
        </p>
        <p
          style={{
            color: "#4b5563",
            fontSize: "14px",
            marginBottom: "20px",
            lineHeight: "1.6",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FaStar style={{ color: "#facc15" }} />
            <span style={{ fontWeight: "600", color: "#1f2937" }}>
              {rating}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <FaDollarSign style={{ color: "#22c55e" }} />
            <span style={{ fontWeight: "600", color: "#1f2937" }}>
              ${price}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/skill/${skillId}`}
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(to right, #3b82f6, #2563eb)",
            color: "white",
            padding: "14px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "15px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
