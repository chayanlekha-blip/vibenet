// Temporary user database (array)
const users = [];

// ========== SIGNUP ==========
function signup() {
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (username === "" || password === "") {
        showMsg("Please fill all fields!", "red");
        return;
    }

    // Check if user already exists
    for (const user of users) {
        if (user.username === username) {
            showMsg("User already exists!", "orange");
            return;
        }
    }

    // Add new user
    users.push({ username, password });
    showMsg("Signup successful! 🎉", "lime");
    console.log(users);
}



// ========== LOGIN ==========
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            showMsg("Login successful! 😎", "skyblue");
            return;
        }
    }

    showMsg("Invalid username or password ❌", "red");
}



// ========== SHOW MESSAGE ==========
function showMsg(text, color) {
    const msg = document.getElementById("authMessage");
    msg.textContent = text;
    msg.style.color = color;
}
