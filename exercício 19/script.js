const cartaoPerfil = document.getElementById("cartaoPerfil");
const detalhes = document.getElementById("detalhes");
const btnTema = document.getElementById("btnTema");
const btnDestaque = document.getElementById("btnDestaque");
const btnDetalhes = document.getElementById("btnDetalhes");
const btnRestaurar = document.getElementById("btnRestaurar");
 
btnTema.addEventListener("click", function () {
    cartaoPerfil.classList.toggle("tema-escuro");
    atualizarStatus();
});
 
btnDestaque.addEventListener("click", function () {
    if (cartaoPerfil.classList.contains("destaque")) {
        cartaoPerfil.classList.remove("destaque");
    } else {
        cartaoPerfil.classList.add("destaque");
    }
 
    atualizarStatus();
});
 
btnDetalhes.addEventListener("click", function () {
    detalhes.classList.toggle("oculto");
 
    if (detalhes.classList.contains("oculto")) {
        btnDetalhes.innerText = "Mostrar detalhes";
    } else {
        btnDetalhes.innerText = "Ocultar detalhes";
    }
 
    atualizarStatus();
});
 
btnRestaurar.addEventListener("click", restaurarCartao);
 
function restaurarCartao() {
    cartaoPerfil.classList.remove("tema-escuro");
    cartaoPerfil.classList.remove("destaque");
    detalhes.classList.remove("oculto");
    btnDetalhes.innerText = "Ocultar detalhes";
    atualizarStatus();
}
 
function atualizarStatus() {
    const classesAtivas = [];
 
    if (cartaoPerfil.classList.contains("tema-escuro")) {
        classesAtivas.push("tema-escuro");
    }
 
    if (cartaoPerfil.classList.contains("destaque")) {
        classesAtivas.push("destaque");
    }
 
    if (detalhes.classList.contains("oculto")) {
        classesAtivas.push("oculto");
    }
 
    const status = document.getElementById("classesAtivas");
 
    if (classesAtivas.length === 0) {
        status.innerText = "Nenhuma classe adicional.";
    } else {
        status.innerText = classesAtivas.join(", ");
    }
}