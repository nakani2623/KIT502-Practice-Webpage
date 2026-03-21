// Save the form data into the constant variables
const form = document.getElementById("registrationForm");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const statusRadios = document.querySelectorAll('input[name="research"]');
const statusError = document.getElementById("statusError");
const terms = document.getElementById("check");
const termsError = document.getElementById("termsError");
const passwordPattern = /^(?=.*\d)[A-Za-z\d]{7,12}$/;

// returns false if the input is empty, otherwise true. It also adds or removes the "input_error" class to visually indicate the error state of the input field.
function validateEmpty(element) {
    if (element.value.trim() === "") {
        element.classList.add("is-invalid");
        element.classList.add("input_error");
        return false;
    } else {
        element.classList.remove("is-invalid");
        element.classList.remove("input_error");
        element.classList.add("is-valid");
        return true;
    }
}

function validate(event) {
    var validating_elements = [firstName, lastName, email, password, confirmPassword];
    var element_valid = []; 

    for (let element of validating_elements) {
        let valid = validateEmpty(element);
        element_valid.push(valid);
    }

    // debug
    for (let element of element_valid) {
        console.log(element);
    }

    if (!element_valid.every(value => value === true))
        event.preventDefault();
        

    console.log("Validation complete. Form is valid:", valid);
    // // Radio buttons
    // let statusSelected = false;
    // statusRadios.forEach(radio => {
    //     if (radio.checked) statusSelected = true;   
    // });
    // if (!statusSelected) {
    //     statusError.classList.remove("d-none");
    //     valid = false;
    // } else {
    //     statusError.classList.add("d-none");
    // }
    // Terms checkbox
    // if (!terms.checked) {
    //     termsError.classList.remove("d-none");
    //     valid = false;
    // } else {
    //     termsError.classList.add("d-none");
    // }
    // // Stop submit if any validation failed
    // if (!valid) {
    //     event.preventDefault();
    // }
}
//When the form is submitted, it triggers the validation process
form.addEventListener("submit", validate);