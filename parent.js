

document.addEventListener('DOMContentLoaded', function () {
    var childName = JSON.parse(localStorage.getItem("childName")) || [];

    if (childName.length === 0) {
        // Save 2 default children's names if local storage is empty
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("childName", JSON.stringify(defaultChildrenNames));
        displayChildren(defaultChildrenNames);
    } else {
        // Remove default names if present
        var defaultNamesExist = childName.some(name => ['Ahmad Ali', 'Fahad Ali'].includes(name));
        if (defaultNamesExist) {
            childName = childName.filter(name => !['Ahmad Ali', 'Fahad Ali'].includes(name));
            localStorage.setItem("childName", JSON.stringify(childName));
        }

        displayChildren(childName);
    }

    function displayChildren(names) {
        var wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = ""; // Clear existing children

        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});