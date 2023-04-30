"use strict";

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnClose = document.querySelector(".close-modal");
let btnsOpenModals = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModals.length; i++) {
  btnsOpenModals[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
  btnClose.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
