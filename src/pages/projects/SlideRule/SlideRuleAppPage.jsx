import rulerFrontImage from "assets/projects/slide-rule-app/media/ruler-front.png";
import rulerBackImage from "assets/projects/slide-rule-app/media/ruler-back.png";
import guidesListImage from "assets/projects/slide-rule-app/media/guides-list.png";
import guideSetupImage from "assets/projects/slide-rule-app/media/guide-setup.png";
import guideInProgressImage from "assets/projects/slide-rule-app/media/guide-in-progress.png";

import PhotoGallery from "components/PhotoGallery/PhotoGallery";
import "../Project.css";
import "./SlideRuleAppPage.css";

export default function SlideRuleAppPage(){
    return(
        <>
            <section id="about">
            <h2>About the Project</h2>

            <img src={rulerFrontImage} alt="Front of the ruler" className="display-image"/>

            <p>
                Based on my interest in analog computing, I created a digital version of a slide rule.
                This project is an iOS application that simulates the functionality of a traditional slide rule,
                allowing users to perform calculations using logarithmic scales.
            </p>

            <p>
                The app features a user-friendly interface that mimics the physical slide rule, with a sliding cursor
                to select values and perform calculations. Users can input values, select scales, and view results in real-time.
            </p>
            <p>
                The app also includes a comprehensive set of guides to help users understand how to use the slide rule effectively.
                The guides cover different types of calculations, such as multiplication, division, and trigonometry,
                and provide step-by-step instructions for each method.
            </p>

            <p>
                Since its release in the summer of 2024, the app has gained over 500 users and earned a 4.9 star rating on the App Store.
            </p>

            <p>
                The app is compatible with iPhones running iOS 17+ and can be downloaded at <a href="apps.apple.com/us/app/ultimate-slide-rule/id6636523467">https://apps.apple.com/us/app/ultimate-slide-rule/id6636523467</a>
            </p>

            <p>
                Additionally, the app's source code can be found at <a href="github.com/RedPug/Slide-Rule-App">https://github.com/RedPug/Slide-Rule-App</a>
            </p>

            <hr />

            <h3>Key Features</h3>
            <ul>
                <li>Comprehensive Interactive Guides</li>
                <li>Full Set of 22 Scales</li>
                <li>Accessible User Interface</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>Swift and SwiftUI for app logic and interface</li>
                <li>Github for code storage and issue tracking</li>
                <li>Inkscape for icon design</li>
            </ul>

            </section>

            <hr />

            <section id="results">
                <h2>Results</h2>

                <div className="large-celebration">
                    500+ Downloads! &nbsp; 4.9★ Rating
                </div>

                <h3>User Perception and Feedback</h3>
                <p>
                    The app has been well-received by users, with many praising its intuitive design and ease of use.
                </p>
                <p>
                    Users have also left vital feedback for the app's development, including minor bugs that I wouldn't have caught otherwise
                    and suggestions for new features, which I often implement.
                </p>

                <h3>Lessons Learned</h3>
                <p>
                    During my development process, I often had to redo large sections of code and learn how to make my code adaptable
                    to make new features easier to implement. In many cases, I decided to write things out the long way and would copy and paste
                    large sections of code. These sections often had to be refactored into more concise functions and structures to make them easier to expand.
                </p>
                <p>
                    I also had to learn how to use SwiftUI, Apple's new UI framework,
                    which was a challenge because I had never worked with such an expansive library before.
                </p>
            </section>

            <hr />

            <section id="gallery">
                <h2>Gallery</h2>

                <PhotoGallery idealWidth="500px" images={[
                    {src:rulerFrontImage,       alt:"Front of the ruler"},
                    {src:rulerBackImage,        alt:"Back of the ruler"},
                    {src:guidesListImage,       alt:"List of all guide options"},
                    {src:guideSetupImage,       alt:"Setup UI for a guide"},
                    {src:guideInProgressImage,  alt:"Guide being completed"},
                ]}/>
            </section>
            <hr />
        </>
    );
}