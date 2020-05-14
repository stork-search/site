import React from "react"
import { Helmet } from "react-helmet"

const DocsNote = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(180, 184, 219)",
        border: "1px solid hsla(0, 0%, 0%, 0.2)",
        borderRadius: "3px",
        padding: "1em",
        fontSize: "0.9em",
        marginTop: `2rem`,
        marginBottom: `1rem`,
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "2.5rem",
          lineHeight: "3rem",
          color: "hsla(0, 0%, 100%, 0.8)",
          background: "hsla(0, 0%, 0%, 0.2)",
          fontWeight: "bold",
          width: "3rem",
          height: "3rem",
          flexShrink: "0",
          textAlign: "center",
          marginRight: "1rem",
          marginTop: "1.5rem",
          borderRadius: "50%",
        }}
      >
        !
      </span>
      <div>
        <p
          style={{
            fontSize: "0.8em",
            color: "hsla(0, 0%, 0%, 0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            margin: "0"
          }}
        >
          Note:
        </p>
        {children}
      </div>
    </div>
  )
}

export default DocsNote
