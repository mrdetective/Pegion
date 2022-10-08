const dropzone = document.querySelector(".box2");
const button = document.querySelector("#button");
const fileinput = document.querySelector("#fileinput");
dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!dropzone.classList.contains("dragged"))
        dropzone.classList.add("dragged");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragged");
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
        fileinput.file = files;
    }
});

button.addEventListener("click", () => {
    fileinput.click();
});

const uploadFile = () => {
    const file = fileinput.files[0];
    const formdata = new FormData();
    formdata.append(file);
    
}