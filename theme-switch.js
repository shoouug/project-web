document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const modeText = document.getElementById("mode-text");
    const body = document.body;

    // Check if dark mode is stored in localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Apply dark mode if previously set
    if (isDarkMode) {
        body.classList.add("dark-mode");
        modeText.textContent = "Dark Mode";
    }

    themeToggle.addEventListener("click", toggleDarkMode);

    function toggleDarkMode() {
        // Toggle dark mode class on body
        body.classList.toggle("dark-mode");

        // Toggle icon and mode text
        const isDarkModeNow = body.classList.contains("dark-mode");
        modeText.textContent = isDarkModeNow ? "Light Mode" : "Dark Mode";

        // Store the current mode in localStorage
        localStorage.setItem("darkMode", isDarkModeNow);
    }
});

