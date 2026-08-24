function analisaDado(){
    let nome = document.getElementById("nome").value.trim;
    let idadeDigitada = document.getElementById("idade").value;
    let idade = Number(idadeDigitada);
    let estudante = document.getElementById("estudante").checked;
    let mensagem = document.getElementById("mensagem");
    let resulNome = document.getElementById("resulNome");
    let resulIda = document.getElementById("resulIda");
    let resulEstu = document.getElementById("resulEstu");

    if (nome === " " || idadeDigitada === " "){
        mensagem.innerText = "Preencha o Nome e a Idade antes de analisar";
        mensagem.style.color = "#b3261e";
        resulNome.innerText = " ";
        resulIda.innerText = " ";
        resulEstu.innerText = " ";
        return;
    }
    mensagem.innerText = "Dados analisados com sucesso!";
    mensagem.style.color = "green";

    resulNome.innerText = "Nome: " + nome + " | Tipo: " + typeof nome;
    resulIda.innerText = "Idade: " + idade + " | Tipo: " + typeof idade;
    resulEstu.innerText = "É Estudante: " + estudante + " | Tipo: " + typeof estudante;
}

function limpaCampo(){
    document.getElementById("nome").value = " ";
    document.getElementById("idade").value = " ";
    document.getElementById("estudante").checked = false;
    document.getElementById("mensagem").innerText = "Preencha os campos e clique em ''Analisar Dados''.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("resulNome").innerText = " ";
    document.getElementById("resulIda").innerText = " ";
    document.getElementById("resulEstu").innerText = " ";
    document.getElementById("nome").focus();
}