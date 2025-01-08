export function interactionObserverInit() {
  if (!("IntersectionObserver" in window)) {
    const lazyImages = document.querySelectorAll("img.lazy[data-src]");
    lazyImages.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove("lazy");
      }
    });
    return;
  }

  const images = document.querySelectorAll("img.lazy[data-src]");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.addEventListener("load", function () {
              img.classList.add("loaded");
            });
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.01,
    }
  );

  images.forEach((img) => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });
}
