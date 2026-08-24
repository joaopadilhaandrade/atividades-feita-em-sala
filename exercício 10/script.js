function verificaLogin(){
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let resultado = document.getElementById("resultado");

    if (usuario === " " || senha === " "){
        resultado.innerText = "Resultado: Preencha o Usuário e a Senha.";
        resultado.style.color = "#b26a00";
    }
    else if (usuario === "aluno" && senha === "1234"){
        resultado.innerText = "Resultado: Acesso Permitido!";
        resultado.style.color = "green";
    }
    else {
        resultado.innerText = "Resultado: Usuário ou Senha incorretos.";
        resultado.style.color = "red";
    }
}

function limpaCampo(){
    document.getElementById("usuario").value = " ";
    document.getElementById("senha").value = " ";
    document.getElementById("resultado").innerText = "Resultado: ";
    document.getElementById("resultado").style.color = "#333";
    document.getElementById("usuario").focus();
}