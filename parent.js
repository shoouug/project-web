document.addEventListener('DOMContentLoaded', function () {
    const storedChildren = localStorage.getItem('childName');
  
    if (storedChildren) {
      var childrenNames = JSON.parse(storedChildren);
      displayChildren(childrenNames);
    }
  

  function displayChildren(childrenNames) {
    var wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = ''; 
    childrenNames.forEach(function (childName) {
        var childElement = document.createElement("div");
        childElement.classList.add("child-box");
        childElement.textContent = childName;

        wrapper.appendChild(childElement);
    });
}