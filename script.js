const questions = [
    {
        question: "1ª Quais são os passos básicos para instalar um sistema operacional em um computador?",
        answers: [
            { text: " a) Insira o disco de instalação e siga as instruções na tela.", correct: true },
            { text: "b) Baixe o instalador online e execute-o.", correct: false },
            { text: "c) Utilize um programa de virtualização para criar uma máquina virtual.", correct: false },
            { text: "d) Atualize automaticamente a partir das configurações do sistema.", correct: false }
        ]
    },
    {
        question: "2º Qual é a importância de conhecer as exigências do sistema operativo antes da instalação?",
        answers: [
            { text: " a) Apenas por curiosidade.", correct: false },
            { text: "b) Para garantir que o sistema operativo funcione corretamente no hardware disponível.", correct: true },
            { text: "c) Para aumentar a velocidade da instalação.", correct: false },
            { text: "d) As exigências do sistema não são relevantes.", correct: false }
        ]
    },
    {
        question: "3º Como é possível instalar um sistema operativo a partir de um dispositivo externo, como uma unidade USB?",
        answers: [
            { text: " a) Não é possível instalar a partir de dispositivos externos.", correct: false },
            { text: "b) Insira o dispositivo externo e o sistema operativo será instalado automaticamente. ", correct: false },
            { text: "c) Configure a ordem de inicialização no BIOS para iniciar a partir do dispositivo externo.", correct: true },
            { text: "d) Desconecte todos os periféricos antes de iniciar a instalação.", correct: false }
        ]
    },
    {
        question: "4º Por que é importante selecionar opções durante o processo de instalação do sistema operativo?",
        answers: [
            { text: " a) Para tornar a instalação mais demorada.", correct: false },
            { text: "b) As opções de instalação não têm impacto no sistema. ", correct: false },
            { text: "c) Para personalizar a instalação de acordo com as necessidades do usuário.", correct: true },
            { text: "d) A seleção de opções só é necessária para programadores.", correct: false }
        ]
    },
    {
        question: "5º O que envolve a definição de um plano de configuração de periféricos em um sistema operativo?",
        answers: [
            { text: " a) Ignorar completamente a configuração dos periféricos.", correct: false },
            { text: "b) Identificar os periféricos necessários e configurar seus drivers.", correct: true },
            { text: "c) Delegar a configuração para o usuário final.", correct: false },
            { text: "d) A configuração de periféricos não é necessária.", correct: false }
        ]
    },
    {
        question: "6º Por que é importante definir um modelo de logins em um sistema operativo?",
        answers: [
            { text: " a) Não é importante; qualquer login serve.", correct: false },
            { text: "b) Para complicar o acesso dos usuários.", correct: false },
            { text: "c) Para garantir a segurança e a identificação única de cada usuário.", correct: true },
            { text: "d) Modelos de login são exclusivos para sistemas operacionais de servidor.", correct: false }
        ]
    },
    {
        question: "7º Como podemos personalizar a configuração do sistema operativo para atender às necessidades específicas de cada usuário?",
        answers: [
            { text: " a) Não é possível personalizar a configuração.", correct: false },
            { text: "b) Crie um único perfil para todos os usuários. ", correct: false },
            { text: "c) Utilize as opções de personalização durante a instalação.", correct: true },
            { text: "d) A configuração do sistema não afeta as necessidades dos usuários.", correct: false }
        ]
    },
    {
        question: "8º Por que pode ser necessário realizar manutenção do sistema operativo através da alteração da configuração do equipamento?",
        answers: [
            { text: " a) A manutenção não é necessária.", correct: false },
            { text: "b) Para tornar o sistema operativo mais lento. ", correct: false },
            { text: "c) Para adaptar o sistema às mudanças de hardware.", correct: true },
            { text: "d) A configuração do equipamento não afeta a manutenção do sistema operativo.", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-container').classList.add('hide');
    document.getElementById('quiz-container').classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    const questionText = document.getElementById('question-text');
    const answerButtons = document.querySelectorAll('.answer-btn');

    questionText.innerText = questions[currentQuestionIndex].question;

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer.text;
        answerButtons[index].classList.remove('correct', 'incorrect');
        answerButtons[index].disabled = false;
        answerButtons[index].onclick = () => checkAnswer(answer, answerButtons[index]);
    });

    document.getElementById('next-btn').classList.add('hide');
}

function checkAnswer(selectedAnswer, clickedButton) {
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(button => {
        button.disabled = true;

        if (button === clickedButton) {
            if (selectedAnswer.correct) {
                button.classList.add('correct');
                score++;
            } else {
                button.classList.add('incorrect');
            }
        } else if (button.classList.contains('correct')) {
            button.classList.add('correct');
        }
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            buttons.forEach(button => {
                button.classList.remove('correct', 'incorrect');
                button.disabled = false;
            });
            showQuestion();
        }, 1000);
    } else {
        showResult();
    }

    document.getElementById('next-btn').classList.remove('hide');
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Pontuação Final: ${score} de ${questions.length}</h2>
                              <button id="restart-btn">Reiniciar Quiz</button>`;
    
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

document.addEventListener('DOMContentLoaded', function () {
    startQuiz();
});