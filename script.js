let clickCounts = {}; // Store the click count for each book

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
    }
}

// Function to reset all books to original state
function resetBooks() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.style.backgroundColor = '#f1f1f1'; // Reset color to default
    });
    clickCounts = {}; // Reset click counts
}

// Add event listeners to all book buttons
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', handleClick);
});
