const questions = [
    {
        question: "What is the energy of a particle with mass 2 kg moving at the speed of light? Use E=mc^2 (c=3x10^8 m/s)",
        answer: "1.8e17",  // Energy in Joules
    },
    {
        question: "If a spaceship travels at 0.8c, what is the Lorentz factor (γ)?",
        answer: "1.6667",  // Lorentz factor γ = 1 / sqrt(1 - v^2/c^2)
    },
    {
        question: "What is the contracted length of a 100m object moving at 0.6c? Use L=L0*sqrt(1-v^2/c^2)",
        answer: "80",  // Length contraction in meters
    },
    {
        question: "If an observer on Earth sees a clock on a spaceship moving at 0.9c, what is the time dilation factor?",
        answer: "2.294",  // Time dilation factor γ = 1 / sqrt(1 - v^2/c^2)
    },
    {
        question: "If two objects move toward each other at 0.7c and 0.8c, what is their relative velocity? Use the relativistic velocity addition formula.",
        answer: "0.9677c",  // Relative velocity in terms of c
    }
];

let currentQuestionIndex = 0;

const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const submitAnswerButton = document.getElementById('submitAnswerButton');
const feedback = document.getElementById('feedback');
const startButton = document.getElementById('startButton');

function startQuiz() {
    currentQuestionIndex = 0;
    askQuestion();
    startButton.style.display = 'none';
    submitAnswerButton.style.display = 'inline-block';
    answerInput.style.display = 'inline-block';
}

function askQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    answerInput.value = '';
    feedback.innerHTML = '';
}

function checkAnswer() {
    let userAnswer = answerInput.value.trim().toLowerCase();
    let correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = `Wrong! The correct answer is: ${questions[currentQuestionIndex].answer}`;
        feedback.style.color = "red";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(askQuestion, 2000);  // Move to the next question after 2 seconds
    } else {
        setTimeout(endQuiz, 2000);
    }
}

function endQuiz() {
    questionText.innerHTML = "Quiz Finished! Press Start to play again.";
    feedback.innerHTML = '';
    startButton.style.display = 'inline-block';
    submitAnswerButton.style.display = 'none';
    answerInput.style.display = 'none';
}

startButton.addEventListener('click', startQuiz);
submitAnswerButton.addEventListener('click', checkAnswer);
