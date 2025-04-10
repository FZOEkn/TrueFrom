document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username_input = document.getElementById('username-input');
    const email_input = document.getElementById('email-input');
    const password_input = document.getElementById('password-input');
    const repeat_password_input = document.getElementById('repeat-password-input');
    const error_message = document.getElementById('error-message');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // Reset error classes and message
        error_message.textContent = '';
        [username_input, email_input, password_input, repeat_password_input].forEach(input => {
            input.parentElement.classList.remove('incorrect');
        });

        let errors = [];
        if (username_input.value) {
            errors = getSignupFormErrors(username_input.value, email_input.value, password_input.value, repeat_password_input.value);
        } else { 
            errors = getLoginFormErrors(email_input.value, password_input.value);
        }

        if (errors.length > 0) {
            // Display error message
            error_message.textContent = errors.join(', ');
            return; // Prevent form submission
        }

        // Proceed with form submission if no errors
        // form.submit(); // Uncomment this to actually submit the form after validation
    });
});

function getSignupFormErrors(username, email, password, repeatPassword) {
    let errors = [];

    if (username === '' || username === null) {
        errors.push('Username is required');
        username_input.parentElement.classList.add('incorrect');
    }
    if (email === '' || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push('Passwords do not match');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if (email === '' || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    
    return errors;
}
