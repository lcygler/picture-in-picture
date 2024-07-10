(function () {
  function togglePictureInPicture() {
    const video = document.querySelector("video");

    if (!video) {
      console.log("No video element found.");
      return;
    }

    if (document.pictureInPictureElement === video) {
      console.log("Video is already in Picture-in-Picture mode.");
      return;
    }

    video.removeAttribute("disablepictureinpicture");

    video
      .requestPictureInPicture()
      .then(() => {
        console.log("Entered Picture-in-Picture mode successfully.");
      })
      .catch((error) => {
        console.error("Failed to enter Picture-in-Picture mode:", error);
      });
  }

  togglePictureInPicture();
})();
