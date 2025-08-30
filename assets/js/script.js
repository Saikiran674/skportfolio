document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const contacts = document.getElementById("contacts");
  if (btn && contacts) {
    btn.addEventListener("click", () => {
      contacts.classList.toggle("show");
      if (contacts.classList.contains("show")) {
        contacts.style.display = "block";
      } else {
        contacts.style.display = "none";
      }
    });
  }
});
