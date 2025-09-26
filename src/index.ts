document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("operacion") as HTMLParagraphElement;

  const buttonsContainer = document.querySelector(".buttons") as HTMLElement;

  buttonsContainer.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("btn")) {
      funcionBtn(target);
    }
  });
  function funcionBtn(target: HTMLElement) {
    var digitos = display.textContent?.length!;
    if (target.classList.contains("number")) {
      funcionNum(target, digitos);
    } else if (target.classList.contains("operator")) {
      funcionOperator(target, digitos);
    }
  }
  function funcionNum(target: HTMLElement, digitos: number) {
    var num = target.getAttribute("data-value");
    if (digitos == 1 && display.textContent == "0") {
      display.textContent = num;
    } else if (display && display.textContent && digitos >= 18) {
      mensajeAviso("MAX DIGITOS", 2000);
    } else if (num != "0") {
      display.textContent += num!;
    } else if (display && display.textContent && digitos > 0) {
      display.textContent += num;
    }
  }
  function funcionOperator(target: HTMLElement, digitos: number) {
    var operator = target.getAttribute("data-value");
    if (digitos == 1 && display.textContent == "0") {
      display.textContent = operator;
    }
    if (target.textContent == "=") {
        calculate()
    } else if (target.textContent == "⌫") {
      display.textContent = display.textContent!.slice(0, -1);
      if (digitos <= 1) {
        display.textContent = "0";
      }
    } else if (target.textContent == "C") {
      display.textContent = "0";
    } else if (target.textContent == "√") {
      display.textContent += "√(";
    } else {
      display.textContent += target.textContent!;
    }
  }
  function calculate() {
    display.textContent = display.textContent?.replace("√", "Math.sqrt") + "";
    display.textContent = display.textContent?.replace("^", "**") + "";

    console.log(display.textContent);
    if (eval(display.textContent + "") == Infinity) {
      mensajeAviso("MATH ERROR", 2000);
    } else {
      display.textContent = eval(display.textContent + "");
    }
  }
  function mensajeAviso(mensaje: string, tiempo: number) {
    document.body.style.pointerEvents = "none";
    var temp = display.textContent;
    display.textContent = mensaje;
    setTimeout(() => {
      display.textContent = temp;
      document.body.style.pointerEvents = "auto";
    }, tiempo);
  }
});
