// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    // update the class for the input
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

const form = document.getElementById("login");

form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();
    console.log(form.elements["email"].value);
    console.log(form.elements["password"].value);

    if (form.elements["password"].value.length > 8 && validateEmail(form.elements["email"], "AN EMAIL IS REQUIRED", "INVALID EMAIL")) {
        const h1 = document.getElementById("h1");
        form.submit();
        h1.innerText = "You have successfully logged in.";
        h1.style.color = "green";
        h1.style.textAlign = "center";
        // TODO : Add in the redirect to the Home Page (pages/home.html) and display there account somewhere
    } else {
        const h1 = document.getElementById("h1");
        h1.innerText = "You have not been logged in. \nCheck that your password AND username are correct.";
        h1.style.color = "red"
        h1.style.textAlign = "center";
        // TODO : CLEAR the form
    }
    
});

