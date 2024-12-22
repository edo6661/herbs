const firstActionHero = document.querySelector(".first-action-hero");
const secondActionHero = document.querySelector(".second-action-hero");
const firstImageHero = document.querySelector(".first-image-hero");
const secondImageHero = document.querySelector(".second-image-hero");

function showFirstHero() {
  firstImageHero.style.transform = "translateX(0)";
  secondImageHero.style.transform = "translateX(100%)";
  firstActionHero.innerHTML = '<i class="fa-solid fa-circle"></i>';
  secondActionHero.innerHTML = '<i class="fa-regular fa-circle"></i>';
}

function showSecondHero() {
  firstImageHero.style.transform = "translateX(-100%)";
  secondImageHero.style.transform = "translateX(-100%)";
  firstActionHero.innerHTML = '<i class="fa-regular fa-circle"></i>';
  secondActionHero.innerHTML = '<i class="fa-solid fa-circle"></i>';
}

export function initHero() {
  firstActionHero.addEventListener("click", () => {
    showFirstHero();
  });

  secondActionHero.addEventListener("click", () => {
    showSecondHero();
  });
}
