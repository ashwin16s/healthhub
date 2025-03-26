document.getElementById('blood-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const donor = document.getElementById('donor-blood-type').value;
    const recipient = document.getElementById('recipient-blood-type').value;

    const compatibility = {
        'A+': ['A+', 'AB+'],
        'A-': ['A+', 'A-', 'AB+', 'AB-'],
        'B+': ['B+', 'AB+'],
        'B-': ['B+', 'B-', 'AB+', 'AB-'],
        'AB+': ['AB+'],
        'AB-': ['AB+', 'AB-'],
        'O+': ['A+', 'B+', 'AB+', 'O+'],
        'O-': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    };

    const result = compatibility[donor]?.includes(recipient)
        ? `Compatible! ${donor} can donate to ${recipient}.`
        : `Not Compatible! ${donor} cannot donate to ${recipient}.`;

    document.getElementById('compatibility-result').textContent = result;
});
