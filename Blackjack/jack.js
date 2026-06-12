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

const deck = [
    // Hearts
    { suit: "Hearts", rank: "A", value: 11 },
    { suit: "Hearts", rank: "2", value: 2 },
    { suit: "Hearts", rank: "3", value: 3 },
    { suit: "Hearts", rank: "4", value: 4 },
    { suit: "Hearts", rank: "5", value: 5 },
    { suit: "Hearts", rank: "6", value: 6 },
    { suit: "Hearts", rank: "7", value: 7 },
    { suit: "Hearts", rank: "8", value: 8 },
    { suit: "Hearts", rank: "9", value: 9 },
    { suit: "Hearts", rank: "10", value: 10 },
    { suit: "Hearts", rank: "J", value: 10 },
    { suit: "Hearts", rank: "Q", value: 10 },
    { suit: "Hearts", rank: "K", value: 10 },

    // Diamonds
    { suit: "Diamonds", rank: "A", value: 11 },
    { suit: "Diamonds", rank: "2", value: 2 },
    { suit: "Diamonds", rank: "3", value: 3 },
    { suit: "Diamonds", rank: "4", value: 4 },
    { suit: "Diamonds", rank: "5", value: 5 },
    { suit: "Diamonds", rank: "6", value: 6 },
    { suit: "Diamonds", rank: "7", value: 7 },
    { suit: "Diamonds", rank: "8", value: 8 },
    { suit: "Diamonds", rank: "9", value: 9 },
    { suit: "Diamonds", rank: "10", value: 10 },
    { suit: "Diamonds", rank: "J", value: 10 },
    { suit: "Diamonds", rank: "Q", value: 10 },
    { suit: "Diamonds", rank: "K", value: 10 },

    // Clubs
    { suit: "Clubs", rank: "A", value: 11 },
    { suit: "Clubs", rank: "2", value: 2 },
    { suit: "Clubs", rank: "3", value: 3 },
    { suit: "Clubs", rank: "4", value: 4 },
    { suit: "Clubs", rank: "5", value: 5 },
    { suit: "Clubs", rank: "6", value: 6 },
    { suit: "Clubs", rank: "7", value: 7 },
    { suit: "Clubs", rank: "8", value: 8 },
    { suit: "Clubs", rank: "9", value: 9 },
    { suit: "Clubs", rank: "10", value: 10 },
    { suit: "Clubs", rank: "J", value: 10 },
    { suit: "Clubs", rank: "Q", value: 10 },
    { suit: "Clubs", rank: "K", value: 10 },

    // Spades
    { suit: "Spades", rank: "A", value: 11 },
    { suit: "Spades", rank: "2", value: 2 },
    { suit: "Spades", rank: "3", value: 3 },
    { suit: "Spades", rank: "4", value: 4 },
    { suit: "Spades", rank: "5", value: 5 },
    { suit: "Spades", rank: "6", value: 6 },
    { suit: "Spades", rank: "7", value: 7 },
    { suit: "Spades", rank: "8", value: 8 },
    { suit: "Spades", rank: "9", value: 9 },
    { suit: "Spades", rank: "10", value: 10 },
    { suit: "Spades", rank: "J", value: 10 },
    { suit: "Spades", rank: "Q", value: 10 },
    { suit: "Spades", rank: "K", value: 10 },
];

//if(bet === 0) {
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


//}



darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    localStorage.setItem(
        'darkMode',
        document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
    )
});

function startGame(){
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randomIndex, 1)[0];

    
}