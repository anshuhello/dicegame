function rand(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

var randomNumber1 = rand(1,6);
// console.log(randomNumber1);
var randomNumber2 = rand(1,6);

var rand1 = `images/dice${randomNumber1}.png`;
// var rand1 = "images/dice"+ randomNumber1 + '.png';
var rand2 = `images/dice${randomNumber2}.png`;


document.querySelector('.img1').setAttribute('src',rand1);
document.querySelector('.img2').setAttribute('src',rand2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = 'Player 1 wins'
}
if (randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = 'Player 2 wins'
}
if (randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = 'Tie match'
}

