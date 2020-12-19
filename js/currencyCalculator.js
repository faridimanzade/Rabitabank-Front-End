let currency = document.getElementById("currencySelect");
let resultSelect = document.getElementById("resultSelect");
let inputs = document.querySelectorAll(".currencyInput");


let currencyChoice = 1;
inputs[0].addEventListener("input", function () {
    inputs[1].value = inputs[0].value * 1.7;
    document.getElementById("resultSelect").disabled = true;
    document.getElementById("resultSelect").style.cursor = "default";
});

currency.addEventListener("change", function () {
    currencyChoice = currency.value;
    if (currencyChoice == 1) {
        inputs[1].value = "";
        inputs[1].value = inputs[0].value * 1.7;
        inputs[0].addEventListener("input", function () {
            inputs[1].value = inputs[0].value * 1.7;
        });
        inputs[0].addEventListener("change", function () {
            inputs[1].value = inputs[0].value * 1.7;
        });
    } else if (currencyChoice == 2) {
        inputs[1].value = "";
        inputs[1].value = inputs[0].value * 1.92;
        inputs[0].addEventListener("input", function () {
            inputs[1].value = inputs[0].value * 1.92;
        });
        inputs[0].addEventListener("change", function () {
            inputs[1].value = inputs[0].value * 1.92;
        });
    } else if (currencyChoice == 3) {
        inputs[1].value = "";
        inputs[1].value = Math.floor((inputs[0].value * 0.022) * 1000) / 1000;
        inputs[0].addEventListener("input", function () {
            inputs[1].value = Math.floor((inputs[0].value * 0.022) * 10000) / 10000;
        });
        inputs[0].addEventListener("change", function () {
            inputs[1].value = Math.floor((inputs[0].value * 0.022) * 10000) / 10000;
        });
    } else if (currencyChoice == 4) {
        inputs[1].value = "";
        inputs[1].value = inputs[0].value * 2;
        inputs[0].addEventListener("input", function () {
            inputs[1].value = inputs[0].value * 2;
        });
        inputs[0].addEventListener("change", function () {
            inputs[1].value = inputs[0].value * 2;
        });
    }
    document.getElementById("resultSelect").disabled = true;
    document.getElementById("resultSelect").style.cursor = "default";
});