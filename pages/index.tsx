import React, { useEffect } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  const [count, setCount] = React.useState(0);
  const update = async () => {
    await fetch("http://localhost:1066/api/v1/counter")
      .then((res) => res.text())
      .then((data) => setCount(Number(data)))
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    update();
    setInterval(update, 1000);
  }, []);

  const updateMyPain = async () => {
    await fetch("http://localhost:1066/api/v1/counter/increment", {
      method: "PUT",
    }).catch((err) => console.error(err));

    await update();
  };

  return (
    <div>
      <title>I HATE NPM I HATE NPM I HATE NPM</title>
      <link rel="icon" href="/favicon.ico" />

      <main>
        <Container>
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
            }}
          >
            I HATE NPM <br></br>I HATE NPM <br></br>I HATE NPM
          </Typography>
          <Typography variant="h2">
            NPM has caused me pain {new Intl.NumberFormat().format(count)}{" "}
            time(s)
          </Typography>
          <Button
            sx={{
              width: "100%",
              height: "100%",
            }}
            variant="contained"
            size="large"
            onClick={updateMyPain}
          >
            Oh great, another stupid NPM error
          </Button>
          <Typography variant="h6">
            Who cares about doing actual work when you can debug NPM for hours!
            🙃
          </Typography>
        </Container>
      </main>
    </div>
  );
}
