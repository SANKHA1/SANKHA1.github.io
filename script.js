// JavaScript code for handling form submission (you can extend this as needed)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // You can add code here to handle form submission, such as sending an email or storing data.

        // Example: Show a success message
        alert('Message sent successfully!');
        form.reset();
    });
});
