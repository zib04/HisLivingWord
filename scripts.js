// Store click counts for each book
let clickCounts = {};

// Function to handle book button clicks
function handleClick(event) {
    const book = event.target;
    const bookName = book.textContent;

    // Track click count for each book
    if (!clickCounts[bookName]) {
        clickCounts[bookName] = 0;
    }

    clickCounts[bookName]++;

    // Change color based on click count
    if (clickCounts[bookName] === 1) {
        book.style.backgroundColor = 'yellow'; // First click turns yellow (reading)
    } else if (clickCounts[bookName] === 2) {
        book.style.backgroundColor = 'green'; // Second click turns green (completed)
    } else if (clickCounts[bookName] === 3) {
        book.style.backgroundColor = '#f1f1f1'; // Third click resets to default
        clickCounts[bookName] = 0; // Reset click count after third click
    }
}

// Add event listeners to all book buttons
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', handleClick);
});

// Reset all buttons to original state
document.getElementById('reset').addEventListener('click', function() {
    clickCounts = {};  // Reset click counts
    document.querySelectorAll('.book').forEach(book => {
        book.style.backgroundColor = '#f1f1f1';  // Reset background color
    });
});
