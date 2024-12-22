const mobileNavContainer = document.querySelector(".container-mobile-nav");
const body = document.querySelector("body");
const toggleNavBtns = document.querySelectorAll(".toggle-nav-btn");

function toggleMobileNav() {
  mobileNavContainer.classList.toggle("active");
  mobileNavContainer.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
}

toggleNavBtns.forEach((btn) => {
  btn.addEventListener("click", toggleMobileNav);
});

mobileNavContainer.addEventListener("click", (e) => {
  if (e.target.closest(".toggle-nav-btn")) {
    return;
  }

  if (e.target === mobileNavContainer || e.target.closest("li")) {
    toggleMobileNav();
  }
});
