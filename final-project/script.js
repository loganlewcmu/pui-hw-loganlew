function toggleSidebar() {
const menuIcon = document.getElementById('menu_icon');
const sidebar = document.querySelector('.nav_sidebar');

if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
    menuIcon.innerHTML = '<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>';
} else {
    sidebar.style.display = 'flex';
    menuIcon.innerHTML = '<path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>';
}
}

function hideSidebar(){
    const sidebar = document.querySelector('.nav_sidebar')
    sidebar.style.display = 'none'
}

/*ex-ing out of day trip inspiration deep dive cards*/
document.addEventListener("DOMContentLoaded", () => {
    // Select the close button and the card
    const closeButton = document.querySelector(".dti_deepDive_closeButton");
    const deepDiveCard = document.querySelector(".dti_deepDive_card");

    if (closeButton && deepDiveCard) {
        closeButton.addEventListener("click", () => {
            // Hide the deep dive card
            deepDiveCard.style.display = "none";
        });
    }
});

/*clicking between images/captions within the day trip inspiration deep dive cards*/
document.addEventListener('DOMContentLoaded', () => {
    const visuals = document.querySelectorAll('.dti_deepDive_visuals');
    const prevButton = document.querySelectorAll('.dti_deepDive_navButton')[0]; // The ❮ button
    const nextButton = document.querySelectorAll('.dti_deepDive_navButton')[1]; // The ❯ button

    // Initialize function
    let currentVisualIndex = 0;

    // Update visual being shown
    const updateVisuals = () => {
        visuals.forEach((visual, index) => {
            visual.style.display = index === currentVisualIndex ? 'block' : 'none';
        });
    };

    // Create event listeners for buttons
    prevButton.addEventListener('click', () => {
        currentVisualIndex = (currentVisualIndex - 1 + visuals.length) % visuals.length;
        updateVisuals();
    });

    nextButton.addEventListener('click', () => {
        currentVisualIndex = (currentVisualIndex + 1) % visuals.length;
        updateVisuals();
    });

    // Show the default visual when page loads
    updateVisuals();
});
