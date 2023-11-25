document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the array of registered names from local storage
    var kidsNames = JSON.parse(localStorage.getItem("kidsNames")) || [];

    var childName = localStorage.getItem("childName");

    // Check if kidsNames array is empty
    if (kidsNames.length === 0) {
        // If it is empty, save 2 children's names to local storage
        const defaultChildrenNames = ['Ahmad Ali', 'Fahad Ali'];
        localStorage.setItem("kidsNames", JSON.stringify(defaultChildrenNames));

        // Display the default children's names in the dashboard
        displayChildren(defaultChildrenNames);
    } else {
        // If not empty, check if childName exists
        if (childName) {
            // Add the new child name to the array if it doesn't exist
            if (!kidsNames.includes(childName)) {
                kidsNames.push(childName);

                // Update local storage with the modified array
                localStorage.setItem("kidsNames", JSON.stringify(kidsNames));
            }
        }

        // Display the children's names from local storage (excluding the default 2 names) in the dashboard
        displayChildren(kidsNames.filter(name => !['Ahmad Ali', 'Fahad Ali'].includes(name)));
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