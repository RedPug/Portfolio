import React from "react";

export default function PDFView(props: {url: string}) {
    return(
        <iframe title={props.url} src={props.url} width="800px" height="480" allow="autoplay"></iframe>
    )
}