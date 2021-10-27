// The Quiz Form Element is selected
const quiz = document.getElementById("quiz");

// When the form is submitted the handleSubmit function is call
quiz.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  // Prevent default ensure the page doesn't reload
  e.preventDefault();

  // An array to hold the Questions and The Answers are initialised
  const questionArr = ["Question Number"];
  const answerArr = ["Answer"];

  // The Inputs are selected
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    // This loop checkes for all the answers and will input question number and the answer into their respective array
    if (!input.checked) return;
    questionArr.push(input.name);
    // value[1] is pushed in as that is the position of the number inside the input value eg. "c3"
    answerArr.push(input.value[1]);
  });

  // The data collected in the arrays is configurated
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [questionArr, answerArr].map((e) => e.join(",")).join("\n");

  // The configurated data is encoded into a csv file
  const encodedUri = encodeURI(csvContent);

  // Window.open will prompt the user to download the file
  window.open(encodedUri);

  // Window.location.reload() finally triggers the reload of the page so all answers and web addressess will be reset
  window.location.reload();
}
