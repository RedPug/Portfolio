

import "./CaptionedVideo.css";

export default function CaptionedVideo({src, width, children}){
    return (
        <div className="video-container" style={{width: width}}>
            <div className="caption">
                {children}
            </div>
            <video controls playsinline preload="auto" muted>
                <source src={src} type="video/webm"></source>
                Your browser does not support the video tag.
            </video>
        </div>
    )
    
}