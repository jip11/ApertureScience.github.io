

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

// test.html things
function buffer() {
    const audio = new Audio();
    audio.src = "./audio/Portal_button.mp3";
    audio.play();
    let fName = document.getElementById('fname') 
    if(fName.value === ""){
        alert("FAAAAAAASZ")
    }
    else{
    document.getElementById('form-div').innerHTML = '<img src="./loading-load.gif"/>';
    setTimeout(()=>{
        document.getElementById('textcube').innerHTML =
        '<h1 id="error">ERROR 503! </h1>' + 
        '<h2 id="error">We are sorry, but it seems that this website is under maintenance. Please try again later!</h2>' +
        '<img src="Aperture_Science_logo_gray.png" alt="Aperture_Science_logo_gray" id="bottomlogo">'
    },10000);
    }
};