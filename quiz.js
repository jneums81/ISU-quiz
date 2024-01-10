const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    startQuiz(); // Call the function that resets the quiz
}

const questions = [
    {
        question: 'Who was Mr. Irrelevant in the 2022 NFL Draft?',
        options: ['Seneca Wallace', 'Brock Purdy', 'Hunter Dekkers', 'Breece Hall'],
        correctAnswer: 'Brock Purdy',
    },
    {
        question: 'What NBA player got traded from the Kings to the Pacers in 2022?',
        options: ['Tyrese Haliburton', 'Monte Morris', 'Georges Niang', 'Matt Thomas'],
        correctAnswer: 'Tyrese Haliburton',
    },
    {
        question: 'Iowa State Football has upset 3 Top 10 teams at home in the last 6 years: TCU, West Virginia, and what other school in 2021?',
        options: ['Oklahoma', 'Texas', 'Baylor', 'Oklahoma State'],
        correctAnswer: 'Oklahoma State',
    },
    {
        question: 'What 2 teams did Iowa State Basketball upset in the 2022 NCAA tournament?',
        options: ['LSU and Wisconsin', 'Baylor and Michigan State', 'Arizona and Purdue', 'Kansas State and North Carolina'],
        correctAnswer: 'LSU and Wisconsin',
    },
];

startQuiz();