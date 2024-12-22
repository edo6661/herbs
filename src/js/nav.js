export function toggleMobileNav() {
  const mobileNavContainer = document.querySelector(".container-mobile-nav");
  const heroActionsContainer = document.querySelector(".hero-action-container");
  const body = document.querySelector("body");

  mobileNavContainer.classList.toggle("active");
  mobileNavContainer.classList.toggle("hidden");
  heroActionsContainer.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
}

export function initNav() {
  const toggleNavBtns = document.querySelectorAll(".toggle-nav-btn");
  const mobileNavContainer = document.querySelector(".container-mobile-nav");

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
}
