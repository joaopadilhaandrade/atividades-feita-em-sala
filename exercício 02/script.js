function modoClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById("mensagem").innerText =
        "Modo claro ativado!";
}

function modoEscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    document.getElementById("mensagem").innerText =
        "Modo escuro ativado!";
}