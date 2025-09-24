document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("operacion") as HTMLParagraphElement

  const buttonsContainer = document.querySelector('.buttons') as HTMLElement;

  buttonsContainer.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if(target.classList.contains('btn')){
      if(target.classList.contains('number')){
        if(display.textContent.length>=18){
          document.body.style.pointerEvents = 'none';
          var temp = display.textContent
          display.textContent = "MAX DIGITOS"
          setTimeout(()=>{
            display.textContent = temp
            document.body.style.pointerEvents = 'auto';
          },2000)
        }else{
        display.textContent += target.getAttribute('data-value')
        }
      }else if(target.classList.contains('operator') ){
        if(target.textContent == "="){
         display.textContent = eval(display.textContent + "")
        }else if(target.textContent =="⌫"){
          display.textContent = display.textContent.slice(0,-1)
        }else if(target.textContent == "C"){
          display.textContent = ""
        }else{
          display.textContent += target.textContent
        }
      }
    } 
  })
})