// Good Luck! You got this 💪🏾
// Write your code here.



let playGame = (player1, player2) =>{
    if (player1 === "rock" && player2 === "scissors"){
        return "player 1 wins";
    }

    else if (player1 === "rock" && player2 === "paper"){
        return "player 2 wins";
    }

    else if (player1 === "rock" && player2 === "rock"){
        return "tie";
    }

    else if (player1 === "scissors" && player2 === "paper"){
        return "player 1 wins";
    }

    else if (player1 === "scissors" && player2 === "rock"){
        return "player 2 wins";
    }

    else if (player1 === "scissors" && player2 === "scissors"){
        return "tie";
    }

    else if (player1 === "paper" && player2 === "scissors"){
        return "player 2 wins";
    }

    else if (player1 === "paper" && player2 === "rock"){
        return "player 1 wins";
    }

    else if (player1 === "paper" && player2 === "paper"){
        return "tie";
    }

}

console.log(playGame("scissors", "paper"));
console.log(playGame("scissors", "rock"));
console.log(playGame("scissors", "scissors"));
console.log(playGame("rock", "paper"));
console.log(playGame("rock", "scissors"));
console.log(playGame("rock", "rock"));
console.log(playGame("paper", "rock"));
console.log(playGame("paper", "scissors"));
console.log(playGame("paper", "paper"));

