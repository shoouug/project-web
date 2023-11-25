//1

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the array of registered names from local storage
    var registeredNames = JSON.parse(localStorage.getItem("registeredNames")) || [];

    // Retrieve child name from local storage
    var childName = localStorage.getItem("childName");

    // Populate the kids filter dropdown with the retrieved child name
    var kidsFilterDropdown = document.getElementById("kids-filter");

    if (childName) {
        // Add the new child name to the array if it doesn't exist
        if (!registeredNames.includes(childName)) {
            registeredNames.push(childName);

            // Update local storage with the modified array
            localStorage.setItem("registeredNames", JSON.stringify(registeredNames));
        }

        // Clear existing options in the dropdown
        kidsFilterDropdown.innerHTML = "";

        // Add all registered names to the dropdown
        registeredNames.forEach(function (name) {
            var option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            kidsFilterDropdown.appendChild(option);
        });

        // Select the last added child name
        kidsFilterDropdown.value = childName;
    } else {
        console.error("Child name not found in local storage.");
    }

    // You can do further processing or UI updates with the retrieved child name here
});




//2,3

/*document.addEventListener("DOMContentLoaded", function () {
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
document.getElementById("prerequisite-filter").addEventListener("change", filterCourses); */





/*document.addEventListener("DOMContentLoaded", function () {
    // Your course array
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
    var allOptionPrerequisite = document.createElement("option");
    allOptionPrerequisite.value = "all";
    allOptionPrerequisite.textContent = "All Prerequisites";
    prerequisiteFilterDropdown.appendChild(allOptionPrerequisite);

    prerequisiteOptions.forEach(function (prerequisite) {
        var option = document.createElement("option");
        option.value = prerequisite;
        option.textContent = prerequisite;
        prerequisiteFilterDropdown.appendChild(option);
    });

    // Populate the tutor filter dropdown
    var tutorFilterDropdown = document.getElementById("tutor-filter");
    var tutorOptions = new Set();
    courses.forEach(function (course) {
        tutorOptions.add(course.tutor);
    });

    // Add options to the dropdown
    var allOptionTutor = document.createElement("option");
    allOptionTutor.value = "all";
    allOptionTutor.textContent = "All Tutors";
    tutorFilterDropdown.appendChild(allOptionTutor);

    tutorOptions.forEach(function (tutor) {
        var option = document.createElement("option");
        option.value = tutor;
        option.textContent = tutor;
        tutorFilterDropdown.appendChild(option);
    });

    // Initial filtering
    filterCourses();
});

function filterCourses() {
    var selectedPrerequisite = document.getElementById("prerequisite-filter").value;
    var selectedTutor = document.getElementById("tutor-filter").value;
    var courseItems = document.querySelectorAll(".course-list [class^='course-item-']");

    courseItems.forEach(function (courseItem) {
        var coursePrerequisite = courseItem.dataset.prerequisite;
        var courseTutor = courseItem.dataset.tutor;

        var showCoursePrerequisite = !selectedPrerequisite || selectedPrerequisite === "all" || selectedPrerequisite === coursePrerequisite;
        var showCourseTutor = !selectedTutor || selectedTutor === "all" || selectedTutor === courseTutor;

        var showCourse = showCoursePrerequisite && showCourseTutor;
        courseItem.style.display = showCourse ? "block" : "none";
    });
}

// Attach the filterCourses function to the change event of the prerequisite filter dropdown
document.getElementById("prerequisite-filter").addEventListener("change", filterCourses);

// Attach the filterCourses function to the change event of the tutor filter dropdown
document.getElementById("tutor-filter").addEventListener("change", filterCourses);

  // Add an event listener to the filter form
  document.getElementById("filterForm").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve selected values from form elements
    var selectedKid = document.getElementById("kids-filter").value;
    var selectedPrerequisite = document.getElementById("prerequisite-filter").value;
    var selectedTutor = document.getElementById("tutor-filter").value;

    // Store selected values in local storage
    localStorage.setItem("selectedKid", selectedKid);
    localStorage.setItem("selectedPrerequisite", selectedPrerequisite);
    localStorage.setItem("selectedTutor", selectedTutor);

    // Add your filter logic here
    // For example, you can collect selected values from filters and perform actions

    // After processing, you may want to redirect or display a success message
    alert("Enrolled sucsssfully");
  });*/



  document.addEventListener("DOMContentLoaded", function () {
    // Your course array
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

    var registeredKids = JSON.parse(localStorage.getItem("registeredKids")) || [];

    // Populate the kids filter dropdown
    var kidsFilterDropdown = document.getElementById("kids-filter");


    // Add all registered kids' names to the dropdown
    registeredKids.forEach(function (kidName) {
        var option = document.createElement("option");
        option.value = kidName;
        option.textContent = kidName;
        kidsFilterDropdown.appendChild(option);
    });

    kidsFilterDropdown.value = "";

    // Populate the prerequisite filter dropdown
    var prerequisiteFilterDropdown = document.getElementById("prerequisite-filter");
    var prerequisiteOptions = new Set();
    courses.forEach(function (course) {
        if (course.prerequisite) {
            prerequisiteOptions.add(course.prerequisite);
        }
    });

    // Add options to the dropdown
    var allOptionPrerequisite = document.createElement("option");
    allOptionPrerequisite.value = "all";
    allOptionPrerequisite.textContent = "All Prerequisites";
    prerequisiteFilterDropdown.appendChild(allOptionPrerequisite);

    prerequisiteOptions.forEach(function (prerequisite) {
        var option = document.createElement("option");
        option.value = prerequisite;
        option.textContent = prerequisite;
        prerequisiteFilterDropdown.appendChild(option);
    });

    // Populate the tutor filter dropdown
    var tutorFilterDropdown = document.getElementById("tutor-filter");
    var tutorOptions = new Set();
    courses.forEach(function (course) {
        tutorOptions.add(course.tutor);
    });

    // Add options to the dropdown
    var allOptionTutor = document.createElement("option");
    allOptionTutor.value = "all";
    allOptionTutor.textContent = "All Tutors";
    tutorFilterDropdown.appendChild(allOptionTutor);

    tutorOptions.forEach(function (tutor) {
        var option = document.createElement("option");
        option.value = tutor;
        option.textContent = tutor;
        tutorFilterDropdown.appendChild(option);
    });

    // Initial filtering
    filterCourses();
});

