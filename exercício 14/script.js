let totalVisitas = 0;
const NOME_SISTEMA = "Portal 2DS";

function registrarVisita() {
    const campoNome = document.getElementById("nomeVisitante");
    let nomeVisitante = campoNome.value.trim();
    let mensagem = document.getElementById("mensagem");

    if (nomeVisitante === "") {
        mensagem.innerText = "Digite o nome do visitante.";
        mensagem.style.color = "#b3261e";
        campoNome.focus();
        return;
    }

    totalVisitas++;

    let mensagemLocal =
        "Olá, " + nomeVisitante + "! Sua visita foi registrada.";

    document.getElementById("visitanteAtual").innerText = nomeVisitante;
    document.getElementById("totalVisitas").innerText = totalVisitas;
    document.getElementById("nomeSistema").innerText = NOME_SISTEMA;

    mensagem.innerText = mensagemLocal;
    mensagem.style.color = "green";
    document.getElementById("resumo").innerText = "";

    campoNome.value = "";
    campoNome.focus();
}

function mostrarResumo() {
    let textoResumo =
        NOME_SISTEMA + " recebeu " + totalVisitas + " visita(s).";

    document.getElementById("resumo").innerText = textoResumo;
}

function reiniciarPainel() {
    totalVisitas = 0;

    document.getElementById("nomeVisitante").value = "";
    document.getElementById("visitanteAtual").innerText =
        "Aguardando uma visita.";
    document.getElementById("totalVisitas").innerText = totalVisitas;
    document.getElementById("nomeSistema").innerText = NOME_SISTEMA;
    document.getElementById("mensagem").innerText =
        "Digite um nome para registrar uma visita.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("resumo").innerText = "";
    document.getElementById("nomeVisitante").focus();
}