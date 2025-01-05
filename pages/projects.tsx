import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Scroll from "../components/scroll";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          First-year project at UMons
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid size={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/images/tnt.png"
                alt="projetfinal"
                width="100%"
                sx={{
                  boxShadow: 3,
                  borderRadius: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              />
              <Typography mt={2} variant="body2" sx={{ textAlign: "center" }}>
                Synthesis of TNT
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              This project was a paper report about the utilisation of military
              explosives, most specifically TriNitroToluene (TNT) and Royal
              Demolition eXplosive (RDX). It was a research project on how these
              compounds are used, how they are produced, how they react, and
              why. The feedback from the teachers was that we focused too much
              on the military topic and not enough on the chemistry aspect. The
              only chemistry aspects present in the report were the synthesis
              formula of the compound, like the synthesis of the TNT on the left
              side.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              After our presentation, I have learned that you should always stay
              in context and never go too far off-topic, especially in final
              projects like this.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          First-year multidisciplinary project at HELHa
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid size={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/images/ares.png"
                alt="projetfinal"
                width="100%"
                sx={{
                  boxShadow: 3,
                  borderRadius: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              />
              <Typography mt={2} variant="body2" sx={{ textAlign: "center" }}>
                PCB design
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              First year at the University College, it’s the second quarter of
              the year and we had our first project that would regroup multiple
              lessons, including electronics and language C. The goal was to
              develop a system to count boxes moving past a light sensor. The
              count is displayed on a seven-segment display. The design brief
              given included the electronic circuit schematic for the
              up-and-down counter, which we had to reproduce first on a
              breadboard.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              My responsibility in this project was to develop a C program that
              would communicate between a communication card and the electronic
              circuit reproduced by the others. I had to learn how the
              communication card worked and code a program to link it with the
              circuit. Additionally, I was tasked with displaying the count on a
              computer screen using a library called “myconio.h” in C. I was
              also tasked with another person in the group to design the PCB
              circuit using the software Proteus, you can find the final design
              on the left.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              Finally, I have learned more about programming interfaces,
              hardware programming and electronics. I have also learned about
              project management using technics like the Program Evaluation and
              Review Technique (PERT) and Gantt charts.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          Aspirin automation project
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          The concept of this project was that we were free to choose any
          industrial process we wanted and build a simulation program in Unity
          for Schneider a Programmable Logical Controller (PLC). I proposed to
          my group the industrial process of aspirin, as I had already worked on
          making aspirin in my studies and knew the process well. I was tasked
          with designing the process and describing it to the others. I also
          drew a schematic of the process for a better understanding of the
          project.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I have learned how industrial processes can be easily converted into
          automation processes. At the same time, I have learned about new, more
          complex function blocks in Unity.
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          Wordskills competition
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid size={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/images/1712222376749.jpeg"
                alt="wordskills"
                width="100%"
                sx={{
                  boxShadow: 3,
                  borderRadius: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              />
              <Typography mt={2} variant="body2" sx={{ textAlign: "center" }}>
                All the participants
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              In my second year at HELHa, we had a presentation about
              WorldSkills, a competition with over 80 countries and more than 20
              different skills. They explained how we could join the
              competition, so when I got home, I looked up the list of skills.
              That is when I noticed a new one: Industry 4.0. It was hosted at
              Technocampus in Mons, a place I had already been to multiple times
              and where I knew some of the trainers, including the organizer. I
              decided to sign up and went to the pre-qualification event.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              The first part of the pre-qualification was a written test on
              topics like databases, web development, electricity, networking,
              automation, and more. Then there was a practical test that lasted
              3 to 4 hours. We had to create an interface to control a motor
              using a frequency inverter, turn on lamps, and build a
              Human-Machine Interface (HMI). At school, I had only worked with
              Unity and Schneider PLCs, but this time, it was Siemens. I had to
              learn TIA Portal on the fly and rely on the built-in help for
              every step since we did not have access to the Internet. I managed
              to turn on the motor using the frequency inverter and the lamps
              just 10 minutes before the end, which impressed the organizer.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              I had also invited a friend to join me, and he completed his task.
              We needed at least five participants for the competition, but
              after a month, we were only four, and eventually, the group
              dropped to three. Unfortunately, the competition was cancelled
              after three months because we did not have enough participants.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              Nevertheless, we still got to go to an event where they motivated
              us and explained their sponsors, you can find the image of all the
              participants on the left.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              Nevertheless, we still got to go to an event where they motivated
              us and explained their sponsors, you can find the image of all the
              participants.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          Project Lenny
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          It was during a hackathon, an event where people program a project on
          a defined subject. Here the subject was creating an AI chatbot, an
          XR/VR application or an AI-driven application. We chose to build an AI
          chatbot, but we knew nothing about it, we had a little lesson about
          Retrieval-augmented generation (RAG) and context for AIs earlier on
          the first day, but we had no knowledge of Python.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          The first day started by planning the project and thinking about what
          we wanted to do for that AI, such as what was her purpose, what type
          of application etc.… Then we started diving into libraries to use for
          our program. An organizer from the hackathon helped us and told us
          that we should use LangChain as our library. I followed his advice and
          started reading all the necessary documentation.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Eventually, I led the group on what to do and gave tasks to others. I
          also worked on long-term memory and a personality for the AI.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          The results were an AI capable of taking a 255-page pdf document about
          automation in context, retrieving sentences and explanations in that
          document using RAG, an AI capable of recognizing images and we even
          had a text-to-speech module where you could talk to the AI.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          With this project, I not only have learned a lot about Python, AI,
          LangChain, AI memory, and new models of databases such as the
          vectorial database. But I also have learned how to lead a team and
          give tasks to a group.
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          2nd-year multidisciplinary project
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid size={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/images/projetfinal.jpg"
                alt="projetfinal"
                width="100%"
                sx={{
                  boxShadow: 3,
                  borderRadius: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              />
              <Typography mt={2} variant="body2" sx={{ textAlign: "center" }}>
                Final structure of the project
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              Similarly to the first-year multidisciplinary project, it is the
              final project of the year, regrouping English, embedded systems
              and web development lessons. The design brief given described how
              we had to realise a system capable of sorting golf balls of
              different colours. A Web application built using the Bootstrap
              framework would retrieve information like when the balls have
              reached their destination and which colour they were. Those data
              should be registered in a database and displayed on a graph.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              My part in the project was to build the full stack website.
              Connection with the database designed by others, displaying the
              data and other functionality like a reset button and live data of
              what is happening. I also wrote the program for the Arduino
              controlling a stepper motor and a camera. You can find on the left
              the final structure of the project.
            </Typography>
            <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
              Overall, I have learned more about web development, web
              application architecture and embedded system development. I also
              had a hard time planning everything as it was a 5-day project with
              the Easter holidays in between.
            </Typography>
          </Grid>
        </Grid>

        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          2nd-year automation project
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          The main goal of this project was to regulate temperature using fans
          controlled by Siemens PLC. We were tasked to use
          Proportional–Integral–Derivative (PID) regulation to adjust the fans
          based on the target temperature. I was still not familiar with the
          software TIA Portal.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Since TIA Portal does not support collaboration, I handled all the
          programming, occasionally receiving input from my teammates. My work
          covered every aspect of the project. I configured the PID regulation
          using the appropriate TIA block, finding the best PID numbers by trial
          and error. I controlled the fans using Pulse Width Modulation (PWM).
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I also designed the HMI, which included a start and stop button. An
          admin page with role-based security and displayed information on both
          the HMI and a website hosted by the PLC. Additionally, I configured
          the PID system to display real-time data on a graph on the HMI.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          One challenge I encountered was between the physical start/stop button
          and the HMI start/stop button. Both controls needed to work together,
          which caused conflicts. To resolve this, I read my first-year lessons
          on binary logic and applied this knowledge to develop a solution.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Through this project, I have gained knowledge of Siemens automation
          and regulation systems. I have learned how to integrate PID control,
          work with analogue signals and resolve logical issues. While I had a
          Technocampus training on regulation, this project upgraded my
          practical skills in automation and programming.
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          3rd-year multidisciplinary project
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          This project was about checking the air quality in a room, here it was
          Total Volatile Organic Compounds (TVOC) and the eCO2 value which is a
          derivative of the TVOC. When the air quality is too poor, the
          autonomous system turns on a climatization, represented by a single
          fan. When the air quality is even more poor the system opens a window
          which is represented by a servo motor. You can control the fan and the
          motor from a control panel but also from your phone, the phone
          receives information about the quality of air and the limits to
          activate the fan or the motor.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          During this project, I had a terrible organisation and did everything
          last minute and I do not know if my project will work on time for the
          deadline.
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          Industrial project
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          The goal of this project was to retrieve data from a PLC by using an
          Ewon as a VPN and firewall. The project was in the mini factory 4 of
          the Technocampus site, and it was a 3-month project but only 5-6 days
          were in the factory. The data pulled from the PLC had to be displayed
          on a React app built using the T3-App framework, which also allows the
          use of a Discord authentication to access this data. This data had to
          be displayed in a Meta Quest 3 using XR and the Unity Game engine.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In this project, I was in charge of doing the back-end part of the
          website and polling the data from the PLC using Node-RED’s programming
          tool, I also worked on the visualisation of the data in the VR headset
          and using WebSocket in C#.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Overall, it is by far one of my favourite projects I have ever done,
          it regroups all the things I love, and I was very excited to learn
          about those subjects. I have also discovered a new passion for
          programming XR visualisation for industrial data.
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          mt={5}
          sx={{ fontWeight: "bold" }}
        >
          CETIC internship project
        </Typography>
        <Typography
          mt={2}
          mb={5}
          sx={{ textIndent: "2em", textAlign: "justify" }}
        >
          My internship project will be a demonstration that PLCs are not secure
          enough. My role in this project will be to create an OPC UA server on
          the PLC to send information, then I should pirate that information and
          demonstrate that OPCUA is not as secure as we think.
        </Typography>
      </Container>
    </>
  );
}
