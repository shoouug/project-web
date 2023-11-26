document.addEventListener('DOMContentLoaded', function () {
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    var childName = localStorage.getItem("childName");

    var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];

    if (!childName) {
        if (allNames.length === 0) {
            allNames = allNames.concat(defaultChildrenNames);
            localStorage.setItem("allNames", JSON.stringify(allNames));
        }
    } else {
        allNames.push(childName);

        // Check if default names are present
        var areDefaultNamesPresent = allNames.length <= defaultChildrenNames.length;

        if (areDefaultNamesPresent) {
            // Remove default names after adding a new name
            allNames = allNames.slice(defaultChildrenNames.length);
            localStorage.setItem("allNames", JSON.stringify(allNames));
        }
    }

    displayAllNames(allNames);

    function displayAllNames(names) {
        var wrapper = document.querySelector('.wrapper');
        // Clear previous content
        wrapper.innerHTML = '';

        // Display names starting from the third index
        names.slice(2).forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});