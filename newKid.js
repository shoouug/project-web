function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var photo = document.getElementById("photo").value;

    if (fname === "" || lname === "" || !gender || age === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(fname) || !/^[a-zA-Z]+$/.test(lname)) {
        alert("Name fields should start with a letter.");
        return false;
    }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    var birthDate = new Date(age);
    var currentDate = new Date();
    var cutoffDate = new Date("2017-01-01");

    if (birthDate > currentDate || birthDate > cutoffDate) {
        alert("Date of Birth cannot be after 2017.");
        return false;
    }

    if (fname !== "" && lname !== "" && gender && age !== "" && email !== "" && phone !== "") {
        var childName = fname + " " + lname;
        localStorage.setItem("childName", childName);

        console.log("Child's name stored in local storage:", childName);

        var childInfo = {
            photo: document.getElementById("photo").files[0],
            name: fname,
            gender: gender.value,
            age: age,
            email: email,
            phone: phone
        };
        localStorage.setItem("childInfo", JSON.stringify(childInfo));
        console.log("before console");

        console.log("Child information stored in local storage:", childInfo);
        console.log("after console");
        displayChildInformation(childInfo);
    }

    return true;
}
function displayChildInformation(childInfo) {
    var newWindow = window.open('', '_blank');

    newWindow.document.write('<html><head></head><body style="margin: 20px; padding: 20px; box-sizing: border-box;">');
    
    newWindow.document.write('<div style="border: 1px solid black; padding: 10px; box-sizing: border-box;">');

    var imageUrl = URL.createObjectURL(childInfo.photo);
    
    // Create an image element and set its source
    var image = new Image();
    image.src = imageUrl;

    // Attach an onload event to ensure the image is loaded
    image.onload = function() {
        newWindow.document.write('<img src="' + imageUrl + '" alt="Child\'s Photo" style="width: 100px; height: 100px; margin-bottom: 10px; box-sizing: border-box;">');

        newWindow.document.write('<p>Name: ' + childInfo.name + '</p>');
        newWindow.document.write('<p>Gender: ' + childInfo.gender + '</p>');
        newWindow.document.write('<p>DOB: ' + childInfo.age + '</p>');
        newWindow.document.write('<p>Email: ' + childInfo.email + '</p>');
        newWindow.document.write('<p>Phone: ' + childInfo.phone + '</p>');

        newWindow.document.write('</div></body></html>');
        newWindow.document.close();

        // Trigger the print dialog
        newWindow.print();
        //
    };
}
