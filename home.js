
    // Check if the user is authenticated (dummy example)
    let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // You can replace this with your authentication logic
    
    console.log(isAuthenticated);
    let btn;
    let btn2;
    btn = document.querySelector('.cls')
    btn2 = document.querySelector('.cls2')
    // Function to hide login and signup buttons if the user is authenticated
    function hideLoginAndSignupButtons() {
     btn = document.querySelector('.cls')
     btn2 = document.querySelector('.cls2')
        
        console.log(btn);
        
        if (isAuthenticated) {
        btn.classList.add('btn')
        btn2.classList.remove('btn2')
        }
        else{
        btn.classList.remove('btn')
        btn2.classList.add('btn2')
        }
    }
    
    // Call the function to hide buttons when the page loads
    window.addEventListener('load', hideLoginAndSignupButtons);

function logout(){

    isAuthenticated =false;
    console.log(isAuthenticated)
    
     
    if (isAuthenticated) {
        btn.classList.add('btn')
        btn2.classList.remove('btn2')
        }
        else{
        btn.classList.remove('btn')
        btn2.classList.add('btn2')
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('OrganizerId');
        // localStorage.removeItem('organizerId');
        // localStorage.removeItem('Organizer');
        window.location.href = "http://127.0.0.1:5501/public/home.html" 
        }

        localStorage.setItem('isAuthenticated', isAuthenticated);
}

function openSignupPage() {
    window.location.href = "http://127.0.0.1:5501/public/index.html"
}

function openLoginPage() {
    window.location.href = "http://127.0.0.1:5501/public/login.html"
}

//profile mate che jyare user login kare pacchi aavee che
document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');

    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
});


// function redirectprofile(){

// }