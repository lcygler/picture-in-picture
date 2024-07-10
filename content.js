(function () {
  function enterPictureInPicture(video) {
    if (video.hasAttribute("disablepictureinpicture")) {
      video.removeAttribute("disablepictureinpicture");
    }

    video.requestPictureInPicture()
      .then(() => {
        console.log("Entered Picture-in-Picture mode.");
      })
      .catch((error) => {
        console.error("Failed to enter Picture-in-Picture mode:", error);
      });
  }

  function exitPictureInPicture() {
    document.exitPictureInPicture()
      .then(() => {
        console.log("Exited Picture-in-Picture mode.");
      })
      .catch((error) => {
        console.error("Failed to exit Picture-in-Picture mode:", error);
      });
  }

  function togglePictureInPicture() {
    const video = document.querySelector("video");

    if (!video) {
      console.log("No video element found.");
      return;
    }

    if (document.pictureInPictureElement === video) {
      exitPictureInPicture();
    } else {
      enterPictureInPicture(video);
    }
  }

  togglePictureInPicture();
})();
