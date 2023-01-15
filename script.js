const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".submit-button");

inputs.forEach((input) => {
    input.addEventListener("keyup", checkValidity);
});

function checkValidity() {
    const errorClass = (this.id === "confirm-password") ? `.password-error` : `.${this.id}-error`;
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