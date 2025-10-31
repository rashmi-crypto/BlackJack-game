let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector(".sum-el")
let cardsEl=document.getElementById("cards-el")
let flag=0
let player = {
    name:"Rashmi",
    chips:200
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" :$"+player.chips
function startGame()
{
    /*if(flag!=1)
    {
        flag=1*/
        isAlive=true
        let firstCard=getRandomCard()
        let secondCard=getRandomCard()
        cards=[firstCard,secondCard]
        sum=firstCard+secondCard
        renderGame()
    //}
}
function renderGame()
{
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+"  "
    }
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum==21){
        hasBlackJack=true
        message="You've got a BlackJack"
    }
    else {
        isAlive=false
        message="You are out of the game"
    }
    messageEl.textContent=message
}
function newCard()
{
    if(isAlive==true && hasBlackJack==false)
        {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
function getRandomCard()
{
    let randomNumber= (Math.floor(Math.random()*13))+1
    if(randomNumber>10)
        return 10
    else if(randomNumber==1)
        return 11
    else
        return randomNumber
}