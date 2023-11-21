// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check the user's theme preference from local storage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggle.checked = currentTheme === "theme-dark";
    }

    // Toggle the theme when the switch is changed
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            document.body.classList.add("theme-dark");
            localStorage.setItem("theme", "theme-dark");
        } else {
            document.body.classList.remove("theme-dark");
            localStorage.setItem("theme", "theme-light");
        }
    });
});
