const campoTexto = document.getElementById("texto");
const preVisualizacao = document.getElementById("preVisualizacao");
const areaInteracao = document.getElementById("areaInteracao");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnReiniciar = document.getElementById("btnReiniciar");
 
let totalCliques = 0;
 
btnRegistrar.addEventListener("click", function () {
    totalCliques++;
 
    document.getElementById("totalCliques").innerText =
        totalCliques;
 
    document.getElementById("ultimoEvento").innerText =
        "click";
});
 
campoTexto.addEventListener("input", function (evento) {
    const textoDigitado = evento.target.value;
 
    if (textoDigitado === "") {
        preVisualizacao.innerText =
            "A mensagem aparecerá aqui.";
    } else {
        preVisualizacao.innerText = textoDigitado;
    }
 
    document.getElementById("totalCaracteres").innerText =
        textoDigitado.length;
 
    document.getElementById("ultimoEvento").innerText =
        "input";
});
 
areaInteracao.addEventListener("mouseenter", function () {
    areaInteracao.innerText =
        "O evento mouseenter foi executado.";
 
    areaInteracao.style.backgroundColor = "#ffe7c7";
    areaInteracao.style.borderColor = "#d46b08";
 
    document.getElementById("ultimoEvento").innerText =
        "mouseenter";
});
 
areaInteracao.addEventListener("mouseleave", function () {
    areaInteracao.innerText =
        "Passe o mouse sobre esta área.";
 
    areaInteracao.style.backgroundColor = "#fff9f2";
    areaInteracao.style.borderColor = "#9a4d08";
 
    document.getElementById("ultimoEvento").innerText =
        "mouseleave";
});
 
btnReiniciar.addEventListener("click", reiniciarPainel);
 
function reiniciarPainel() {
    totalCliques = 0;
    campoTexto.value = "";
    preVisualizacao.innerText =
        "A mensagem aparecerá aqui.";
 
    areaInteracao.innerText =
        "Passe o mouse sobre esta área.";
    areaInteracao.style.backgroundColor = "#fff9f2";
    areaInteracao.style.borderColor = "#9a4d08";
 
    document.getElementById("totalCliques").innerText = "0";
    document.getElementById("totalCaracteres").innerText = "0";
    document.getElementById("ultimoEvento").innerText =
        "Nenhum";
 
    campoTexto.focus();
}