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

  if (scrollTop > 0) {
    logo.style.height = "44px";
  } else {
    logo.style.height = "64px";
  }
});

// Optional: reset on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
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

function animateCount(id, start, end, prefix = "") {
  const number = document.getElementById(id);
  animate(start, end, {
    duration: 1.5,
    ease: [0.6, -0.28, 0.735, 0.045],
    onUpdate: (value) => {
      number.innerHTML = prefix + Math.round(value).toLocaleString();
    },
  });
}
inView("#stats", () => {
  if (hasAnimated) return;
  hasAnimated = true;

  animateCount("count-download", 100000, 2100000);
  animateCount("count-photo", 500000, 5053120);
  animateCount("count-country", 0, 108);
  animateCount("count-user", 100, 100000, "+");
});

// Features Section
const featureBg = document.getElementById("parallax-bg-2");

scroll(animate(featureBg, { y: [-400, 1500] }, { ease: "easeOut" }), {
  target: document.querySelector(".parallax-section-2"),
});
