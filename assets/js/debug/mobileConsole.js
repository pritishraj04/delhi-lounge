// The text we're logging
var text = document.getElementById("text"),
  // The checkbox
  onlyConsole = document.getElementById("onlyConsole"),
  // The target <ul>
  target = document.getElementById("target"),
  // The buttons on the left
  buttons = document.querySelectorAll(".list-group-item"),
  // Our button click listener
  buttonListener = function () {
    var target = onlyConsole.checked ? console.skipHtml : console;
    // Since all buttons have their text set to the appropriate log level
    // we can just check them for it via innerText - just need to make it
    // lowercase
    target[this.innerText.toLowerCase()](text.value);
  },
  i = 0;

// jQuery works too! The result would be the same if you did
// ConsoleLogHTML.connect($("#target"))
ConsoleLogHTML.connect(target);

// Attach our event listeners
for (; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonListener);
}
