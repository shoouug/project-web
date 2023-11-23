document.addEventListener('DOMContentLoaded', function () {
    var feedbackForm = document.getElementById('feedback-form');
    var courseSelect = document.getElementById('course');
    var ratingStars = document.querySelectorAll('.star');

    function isFormValid() {
        var selectedCourse = courseSelect.value;
        var isRatingSelected = Array.from(ratingStars).some(star => star.classList.contains('checked'));

        return selectedCourse && isRatingSelected;
    }

    function displayAlert(course, rating) {
        alert("Thank you for your feedback!\n Your rating for course " + course + " is " + rating + " out of 5 ");
    }

    feedbackForm.addEventListener('submit', function (event) {
        if (isFormValid()) {
            var selectedCourse = courseSelect.value;
            var userRating = document.querySelectorAll('.star.checked').length;
            displayAlert(selectedCourse, userRating);
        } else {
            alert("Please select a course and provide a rating before submitting");
        }
    });
}); 