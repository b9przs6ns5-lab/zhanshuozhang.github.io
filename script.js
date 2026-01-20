function setLastLogin() {
  const now = new Date().toLocaleString();
  localStorage.setItem("lastLogin", now);
}

function showLastLogin(id) {
  const v = localStorage.getItem("lastLogin");
  const el = document.getElementById(id);
  if (el) el.textContent = v ? v : "First login";
}

function toggleDark() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

function initDark() {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
}

function bindCourseSearch(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll(".course").forEach((c) => {
      c.style.display = c.innerText.toLowerCase().includes(q) ? "block" : "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDark();
});
