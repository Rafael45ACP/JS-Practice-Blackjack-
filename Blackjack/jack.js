let startingMoney = prompt("Welcome to Blackjack! Enter starting money:");
let money = parseInt(startingMoney);
let bet = 0;

let pcCards = document.getElementById("pcCards");
let pcValue = document.getElementById("pcValue");

let playerCards = document.getElementById("playerCards");
let playerValue = document.getElementById("playerValue");
let Pmoney = document.getElementById("money");

let fDiv = document.getElementById("fDiv");

let darkMode = document.getElementById("darkMode");

Pmoney.textContent = money;

if(bet === 0) {
    let betInput = document.createElement("input");
    let betBTN = document.createElement("button");
    betBTN.textContent = "Place Bet!";
    betInput.type = "number";

    let betBR = document.createElement("br");

    let betSpan = document.createElement("span");
    betSpan.textContent = bet;
    
    let betValue = 0;
    
    
    betInput.addEventListener('keydown', function (event) {
        
        if (event.key === 'Enter') {
        betValue = betInput.value.trim();
            if(betValue > money){
                alert("Bet cannot exceed starting money!");
                betInput.value = '';
            }
            else if(betValue < money || betValue == money)
            {
                bet = Number(betValue);
                betSpan.textContent = bet;
                return;
            }
        }
        if (
            event.key === 'Backspace' ||
            event.key === 'Delete' ||
            event.key === 'ArrowLeft' ||
            event.key === 'ArrowRight' ||
            event.key === 'Tab'
        ) return;

        if (!/^\d$/.test(event.key)) {
            event.preventDefault();
        }
        
    });
    
    betBTN.addEventListener('click',function(){
        
        betValue = betInput.value.trim();
            if(betValue > money){
                alert("Bet cannot exceed starting money!");
                betInput.value = '';
            }
            else if(betValue < money || betValue == money)
            {
                bet = Number(betValue);
                betSpan.textContent = bet;
                return;
            }
    });
    
        fDiv.appendChild(betInput);
        fDiv.appendChild(betBTN);
        fDiv.appendChild(betBR);
        fDiv.appendChild(betSpan);


}

darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    localStorage.setItem(
        'darkMode',
        document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
    )
});