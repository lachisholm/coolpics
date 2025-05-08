

// Get a reference to the button element by its ID
const menuButton = document.getElementById("menu-button");

// Get a reference to the navigation menu element by its ID
const navMenu = document.getElementById("nav-menu");

// Check if both elements were found before proceeding
if (menuButton && navMenu) {

    //Confirm that the script is running and elements are found
    console.log("JavaScript is running and elements found");

    //Add a click event listener to the menu button
    menuButton.addEventListener("Click", () => {

    // Log that the button was clicked (for debugging)
    console.log("Menu button clicked");

    // Toggle the "open" class on the nav menu to show or hide it
    navMenu.classList.toggle("open");
    

});

} else {

    // If one of the elements is not found, Log an error to the console
    console.error("menuButton or navMenu not found");
}