const products = {
  cylinderPalmSugar: {
    title: "Cylinder Palm Sugar",
    description:
      "Gula aren padat tradisional Indonesia yang dibentuk melalui proses pengeringan dan pencetakan. Memiliki tekstur padat dan rasa manis karamel yang khas, cocok untuk berbagai hidangan tradisional dan modern. Gula aren padat ini diproses secara alami dari nira pohon aren pilihan, menghasilkan rasa yang autentik dan kaya akan nutrisi.",
    dataImage: "assets/images/products/molded-palm-sugar.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Cylinder Palm Sugar",
          Style: "Solid",
          Flavour: "Sweet with subtle caramel",
          Weight: "0,75 g",
          Color: "Dark brown",
          "Place of Origin": "Bandung, Sukabumi, West Java",
          Size: "Various shapes",
          "Supply Ability": "500 tons/month",
        },
      },
      Packing: {
        title: "Packing",
        data: {
          "Detail Pengemasan": "Kemasan vakum / Kotak karton",
          "Kemasan Kustom": "Sesuai persyaratan klien",
          "Pengemasan (Untuk 40 'rh)": [
            "Sesuai persyaratan klien",
            "Berdasarkan permintaan",
          ],
        },
      },
    },
  },
  liquidPalmSugar: {
    title: "Liquid Palm Sugar",
    description:
      "Gula aren cair premium yang diolah melalui proses ekstraksi dan penyaringan tanpa bahan pengawet. Memiliki konsistensi sirup kental dengan rasa manis alami dan aroma khas aren. Sangat cocok untuk pemanis minuman, topping dessert, atau bahan dasar untuk berbagai jenis kue dan makanan. Diproduksi dari nira pohon aren berkualitas tinggi dengan teknologi modern untuk menjaga keaslian rasa.",
    dataImage: "assets/images/products/liquid.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Liquid Palm Sugar/Syrup",
          Style: "Liquid",
          Flavour: "Sweet With Subtle Caramel",
          Weight: "18L/JerryCan",
          Color: "Dark Brown",
          "Place of Origin": "Tangerang, Banten, Indonesia",
          "Supply Ability": "300 tons/month",
        },
      },
      Packing: {
        title: "Packing",
        data: {
          "Detail Pengemasan": "Botol kaca / Botol plastik food grade",
          "Kemasan Kustom": "Sesuai persyaratan klien",
          "Pengemasan (Untuk 40 'rh)": [
            "Sesuai persyaratan klien",
            "Berdasarkan permintaan",
          ],
        },
      },
    },
  },
  powderPalmSugar: {
    title: "Powder Palm Sugar",
    description:
      "Gula aren bubuk yang diproduksi melalui proses pengolahan modern dengan mempertahankan cita rasa tradisional. Tekstur halus dan mudah larut menjadikannya pilihan praktis untuk berbagai kebutuhan memasak dan membuat minuman. Gula aren bubuk ini memiliki indeks glikemik yang lebih rendah dibandingkan gula pasir biasa, sehingga menjadi alternatif pemanis yang lebih sehat dengan tetap menyajikan rasa manis yang kaya.",
    dataImage: "assets/images/products/powder-palm-sugar.png",
    details: {
      Specification: {
        title: "Specification",
        data: {
          Nama: "Powder Palm Sugar",
          Style: "Powdered",
          Flavour: "Sweet with subtle caramel",
          Weight: "100g - 500g",
          Color: "Brown",
          "Place of Origin": "Bandung, Sukabumi, West Java",
          "Granule Size": "Fine",
          "Supply Ability": "400 tons/month",
        },
      },
      Packing: {
        title: "Packing",
        data: {
          "Detail Pengemasan": "Kemasan aluminium foil / Kemasan pouch",
          "Kemasan Kustom": "Sesuai persyaratan klien",
          "Pengemasan (Untuk 40 'rh)": [
            "Sesuai persyaratan klien",
            "Berdasarkan permintaan",
          ],
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
