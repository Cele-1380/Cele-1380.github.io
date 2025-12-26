// Page loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dark mode
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
