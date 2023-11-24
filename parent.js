document.addEventListener("DOMContentLoaded", function () {
    var storedChildren = JSON.parse(localStorage.getItem("parentChildren"));
    if (!storedChildren) {
        var defaultChildrenNames = ["Ahmad Ali", "Fahad Ali"]; 
        storedChildren = defaultChildrenNames;
        localStorage.setItem("parentChildren", JSON.stringify(defaultChildrenNames));
    }

    displayChildren(storedChildren);
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