function filterCourses() {
    var selectedPrerequisite = document.getElementById("prerequisite-filter").value;
    var selectedTutor = document.getElementById("tutor-filter").value;
    var courseItems = document.querySelectorAll(".course-list [class^='course-item-']");

    courseItems.forEach(function (courseItem) {
        var coursePrerequisite = courseItem.dataset.prerequisite;
        var courseTutor = courseItem.dataset.tutor;

        var showCoursePrerequisite = !selectedPrerequisite || selectedPrerequisite === "all" || selectedPrerequisite === coursePrerequisite;
        var showCourseTutor = !selectedTutor || selectedTutor === "all" || selectedTutor === courseTutor;

        var showCourse = showCoursePrerequisite && showCourseTutor;
        courseItem.style.display = showCourse ? "block" : "none";
    });
}

// Attach the filterCourses function to the change event of the prerequisite filter dropdown
document.getElementById("prerequisite-filter").addEventListener("change", filterCourses);

// Attach the filterCourses function to the change event of the tutor filter dropdown
document.getElementById("tutor-filter").addEventListener("change", filterCourses);

// Add an event listener to the filter form
document.getElementById("filterForm").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve selected values from form elements
    var selectedKid = document.getElementById("kids-filter").value;
    var selectedPrerequisite = document.getElementById("prerequisite-filter").value;
    var selectedTutor = document.getElementById("tutor-filter").value;

    // Form validation

    if (!selectedKid || selectedKid === "Kids" || selectedKid === ""  && !selectedCourse) {
        alert("Please select a child and course!");
        return; // Stop proceeding if no child is selected
    }

    if (!selectedKid || selectedKid === "Kids") {
        alert("Please select a child.");
        return; // Stop proceeding if no child is selected
    }

    var selectedCourse = document.querySelector(".course-list [class^='course-item-'] input[name='courses']:checked");

    if (!selectedCourse) {
        alert("Please select a course.");
        return;
    }


    // Display the information on an alert message
    alert("Enrolled successfully!\n\nChild: " + selectedKid + "\nCourse: " + selectedCourse.parentElement.querySelector("p").textContent);
    
    // Display the information on the page
    var displayArea = document.getElementById("display-area");

    // Clear previous information
    displayArea.innerHTML = "";

    // Display new information
    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = "Child: " + selectedKid + "\nPrerequisite: " + selectedPrerequisite + "\nTutor: " + selectedTutor;
    displayArea.appendChild(infoParagraph);

    // Clear the form
    document.getElementById("kids-filter").value = "Kids";
    document.getElementById("prerequisite-filter").value = "all";
    document.getElementById("tutor-filter").value = "all";

    // Store selected values in local storage
    localStorage.setItem("selectedKid", selectedKid);
    localStorage.setItem("selectedPrerequisite", selectedPrerequisite);
    localStorage.setItem("selectedTutor", selectedTutor);
});