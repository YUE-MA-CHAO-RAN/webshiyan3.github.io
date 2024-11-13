
    // ... (same as provided above)
// Function to load a single game element
async function loadGameElement(elementName) {
        try {
            const response = await fetch(`./${elementName}.txt`); // Assuming each element has its own .txt file
const text = await response.text();
displayGameElement(elementName, text);
        } catch (error) {
    console.error(`Error loading ${elementName} element:`, error);
        }
    }
// Function to display a single game element on the page
function displayGameElement(elementName, description) {
        const gameElementsDiv = document.getElementById('gameElementsDiv') || document.createElement('div');
gameElementsDiv.id = 'gameElementsDiv';
gameElementsDiv.innerHTML = `<p><strong>${elementName}:</strong>${description}</p>`;
if (!gameElementsDiv.parentNode) {
    document.body.appendChild(gameElementsDiv);
        }
    }
// Function to load all game elements with a 1-second delay between each
function loadAllGameElements() {
        const elements = ['library', 'temple', 'guardian']; // Array of element names
        elements.forEach((element, index) => {
    setTimeout(() => {
        loadGameElement(element);
    }, 2000 * index); // Multiply index by 1000 to create a 1-second delay
        });
    }
// ... (rest of the code)
// Load all game elements on page load
loadAllGameElements();

// ... (rest of the code)
