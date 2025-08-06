// Live date & time in footer
function updateDateTime() {
  const now = new Date();
  const dateTimeStr = now.toLocaleString();
  document.getElementById("datetime").textContent = dateTimeStr;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    const fields = ["name", "email", "phone", "address", "message"];
    fields.forEach((id) => {
      const field = document.getElementById(id);
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
