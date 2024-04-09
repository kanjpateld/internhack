// function validateSignup(event) {
//     event.preventDefault();  // Prevent the form from submitting (and refreshing the page)

//     var username = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var role = document.getElementById('role').value;
//     var signupMessage = document.getElementById('signup-message');

//     // Check if any of the fields are not filled
//     if (!username || !email || !password || !role) {
//         // Display error message
//         signupMessage.textContent = 'Please fill in all the fields, including selecting a role.';
//         return;
//     }

//     // Successful signup (you can redirect or perform other actions here)
//     signupMessage.textContent = 'Signup successful!';
//     clearSignupForm();
// }

// function clearSignupForm() {
//     var usernameInput = document.getElementById('name');
//     var emailInput = document.getElementById('email');
//     var passwordInput = document.getElementById('password');
//     var roleDropdown = document.getElementById('role');
//     var signupMessage = document.getElementById('signup-message');

//     // Clear the form fields
//     usernameInput.value = '';
//     emailInput.value = '';
//     passwordInput.value = '';
//     roleDropdown.value = '';

//     // Clear the success message after a brief delay
//     setTimeout(function () {
//         signupMessage.textContent = '';
//     }, 3000); // Display success message for 3 seconds (adjust as needed)
// }

// signup.js

async function validateSignup(event) {
    event.preventDefault();

    var signupMessage = document.getElementById('signup-message');
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        role: document.getElementById('role').value
    };
    localStorage.setItem('username',formData.username);
    localStorage.setItem('email',formData.email);

    try {
        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful signup here
            // console.log(data.message);
            
            signupMessage.textContent = 'Signup successful!';

            const isAuthenticated = true; // or determine dynamically
            localStorage.setItem('isAuthenticated', isAuthenticated);

            switch (formData.role) {
                case 'student':
                    // window.location.href = 'http://127.0.0.1:5500/public/proproject.html';
                    window.location.href = 'http://127.0.0.1:5501/public/stuForm.html';
                    break;
                case 'recruiter':
                    window.location.href = 'http://127.0.0.1:5501/public/recu.html';
                    break;
                case 'organizer':
                    window.location.href = 'http://127.0.0.1:5501/public/event.html';
                    break;
                default:
                    res.status(400).json({ message: 'Invalid role' });
            }
            
        } else {
            // Handle failed signup here
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('signupForm').addEventListener('submit', validateSignup);



