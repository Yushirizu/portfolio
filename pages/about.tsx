import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        mt={5}
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Education
      </Typography>
      <Typography variant="h5" mt={2}>
        Primary school : Octave Pirmez Lausprelle
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In primary school, I was a high-potential kid. I am not bragging, but I
        was ahead of other kids, especially in maths. My mom crafted me a book
        with all the different known chemical compounds at the time with all
        their details, colour, form, mass, etc… She also printed me the periodic
        table of elements and I memorized it. I was also passionate about maths,
        I read my mom’s memory aid about university-level maths and science,
        like statistics, trigonometry, derivatives and integrals, and even
        physical constants.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In my third year of primary school, the school's director offered me a
        proposition: to skip a year and go straight to the fifth year. While it
        was a great opportunity for me, I was still a kid, and I thought about
        losing all my friends I had at that time. However, I made the sacrifice
        anyway, now I have no regrets about my choice, and I am happy I did it.
      </Typography>
      <Typography variant="h5" mt={2}>
        Secondary School : Collège Saint Augstin Gerpinnes
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In secondary school, I was still passionate about chemistry, but I lost
        interest in maths as I was not practising it anymore. I wanted to be a
        chemist and discover a new element in the periodic table, as I learned
        more about it, I found out that it was impossible (it is not possible at
        a scientific level), so I then wanted to have a Nobel Prize in chemistry
        for a big discovery.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I followed my first IT lesson, in my fourth year of secondary school. I
        had already played with a computer or played on a computer, even if I
        never thought about programming. As I learned about programming and
        computer history, I developed a strong interest in IT and web
        development.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        In my last year of secondary school, I had to make a choice: go for the
        science route and follow my dream of discovering new theories and
        getting a Nobel Prize, even though I was not confident enough to do it.
        Do I go for the new IT route and learn about my new passion?
      </Typography>
      <Typography variant="h5" mt={2}>
        University : UMons
      </Typography>
      <Typography
        variant="h2"
        mt={5}
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Hobbies
      </Typography>
      <Typography variant="h5" mt={2}>
        Video Games
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I like to play video games, especially automation games like
        Satisfactory where you always need to optimize your production and
        carefully plan everything to maximize output from minimal resources. It
        is also a game which taught me industrial IT English terms like
        “conveyor belt”, “assembly line”, “manufacturer”, “power plant”, etc…
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        I also love to play rhythm games like Osu! or Geometry Dash. These games
        taught me how repeating a task every day mindlessly is not a great way
        to improve a skill, you need to work on your weaknesses and push
        yourself beyond your comfort zone if you want to improve. Rhythm games
        also require perseverance, a strong mindset and nerve control.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        For example, you need to be perseverant to try again and again to
        complete a challenging level and face failure repeatedly. You cannot
        give up on the first difficulty you encounter. You also need to have a
        strong mental when you die in the last part of the level or mind block.
        A mind block is when you have attempted a level so many times that your
        brain is on autopilot and a part that was easy before is now a part you
        always die on. It is important not to blame yourself and give up.
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        It also requires nerve control. Let's say you are at 80% of the level
        and have never reached that point before. You want to complete it, but
        your nerves are climbing. You need to stay focused and stop your hands
        from shaking.
      </Typography>
      <Typography variant="h5" mt={2}>
        Walking
      </Typography>

      <Typography
        variant="h2"
        mt={5}
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Inspiration
      </Typography>
      <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
        One of my greatest inspirations is Vedal987, a developer and Twitch
        streamer. In his early days as a streamer, he created an AI capable of
        playing Osu! (I mention this in my hobbies). Over time, he transformed
        that AI into a chatbot that could interact with his Twitch chat. After
        two years, his AI evolved to the point where it is difficult to compare
        it to other human Twitch streamers in terms of interactions and
        personality.
      </Typography>
      <Typography
        mt={2}
        mb={5}
        sx={{ textIndent: "2em", textAlign: "justify" }}
      >
        Vedal987 inspires me because of his dedication to what has become the
        biggest project of his life. I admire his creativity and innovation in
        ways that engage and entertain his streams with such simple ideas yet so
        impactful while making his AI feel more interactive and human.
      </Typography>
    </Container>
  );
}
