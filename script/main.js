const loginDisplay = document.querySelector(".login-display");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close-btn");

loginBtn.addEventListener("click", showDisplay);
closeBtn.addEventListener("click", hideDisplay);
window.addEventListener("click", outsideClickHide);

function showDisplay() {
    loginDisplay.style.display = "block";
}

function hideDisplay() {
    loginDisplay.style.display = "none";
}

function outsideClickHide(e) {
    if(e.target == loginDisplay) {
        hideDisplay();
    }
}