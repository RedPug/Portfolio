import React from "react";

import './PDFView.css';

export default function PDFView({url}) {
    return(
        <iframe title={url} src={url} allow="autoplay" className="pdf-view"></iframe>
    )
}