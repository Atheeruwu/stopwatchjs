let flowerInterval;

function createFallingFlower() {
    // Create flower element
    const flower = document.createElement("span");
    flower.classList.add("flower");
    flower.textContent = "🌸"; // Use flower emoji

    // Randomize the start position (left)
    flower.style.left = `${Math.random() * 100}vw`;

    // Append flower to body
    document.body.appendChild(flower);

    // Remove flower after animation ends to prevent memory leaks
    flower.addEventListener("animationend", () => {
        flower.remove();
    });
}

function startFlowerFall() {
    let count = 0;

    // Create a flower every second, up to 7 flowers falling at once (in sequence)
    flowerInterval = setInterval(() => {
        createFallingFlower();
        count++;

        // Stop after 7 flowers have fallen
        if (count >= 7) {
            clearInterval(flowerInterval);
        }
    }, 100); // Adjust timing to control when the flowers fall
}

// Start the flower falling effect
startFlowerFall();
