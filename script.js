const inputs = document.querySelectorAll("input");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".submit-button");

inputs.forEach((input) => {
    input.addEventListener("keyup", checkValidity);
});

function checkValidity() {
    let errorClass;
    if (this.id === "confirm-password") {
        errorClass = `.password-error`;
    } else {
        errorClass = `.${this.id}` + `-error`;
    }
    const errorMessage = document.querySelector(errorClass);
    if (!this.validity.valid || isBadPasswordMatch()) {
        errorMessage.style.visibility = "visible";
        submitButton.disabled = true;
    } else {
        errorMessage.style.visibility = "hidden";
        submitButton.disabled = false;
    }
}

function isBadPasswordMatch() {
    return password.value !== passwordConfirm.value;
}

