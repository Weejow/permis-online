const questions = [
  {
    question: "Que signifie un panneau rond rouge avec une barre blanche horizontale ?",
    options: ["Interdiction d'entrer", "Cédez le passage", "Attention travaux"],
    answer: "Interdiction d'entrer"
  },
  {
    question: "Quelle est la vitesse maximale sur une autoroute en France ?",
    options: ["110 km/h", "130 km/h", "150 km/h"],
    answer: "130 km/h"
  },
  {
    question: "Quand doit-on utiliser les feux de brouillard arrière ?",
    options: ["Par temps de pluie", "Par temps de brouillard épais", "De nuit en ville"],
    answer: "Par temps de brouillard épais"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next');

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    let button = document.createElement('button');
    button.innerText = option;
    button.onclick = () => checkAnswer(option);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    resultEl.innerText = "Bonne réponse !";
  } else {
    resultEl.innerText = "Mauvaise réponse !";
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    resultEl.innerText = "";
  } else {
    questionEl.innerText = "Fin du test !";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion();