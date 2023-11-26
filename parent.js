document.addEventListener('DOMContentLoaded', function () {
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];
    var childName = localStorage.getItem("childName");

    if (kidsNames.length === 0) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        sessionStorage.setItem("kidsNames", JSON.stringify(defaultChildrenNames));
        displayChildren(defaultChildrenNames);
    } else {
        if (childName && !kidsNames.includes(childName)) {
            kidsNames = kidsNames.filter(name => !['Ahmad Ali', 'Fahad Ali'].includes(name));

            kidsNames.push(childName);
            localStorage.setItem("kidsNames", JSON.stringify(kidsNames));
        }
        displayChildren(kidsNames);
    }

    function displayChildren(names) {
        var wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = ""; 

        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});