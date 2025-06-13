document.addEventListener("DOMContentLoaded", function() {
    //array of google drive image urls
    const imageURLs = [
        "slideshow-photos/1.jpg",
        "slideshow-photos/2.jpg",
        "slideshow-photos/3.jpg",
        "slideshow-photos/4.jpg",
        "slideshow-photos/5.jpg",
        "slideshow-photos/6.jpg",
        "slideshow-photos/7.jpg",
    ]

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