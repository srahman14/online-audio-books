document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        // Prevent form submission initially
        event.preventDefault(); 

        // Set the values of email, email2, firstname and lastname to be equal to the
        // inputted values in the form 
        let email = document.getElementById("email").value.trim();
        let email2 = document.getElementById("email_2").value.trim();
        let firstName = document.getElementById("fname").value.trim();
        let lastName = document.getElementById("lname").value.trim();

        // Set an array for error messages to hold errory messages
        let errorMessages = [];

        // Validation
        // if any of the validation does not meet, push the error to the error message array
        // which will be displayed 
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
        // If error container has any items
        if (!errorContainer) {
            // create a new element
            errorContainer = document.createElement("div");
            errorContainer.id = "error-messages";
            // styling of element
            errorContainer.style.color = "red";
            errorContainer.style.fontWeight = "bold"
            errorContainer.style.border = "1px solid red"
            errorContainer.style.padding = "2em"
            errorContainer.style.marginTop = "20px"
            // insert the element just before the container 
            document.querySelector(".register-container").insertBefore(errorContainer, document.querySelector("hr"));
        }
        // join each error message on a new line 
        errorContainer.innerHTML = errorMessages.join("<br>");

        // If no errors, submit the form
        if (errorMessages.length === 0) {
            this.submit();
        }
    });
});
