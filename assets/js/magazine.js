document.addEventListener("DOMContentLoaded", () => {
  $("#magazine").turn({
    display: "single",
    acceleration: true,
    // gradients: !$.isTouch,
    elevation: 50,
    preload: "all",
    pages: 1,
    width: 810,
    height: 1080,
    autoCenter: true,
    // when: {
    //   log for page turn envets
    // },
  });
  // Add click handlers for navigation buttons
  document.querySelector(".navbtn.next").addEventListener("click", () => {
    $("#magazine").turn("next");
  });

  document.querySelector(".navbtn.prev").addEventListener("click", () => {
    $("#magazine").turn("previous");
  });
});

function turnPageTo(number) {
  $("#magazine").turn("page", number);
}
function turnPagePrevious() {
  $("#magazine").turn("previous");
}
function turnPageNext() {
  $("#magazine").turn("next");
}

$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#magazine").turn("previous");
  else if (e.keyCode == 39) $("#magazine").turn("next");
});
