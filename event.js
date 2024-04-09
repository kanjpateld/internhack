// document.addEventListener('DOMContentLoaded', function() {
//     const toggleNavButton = document.getElementById('toggleNavButton');
//     const sideNav = document.getElementById('sideNav');

//     toggleNavButton.addEventListener('click', function() {
//         sideNav.classList.toggle('show');
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const toggleNavButton = document.getElementById('toggleNavButton');
//     const sideNav = document.getElementById('sideNav');
//     const usernameOutput = document.getElementById('username');
//     const emailOutput = document.getElementById('email');

//     toggleNavButton.addEventListener('click', function() {
//         sideNav.classList.toggle('show');
//     });

//     // Retrieve username and email from session
//     const username = sessionStorage.getItem('username');
//     const email = sessionStorage.getItem('email');

//     // Update profile section
//     if (username && email) {
//         usernameOutput.textContent = "Username: " + username;
//         emailOutput.textContent = "Email: " + email;
//     }
// });




document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');



    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
    
});

// document.addEventListener('DOMContentLoaded', async function() {
//     const toggleNavButton = document.getElementById('toggleNavButton');
//     const sideNav = document.getElementById('sideNav');

//     toggleNavButton.addEventListener('click', function() {
//         sideNav.classList.toggle('show');
//     });

//     // Function to fetch event data
//     async function fetchEventData() {
//         try {
//             const response = await fetch('http://localhost:3000/Eventsubmit/event', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 // Add any additional data you want to send in the body here
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             // Process the retrieved data
//             console.log(data); // Log the data to console for demonstration
//         } catch (error) {
//             console.error('There was a problem with the fetch operation:', error);
//         }
//     }

//     // Call the fetchEventData function
//     await fetchEventData();
// });

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var EventName = document.getElementById('eventName').value.trim();
    var Venue = document.getElementById('venue').value.trim();
    var Participants_Limit = document.getElementById('participantsLimit').value.trim();
    var Date = document.getElementById('eventDate').value.trim();
    var Time = document.getElementById('eventTime').value.trim();
    var Description = document.getElementById('eventDescription').value.trim();

    // Retrieve organizer ID from localStorage
    var OrganizerId = localStorage.getItem('OrganizerId');
    // var OrganizerId = '2';
    
    // Validation
    if (EventName === '' || Venue === '' || Participants_Limit === '' || Date === '' || Time === '' || Description === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Prepare the form data
    var formData = {
        EventName: EventName,
        Venue: Venue,
        Participants_Limit: Participants_Limit,
        Date: Date,
        Time: Time,
        Description: Description,
        Organizer: OrganizerId
    };

    // Make a POST request to the API
    fetch('http://localhost:3000/Eventsubmit/event', {
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
        console.log('Event data sent successfully:', data);
        // Reset form after successful submission
        document.getElementById('event-form').reset();
        // Handle any further actions like showing a success message
    })
    .catch(error => {
        console.error('Error sending event data:', error);
        alert('An error occurred while submitting the form.');
    });
});





