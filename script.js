// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake contact form handler (demo)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!email || !message) {
    statusEl.textContent = "Please fill in both fields.";
    return;
  }

  statusEl.textContent = "✅ Thanks! Your message is noted (demo only).";
  form.reset();
});
