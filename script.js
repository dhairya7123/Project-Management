document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Demo credentials
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        message.style.color = "green";
        message.textContent = "Login Successful!";

        // Redirect after 1 second (optional)
        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password";
    }
});