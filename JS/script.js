// for contctus.html form validation and submission

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Email pattern check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success message
        alert("Thank you for contacting us! We will respond soon.");

        // Clear the form
        form.reset();
    });
});