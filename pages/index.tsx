import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          mt={10}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Ulysse Rossi
        </Typography>
        <Typography variant="h4" mt={10} sx={{ textAlign: "center" }}>
          industrial IT student at the Universty College of Haute École Louvain
          en Hainaut Charleroi and currently seeking for an internship of 14
          weeks in fields like automation, industry 4.0, XR visualization, web
          developpement and more.
        </Typography>
      </Container>
    </>
  );
}
