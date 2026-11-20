const previousImageButton = document.querySelector(".previousButton");
const nextImageButton = document.querySelector(".nextButton");
const currentImageCount = document.querySelector("#slideNumber");
const image = document.querySelector("#slideImage");
const imageCaption = document.querySelector(".imageCaption");
const imageSource = document.querySelector(".imageSource");
const imageName = document.querySelector(".imageName");

// Initialize the currentIndex, used to navigate array objects.
let currentIndex = 0;

// Arrowkey functionality - left/previous
function previousButtonOrArrowLeft(e) {
    if (e.type === "click" || e.key === "ArrowLeft") {
        console.log(`Previous`);
        decrementCounter(imageArray);
    }
}
// Arrowkey functionality - right/next
function nextButtonOrArrowRight(e) {
    if (e.type === "click" || e.key === "ArrowRight") {
        console.log(`Next`);
        incrementCounter(imageArray);
    }
}
// Decrement the image/slide counter
function decrementCounter(array) {
    if (currentIndex > 0) {
        currentIndex--;
    } else if (currentIndex <= 0) {
        currentIndex = array.length - 1;
    }
    renderImageObject(array, currentIndex);
    updateCounter(currentIndex);
}
// You guessed it, increment the image/slide counter
function incrementCounter(array) {
    if (currentIndex < array.length - 1) {
        currentIndex++;
    } else if (currentIndex >= array.length - 1) {
        currentIndex = 0;
    }
    renderImageObject(array, currentIndex);
    updateCounter(currentIndex);
}

// Grabs the imageObject from the array based on currentIndex and renders it to the DOM.
function renderImageObject(array, index) {
    const imageObject = array[index];
    console.log(`Current slide: ${imageObject.name} @ index: ${index}`);
    // Appending the object properties to the DOM elements
    image.src = imageObject.file;
    image.alt = imageObject.alt;
    imageCaption.textContent = imageObject.caption;
    imageSource.textContent = imageObject.source;
    imageName.textContent = imageObject.name;
}

// Simple counter update, very future proof B-)
function updateCounter(index) {
    currentImageCount.textContent = String(index + 1).padStart(2, "0");
}



previousImageButton.addEventListener("click", previousButtonOrArrowLeft);
nextImageButton.addEventListener("click", nextButtonOrArrowRight);
document.addEventListener("keydown", previousButtonOrArrowLeft);
document.addEventListener("keydown", nextButtonOrArrowRight);

renderImageObject(imageArray, currentIndex);