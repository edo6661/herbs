const products = {
  cylinderPalmSugar: {
    title: "Cylinder Palm Sugar",
    description:
      "Traditional Indonesian solid palm sugar formed through a drying and molding process. It has a dense texture and a distinct caramel-like sweetness, making it ideal for both traditional and modern dishes. This solid palm sugar is naturally processed from selected sap of Arenga palm trees, delivering an authentic taste and rich nutritional value.",

    dataImage: "assets/images/products/molded-palm-sugar.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          "Storage Type": "Dry",
          Specification: "Palm Sugar / Aren Sugar",
          "Type Of Product": "Sugar",
          Shape: "Cylinder / Cube",
          Color: "Dark Brown",
          Purity: "100%",
          Weight: "0,75 g",
          Flavor: "Sweet with subtle caramel",
          "Sugar Class": "Premium",
          Expired: "12 Months",
          Origin: "Bandung, Sukabumi, West Java",
          Location: "Indonesia",
          Packing: "Based on request",
        },
      },
   
    },
  },
  liquidPalmSugar: {
    title: "Liquid Palm Sugar",
    description:
      "Premium liquid palm sugar made through a careful extraction and filtration process, free from preservatives. It has a thick syrup-like consistency with a natural sweetness and a distinctive palm aroma. Perfect as a sweetener for beverages, dessert toppings, or a base ingredient in various cakes and culinary dishes. Produced from high-quality Arenga palm sap using modern technology to preserve its authentic flavor.",

    dataImage: "assets/images/products/liquid.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Specification: "Palm Sugar Liquid / Syrup",
          "Type Of Product": "Sugar",
          Shape: "Liquid / Syrup",
          Color: "Dark Brown",
          Purity: "100%",
          Weight: "18L",
          Flavor: "Sweet with subtle caramel",
          "Sugar Class": "Premium",
          Expired: "12 Months",
          Origin: "Bandung, Sukabumi, West Java",
          Location: "Tangerang, Banten, Indonesia",
          Packing: "Based on request",
        },
      },
      
    },
  },
  powderPalmSugar: {
    title: "Powder Palm Sugar",
    description:
      "Finely ground palm sugar produced using modern techniques while preserving traditional flavors. Its smooth texture and easy solubility make it a practical choice for cooking and beverage preparation. With a lower glycemic index than refined sugar, this powdered palm sugar offers a healthier sweetener alternative without compromising on rich taste.",
    dataImage: "assets/images/products/powder-palm-sugar.png",
    dataImage: "assets/images/products/powder-palm-sugar.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          "Storage Type": "Dry",
          Specification: "Palm Sugar",
          "Type Of Product": "Sugar",
          Shape: "Powder",
          Color: "Brown",
          Purity: "100%",
          Humidity: "2% Max",
          Flavor: "Sweet with subtle caramel",
          "Sugar Class": "Premium",
          Expired: "2 Years of Manufacture",
          Origin: "Bandung, Sukabumi, West Java",
          Location: "Tangerang, Banten, Indonesia",
          Packing: "Based on request",
        },
      },
     
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
