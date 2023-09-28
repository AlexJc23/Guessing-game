


let secretNumber = 77;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//will program later to be assigned at random later

const askGuess = () => {rl.question("Guess a number between 0 - 50... ", answer => {
    console.log(`Your guess was ${answer}`, );
    if(!checkGuess(Number(answer))) {
        return askGuess()
    }
    console.log(`You Won!
    Your prize is nothing!`)
    rl.close();
});

}



const checkGuess = (num) => {
    if(secretNumber === num) {
     console.log("Correct!")
     return true
    }

    if(secretNumber > num) {
        console.log("Too Low!")
        return false
    } else {
        console.log("Too High!")
        return false
    }
}
askGuess()
