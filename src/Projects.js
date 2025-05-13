import AutonomousRoverThumbnail from "assets/projects/autonomous-rover/media/thumbnail.jpg";
import AutonomousRoverPage from "pages/projects/AutonomousRover/AutonomousRoverPage";

import ObstacleRoverThumbnail from "assets/projects/off-road-rover/media/thumbnail.jpg";
import ObstacleRoverPage from "pages/projects/ObstacleRover/ObstacleRoverPage";

import SlideRuleThumbnail from "assets/projects/slide-rule-app/media/thumbnail.png";
import SlideRuleAppPage from "pages/projects/SlideRule/SlideRuleAppPage";

const projectList = [
    {navSrc: "/projects/autonomous-rover", imgSrc:AutonomousRoverThumbnail, title: "Autonomous Rover", description: <>
        Designed and programmed an autonomous line following rover using Solidworks and Arduino. Recieved 2nd place in the final competition against 30+ rovers.
        </>, page: <AutonomousRoverPage />},
    {navSrc: "/projects/off-road-rover", imgSrc:ObstacleRoverThumbnail, title: "Off Road Rover", description: <>
        Designed, built, and competed a remote controlled off road rover and earned 2nd place against 50+ other rovers.
        </>, page: <ObstacleRoverPage />},
    {navSrc: "/projects/slide-rule-app", imgSrc:SlideRuleThumbnail, title: "Slide Rule IOS App", description: <>
        Developed an open source IOS app that emulates a slide rule using SwiftUI. The app is available on the App Store and has 500+ downloads and 4.9/5.0 star rating.
        </>, page: <SlideRuleAppPage />},
]

export default projectList;