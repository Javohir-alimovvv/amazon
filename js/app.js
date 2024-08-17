
const locationBtn = document.querySelector(".header_btn");
const locationPanel = document.querySelector(".popup_bg");
const locationClose = document.querySelector(".adres_close");

const saidbarBtn = document.querySelector(".navbar_btn");
const saidbarPanel = document.querySelector(".saidbar");
const saidbarClose = document.querySelector(".saidbar_close_icon");



locationBtn.addEventListener("click", (e) => {
    locationPanel.style.display = "block"
});

locationClose.addEventListener("click", (e) => {
    locationPanel.style.display = "none"
});

locationPanel.addEventListener("click", (e) => {
    locationPanel.style.display = "none"
});





saidbarBtn.addEventListener("click", (e) => {
    saidbarPanel.style.left = "22%"
});

saidbarClose.addEventListener("click", (e) => {
    saidbarPanel.style.left = "-22%"
});

