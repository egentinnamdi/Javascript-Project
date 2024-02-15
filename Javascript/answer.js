const displayScore = document.querySelector(".display");
const correction = document.querySelector(".correction");
const retrieveScore = JSON.parse(localStorage.getItem("rememberData"));
const retrieveQuestions = JSON.parse(localStorage.getItem("questions"));
let totalPoints = retrieveQuestions.reduce(
  (initial, question) => initial + question.points,
  0
);

let newScore = retrieveScore[retrieveScore.length - 1]?.score;
newScore = ` You Scored ${
  !newScore ? 0 : newScore.reduce((initial, point) => initial + point, 0)
} / ${totalPoints}`;

displayScore.textContent = newScore;

retrieveScore.forEach((score) => {
  if (score === null) {
    correction.innerHTML += `<span class="no-answer">No Answer</span>`;
  } else {
    const { id, index } = score;
    const { options, correctAnswer } = retrieveQuestions.at(index);

    correction.innerHTML += `<span class=${
      id === correctAnswer ? "correct" : "wrong"
    }>${index + 1} ${options[id]}</span>`;
  }
});
