// BMI Progress Chart
const bmiCtx = document.getElementById('bmiChart').getContext('2d');
new Chart(bmiCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'BMI Progress',
            data: [22, 21.8, 21.5, 21.2],
            borderColor: 'var(--primary-color)',
            backgroundColor: 'rgba(0, 119, 182, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Calories Intake vs. Burn Chart
const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
new Chart(caloriesCtx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'Calories Intake',
                data: [2000, 2200, 2100, 2300, 2400],
                backgroundColor: 'var(--primary-color)'
            },
            {
                label: 'Calories Burned',
                data: [1800, 2000, 1900, 2100, 2200],
                backgroundColor: 'var(--accent-color)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Hydration Level Over Time Chart
const hydrationCtx = document.getElementById('hydrationChart').getContext('2d');
new Chart(hydrationCtx, {
    type: 'pie',
    data: {
        labels: ['Water', 'Other Beverages'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['var(--accent-color)', 'var(--highlight-color)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Heart Rate Trends Chart
const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
new Chart(heartRateCtx, {
    type: 'line',
    data: {
        labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
        datasets: [{
            label: 'Heart Rate (bpm)',
            data: [70, 75, 72, 68],
            borderColor: 'var(--primary-color)',
            backgroundColor: 'rgba(0, 119, 182, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Sleep Quality Analysis Chart
const sleepCtx = document.getElementById('sleepChart').getContext('2d');
new Chart(sleepCtx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Sleep Hours',
            data: [7, 6.5, 8, 7.5, 6],
            backgroundColor: 'var(--highlight-color)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Example: Update progress bars dynamically (if needed)
function updateReports() {
    const reports = [
        { label: 'Calories', value: 1800, change: 10, positive: true },
        { label: 'Water Intake', value: 2.5, change: -5, positive: false },
        { label: 'Sleep Hours', value: 7.5, change: 15, positive: true }
    ];

    const reportElements = document.querySelectorAll('.report');
    reportElements.forEach((reportElement, index) => {
        const report = reports[index];
        const progress = reportElement.querySelector('.progress');
        const change = reportElement.querySelector('.change');

        progress.style.width = `${Math.min(Math.max(report.value * 10, 0), 100)}%`;
        change.textContent = `${report.positive ? '⬆' : '⬇'} ${report.change}%`;
        change.classList.toggle('positive', report.positive);
        change.classList.toggle('negative', !report.positive);
    });
}

// Call the function to update reports
updateReports();
