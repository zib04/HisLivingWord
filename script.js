const oldTestamentBooks = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
const newTestamentBooks = ["Matthew", "Mark", "Luke", "John", "Acts"];
const verses = ["Psalm 119:105 - Your word is a lamp to my feet.", "Proverbs 3:5 - Trust in the Lord with all your heart."];

function createBookGrid(books, containerId) {
    const container = document.getElementById(containerId);
    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "book";
        div.textContent = book;
        div.addEventListener("click", () => toggleBookState(div));
        container.appendChild(div);
    });
}

function toggleBookState(book) {
    if (book.classList.contains("completed")) {
        book.classList.remove("completed");
        book.classList.add("reading");
    } else if (book.classList.contains("reading")) {
        book.classList.remove("reading");
    } else {
        book.classList.add("completed");
    }
}

document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll(".book").forEach(book => book.classList.remove("reading", "completed"));
});

document.getElementById("verse").textContent = verses[Math.floor(Math.random() * verses.length)];

const readingPlan = ["Day 1: Genesis 1-3", "Day 2: Matthew 1-2"];
readingPlan.forEach(day => {
    const li = document.createElement("li");
    li.textContent = day;
    document.getElementById("reading-plan").appendChild(li);
});

createBookGrid(oldTestamentBooks, "old-testament");
createBookGrid(newTestamentBooks, "new-testament");
