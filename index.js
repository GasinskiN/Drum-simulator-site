function handleClick() {
    alert("i got clicked");
}

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", handleClick));