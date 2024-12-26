import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} my={4}>
        <Grid size={6}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="images/vlc_ro5IQF5l14.jpg"
              alt="balls sorting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Balls sorting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The purpose of our multidisciplinary second-year project is to
                realise a structure that sorts balls golf. The general context
                of it is that we must sort two different colours of golf balls
                for an industry, yellow and pink balls. Those balls will go into
                containers, each container has a maximum capacity of four balls.
                When a container reaches its full capacity, the ball will go to
                another container. The whole project was divided into three
                parts: mechanical structure and design, database and web and
                embedded systems. Technologies used:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Arduino</li>
                  <li>Bootstrap</li>
                  <li>MySQL</li>
                  <li>JavaScrpit</li>
                  <li>Twig</li>
                </ul>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a
                  href=" 
                https://github.com/Yushirizu/PROJET-MULTI-2"
                >
                  Here is the link to the github repository
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Project 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
