import finalCompetitionVideo from "assets/projects/autonomous-rover/media/final-competition.webm";
import clawTestVideo from "assets/projects/autonomous-rover/media/claw-test.webm";
import cadDemoPicture from "assets/projects/autonomous-rover/media/cad-demo.png";
import arduinoUno from "assets/projects/autonomous-rover/media/arduino-uno.jpg";
import ganttChart from "assets/projects/autonomous-rover/media/gantt-chart.png";
import courseDemo from "assets/projects/autonomous-rover/media/course-example.jpg";
import clawModel from "assets/projects/autonomous-rover/media/claw-model.png";

import rover_code from "assets/projects/autonomous-rover/data/rover_code.txt";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import PDFView from "components/PDFView/PDFView";


import "../Project.css";
import "./AutonomousRoverPage.css";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CaptionedVideo from "components/CaptionedVideo/CaptionedVideo";
import { Link } from "react-router-dom";

export default function AutonomousRoverPage(){

    const [roverCode, setRoverCode] = useState(null);

    useEffect(() => {
        fetch(rover_code).then(r=>r.text()).then(text=>{
            setRoverCode(text);
        });
    },[])
    

    return(
        <>
            <section id="about">
                <h2>About the Project</h2>
                <p>
                In the second part of my introductory engineering course, ENGR 7, I had the exciting opportunity to design, build, and test
                an autonomous rover from the ground up.
                This hands-on project challenged me to apply both technical and leadership skills to solve complex problems.
                </p>
                
                <h3>Key Objectives</h3>
                    <ul>
                        <li>
                            Develop a fully autonomous rover using IR sensors and a PixyCam
                        </li>
                        <li>
                            Implement line-following capabilities for guided navigation
                            <br />
                            <img className="display-image" style={{width:"300px"}} src={courseDemo} alt="Black line track on the ground" />
                        </li>
                        <li>
                            Engineer a robotic claw mechanism to detect, track, and capture objects
                            <br />

                            <div className="inline-container-left">
                                <img src={clawModel} style={{width:"40%"}} className="display-image" alt="Claw mechanism" />

                                <CaptionedVideo src={clawTestVideo} width="40%">
                                    Initial Claw Test
                                </CaptionedVideo>
                            </div>
                        </li>
                    </ul>

                <h3>Responsibilities</h3>
                <ul>
                    <li>
                        Designed a comprehensive 3D model of the rover in SolidWorks, ensuring functionality and structural integrity
                        <br />
                        <Link to="#technical-drawings" className="content-button">View Drawings Here</Link>
                        <br />
                        <img src={cadDemoPicture} className="display-image" alt="Rover 3D model" />
                    </li>
                    <li>
                        Programmed and fine-tuned the Arduino-based control system for autonomous performance
                        <br />
                        <Link to="#code" className="content-button">View Code Here</Link>
                        <br />
                        <img className="display-image" style={{width:"300px"}} src={arduinoUno} alt="Arduino Uno microcontroller"/>
                    </li>
                    <li>
                        Led the team to meet deadlines by managing assignments and reports efficiently
                        <br />
                        <img className="display-image" style={{width:"100%"}} src={ganttChart} alt="Gantt Chart showing deadlines and completition dates" />
                    </li>
                </ul>
            </section>

            <hr />
            
            <section id="results">
                <h2>Results</h2>

                <div className="large-celebration">
                    2nd Place!
                </div>

                <p>
                Leveraging a combination of ingenuity, problem-solving, and collaboration, my rover <b>secured second place</b> in the final competition.
                Out of over 30 teams, we were one of only four to successfully conquer the final challenge course.
                This accomplishment underscored our technical prowess and determination to excel under pressure.
                </p>

                <CaptionedVideo src={finalCompetitionVideo}>
                Final Competition
                </CaptionedVideo>
            </section>

            <hr />

            <section id="design-details">
                <h2>Design Challenges</h2>
                <p>
                    The claw mechanism was particularly challenging.
                    While we were provided with two servo motors to manage the claw's closing and lifting functions,
                    I opted to challenge myself by using only one motor.
                </p>
                <p>
                    The design incorporated rubber bands to provide a secure grip on objects and a pulley system that
                    combined the closing and lifting motions. However, the servo motor initially lacked the strength to
                    lift the can. To resolve this, I applied additional rubber bands to counterbalance the servo arm,
                    enhancing its lifting capacity. This innovative approach minimized complexity and reduced energy consumption.
                </p>

                <p>
                    The original design used three IR sensors to detect the black line on the course. However, the sensors
                    interfered with each other and caused unpredictable behavior during testing.
                    To address this, I removed the middle sensor and adjusted the code to work without it. This modification
                    improved the rover's line-following reliablility, but also reduced its effective speed.
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
        </>
    )
}