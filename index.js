function handleClick() {
    var drum = new Audio("sounds/crash.mp3");
    drum.play();
}

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", handleClick));