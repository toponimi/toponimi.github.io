// Function to show a fullscreen slideshow with Google-like style
function showFullscreenSlideshow(photos) {
  // Create a container for the slideshow
  const slideshowContainer = d3.select("body")
    .append("div")
    .attr("class", "fullscreen-slideshow")
    .style("position", "fixed")
    .style("top", "0")
    .style("left", "0")
    .style("width", "100%")
    .style("height", "100%")
    .style("background-color", "rgba(0, 0, 0, 0.95)")
    .style("display", "flex")
    .style("justify-content", "center")
    .style("align-items", "center")
    .style("overflow", "hidden")
    .style("z-index", "1000");

  // Add an image element to display photos
  let currentIndex = 0;
  const img = slideshowContainer.append("img")
    .attr("src", photos[currentIndex])
    .style("max-width", "90%")
    .style("max-height", "90%")
    .style("transition", "transform 0.3s ease");

  // Swipe event handling
  let startX = 0;
  img.on("touchstart", function (event) {
    startX = event.touches[0].clientX;
  });

  img.on("touchend", function (event) {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
      // Swipe left
      showNext();
    } else if (endX - startX > 50) {
      // Swipe right
      showPrevious();
    }
  });

  // Navigation buttons
  const buttonStyle = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    color: black;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  `;

  slideshowContainer.append("button")
    .attr("class", "prev-btn")
    .attr("style", `${buttonStyle} left: 20px;`)
    .text("<")
    .on("click", showPrevious);

  slideshowContainer.append("button")
    .attr("class", "next-btn")
    .attr("style", `${buttonStyle} right: 20px;`)
    .text(">")
    .on("click", showNext);

  // Close button
  slideshowContainer.append("button")
    .attr("class", "close-btn")
    .attr("style", `
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.8);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 20px;
      color: black;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    `)
    .text("✕")
    .on("click", () => {
      slideshowContainer.remove();
    });

  // Functions to navigate the slideshow
  function showPrevious() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
    img.attr("src", photos[currentIndex]);
  }

  function showNext() {
    currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
    img.attr("src", photos[currentIndex]);
  }
}
