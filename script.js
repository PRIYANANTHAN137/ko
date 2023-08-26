const Questions = [{
	q: "What does HTML stand for?",
	a: [{ text: "HyperText Markup Language", isCorrect: true },
	{ text: "HyperText Machine Language", isCorrect: false },
	{ text: "HyperText Marking Language", isCorrect: false },
	{ text: "HighText Marking Language", isCorrect: false }
	]

},
{
	q: "Which tag is used for inserting the largest heading in HTML?",
	a: [{ text: "head", isCorrect: false, isSelected: false },
	{ text: "<h1>", isCorrect: true },
	{ text: "<h6>", isCorrect: false },
	{ text: "heading", isCorrect: false }
	]

},
{
	q: "Which is used to create Web Pages ?",
	a: [{ text: "C++", isCorrect: false },
	{ text: "Java", isCorrect: false },
	{ text: "HTML", isCorrect: true },
	{ text: "JVM", isCorrect: false }
	]

},
{
	q: "Which is used to read an HTML page and render it?",
	a: [{ text: "C Web server++", isCorrect: false },
	{ text: "Web network", isCorrect: false },
	{ text: "Web browser", isCorrect: true },
	{ text: "Web matrix", isCorrect: false }
	]

},
{
	q: "HTML is a set of markup ___.",
	a: [{ text: "tags", isCorrect: true },
	{ text: "sets", isCorrect: false },
	{ text: "attributes", isCorrect: false },
	{ text: "none of the above", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0
let qno=1;

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}

function previous(){
	if(currQuestion==0)
	{
		currQuestion=0;
		loadQues();
	}
	else if(currQuestion<=Questions.length-1){
		currQuestion--;
		loadQues();
	}
}
function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("prev").remove()
		document.getElementById("next").remove()
		document.getElementById("submit").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}

