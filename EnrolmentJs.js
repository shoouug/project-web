
//1

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve child name from local storage
    var childName = localStorge.getItem("childName");

    // Populate the kids filter dropdown with the retrieved child name
    var kidsFilterDropdown = document.getElementById("kids-filter");
    if (childName) {
        var option = document.createElement("option");
        option.value = childName;
        option.textContent = childName;
        kidsFilterDropdown.appendChild(option);
    } else {
        console.error("Child name not found in local storage.");
    }

    // You can do further processing or UI updates with the retrieved child name here
});



//2,3

document.addEventListener("DOMContentLoaded", function () {
    var courses = [
        {
            name: "Python",
            tutor: "Mona Khaled",
            prerequisite: "SQL",
            className: "course-item-Python"
        },
        {
            name: "Java",
            tutor: "Amal Abdullah",
            prerequisite: null,
            className: "course-item-Java"
        },
        {
            name: "HTML",
            tutor: "Fahad Omar",
            prerequisite: null,
            className: "course-item-HTML"
        },
        {
            name: "Scratch",
            tutor: "Najwa Hamad",
            prerequisite: null,
            className: "course-item-Scratch"
        },
        {
            name: "Robotics",
            tutor: "Sami Ahmed",
            prerequisite: "Python",
            className: "course-item-Robotics"
        },
        {
            name: "Machine Learning",
            tutor: "Hind Saleh",
            prerequisite: "Python",
            className: "course-item-MachineLearning"
        },
        {
            name: "SQL",
            tutor: "Najwa Hamad",
            prerequisite: "Scratch",
            className: "course-item-SQL"
        },
        {
            name: "CSS",
            tutor: "Fahad Omar",
            prerequisite: "HTML",
            className: "course-item-CSS"
        },
        {
            name: "JavaScript",
            tutor: "Amal Abdullah",
            prerequisite: "Java",
            className: "course-item-javascript"
        }
    ];

    // Populate the prerequisite filter dropdown
    var prerequisiteFilterDropdown = document.getElementById("prerequisite-filter");
    var prerequisiteOptions = new Set();
    courses.forEach(function (course) {
        if (course.prerequisite) {
            prerequisiteOptions.add(course.prerequisite);
        }
    });

    // Add options to the dropdown
    var allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Prerequisites";
    prerequisiteFilterDropdown.appendChild(allOption);

    prerequisiteOptions.forEach(function (prerequisite) {
        var option = document.createElement("option");
        option.value = prerequisite;
        option.textContent = prerequisite;
        prerequisiteFilterDropdown.appendChild(option);
    });

    // Initial filtering
    filterCourses();
});

function filterCourses() {
    var selectedPrerequisite = document.getElementById("prerequisite-filter").value;
    var courseItems = document.querySelectorAll(".course-list [class^='course-item-']");

    courseItems.forEach(function (courseItem) {
        var coursePrerequisite = courseItem.dataset.prerequisite;
        var showCourse = !selectedPrerequisite || (selectedPrerequisite === "all") || (selectedPrerequisite === coursePrerequisite);
        courseItem.style.display = showCourse ? "block" : "none";
    });
}

// Attach the filterCourses function to the change event of the prerequisite filter dropdown
document.getElementById("prerequisite-filter").addEventListener("change", filterCourses); 

