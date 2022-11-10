import Reacts from "react";

import { useRouter } from "next/router";
import { Grid, Container } from "@material-ui/core";

export default function Header() {
  const router = useRouter();

  const isActive = (path) => {
    if (router.pathname === path) {
      return {
        color: "#004499",
        backgroundColor: "lightblue",
        textDecoration: "none",
        padding: "1.4rem 2rem",
        fontWeight: 500,
      };
    } else {
      return {
        color: "#fff",
        textDecoration: "none",
        padding: "1.4rem 2rem",
        fontWeight: 500,
      };
    }
  };
  return (
    <div>
      <div
        style={{
          padding: "15px 80px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img src="liblogo.png" alt="navlogo" style={{ width: "8vw" }} />
        <p
          style={{
            alignItems: "center",
            marginRight: "1rem",
            color: "#23397d",
          }}
        >
          Nothing is pleasanter than exploring a library
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#23395d",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 80px",
        }}
      >
        <div>
          <Grid container align="center">
            <a style={isActive("/")} href="/">
              Home
            </a>
            <a style={isActive("/library")} href="/library">
              Library
            </a>
            <a style={isActive("/chart")} href="/chart">
              Frequency
            </a>
          </Grid>
        </div>
      </div>
    </div>
  );
}
