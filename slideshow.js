const delay = 3000; //wait 3 secs before image
let currentIndex = 0; //index of first image

async function loadSlideshow() {
    try {
        const response = await fetch('images.json');
        const { images } = await response.json();
        const slideshowImage = document.getElementById('slideshowView');
        slideshowImage.innerHTML = ''; // clear any existing content

        //add all images to the page
        images.forEach((imgPath, index) => {
            const img = document.createElement('img');
            img.src = imgPath;
            img.style.display = index === 0 ? 'block' : 'none'; // show only the first image initially
            img.classList.add('slideshow-image'); // add a class for styling
            slideshowImage.appendChild(img);
        });

        //start slideshow if any images exist
        if (images.length > 0) {
            setInterval(showNextImage, delay);
        }
    }
    catch (error) {
        console.error('Error loading images:', error); 
    }
}

function showNextImage() {
    const imgs = document.querySelectorAll('.slideshow-image');
    if (imgs.length === 0) return; // No images to show

    imgs[currentIndex].style.display = 'none'; // hide current image
    currentIndex = (currentIndex + 1) % imgs.length; // move to the next image
    imgs[currentIndex].style.display = 'block'; // show next image
}
window.onload = loadSlideshow; // ensure the slideshow starts when the page loads

/*
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
*/
