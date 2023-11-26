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
        localStorage.setItem("allNames", JSON.stringify(allNames));
    }

    displayAllNames(allNames);

    function displayAllNames(names) {
        var wrapper = document.querySelector('.wrapper');
        // Clear previous content
        wrapper.innerHTML = '';

        var displayedNames = names;

        // Check if a new name has been added and default names haven't been sliced
        if (names.length > defaultChildrenNames.length && names.length <= defaultChildrenNames.length + 1) {
            // Remove default names after one new name is added
            displayedNames = names.slice(defaultChildrenNames.length);
        }

        displayedNames.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});