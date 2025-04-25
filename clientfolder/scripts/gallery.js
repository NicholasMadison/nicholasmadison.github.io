document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [

        "images/pic9.jpg",
        "images/pic10.jpg",
        "images/pic11.jpg",
        "images/pic12.jpg"
    ]; // Add more images here

    let currentIndex = 0;
    const carouselImage = document.getElementById("carouselImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateImage() {
        carouselImage.src = imageUrls[currentIndex];
    }

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageUrls.length - 1;
        updateImage();
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex < imageUrls.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });

    // Initialize the first image
    updateImage();
});
