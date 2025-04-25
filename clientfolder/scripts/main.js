document.addEventListener("DOMContentLoaded", function() {
    let form = document.createElement("form");
    form.setAttribute("id", "volunteerForm");
    form.setAttribute("action", "submit_form.php");
    form.setAttribute("method", "POST");

    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "fullName");
    nameLabel.textContent = "Full Name:";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "fullName");
    nameInput.setAttribute("name", "fullName");
    nameInput.required = true;

    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.required = true;

    let ageLabel = document.createElement("label");
    ageLabel.setAttribute("for", "age");
    ageLabel.textContent = "Age:";
    let ageInput = document.createElement("input");
    ageInput.setAttribute("type", "number");
    ageInput.setAttribute("id", "age");
    ageInput.setAttribute("name", "age");
    ageInput.required = true;

    let messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Why do you want to volunteer?";
    let messageTextArea = document.createElement("textarea");
    messageTextArea.setAttribute("id", "message");
    messageTextArea.setAttribute("name", "message");
    messageTextArea.required = true;

    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("type", "submit");

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(ageLabel);
    form.appendChild(ageInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextArea);
    form.appendChild(submitButton);

    document.querySelector("main").appendChild(form);
});
