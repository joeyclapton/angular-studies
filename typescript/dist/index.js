"use strict";
const input1 = document.getElementById("first");
const input2 = document.getElementById("second");
const button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
