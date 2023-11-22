document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");

    // Retrieve child names from local storage
    var childNames = JSON.parse(localStorage.getItem("childNames")) || [];
    console.log("Retrieved child names from local storage:", childNames);

    // Populate the kids filter dropdown with the retrieved child names
    var kidsFilterDropdown = document.getElementById("kids-filter");
    childNames.forEach(function (childName) {
        var option = document.createElement("option");
        option.value = childName;
        option.textContent = childName;
        kidsFilterDropdown.appendChild(option);
    });
});


//2,3,4

var courses = [
    {
        name: "Java",
        tutor: "Fahad Omar",
        prerequisite: "Introduction to Programming"
    },
    {
        name: "Python",
        tutor: "Sami Ahmed",
        prerequisite: "Introduction to Programming"
    },
    {
        name: "Scratch",
        tutor: "Hind Saleh",
        prerequisite: "Computer Basics"
    },
    {
        name: "HTML",
        tutor: "Amal Abdullah",
        prerequisite: "Introduction to Web Development"
    },
    {
        name: "Machine Learning",
        tutor: "Najwa Hamed",
        prerequisite: "Python"
    },
    {
        name: "Robotics",
        tutor: "Mona Khalid",
        prerequisite: "Introduction to Programming"
    },
    {
        name: "JavaScript",
        tutor: "Yousef Ali",
        prerequisite: "HTML"
    },
    {
        name: "Data Science",
        tutor: "Lina Ahmed",
        prerequisite: "Python"
    },
    {
        name: "Game Development",
        tutor: "Ali Hassan",
        prerequisite: "Introduction to Programming"
    }
];

// Function to get unique tutor names
function getUniqueTutors() {
    return [...new Set(courses.map(course => course.tutor))];
}

// Function to get unique prerequisite names
function getUniquePrerequisites() {
    return [...new Set(courses.filter(course => course.prerequisite).map(course => course.prerequisite))];
}

// Function to filter courses by tutor or prerequisite
function filterCourses(filterValue, filterType) {
    return courses.filter(course => course[filterType] === filterValue);
}

// Example usage:
var selectedTutor = "Sami Ahmed";
var selectedPrerequisite = "Python";

var filteredCoursesByTutor = filterCourses(selectedTutor, "tutor");
var filteredCoursesByPrerequisite = filterCourses(selectedPrerequisite, "prerequisite");

// Assuming you have a form with an ID 'courseForm', you can dynamically fill in the form
function populateForm(courses) {
    var form = document.getElementById('courseForm');

    // Clear existing options
    form.innerHTML = '';

    courses.forEach(course => {
        var option = document.createElement('option');
        option.value = course.name;
        option.text = course.name;
        form.add(option);
    });
}

// Example usage:
populateForm(filteredCoursesByTutor);
// or
populateForm(filteredCoursesByPrerequisite);


//5,6,7

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("courseForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate form inputs
        var selectedChild = form.elements["child"].value;
        var selectedCourse = form.elements["course"].value;

        if (!selectedChild || !selectedCourse) {
            alert("Please select a child and a course.");
            return;
        }

        // Assuming you have an element with the ID "output" to display the information
        var outputElement = document.getElementById("output");

        // Clear previous information
        outputElement.innerHTML = "";

        // Display new information
        var childInfo = localStorage.getItem("childInfo");
        if (childInfo) {
            childInfo = JSON.parse(childInfo);
            var childName = childInfo.name;
            var selectedTutor = getTutorForCourse(selectedCourse);
            
            outputElement.innerHTML = `<p>Child Name: ${childName}</p>`;
            outputElement.innerHTML += `<p>Selected Course: ${selectedCourse}</p>`;
            outputElement.innerHTML += `<p>Tutor: ${selectedTutor}</p>`;
        }

        // Clear the form
        form.reset();
    });

    // Function to get tutor for a specific course
    function getTutorForCourse(courseName) {
        var course = courses.find(course => course.name === courseName);
        return course ? course.tutor : "Tutor not found";
    }
});
