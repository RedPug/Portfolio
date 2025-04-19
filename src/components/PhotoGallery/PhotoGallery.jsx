
import "./PhotoGallery.css";

export default function PhotoGallery({ images, idealWidth, idealHeight, numRows}) {
    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                //style={{width: idealWidth || "auto", height: idealHeight || "auto"}}
                <div className="gallery-item" key={index} >

                    {image.caption ? <div className="caption">
                        {image.caption}
                    </div> : <></>}

                    <img
                        src={image.src}
                        alt={image.alt || image.caption}
                        className="gallery-image"
                        
                    />
                </div>
            ))}
        </div>
    );
}