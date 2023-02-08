const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
modal.classList.toggle("aberto");
video.setAttribute("src" , linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
});



