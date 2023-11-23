document.addEventListener('DOMContentLoaded', function () {
    var tutorsContainer = document.querySelector('.tutorbox');
    var sortDropdown = document.getElementById('sort');

    sortDropdown.addEventListener('change', sortTutors);

    function sortTutors() {
        var tutors = Array.from(document.querySelectorAll('.Tutors'));
        var sortType = sortDropdown.value;

        tutors.sort((a, b) => {
            var nameA = a.querySelector('h3').textContent.toLowerCase();
            var nameB = b.querySelector('h3').textContent.toLowerCase();

if (sortType === 'asc') {
    return compareStrings(nameA, nameB);
} else {
    return compareStrings(nameB, nameA);
}

        });

        tutorsContainer.innerHTML = '';
        tutors.forEach(tutor => tutorsContainer.appendChild(tutor));
    }

    function compareStrings(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
});