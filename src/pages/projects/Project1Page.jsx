import PDFView from "components/PDFView/PDFView";

export default function Project1Page(){
    console.log('generated project1 page');
    return (
        <div>
            <h1>Project 1</h1>
            <p>This is the first project.</p>

            <PDFView url="https://drive.google.com/file/d/1eM-5li44w-r2npWuT7uIfWKKNNkWVAvM/preview" />
        </div>
    );
}