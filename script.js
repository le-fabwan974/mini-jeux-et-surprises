document.addEventListener("DOMContentLoaded", function() {
    // Show Level 1
    document.getElementById('level-1').style.display = 'block';
});

// Function to complete the current level
function completeLevel(level) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-image').src = `images/surprise${level}.jpg`; // Change with your own images
    document.getElementById('popup-text').textContent = `Bravo ! Tu as terminé le niveau ${level} 🎉`;
    document.getElementById('instructions-' + level).style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to load the next level
function goToNextLevel() {
    closePopup();
    const currentLevel = parseInt(document.querySelector('.next-level-instructions').id.split('-')[1]);
    document.getElementById('level-' + currentLevel).style.display = 'none';
    loadLevel(currentLevel + 1);
}

// Function to start a specific level
function loadLevel(level) {
    const nextLevelContainer = document.getElementById('level-' + level);
    if (nextLevelContainer) {
        nextLevelContainer.style.display = 'block';
    } else {
        alert("Félicitations ! Tu as terminé tous les niveaux !");
    }
}
