const products = {
  cloves: {
    title: "Cloves",
    description: "Indonesia is one of the largest spice exporters...",
    dataImage: "assets/images/products/cloves-detail.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Cloves",
          Style: "Dried",
          Flavour: "Spicy and aromatic",
          Weight: "1kg",
          Skin: "Brownish",
          "Place of Origin": "Indonesia",
          Size: "Medium",
          "Supply Ability": "1000 tons/month",
        },
      },
      Packing: {
        title: "Packing",
        data: {
          "Detail Pengemasan": "Karton plastik / Karton jala",
          "Kemasan Kustom": "Sesuai persyaratan klien",
          "Pengemasan (Untuk 40 'rh)": [
            "Sesuai persyaratan klien",
            "Berdasarkan permintaan",
          ],
        },
      },
    },
  },
  nutmeg: {
    title: "Nutmeg",
    description:
      "Indonesia is recorded as one of the largest producers and exporters of nutmeg in the world. Its aroma, flavor, and various benefits make it a special attraction in the international market. The main product of the nutmeg plant is essential oil, which can be produced through a distillation process from raw materials such as the fruit flesh, seeds, and nutmeg mace.",
    dataImage: "assets/images/products/nutmeg-detail.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Nutmeg",
          Style: "Dried",
          Flavour: "Spicy and aromatic",
          Weight: "1kg",
          Skin: "Brownish",
          "Place of Origin": "Indonesia",
        },
      },
      Packing: null,
    },
  },
  coffeeBean: {
    title: "Coffee Bean",
    description:
      "Indonesia, with its status as one of the leading coffee producers in the world, holds a significant market share in the global coffee industry. With its natural wealth and a variety of unique coffee types, Indonesia has achieved remarkable success in coffee exports. Coffee is one of Indonesia's main export commodities. It is also one of the flagship commodities that introduces Indonesia's distinctive flavor to the international scene. Indonesia is the fourth-largest coffee bean producer in the world, producing both green Arabica beans and Robusta coffee beans. In addition, Indonesia also produces very famous coffee beans.",
    dataImage: "assets/images/products/coffe-beans-detail.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Coffee Bean",
        },
      },
      Packing: null,
    },
  },
  ginger: {
    title: "Ginger",
    description:
      "Ginger (Zingiber officinale) is a plant whose rhizome is often used as a spice and raw material for traditional medicine. One type of ginger found in Indonesia is elephant ginger which is also commonly called rhino ginger. Elephant ginger has a large and fat rhizome. The rhizome segments are more bloated than other varieties.",
    dataImage: "assets/images/products/ginger-detail.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Ginger",
        },
      },
      Packing: null,
    },
  },
  cinnamon: {
    title: "Cinnamon",
    description:
      "Cinnamon is a plant with the genus Cinnamomum and the family Lauraceae which is used as a spice producer. This spice has a strong, warm aroma and a sweet taste. The part of cinnamon that can be used is the inner bark which is cut to a certain thickness or in the form of cinnamon powder. Cinnamon bark has a distinctive aroma, namely fragrant and sweet taste so that it can be used as a food or cake flavoring, an ingredient for making syrup, and a spicy taste as a body warmer.",
    dataImage: "assets/images/products/cinamon-detail.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Cinnamon",
          Style: "Dried",
          Flavour: "Spicy and aromatic",
        },
      },
      Packing: {
        title: "Packing",
        data: {
          "Detail Pengemasan": "Karton plastik / Karton jala",
          "Kemasan Kustom": "Sesuai persyaratan klien",
        },
      },
    },
  },
  chillin: {
    title: "Chillin",
    description: "Description for Chillin",
    dataImage: "assets/images/chill.webp",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Chillin",
          Style: "Dried",
        },
      },
      Packing: null,
    },
  },
};

function createDynamicSection(wrapper, section) {
  if (!section || !section.data) return;

  wrapper.innerHTML = ""; // Hapus konten sebelumnya

  if (section.title) {
    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = `<h3 class="title">${section.title}</h3>`;
    wrapper.appendChild(titleDiv);
  }

  for (const [key, value] of Object.entries(section.data)) {
    const containerDiv = document.createElement("div");

    if (Array.isArray(value)) {
      containerDiv.classList.add("double-column");

      const keyDiv = document.createElement("div");
      keyDiv.innerHTML = `<h3 class="body">${key}</h3>`;
      containerDiv.appendChild(keyDiv);

      value.forEach((val) => {
        const valueDiv = document.createElement("div");
        valueDiv.innerHTML = `<p>${val}</p>`;
        containerDiv.appendChild(valueDiv);
      });
    } else {
      const keyDiv = document.createElement("div");
      keyDiv.innerHTML = `<h3 class="body">${key}</h3>`;

      const valueDiv = document.createElement("div");
      valueDiv.innerHTML = `<p class="description">${value}</p>`;

      containerDiv.appendChild(keyDiv);
      containerDiv.appendChild(valueDiv);
    }

    wrapper.appendChild(containerDiv);
  }
}

export function openModal(item) {
  const modal = document.querySelector(".modal-container");
  const innerModal = modal.querySelector(".inner-modal-product");
  const modalImage = modal.querySelector("img");
  const modalTitle = modal.querySelector("h2");
  const modalDescription = modal.querySelector("p");

  const productId = item.dataset.id;
  const product = products[productId];

  if (product) {
    modalImage.src = product.dataImage;
    modalImage.alt = product.title;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;

    const specContainer = innerModal.querySelector(".container-table-product");
    if (product.details.Specification) {
      createDynamicSection(specContainer, product.details.Specification);
    } else {
      specContainer.innerHTML = "";
    }

    const packingContainer = innerModal.querySelector(
      ".container-table-product-packing"
    );
    if (product.details.Packing) {
      createDynamicSection(packingContainer, product.details.Packing);
    } else {
      packingContainer.innerHTML = "";
    }

    modal.classList.remove("hidden");
    modal.classList.add("active");
    document.body.classList.add("overflow-hidden");
  }
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
  const items = document.querySelectorAll(".bottom-product-item");
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
