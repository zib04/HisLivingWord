// List of Books of the Bible (Old and New Testaments)
const oldTestamentBooks = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
  "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
  "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
  "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
  "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"
];

const newTestamentBooks = [
  "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
  "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
  "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
  "1 John", "2 John", "3 John", "Jude", "Revelation"
];

// Function to create buttons dynamically
function createButtons() {
  const oldBooksContainer = document.getElementById("old-books");
  const newBooksContainer = document.getElementById("new-books");

  // Create Old Testament buttons
  oldTestamentBooks.forEach(book => {
    const button = document.createElement("button");
    button.textContent = book;
    button.classList.add("default");
    button.onclick = () => toggleColor(button);
    oldBooksContainer.appendChild(button);
  });

  // Create New Testament buttons
  newTestamentBooks.forEach(book => {
    const button = document.createElement("button");
    button.textContent = book;
    button.classList.add("default");
    button.onclick = () => toggleColor(button);
    newBooksContainer.appendChild(button);
  });
}

// Function to toggle button colors
function toggleColor(button) {
  if (button.classList.contains("default")) {
    button.classList.remove("default");
    button.classList.add("yellow");
  } else if (button.classList.contains("yellow")) {
    button.classList.remove("yellow");
    button.classList.add("green");
  } else {
    button.classList.remove("green");
    button.classList.add("default");
  }
}

// Function to reset all button colors
function resetColors() {
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(button => {
    button.classList.remove("yellow", "green");
    button.classList.add("default");
  });
}

// Initialize the buttons on page load
createButtons();
