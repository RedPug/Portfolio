import "./Footer.css";

export default function Footer(){
    return <>
        <footer>
            <div class="contact-info">
                Get in touch at: <a href="mailto:therowanrichards@gmail.com" class="contact-email">therowanrichards@gmail.com</a> &nbsp;
            </div>
            
            <a href="https://linkedin.com/in/rowan-richards" rel="noreferrer" target="_blank"  class="social-link">
                LinkedIn
            </a>

            &nbsp;•&nbsp;
            
            <a href="https://github.com/redpug" rel="noreferrer" target="_blank"  class="social-link">
                GitHub
            </a>

            &nbsp;•&nbsp;
            
            <a href="https://github.com/redpug/Portfolio/" rel="noreferrer" target="_blank"  class="social-link">
                View this source
            </a>

            <p>©2025 Rowan Richards</p>
        </footer>
    </>
}