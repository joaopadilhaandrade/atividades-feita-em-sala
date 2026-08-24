const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];
 
function mostrarTrilha() {
    const lista = document.getElementById("listaTecnologias");
    const mensagem = document.getElementById("mensagem");
    let quantidadeProcessada = 0;
 
    lista.innerHTML = "";
 
    tecnologias.forEach(function (tecnologia, indice) {
        const item = document.createElement("li");
        const numeroEtapa = indice + 1;
 
        item.innerText =
            numeroEtapa + "ª etapa: " + tecnologia;
 
        lista.appendChild(item);
        quantidadeProcessada++;
    });
 
    document.getElementById("quantidade").innerText =
        tecnologias.length;
 
    document.getElementById("processadas").innerText =
        quantidadeProcessada;
 
    mensagem.innerText =
        "O forEach percorreu todos os itens do array.";
    mensagem.style.color = "green";
}
 
function limparTrilha() {
    document.getElementById("listaTecnologias").innerHTML =
        '<li class="vazio">A trilha ainda não foi exibida.</li>';
 
    document.getElementById("processadas").innerText = "0";
 
    document.getElementById("mensagem").innerText =
        "Clique em “Mostrar trilha” para executar o forEach.";
 
    document.getElementById("mensagem").style.color = "#5d6878";
}