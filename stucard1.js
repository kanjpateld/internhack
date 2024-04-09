           // Function to fetch user profiles from the backend API
           async function fetchUserProfiles() {
            try {
                const response = await fetch('http://localhost:3000/userprofile/students'); // Updated API endpoint
                const userData = await response.json();
                // console.log(userData.students);
                return userData.students; // Assuming the API returns an object with a 'students' property containing the array of student profiles
            } catch (error) {
                console.error('Error fetching user profiles:', error);
                return [];
            }
        }
        
        // Function to create user profile cards
        async function createAndDisplayUserCards() {
            const users = await fetchUserProfiles();
            console.log(users);
            const cardContainer = document.getElementById('card-container');
        
            const searchInput = document.querySelector('.search-input');
            const searchValue = searchInput.value.toLowerCase();
            console.log(searchValue);
            cardContainer.innerHTML = '';

            users.forEach(user => {
                if (user.language.toLowerCase().includes(searchValue)) {
                const card = document.createElement('div');
                card.classList.add('card');
        
                const img = document.createElement('img');
                img.src = 'job1.jpeg'; // Set the image path to 'job1.jpeg' for all users
                // img.alt = user.fullName; // Assuming your API returns a full name for each user
        
                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');
        
                // Create a new paragraph element for displaying the full name
                const fullNamePara = document.createElement('p');
                fullNamePara.textContent = `Full Name: ${user.fullName}`;
        
                const description = document.createElement('p');
                description.textContent = `Language: ${user.language}`; // Assuming your API returns language information
        
                // const linkedinDiv = document.createElement('div');
                // const linkedinLink = document.createElement('a');
                // linkedinLink.href = user.linkedin;
                // linkedinLink.textContent = "LinkedIn";
                // linkedinDiv.appendChild(linkedinLink);
        
                // const githubDiv = document.createElement('div');
                // const githubLink = document.createElement('a');
                // githubLink.href = user.github;
                // githubLink.textContent = `GitHub: ${user.github} `;
                // githubDiv.appendChild(githubLink);
                const linkedinDiv = document.createElement('div');
                const linkedinLink = document.createElement('span');
                linkedinLink.textContent = "LinkedIn";
                linkedinLink.style.cursor = "pointer"; // Change cursor to pointer for better UX
                linkedinLink.onclick = function() {
                    window.location.href = user.linkedin; // Redirect to LinkedIn profile
                };
                linkedinLink.textContent = `LinkedIn: ${user.linkedin} `; 
                linkedinDiv.appendChild(linkedinLink);
        
                const githubDiv = document.createElement('div');
                const githubLink = document.createElement('span');
                githubLink.textContent = "GitHub";
                githubLink.style.cursor = "pointer"; // Change cursor to pointer for better UX
                 githubLink.textContent = `GitHub: ${user.github} `; 
                githubLink.onclick = function() {
                    window.location.href = user.github;// Redirect to GitHub profile
                    
                };
               
                githubDiv.appendChild(githubLink);
        
        
                cardContent.appendChild(fullNamePara);
                cardContent.appendChild(document.createElement('br'));
                cardContent.appendChild(description);
                cardContent.appendChild(document.createElement('br'));
                cardContent.appendChild(linkedinDiv);
                cardContent.appendChild(document.createElement('br')); // Add line break between LinkedIn and GitHub links
                cardContent.appendChild(githubDiv);
        
                card.appendChild(img);
                card.appendChild(cardContent);
        
                cardContainer.appendChild(card);
            }
            });
        }
        
        // Call the function to create and display user profile cards
        createAndDisplayUserCards();

function redirecthome(){
            window.location.href = "http://127.0.0.1:5501/public/home.html" 
}
function redirectstudent(){
            window.location.href = "http://127.0.0.1:5501/public/project.html" 
}