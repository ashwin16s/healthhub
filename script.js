// Login System
function login() {
    let username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("user", username);
        localStorage.setItem("progress", JSON.stringify([])); // Reset progress
        window.location.href = "dashboard.html";
    } else {
        alert("Enter your name!");
    }
}

// Track Progress
function markCompleted(section) {
    let progress = JSON.parse(localStorage.getItem("progress")) || [];
    if (!progress.includes(section)) {
        progress.push(section);
        localStorage.setItem("progress", JSON.stringify(progress));
    }
}

// Load User
function loadUser() {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('welcome').innerText = `Welcome, ${user}!`;
        loadProgress();
    } else {
        window.location.href = "auth.html";
    }
    // Ensure navigation and hero sections are loaded correctly
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href.includes('blood.html')) {
            link.style.display = 'block'; // Ensure Blood Compatibility link is visible
        }
    });
}

// Load Progress
function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('progress')) || [];
    const progressList = document.getElementById('progressList');
    if (progressList) {
        progressList.innerHTML = progress.map(item => `<li>${item} ✔</li>`).join("");
    }
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "auth.html"; // Redirect to login page
}

// BMI Calculation
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // Convert cm to m
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = `Your BMI: ${bmi}`;
}

// Hydration Check
function checkHydration() {
    let water = document.getElementById("water-intake").value;
    let result = water >= 2 ? "You're well hydrated!" : "Drink more water!";
    document.getElementById("hydration-result").innerText = result;
}

// Calorie Estimator
function calculateCalories() {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let activity = document.getElementById("activity").value;
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5; // Mifflin St Jeor Equation (Male)
    let calories = (bmr * activity).toFixed(2);
    document.getElementById("calorie-result").innerText = `Your daily calorie intake should be around ${calories} kcal.`;
}

// Heart Health Check
function checkHeartHealth() {
    let bpm = document.getElementById("heart-rate").value;
    let result = bpm >= 60 && bpm <= 100 ? "Normal Heart Rate" : "Consult a doctor!";
    document.getElementById("heart-result").innerText = result;
}

// Sleep Quality Analysis
function analyzeSleep() {
    let hours = document.getElementById("sleep-hours").value;
    let result = hours >= 7 ? "Good Sleep!" : "Try to sleep more!";
    document.getElementById("sleep-result").innerText = result;
}

// Quiz Check
function checkAnswer(answer) {
    let result = answer === 36.5 ? "Correct! 😊" : "Wrong! Try again.";
    document.getElementById("quiz-result").innerText = result;
}

// Removed dashboard chart initialization and related code
