// Get all the buttons
const buttons = document.querySelectorAll('.book-button');

// Function to handle the click event
function handleClick(event) {
  const button = event.target;
  const currentClickCount = button.dataset.clickCount ? parseInt(button.dataset.clickCount) : 0;
  let newClickCount = currentClickCount + 1;

  // Change color based on the number of clicks
  if (newClickCount === 1) {
    button.style.backgroundColor = 'yellow';
  } else if (newClickCount === 2) {
    button.style.backgroundColor = 'green';
  } else {
    button.style.backgroundColor = '';
    newClickCount = 0;
  }

  // Update click count in the button's data attribute
  button.dataset.clickCount = newClickCount;
}

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Reset function to reset all button colors
function resetButtons() {
  buttons.forEach(button => {
    button.style.backgroundColor = '';
    button.dataset.clickCount = 0;  // Reset click count
  });
}

// Add event listener for the reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetButtons);
