document.addEventListener('DOMContentLoaded', function () {
    var childName = localStorage.getItem("childName");
    
    if (!childName) {
        var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("kidsNames", JSON.stringify(defaultChildrenNames));
        displayChildren(defaultChildrenNames);
    } else {
        var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];
        
        // Check if there are no kidsNames saved
        if (kidsNames.length === 0) {
            // If empty, display default names
            var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
            displayChildren(defaultChildrenNames);
        } else {
            // Otherwise, display the saved names
            displayChildren(kidsNames);
        }
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