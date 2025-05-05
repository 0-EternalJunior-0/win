import React from "react";
import dogImage from "../assets/dog.png";

const DefaultLayout = ({ children }) => (
  <div
    style={{
      backgroundColor: "#0c0c0c",
      color: "#fff",
      minHeight: "100vh",
      textAlign: "center",
      padding: "40px",
    }}
  >
    <img
      src={dogImage}
      alt="promo"
      style={{ width: 150, borderRadius: "50%", marginBottom: 20 }}
    />
    {children}
  </div>
);

export default DefaultLayout;
