document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the array of registered names from local storage
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];

    var childName = localStorage.getItem("childName");

    // Check if childName exists
    if (childName && !kidsNames.includes(childName)) {
        kidsNames.push(childName);
        localStorage.setItem("kidsNames", JSON.stringify(kidsNames));
        displayChildren(kidsNames);
    }

   

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