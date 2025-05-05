const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    // Check the current value of the select element
    const currentTheme = themeSelector.value;
    
    if (currentTheme === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the logo to white
        document.querySelector('.logo').src = 'byui-logo_white.webp';
    } else {
        // Remove the dark class
        document.body.classList.remove('dark');
        // Change the logo back to blue
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
}

// Add event listener for theme changes
themeSelector.addEventListener('change', changeTheme); 