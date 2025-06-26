const testimonials = [
  {
    text: "This app has completely transformed how I edit my photos. The filters and AI enhancements are incredibly intuitive and make my pictures look professionally done in seconds!",
    author: "- Aanya Sharma, Photographer"
  },
  {
    text: "As a college student managing a design blog, this tool saves me hours. It’s fast, easy to use, and the results always impress my readers.",
    author: "- Vaman Reddy, Design Student"
  },
  {
    text: "I never thought mobile photo editing could be this powerful. The interface is smooth and the features rival even desktop apps I’ve used.",
    author: "- Rahul Mehta, Marketing Manager"
  },
  {
    text: "Simple, sleek, and effective. I use it daily for my content creation and I’ve recommended it to several teammates already!",
    author: "- Sneha Kulkarni, Content Creator"
  }
];

const track = document.getElementById("testimonial-track");

// Add Object to Html
testimonials.forEach(({ text, author }) => {
  const slide = document.createElement("div");
  slide.className = "min-w-full px-6 flex flex-col items-center text-center gap-4";

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