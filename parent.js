document.addEventListener("DOMContentLoaded", function () {
    updateParentDashboard();
});

function updateParentDashboard() {
    var storedChildren = localStorage.getItem("parentChildren");

    if (!storedChildren) {
       
        var defaultChildrenNames = ["Ahmad Ali", "Fahad Ali"];
        localStorage.setItem("parentChildren", JSON.stringify(defaultChildrenNames));
    }

   
    var childrenNames = JSON.parse(localStorage.getItem("parentChildren")) || [];

    
    var kidNameElements = document.querySelectorAll(".kid-name");

    for (var i = 0; i < kidNameElements.length; i++) {
        kidNameElements[i].textContent = childrenNames[i] || "No Name";
    }
}

function reloadParentDashboard() {
    window.location.reload();
}