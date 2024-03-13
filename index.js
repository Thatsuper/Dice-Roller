const dice1 = document.getElementById("Dice1")
const dice2 = document.getElementById("Dice2")
const dice3 = document.getElementById("Dice3")
const dice4 = document.getElementById("Dice4")
const dice5 = document.getElementById("Dice5")
const dice6 = document.getElementById("Dice6")

const body = document.getElementById("body")

let shuffle = true

let randomroll;

let randomdice;

diceshuffle()

function diceshuffle() {
    const die1 = document.getElementById("Dice1copy")
    const die2 = document.getElementById("Dice2copy")
    const die3 = document.getElementById("Dice3copy")
    const die4 = document.getElementById("Dice4copy")
    const die5 = document.getElementById("Dice5copy")
    const die6 = document.getElementById("Dice6copy")

    let randomnum = Math.floor(Math.random() * 6)
    
    if (randomnum == 0) {
        die1.classList.remove("dice", "visually-hidden")
        die1.classList.add("center")
        randomdice = die1
    } else if (randomnum == 1) {
        die2.classList.remove("dice", "visually-hidden")
        die2.classList.add("center")
        randomdice = die2
    } else if (randomnum == 2) {
        die3.classList.remove("dice", "visually-hidden")
        die3.classList.add("center")
        randomdice = die3
    } else if (randomnum == 3) {
        die4.classList.remove("dice", "visually-hidden")
        die4.classList.add("center")
        randomdice = die4
    } else if (randomnum == 4) {
        die5.classList.remove("dice", "visually-hidden")
        die5.classList.add("center")
        randomdice = die5
    } else {
        die6.classList.remove("dice", "visually-hidden")
        die6.classList.add("center")
        randomdice = die6
    }

    if(shuffle == true) {
        setTimeout(() => {
            if(shuffle == false) {
                return
            } else {
                randomdice.classList.remove("center")
            randomdice.classList.add("dice", "visually-hidden")
            diceshuffle()
            }
        }, 800);
    }
}

function random() {
    randomroll = Math.floor(Math.random() * 6)
    if (randomroll == 0) {
        dice1.classList.remove("dice", "visually-hidden")
        dice1.classList.add("center")
        randomdice = dice1
    } else if (randomroll == 1) {
        dice2.classList.remove("dice", "visually-hidden")
        dice2.classList.add("center")
        randomdice = dice2
    } else if (randomroll == 2) {
        dice3.classList.remove("dice", "visually-hidden")
        dice3.classList.add("center")
        randomdice = dice3
    } else if (randomroll == 3) {
        dice4.classList.remove("dice", "visually-hidden")
        dice4.classList.add("center")
        randomdice = dice4
    } else if (randomroll == 4) {
        dice5.classList.remove("dice", "visually-hidden")
        dice5.classList.add("center")
        randomdice = dice5
    } else {
        dice6.classList.remove("dice", "visually-hidden")
        dice6.classList.add("center")
        randomdice = dice6
    }

}

body.addEventListener("click", function (e) {
    e.preventDefault;
    shuffle = false
    randomdice.classList.remove("center")
    randomdice.classList.add("dice", "visually-hidden")
    random()
})