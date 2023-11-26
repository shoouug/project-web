document.addEventListener('DOMContentLoaded', function () {
    var childName = localStorage.getItem("childName");
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];
    
    if (!childName && kidsNames.length === 0) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("kidsNames", JSON.stringify(defaultChildrenNames));
        displayChildren(defaultChildrenNames);
    } else {
        displayChildren(kidsNames);
    }

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