document.addEventListener("DOMContentLoaded", function () {
    var storedChildren = JSON.parse(localStorage.getItem("parentChildren"));

    if (!storedChildren) {
        var childrenNames = ["Ali Ahmad", "Fahad Ahmad"];
        localStorage.setItem("parentChildren", JSON.stringify(childrenNames));
        displayChildren(childrenNames);
    } else {
        displayChildren(storedChildren);
    }
});

function displayChildren(childrenNames) {
    var wrapper = document.querySelector(".wrapper");

    wrapper.innerHTML = "";

    childrenNames.forEach(function (childName) {
        var childElement = document.createElement("div");
        childElement.classList.add("child-box");
        childElement.textContent = childName;

        wrapper.appendChild(childElement);
    });
}


