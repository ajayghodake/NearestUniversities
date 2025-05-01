import React, { useState } from "react";

export default function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 -1px 10px rgba(0, 0, 0, 0.1)",
        fontSize: "0.9rem",
        color: "#666",
      }}
    >
      <p style={{ margin: 0 }}>
        <span>© 2025 | This App is developed by </span>
        <a
          href="https://www.crio.do/learn/portfolio/buntyghodake1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            background: hovered ? "#d98300" : "#ef9700",
            color: hovered ? "#fff" : "#000",
            lineHeight: "1.75",
            fontFamily: "'Lato', sans-serif",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
            padding: "4px 16px",
            fontWeight: "700",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Ajay Ghodake
          <i
            className="fas fa-arrow-right"
            style={{
              color: hovered ? "#fff" : "#000",
              transition: "color 0.3s",
              fontSize: "12px",
              marginTop: "2px",
            }}
          ></i>
        </a>
      </p>
    </footer>
  );
}
