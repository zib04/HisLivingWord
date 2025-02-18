let clickCounts = {};

function toggleColor(button) {
    let book = button.textContent;

    // Initialize the click count for the book if not already set
    if (!clickCounts[book]) {
        clickCounts[book] = 0;
    }

    // Toggle the color based on the click count
    clickCounts[book] = (clickCounts[book] + 1) % 3; // Cycle through 0, 1, 2 (None, Yellow, Green)

    if (clickCounts[book] === 1) {
        button.style.backgroundColor = "yellow";  // Being Read
    } else if (clickCounts[book] === 2) {
        button.style.backgroundColor = "green";   // Completed
    } else {
        button.style.backgroundColor = "";        // Reset to original
    }
}

function resetBooks() {
    // Reset all books to their original state
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.style.backgroundColor = "";
    });
    clickCounts = {};  // Reset click counts
}
