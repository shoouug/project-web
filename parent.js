document.addEventListener("DOMContentLoaded", function () {
    // Check if parentChildren key exists in local storage
    var storedChildren = JSON.parse(localStorage.getItem("parentChildren"));

    if (!storedChildren) {
        // If not, initialize with default names
        var childrenNames = ["Ali Ahmad", "Fahad Ahmad"];
        localStorage.setItem("parentChildren", JSON.stringify(childrenNames));
        displayChildren(childrenNames);
    } else {
        // If exists, display the stored children's names
        displayChildren(storedChildren);
    }
});

function displayChildren(childrenNames) {
    var wrapper = document.querySelector(".wrapper");

    // Clear existing content in the wrapper
    wrapper.innerHTML = "";

    // Create and append child boxes
    childrenNames.forEach(function (childName) {
        var childElement = document.createElement("div");
        childElement.classList.add("child-box");
        childElement.textContent = childName;

        wrapper.appendChild(childElement);
    });
}


