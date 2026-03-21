// Save the form data into the constant variables
const form = document.getElementById("registrationForm");
const firstName = document.getElementById("fname");
const firstNameFeedback = document.getElementById("fnameFeedback");

const lastName = document.getElementById("lname");
const lastNameFeedback = document.getElementById("lnameFeedback");

const email = document.getElementById("email");
const emailFeedback = document.getElementById("emailFeedback");

const password = document.getElementById("password");
const passwordFeedback = document.getElementById("passwordFeedback");

const confirmPassword = document.getElementById("confirm_password");
const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");

const statusRadios = document.querySelectorAll('input[name="research"]');
const statusError = document.getElementById("statusError");
const terms = document.getElementById("check");
const termsError = document.getElementById("termsError");
const passwordPattern = /^(?=.*\d)[A-Za-z\d]{7,12}$/;

// returns false if the input is empty, otherwise true. It also adds or removes the "input_error" class to visually indicate the error state of the input field.
function validateEmpty(element) {
    if (element.value.trim() === "") {
        element.classList.add("invalid-feedback");
        element.classList.remove("valid-feedback");
        // element.classList.add("input_error");
        return false;
    } else {
        element.classList.remove("invalid-feedback");
        element.classList.add("valid-feedback");

        // element.classList.remove("input_error");
        // element.classList.add("is-valid");
        return true;
    }
}

function validate(event) {
    var validating_elements = [firstName, lastName, email, password, confirmPassword];
    var element_valid = []; 

    // for (let element of validating_elements) {
    //     let valid = validateEmpty(element);
    //     element_valid.push(valid);
    // }

    // First Name validation
    let valid = true;
    if (firstName.value.trim() === "") {
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");

        firstNameFeedback.classList.add("invalid-feedback");
        firstNameFeedback.classList.remove("valid-feedback");
        firstNameFeedback.textContent = "First name cannot be empty";

        valid = false;
    } else {
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");

        firstNameFeedback.classList.remove("invalid-feedback");
        firstNameFeedback.classList.add("valid-feedback");
        firstNameFeedback.textContent = "Looks good!";
    }

    // Last Name validation
    if (lastName.value.trim() === "") {
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");

        lastNameFeedback.classList.add("invalid-feedback");
        lastNameFeedback.classList.remove("valid-feedback");
        lastNameFeedback.textContent = "Last name cannot be empty";

        valid = false;
    } else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");

        lastNameFeedback.classList.remove("invalid-feedback");
        lastNameFeedback.classList.add("valid-feedback");
        lastNameFeedback.textContent = "Looks good!";
        // lastName.classList.remove("input_error");
    }

    // Email validation
    if (email.value.trim() === "") {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");

        emailFeedback.classList.add("invalid-feedback");
        emailFeedback.classList.remove("valid-feedback");
        emailFeedback.textContent = "Email cannot be empty";

        valid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");

        emailFeedback.classList.remove("invalid-feedback");
        emailFeedback.classList.add("valid-feedback");
        emailFeedback.textContent = "Looks good!";
    }

    // Password validation
       if (password.value.trim() === "") {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");

        passwordFeedback.classList.add("invalid-feedback");
        passwordFeedback.classList.remove("valid-feedback");
        passwordFeedback.textContent = "Password cannot be empty";

        valid = false;
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");

        passwordFeedback.classList.remove("invalid-feedback");
        passwordFeedback.classList.add("valid-feedback");
        passwordFeedback.textContent = "Looks good!";
    }

    // Confirm Password validation
    if (confirmPassword.value.trim() === "") {
        confirmPassword.classList.add("is-invalid");
        confirmPassword.classList.remove("is-valid");

        confirmPasswordFeedback.classList.add("invalid-feedback");
        confirmPasswordFeedback.classList.remove("valid-feedback");
        confirmPasswordFeedback.textContent = "Please confirm your password";

        valid = false;
    } else {
        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");

        confirmPasswordFeedback.classList.remove("invalid-feedback");
        confirmPasswordFeedback.classList.add("valid-feedback");
        confirmPasswordFeedback.textContent = "Looks good!";
    }        

    // Radio buttons
    let statusSelected = false;
    statusRadios.forEach(radio => {
        if (radio.checked) statusSelected = true;   
    });
    if (!statusSelected) {
        statusError.classList.remove("d-none");
        valid = false;
    } else {
        statusError.classList.add("d-none");
    }
    // Terms checkbox
    if (!terms.checked) {
        termsError.classList.remove("d-none");
        valid = false;
    } else {
        termsError.classList.add("d-none");
    }

    if (!valid) {
        event.preventDefault();
        return;
    } else {
        alert("Form submitted successfully!");
    }
 
}
//When the form is submitted, it triggers the validation process
form.addEventListener("submit", validate);