// parent.js

document.addEventListener("DOMContentLoaded", function () {
    var storedChildren = JSON.parse(localStorage.getItem("parentChildren"));


    if (!storedChildren) {
        var childrenNames = ["Ali ahmad", "Fahad ahmad"]; 
        localStorage.setItem("parentChildren", JSON.stringify(childrenNames));
        displayChildren(childrenNames);
    } else {
        displayChildren(storedChildren);
    }
});

function displayChildren(childrenNames) {
    console.log("Displaying children:", childrenNames);
    var wrapper = document.querySelector(".wrapper");

    childrenNames.forEach(function (childName) {
        var childElement = document.createElement("div");
        childElement.classList.add("child-box");
        childElement.textContent = childName;

        wrapper.appendChild(childElement);
    });
}


