import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { records } from "./data";

import { Button, Item, Grid } from "@material-ui/core";
// import Grid from "@mui/material/Unstable_Grid2";

export default function Chart() {
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [dates, setDates] = useState([]);

  const [flag, setFlag] = useState(0);
  const [state, setState] = useState(1);

  function countFreq(arr, n) {
    var mp = new Map();

    // Traverse through array elements and
    // count frequencies
    for (var i = 0; i < n; i++) {
      if (mp.has(arr[i])) mp.set(arr[i], mp.get(arr[i]) + 1);
      else mp.set(arr[i], 1);
    }

    var keys = [],
      values = [];

    mp = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));

    mp.forEach((value, key) => {
      keys.push(key);
      values.push(value);
    });

    return { keys, values };
  }

  const display = (arr) => {
    const { keys, values } = countFreq(arr, arr.length);
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(arr.length)).map((_, index) => (
          <Grid xs={16} sm={6} md={3} key={index}>
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                background: "whitesmoke",
                margin: "1rem",
                borderRadius: "15px",
                height: "6rem",
                border: "1px solid #aaa",
              }}
            >
              <p style={{ fontWeight: 500, color: "#007" }}>{keys[index]}</p>
              <p style={{ fontWeight: 500 }}>{values[index]}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  useEffect(() => {
    if (flag == 0) {
      setTitles(records.map((rec) => rec["title"]));
      setAuthors(records.map((rec) => rec["author"]));
      setGenres(records.map((rec) => rec["genre"]));
      setDates(records.map((rec) => rec["date"]));
      console.log(titles.length, authors.length, genres.length, dates.length);
      setFlag(1);
    }
  }, []);

  if (flag == 0) {
    return <div style={{ padding: "1rem" }}>Loading</div>;
  } else
    return (
      <div>
        <Header />
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Button
                style={{
                  color: state == 1 ? "gold" : "white",
                  borderRadius: "25px",
                  margin: "0.5rem 0rem 0rem 1rem",
                  fontSize: "0.8rem",
                  background: "#000031",
                }}
                onClick={() => setState(1)}
              >
                Title
              </Button>
            </div>
            <div>
              <Button
                style={{
                  color: state == 2 ? "gold" : "white",
                  borderRadius: "25px",
                  margin: "0.5rem 0rem 0rem 1rem",
                  fontSize: "0.8rem",
                  background: "#000031",
                }}
                onClick={() => setState(2)}
              >
                Authors
              </Button>
            </div>
            <div>
              <Button
                style={{
                  color: state == 3 ? "gold" : "white",
                  borderRadius: "25px",
                  margin: "0.5rem 0rem 0rem 1rem",
                  fontSize: "0.8rem",
                  background: "#000031",
                }}
                onClick={() => setState(3)}
              >
                Genre
              </Button>
            </div>
            <div>
              <Button
                style={{
                  color: state == 4 ? "gold" : "white",
                  borderRadius: "25px",
                  margin: "0.5rem 0rem 0rem 1rem",
                  fontSize: "0.8rem",
                  background: "#000031",
                }}
                onClick={() => setState(4)}
              >
                Dates
              </Button>
            </div>
          </div>
          {state == 1 && titles && (
            <div style={{ padding: "1rem 0" }}>{display(titles)}</div>
          )}
          {state == 2 && authors && (
            <div style={{ padding: "1rem 0" }}>{display(authors)}</div>
          )}
          {state == 3 && genres && (
            <div style={{ padding: "1rem 0" }}>{display(genres)}</div>
          )}
          {state == 4 && dates && (
            <div style={{ padding: "1rem 0" }}>{display(dates)}</div>
          )}
        </div>
      </div>
    );
}
