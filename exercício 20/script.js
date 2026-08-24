const tarefas = [];
 
const campoTarefa = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnLimpar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");
 
btnAdicionar.addEventListener("click", adicionarTarefa);
 
campoTarefa.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});
 
btnLimpar.addEventListener("click", limparTarefas);
 
function adicionarTarefa() {
    const textoTarefa = campoTarefa.value.trim();
 
    if (textoTarefa === "") {
        mensagem.innerText =
            "Digite uma tarefa antes de adicionar.";
        mensagem.style.color = "#b3261e";
        campoTarefa.focus();
        return;
    }
 
    tarefas.push(textoTarefa);
 
    if (tarefas.length === 1) {
        listaTarefas.innerHTML = "";
    }
 
    criarItemTarefa(textoTarefa, tarefas.length);
 
    mensagem.innerText =
        "Tarefa adicionada à lista.";
    mensagem.style.color = "green";
 
    campoTarefa.value = "";
    campoTarefa.focus();
    atualizarResumo();
}
 
function criarItemTarefa(texto, numero) {
    const item = document.createElement("li");
    item.classList.add("tarefa");
 
    const descricao = document.createElement("span");
    descricao.innerText = numero + ". " + texto;
 
    const botaoConcluir = document.createElement("button");
    botaoConcluir.innerText = "Concluir";
    botaoConcluir.classList.add("botao-concluir");
 
    botaoConcluir.addEventListener("click", function () {
        item.classList.toggle("concluida");
 
        if (item.classList.contains("concluida")) {
            botaoConcluir.innerText = "Reabrir";
        } else {
            botaoConcluir.innerText = "Concluir";
        }
 
        atualizarResumo();
    });
 
    item.appendChild(descricao);
    item.appendChild(botaoConcluir);
    listaTarefas.appendChild(item);
}
 
function atualizarResumo() {
    const concluidas =
        document.querySelectorAll(".tarefa.concluida").length;
 
    const pendentes = tarefas.length - concluidas;
 
    document.getElementById("totalTarefas").innerText =
        tarefas.length;
 
    document.getElementById("tarefasConcluidas").innerText =
        concluidas;
 
    document.getElementById("tarefasPendentes").innerText =
        pendentes;
}
 
function limparTarefas() {
    tarefas.length = 0;
 
    listaTarefas.innerHTML =
        '<li class="vazio">Nenhuma tarefa cadastrada.</li>';
 
    mensagem.innerText = "A lista de tarefas foi limpa.";
    mensagem.style.color = "#5d6878";
 
    campoTarefa.value = "";
    atualizarResumo();
    campoTarefa.focus();
}