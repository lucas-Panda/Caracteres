const input = document.querySelector("#input");
const counter = document.querySelector(".counter");

let mode ="characters";

input.addEventListener("input", ()=> {
    let count = 0;

    if(mode === "characters") {

        count = input.value.length;

        counter.textContent = `${count} Caractere(s)`;

    }
})


const btnFalar = document.getElementById('btnFalar');

btnFalar.addEventListener('click', () => {
    const texto = input.value;
    falarTexto(texto);
});

function falarTexto(texto) {

    if ('speechSynthesis' in window) {

        const synthesis = window.speechSynthesis;

        synthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(texto);

        synthesis.speak(utterance);
    } else {
        alert('Desculpe, seu navegador não suporta síntese de voz.');
    }
}