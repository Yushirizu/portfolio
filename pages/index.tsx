import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DownloadIcon from "@mui/icons-material/Download";
import Scroll from "../components/scroll";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Introduction" />
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Ulysse Rossi
          </Typography>
          <Typography variant="h4" mt={2} sx={{ textAlign: "center" }}>
            Industrial IT student at the University College of Haute École
            Louvain en Hainaut Charleroi and currently enrolled in an internship
            of 14 weeks at the Center of Excellence in Information Technology
            and Communication (CETIC) in domains like cybersecurity and
            automation.
          </Typography>
        </Box>
        <Grid container spacing={4} mt={10}>
          <Grid size={6}>
            <Link href="/about" passHref style={{ textDecoration: "none" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      About Me
                    </Typography>
                    <Typography mt={2} mb={2} sx={{ textAlign: "center" }}>
                      A description of my life, my education, and my hobbies.
                      <br />
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid size={6}>
            <Link href="/projects" passHref style={{ textDecoration: "none" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Projects
                    </Typography>
                    <Typography mt={2} mb={2} sx={{ textAlign: "center" }}>
                      Discover the projects I have worked on and the lessons I
                      learned from them.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={10}>
          <Grid size={12}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                component="a"
                href="/images/ROSSI_ULYSSE_CV.pdf"
                download
                sx={{ textDecoration: "none" }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    Download My CV
                    <DownloadIcon sx={{ textAlign: "center" }} />
                  </Typography>
                  <Typography mt={2} sx={{ textAlign: "center" }}>
                    Click here to download a copy of my CV.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          mt: 16,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Public repository can be found on GitHub:{" "}
          <a href="https://github.com/Yushirizu/portfolio">
            https://github.com/Yushirizu/portfolio
          </a>
        </Typography>
      </Box>
    </>
  );
}
