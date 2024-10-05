const hamburgerMenu = document.getElementById("hamburgerMenu");
const hamNavSlide = document.getElementById("navDrawer");
const linkies = document.getElementsByClassName("hamNavItem");
const classes = hamNavSlide.classList;
let isScrollLock = false;
hamburgerMenu.addEventListener("click", () => {
  isScrollLock = !isScrollLock;
  hamburgerMenu.classList.toggle("open");
  isScrollLock
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  if (classes.contains("slideStyleOut")) {
    hamNavSlide.classList.add("slideStyleIn");
    hamNavSlide.classList.remove("slideStyleOut");
  } else {
    hamNavSlide.classList.add("slideStyleOut");
    hamNavSlide.classList.remove("slideStyleIn");
  }
});
for (let i = 0; i < linkies.length; i++) {
  linkies[i].addEventListener("click", function () {
    isScrollLock = !isScrollLock;
    hamburgerMenu.classList.toggle("open");
    isScrollLock
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    if (classes.contains("slideStyleOut")) {
      hamNavSlide.classList.add("slideStyleIn");
      hamNavSlide.classList.remove("slideStyleOut");
    } else {
      hamNavSlide.classList.add("slideStyleOut");
      hamNavSlide.classList.remove("slideStyleIn");
    }
  });
}
