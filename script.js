let userScore = 0;
let compScore = 0;
// accessing all the choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("you loss");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loss! Comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = ()=>{
    console.log("game was drawn")
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissor
  const randIdx =   Math.floor(Math.random() * 3);//from index 0 to 2 range we multiplied with 3
  return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);


    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice could be scissor or paper
           userWin = compChoice === "paper" ? false : true; //if comp choice is paper comp will win from rock and paper then userwin var will be false else true
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});