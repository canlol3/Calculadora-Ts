"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("operacion");
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("btn")) {
            funcionBtn(target);
        }
    });
    function funcionBtn(target) {
        var _a;
        var digitos = (_a = display.textContent) === null || _a === void 0 ? void 0 : _a.length;
        if (target.classList.contains("number")) {
            funcionNum(target, digitos);
        }
        else if (target.classList.contains("operator")) {
            funcionOperator(target, digitos);
        }
    }
    function funcionNum(target, digitos) {
        var num = target.getAttribute("data-value");
        if (digitos == 1 && display.textContent == "0") {
            display.textContent = num;
        }
        else if (display && display.textContent && digitos >= 18) {
            mensajeAviso("MAX DIGITOS", 2000);
        }
        else if (num != "0") {
            display.textContent += num;
        }
        else if (display && display.textContent && digitos > 0) {
            display.textContent += num;
        }
    }
    function funcionOperator(target, digitos) {
        var operator = target.getAttribute("data-value");
        if (digitos == 1 && display.textContent == "0") {
            display.textContent = operator;
        }
        if (target.textContent == "=") {
            calculate();
        }
        else if (target.textContent == "⌫") {
            display.textContent = display.textContent.slice(0, -1);
            if (digitos <= 1) {
                display.textContent = "0";
            }
        }
        else if (target.textContent == "C") {
            display.textContent = "0";
        }
        else if (target.textContent == "√") {
            display.textContent += "√(";
        }
        else {
            display.textContent += target.textContent;
        }
    }
    function calculate() {
        var _a, _b;
        display.textContent = ((_a = display.textContent) === null || _a === void 0 ? void 0 : _a.replace("√", "Math.sqrt")) + "";
        display.textContent = ((_b = display.textContent) === null || _b === void 0 ? void 0 : _b.replace("^", "**")) + "";
        console.log(display.textContent);
        if (eval(display.textContent + "") == Infinity) {
            mensajeAviso("MATH ERROR", 2000);
        }
        else {
            display.textContent = eval(display.textContent + "");
        }
    }
    function mensajeAviso(mensaje, tiempo) {
        document.body.style.pointerEvents = "none";
        var temp = display.textContent;
        display.textContent = mensaje;
        setTimeout(() => {
            display.textContent = temp;
            document.body.style.pointerEvents = "auto";
        }, tiempo);
    }
});
