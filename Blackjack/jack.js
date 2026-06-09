let startingMoney = prompt("Welcome to Blackjack! Enter starting money:");
let money = parseInt(startingMoney);
let bet = 0;

let pcCards = document.getElementById("pcCards");
let pcValue = document.getElementById("pcValue");

let playerCards = document.getElementById("playerCards");
let playerValue = document.getElementById("playerValue");
let Pmoney = document.getElementById("money");

Pmoney.textContent = money;