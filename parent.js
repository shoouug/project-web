document.addEventListener('DOMContentLoaded', function () {
    var defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
    var enteredChildrenNames = JSON.parse(localStorage.getItem("kidsNames")) || [];

    var allChildrenNames = enteredChildrenNames.length > 0 ? enteredChildrenNames : defaultChildrenNames;

    // Adding 2 to each index in the array and getting the corresponding name
    var updatedChildrenNames = allChildrenNames.map((name, index) => {
        return allChildrenNames[(index + 2) % allChildrenNames.length];
    });

    displayChildren(updatedChildrenNames);

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