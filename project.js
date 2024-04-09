document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');

    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
});

function findstu(){
            window.location.href = "http://127.0.0.1:5501/public/stucard1.html" 
}
function redirecthome(){
            window.location.href = "http://127.0.0.1:5501/public/home.html" 
}
function findevent(){
            window.location.href = "http://127.0.0.1:5501/public/eventpage.html" 
}


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
        window.location.href = "http://127.0.0.1:5501/public/home.html" 
        }

        localStorage.setItem('isAuthenticated', isAuthenticated);
}