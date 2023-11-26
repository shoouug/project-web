document.addEventListener('DOMContentLoaded', function () {
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    var childName = localStorage.getItem("childName");
    

    if (allNames.length === 0) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        allNames = allNames.concat(defaultChildrenNames);
        localStorage.setItem("allNames", JSON.stringify(allNames));
        
    }
    displayAllNames("allNames")

    if (childName && !allNames.includes(childName)) {
        allNames.push(childName);
        localStorage.setItem("allNames", JSON.stringify(allNames));
        displayAllNames(allNames.slice(2));
    }



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