// nav
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
const items = document.querySelectorAll(".bottom-about-item");
const modal = document.querySelector(".modal-container");
const modalImage = modal.querySelector("img");
const modalTitle = modal.querySelector("h2");
const modalDescription = modal.querySelector("p");
const closeModalBtn = modal.querySelector(".close-modal");

function openModal(item) {
  const imgSrc = item.querySelector("img").src;
  const title = item.dataset.title;
  const description = item.dataset.description;

  modalImage.src = imgSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.classList.remove("hidden");
  modal.classList.add("active");
  body.classList.add("overflow-hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("active");
  body.classList.remove("overflow-hidden");
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    openModal(item);
  });
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
