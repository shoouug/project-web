document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the array of registered names from local storage
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];

    var childName = localStorage.getItem("childName");

    // Check if childName exists
    if (childName && !kidsNames.includes(childName)) {
        // Add the new child name to the array
        kidsNames.push(childName);

        // Update local storage with the modified array
        localStorage.setItem("kidsNames", JSON.stringify(kidsNames));
    }

    // Display the children's names from local storage in the dashboard
    displayChildren(kidsNames);

    function displayChildren(names) {
        // Display children's names in the dashboard
        var wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = ''; // Clear existing content

        names.forEach(name => {
            var childBox = document.createElement('div');
            childBox.classList.add('child-box');
            childBox.textContent = name;
            wrapper.appendChild(childBox);
        });
    }
});