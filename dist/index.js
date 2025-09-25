"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("operacion");
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.addEventListener("click", (event) => {
        var _a, _b, _c;
        const target = event.target;
        if (target.classList.contains("btn")) {
            var digitos = (_a = display.textContent) === null || _a === void 0 ? void 0 : _a.length;
            if (target.classList.contains("number")) {
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
            else if (target.classList.contains("operator")) {
                var operator = target.getAttribute("data-value");
                if (digitos == 1 && display.textContent == "0") {
                    display.textContent = operator;
                }
                else if (target.textContent == "=") {
                    display.textContent = ((_b = display.textContent) === null || _b === void 0 ? void 0 : _b.replace("√", "Math.sqrt")) + "";
                    display.textContent = ((_c = display.textContent) === null || _c === void 0 ? void 0 : _c.replace("^", "**")) + "";
                    console.log(display.textContent);
                    if (eval(display.textContent + "") == Infinity) {
                        mensajeAviso("MATH ERROR", 2000);
                    }
                    else {
                        display.textContent = eval(display.textContent + "");
                    }
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
        }
    });
    function mensajeAviso(mensaje, tiempo) {
        document.body.style.pointerEvents = "none";
        var temp = display.textContent;
        display.textContent = mensaje;
        setTimeout(() => {
            display.textContent = temp;
            document.body.style.pointerEvents = "auto";
        }, tiempo);
    }
    function filtrarCalculo(calculo) {
        calculo.replace("√", "Math.sqrt");
    }
});
