
import "../Project.css";
import "./ObstacleRoverPage.css";


import preliminaryCompetitionVideo from "assets/projects/off-road-rover/media/preliminary-track.webm";
import sideProfileRamp from "assets/projects/off-road-rover/media/side-profile-ramp.png";
import rearPivotView from "assets/projects/off-road-rover/media/rear-pivot.png";
import frontWheelsTurnedView from "assets/projects/off-road-rover/media/rover-wheels-turned.jpg";
import measurementsView from "assets/projects/off-road-rover/media/center-of-mass.jpg";
import isometricView from "assets/projects/off-road-rover/media/isometric-view.png";
import ganttChart from "assets/projects/off-road-rover/media/gantt-chart.png";


import PDFView from "components/PDFView/PDFView";
import CaptionedVideo from "components/CaptionedVideo/CaptionedVideo";
import { Link } from "react-router-dom";


export default function ObstacleRoverPage(){
    return(
        <>
            <section id="about">
                <h2>About the Project</h2>
                <p>
                In the first part of my introductory engineering course, ENGR 7, I had the exciting opportunity to design, build, and test
                an off road rover from the ground up to complete a complex obstacle course.
                This hands-on project challenged me to apply both technical and leadership skills to solve complex problems.
                </p>
                
                <h3>Key Objectives</h3>
                    <ul>
                        <li>
                            Design and develop a remote controlled rover from the ground up.
                        </li>
                        <li>
                            Engineer a steering mechanism to allow for precise control of the rover
                            <br />
                            <img className="display-image" style={{width:"300px"}} src={frontWheelsTurnedView} alt="Rover with wheels turned" />
                        </li>
                        <li>
                            Create a fast and maneauverable rover
                        </li>
                    </ul>

                <h3>Responsibilities</h3>
                <ul>
                    <li>
                        Designed a comprehensive 3D model of the rover in SolidWorks, ensuring functionality and structural integrity
                        <br />
                        <Link to="#technical-drawings" className="content-button">View Drawings Here</Link>
                        <br />
                        <img src={isometricView} className="display-image" alt="Rover 3D model" />
                    </li>
                    <li>
                        Led the team to meet deadlines by managing assignments and reports efficiently
                        <br />
                        <img className="display-image" src={ganttChart} alt="Gantt Chart showing deadlines and completition dates" />
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
                Out of over 50 teams, we were one of only a handful to successfully conquer the secound round of final challenge course.
                This accomplishment underscored our technical prowess and determination to excel under pressure.
                </p>

                <CaptionedVideo src={preliminaryCompetitionVideo}>
                    Preliminary Competition
                </CaptionedVideo>
            </section>

            <hr />

            <section id="design-details">
                <h2>Design Details</h2>

                <p>
                    This rover utilizes a unique arched chassis design to maximize stability and ground clearance, as seen below.
                    It also implements a pivoted rear section to improve handling and ground contact on uneven terrain.
                </p>
                <p>
                    My design was the only to include any of these features, and it was a key factor in the rover's success.
                </p>
                <img src={frontWheelsTurnedView}  width="500px" alt="A front view of the rover showing the front wheels turned."/>
                <img src={sideProfileRamp}  width="500px" alt="A side view of the rover showing it going over a 28 degree slope."/>
                <img src={rearPivotView}  width="500px" alt="A rear view of the rover showing the rear axle and assembly rotated about the pivot point"/>
                <img src={measurementsView}  width="500px" alt="A view of the rover showing the center of mass and wheelbase measurements."/>
            </section>

            <hr />

            <section id="technical-drawings">
                <h2>Technical Drawings</h2>
                <PDFView url="https://drive.google.com/file/d/1Aluv2K4S7TMKzb3y0fknn5dw5_1DtY0v/preview" />
            </section>

            <hr />
        </>
    )
}