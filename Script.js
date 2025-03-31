 // Array of background images
 const images = [
    "./Images/Africans Working Office.png",
    "./Images/businessman-working-laptop.jpg"
];

let currentIndex = 0;
const heroSection = document.getElementById("hero");

function changeBackground() {
    // Toggle between 0 and 1
    currentIndex = currentIndex === 0 ? 1 : 0;
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change the image every 3 seconds
setInterval(changeBackground, 3000);