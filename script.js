// Get references to the display and history elements
let display = document.getElementById('display');
let history = document.getElementById('history');

// Append a character to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Clear the last character from the display
function clearLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    let result = eval(display.value);  // You can replace `eval` with a safer eval function
    display.value = result;
    
    // Add the calculation to history
    let historyItem = document.createElement('li');
    historyItem.textContent = `${display.value}`;
    history.appendChild(historyItem);
    
  } catch (e) {
    display.value = 'Error';
  }
}

// Toggle between light and dark modes
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Prevent errors and unexpected behavior in history by keeping only recent items
function clearHistory() {
  history.innerHTML = '';
}
