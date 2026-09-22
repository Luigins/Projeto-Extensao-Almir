function atualizarRelogio() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);
// botao
const botao = document.getElementById("audioBtn");

const audio = new Audio(
    chrome.runtime.getURL("audio.mp3")
);

audio.volume = 1.0;

botao.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    audio.currentTime = 0;

    audio.play()
        .then(() => {
            console.log("ÁUDIO TOCANDO!");
        })
        .catch((erro) => {
            console.error("ERRO NO ÁUDIO:", erro);
        });
});