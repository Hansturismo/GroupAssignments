// Store the index of the currently displayed image, starting at zero.
let currentIndex = 0;

// Select the HTML elements needed for image navigation.
const slideImage = document.querySelector("#slideImage"); // Select the image element.
const previousButton = document.querySelector(".previousButton"); // Select the previous image button.
const nextButton = document.querySelector(".nextButton"); // Select the next image button.
const slideNumber = document.querySelector("#slideNumber"); // Select the current image number.
const slideTotal = document.querySelector("#slideTotal"); // Select the total image count.
const imageCaption = document.querySelector (".imageCaption");
const imageTitle = document.querySelector (".imageTitle");
const imageSource = document.querySelector (".imageSource a");

 // Display the current image and update the image counter.
function displaySlide() {
    const currentSlide = imageArray[currentIndex]; // Retrieve the current image object from images.js.
    slideImage.src = currentSlide.file; // Update the displayed image.
    slideImage.alt = currentSlide.alt; // Update the image's alternative text.
    imageTitle.textContent =currentSlide.name;
    imageCaption.textContent = currentSlide.caption.split(".").slice(1).join(". ");




    
    imageSource.href = currentSlide.source;
    imageSource.textContent = "Image source";
    const currentSlideNumber = currentIndex + 1; // Convert the zero-based index to an image number readable for humans.
    // Add a leading zero to the current image number if it is less than 10.
    if (currentSlideNumber < 10) { // Check if the current image number is less than 10.
        slideNumber.textContent = "0" + currentSlideNumber; // Add a zero before the image number.
    } else { // Handle image numbers of 10 or greater.
        slideNumber.textContent = currentSlideNumber; // Display the image number without a leading zero.
    }
    // Add a leading zero to the total image count if it is less than 10.
    if (imageArray.length < 10) { // Check if the total image count is less than 10.
        slideTotal.textContent = "0" + imageArray.length; // Add a zero before the total image count.
    } else { // Handle image counts of 10 or greater.
        slideTotal.textContent = imageArray.length; // Display the total image count without a leading zero.
    }
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