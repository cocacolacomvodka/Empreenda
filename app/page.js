import React from "react";
import Link from "next/link";

const navigation = [
  {
    name: "Empresas",
    href: "/empresas",
  },
  {
    name: "Bolsa de Valores",
    href: "/bolsa",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to top left, black, rgba(204, 204, 204, 0.2), black)",
      }}
    >
      <nav style={{ margin: "1rem 0" }}>
        <div
          style={{
            display: "inline-flex",
            borderRadius: "0.375rem",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <button
                type="button"
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#718096",
                  background: "transparent",
                  border: "1px solid #718096",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </nav>
      <div
        style={{
          display: "none",
          width: "100vw",
          height: "1px",
          animation: "glow 2s infinite",
          background: "linear-gradient(to right, rgba(204, 204, 204, 0), rgba(204, 204, 204, 0.5), rgba(204, 204, 204, 0))",
        }}
      />
      <h1
        style={{
          zIndex: "10",
          fontSize: "4rem",
          color: "transparent",
          background: "white",
          cursor: "default",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          animation: "title 0.5s ease-in",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          whiteSpace: "nowrap",
        }}
      >
        <img src="/Empreenda.svg" alt="empreenda" style={{ width: "30vw" }} />
      </h1>
      <div
        style={{
          display: "none",
          width: "100vw",
          height: "1px",
          animation: "glow 2s infinite",
          background: "linear-gradient(to right, rgba(204, 204, 204, 0), rgba(204, 204, 204, 0.5), rgba(204, 204, 204, 0))",
        }}
      />
    </div>
  );
}
