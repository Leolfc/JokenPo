const buttons = document.querySelectorAll("button");
const yourScore = document.querySelector(".yourScore");
const computerScore = document.querySelector(".computerScore");
const audio = document.querySelector("audio");
const result = document.querySelector(".result");
const GAME_OPTIONS = {
  Pedra: "pedra",
  Papel: "papel",
  Tesoura: "tesoura",
};
const machine = [GAME_OPTIONS.Pedra, GAME_OPTIONS.Papel, GAME_OPTIONS.Tesoura];
const jogador = [GAME_OPTIONS.Pedra, GAME_OPTIONS.Papel, GAME_OPTIONS.Tesoura];
let pontuacaoJogador = 0;
let pontuacaoMaquina = 0;
//SNAKE CASE -> GAME_OPTIONS

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    audio.play();
    const human = button.value;
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const computerChoice = machine[numeroAleatorio];
    if (human === computerChoice) {
      result.innerHTML = "Empate";
    } else if (
      (human === GAME_OPTIONS.Papel && computerChoice === GAME_OPTIONS.Pedra) ||
      (human === GAME_OPTIONS.Pedra && computerChoice === GAME_OPTIONS.Tesoura) ||
      (human ===GAME_OPTIONS.Tesoura && computerChoice === GAME_OPTIONS.Papel)
    ) {
      result.innerHTML = "Voce ganhou😁";
      yourScore.innerHTML = ++pontuacaoJogador;
    } else {
      result.innerHTML = "Voce perdeu para maquina😭";
      computerScore.innerHTML = ++pontuacaoMaquina;
    }
  });
});
