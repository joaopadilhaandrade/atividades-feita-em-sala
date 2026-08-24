const nomes = [];
 
function adicionarNome() {
    const campoNome = document.getElementById("nome");
    const nomeDigitado = campoNome.value.trim();
    const mensagem = document.getElementById("mensagem");
 
    if (nomeDigitado === "") {
        mensagem.innerText = "Digite um nome antes de adicionar.";
        mensagem.style.color = "#b3261e";
        campoNome.focus();
        return;
    }
 
    nomes.push(nomeDigitado);
 
    atualizarLista();
 
    mensagem.innerText =
        nomeDigitado + " foi adicionado ao array.";
    mensagem.style.color = "green";
 
    campoNome.value = "";
    campoNome.focus();
}
 
function atualizarLista() {
    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
 
    for (let indice = 0; indice < nomes.length; indice++) {
        const item = document.createElement("li");
        item.innerText = nomes[indice];
        lista.appendChild(item);
    }
 
    document.getElementById("quantidade").innerText =
        nomes.length;
 
    if (nomes.length > 0) {
        document.getElementById("primeiroNome").innerText =
            nomes[0];
 
        document.getElementById("ultimoNome").innerText =
            nomes[nomes.length - 1];
    } else {
        lista.innerHTML =
            '<li class="vazio">Nenhum nome cadastrado.</li>';
 
        document.getElementById("primeiroNome").innerText = "—";
        document.getElementById("ultimoNome").innerText = "—";
    }
}
 
function limparLista() {
    nomes.length = 0;
    atualizarLista();
 
    document.getElementById("mensagem").innerText =
        "A lista foi limpa.";
    document.getElementById("mensagem").style.color = "#5d6878";
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();
}