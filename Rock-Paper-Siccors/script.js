let userScore = 0;
let computerScore = 0;

// Optional: Add sound effects
const winSound = new Audio("https://www.soundjay.com/button/beep-07.wav");
const loseSound = new Audio("https://www.soundjay.com/button/beep-10.wav");
const tieSound = new Audio("https://www.soundjay.com/button/beep-08b.wav");

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
  };
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "";
  let resultDiv = document.getElementById("result");

  if (userChoice === computerChoice) {
    resultText = `😐 It's a Tie! You both chose ${emojis[userChoice]}`;
    tieSound.play();
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    resultText = `🎉 You Win! ${emojis[userChoice]} beats ${emojis[computerChoice]}`;
    winSound.play();
  } else {
    computerScore++;
    resultText = `😢 You Lose! ${emojis[computerChoice]} beats ${emojis[userChoice]}`;
    loseSound.play();
  }

  resultDiv.innerText = resultText;
  resultDiv.classList.add("fade");
  setTimeout(() => resultDiv.classList.remove("fade"), 500);

  document.getElementById("score").innerText = `You: ${userScore} | Computer: ${computerScore}`;
}
