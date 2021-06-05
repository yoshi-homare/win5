'use strict';

{
  const r1 = document.getElementById("1r");
  const r2 = document.getElementById("2r");
  const r3 = document.getElementById("3r");
  const r4 = document.getElementById("4r");
  const r5 = document.getElementById("5r");
  let input1 = document.getElementById("1");
  let input2 = document.getElementById("2");
  let input3 = document.getElementById("3");
  let input4 = document.getElementById("4");
  let input5 = document.getElementById("5");
  const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        r1.textContent = Math.floor(Math.random() * input1.value + 1);
    });
    btn.addEventListener("click", () => {
        r2.textContent = Math.floor(Math.random() * input2.value + 1);
    });
    btn.addEventListener("click", () => {
        r3.textContent = Math.floor(Math.random() * input3.value + 1);
    });
    btn.addEventListener("click", () => {
        r4.textContent = Math.floor(Math.random() * input4.value + 1);
    });
    btn.addEventListener("click", () => {
        r5.textContent = Math.floor(Math.random() * input5.value + 1);
    });
}