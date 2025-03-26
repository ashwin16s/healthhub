document.getElementById('heart-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const activeRate = parseFloat(document.getElementById('active-heart-rate').value);

    if (age > 0 && activeRate > 0) {
        const maxHeartRate = 220 - age;
        const targetMin = Math.round(maxHeartRate * 0.5);
        const targetMax = Math.round(maxHeartRate * 0.85);

        let analysis = `Your target heart rate zone is ${targetMin}-${targetMax} bpm.`;

        if (activeRate >= targetMin && activeRate <= targetMax) {
            analysis += ' Your active heart rate is within the target zone.';
        } else if (activeRate > targetMax) {
            analysis += ' Your active heart rate is above the target zone. Consider slowing down.';
        } else {
            analysis += ' Your active heart rate is below the target zone. Consider increasing intensity.';
        }

        document.getElementById('heart-result').textContent = analysis;

        // Update visual indicator with color
        const indicatorBar = document.createElement('div');
        indicatorBar.classList.add('indicator-bar');

        if (activeRate >= targetMin && activeRate <= targetMax) {
            indicatorBar.style.backgroundColor = 'var(--accent-color)'; // Green
        } else if (activeRate > targetMax) {
            indicatorBar.style.backgroundColor = 'var(--highlight-color)'; // Yellow
        } else {
            indicatorBar.style.backgroundColor = '#e63946'; // Red
        }

        indicatorBar.style.width = `${Math.min((activeRate / maxHeartRate) * 100, 100)}%`;

        const heartIndicator = document.getElementById('heart-indicator');
        heartIndicator.innerHTML = ''; // Clear previous indicator
        heartIndicator.appendChild(indicatorBar);
    } else {
        document.getElementById('heart-result').textContent = 'Please enter valid age and active heart rate.';
    }
});
