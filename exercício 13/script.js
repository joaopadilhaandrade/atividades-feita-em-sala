var projeto = "Projeto Front-End";
let pontos = 0;
const LIMITE_PONTOS = 50;
const TURMA = "2DS";

function atualizarPainel() {
    let novoNome = document.getElementById("nomeProjeto").value.trim();
    let valorDigitado = document.getElementById("pontosAdicionar").value;
    let quantidade = Number(valorDigitado);
    var mensagem = document.getElementById("mensagem");

    if (novoNome === "" || valorDigitado === "") {
        mensagem.innerText = "Preencha o nome do projeto e os pontos.";
        mensagem.style.color = "#b3261e";
        return;
    }

    if (quantidade <= 0) {
        mensagem.innerText = "Digite uma quantidade maior que zero.";
        mensagem.style.color = "#b3261e";
        return;
    }

    projeto = novoNome;
    pontos += quantidade;

    if (pontos >= LIMITE_PONTOS) {
        pontos = LIMITE_PONTOS;
        mensagem.innerText = "O limite de pontos foi atingido.";
        mensagem.style.color = "#b26a00";
    } 
    
    else {
        mensagem.innerText = "Os valores de var e let foram atualizados."
        mensagem.style.color = "green";
    }

    mostrarValores();
}

function mostrarValores() {
    document.getElementById("valorVar").innerText = projeto;
    document.getElementById("valorLet").innerText = pontos;
    document.getElementById("valorConst").innerText = LIMITE_PONTOS;
    document.getElementById("resumo").innerText ="Turma: " + TURMA + " | Projeto: "+ projeto + " | Pontos: " + pontos + " de " + LIMITE_PONTOS;
}

function reiniciarPainel() {
    projeto = "Projeto Front-End";
    pontos = 0;
    
    document.getElementById("nomeProjeto").value = "";
    document.getElementById("pontosAdicionar").value = "";
    document.getElementById("mensagem").innerText ="Preencha os campos para testar as variáveis.";
    document.getElementById("mensagem").style.color = "#52606d";

    mostrarValores();
    document.getElementById("nomeProjeto").focus();
}

mostrarValores();