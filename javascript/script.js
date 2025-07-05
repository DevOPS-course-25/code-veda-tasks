                 // Dropdown toggle
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}

             // Modal functions
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

                     // Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (!name || !email) {
    message.textContent = "Please fill out both fields.";
    message.style.color = "red";
    return false;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
  return true;
}
