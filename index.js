// Button sound effect (Unused for now)
const audio = new Audio();
audio.src = "./audio/Portal_button.mp3";

// users
document.addEventListener('DOMContentLoaded', function() {
    var users = {
        'CJohnson': 'TIER3',
        'GregS': 'P0ll75'
    };

// Login script
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Wrong username or password, please try again.';
    }
 });
});

