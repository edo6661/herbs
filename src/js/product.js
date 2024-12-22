export function openModal(item) {
  const modal = document.querySelector(".modal-container");
  const modalImage = modal.querySelector("img");
  const modalTitle = modal.querySelector("h2");
  const modalDescription = modal.querySelector("p");
  const modalDetails = modal.querySelector("span");

  const imgSrc = item.querySelector("img").src;
  const title = item.dataset.title;
  const description = item.dataset.description;
  const details = item.dataset.detail || "";

  modalImage.src = imgSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  if (details) {
    modalDetails.textContent = `Detail: ${details}`;
    modalDetails.style.display = "block";
  } else {
    modalDetails.style.display = "none";
  }

  modal.classList.remove("hidden");
  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

export function closeModal() {
  const modal = document.querySelector(".modal-container");
  modal.classList.add("hidden");
  modal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
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
