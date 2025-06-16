document.addEventListener("DOMContentLoaded", function() {
    var numImages = 8;
    const imageURLs = []
    
    for (let i = 0; i < numImages; i++) {
        imageURLs[i] = "slideshow-photos/" + (i+1) + ".jpg";
    }
    

    let currentIndex = 0;
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