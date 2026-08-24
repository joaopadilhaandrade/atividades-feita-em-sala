function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerText =
        "Bem-vindo, " + nome + "!";
}