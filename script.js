document.addEventListener("DOMContentLoaded", function() {
    const imagens = [
        "imagens/imagem1.jpg",
        "imagens/imagem2.jpg",
        "imagens/imagem3.jpg",
	"imagens/imagem4.jpg"
    ];

    const galeria = document.getElementById("galeria");

    imagens.forEach(imagem => {
        const imgElement = document.createElement("img");
        imgElement.src = imagem;
        imgElement.alt = "Imagem da galeria";
        galeria.appendChild(imgElement);
    });
});
