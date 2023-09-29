const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

//generates a random number between two numbers
let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    secretNumber = Math.floor(Math.random() * (max - min) + min)
    // console.log(secretNumber)
    return secretNumber
}




const askRange = () => {rl.question("Pick a min number... ", minNumber => {

    rl.question("Pick a max number... ", maxNumber => {
        console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}`)
        randomInRange(Number(minNumber), Number(maxNumber))
        askGuess()

    })
})
}




const askGuess = () => {rl.question("Guess a number... ", answer => {
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

askRange()
