// Login Form Validation
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can extend this)
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate successful login (you can integrate backend later)
    alert('Logged in successfully');
});

// Signup Form Validation
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation (you can extend this)
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Simulate successful signup (you can integrate backend later)
    alert('Account created successfully');
});
