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
        // Add the new name
        allNames.push(childName);

        // Remove default names after adding a new name
        allNames = allNames.slice(defaultChildrenNames.length);
        localStorage.setItem("allNames", JSON.stringify(allNames));
    }

    displayAllNames(allNames);

    function displayAllNames(names) {
        var wrapper = document.querySelector('.wrapper');
        // Clear previous content
        wrapper.innerHTML = '';

        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});