// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1



// Eventos //
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) 
document.addEventListener('keydown', keyEnter)

// funções callback //
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão desse evento (Executar o submit)

  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) < 0 | Number(inputNumber.value) > 10) {
    alert("Números menores que 0 ou maiores que 10 não valem")
  }

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = "Voce acertou em " + xAttempts + " tentativas"
    
    
  }
 
  inputNumber.value = ""
  xAttempts++


}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

}

function keyEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
      handleResetClick()
  
  }
}

