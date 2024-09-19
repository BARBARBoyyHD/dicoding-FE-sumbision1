let currentSlide = 0;
let slideInterval;

// Function to change slides
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update the current slide index and loop back to the first slide when the last one is reached
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slides container
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Function to start automatic slide looping
function startSlideLoop() {
    slideInterval = setInterval(() => {
        changeSlide(1); // Move to the next slide every 3 seconds
    }, 3000);
}

// Start the automatic slide looping when the page loads
window.onload = function() {
    startSlideLoop();
};
