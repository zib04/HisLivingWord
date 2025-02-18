const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
    "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms",
    "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
    "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"
];

const newTestamentBooks = [
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians",
    "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
    "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus",
    "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John",
    "3 John", "Jude", "Revelation"
];

const oldTestamentDiv = document.getElementById("old-testament");
const newTestamentDiv = document.getElementById("new-testament");
const resetButton = document.getElementById("reset");

// Function to create book buttons
function createBookButtons(books, container) {
    books.forEach(book => {
        const button = document.createElement("button");
        button.textContent = book;
        button.classList.add("book");

        // Load saved state from localStorage
        const savedState = localStorage.getItem(book);
        if (savedState) {
            button.classList.add(savedState);
        }

        // Click event to toggle between statuses
        button.addEventListener("click", () => {
            if (!button.classList.contains("reading")) {
                button.classList.add("reading");
                localStorage.setItem(book, "reading");
            } else if (button.classList.contains("reading")) {
                button.classList.remove("reading");
                button.classList.add("completed");
                localStorage.setItem(book, "completed");
            } else {
                button.classList.remove("completed");
                localStorage.removeItem(book);
            }
        });

        container.appendChild(button);
    });
}

// Generate book buttons for Old and New Testament
createBookButtons(oldTestamentBooks, oldTestamentDiv);
createBookButtons(newTestamentBooks, newTestamentDiv);

// Reset Button Functionality
resetButton.addEventListener("click", () => {
    document.querySelectorAll(".book").forEach(button => {
        button.classList.remove("reading", "completed");
        localStorage.removeItem(button.textContent);
    });
});
