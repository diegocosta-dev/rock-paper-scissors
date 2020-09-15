let userScore = 0
let compScore = 0
const userScore_span = document.getElementById('user-score')
const compScore_span = document.getElementById('comp-score')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')


function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNunber = Math.floor(Math.random() * 3)
    return choices[randomNunber]
}


function convertToWord(letter) {
    if (letter == 'r') return 'Rock'
    if (letter == 'p') return 'Peper'
    return 'Scissors'
}


function win(userChoice, computerChoice) {
    const smallUser = 'user'.fontsize(3).sup()
    const smallComp = 'Comp'.fontsize(3).sup()
    userScore++
    userScore_span.innerHTML = userScore
    user = convertToWord(userChoice)
    computer = convertToWord(computerChoice)
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 200)
    result_div.innerHTML = `You win! ${user} ${smallUser} beats ${computer} ${smallComp}`
}


function lose(userChoice, computerChoice) {
    const smallUser = 'user'.fontsize(3).sup()
    const smallComp = 'Comp'.fontsize(3).sup()
    compScore++
    compScore_span.innerHTML = compScore
    user = convertToWord(userChoice)
    computer = convertToWord(computerChoice)
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 200)
    result_div.innerHTML = `You lose! ${computer} ${smallComp} beats ${user} ${smallUser}`

}


function drow(userChoice, computerChoice) {
    const smallUser = 'user'.fontsize(3).sup()
    const smallComp = 'Comp'.fontsize(3).sup()
    user = convertToWord(userChoice)
    computer = convertToWord(computerChoice)
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 200)
    result_div.innerHTML = `Drow Game! ${user} and ${computer} `

}


function game(userChoice) {
    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            drow(userChoice, computerChoice)
            break
    }

}


function main(){

    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () =>  game('p'))
    scissors_div.addEventListener('click', () => game('s'))
}

main()