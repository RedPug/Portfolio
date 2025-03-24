import finalCompetitionVideo from "assets/projects/autonomous-rover/media/final-competition.webm";
import clawTestVideo from "assets/projects/autonomous-rover/media/claw-test.webm";

import rover_code from "assets/projects/autonomous-rover/data/rover_code.txt";

import "./AutonomousRoverPage.css";
import "../Project.css";
import PDFView from "components/PDFView/PDFView";
// import TableOfContents from "components/TableOfContents/TableOfContents";
import { useEffect, useState } from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AutonomousRoverPage(){

    const [roverCode, setRoverCode] = useState(null);

    useEffect(() => {
        fetch(rover_code).then(r=>r.text()).then(text=>{
            console.log("Loaded rover code");
            setRoverCode(text);
        });
    },[])
    

    return(
        <div id="project-page">
            <h1>Autonomous Rover</h1>

            <div className="project-content-container">

                <hr />

                {/* <TableOfContents sections={[
                    {title: "About the Project", target: "#about"},
                    {title: "Results", target: "#results"},
                    {title: "Design Details", target: "#design-details"},
                    {title: "Technical Drawings and CAD", target: "#technical-drawings", children: [
                        {title: "Obstacle Course Rover", target: "#obstacle-course-rover"},
                        {title: "Autonomous Rover", target: "#autonomous-rover"},
                        {title: "Autonomous Rover Code", target: "#autonomous-rover-code"},
                    ]},
                ]}/>

                <br />

                <hr /> */}

                <section id="about">
                    <h2>About the Project</h2>
                    <p>
                        As part of the introductory engineering class ENGR 7B,
                        I received the opportunity to design, build, and test an autonomous rover.
                    </p>
                    
                    <h3>Key Objectives</h3>
                        <ul>
                            <li>Design, build, and program a rover from scratch</li>
                            <li>Autonomously follow a line on the floor using IR sensors</li>
                            <li>Use a PixyCam to track an object, then pick it up with a claw</li>
                        </ul>

                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Managed the team to turn in assignments and reports on time</li>
                        <li>Designed the entirety of the rover in SolidWorks</li>
                        <li>Programmed and tested the code for the autonomous rover using Arduino</li>
                    </ul>
                </section>

                <hr />
                
                <section id="results">
                    <h2>Results</h2>
                    <p>
                        As a result of my ingenuity and problem solving skills, the rover placed second place in the final competition,
                        and was one of only 4 teams to successfully complete the final challenge course, outcompeting 30 other teams.
                    </p>

                    <div className="caption">
                        Initial Claw Test
                    </div>
                    <video controls autoPlay muted loop>
                        <source src={clawTestVideo} type="video/webm"></source>
                        Your browser does not support the video tag.
                    </video>
                    

                    <div className="caption">
                        Final Competition
                    </div>
                    <video controls autoPlay muted loop>
                        <source src={finalCompetitionVideo} type="video/webm"></source>
                        Your browser does not support the video tag.
                    </video>
                </section>

                <hr />

                <section id="design-details">
                    <h2>Design Details</h2>
                    <p>
                        This rover was a particular headache to get working because of the complex claw mechanism.
                        While we were offered two servo motors to close and lift the claw, I challenged myself by only using one.
                    </p>
                    <p>
                        The design relies on rubber bands to grip a can, and uses a pulley mechanism to combine the claw's closing and lifitng action.
                        One issue I ran into was that the servo didn't have the strength to lift the can.
                        This was resolved by adding more rubber bands to pull back on the servo arm, assisting it when lifting.
                    </p>
                </section>

                <hr />
                
                <section id="technical-drawings">
                    <h2>Technical Drawings</h2>
                    <PDFView url="https://drive.google.com/file/d/1eM-5li44w-r2npWuT7uIfWKKNNkWVAvM/preview" />
                </section>

                <hr />
                
                <section id="code">
                    <h2>Code</h2>
                    <div className="code-container">
                        {roverCode != null ? <SyntaxHighlighter language="c" style={vscDarkPlus}>{roverCode}</SyntaxHighlighter> : <p>Loading...</p>}
                    </div>
                </section>
                
                <hr />
            </div>
        </div>
    )
}