document.getElementById('hydration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const waterIntake = parseFloat(document.getElementById('water-intake').value);
    const exerciseDuration = parseFloat(document.getElementById('exercise-duration').value);
    const caffeineIntake = parseFloat(document.getElementById('caffeine-intake').value);
    const fruitsVegetables = parseFloat(document.getElementById('fruits-vegetables').value);
    const sleepHours = parseFloat(document.getElementById('sleep-hours').value);

    if (gender && weight > 0 && waterIntake >= 0 && exerciseDuration >= 0 && caffeineIntake >= 0 && fruitsVegetables >= 0 && sleepHours >= 0) {
        const recommendedIntake = gender === 'male' ? weight * 0.04 : weight * 0.035; // 40ml/kg for males, 35ml/kg for females
        const hydrationStatus = waterIntake >= recommendedIntake ? 'sufficient' : 'insufficient';

        // Calculate points
        let score = 0;
        if (waterIntake >= recommendedIntake) score += 2;
        if (exerciseDuration >= 30) score += 2;
        if (caffeineIntake <= 2) score += 1;
        if (fruitsVegetables >= 5) score += 2;
        if (sleepHours >= 7) score += 2;

        document.getElementById('hydration-result').textContent = `Your water intake is ${hydrationStatus}. Recommended: ${recommendedIntake.toFixed(2)} liters.`;
        document.getElementById('hydration-score').textContent = `Your hydration score is: ${score}/9.`;
    } else {
        document.getElementById('hydration-result').textContent = 'Please fill out all fields with valid values.';
        document.getElementById('hydration-score').textContent = '';
    }
});
