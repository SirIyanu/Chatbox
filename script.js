const box = document.getElementById("chatbox");
const arrowUp = document.getElementById("arrow-up")
const arrowDown = document.getElementById("arrow-down")
let display = false;

function displayContent() {
    if (display) {
        box.style.display = 'block';
        arrowUp.style.display = 'none';
        arrowDown.style.display ='block';
        display = false
    } else {
        box.style.display = 'none';
        arrowUp.style.display = 'block';
        arrowDown.style.display ='none';
        display = true;
    }
}



