const overlaySection = document.getElementById("contactUsOverlaySection");
const contactBtn = document.getElementById("contactUsDwebBtn");
const exploreBtn = document.getElementById("explore-btn");
const contactUsOverlaySectionCloseBtn = document.getElementById(
  "contactUsOverlaySectionCloseBtn"
);
if (window.innerWidth <= 480) {
  exploreBtn.innerText = "Let's Connect";
}

exploreBtn.addEventListener("click", () => {
  if (window.innerWidth <= 480) {
    overlaySection.classList.add("visible");
    document.body.style.overflow = "hidden";
  } else {
    document
      .getElementById("exploreSection")
      .scrollIntoView({ behavior: "smooth" });
  }
});

contactBtn.addEventListener("click", () => {
  overlaySection.classList.add("visible");
  document.body.style.overflow = "hidden";
});

contactUsOverlaySectionCloseBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  overlaySection.classList.remove("visible");
});
