import './style.css'
// Testimonial Slider Logic
const track = document.getElementById('testimonial-track');
const prev = document.getElementById('prevTestimonial');
const next = document.getElementById('nextTestimonial');

let index = 0;
const totalSlides = track.children.length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

next.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});