const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
document.querySelectorAll(".slideshow").forEach(slider=>{
  const slides = slider.querySelectorAll("img");
  let i=0;
  setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },4000);
});
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
