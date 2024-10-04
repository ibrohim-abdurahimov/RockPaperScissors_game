document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const resultMessage = document.getElementById("resultMessage");

  const choices = ["rock", "paper", "scissors"];

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      const result = determineWinner(userChoice, computerChoice);
      resultMessage.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    });
  });

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a draw!";
        }
        if (
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")
        ) {
            return "You win!";
        }
        return "You lose!";
    }
});