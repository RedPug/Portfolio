import React from "react";

export default function PDFView({url}) {
    return(
        <iframe title={url} src={url} width="800px" height="480" allow="autoplay"></iframe>
    )
}