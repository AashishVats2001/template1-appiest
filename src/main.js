import "./style.css";
import { animate, scroll, easeInOut, easeOut, circOut, inView } from "motion";

// Navbar Logic
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const logo = document.getElementById("nav-logo");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navLinks.style.maxHeight = "none";
  } else {
    navLinks.style.maxHeight = "0px";
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.style.maxHeight !== "0px";

  if (isOpen) {
    navLinks.style.maxHeight = "0px";
  } else {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  }
});

// Logo scaling on scroll up
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  console.log(scrollTop);

  if (scrollTop > 100) {
    logo.style.height = "44px";
  } else {
    logo.style.height = "64px";
  }
});

// Optional: reset on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    navLinks.style.maxHeight = "none";
  } else {
    navLinks.style.maxHeight = "0px";
  }
});
// Hero Parallax Logic
const heroBg = document.getElementById("parallax-bg");

scroll(animate(heroBg, { y: [-400, 1500] }, { ease: "easeOut" }), {
  target: document.querySelector(".parallax-section"),
});

// About Numbers Animation
let hasAnimated = false;

function animateCount(id, start, end, suffix = "", round = true) {
  const number = document.getElementById(id);
  animate(start, end, {
    duration: 1.5,
    ease: [0.6, 0.28, 0.735, 0.045],
    onUpdate: (value) => {
      if(round){

        number.innerHTML = Math.round(value).toLocaleString() + suffix;
      }
      else {
        number.innerHTML = value.toLocaleString() + suffix;

      }
    },
  });
}
inView("#stats", () => {
  if (hasAnimated) return;
  hasAnimated = true;

  animateCount("count-transaction", 0, 120000, "+");
  animateCount("count-crypto", 0, 75, "+");
  animateCount("count-api", 0, 99.9, '%', false);
  animateCount("count-wallet", 0, 40000, "+");
});

// Features Section
const featureBg = document.getElementById("parallax-bg-2");

scroll(animate(featureBg, { y: [-400, 1500] }, { ease: "easeOut" }), {
  target: document.querySelector(".parallax-section-2"),
});
