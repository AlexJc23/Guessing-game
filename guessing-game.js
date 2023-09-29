const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//global varibles
let secretNumber;
let numAttempts;


let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    secretNumber = Math.floor(Math.random() * (max - min) + min)
    return secretNumber
}

const askLimit = () => {rl.question("How many attempts do you need? ", attempts => {
        numAttempts = Number(attempts)
        askRange()
})
}

const askRange = () => {rl.question("Pick a minimum number... ", minNumber => {
    rl.question("Pick a maximum number... ", maxNumber => {
        console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}`)
        randomInRange(Number(minNumber), Number(maxNumber))
        askGuess()
    })
})
}

const askGuess = () => {rl.question("Guess a number... ", answer => {
    console.log("Attempts left ", numAttempts)
        console.log(`Your guess was ${answer}`, );
        if(numAttempts === 1) {
            console.log(`You Lost bro, the number was ${secretNumber}`)
            return rl.close();
        }
        if(!checkGuess(Number(answer))) {
            return askGuess(numAttempts -= 1)
        } else {
        console.log(`You Won!
        Your prize is nothing!`)
        return rl.close();
        }
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

askLimit()
