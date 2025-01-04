import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        First-year project at UMons
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid size={3}>
          <img src="/images/tnt.png" alt="TNT" width="100%" />
        </Grid>
        <Grid size={9}>
          <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
            This project was a paper report about the use of military
            explosives, most specifically TriNitroToluene (TNT) and Royal
            Demolition eXplosive (RDX). It was a research project on how these
            compounds are used, how they are produced, how they react, and why.
            The feedback from the teachers was that we focused too much on the
            military side and not enough on the chemistry aspect. I learned
            after the presentation that you should always stay in context and
            never go too far off-topic, especially in final projects like this.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        First-year multidisciplinary project at HELHa
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid size={3}>
          <img src="/images/ares.png" alt="schéma ares" width="100%" />
        </Grid>
        <Grid size={9}>
          <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
            First year at the University College, it’s the second quarter of the
            year and we had our first project that would regroup multiple
            lessons, including electronics and language C. The goal was to
            develop a system to count boxes moving past a light sensor. The
            count is displayed on a seven-segment display. The design brief
            given included the electronic circuit schematic for the up-and-down
            counter, which we had to reproduce first on a breadboard.
          </Typography>
          <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
            My responsibility in this project was to develop a C program that
            would communicate between a communication card and the electronic
            circuit reproduced by the others. I had to learn how the
            communication card worked and code a program to link it with the
            circuit. Additionally, I was tasked with displaying the count on a
            computer screen using a library called “myconio.h” in C.
          </Typography>
          <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
            Finally, I have learned more about programming interfaces, hardware
            programming and electronics. I have also learned about project
            management using methods like the Program Evaluation and Review
            Technique (PERT) and Gantt charts.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        Aspirin automation project
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        The concept of this project was that we were free to choose any
        industrial process we wanted and build a simulation program in Unity for
        Schneider PLC. I proposed to my group the industrial process of aspirin,
        as I had already worked on making aspirin in my studies and knew the
        process well. I was tasked with designing the process and describing it
        to the others. I also drew a schematic of the process for a better
        understanding of the project.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I learned how industrial processes can be easily converted into
        automation processes. I also learned about new, more complex function
        blocks in Unity.
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        Wordskills competition
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In my second year at HELHa we had a presentation about WorldSkills, a
        competition with over 80 countries and more than 20 different skills.
        They explained how we could join the competition, so when I got home, I
        looked up the list of skills. That is when I noticed a new one: Industry
        4.0. It was hosted at Technocampus in Mons, a place I had already been
        to multiple times and where I knew some of the trainers, including the
        organizer. I decided to sign up and went to the pre-qualification event.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In my second year at HELHa we had a presentation about WorldSkills, a
        competition with over 80 countries and more than 20 different skills.
        They explained how we could join the competition, so when I got home, I
        looked up the list of skills. That is when I noticed a new one: Industry
        4.0. It was hosted at Technocampus in Mons, a place I had already been
        to multiple times and where I knew some of the trainers, including the
        organizer. I decided to sign up and went to the pre-qualification event.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I had also invited a friend to join me, and he completed his task. We
        needed at least five participants for the competition, but after a
        month, we were only four, and eventually, the group dropped to three.
        Unfortunately, the competition was cancelled after three months because
        we did not have enough participants.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In conclusion, I have learned a lot about TIA Portal and how things are
        done in Industry 4.0, like the software they used or the communication
        system. It has also made me realise that working with TIA is easier than
        working with Unity because the built-in help is well done.
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        2nd-year project multidisciplinary project
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid size={3}>
          <img src="/images/projetfinal.jpg" alt="projetfinal" width="100%" />
        </Grid>
        <Grid size={9}>
          <Typography sx={{ textIndent: "2em", textAlign: "justify" }}>
            Same thing as the first-year multidisciplinary project, it’s the
            second quarter and it’s the final project of the year, regrouping
            English, embedded systems and web development lessons. The design
            brief given described how we had to realise a system capable of
            sorting golf balls of different colours. A Web application built
            using the Bootstrap framework would retrieve information like when
            the balls have reached their destination and which colour they were.
            Those data should be registered in a database and displayed on a
            graph.
          </Typography>
          <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
            My part in the project was to build the full stack website, so
            connection with the database designed by others, displaying the data
            and other functionality like a reset button and live data of what’s
            happening. I also wrote the program for the Arduino controlling a
            stepper motor and a camera.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        sx={{ fontWeight: "bold" }}
      >
        2nd Year Automation Project
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        The main goal of this project was to regulate temperature using fans
        controlled by Siemens PLC. We were tasked to use
        Proportional–Integral–Derivative (PID) regulation to adjust the fans
        based on the target temperature. I was not familiar with Siemens TIA
        Portal, as the other projects were one Schneider Unity XL.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Since TIA Portal does not support collaboration, I handled all the
          programming, occasionally receiving input from my teammates. My work
          covered every aspect of the project. I configured the PID regulation
          using the appropriate TIA block, finding the best PID numbers by trial
          and error. I controlled the fans using Pulse Width Modulation (PWM)
          and worked on analogue values for Siemens PLCs..
        </Typography>
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I also designed the HMI, which included a start and stop button, an
        admin page with role-based security, and displayed information on both
        the HMI and a website built with the PLC, the website was hosted by the
        PLC. Additionally, I configured the PID system to display real-time data
        on a graph on the HMI.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I also designed the HMI, which included a start and stop button, an
        admin page with role-based security, and displayed information on both
        the HMI and a website built with the PLC, the website was hosted by the
        PLC. Additionally, I configured the PID system to display real-time data
        on a graph on the HMI.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        Through this project, I gained knowledge of Siemens automation and
        regulation systems. I learned how to integrate PID control, work with
        analogue signals and resolve logical issues. While I had a Technocampus
        training on regulation, this project upgraded my practical skills in
        automation and programming.
      </Typography>
    </Container>
  );
}
