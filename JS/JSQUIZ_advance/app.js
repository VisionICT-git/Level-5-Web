// array of questions
var questionList = [];
var currentQ = 0; // tracker for next question
var recordedAnswers = []; //Tracker for answers given
//Answer check function for question object.
function checkAnswer(ansNum) {
  //If the given answer matches the key, return true
  if (parseInt(ansNum) == this.correctAnswer) {
    return true;
  } else {
    return false;
  }
}
// question object
function question(q, answerList, correctAns) {
  this.question = q;
  this.answers = answerList;
  this.correctAnswer = correctAns;
  this.checkAnswer = checkAnswer;
}

//for each question in our quiz, create a object ,
//populate it with answers and the correct answer
// and add it to our array of question
function quiz() {
  questionList.push(
    new question(
      "What does html stands for?",
      [
        "Hyper text markup languague",
        " Hight text make line",
        "Hope to meet larry",
        " Hyper text making lang",
      ],
      0
    )
  );
  questionList.push(
    new question(
      "What does CSS stands for",
      [
        "Cascading style sheet",
        " Copper style sheet",
        "Cascasing seprate sheet",
        " Cascading style",
      ],
      0
    )
  );
  questionList.push(
    new question(
      "What is js ",
      [
        "Style sheet",
        "Scripting languague",
        "Markup language",
        " Programming languague",
      ],
      1
    )
  );
}
//Clears the page by deleting all children of main
function erase() {
  $("main").empty();
}
//display the next question
function nextQuestion() {
  //clear the page
  erase();

  //create the heading to display the text of the question and add it to main
  $("main").append(
    "<h1>" + (currentQ + 1) + "." + questionList[currentQ].question + "</h1>"
  );

  //add a form to main to contain our radio buttons
  $("main").append("<form id='answerForm'> <p> Select one option </p></form>");

  //for each answer attached to the question,
  //create a radio button and label for it and add it to the page order
  for (i = 0; i < questionList[currentQ].answers.length; i++) {
    var answerRadio = document.createElement("input");
    answerRadio.type = "radio";
    answerRadio.name = "answer";
    answerRadio.value = i.toString();
    answerRadio.id = "a" + i.toString();

    $("#answerForm").append(answerRadio);
    var answerText = document.createElement("label");
    answerText.innerHTML = questionList[currentQ].answers[i];
    answerText.htmlfor = "a" + i.toString();
    $("#answerForm").append(answerText);

    $("#answerForm").append("<br>");
  }
  //create the "next question" button and add it to the end of the page
  var nextQ = document.createElement("button");

  //if it's the last question set the text of the button to "View Results", else set it to "Next Question"
  if (currentQ + 1 == questionList.length) {
    nextQ.innerHTML = "View Results &#10148;";
  } else {
    nextQ.innerHTML = "Next Question &#10148;";
  }
  nextQ.className = "buttonStyle";
  nextQ.onclick = function () {
    saveAnswer();
  };
  nextQ.disabled = true;
  $("main").append(nextQ);

  //create a listener to enable the "next question" button once any answer has been chosen
  document.getElementById("answerForm").addEventListener(
    "change",
    function () {
      nextQ.disabled = false;
    },
    { once: true }
  );
}
function quizStart() {
  questionList = [];
  recordAnswer = [];
  currentQ = 0;
  quiz();
  nextQuestion();
}

//calculates the user's number of correct questions and returns it
function getScore() {
  var totalScore = 0;
  for (i = 0; i < questionList.length; i++) {
    if (questionList[i].checkAnswer(recordedAnswers[i])) {
      totalScore++;
    }
  }
  return totalScore;
}
function saveAnswer() {
  //add the chosen answer to our answer list
  recordedAnswers.push($("#answerForm input[type = 'radio']:checked").val());

  //increment the number of the current question
  currentQ++;

  //check if there are any more questions to render
  //if there are no more questions, display results
  if (currentQ >= questionList.length) {
    displayAnswer();
  }
  //if there are more questions, render the next question
  else {
    nextQuestion();
  }
}

function mainMenu() {
  //clear the page
  erase();
  // create a welcome message
  var mainHeading = document.createElement("h1");
  mainHeading.innerHTML = "Welcome";
  $("main").append(mainHeading);
  //append instruction
  $("main").append("<p> click on the start button to proceed to the quiz</p>");
  var startQuiz = document.createElement("button");
  startQuiz.innerHTML = "Begin Quiz";
  startQuiz.className = "buttonStyle";
  startQuiz.onclick = function () {
    quizStart();
  };
  $("main").append(startQuiz);
}
//display the score and whether each answer was correct or incorrect
function displayAnswer() {
  erase();
  $("main").append("<h1>Your Score");
  $("main").append("<h2 id='result'>" + getScore() + "/" + questionList.length);
  $("main").append("<h1>Your Answers</h1>");

  //append each answer given and set the background to red for incorrect or green for correct
  for (i = 0; i < questionList.length; i++) {
    var ansDisplay = document.createElement("p");
    ansDisplay.innerHTML =
      (i + 1).toString() + ". " + questionList[i].answers[recordedAnswers[i]];
    if (questionList[i].checkAnswer(recordedAnswers[i])) {
      ansDisplay.className = "correct";
    } else {
      ansDisplay.className = "incorrect";
    }
    $("main").append(ansDisplay);
  }
  //create a button for returning to the main menu
  var startOver = document.createElement("button");
  startOver.innerHTML = "Return to Menu";
  startOver.className = "buttonStyle";
  startOver.onclick = function () {
    mainMenu();
  };
  $("main").append(startOver);
}
