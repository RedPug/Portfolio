
import githubLogo from "assets/media/github-logo.svg";

import linkedinLogo from "assets/media/linkedin-logo.svg";
import gmailLogo from "assets/media/gmail-logo.svg";
import codeIcon from "assets/media/code-icon.svg";

import "./ContactBar.css";

export default function ContactBar(){
    return <>
        <h2>Contact Me</h2>
        <div class="contact-container">
            <a href="mailto:therowanrichards@gmail.com" className="contact-item">
                <img src={gmailLogo} alt="" className="contact-icon" />
                therowanrichards@gmail.com
                </a>

            <a href="https://linkedin.com/in/rowan-richards/" rel="noreferrer" target="_blank"  className="contact-item">
            <img src={linkedinLogo} alt="" className="contact-icon" />
                linkedin.com/in/rowan-richards
            </a>
            
            <a href="https://github.com/redpug/" rel="noreferrer" target="_blank"  className="contact-item">
                <img src={githubLogo} alt="" className="contact-icon"/>
                github.com/RedPug
            </a>
            
            <a href="https://github.com/RedPug/RedPug.github.io" rel="noreferrer" target="_blank"  className="contact-item">
                <img src={codeIcon} alt="" className="contact-icon"/>
                View this source code
            </a>
        </div>
    </>
}