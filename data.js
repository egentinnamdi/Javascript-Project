const questions = [
  {
    question: "What does the 'DOM' stand for in JavaScript?",
    options: [
      "Document Oriented Model",
      "Document Object Model",
      "Dynamic Object Manipulation",
      "Direct Object Manipulation",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "all of the above"],
    correctAnswer: 3,
    points: 10,
  },
  {
    question: "What will the following code output: console.log(typeof([]));?",
    options: ["'array'", "'object'", "'undefined'", "'function'"],
    correctAnswer: 1,
    points: 10,
  },
  {
    question:
      "Which built-in method is used to return the character at a specified index in a string?",
    options: ["charAt()", "characterAt()", "getCharAt()", "getCharacter()"],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "What does the following expression evaluate to: 5 + '5'?",
    options: ["55", "10", "5", "'55'"],
    correctAnswer: 3,
    points: 10,
  },
  {
    question: "How do you comment out multiple lines in JavaScript?",
    options: [
      "// Comment",
      "/* Comment */",
      "/!-- Comment --/",
      "/** Comment */",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "String", "Array", "Character"],
    correctAnswer: 3,
    points: 10,
  },
  {
    question: "What is the correct way to write an if statement in JavaScript?",
    options: [
      "if (x === 5) { ... }",
      "if x === 5 then { ... }",
      "if x = 5 { ... }",
      "if x == 5 { ... }",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "What is the purpose of the `NaN` property in JavaScript?",
    options: [
      "It represents 'Not a Name'",
      "It stands for 'New and Null'",
      "It represents 'Not a Number'",
      "It signifies 'Null and Nothing'",
    ],
    correctAnswer: 2,
    points: 10,
  },
  {
    question: "What does the `this` keyword refer to in JavaScript?",
    options: [
      "The previous function's scope",
      "The global object",
      "The current object",
      "The parent object",
    ],
    correctAnswer: 2,
    points: 10,
  },
  {
    question:
      "What does the `typeof` operator return when used with the null value?",
    options: ["'null'", "'undefined'", "'object'", "'string'"],
    correctAnswer: 2,
    points: 10,
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["push()", "append()", "addToEnd()", "insert()"],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "What does the `JSON.parse()` method do in JavaScript?",
    options: [
      "Parses a JSON string and returns a JavaScript object",
      "Parses a JavaScript object and returns a JSON string",
      "Parses a JavaScript object and returns a JavaScript array",
      "Parses a JSON string and returns a JavaScript array",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "Which of the following is NOT a looping structure in JavaScript?",
    options: ["for loop", "while loop", "loop until", "do...while loop"],
    correctAnswer: 2,
    points: 10,
  },
  {
    question: "How do you call a function named 'myFunction' in JavaScript?",
    options: [
      "call myFunction()",
      "run myFunction()",
      "myFunction()",
      "execute myFunction()",
    ],
    correctAnswer: 2,
    points: 10,
  },
];

// Local Storage Store Data
const data = JSON.stringify(questions);
localStorage.setItem("questions", data);
