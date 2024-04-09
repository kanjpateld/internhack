// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     var fullName = document.getElementById('fullName').value.trim();
//     var language = document.getElementById('language').value.trim();
//     var linkedin = document.getElementById('linkedin').value.trim();
//     var github = document.getElementById('github').value.trim();

//     // Validation
//     if (fullName === '' || language === '') {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Submission
//     var formData = {
//         fullName: fullName,
//         language: language,
//         linkedin: linkedin,
//         github: github
//     };

//     console.log(formData); // You can send the formData to server or perform further actions

//     // Reset form
//     document.getElementById('myForm').reset();

//     // Redirect to proproject.html
//     window.location.href = 'http://127.0.0.1:5500/public/proproject.html';
// });

// function updateSelectedLanguages() {
//     var selectedLanguages = [];
//     var checkboxes = document.getElementsByName('language');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             selectedLanguages.push(checkboxes[i].value);
//         }
//     }
//     document.getElementById('selectedLanguages').value = 'Selected Language(s): ' + selectedLanguages.join(', ');
// }

// function displaySelectedLanguages() {
//     var selectedLanguages = [];
//     var checkboxes = document.getElementsByName('language');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             selectedLanguages.push(checkboxes[i].value);
//         }
//     }
//     document.getElementById('selectedLanguagesDisplay').innerHTML = 'Selected Languages are: ' + selectedLanguages.join(', ');
// }


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById('fullName').value.trim();
    var language = document.getElementById('language').value.trim();
    var linkedin = document.getElementById('linkedin').value.trim();
    var github = document.getElementById('github').value.trim();

    // Validation
    if (fullName === '' || language === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Prepare the form data
    var formData = {
        fullName: fullName,
        language: language,
        linkedin: linkedin,
        github: github
    };

    // Make a POST request to the API
    fetch('http://localhost:3000/userprofile/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Form data sent successfully:', data);
        // Reset form after successful submission
        document.getElementById('myForm').reset();
        // Redirect to proproject.html
        // localStorage.setItem('username',formData.username);
        // localStorage.setItem('email',formData.email);
        window.location.href = 'http://127.0.0.1:5501/public/project.html';
    })
    .catch(error => {
        console.error('Error sending form data:', error);
        alert('An error occurred while submitting the form.');
    });
});




// function updateSelectedLanguages() {
//             var selectedLanguages = [];
//             var checkboxes = document.getElementsByName('language');
//                 for (var i = 0; i < checkboxes.length; i++) {
//                     if (checkboxes[i].checked) {
//                         selectedLanguages.push(checkboxes[i].value);
//                     }
//                 }
//         document.getElementsByClassName('selectedLanguages').value = 'Selected Language(s): ' + selectedLanguages.join(', ');
//                     }
                
// function displaySelectedLanguages() {
//         var selectedLanguages = [];
//         var checkboxes = document.getElementsByName('language');
//         for (var i = 0; i < checkboxes.length; i++) {
//             if (checkboxes[i].checked) {
//                 selectedLanguages.push(checkboxes[i].value);
//             }
//         }
//         document.getElementsByClassName('selectedLanguagesDisplay').innerHTML = 'Selected Languages are: ' + selectedLanguages.join(', ');
//     }

// Function to authenticate user and fetch user details from the backend
// async function authenticateAndFetchUserDetails(username, password) {
//     try {
//         const formData = {
//             username: username,
//             password: password
//         };

//         const response = await fetch('http://localhost:3000/user/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         if (!response.ok) {
//             throw new Error('Authentication failed');
//         }

//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.error('Error authenticating user:', error);
//         throw error;
//     }
// }

// // Form submission event listener
// document.getElementById('myForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     // Get form values
//     var fullName = document.getElementById('fullName').value.trim();
//     var language = document.getElementById('language').value.trim();
//     var linkedin = document.getElementById('linkedin').value.trim();
//     var github = document.getElementById('github').value.trim();
//     var username = document.getElementById('username').value.trim(); // assuming username is entered in the form
//     var password = document.getElementById('password').value.trim(); // assuming password is entered in the form

//     // Validation
//     if (fullName === '' || language === '' || username === '' || password === '') {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     try {
//         // Authenticate user and fetch user details
//         const userData = await authenticateAndFetchUserDetails(username, password);

//         // Prepare the form data including user details
//         var formData = {
//             username: userData.username,
//             email: userData.email,
//             fullName: fullName,
//             language: language,
//             linkedin: linkedin,
//             github: github
//         };

//         // Make a POST request to the API to create user profile
//         const response = await fetch('http://localhost:3000/userprofile/profile', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         if (!response.ok) {
//             throw new Error('Failed to create user profile');
//         }

//         const responseData = await response.json();
//         console.log('User profile created successfully:', responseData);

//         // Reset form after successful submission
//         document.getElementById('myForm').reset();
//         // Redirect to proproject.html
//         window.location.href = 'http://127.0.0.1:5500/public/proproject.html';
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('An error occurred while submitting the form.');
//     }
// });
