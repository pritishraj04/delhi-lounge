$(window).ready(function () {
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
    when: {
      //log for page turn envets
    },
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
