let clearDisplay = true;
function printToDisplay(value) {
  const displayText = document.querySelector(".display-text");
  displayText.innerText = value;
}

function calculateResult() {
  const displayText = document.querySelector(".display-text");
  displayText.innerText =
    displayText.innerText === "" ? "" : eval(displayText.innerText);
  clearDisplay = true;
}

function handleKeyPresses(e) {
  if (clearDisplay) printToDisplay("");
  const displayText = document.querySelector(".display-text").innerHTML;
  clearDisplay = false;
  switch (e.target.value) {
    case "DEL":
      printToDisplay(displayText.slice(0, -1));
      break;
    case "reset":
      printToDisplay("");
      break;
    case "=":
      calculateResult();
      break;
    default:
      printToDisplay(displayText + e.target.value);
  }
}

function changeTheme(theme) {
  document.documentElement.className = theme;
}

document.querySelectorAll(".key-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    handleKeyPresses(event);
  });
});

document.body.addEventListener("change", (e) => {
  switch (e.target.id) {
    case "theme-1":
      changeTheme("theme-1");
      break;
    case "theme-2":
      changeTheme("theme-2");
      break;
    case "theme-3":
      changeTheme("theme-3");
      break;
  }
});