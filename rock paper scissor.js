let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>
{
    if (userWin) 
    {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    } 
    else
    {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();
  if(userScore ===5)
  {
    h1.style.color = "green";
    msg.innerText = "You won the game. Refresh to play again.";
    buttonFunction();
  }
  else if(compScore === 5){

    h1.style.color = "red";
    msg.innerText = "You lost the game. Refresh to play again.";
    buttonFunction();
  }
  else
  {
    if (userChoice === compChoice) 
    {
      //Draw Game
      drawGame();
    } else 
      {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
buttonFunction = () => {
    let button = document.createElement("button");
    h2.innerText = "REFRESH :";
    h2.style.color = "black";
    h2.appendChild(button);
    button.setAttribute("id", "btn");
    button.addEventListener("click",()=>{
      location.reload();
    })
}