// Sandboxels mod to add a "Multiplayer" button next to Reset and Replace buttons

// Function to create and add the Multiplayer button
function addMultiplayerButton() {
    // Find the parent element where the buttons are located (near Reset and Replace buttons)
    const buttonContainer = document.querySelector('#controls'); // Assumes the buttons are inside a div with id 'controls'

    if (buttonContainer) {
        // Create a new button element
        const multiplayerButton = document.createElement('button');
        
        // Set button properties
        multiplayerButton.innerText = 'Multiplayer'; // Button label
        multiplayerButton.id = 'multiplayerButton';  // Optional: Button ID

        // Add event listener (optional functionality for future implementation)
        multiplayerButton.addEventListener('click', () => {
            console.log("Multiplayer button clicked! (This can trigger multiplayer functionality)");
            // Placeholder for future multiplayer functionality
        });

        // Append the new button to the button container
        buttonContainer.appendChild(multiplayerButton);
    } else {
        console.error('Button container not found!');
    }
}

// Add the button when the page content is loaded
window.addEventListener('DOMContentLoaded', addMultiplayerButton);
