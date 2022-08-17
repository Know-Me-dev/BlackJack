let player = {
    name: "Noman",
    chips: 200
}
let cards = []
let sum = 0
let isAlive = true
let hasBlackJack = false
let newGamee = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let btnEl = document.getElementById("btn-el")
let newEl = document.getElementById("btn-new-card")
let playerEl = document.getElementById("player-obj")

// console.log(playerEl)
// console.log(newEl)


function renderGame(){
    playerEl.textContent = player.name + ": $" + player.chips
    playerEl.style.color = "rgb(227, 173, 36)"
    cardsEl.textContent = 'Cards: '
    sumEl.textContent = 'Sum: ' + sum
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
      if (sum === ""){
        messageEl.textContent = "Press START GAME."
        newGamee = true
    }
     else if (sum < 21){
        messageEl.textContent = "Do you want to draw a new card?"
      } else if (sum === 21){
          messageEl.textContent = "You've got blackjack!"
          playerEl.textContent = player.name + ": $" + (player.chips += 200)
          hasBlackJack = true
      }else {
          messageEl.textContent = "You're out of the game!" 
          playerEl.textContent = player.name + ": $" + (player.chips -= 50)
          isAlive = false
      }
    
}


btnEl.addEventListener('click', function startGame(){
    if(isAlive === true && hasBlackJack === false){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard , secondCard]
        sum = firstCard + secondCard
        isAlive = true
        hasBlackJack = false
        newGamee = false
        renderGame()
    }
  
})

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber === 1){
        return 10
    } else if (randomNumber > 10){
        return 11
    } else {
        return randomNumber
    }
}

newEl.addEventListener('click', function newCard(){
    if (isAlive === true && hasBlackJack === false && newGamee === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
        
    }
    
    

})

function newGame(){
    let firstCard = ""
    let secondCard = ""
    cards = []
    sum = firstCard + secondCard 
    newGamee = true
    isAlive = true
    hasBlackJack = false
    renderGame()
}


