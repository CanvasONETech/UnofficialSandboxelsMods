// Sandboxels mod to add a "Multiplayer" button without replacing any existing buttons

function addMultiplayerButton() {
    // Find the parent container where all the buttons are located (where Reset, Replace are)
    const buttonContainer = document.querySelector('#controls'); // Assumes the buttons are inside a div with id 'controls'

    if (buttonContainer) {
        // Create a new button element
        const multiplayerButton = document.createElement('button');
        
        // Set the button properties
        multiplayerButton.innerText = 'Multiplayer'; // Button label
        multiplayerButton.id = 'multiplayerButton';  // Optional: Button ID

        // Add event listener for future multiplayer functionality
        multiplayerButton.addEventListener('click', () => {
            console.log("Multiplayer button clicked!");
            // Placeholder for future functionality
        });

        // Append the new button to the button container
        buttonContainer.appendChild(multiplayerButton);
    } else {
        console.error('Button container not found!');
    }
}

// Add the button when the page content is loaded
window.addEventListener('DOMContentLoaded', addMultiplayerButton);
