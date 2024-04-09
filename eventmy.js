// document.addEventListener('DOMContentLoaded', async function() {
//     try {
//         const accessToken = localStorage.getItem('accessToken');
//         if (!accessToken) {
//             throw new Error('Access token not found');
//         }

//         const response = await fetch('http://localhost:3000/events', {
//             headers: {
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch events');
//         }

//         const events = await response.json();
//         console.log(events); // Log the events to console

//         // TODO: Render the events on the webpage
//     } catch (error) {
//         console.error('Error fetching events:', error);
//     }
// });


// document.addEventListener('DOMContentLoaded', async function() {
//     // Assuming the organizer's ID is retrieved from local storage
//     const organizerId = localStorage.getItem('userId');

//     try {
//         const response = await fetch('http://localhost:3000/Eventsubmit/myevents', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify({ organizerId }) // Send the organizer's ID in the request body
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const events = await response.json();
//         displayEvents(events);
//     } catch (error) {
//         console.error('There was a problem fetching events:', error);
//     }
// });

// function displayEvents(events) {
//     const eventList = document.getElementById('eventList');
//     eventList.innerHTML = ''; // Clear previous event list

//     events.forEach(event => {
//         const li = document.createElement('li');
//         li.textContent = event.EventName; // Display event name, you can customize as needed
//         eventList.appendChild(li);
//     });
// }












// async function fetchOrganizerEvents() {
//     try {
//         // Make a request to your backend API to fetch the organizer's events
//         const response = await fetch('http://localhost:3000/Eventsubmit/myevents', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Add any necessary authorization headers here, such as JWT token
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         // Parse the response JSON data
//         const events = await response.json();
//         console.log(events);
//         return events;
//     } catch (error) {
//         console.error('Error fetching organizer events:', error);
//         return [];
//     }
// }


// // Function to display the organizer's events on the webpage
// async function displayOrganizerEvents() {
//     try {
//         // Fetch events for the logged-in organizer
//         const events = await fetchOrganizerEvents();

//         // Get the element where you want to display the events
//         const eventList = document.getElementById('eventList');

//         // Clear previous event list
//         eventList.innerHTML = '';

//         // Display each event in the event list
//         events.forEach(event => {
//             const listItem = document.createElement('li');
//             listItem.textContent = event.EventName; // Display event name, adjust as needed
//             eventList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error displaying organizer events:', error);
//     }
// }

// // Call the function to display the organizer's events when the page loads
// document.addEventListener('DOMContentLoaded', displayOrganizerEvents);








//test
// // Function to add event information to the list
// function addEvent(eventName, venue, participantsLimit, date, time, description) {
//     var eventList = document.getElementById("eventList");

//     // Create li element
//     var li = document.createElement("li");

//     // Create strong element for event name
//     var strong = document.createElement("strong");
//     strong.textContent = eventName;
//     li.appendChild(strong);

//     // Add line breaks and other information
//     li.innerHTML += "<br>Venue: " + venue;
//     li.innerHTML += "<br>Participants Limit: " + participantsLimit;
//     li.innerHTML += "<br>Date: " + date;
//     li.innerHTML += "<br>Time: " + time;
//     li.innerHTML += "<br>Description: " + description;

//     // Append the li to the ul
//     eventList.appendChild(li);
// }

// // Example usage:
// addEvent("kanj ", "Venue 1", "100", "2024-04-02", "10:00 AM", "This is event 1.");
// addEvent("Event 2", "Venue 2", "150", "2024-04-03", "11:00 AM", "This is event 2.");
// addEvent("Event 3", "Venue 3", "200", "2024-04-04", "12:00 PM", "This is event 3.");


// async function fetchUserProfiles() {
//     try {
//         const response = await fetch('http://localhost:3000/Eventsubmit/getevents'); // Updated API endpoint
//         const userData = await response.json();
//         // console.log(userData.students);
//         return userData.getevents; // Assuming the API returns an object with a 'students' property containing the array of student profiles
//     } catch (error) {
//         console.error('Error fetching user profiles:', error);
//         return [];
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    fetchEvents();
});

async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:3000/Eventsubmit/getevents');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        const events = data.events; // Extract events from the response
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function displayEvents(events) {
    const eventList = document.getElementById("eventList");
    events.forEach(event => {
        var OrganizerId = localStorage.getItem('OrganizerId');
        console.log(OrganizerId);
        if (event.Organizer == OrganizerId) {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>Event Name:</strong> ${event.EventName}<br>
                <strong>Venue:</strong> ${event.Venue}<br>
                <strong>Participants Limit:</strong> ${event.Participants_Limit}<br>
                <strong>Date:</strong> ${event.Date}<br>
                <strong>Time:</strong> ${event.Time}<br>
                <strong>Description:</strong> ${event.Description}<br>
                <strong>Organizer:</strong> ${event.Organizer}<br><br>
                <button class="edit-btn" data-id="${event._id}">Edit</button>
                <button class="delete-btn" data-id="${event._id}">Delete</button>
            `;
            eventList.appendChild(li);

            // Add event listener for edit button
            li.querySelector('.edit-btn').addEventListener('click', () => {
                // Handle edit functionality, you can redirect to an edit page or show a modal
                // For example, you can redirect to an edit page passing the event ID as a query parameter
                // editEventForm(event._id);
                window.location.href = `editEvent.html?id=${event._id}`;
            });

            // Add event listener for delete button
            li.querySelector('.delete-btn').addEventListener('click', () => {
                // Handle delete functionality, you can show a confirmation dialog before deleting
                // For example, you can show a confirmation dialog and if user confirms, make a DELETE request to delete the event
                const confirmDelete = confirm("Are you sure you want to delete this event?");
                if (confirmDelete) {
                    console.log(confirmDelete);
                    deleteEvent(event._id);
                }
            });
        }
    });
}

async function deleteEvent(eventId) {
    try {
        const response = await fetch(`http://localhost:3000/Eventsubmit/deleteEvent/${eventId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete event');
        }
        // If deletion successful, reload the events list
        fetchEvents();
    } catch (error) {
        console.error('Error deleting event:', error);
    }
}


// async function editEventForm(eventId){
//     window.location.href="http://127.0.0.1:5501/public/editevent.html";
//     async function fetchEventDetails(eventId) {
//         try {
//             const response = await fetch(`http://localhost:3000/Eventsubmit/getevents/${eventId}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch event details');
//             }
//             const eventData = await response.json();
//             displayEventDetails(eventData);
//         } catch (error) {
//             console.error('Error fetching event details:', error);
//         }
//     }


// }