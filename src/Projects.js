import AutonomousRoverThumbnail from "assets/projects/autonomous-rover/media/thumbnail.jpg";
import AutonomousRoverPage from "pages/projects/AutonomousRover/AutonomousRoverPage";

import ObstacleRoverThumbnail from "assets/projects/off-road-rover/media/thumbnail.jpg";
import ObstacleRoverPage from "pages/projects/ObstacleRover/ObstacleRoverPage";

// import SlideRuleThumbnail from "assets/media/rowan-headshot.png";
import SlideRuleThumbnail from "assets/projects/slide-rule-app/media/thumbnail.png";
import SlideRuleAppPage from "pages/projects/SlideRule/SlideRuleAppPage";

const projectList = [
    {isFeatured: true, navSrc: "/projects/autonomous-rover", imgSrc:AutonomousRoverThumbnail, title: "Autonomous Rover", description: <>Designed and programmed an autonomous line following rover.</>, page: <AutonomousRoverPage />},
    {isFeatured: true, navSrc: "/projects/off-road-rover", imgSrc:ObstacleRoverThumbnail, title: "Off Road Rover", description: <>Designed, built, and competed a remote controlled off road rover.</>, page: <ObstacleRoverPage />},
    {isFeatured: true, navSrc: "/projects/slide-rule-app", imgSrc:SlideRuleThumbnail, title: "Slide Rule IOS App", description: <>Open source IOS app developed using SwiftUI.</>, page: <SlideRuleAppPage />},
]

export default projectList;