function handleAnchorNav() {
  const navLinks = document.querySelectorAll(
    ".container-nav a[href^='#'], .container-mobile-nav a[href^='#']"
  );
  const offset = 92;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
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
  const body = document.querySelector("body");

  if (mobileNavContainer.classList.contains("hidden")) {
    mobileNavContainer.classList.remove("hidden");
    mobileNavContainer.classList.add("active");
    body.classList.add("overflow-hidden");
  } else {
    mobileNavContainer.classList.remove("active");
    body.classList.remove("overflow-hidden");

    setTimeout(() => {
      mobileNavContainer.classList.add("hidden");
    }, 300);
  }
}

function handleActiveNav() {
  const sections = document.querySelectorAll(
    "#about, #product, #advantage, #team, #map, #contact"
  );
  const navLinks = document.querySelectorAll(
    ".container-nav a[href^='#'], .container-mobile-nav a[href^='#']"
  );
  const offset = 92;
  const threshold = 0.5;

  function updateActiveLink() {
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top - offset;
      const sectionHeight = rect.height;

      if (
        sectionTop <= window.innerHeight * threshold &&
        sectionTop + sectionHeight >= window.innerHeight * threshold
      ) {
        activeSection = section;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        activeSection &&
        link.getAttribute("href").substring(1) === activeSection.id
      ) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
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
  handleActiveNav();
}
