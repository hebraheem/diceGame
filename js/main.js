let computer = document.querySelector(".computer");
let player = document.querySelector(".gamepad");
let select = document.querySelector("select")


select.addEventListener("change", Choose)
function Choose(){
    if (select.value == "Choose player"){
        player.style.display = "none";
        computer.style.display = "none"
    }else if(select.value == "2 Player") {
        player.style.display = "block";
        computer.style.display = "none"
    }else {
        player.style.display = "none";
        computer.style.display = "block"
    }
}


let playerbtn = document.querySelectorAll(".btn")[0];
// let playerbtn1 = document.querySelectorAll(".btn")[1];
playerbtn.addEventListener("click", rollOne);
// playerbtn1.addEventListener("click", rollOne);
function rollOne() {
    let randomNumber = Math.floor(Math.random()*6)+ 1;
    let randomDiceImage = "dice" + randomNumber + ".png";
    let randomImageSource = "images/" + randomDiceImage;
    let image = document.querySelectorAll("img")[0];
    image.setAttribute("src",randomImageSource);


   
    // let randomNumber1 = Math.floor(Math.random()*6)+ 1;
    // let randomDiceImage1 = "dice" + randomNumber1 + ".png";
    // let randomImageSource1 = "images/" + randomDiceImage1;
    // let image1 = document.querySelectorAll("img")[1];
    // image1.setAttribute("src",randomImageSource1);
}

let playerbtn1 = document.querySelectorAll(".btn")[1];
playerbtn1.addEventListener("click", rolltwo);
function rolltwo() {
    let randomNumber1 = Math.floor(Math.random()*6)+ 1;
    let randomDiceImage1 = "dice" + randomNumber1 + ".png";
    let randomImageSource1 = "images/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[1];
    image1.setAttribute("src",randomImageSource1);
}
let playerbtn2 = document.querySelectorAll(".btn")[2];
playerbtn2.addEventListener("click", rollThree);
function rollThree() {
    let randomNumber2 = Math.floor(Math.random()*6)+ 1;
    let randomDiceImage2 = "dice" + randomNumber2 + ".png";
    let randomImageSource2 = "images/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[2];
    image2.setAttribute("src",randomImageSource2);

    let randomNumber3 = Math.floor(Math.random()*6)+ 1;
    let randomDiceImage3 = "dice" + randomNumber3 + ".png";
    let randomImageSource3 = "images/" + randomDiceImage3;
    let image3 = document.querySelectorAll("img")[3];
    image3.setAttribute("src",randomImageSource3);


   
    if (randomNumber2 > randomNumber3){
        document.querySelector(".player3").innerHTML = "Player Wins";
        document.querySelector(".compute").innerHTML = "loose";


    } else if(randomNumber3 > randomNumber2) {
        document.querySelector(".player3").innerHTML = "loose";
        document.querySelector(".compute").innerHTML = "Computer Wins";
    }
    else {
        document.querySelector(".player3").innerHTML ="Draw";
        document.querySelector(".compute").innerHTML = "Draw";
    }
}


