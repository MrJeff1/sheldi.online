const toggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    toggleBtn.innerText = "Switch to Dark";
  } else {
    document.body.classList.remove("light");
    toggleBtn.innerText = "Switch to Light";
  }
}

function getInitialTheme() {
  const saved = localStorage.getItem("theme");

  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

let currentTheme = getInitialTheme();
applyTheme(currentTheme);

toggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
  localStorage.setItem("theme", currentTheme);
});
