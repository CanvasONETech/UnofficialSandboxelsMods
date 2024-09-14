function addMultiplayerButton() {
    const modManager = document.getElementById("modManager");
    
    if (modManager) {
        // Create a new button for Multiplayer
        const multiplayerButton = document.createElement("button");
        multiplayerButton.id = "multiplayerButton";
        multiplayerButton.innerText = "Multiplayer";
        multiplayerButton.style.position = "absolute";
        multiplayerButton.style.bottom = "15%";  // Position just above "Open Mod List"
        multiplayerButton.style.width = "100%";
        multiplayerButton.style.left = "0";
        multiplayerButton.style.height = "50px";
        multiplayerButton.style.backgroundColor = "#3c3c3c";
        multiplayerButton.style.paddingLeft = "auto";
        multiplayerButton.style.zIndex = 10;
        
        // Add an event listener for the button
        multiplayerButton.onclick = () => {
            console.log("Multiplayer button clicked!");
            // Placeholder: Add Multiplayer functionality here
        };

        // Append the button to the mod manager UI
        modManager.appendChild(multiplayerButton);
    } else {
        console.error("Mod Manager not found!");
    }
}

// Run the function after the page is loaded
window.addEventListener('DOMContentLoaded', () => {
    updateModManager();
    addMultiplayerButton();  // Call the function to add the Multiplayer button
});
