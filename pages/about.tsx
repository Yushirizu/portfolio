import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="A description of my life, my education, and my hobbies."
        />
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h3"
          mt={5}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Education
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Primary school : Octave Pirmez Lausprelle
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In primary school, I was a high-potential kid. My mom crafted me a
          book with all the different known chemical compounds at the time with
          all their details, colour, form, mass, etc… She also printed me the
          periodic table of elements and I memorized it. I was also passionate
          about maths, I read my mom’s memory aid about university-level maths
          and science, like statistics, trigonometry, derivatives and integrals,
          and even physical constants.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In my third year, the school's director offered me a proposition: to
          skip a year and go straight to the fifth year. While it was a great
          opportunity for me, I was still a kid, and I thought about losing all
          my friends I had at that time. However, I made the sacrifice anyway,
          now I have no regrets about my choice, and I am happy I did it.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Secondary School : Collège Saint Augustin Gerpinnes
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In secondary school, I was still passionate about chemistry, but I
          lost interest in maths as I was not practising it anymore. I wanted to
          be a chemist and discover a new element in the periodic table, as I
          learned more about it, I found out that it was impossible (it is not
          possible at a scientific level), so I then wanted to have a Nobel
          Prize in chemistry for a big discovery.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I followed my first IT lesson, in my fourth year of secondary school.
          I had already played with a computer or played on a computer, even if
          I never thought about programming. As I learned about programming and
          computer history, I developed a strong interest in IT and web
          development.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In my last year of secondary school, I had to make a choice: go for
          the science route and follow my dream of discovering new theories and
          getting a Nobel Prize, even though I was not confident enough to do
          it. Do I go for the new IT route and learn about my new passion?
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          University of Mons
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I decided to try and study Chemistry at the university. I thought I
          was doing quite well in the lessons, I just had difficulties in maths.
          But then arrived my first exams and I studied only during the holiday.
          I failed every lesson with the exceptions of English and Physics, I
          then questioned myself about my choice and if it was just that I did
          not study the lessons, they did not interest me enough, or something
          else. I followed some lessons during the second quarter but slowly
          skipped some classes like Biology or Maths. I was not interested
          anymore and at the end of the year, I decided to quit and go into
          Industrial IT studying at Haute Ecole Louvain en Hainaut of Charleroi.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Haute Ecole Louvain en Hainaut
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Now I am here studying at HELHa and enjoying my studies, getting good
          marks and realizing projects I truly love. I am in my third and last
          year at school I got an internship at CETIC and will maybe work next
          year.
        </Typography>
        <Typography
          variant="h3"
          mt={5}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Hobbies
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Video Games
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I like to play video games, especially automation games like
          Satisfactory where you always need to optimize your production and
          carefully plan everything to maximize output from minimal resources.
          It is also a game which taught me industrial IT English terms like
          “conveyor belt”, “assembly line”, “manufacturer”, “power plant”, etc…
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I also love to play rhythm games like Osu! or Geometry Dash. These
          games taught me how repeating a task every day mindlessly is not a
          great way to improve a skill, you need to work on your weaknesses and
          push yourself beyond your comfort zone if you want to improve. Rhythm
          games also require perseverance, a strong mindset and nerve control.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          For example, you need to be perseverant to try again and again to
          complete a challenging level and face failure repeatedly. You cannot
          give up on the first difficulty you encounter. You also need to have a
          strong mental when you die in the last part of the level or mind
          block. A mind block is when you have attempted a level so many times
          that your brain is on autopilot and a part that was easy before is now
          a part you always die on. It is important not to blame yourself and
          give up.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          It also requires nerve control. Let's say you are at 80% of the level
          and have never reached that point before. You want to complete it, but
          your nerves are climbing. You need to stay focused and stop your hands
          from shaking.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Watching video content
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I also love watching video content on YouTube or live streams on
          Twitch. It is a way for me to relax, entertain myself, learn new
          things, or keep up on the latest technology news.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I enjoy watching series or anime as well. It is another great way to
          sit back and relax. Sometimes, watching videos, anime, or series with
          deep meaning can change your point of view on certain topics or even
          life in general and I love that feeling.
        </Typography>

        <Typography
          variant="h3"
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
          two years, his AI evolved to the point where it is difficult to
          compare it to other human Twitch streamers in terms of interactions
          and personality.
        </Typography>
        <Typography
          mt={2}
          mb={5}
          sx={{ textIndent: "2em", textAlign: "justify" }}
        >
          Vedal987 inspires me because of his dedication to what has become the
          biggest project of his life. I admire his creativity and innovation in
          ways that engage and entertain his streams with such simple ideas yet
          so impactful while making his AI feel more interactive and human.
        </Typography>
        <Typography
          variant="h3"
          mt={5}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Strength and weaknesses
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Competitive
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          You might have seen in my projects that I participated in two
          competitions (the hackathon and WorldSkills) and I will not stop here,
          a new hackathon was announced, and I will also participate. But why do
          I love competition?
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          It is for the “fight” against a person, pushing yourself and pushing
          other people or a single person to their limits and see who will make
          the best program, or have the best system. For example, with a friend
          will always compete and see who gets the best marks on lessons it
          pushes us to study and win against the other. So, for me, it is also a
          motivation.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Perseverance
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          As you might have already seen my hobbies, I talk about some games
          that need perseverance to succeed such as the game “Geometry Dash” but
          here it is also in the project. For example, in the 3rd-year project,
          I did not give up saying that it would be impossible to achieve in
          time, I worked hard trying to finish it. I do not know if I will make
          it in time though, but I will do everything to finish it.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Autonomous
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I love learning new things by myself or working by myself, for
          instance when at the University of Mons, I started programming video
          games using Unity and now that is why I had an advantage against the
          others in terms of Unity knowledge for the industrial project. Another
          example is that in my 2nd-year multidisciplinary project, I talked
          about how I worked alone during the Easter holidays, I programmed the
          Arduino code for the camera during that time, even if it was the
          holidays. I generally do not need someone to tell me something to do
          it.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Imposter syndrome
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          When I am looking for a job/internship offer I do not know if I am
          qualified enough for that job, or I say to myself that thousands of
          people more qualified than me would apply and get that job. I feel
          like a lot of friends around me who are in IT are also having this,
          the feel of not being qualified enough or not sure about their skills.
          I think it is because it is pretty much impossible to put on a scale
          the level of skill required for a job in programming.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          For example, if a company asked me to do computer visualisation. I
          already worked a little on the subject with my project Lenny and the
          industrial project but how much should I know because computer
          visualisation is very vast? Should I build my AI? So, I should know
          all the maths and the algorithms behind but then I should learn about
          Large Language Models (LLMs) and neural networks and go on and on
          thinking that it would be impossible for me. The job might just want
          you to do very high-level programming where you would only use a
          library and that’s all.
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          In conclusion, it is hard to find where my skills are and how they can
          be shown to other people in the industry.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Strong-minded
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          I always stray to have the last word during an argument or I always to
          be right. The only thing that could change my point of view is
          concrete arguments on the question. For example, when I was working on
          the 2nd-year automation project, I was sure of myself for the PID
          variables (see the text on the 2nd-year automation project) but then a
          member of my group told me that those variables were wrong, and I
          could not believe I was sure of myself. He had to turn on the system
          with his variables and for me to see the results on the graph to see
          that he was right in the end.
        </Typography>
        <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
          Disorganisation
        </Typography>
        <Typography mt={2} sx={{ textIndent: "2em", textAlign: "justify" }}>
          Whether it is in my tasks, my project or my pc’s folders there will be
          little to no organisation. I find it difficult to organize and
          structure things in such a way that could make sense for other people.
          I often catch myself having way too many folders on my pc and cannot
          find a file or having so many tasks on a project that I cannot think
          where to begin. In general, in that case, I just work and see where I
          go next. But sometimes I do organise my work like in the hackathon
          where I had a good overview of the tasks to do and in what order.
        </Typography>
        <Typography
          mt={2}
          mb={5}
          sx={{ textIndent: "2em", textAlign: "justify" }}
        >
          In conclusion, in most of my projects, I tend to be quite disorganized
          and work on multiple projects or tasks at the same time. However, in
          the end, I still manage to come to an end.
        </Typography>
      </Container>
    </>
  );
}
