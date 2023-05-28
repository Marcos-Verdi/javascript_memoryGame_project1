const cardsArray = [
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    },
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    }
]

const gridElement = document.querySelector('#grid')
let chosenCards = []
let chosenCardsId = []
let cardsWon = []

function flipCard() {
    const cardId = this.getAttribute('data-id')
    chosenCards.push(cardsArray[cardId].name)
    chosenCardsId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')

    if(chosenCards[0] === chosenCards[1]) {
        alert("You found a match!")
        cards[chosenCardsId[0]].setAttribute('src','./images/white.png')
        cards[chosenCardsId[1]].setAttribute('src','./images/white.png')
        cards[chosenCardsId[0]].removeEventListener('click', flipCard)
        cards[chosenCardsId[1]].removeEventListener('click', flipCard)
        cardsWon.push(chosenCards)
    } else {
        alert("Try again")
        cards[chosenCardsId[0]].setAttribute('src','./images/blank.png')
        cards[chosenCardsId[1]].setAttribute('src','./images/blank.png')
    }
}

function createBoard() {
    for (let i=0; i < cardsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src','./images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridElement.appendChild(card)
    }
}

createBoard()



