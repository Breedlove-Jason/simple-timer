const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

// Check if the circle exists and get the radius as a number
const radius = circle ? parseFloat(circle.getAttribute('r')) || 0 : 0;
const perimeter = radius * 2 * Math.PI;
let currentOffset = 0

circle.setAttribute('stroke-dasharray', perimeter) // set the stroke-dasharray to the circumference
let duration
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration

  },
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset",
        perimeter * timeRemaining / duration - perimeter)

  },
  onComplete() {
    console.log('Timer completed');
  },
});

