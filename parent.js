document.addEventListener('DOMContentLoaded', function () {
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    var childName = localStorage.getItem("childName");

    if (!childName) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        if (allNames.length === 0) {
            allNames = allNames.concat(defaultChildrenNames);
            localStorage.setItem("allNames", JSON.stringify(allNames));
        }
    } else {
        allNames.push(childName);

        // Check if default names have not been removed yet
        var areDefaultNamesPresent = allNames.length <= 2;

        if (areDefaultNamesPresent && allNames.length > 2) {
            // Remove the default names only once
            allNames = allNames.slice(2);
            localStorage.setItem("allNames", JSON.stringify(allNames));
        }
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