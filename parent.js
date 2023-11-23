document.addEventListener("DOMContentLoaded", function () {
    var storedChildren = JSON.parse(localStorage.getItem("children"));

    if (!storedChildren || storedChildren.length === 0) {

        var children = ["Child1", "Child2"];
        localStorage.setItem("children", JSON.stringify(children));
        displayChildren(children);
    } else {

        displayChildren(storedChildren);
    }
});

function displayChildren(children) {

    var childInfoDisplay = document.getElementsByClassName("kid-name");

    for (var i = 0; i < childInfoDisplay.length; i++) {
        childInfoDisplay[i].textContent = children[i];
    }
}