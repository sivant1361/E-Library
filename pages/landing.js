import React from "react";
import Header from "./components/Header";
import { Button, Container } from "@material-ui/core";

export default function About() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundImage:
            "url(https://bookriot.com/wp-content/uploads/2020/03/library-libraries-feature-700x375-1-1280x720.jpg)",
          height: "81.6%",
          position: "absolute",
          zIndex: 2,
          left: 0,
          top: "9.1rem",
          right: 0,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          height: "81.6%",
          position: "absolute",
          zIndex: 2,
          left: 0,
          top: "9.1rem",
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container style={{ padding: "2rem" }}>
          <p
            style={{
              color: "white",
              fontSize: "3.6rem",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            Think before you speak. <br />
            Read before you think.
          </p>
          <a href="/library" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#23395d",
                color: "#fff",
                fontSize: "1.3rem",
                fontWeight: 500,
              }}
            >
              Get Started
            </Button>
          </a>
        </Container>
      </div>
    </div>
  );
}
