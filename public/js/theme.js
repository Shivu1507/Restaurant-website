// ==============================
// DARK MODE
// ==============================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = "🌙";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";

        }

    });

}