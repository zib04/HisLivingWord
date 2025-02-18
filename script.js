// List of Old and New Testament Books
const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
    "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"
];

const newTestamentBooks = [
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon",
    "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"
];

// Initialize the HTML content
function createBookList() {
    const oldTestamentDiv = document.getElementById('old-testament');
    const newTestamentDiv = document.getElementById('new-testament');

    // Create Old Testament Buttons
    oldTestamentBooks.forEach(book => {
        const button = document.createElement('button');
        button.classList.add('book');
        button.textContent = book;
        button.onclick = () => toggleColor(button);
        oldTestamentDiv.appendChild(button);
    });

    // Create New Testament Buttons
    newTestamentBooks.forEach(book => {
        const button = document.createElement('button');
        button.classList.add('book');
        button.textContent = book;
        button.onclick = () => toggleColor(button);
        newTestamentDiv.appendChild(button);
    });
}

// Toggle Book Color on Click
let clickCounts = {};
function toggleColor(button) {
    const bookName = button.textContent;

    // Initialize click count for each book if not already done
    if (!clickCounts[bookName]) {
        clickCounts[bookName] = 0;
    }

    // Cycle through click states: 0 -> None, 1 -> Yellow, 2 -> Green
    clickCounts[bookName] = (clickCounts[bookName] + 1) % 3;

    if (clickCounts[bookName] === 0) {
        button.style.backgroundColor = "";
    } else if (clickCounts[bookName] === 1) {
        button.style.backgroundColor = "yellow";  // Being Read
    } else {
        button.style.backgroundColor = "green";   // Completed
    }
}

// Reset All Books
function resetBooks() {
    const buttons = document.querySelectorAll('.book');
    buttons.forEach(button => button.style.backgroundColor = "");
    clickCounts = {};  // Reset all book states
}

// Call the function to create book lists when the page loads
createBookList();
