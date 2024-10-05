const exploreBtn = document.getElementById("explore-btn");
if (window.innerWidth <= 480) {
  exploreBtn.innerText = "Let's Connect";
}
document.getElementById("explore-btn").addEventListener("click", function () {
  // Check if the screen width is 480px or less
  if (window.innerWidth <= 480) {
    // Add your alternate event for small screens here
    window.location.href = "tel:+917440569391";
  } else {
    // Existing event for larger screens
    document
      .getElementById("exploreSection")
      .scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("home-button").addEventListener("click", function () {
  document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("discover-btn").addEventListener("click", function () {
  document
    .getElementById("experience-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("book-btn").addEventListener("click", function () {
  document
    .getElementById("packagesAndPricingSection")
    .scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  const hero = document.querySelector(".hero");

  const heroBottom = hero.getBoundingClientRect().bottom;

  if (window.scrollY > heroBottom) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
