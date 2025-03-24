import headshot from "assets/media/rowan-headshot.png";
import ENGR7B_Rover_Picture from "assets/projects/autonomous-rover/media/rover-thumbnail.jpg";
import AutonomousRoverPage from "pages/projects/AutonomousRover/AutonomousRoverPage";
import ObstacleRoverPage from "pages/projects/ObstacleRover/ObstacleRoverPage";
import Project1Page from "pages/projects/Project1Page";

const projectList = [
    {isFeatured: true, navSrc: "/projects/project1", imgSrc:headshot, title: "Project 1", description: <>This was fun!</>, page: <Project1Page />},
    {isFeatured: true, navSrc: "/projects/autonomous-rover", imgSrc:ENGR7B_Rover_Picture, title: "Autonomous Rover", description: <>Designed and programmed an autonomous line following rover.</>, page: <AutonomousRoverPage />},
    {isFeatured: true, navSrc: "/projects/off-road-rover", imgSrc:headshot, title: "Off Road Rover", description: <>Designed, built, and competed a remote controlled off road rover.</>, page: <ObstacleRoverPage />},
    {isFeatured: true, navSrc: "/projects/project2", imgSrc:headshot, title: "Project 2", description: <>This was fun, too!</>, page: <Project1Page />},
    {isFeatured: true, navSrc: "/projects/project2", imgSrc:headshot, title: "Project 2", description: <>This was fun, too!</>, page: <Project1Page />},
    {isFeatured: true, navSrc: "/projects/project2", imgSrc:headshot, title: "Project 2", description: <>This was fun, too!</>, page: <Project1Page />},
    {isFeatured: true, navSrc: "/projects/project2", imgSrc:headshot, title: "Project 2", description: <>This was fun, too!</>, page: <Project1Page />},
]

export default projectList;