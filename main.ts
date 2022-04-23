function startGame () {
    answer = dictionary.removeAt(randint(0, dictionary.length - 1))
    answerLength = answer.length
    if (answerLength == 4) {
        maxGuesses = 3
    }
    if (answerLength == 5) {
        maxGuesses = 2
    }
    if (answerLength == 6 || answerLength == 7) {
        maxGuesses = 1
    }
    promptForGuess(maxGuesses)
    startGame()
}
function promptForGuess (numGuesses: number) {
    game.splash("You have", "" + numGuesses + " guesses")
    if ((game.askForString("Guess the name of a walrus", answer.length)).toLowerCase() == answer.toLowerCase() && numGuesses > 0) {
        score += 1
        info.changeScoreBy(1)
        game.splash("Congratulations! You win! Your score is", score)
        if (score == 10) {
            game.over(true)
        }
        if (game.ask("Play again?")) {
            startGame()
        }
    } else {
        remainingGuesses = numGuesses - 1
        if (remainingGuesses == 0) {
            numStrikes += 1
            game.splash("Sorry! You LOSE! The answer was: " + answer, "You have " + ("" + numStrikes + " strikes"))
            if (numStrikes == 3) {
                game.over(false)
            }
            if (game.ask("Play again?")) {
                startGame()
            }
        } else {
            game.splash("Sorry! Try again.")
            promptForGuess(remainingGuesses)
        }
    }
}
let remainingGuesses = 0
let maxGuesses = 0
let answerLength = 0
let dictionary: string[] = []
let numStrikes = 0
let score = 0
let answer = ""
game.splash("Welcome to Surlawdle!")
score = 0
info.setScore(0)
numStrikes = 0
dictionary = [
"Surlaw",
"Winston",
"Goldie",
"Russ",
"Wally",
"Shrimpy",
"Berg",
"Bard",
"Paul",
"Dozer",
"Jolly"
]
