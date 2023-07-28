const questions = [

{

	question: "De qué color es Bob Esponja",
	options: ["Rojo", "Amarillo", "no tiene color", "Dorado"],
	correctAnswer: "Amarillo"
},
{

	question: "Qué lenguaje use para este juego",
	options: ["PHP", "JAVA", "Phyton", "Javascript"],
	correctAnswer: "Javascript"
},

{

	question: "Quién es el elegido en Star Wars",
	options: ["Anakin", "Leia", "Ray", "Luke"],
	correctAnswer: "Anakin"
},
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function showQuestion() {

if (currentQuestionIndex < questions.length) {
	const currentQuestion = questions[currentQuestionIndex];
	questionElement.innerHTML = currentQuestion.question;


	optionsElement.innerHTML = "";
	currentQuestion.options.forEach((option) =>{

		const button = document.createElement("button");
		button.innerText = option;
		button.addEventListener("click", checkAnswer);
		optionsElement.appendChild(button);
	});


} else{
	showScore();
}
}

function checkAnswer(event) {
 const selectedOption = event.target.innerHTML
 const currentQuestion = questions[currentQuestionIndex];

if (selectedOption === currentQuestion.correctAnswer) {
	score++
}
currentQuestionIndex++;
showQuestion();

}

function showScore() {
		
		questionElement.innerText = "Trivia Completadaaa";
		optionsElement.style.display = "none"
		scoreElement.innerText = `Tu puntuaje es ${score} de ${questions.length}`;

}

const playAgainButton = document.getElementById("play-again");

function resetGame() {
	currentQuestionIndex = 0;
	score = 0;
	showQuestion();
	optionsElement.style.display = "block";
	scoreElement.innerText = "";
	playAgainButton.style.display = "none";

}

function showScore() {

	questionElement.innerText = "Trivia completada!!";
	optionsElement.style.display = "none";
	scoreElement.innerText = `Tu puntuaje es ${score} de ${questions.length}`;
	playAgainButton.style.display = "block"
}
playAgainButton.addEventListener("click", resetGame);

showScore();