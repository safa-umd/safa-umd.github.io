document.addEventListener("DOMContentLoaded", function() {
    //current number of images in the folder, update accordingly
    var numImages = 8;

    //array to hold the file location of each image (file names should be numbered starting from 1)
    const imageURLs = []

    //iterate through the array and assign each index with the directory of each image file
    for (let i = 0; i < numImages; i++) {
        imageURLs[i] = "images/" + (i+1) + ".jpg";
    }
    
    //always start with the first image
    let currentIndex = 0;
    //sync with the img element in media.html
    const slideshowImage = document.getElementById('currentImage');
    
    function changeImage() {
        currentIndex = (currentIndex + 1) % imageURLs.length;
        slideshowImage.src = imageURLs[currentIndex];
    }

    if (imageURLs.length > 0 && slideshowImage) {
        slideshowImage.src = imageURLs[0];
        slideshowImage.style.opacity = 1; // Ensure the image is visible
        setInterval(changeImage, 3000); // Change image every 3 seconds
    }

});