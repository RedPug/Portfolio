// import PDFView from "../components/PDFView/PDFView.tsx";

import headshot from "assets/media/rowan-headshot.png";

import "./HomePage.css";
import ProjectGrid from "components/ProjectGrid/ProjectGrid";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div id="home">
      <div className="head-container">
        <div className="head-text">
          <h1>Hi, I'm Rowan</h1>
          <b>About Me</b>
          <br />
          I am a Mechanical Engineering student at the University of California, Irvine. In my free time, I enjoy learning new things, coding, and working on other fun engineering projects
        </div>

        <img src={headshot} alt="Headshot" id="headshot"/>
      </div>

      {/* <p>This is the home page.</p> */}

      <section className="home-content">
          
        <hr />

        <h2>Selected Projects</h2>
        
        <ProjectGrid onlyFeatured={true} />

        <div className="projects-button-container">
          <Link to="/projects" className="projects-button">View all projects</Link>
        </div>

        <hr />

      </section>
      

    </div>
  );
}