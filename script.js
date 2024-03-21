var playerChoice = document.querySelectorAll('#btn-box');
var resultShow = document.querySelector('#result');

const obj = {
    'rock': 1,
    'paper': 2,
    'scissor': 3
};

playerChoice.forEach((button) => {
    button.addEventListener("click", (event) => {
        var choice = button.value;
        resultShow.innerHTML = ''; 
        console.log(obj[choice]);

        if (obj[choice] >= 1 && obj[choice] <= 3) {

            if (obj[choice] == 1) {
                choiceValue = "Rock";
            } else if (obj[choice] == 2) {
                choiceValue = "Paper";
            } else {
                choiceValue = "Scissors";
            }
            let p1 = document.createElement('p');
            p1.textContent = "Your Choice: " + choiceValue;
            resultShow.append(p1);
            console.log("Your choice: " + choiceValue);
        }

        var computerChoice = getComputerChoice();
        Play(obj[choice], computerChoice);
    });
});

function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (choice == 1) {
        let p2 = document.createElement('p');
        p2.textContent = "Computer Choice: Rock";
        resultShow.append(p2);
    } else if (choice == 2) {
        let p2 = document.createElement('p');
        p2.textContent = "Computer Choice: Paper";
        resultShow.append(p2);
        console.log("Computer choice: Paper");
    } else if (choice == 3) {
        let p2 = document.createElement('p');
        p2.textContent = "Computer Choice: Scissor";
        resultShow.append(p2);
        console.log("Computer choice: Scissor");
    }

    return choice;
}

function Play(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a draw!");
        let p3 = document.createElement('p');
        p3.textContent = "It's a draw!(Lucky you 😄)";
        p3.style.color = 'grey';
        resultShow.append(p3);
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        console.log("You win!");
        let p3 = document.createElement('p');
        p3.textContent = "You win! (Might be a glitch 😆)";
        p3.style.color = 'green';
        resultShow.append(p3);
    } else {
        console.log("You lose!");
        let p3 = document.createElement('p');
        p3.textContent = "You Lose! (Try harder 😏)";
        p3.style.color = 'red';
        resultShow.append(p3);
    }
}
