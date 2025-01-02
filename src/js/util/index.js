export function createDynamicRows(container, data) {
  container.innerHTML = "";
  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;
    const row = document.createElement("div");
    row.className = "double-column";

    const keyDiv = document.createElement("div");
    keyDiv.innerHTML = `<h3 class="sub-title">${key}</h3>`;

    const valueDiv = document.createElement("div");

    if (Array.isArray(value)) {
      value.forEach((val) => {
        const p = document.createElement("p");
        p.textContent = val;
        valueDiv.appendChild(p);
      });
    } else {
      valueDiv.innerHTML = `<p>${value}</p>`;
    }

    row.appendChild(keyDiv);
    row.appendChild(valueDiv);
    container.appendChild(row);
  }
}
