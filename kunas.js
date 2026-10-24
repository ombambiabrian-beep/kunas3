const joinButton = document.getElementById("joinButton");

const welcomeBox = document.getElementById("welcomeBox");
const loginBox = document.getElementById("loginBox");
const backButtons = document.getElementById("backButtons");
const guestPagex = document.getElementById("guestPagex");
const backButton = document.getElementById("backButton");
const loginButton1 = document.getElementById("loginButton1");

joinButton.addEventListener("click", function() {

    welcomeBox.style.display = "none";
    loginBox.style.display = "block";

});
const guestButton = document.getElementById("guestButton");
guestButton.addEventListener("click", function() {

    welcomeBox.style.display = "none";
    guestPagex.style.display = "block";
});
backButton.addEventListener("click", function() {

    guestPagex.style.display = "none";
    welcomeBox.style.display = "block";
});
backButtons.addEventListener("click", function() {

    loginBox.style.display = "none";
    welcomeBox.style.display = "block";});

loginButton1.addEventListener("click", function () {

    const regNo = document.getElementById("regNo").value;
    const password = document.getElementById("password").value;

    if (regNo =="x"&& password =="1") {

        alert("Login successful!")

        window.location.href = "home.html";

    } else {

        alert("Invalid registration number or password");

    }
});
