// import PDFView from "../components/PDFView/PDFView.tsx";

import headshot from "assets/media/rowan-headshot.png";

import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="home">
        <h1>Hi, I'm Rowan!</h1>
        <img src={headshot} alt="Headshot" id="headshot"/>
        <p>This is the home page.</p>
        
      </div>
    </>
  );
}