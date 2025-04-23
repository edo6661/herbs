import { interactionObserverInit } from "./interactionObserver.js";
import { addLoggingUtils, loggingMonitoringInit } from "./logging.js";
import { initNav } from "./nav.js";
import { initProductModal } from "./product.js";

initNav();
initProductModal();
interactionObserverInit();
loggingMonitoringInit();

// ! TESTING, SOON TO BE REMOVED
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isContact = urlParams.get("contact");
  const recipientEmail = urlParams.get("to");

  if (isContact === "true") {
    console.log("Contact form should be displayed, to:", recipientEmail);
    document.getElementById("contact-form").style.display = "block";
    document.getElementById("email").value = recipientEmail;
  }
});
