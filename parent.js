document.addEventListener('DOMContentLoaded', function () {
    var childName = localStorage.getItem("childName");

    if (!childName) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("childName", JSON.stringify(defaultChildrenNames));
        displayChildName(defaultChildrenNames);
    } else {
        var namesArray = JSON.parse(childName);
        displayChildName(namesArray);
    }

    function displayChildName(names) {
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