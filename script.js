const questions = [
    {
        question: "1ª Quais são os passos básicos para instalar um sistema operacional em um computador?",
        answers: [
            { text: " a)Insira o disco de instalação e siga as instruções na tela.", correct: false },
            { text: "b) Baixe o instalador online e execute-o.", correct: false },
            { text: "c) Utilize um programa de virtualização para criar uma máquina virtual.", correct: true },
            { text: "d) Atualize automaticamente a partir das configurações do sistema.", correct: false }
        ]
    },
    
    {
        question: "",
        answers: [
            { text: " a).", correct: false },
            { text: "b) ", correct: false },
            { text: "c)", correct: true },
            { text: "d)", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.getElementById('next-btn');

startQuiz();

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionText.innerText = question.question;

    question.answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer.text;
        answerButtons[index].onclick = () => checkAnswer(answer);
    });

    nextButton.classList.add('hide');
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer.correct) {
        // Resposta correta, faça algo se desejar
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Quiz concluído, faça algo se desejar
        nextButton.innerText = 'Reiniciar Quiz';
        nextButton.onclick = () => {
            currentQuestionIndex = 0;
            startQuiz();
        };
    }

    nextButton.classList.remove('hide');
}
