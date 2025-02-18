let clickCount = {};

function toggleColor(button) {
    const book = button.textContent;

    // Initialize click count for book if not already set
    if (!clickCount[book]) {
        clickCount[book] = 0;
    }

    clickCount[book]++;

    // Toggle between yellow and green
    if (clickCount[book] === 1) {
        button.style.backgroundColor = 'yellow';
    } else if (clickCount[book] === 2) {
        button.style.backgroundColor = 'green';
    } else {
        // Reset back to default color
        clickCount
