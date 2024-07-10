(function () {
  function findRoots(element) {
    const shadowRoots = [element, ...element.querySelectorAll("*")]
      .filter((e) => !!e.shadowRoot)
      .flatMap((e) => [e.shadowRoot, ...findRoots(e.shadowRoot)]);
    return [...shadowRoots, document];
  }

  function findVideoElement() {
    const roots = findRoots(document);
    const videos = roots.flatMap((e) =>
      Array.from(e.querySelectorAll("video")).filter((video) => video.readyState !== 0)
    );

    const largestVideo = videos.reduce((prev, current) => {
      const prevArea = prev ? prev.clientWidth * prev.clientHeight : 0;
      const currentArea = current.clientWidth * current.clientHeight;
      return currentArea > prevArea ? current : prev;
    }, null);

    return largestVideo;
  }

  function togglePictureInPicture() {
    const video = findVideoElement();
    if (!video) return;

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      video.removeAttribute("disablepictureinpicture");
      video.requestPictureInPicture();
    }
  }

  togglePictureInPicture();
})();
