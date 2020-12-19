let range = document.querySelectorAll(".mainFiveRange");
let visibleNumber = document.querySelectorAll(".visibleNumber");
let resultNumber = document.querySelectorAll(".fiveBottomUl p");

let Y, X, N, Z, M, K, payment, totalamount, faizamount, num;

for (let i = 0; i < range.length; i++) {
    range[i].addEventListener("input", function () {
        visibleNumber[i].innerText = range[i].value;

        num = (range[2].value / 12) / 10;
        Y = Math.floor(num * 100) / 100;
        X = Math.floor((1 + Y) * 100) / 100;
        N = Math.floor(Math.pow(X, range[0].value) * 100) / 100;
        Z = Math.floor((Y * N) * 100) / 100;
        M = Math.floor((N - 1) * 100) / 100;
        K = Math.floor((Z / M) * 100) / 100;

        payment = K * range[1].value;
        totalamount = payment * range[0].value;
        faizamount = totalamount - range[1].value;

        resultNumber[0].innerHTML = "<p>" + totalamount.toFixed(0) + "<span> AZN</span></p>";
        resultNumber[1].innerHTML = "<p>" + faizamount.toFixed(0) + "<span> AZN</span></p>";
        resultNumber[2].innerHTML = "<p>" + payment.toFixed(0) + "<span> AZN</span></p>";

        console.log(totalamount);
        console.log(faizamount);
        console.log(payment);
    });
}