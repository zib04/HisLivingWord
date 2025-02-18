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
        clickCount[book] = 0;
        button.style.backgroundColor = '#ddd';
    }
}

function resetBooks() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.style.backgroundColor = '#ddd';
    });
    clickCount = {};  // Reset the click count
}
