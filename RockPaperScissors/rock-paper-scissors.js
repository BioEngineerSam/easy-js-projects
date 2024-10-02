// This file is some sample code to get you started so that
// you don't start with a completely blank slate (I know that
// can feel overwhelming!)
//
// So we'll start easy by starting with some sample code.
// I've commented each line so you can follow along.
//
// Press the "Run" button at the top to see what this does.

// This is making use of the native `readline` NodeJS package.
// (Note: NodeJS is a JavaScript runtime – a program that can
// execute JavaScript code.)
//
// NodeJS comes with a set of packages pre-installed that extend
// the core functionality of the language. We can make use of
// those packages by `require`ing it with the package name.
//
// "node:readline" is the package that we want in this case to
// help us prompt the user for an input.
const readline = require("node:readline");

// This bit of code creates a readline object that allows us to
// ask for user input and output. It's pretty low-level and
// close to the rails, so we have to do things like supply it
// an `input` and `output` to tell the readline package what
// to use to ask for inputs from the user and the output that
// the user can observe.
const rl = readline.createInterface({
  // In this case, `process.stdin` and `process.stdout` is used.
  // stdin and stdout are the colloquial abbreviations used in
  // most languages to indicate the standard stream that programs
  // will write to. (For example, A `console.log` in a NodeJS
  // program will write to stdout.)
  //
  // It's an abbreviation for "Standard In" and "Standard Out".
  // Don't worry too much about this block of code for this
  // project. But I've given you just enough context so you
  // aren't completely in the dark about what's going on.
  input: process.stdin,
  output: process.stdout,
});

let computerChoice = "";
const GameOptions = ["r", "p", "s"];

// This is a function that we can call to ask who won the game
function compChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  computerChoice = GameOptions[randomChoice];
  console.log("Computer chose: " + computerChoice);
}

function gameWinner(userInput) {
  if (userInput === computerChoice) {
    return "tied";
  } else if (
    (userInput === "r" && computerChoice === "s") ||
    (userInput === "p" && computerChoice === "r") ||
    (userInput === "s" && computerChoice === "p")
  ) {
    return "user";
  } else {
    return "machine";
  }
  
}

// We can call the `question` method on a readline object to
// prompt the user.
rl.question(
  // This is the question that is shown to the user.
  `Make your move in rock paper scissors!\nType "r" for rock, "p" for paper, "s" for scissors: \n`,

  // This callback function is called when the user types their input
  // and presses enter.
  (userInput) => {
    // Get the input in the form of an argument.
    console.log(`You typed: ${userInput}`);
    if (GameOptions.includes(userInput)){
      compChoice();
      let winner = gameWinner(userInput);
      if (winner === "tied") {
        console.log("It's a tie!");
      } else if (winner === "user") {
        console.log("You win!");
      } else {
        console.log("You lose!");
      }
    }
    else {
      console.log("Invalid input. Please try again.");
    }
    // This line is necessary to terminate our program. Otherwise,
    // the JavaScript runtime has no way to know that we've stopped
    // asking the user for an input.
    rl.close();
  },
);
