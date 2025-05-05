import React from "react";

const ButtonCard = ({ icon, label, subLabel, url }) => (
  <div style={{ margin: "30px 0" }}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button style={btnStyle}>
        <span role="img" aria-label="icon">
          {icon}
        </span>{" "}
        {label}
        <div style={{ fontSize: 12 }}>{subLabel}</div>
      </button>
    </a>
  </div>
);

const btnStyle = {
  background: "#fff",
  color: "#000",
  padding: "15px 25px",
  borderRadius: 10,
  border: "none",
  fontSize: 18,
  marginBottom: 20,
  cursor: "pointer",
  width: 300,
  fontWeight: "bold",
};

export default ButtonCard;
