let contador = 0;

function atualizarContador() {
    document.getElementById("contador").innerText = contador;
}

function aumentar() {
    contador++;
    atualizarContador();
}

function diminuir() {
    contador--;
    atualizarContador();
}

function zerar() {
    contador = 0;
    atualizarContador();
}

atualizarContador();