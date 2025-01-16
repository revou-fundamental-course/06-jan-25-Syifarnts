// Ini file javascript

//Welcome speech
function replaceName() {
    let greeting = prompt("Please enter your name"," ");
    document.getElementById("greeting").innerHTML = greeting;
}

replaceName();

// Function to validate form
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Form must be filled");
        return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);
    return false;    
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    }

// Function to change background banner
let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;
    changeBackground();
}

function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    
    if (indexBanner > bannerList.length - 1) {
        // Reset indexBanner
        indexBanner = 0;
    }

// Looping to change background
for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = 'none';
}

bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);