function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function handleKeyDown(element) {
    makeSound(element.key);
    buttonAnimation(element.key);
}

function makeSound(key) {
    switch (key) {
        case "a":
            var drum = new Audio("sounds/tom-1.mp3");
            break;
        case "s":
            var drum = new Audio("sounds/tom-2.mp3")
            break;
        case "d":
            var drum = new Audio("sounds/tom-3.mp3")
            break;
        case "f":
            var drum = new Audio("sounds/tom-4.mp3")
            break;
        case "j":
            var drum = new Audio("sounds/crash.mp3")
            break;
        case "k":
            var drum = new Audio("sounds/kick-bass.mp3")
            break;
        case "l":
            var drum = new Audio("sounds/snare.mp3")
            break;
        default:
            console.log("There was a button press" +
             "that didn't have any of the assigned letters");
             return 
            break;
    }
    drum.play();
}
function buttonAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.toggle("pressed");
    
    
}

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", handleClick));

document.addEventListener("keydown", handleKeyDown);