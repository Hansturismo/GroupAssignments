const previousImageButton = document.querySelector(".previousButton");
const nextImageButton = document.querySelector(".nextButton");
const currentImageCount = document.querySelector("#slideNumber");
const image = document.querySelector("#slideImage");

console.log(typeof currentImageCount.textContent);

function counterButtons() {
    nextImageButton.addEventListener("click", nextImage);

    function imageLoop() {}
    for (i = 0; i < imageArray.length; i++) {
        if (currentImageCount == 1) {
            image.setAttribute(`src="${imageArray[i].file}"`);
        }
    }
}

currentImageCount.textContent = `${"0" + 4}`;

previousImageButton.addEventListener("click", () => {
    if (currentImageCount.textContent > 1) {
        const updatedCount = (currentImageCount.textContent - 1);
        console.log(updatedCount.);
    }
});

nextImageButton.addEventListener("click", () => {
    console.log(nextImageButton);
    if (currentImageCount.textContent < imageArray.length) {
        if (currentImageCount < 10) {
            currentImageCount.textContent = `${"0" + currentImageCount.textContent++}`;
        } else {
            currentImageCount.textContent++
        }
    }
    console.log(currentImageCount.textContent);
});

