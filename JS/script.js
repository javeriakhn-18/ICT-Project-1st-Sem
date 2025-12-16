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

// for menu.html active item highlighting
        document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(i => i.classList.remove("active-item"));
            item.classList.add("active-item");
        });
    });
});
// for reservation.html form validation and submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".reservation form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const partySize = document.getElementById("party-size").value;

        // Empty field check
        if (!name || !email || !date || !time || !partySize) {
            alert("Please fill out all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Date validation (cannot reserve in the past)
        const today = new Date();
        const selectedDate = new Date(date);
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("You cannot select a past date for a reservation.");
            return;
        }

        // Success message
        alert(
            "Reservation Confirmed!\n\n" +
            "Name: " + name + "\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n" +
            "Party Size: " + partySize + "\n\n" +
            "Thank you for choosing Zest Family Kitchen!"
        );

        form.reset(); // clear form
    });
});
