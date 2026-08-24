function converterFahrenheit() {
    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").innerText =
        "Resultado: " + fahrenheit + " °F";
}

function converterKelvin() {
    let celsius = Number(document.getElementById("celsius").value);

    let kelvin = celsius + 273.15;

    document.getElementById("resultado").innerText =
        "Resultado: " + kelvin + " K";
}

function limpar() {
    document.getElementById("celsius").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
}