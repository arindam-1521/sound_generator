// Get the input, slider, and button
const frequencyInput = document.getElementById('frequencyInput');
const duration = document.getElementById('durationInput')
const frequencySlider = document.getElementById('frequencySlider');
const playButton = document.getElementById('playButton');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const freqType = document.getElementById("freqType")
const card_title = document.getElementById("card_title")

// Function to play a sine wave with the specified frequency
function playSineWave() {
    const frequency = parseFloat(frequencyInput.value) || 440; // Default to 440 Hz if input is not a valid number
    card_title.innerHTML = freqType.value;
    // Create an oscillator node
    const oscillator = audioContext.createOscillator();
    oscillator.type = freqType.value; // Set oscillator type to sine wave
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);

    // Start and stop the oscillator after a short duration
    oscillator.start();
    oscillator.stop(audioContext.currentTime + parseFloat(duration.value)); // Stop after 1 second
}

// Event listeners to update the slider when the input changes
frequencyInput.addEventListener('input', function () {
    frequencySlider.value = frequencyInput.value;
});

// Event listener to play the sine wave when the button is clicked
playButton.addEventListener('click', playSineWave);

// Event listener to update the input when the slider changes
frequencySlider.addEventListener('input', function () {
    frequencyInput.value = frequencySlider.value;
});
