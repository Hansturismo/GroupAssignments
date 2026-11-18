
let currentIndex = 0; // Store the index of the currently displayed image, starting at zero.

// Select the HTML elements needed for image navigation.
const slideImage = document.querySelector("#slideImage"); // Select the image element.
const previousButton = document.querySelector(".previousButton"); // Select the previous image button.
const nextButton = document.querySelector(".nextButton"); // Select the next image button.

// Display the current image.
function displaySlide() {
    const currentSlide = imageArray[currentIndex]; // Retrieve the current image object from images.js.
    slideImage.src = currentSlide.file; // Update the displayed image.
    slideImage.alt = currentSlide.alt; // Update the image's alternative text.
}

// Change the current image based on the navigation direction.
function changeSlide(direction) {
    currentIndex = currentIndex + direction; // Increase or decrease the current image index.
    if (currentIndex >= imageArray.length) { // Check if the index has passed the last image.
        currentIndex = 0; // Return to the first image.
    } else if (currentIndex < 0) { // Check if the index is before the first image.
        currentIndex = imageArray.length - 1; // Return to the last image.
    }
    displaySlide(); // Display the selected image.
}

// Add click event listeners to the navigation buttons.
previousButton.addEventListener("click", () => changeSlide(-1)); // Display the previous image when clicked.
nextButton.addEventListener("click", () => changeSlide(1)); // Display the next image when clicked.

displaySlide(); // Display the first image when the page loads.