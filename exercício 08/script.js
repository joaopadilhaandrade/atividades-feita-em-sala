function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let media = (nota1 + nota2) / 2;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerText = 
        "Média: " + media + " - Situação: " + situacao;
}