// scripts.js

// Function to create a balloon
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Random position and color for the balloons
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    
    // Set random colors for balloons
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Append to the balloon container
    document.getElementById('balloon-container').appendChild(balloon);

    // Remove balloon after animation ends
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Function to create sparkles (simple random points of light)
function createSparkles() {
    const sparkles = document.getElementById('sparkles');
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.borderRadius = '50%';
    sparkle.style.backgroundColor = 'white';
    sparkle.style.opacity = Math.random();
    sparkle.style.animation = 'sparkle-animation 1s ease-out';

    sparkles.appendChild(sparkle);
    
    // Remove sparkle after animation
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Animation keyframes for sparkles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes sparkle-animation {
        0% {
            transform: scale(0);
            opacity: 0.8;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`);

// Create balloons every 2 seconds
setInterval(createBalloon, 2000);

// Create sparkles every 150ms
setInterval(createSparkles, 150);

// Auto-play video on page load
window.onload = () => {
    const video = document.getElementById('birthday-video');
    video.play();
};
