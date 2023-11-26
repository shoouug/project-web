document.addEventListener('DOMContentLoaded', function () {
    var childName = localStorage.getItem("childName");
    
    if (!childName) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("childName", JSON.stringify(defaultChildrenNames));
        displayChildName(defaultChildrenNames);
    } else {
        displayChildName(JSON.parse(childName).slice(2));
    }

    function displayChildName(names) {
        var wrapper = document.querySelector('.wrapper');


        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});