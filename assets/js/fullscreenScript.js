function openFullScreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message}`
      );
    });
  } else if (elem.webkitRequestFullscreen) {
    // Safari/Chrome
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  } else {
    console.error("Fullscreen API is not supported by this browser.");
  }
}

document.addEventListener("click", triggerFullScreen);
document.addEventListener("keypress", triggerFullScreen);
document.addEventListener("touchstart", triggerFullScreen);

function triggerFullScreen() {
  openFullScreen();

  // Remove the event listeners after first interaction
  document.removeEventListener("click", triggerFullScreen);
  document.removeEventListener("keypress", triggerFullScreen);
  document.removeEventListener("touchstart", triggerFullScreen);
  document.addEventListener("touchend", triggerFullScreen, { passive: true });
}
