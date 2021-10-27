const rows = [
  ["name1", "city1", "some other info"],
  ["name2", "city2", "more info"],
];

const quiz = document.getElementById("quiz");

quiz.addEventListener("submit", (e) => {
  e.preventDefault();
  const questionArr = ["Question Number"];
  const answerArr = ["Answer"];
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (!input.checked) return;
    questionArr.push(input.name);
    answerArr.push(input.value[1]);
  });

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [questionArr, answerArr].map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
  window.location.reload();
});
