const previousImageButton = document.querySelector(".previousButton");
const nextImageButton = document.querySelector(".nextButton");
const currentImageCount = document.querySelector("#slideNumber");
const image = document.querySelector("#slideImage");

let currentIndex = 4;

function indexHandler(array) {
    previousImageButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--
            console.log(currentIndex);
        } else if (currentIndex <= 0) {
            currentIndex = array.length - 1;
            console.log(currentIndex);
        }
        
    });
    nextImageButton.addEventListener("click", () => {
        if (currentIndex < (array.length - 1)) {
            currentIndex++
            console.log(currentIndex);
            
        } else if (currentIndex >= (array.length - 1)) {
            currentIndex = 0
            console.log(currentIndex)
        }
    })
}

indexHandler(imageArray);
