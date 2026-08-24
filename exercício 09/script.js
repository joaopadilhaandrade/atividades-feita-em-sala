function validarCampo() {
  let nome = document.getElementById("nome").value.trim();
  let mensagem = "";

  if (nome === "") {
      mensagem = "O campo nome está vazio.";
  } else if (nome.length < 3) {
      mensagem = "Digite pelo menos 3 caracteres.";
  } else {
      mensagem = "Campo preenchido corretamente!";
  }

  document.getElementById("mensagem").innerText = 
      "Mensagem: " + mensagem;
}