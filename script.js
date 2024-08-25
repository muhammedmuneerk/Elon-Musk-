const form = document.getElementById("contactform");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "33fd254f-3ad3-41f0-9307-94c41e564d79",
        To : 'muhammedmuneerk15@gmail.com',
        From : "muhammedmuneerk15@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const fields = [fullName, email, phone, subject, mess];

    fields.forEach((field) => {
        if (field.value.trim() === "") {
            field.classList.add("error");
            field.nextElementSibling.innerText = `${field.placeholder} can't be blank`;
        } else {
            field.classList.remove("error");
            field.nextElementSibling.innerText = "";
        }
    });

    checkEmail();
}

function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorTextEmail = document.querySelector(".error-text.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        errorTextEmail.innerText = "Enter a valid email address";
    } else {
        email.classList.remove("error");
        errorTextEmail.innerText = "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (![...form.querySelectorAll(".error")].length) {
        sendEmail();
        form.reset();
    }
});
