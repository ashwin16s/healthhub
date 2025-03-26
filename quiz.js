document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const answers = {
        question1: '8',
        question2: '7',
        question3: '4',
        question4: 'meat',
        question5: '5',
        question6: '19',
        question7: '30',
        question8: 'calcium'
    };

    let score = 0;
    const formData = new FormData(e.target);

    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    document.getElementById('quiz-result').textContent = `You scored ${score}/8 points!`;
});
