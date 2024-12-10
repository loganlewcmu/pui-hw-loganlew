/* animation behavior for homepage */
document.addEventListener("DOMContentLoaded", () => {
    const titleCard = document.querySelector(".titleCard");
    const addressCard = document.querySelector(".addressCard");

    titleCard.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeIn") {
            addressCard.style.animation = "slideInLeft 1s ease-out forwards";
        }
    });
});

/* sidebar responsive behavior */
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
    const sidebar = document.querySelector('.nav_sidebar');
    sidebar.style.display = 'none';
}

/* hover behavior for point of interest list items */
document.addEventListener("DOMContentLoaded", () => {
    const poiListItems = document.querySelectorAll(".poi_list_item");

    poiListItems.forEach((item) => {
        const markerIds = item.getAttribute("data-target2");
        const markerElements = markerIds
            ? markerIds.split(",").map(id => document.getElementById(id.trim()))
            : [];
        const targetCardId = item.getAttribute("data-target3");
        const targetCard = targetCardId ? document.getElementById(targetCardId) : null;

        if (targetCard) {
            item.addEventListener("mouseenter", () => {
                targetCard.style.display = "flex";
            });
            item.addEventListener("mouseleave", () => {
                targetCard.style.display = "none";
            });

            item.addEventListener("click", (e) => {
                e.preventDefault();
                targetCard.style.display = "none";
            });
        }

        if (markerElements.length > 0) {
            item.addEventListener("mouseenter", () => {
                markerElements.forEach(marker => {
                    if (marker) {
                        marker.style.backgroundColor = "#1F5555";
                    }
                });

                if (targetCard) {
                    targetCard.style.display = "flex";
                }
            });

            item.addEventListener("mouseleave", () => {
                markerElements.forEach(marker => {
                    if (marker) {
                        marker.style.backgroundColor = "transparent";
                    }
                });

                if (targetCard) {
                    targetCard.style.display = "none";
                }
            });
        }
    });
});

/* Deep Dive Card behavior: show on POI click; close on "x" click; toggle between DTIs */

document.addEventListener("DOMContentLoaded", () => {
    const poiListItems = document.querySelectorAll(".poi_list_item");
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    let currentCardIndex = 0; // Start at the first card

    poiListItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetCardId = item.getAttribute("data-target");
            deepDiveCards.forEach((card, index) => {
                if (card.id === targetCardId) {
                    card.style.display = "flex"; // Show the selected card
                    currentCardIndex = index; // Set current card index
                    showCard(currentCardIndex);
                } else {
                    card.style.display = "none"; // Hide other cards
                }
            });
        });
    });

    const closeButtons = document.querySelectorAll(".dti_deepDive_closeButton");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".dti_deepDive_card");
            card.style.display = "none";
        });
    });

    const showCard = (index) => {
        deepDiveCards.forEach(card => card.style.display = 'none'); // Hide all cards
        deepDiveCards[index].style.display = 'flex'; // Show the current card
    };

    deepDiveCards.forEach((card, index) => {
        const prevButton = card.querySelector('.prev-btn');
        const nextButton = card.querySelector('.next-btn');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from hiding the card
                currentCardIndex = (currentCardIndex === 0) ? deepDiveCards.length - 1 : currentCardIndex - 1;
                showCard(currentCardIndex);
            });

            nextButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from hiding the card
                currentCardIndex = (currentCardIndex === deepDiveCards.length - 1) ? 0 : currentCardIndex + 1;
                showCard(currentCardIndex);
            });
        }
    });

    // Show the initial card
    showCard(currentCardIndex);
});

// Close dti_deepDive_card by clicking outside bounds of card
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    document.addEventListener("click", (event) => {
        deepDiveCards.forEach((card) => {
            const isClickInside = card.contains(event.target) || event.target.closest(".poi_list_item");
            if (!isClickInside && card.style.display === "flex") {
                card.style.display = "none";
            }
        });
    });
});

// Prevent .dti_deepDive_card from being displayed on page load - was erroneously showing before
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");
    deepDiveCards.forEach(card => {
        card.style.display = "none";
    });
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

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentVisualIndex = (currentVisualIndex - 1 + visuals.length) % visuals.length;
                updateVisuals();
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentVisualIndex = (currentVisualIndex + 1) % visuals.length;
                updateVisuals();
            });
        }

        // Initialize visuals display
        updateVisuals();
    });
});
