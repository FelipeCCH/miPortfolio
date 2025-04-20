document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementById("theme-toggler");
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      toggler.textContent = "☀️";
    } else {
      toggler.textContent = "🌙";
    }
  
    toggler.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggler.textContent = isDark ? "☀️" : "🌙";
    });
  });
  