document.addEventListener("DOMContentLoaded", function() {
    // Primeira galeria de imagens
    const imagens1 = [
        "imagens/imagem1.jpg",
        "imagens/imagem2.jpg",
        "imagens/imagem3.jpg",
        "imagens/imagem4.jpg"
    ];

    const galeria1 = document.getElementById("galeria1");

    imagens1.forEach(imagem => {
        const imgElement = document.createElement("img");
        imgElement.src = imagem;
        imgElement.alt = "Imagem da galeria 1";
        galeria1.appendChild(imgElement);
    });

    // Segunda galeria de imagens
    const imagens2 = [
        "imagens/LateralEsquerda02.jpg",
        "imagens/LateralDireita03.jpg",
        "imagens/Frontal01.jpg",
	"imagens/imagem4.jpg"

    ];

    const galeria2 = document.getElementById("galeria2");

    imagens2.forEach(imagem => {
        const imgElement = document.createElement("img");
        imgElement.src = imagem;
        imgElement.alt = "Imagem da galeria 2";
        galeria2.appendChild(imgElement);
    });
});
