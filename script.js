  // Testimonials
  initializeTestimonials();

 
// ================= Testimonials =================
const testimonialData = [
  {
    name: "Rohit verma",
    role: "★ ★ ★ ★ ★",
    image: "./images/male-testimonial.svg",
    text: "Taking an InstaLoan Business Loan was the best decision for my company. Quick approval, flexible repayment, and excellent support gave me confidence to grow and manage finances smoothly and effectively",
  },

  {
    name: "Shubhamita Das",
    role: "★ ★ ★ ★ ★",
    image: "./images/femail-testimonial.svg",
    text: "InstaLoan Business Loan truly helped my startup during a critical stage. The fast disbursement, low processing fee, and supportive team made the entire process smooth and stress-free. Highly recommended!",
  },
  {
    name: "Rahul sharma",
    role: "★ ★ ★ ★ ★",
    image: "./images/male-testimonial.svg",
    text: "With InstaLoan Business Loan, I could expand my business without financial stress. Transparent terms, instant approval, and flexible tenure gave me the freedom to plan confidently and achieve faster growth.",
  },

];

let currentTestimonialIndex = 0;

function updateTestimonialDisplay() {
  const current = testimonialData[currentTestimonialIndex];
  document.querySelector(".testimonial-client-info h3").textContent =
    current.name;
  document.querySelector(".testimonial-client-role").textContent = current.role;
  document.querySelector(".testimonial-avatar-image").src = current.image;
  document.querySelector(".testimonial-review-text").textContent = current.text;
  document
    .querySelectorAll(".testimonial-nav-dot")
    .forEach((dot, i) =>
      dot.classList.toggle("active-dot", i === currentTestimonialIndex)
    );
}

function nextTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex + 1) % testimonialData.length;
  updateTestimonialDisplay();
}

function prevTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonialData.length) %
    testimonialData.length;
  updateTestimonialDisplay();
}

function initializeTestimonials() {
  document
    .getElementById("nextBtn")
    ?.addEventListener("click", nextTestimonial);
  document
    .getElementById("prevBtn")
    ?.addEventListener("click", prevTestimonial);

  document.querySelectorAll(".testimonial-nav-dot").forEach((dot, i) =>
    dot.addEventListener("click", () => {
      currentTestimonialIndex = i;
      updateTestimonialDisplay();
    })
  );

  setInterval(nextTestimonial, 6000);
  updateTestimonialDisplay();
}