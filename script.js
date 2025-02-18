document.addEventListener("DOMContentLoaded", function () {
    const oldTestament = [
        "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
        "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
        "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon",
        "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
        "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah",
        "Malachi"
    ];

    const newTestament = [
        "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
        "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
        "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
        "1 John", "2 John", "3 John", "Jude", "Revelation"
    ];

    const oldBooksContainer = document.getElementById("old-books");
    const newBooksContainer = document.getElementById("new-books");

    // Load saved progress
    let savedProgress = JSON.parse(localStorage.getItem("bibleProgress")) || {};

    function createBookElement(book, container) {
        let bookElement = document.createElement("div");
        bookElement.textContent = book;
        bookElement.classList.add("book");
        bookElement.classList.add(savedProgress[book] || "not-started");

        bookElement.addEventListener("click", function () {
            if (bookElement.classList.contains("not-started")) {
                bookElement.classList.remove("not-started");
                bookElement.classList.add("reading");
                savedProgress[book] = "reading";
            } else if (bookElement.classList.contains("reading")) {
                bookElement.classList.remove("reading");
                bookElement.classList.add("completed");
                savedProgress[book] = "completed";
            } else {
                bookElement.classList.remove("completed");
                bookElement.classList.add("not-started");
                delete savedProgress[book];
            }
            localStorage.setItem("bibleProgress", JSON.stringify(savedProgress));
        });

        container.appendChild(bookElement);
    }

    // Create Old & New Testament book elements
    oldTestament.forEach(book => createBookElement(book, oldBooksContainer));
    newTestament.forEach(book => createBookElement(book, newBooksContainer));

    // Reset Progress
    document.getElementById("reset-btn").addEventListener("click", function () {
        localStorage.removeItem("bibleProgress");
        location.reload();
    });
});
