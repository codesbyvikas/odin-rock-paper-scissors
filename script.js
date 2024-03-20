function getComputerChoice(){
    const choice= Math.floor(Math.random() * (3-1+1))+1
    if(choice==1){
        console.log("Computer choice: Rock")
    }else if(choice == 2){
        console.log("Computer choice: Paper")
    }else if(choice == 3){
        console.log("Computer choice: Scissor")
    }

    return choice;
}

function Play(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

const playerChoice = parseInt(prompt("Enter your choice:\n1. Rock\n2. Paper\n3. Scissors"));

if (playerChoice >= 1 && playerChoice <= 3) {

    let choice;
    if (playerChoice === 1) {
        choice = "Rock";
    } else if (playerChoice === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    console.log("Your choice: "+choice)
}

const computerChoice= parseInt(getComputerChoice())

Play(playerChoice,computerChoice)
