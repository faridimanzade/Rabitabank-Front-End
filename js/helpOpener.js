// ---------- HELP DESK TOGGLER -----------
function myFunction() {
    var x = document.getElementById("helpDeskBlockOrNone");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



let burgerMenuIcon = document.querySelectorAll(".burgerMenuIcon")[0]


burgerMenuIcon.addEventListener("click", function () {
    var y = document.getElementById("burgerMenuId");
    if (y.style.display == "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    y.style.height = "calc(100% - 80px)"
});


window.addEventListener("resize", function () {
    var w = window.innerWidth;

    if (w > 830) {
        document.getElementById("burgerMenuId").style.display = "none";
    }

    document.getElementById("burgerMenuId").style.height = "calc(100% - 80px)";
});