const testimonials = [
  {
    text: "HexaPay simplified crypto transactions for our clients. It's fast, reliable, and super easy to integrate.",
    author: "- Liam Carter, Founder at ChainWorks",
  },
  {
    text: "We added HexaPay to our online store in minutes. Customers love the crypto checkout experience!",
    author: "- Annie Smith, E-commerce Owner",
  },
  {
    text: "Their API is incredibly developer-friendly. I had payments live on my dApp in less than an hour.",
    author: "- Marcus Lee, Blockchain Developer",
  },
  {
    text: "The dashboard is beautiful and intuitive. Real-time tracking and invoicing made everything seamless.",
    author: "- Sophia Martinez, Operations Lead at FinSpace",
  },
];

const track = document.getElementById("testimonial-track");

// Add Object to Html
testimonials.forEach(({ text, author }) => {
  const slide = document.createElement("div");
  slide.className =
    "min-w-full px-6 flex flex-col items-center text-center gap-4";

  slide.innerHTML = `
    <p class="text-text opacity-80 max-w-4xl italic lg:text-xl md:text-lg sm:text-md font-medium px-5 text-">
      ${text}
    </p>
    <h3 class="text-muted md:text-lg">${author}</h3>
  `;

  track.appendChild(slide);
});

// Testimonial Slider Logic
const prev = document.querySelectorAll(".prevTestimonial");
const next = document.querySelectorAll(".nextTestimonial");

let index = 0;
const totalSlides = track.children.length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Get slide count only after testimonials are added
function getTotalSlides() {
  return track.children.length;
}

// Add event listeners for all prev buttons
prev.forEach((btn) => {
  btn.addEventListener("click", () => {
    index = (index - 1 + getTotalSlides()) % getTotalSlides();
    updateSlider();
  });
});

// Add event listeners for all next buttons
next.forEach((btn) => {
  btn.addEventListener("click", () => {
    index = (index + 1) % getTotalSlides();
    updateSlider();
  });
});
