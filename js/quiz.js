const quizData = [
  {
    question: "What is the closest planet to the Sun?",
    options: ["Earth", "Mercury", "Venus", "Jupiter"],
    answer: "Mercury",
  },
  {
    question: "What is the name of our galaxy?",
    options: ["Milky Way", "Whirlpool", "Sombrero", "Andromeda"],
    answer: "Milky Way",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Venus", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Clear previous options
  optionsEl.innerHTML = "";

  // Render options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(button));
    optionsEl.appendChild(button);
  });

  nextBtn.disabled = true;
}

function selectOption(selectedButton) {
  const options = document.querySelectorAll(".option");

  // Disable all options after one is clicked
  options.forEach((option) => {
    option.disabled = true;
  });

  const correctAnswer = quizData[currentQuestionIndex].answer;
  
  // Check if the selected option is correct
  if (selectedButton.textContent === correctAnswer) {
    selectedButton.style.backgroundColor = "green"; // Correct answer
    score++; // Increment score for correct answer
  } else {
    selectedButton.style.backgroundColor = "red"; // Incorrect answer
  }

  // Highlight the correct answer if the user selects the wrong one
  options.forEach((option) => {
    if (option.textContent === correctAnswer && option !== selectedButton) {
      option.style.backgroundColor = "green"; // Correct answer
    }
  });

  nextBtn.disabled = false; // Enable the next button
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizBox.style.display = "none";
  scoreBox.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Load the first question on page load
loadQuestion();
