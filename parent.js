document.addEventListener('DOMContentLoaded', function () {
    const storedChildren = localStorage.getItem('childName');
  
    if (storedChildren) {
      const childrenNames = JSON.parse(storedChildren);
      displayChildren(childrenNames);
    }
  
    function displayChildren(names) {
      const wrapper = document.querySelector('.wrapper');
      wrapper.innerHTML = ''; 
  
      names.forEach(name => {
        const childBox = document.createElement('div');
        childBox.classList.add('child-box');
        childBox.textContent = name;
        wrapper.appendChild(childBox);
      });
    }
  });

