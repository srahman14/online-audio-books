document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission initially

        let email = document.getElementById("email").value.trim();
        let email2 = document.getElementById("email_2").value.trim();
        let firstName = document.getElementById("fname").value.trim();
        let lastName = document.getElementById("lname").value.trim();

        let errorMessages = [];

        // Email validation (format check)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessages.push("- Please enter a valid email address.");
        }

        // Check if emails match
        if (email !== email2) {
            errorMessages.push("- Emails do not match.");
        }

        // First name & Last name validation (only letters)
        let namePattern = /^[A-Za-z]+$/;
        if (!namePattern.test(firstName)) {
            errorMessages.push("- First name must contain only letters.");
        }
        if (!namePattern.test(lastName)) {
            errorMessages.push("- Last name must contain only letters.");
        }

        // Display error messages if any
        let errorContainer = document.getElementById("error-messages");
        if (!errorContainer) {
            errorContainer = document.createElement("div");
            errorContainer.id = "error-messages";
            errorContainer.style.color = "red";
            errorContainer.style.fontWeight = "bold"
            errorContainer.style.border = "1px solid red"
            errorContainer.style.padding = "2em"
            errorContainer.style.marginTop = "20px"
            document.querySelector(".register-container").insertBefore(errorContainer, document.querySelector("hr"));
        }
        errorContainer.innerHTML = errorMessages.join("<br>");

        // If no errors, submit the form
        if (errorMessages.length === 0) {
            this.submit();
        }
    });
});
