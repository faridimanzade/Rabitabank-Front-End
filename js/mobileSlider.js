let slideCard = document.querySelectorAll(".slideCard");
let frame = document.querySelector(".frameMobileSlider");
let slide = document.querySelector(".slideLent");
let left = document.querySelector(".sliderLeft");
let right = document.querySelector(".sliderRight");

let flag = true;

widthSet();
slideMover();

window.addEventListener("resize", function () {
    widthSet();
    slideMover();
});


function widthSet() {
    let double = frame.offsetWidth * slideCard.length;
    slide.style.width = double + "px";
    for (let i = 0; i < slideCard.length; i++) {
        slideCard[i].style.width = frame.offsetWidth + "px";
    }
    if(flag == false){
        let minus = (-1) * frame.offsetWidth;
        slide.style.left = minus + "px";
        slide.style.transition = "0s";
    }
    else{
        slide.style.left = "0px";
        slide.style.transition = "0s";
    }
}


function slideMover() {

    right.addEventListener("click", function () {
        let minus = (-1) * frame.offsetWidth;
        slide.style.left = minus + "px";
        slide.style.transition = "0.7s";
        left.classList.remove("activeButton");
        right.classList.add("activeButton");
        flag = false;
    });

    left.addEventListener("click", function () {
        slide.style.left = "0px";
        slide.style.transition = "0.7s";
        right.classList.remove("activeButton");
        left.classList.add("activeButton");
        flag = true;
    });
}