const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('.yourScore');
const computerScore = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const machine = ['pedra', 'papel', 'tesoura'];
const jogador = ['pedra', 'papel', 'tesoura'];
let pontuacaoJogador = 0
let pontuacaoMaquina = 0

buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
  const human = button.value;
  const numeroAleatorio = Math.floor(Math.random()*3)
  const computerChoice = machine[numeroAleatorio];
if(human ===computerChoice){
  result.innerHTML  = "Empate"
}else if(human === "papel" && computerChoice==="pedra" || human=== "pedra" && computerChoice === "tesoura" || human ==="tesoura" && computerChoice === "papel"){
  result.innerHTML = "Voce ganhou"
  yourScore.innerHTML= ++pontuacaoJogador
}else{
  result.innerHTML = "Voce perdeu para maquina😭"
  computerScore.innerHTML = ++pontuacaoMaquina
}
  })
})