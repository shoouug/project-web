document.addEventListener('DOMContentLoaded', function () {
    var childName = localStorage.getItem("childName");
    var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
    var enteredNames = JSON.parse(localStorage.getItem("enteredNames")) || [];

    if (childName) {
        // Add the new name
        enteredNames.push(childName);

        // Combine default names with entered names and remove the first two indexes
        var combinedNames = defaultChildrenNames.concat(enteredNames);

        localStorage.setItem("enteredNames", JSON.stringify(combinedNames));
    }

    displayAllNames(enteredNames);

    function displayAllNames(names) {
        var wrapper = document.querySelector('.wrapper');
        // Clear previous content
        wrapper.innerHTML = '';

        if (names.length === 0) {
            // Display default names if no entered names
            defaultChildrenNames.forEach(name => {
                var childBox = document.createElement('div');
                childBox.classList.add('child-box');
                childBox.textContent = name;
                wrapper.appendChild(childBox);
            });
        } else {
            // Display combined names after removing the first two indexes
            names.slice(2).forEach(name => {
                var childBox = document.createElement('div');
                childBox.classList.add('child-box');
                childBox.textContent = name;
                wrapper.appendChild(childBox);
            });
        }
    }
});