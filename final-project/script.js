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



/* Deep Dive Card behavior: show on POI click; close on "x" click; toggle between DTIs */
document.addEventListener("DOMContentLoaded", () => {
    // Select all POI list items
    const poiListItems = document.querySelectorAll(".poi-list_item");
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    // Show/Hide Deep Dive Cards Based on POI Click
    poiListItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetCardId = item.getAttribute("data-target");
            deepDiveCards.forEach((card) => {
                if (card.id === targetCardId) {
                    card.style.display = "flex";
                    // Show first card by default if any card is selected
                    currentCardIndex = Array.from(deepDiveCards).indexOf(card);
                    showCard(currentCardIndex);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Close Button on Each Deep Dive Card
    const closeButtons = document.querySelectorAll(".dti_deepDive_closeButton");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".dti_deepDive_card");
            card.style.display = "none";
        });
    });

    // Toggle between deep dive cards using previous/next buttons
    let currentCardIndex = 0; // Start at the first card

    const showCard = (index) => {
        deepDiveCards.forEach(card => card.style.display = 'none');
        deepDiveCards[index].style.display = 'flex'; // Show the current card
    };

    deepDiveCards.forEach((card, index) => {
        const prevButton = card.querySelector('.prev-btn');
        const nextButton = card.querySelector('.next-btn');

        if (prevButton && nextButton) {
            // Click event for the previous button
            prevButton.addEventListener('click', () => {
                currentCardIndex = (currentCardIndex === 0) ? deepDiveCards.length - 1 : currentCardIndex - 1;
                showCard(currentCardIndex);
            });

            // Click event for the next button
            nextButton.addEventListener('click', () => {
                currentCardIndex = (currentCardIndex === deepDiveCards.length - 1) ? 0 : currentCardIndex + 1;
                showCard(currentCardIndex);
            });
        }
    });

    // Show the initial card
    showCard(currentCardIndex);
});




/* navigation between visuals in deep-dive cards */
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    deepDiveCards.forEach((card) => {
        const visuals = card.querySelectorAll(".dti_deepDive_visuals");
        const prevButton = card.querySelector(".dti_deepDive_navButton:first-of-type");
        const nextButton = card.querySelector(".dti_deepDive_navButton:last-of-type");

        let currentVisualIndex = 0;

        const updateVisuals = () => {
            visuals.forEach((visual, index) => {
                visual.style.display = index === currentVisualIndex ? "block" : "none";
            });
        };

        // Add navigation functionality
        prevButton?.addEventListener("click", () => {
            currentVisualIndex = (currentVisualIndex - 1 + visuals.length) % visuals.length;
            updateVisuals();
        });

        nextButton?.addEventListener("click", () => {
            currentVisualIndex = (currentVisualIndex + 1) % visuals.length;
            updateVisuals();
        });

        // Initialize visuals display
        updateVisuals();
    });
});
