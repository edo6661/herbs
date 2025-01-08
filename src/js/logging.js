export function loggingMonitoringInit() {
  window.addEventListener("error", (event) => {
    console.error("Error logged:", {
      type: "error",
      message: event.message,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
    });
    const errors = JSON.parse(localStorage.getItem("errors") || "[]");
    errors.push({
      type: "error",
      message: event.message,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("errors", JSON.stringify(errors));
  });

  document.querySelector("form")?.addEventListener("submit", (event) => {
    console.log("Form submission logged:", {
      type: "form_submission",
      formId: event.target.id || "contact-form",
      timestamp: new Date().toISOString(),
    });
    const submissions = JSON.parse(
      localStorage.getItem("form_submissions") || "[]"
    );
    submissions.push({
      type: "form_submission",
      formId: event.target.id || "contact-form",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("form_submissions", JSON.stringify(submissions));
  });
}

export function testErrorLogging() {
  try {
    throw new Error("Test error message");
  } catch (e) {
    window.dispatchEvent(
      new ErrorEvent("error", {
        error: e,
        message: e.message,
      })
    );
  }

  try {
    console.log(undefinedVariable);
  } catch (e) {}

  console.log(
    "Logged errors:",
    JSON.parse(localStorage.getItem("errors") || "[]")
  );
}

export function testFormLogging() {
  const form = document.querySelector("form");
  if (form) {
    form.dispatchEvent(new Event("submit"));
  }

  console.log(
    "Form submissions:",
    JSON.parse(localStorage.getItem("form_submissions") || "[]")
  );
}

export function addLoggingUtils() {
  window.loggingUtils = {
    getErrors: () => JSON.parse(localStorage.getItem("errors") || "[]"),
    getFormSubmissions: () =>
      JSON.parse(localStorage.getItem("form_submissions") || "[]"),
    clearAll: () => {
      localStorage.removeItem("errors");
      localStorage.removeItem("form_submissions");
      console.log("All logs cleared");
    },
    summary: () => {
      const errors = JSON.parse(localStorage.getItem("errors") || "[]");
      const submissions = JSON.parse(
        localStorage.getItem("form_submissions") || "[]"
      );

      console.group("Logging Summary");
      console.log(`Total Errors: ${errors.length}`);
      console.log(`Total Form Submissions: ${submissions.length}`);
      console.log("\nLast 3 Errors:", errors.slice(-3));
      console.log("\nLast 3 Submissions:", submissions.slice(-3));
      console.groupEnd();
    },
  };
}
