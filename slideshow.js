document.addEventListener("DOMContentLoaded", function() {
    //array of google drive image urls
    const imageURLs = [
        "https://drive.google.com/uc?export=view&id=163xapG0erReL2KedIAgxpby8kfkSQjcO",
        "https://drive.google.com/uc?export=view&id=1XlK2ocKkSNI864YaGZtwbY3twnPmwoen"
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