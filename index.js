/*----------------------THIS CODE IS VALID FOR CAPITAL ALPHABETS. thank you.-------------------*/






// Get all the buttons on the page
const buttons = document.querySelectorAll('button');

// Audio file paths
const audioFiles = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3"
];

// Key mappings
const keyCodes = [87, 65, 83, 68, 74, 75, 76]; // W, A, S, D, J, K, L

// Iterate through each button and assign event listeners
buttons.forEach((button, index) => {
  button.addEventListener('click', () => playAudio(index));
});

// Listen for key press events on the document level
document.addEventListener('keypress', handleKeyPress);

// Event handler for key press events
function handleKeyPress(event) {
  const keyCode = event.keyCode;
  const index = keyCodes.indexOf(keyCode);
  if (index !== -1) {
    event.preventDefault(); // Prevent default behavior of key press event (e.g., scrolling)
    playAudio(index);
  }
}

// Function to play the audio based on the button index
function playAudio(index) {
  if (index >= 0 && index < audioFiles.length) {
    const audio = new Audio(audioFiles[index]);
    audio.play();
  }
}



