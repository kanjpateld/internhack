// function validateLogin() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var errorMessage = document.getElementById('error-message');

//     if (username === 'user' && password === 'pass') {
//         // Successful login (you can redirect or perform other actions here)
//         errorMessage.textContent = '';
//         alert('Login successful!');
//     } else {
//         // Display error message
//         errorMessage.textContent = 'Invalid username or password. Please try again.';
//     }
// }
// login.js

// const btn = document.querySelector('.cls')
// btn.classList.add('btn')

async function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        password: password
    };

    try {
        // console.log("hii")
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
            // body: JSON.stringify(userData).role
        });


        const data = await response.json(); 
        
        if (response.ok) {
            // Redirect to a new page upon successful login
            console.log(data);
            console.log(data.username);
            // console.log(data._id);
            localStorage.setItem('username',data.username);
            localStorage.setItem('email',data.email);
            // localStorage.setItem('Organizer',data._id);
            alert('Login successful!');
            
            const isAuthenticated = true; // or determine dynamically
            localStorage.setItem('isAuthenticated', isAuthenticated);
            console.log(data.role);

            switch (data.role) {
                case 'student':
                    window.location.href = 'http://127.0.0.1:5501/public/project.html';
                    break;
                case 'recruiter':
                    window.location.href = 'http://127.0.0.1:5501/public/recu.html';
                    break;
                case 'organizer':
                    console.log("organizer"); 
                    localStorage.setItem('OrganizerId',data._id); // Set organizerId in localStorage
                    window.location.href = 'http://127.0.0.1:5501/public/event.html';
                    break;
                default:
                    res.status(400).json({ message: 'Invalid role' });
            }
            // window.location.href = 'http://127.0.0.1:5500/public/proproject.html'; // Adjust the redirection URL as needed
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
