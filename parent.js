document.addEventListener('DOMContentLoaded', function () {
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    var childName = localStorage.getItem("childName");
    var defaultNamesRemoved = false;

    if (!childName) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        if (allNames.length === 0) {
            allNames = allNames.concat(defaultChildrenNames);
            localStorage.setItem("allNames", JSON.stringify(allNames));
        }
    } else {
        allNames.push(childName);
        if (!defaultNamesRemoved && allNames.length > 2) {
            allNames = allNames.slice(2);
            defaultNamesRemoved = true;
        }
        localStorage.setItem("allNames", JSON.stringify(allNames));
    }

    displayAllNames(allNames);

    function displayAllNames(names) {
        var wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = '';

        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});