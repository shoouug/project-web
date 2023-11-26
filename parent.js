document.addEventListener('DOMContentLoaded', function () {
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];
    var childName = localStorage.getItem("childName");

    var defaultNamesDisplayed = false;

    if (kidsNames.length === 0) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("kidsNames", JSON.stringify(defaultChildrenNames));
        displayChildren(defaultChildrenNames);
        defaultNamesDisplayed = true;
    }

    if (childName && !kidsNames.includes(childName)) {
        kidsNames.push(childName);
        localStorage.setItem("kidsNames", JSON.stringify(kidsNames));

        // Remove default names only if they have been displayed
        if (defaultNamesDisplayed) {
            localStorage.removeItem("kidsNames");
        }
    }

    displayChildren(kidsNames);

    function displayChildren(names) {
        var wrapper = document.querySelector('.wrapper');
        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});