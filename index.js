
const randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 - 6

const randomDiceImage = "dice" + randomNumber1 + ".png";

const randomImageSource = "images/" + randomDiceImage;  // folder images/dice1.png - images/dice6.png

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👍 Play 1 WIns!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 👏";
} else{
    document.querySelector("h1").innerHTML = "Draw! 🤝";
}
