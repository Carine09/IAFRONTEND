const form = document.querySelector("#contact-form");

if (form) {
  const fields = [
    { input: form.elements.nom, error: document.querySelector("#nom-erreur"), required: "Veuillez indiquer votre nom." },
    { input: form.elements.email, error: document.querySelector("#email-erreur"), required: "Veuillez indiquer votre adresse e-mail." },
    { input: form.elements.message, error: document.querySelector("#message-erreur"), required: "Veuillez écrire un message." },
  ];
  const status = document.querySelector("#form-status");
  const messageCounter = document.querySelector("#message-compteur");
  const messageField = form.elements.message;

  function validateField(field) {
    let errorMessage = "";

    if (!field.input.value.trim()) {
      errorMessage = field.required;
    } else if (field.input.type === "email" && !field.input.validity.valid) {
      errorMessage = "Veuillez saisir une adresse e-mail valide.";
    }

    field.error.textContent = errorMessage;
    field.error.hidden = !errorMessage;
    field.input.setAttribute("aria-invalid", String(Boolean(errorMessage)));
    return !errorMessage;
  }

  for (const field of fields) {
    field.input.addEventListener("input", () => {
      if (field.input.hasAttribute("aria-invalid")) {
        validateField(field);
      }
      status.textContent = "";
    });
  }

  messageField.addEventListener("input", () => {
    messageCounter.textContent = `${messageField.value.length} / 2 000 caractères`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";

    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length > 0) {
      invalidFields[0].input.focus();
      return;
    }

    status.textContent = "Votre message est prêt. L’envoi sera disponible dès que le formulaire sera relié au service de contact.";
  });
}