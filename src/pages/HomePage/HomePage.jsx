// import PDFView from "../components/PDFView/PDFView.tsx";

import headshot from "assets/media/rowan-headshot.png";

import "./HomePage.css";
// import { Link } from "react-router-dom";
import ProjectStack from "components/ProjectStack/ProjectStack";
import ContactBar from "components/ContactBar/ContactBar";

export default function HomePage() {
  return (
    <div id="home">
      <section id="about">
        <div className="head-container">
          <div className="head-text">
            <h1>Hi, I'm Rowan</h1>
            <p style={{textAlign:"justify"}}>
            I am a student pursing a <b>B.S. in Mechanical Engineering</b> at the University of California, Irvine
            with a minor in <b>Information and Computer Science</b>.
            In my free time, I enjoy coding, designing robots, and rock climbing.
            I am passionate about learning new things and applying my knowledge to real-world problems.
            </p>
          </div>

          <img src={headshot} alt="Headshot" id="headshot"/>
        </div>
      </section>

      <hr />

      <section id="projects">
        <h2>Featured Projects</h2>
        <ProjectStack />
      </section>

      <hr />

      <section id="contact">
        <ContactBar />
      </section>
      

    </div>
  );
}