function gerarContagem() {
    let limiteDigitado = document.getElementById("limite").value;
    let mensagem = document.getElementById("mensagem");
    let resultado = document.getElementById("resultado");

    resultado.innerText = "";

    if (limiteDigitado === "") {
        mensagem.innerText = "Digite o número final da contagem.";
        mensagem.style.color = "#b3261e";
        return;
    }

    let limite = Number(limiteDigitado);

    if (limite < 1 || limite > 100) {
        mensagem.innerText = "Digite um número entre 1 e 100.";
        mensagem.style.color = "#b3261e";
        return;
    }

    let contagem = "";

    for (let numero = 1; numero <= limite; numero++) {
        contagem += numero;

        if (numero < limite) {
            contagem += " - ";
        }
    }

    mensagem.innerText = "Contagem gerada com sucesso!";
    mensagem.style.color = "green";
    resultado.innerText = contagem;
}

function limparCampos() {
    document.getElementById("limite").value = "";
    document.getElementById("mensagem").innerText = 
        "Informe um número para começar.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("resultado").innerText = "";
    document.getElementById("limite").focus();
}