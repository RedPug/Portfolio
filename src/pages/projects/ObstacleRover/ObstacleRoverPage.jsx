import "./ObstacleRoverPage.css";
import "../Project.css";

import finalCompetitionVideo from "assets/projects/off-road-rover/media/preliminary-track.webm";
import sideProfileRamp from "assets/projects/off-road-rover/media/side-profile-ramp.png";
import rearPivotView from "assets/projects/off-road-rover/media/rear-pivot.png";
import frontWheelsTurnedView from "assets/projects/off-road-rover/media/rover-wheels-turned.jpg";
import measurementsView from "assets/projects/off-road-rover/media/center-of-mass.jpg";

import PDFView from "components/PDFView/PDFView";


export default function ObstacleRoverPage(){
    return(
        <div id="project-page">
            <h1>Off Road Rover</h1>

            <div className="project-content-container">

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
                        I received the opportunity to design, build, and test this small autonomous line following rover.
                    </p>
                    <p>
                        There were a few key objectives to keep track of:
                        <ul>
                            <li>The rover must autonomously follow a line on the floor using IR sensors</li>
                            <li>The rover must be able to use a PixyCam to track an object, then pick it up with a claw</li>
                        </ul>
                    </p>

                    <p>
                        Some other things to keep in mind were that speed would be key to placing well in the competition,
                    </p>

                    I took on the responsibility of:
                    <ul>
                        <li>Managing both teams to turn in assignments and reports on time</li>
                        <li>Designing the entirety of both rovers in SolidWorks</li>
                        <li>Programming and testing the code for the autonomous rover using Arduino</li>
                    </ul>
                </section>

                <hr />
                
                <section id="results">
                    <h2>Results</h2>
                    <p>
                        As a result of my ingenuity and problem solving skills, the rover placed second place in the final competition,
                        outcompeting 50 other teams. Its unique design allowed it to traverse the obstacle course with ease
                        and avoided getting stuck on the ramp like many others did.
                    </p>

                    <div className="caption">
                        Preliminary Obstacle Course
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
            </div>
        </div>
    )
}