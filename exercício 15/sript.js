function calcularValorDesconto(preco, percentual) {
    return preco * (percentual / 100);
}

function calcularPrecoFinal(preco, valorDesconto) {
    return preco - valorDesconto;
}

function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function mostrarCalculo() {
    const campoPreco = document.getElementById("preco");
    const campoPercentual = document.getElementById("percentual");
    const mensagem = document.getElementById("mensagem");

    const preco = Number(campoPreco.value);
    const percentual = Number(campoPercentual.value);

    if (campoPreco.value === "" || preco <= 0) {
        mensagem.innerText = "Digite um preço maior que zero.";
        mensagem.style.color = "#b3261e";
        campoPreco.focus();
        return;
    }

    if (campoPercentual.value === "" || percentual < 0 || percentual > 100) {
        mensagem.innerText = "Digite um desconto entre 0 e 100.";
        mensagem.style.color = "#b3261e";
        campoPercentual.focus();
        return;
    }

    const valorDesconto = calcularValorDesconto(preco, percentual);
    const precoFinal = calcularPrecoFinal(preco, valorDesconto);

    document.getElementById("precoOriginal").innerText = formatarMoeda(preco);
    document.getElementById("valorDesconto").innerText = formatarMoeda(valorDesconto);
    document.getElementById("precoFinal").innerText = formatarMoeda(precoFinal);

    mensagem.innerText = "Desconto calculado com funções, parâmetros e retorno.";
    mensagem.style.color = "green";
}

function limpar() {
    document.getElementById("preco").value = "";
    document.getElementById("percentual").value = "";

    document.getElementById("precoOriginal").innerText = "R$ 0,00";
    document.getElementById("valorDesconto").innerText = "R$ 0,00";
    document.getElementById("precoFinal").innerText = "R$ 0,00";

    document.getElementById("mensagem").innerText = "Preencha os campos para realizar o cálculo.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("preco").focus();
}