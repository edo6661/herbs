export function openModal(item) {
  const modal = document.querySelector(".modal-container");
  const modalImage = modal.querySelector("img");
  const modalTitle = modal.querySelector("h2");
  const modalDescription = modal.querySelector("p");

  const imgSrc = item.dataset.image;
  const title = item.dataset.title;
  const description = item.dataset.description;

  modalImage.src = imgSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.classList.remove("hidden");
  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

export function closeModal() {
  const modal = document.querySelector(".modal-container");
  const innerModal = modal.querySelector(".inner-modal-product");
  innerModal.scrollTop = 0;
  modal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

export function initProductModal() {
  const items = document.querySelectorAll(".bottom-about-item");
  const closeModalBtn = document.querySelector(".close-modal");

  items.forEach((item) => {
    item.addEventListener("click", () => openModal(item));
  });

  closeModalBtn.addEventListener("click", closeModal);

  const modal = document.querySelector(".modal-container");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
