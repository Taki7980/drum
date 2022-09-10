
function A1() {
    let audio1 = new Audio("./sounds/crash.mp3");
    audio1.play();
}
function A2() {
    let audio2 = new Audio("./sounds/kick-bass.mp3");
    audio2.play();
}
function A3() {
    let audio3 = new Audio("./sounds/snare.mp3");
    audio3.play();
}
function A4() {
    let audio4 = new Audio("./sounds/tom-1.mp3");
    audio4.play();
}
function A5() {
    let audio5 = new Audio("./sounds/tom-2.mp3");
    audio5.play();
}
function A6() {
    let audio6 = new Audio("./sounds/tom-3.mp3");
    audio6.play();
}
function A7() {
    let audio7 = new Audio("./sounds/tom-4.mp3");
    audio7.play();
}

let pon = [A1, A2, A3, A4, A5, A6, A7];

let k = document.querySelectorAll(".drum").length;
for (let i = 0; i < k; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", pon[i]);
}


// =================================
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            let audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;

        case "s":
            let audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;

        case "j":
            let audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;

        case "l":
            let audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;


        default: console.log(key);

    }
}