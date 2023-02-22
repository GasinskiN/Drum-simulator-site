function handleClick() {
    switch (this.innerHTML) {
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
            console.log("There was a button press wiht class drum" +
             "that didn't have any of the assigned letters");
            break;
    }
    drum.play();
}

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", handleClick));




// var drum = new Audio("sounds/crash.mp3");
// drum.play();