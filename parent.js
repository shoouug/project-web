document.addEventListener('DOMContentLoaded', function () {
    const storedChildren = localStorage.getItem('childName');
  
    if (storedChildren) {
      var childrenNames = JSON.parse(storedChildren);
      displayChildren(childrenNames);
    }
  
    function displayChildren(names) {
      var wrapper = document.querySelector('.wrapper');
      wrapper.innerHTML = ''; 
  
      names.forEach(name => {
        var childBox = document.createElement('div');
        childBox.classList.add('child-box');
        childBox.textContent = name;
        wrapper.appendChild(childBox);
      });
    }
  });

