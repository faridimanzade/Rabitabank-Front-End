let slideCardIndex = document.querySelectorAll(".mainOneSlideCard");
let frameIndex = document.querySelector(".frameMainOneSlider");
let slideIndex = document.querySelector(".mainOneSlideLent");
let leftIndex = document.querySelector(".mainOneSliderLeft");
let rightIndex = document.querySelector(".mainOneSliderRight");

let choice = true;

widthSetAuto();
slideIndexMover();

window.addEventListener("resize", function () {
    widthSetAuto();
    slideIndexMover();
});


function widthSetAuto() {
    let double = frameIndex.offsetWidth * slideCardIndex.length;
    slideIndex.style.width = double + "px";
    for (let i = 0; i < slideCardIndex.length; i++) {
        slideCardIndex[i].style.width = frameIndex.offsetWidth + "px";
    }
    if(choice == false){
        let minus = (-1) * frameIndex.offsetWidth;
        slideIndex.style.left = minus + "px";
        slideIndex.style.transition = "0s";
    }
    else{
        slideIndex.style.left = "0px";
        slideIndex.style.transition = "0s";
    }
}


function slideIndexMover() {

    rightIndex.addEventListener("click", function () {
        let minus = (-1) * frameIndex.offsetWidth;
        slideIndex.style.left = minus + "px";
        slideIndex.style.transition = "0.7s";
        leftIndex.classList.remove("mainOneActiveButton");
        rightIndex.classList.add("mainOneActiveButton");
        choice = false;
    });

    leftIndex.addEventListener("click", function () {
        slideIndex.style.left = "0px";
        slideIndex.style.transition = "0.7s";
        rightIndex.classList.remove("mainOneActiveButton");
        leftIndex.classList.add("mainOneActiveButton");
        choice = true;
    });
}