document.addEventListener('DOMContentLoaded', function () {
        // Retrieve the array of registered names from local storage
 var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];

    var childName = localStorage.getItem("childName");
    if (childName) {
        // Add the new child name to the array if it doesn't exist
        if (!kidsNames.includes(childName)) {
            kidsNames.push(childName);

            // Update local storage with the modified array
            localStorage.setItem("kidsNames", JSON.stringify(kidsNames));
        }

    }
    displayChildren(kidsNames);
});
function displayChildren(childrenNames) {
    var wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = ''; 
    childrenNames.forEach(function (childName) {
        var childElement = document.createElement("div");
        childElement.classList.add("child-box");
        childElement.textContent = childName;

        wrapper.appendChild(childElement);
    });
}