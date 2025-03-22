// import PDFView from "../components/PDFView/PDFView.tsx";

import headshot from "assets/Rowan-Headshot.png";

import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="home" className="scroll-to-top">
        <h1>Hi, I'm Rowan!</h1>
        <img src={headshot} alt="Headshot" id="headshot"/>
        <p>This is the home page.</p>
        
      </div>
    </>
  );
}