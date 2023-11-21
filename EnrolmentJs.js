// enrollment.js

// Function to filter children's names based on the selected option
function filterChildren() {
    var selectedKid = document.getElementById("kids-filter").value;

    // Retrieve children's names from local storage
    var storedNames = getStoredChildrenNames();

    // Filter and display names based on the selected option
    var filteredNames = (selectedKid === "all") ? storedNames : [selectedKid];
    displayFilteredNames(filteredNames);
}

// Function to retrieve children's names from local storage
function getStoredChildrenNames() {
    // Retrieve the data from local storage
    var storedInfo = JSON.parse(localStorage.getItem("childInfo"));
    if (!storedInfo) {
        return [];
    }

    // Extract and return an array of children's names
    return storedInfo.map(function (child) {
        return child.name;
    });
}

// Function to display filtered names
function displayFilteredNames(names) {
    // Clear existing names in the dropdown
    var dropdown = document.getElementById("kids-filter");
    dropdown.innerHTML = '<option value="all">All Kids</option>';

    // Populate the dropdown with filtered names
    names.forEach(function (name) {
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        dropdown.add(option);
    });
}

// Initial setup to populate the dropdown with names from local storage
window.onload = function () {
    var storedNames = getStoredChildrenNames();
    displayFilteredNames(storedNames);
};
