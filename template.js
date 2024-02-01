// Reset Local Storage
localStorage.setItem("rememberData", JSON.stringify([]));

// Local Storage Retrieve Data
const questionData = JSON.parse(localStorage.getItem("questions"));

// DOM Selections && Variables
const template = document.querySelector(".section");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const footer = document.querySelector(".footer");
const timer = document.querySelector(".timer");
const count = document.querySelector(".count");
let setTimer = questionData.length * 30;
let index = 0;
let rememberData = [];
let totalPoints = questionData.reduce(
  (initial, question) => initial + question.points,
  0
);
let score = [];

// Template and Data Processor
function processTemplate(dataItem, temp, i) {
  const [opt1, opt2, opt3, opt4] = dataItem.options;
  let output = temp.replace("%QUESTION%", dataItem.question);
  output = output.replace("%NUMBER%", i + 1);
  output = output.replace("%OPT1%", opt1);
  output = output.replace("%OPT2%", opt2);
  output = output.replace("%OPT3%", opt3);
  output = output.replace("%OPT4%", opt4);
  return output;
}

// Output
const processedArr = questionData.map((question, index) => {
  return processTemplate(question, template.innerHTML, index);
});
template.innerHTML = processedArr.at(index);
count.textContent = `${index + 1} / ${questionData.length}`;
update();

// Event Handler Functions
function handleNext() {
  const retrieveData = JSON.parse(localStorage.getItem("rememberData"));
  if (index === processedArr.length - 1) {
    const retrievedscore = retrieveData[retrieveData.length - 1]?.score;
    template.innerHTML = `<h1>You Have Successfully Submitted.<br>You scored ${
      retrievedscore
        ? retrievedscore.reduce((initial, point) => initial + point, 0)
        : 0
    } / ${totalPoints}</h1>`;
    footer.innerHTML = "";
    localStorage.setItem("rememberData", JSON.stringify([]));
  } else {
    index++;
    btnNext.textContent = `${
      index === processedArr.length - 1 ? "Finish" : "Next"
    }`;

    template.innerHTML = processedArr.at(index);
    count.textContent = `${index + 1} / ${questionData.length}`;
    update();
    updateData();
  }
}

function handlePrevious() {
  if (index === 0) return;
  index--;
  btnNext.textContent = `${index < processedArr.length - 1 && "Next"}`;
  template.innerHTML = processedArr.at(index);
  count.textContent = `${index + 1} / ${questionData.length}`;
  update();
  updateData();
}

function handleAnswer(e) {
  const options = document.querySelectorAll(".options button");
  const correctOption = questionData.at(index).correctAnswer;
  const points = questionData.at(index).points;

  if (e.target.className === "choosen") {
    e.target.classList.remove("choosen");
    rememberData[index] = null;
    localStorage.setItem("rememberData", JSON.stringify(rememberData));
  } else {
    rememberData[index] = { id: +e.target.id, index };
    options.forEach((option, i) => {
      i === +e.target.id
        ? option.classList.add("choosen")
        : option.classList.remove("choosen");
    });

    if (correctOption === +e.target.id) {
      score[index] = points;
      rememberData = rememberData.map((data) => ({ ...data, score }));
      localStorage.setItem("rememberData", JSON.stringify(rememberData));
    } else {
      score[index] = 0;
      rememberData = rememberData.map((data, i) => {
        return index === i ? { ...data, score } : { ...data, score: 0 };
      });
      localStorage.setItem("rememberData", JSON.stringify(rememberData));
    }
  }
}

// Utility Functions
function update() {
  const options = document.querySelectorAll(".options button");
  options.forEach((option, i) => {
    option.addEventListener("click", handleAnswer);
  });
}

function updateData() {
  const retrieveData = JSON.parse(localStorage.getItem("rememberData"));
  retrieveData.forEach((tbd) => {
    if (!tbd) return;
    if (index === tbd.index) {
      const options = document.querySelectorAll(".options button");
      options.forEach((option, i) => {
        i === tbd.id ? (option.className = "choosen") : null;
      });
    }
  });
}

// Timer
setInterval(() => {
  if (setTimer === 0) {
    template.innerHTML = "<h1>Your Time Has Elapsed</h1>";
    footer.innerHTML = "";
  } else {
    const mins = Math.floor(setTimer / 60);
    const secs = Math.floor(setTimer % 60);
    timer.innerHTML = `${mins < 10 ? "0" : ""}${mins} : ${
      secs < 10 ? "0" : ""
    }${secs}`;
    setTimer = setTimer - 1;
  }
}, 1000);

btnNext.addEventListener("click", handleNext);
btnPrev.addEventListener("click", handlePrevious);
