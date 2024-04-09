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
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Event Name:</strong> ${event.EventName}<br>
            <strong>Venue:</strong> ${event.Venue}<br>
            <strong>Participants Limit:</strong> ${event.Participants_Limit}<br>
            <strong>Date:</strong> ${event.Date}<br>
            <strong>Time:</strong> ${event.Time}<br>
            <strong>Description:</strong> ${event.Description}
        `;
        eventList.appendChild(li);
    });
}

