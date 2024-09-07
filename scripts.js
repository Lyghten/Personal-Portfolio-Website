document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(() => {
            document.getElementById('response').innerText = 'Your message has been sent successfully!';
            form.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            document.getElementById('response').innerText = 'There was an error sending your message.';
        });
});