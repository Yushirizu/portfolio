import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

export default function Sex() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Watch this video
          </Typography>
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/c7E-tgmFuzw?si=h9VZjqF0lQtXRxtF"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
          <Box sx={{ mt: 2 }}>
            <Link
              href="/about"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Go to the about page
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
