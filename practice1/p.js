const acc = document.querySelector(".according");

const aco = acc.nextElementSibling;

const pn = document.querySelector(".panel");
acc.addEventListener("click", function () {
  acc.classList.toggle("active");
  if (pn.style.maxHeight) {
    pn.style.maxHeight = null;
  } else {
    pn.style.maxHeight = pn.scrollHeight + "px";
  }
});
const acc1 = document.querySelector(".according1");
const aco1 = acc1.nextElementSibling;
const pn1 = document.querySelector(".panel1");

acc1.addEventListener("click", function () {
  acc1.classList.toggle("active");
  if (pn1.style.maxHeight) {
    pn1.style.maxHeight = null;
  } else {
    pn1.style.maxHeight = pn1.scrollHeight + "px";
  }
});
const acc2 = document.querySelector(".according2");
const aco2 = acc1.nextElementSibling;
const pn2= document.querySelector(".panel2");

acc2.addEventListener("click", function () {
  acc2.classList.toggle("active");
  if (pn2.style.maxHeight) {
    pn2.style.maxHeight = null;
  } else {
    pn2.style.maxHeight = pn2.scrollHeight + "px";
  }
});

// var acc = document.getElementsByClassName("according");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

// const accordionHeaders = document.querySelectorAll(".accordion__header");
// const accordion = document.querySelector(".accordion");
// accordionHeaders.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target.parentElement);
//     e.target.parentElement.classList.toggle("accordion__expanded");
//   });
// });
// accordionHeaders.addEventListener("click", function () {
//   accordionHeaders.classList.toggle(".accordion__expanded");
//   if (accordion.style.maxHeight) {
//     accordion.style.maxHeight = null;
//   } else {
//     accordion.style.maxHeight = accordion.scrollHeight + "px";
//   }
// });
const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener("keydown", function () {});
