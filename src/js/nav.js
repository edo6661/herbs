function handleAnchorNav() {
  const navLinks = document.querySelectorAll(
    ".container-nav a[href^='#'], .container-mobile-nav a[href^='#']"
  );
  const offset = 92;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("test");
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
function toggleMobileNav() {
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
  handleAnchorNav();
}
