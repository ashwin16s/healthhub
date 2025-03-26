document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && email && password.length >= 8) { // Password validation
        // Simulate login validation (replace with actual backend validation if needed)
        const validCredentials = [
            { email: "test@example.com", password: "password123" },
            { email: "user@example.com", password: "userpass" },
            { email: "ag0380@srmist.edu.in", password: "Nivrithi" } // New user credentials
        ];

        const isValid = validCredentials.some(
            (cred) => cred.email === email && cred.password === password
        );

        if (isValid) {
            localStorage.setItem('user', username); // Store username
            alert(`Welcome, ${username}!`);
            window.location.href = "dashboard.html"; // Redirect to the dashboard
        } else {
            alert("Invalid credentials. Please check your email and password.");
        }
    } else {
        alert("Password must be at least 8 characters long.");
    }
});
