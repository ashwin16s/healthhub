document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const gender = document.getElementById('gender').value;

    if (age > 0 && weight > 0 && height > 0 && gender) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else if (bmi >= 30 && bmi <= 34.9) {
            category = 'Obesity Class I';
        } else if (bmi >= 35 && bmi <= 39.9) {
            category = 'Obesity Class II';
        } else {
            category = 'Obesity Class III';
        }

        document.getElementById('bmi-result').textContent = `Your BMI is ${bmi} (${category}). Age: ${age}, Gender: ${gender.charAt(0).toUpperCase() + gender.slice(1)}.`;
    } else {
        document.getElementById('bmi-result').textContent = 'Please enter valid age, weight, height, and select your gender.';
    }
});
