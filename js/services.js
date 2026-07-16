/* ===============================
   SLIDESHOW LOGIC (PER SERVICE)
================================ */
document.querySelectorAll(".service-slideshow").forEach(slideshow => {
  const slides = slideshow.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4500);
});

/* ===============================
   SCROLL REVEAL
================================ */
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

/* Close when clicking a link */
document.querySelectorAll(".menu-card a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
