/* ----- Animation behavior for homepage ----- */
document.addEventListener("DOMContentLoaded", () => {
    const titleCard = document.querySelector(".titleCard");
    const addressCard = document.querySelector(".addressCard");

    // When titleCard animation ends, start animation for addressCard
    titleCard.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeIn") {
            addressCard.style.animation = "slideInLeft 1s ease-out forwards";
        }
    });
});


/* ----- Interaction for "Coming Soon" text on menu items ----- */
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        document.querySelector("#navHeader_menuItem_condoOverview .navHeader_menuItem_text"),
        document.querySelector("#navHeader_menuItem_welcomeGuide .navHeader_menuItem_text")
    ];

    menuItems.forEach((item) => {
        const originalText = item.textContent;

        // Hover event: Change text to "Coming Soon"
        item.parentElement.addEventListener("mouseenter", () => {
            item.textContent = "Coming Soon";
            item.classList.remove("fade-out");
            item.classList.add("fade-in");
        });

        // Hover out: Fade back to original text
        item.parentElement.addEventListener("mouseleave", () => {
            item.classList.remove("fade-in");
            item.classList.add("fade-out");

            // After fade-out completes, restore original text
            item.addEventListener("animationend", function handleFadeOut(event) {
                if (event.animationName === "fadeOut") {
                    item.textContent = originalText;
                    item.classList.remove("fade-out");
                    item.removeEventListener("animationend", handleFadeOut); // Clean up listener
                }
            });
        });

        // Click event: Keep "Coming Soon" visible for 1 second before restoring original text
        item.parentElement.addEventListener("click", () => {
            item.textContent = "Coming Soon";
            item.classList.remove("fade-out");
            item.classList.add("fade-in");

            setTimeout(() => {
                item.classList.remove("fade-in");
                item.classList.add("fade-out");

                item.addEventListener("animationend", function handleFadeOut(event) {
                    if (event.animationName === "fadeOut") {
                        item.textContent = originalText;
                        item.classList.remove("fade-out");
                        item.removeEventListener("animationend", handleFadeOut);
                    }
                });
            }, 1000); // "Coming Soon" stays for 1 second
        });
    });
});




/* ----- Hover behavior for point of interest list items ----- */
document.addEventListener("DOMContentLoaded", () => {
    const poiListItems = document.querySelectorAll(".poi_list_item");

    poiListItems.forEach((item) => {
        const markerIds = item.getAttribute("data-target2");
        const markerElements = markerIds ? markerIds.split(",").map(id => document.getElementById(id.trim())) : [];
        const targetCardId = item.getAttribute("data-target3");
        const targetCard = targetCardId ? document.getElementById(targetCardId) : null;

        if (targetCard) {
            // Show/hide target card on hover
            item.addEventListener("mouseenter", () => {
                targetCard.style.display = "flex";
            });
            item.addEventListener("mouseleave", () => {
                targetCard.style.display = "none";
            });

            // Close target card when clicked
            item.addEventListener("click", (e) => {
                e.preventDefault();
                targetCard.style.display = "none";
            });
        }

        // Highlight markers on hover
        if (markerElements.length > 0) {
            item.addEventListener("mouseenter", () => {
                markerElements.forEach(marker => {
                    if (marker) {
                        marker.style.backgroundColor = "#1F5555"; // Highlight
                    }
                });

                if (targetCard) {
                    targetCard.style.display = "flex"; // Show the card
                }
            });

            // Reset marker color on mouse leave
            item.addEventListener("mouseleave", () => {
                markerElements.forEach(marker => {
                    if (marker) {
                        marker.style.backgroundColor = "transparent"; // Reset
                    }
                });

                if (targetCard) {
                    targetCard.style.display = "none"; // Hide the card
                }
            });
        }
    });
});


/* ----- Deep Dive Card behavior: show on POI click; close on "x" click ----- */
document.addEventListener("DOMContentLoaded", () => {
    const poiListItems = document.querySelectorAll(".poi_list_item");
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    let currentCardIndex = 0; // Start with the first card

    // Show selected card when a POI is clicked
    poiListItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetCardId = item.getAttribute("data-target");
            deepDiveCards.forEach((card, index) => {
                if (card.id === targetCardId) {
                    card.style.display = "flex";
                    currentCardIndex = index;
                    showCard(currentCardIndex);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Close button on each deep dive card
    const closeButtons = document.querySelectorAll(".dti_deepDive_closeButton");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".dti_deepDive_card");
            card.style.display = "none";
        });
    });

    const showCard = (index) => {
        deepDiveCards.forEach(card => card.style.display = 'none'); // Hide all cards
        deepDiveCards[index].style.display = 'flex'; // Show current card
    };

    deepDiveCards.forEach((card, index) => {
        const prevButton = card.querySelector('.prev-btn');
        const nextButton = card.querySelector('.next-btn');

        if (prevButton && nextButton) {
            // Navigate to previous card
            prevButton.addEventListener('click', (event) => {
                event.stopPropagation();
                currentCardIndex = (currentCardIndex === 0) ? deepDiveCards.length - 1 : currentCardIndex - 1;
                showCard(currentCardIndex);
            });

            // Navigate to next card
            nextButton.addEventListener('click', (event) => {
                event.stopPropagation();
                currentCardIndex = (currentCardIndex === deepDiveCards.length - 1) ? 0 : currentCardIndex + 1;
                showCard(currentCardIndex);
            });
        }
    });

    // Show initial card
    showCard(currentCardIndex);
});

// Close deep-dive card when clicking outside its bounds
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    document.addEventListener("click", (event) => {
        deepDiveCards.forEach((card) => {
            const isClickInside = card.contains(event.target) || event.target.closest(".poi_list_item");
            if (!isClickInside && card.style.display === "flex") {
                card.style.display = "none"; // Close card
            }
        });
    });
});

// Prevent deep-dive card from showing on page load
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");
    deepDiveCards.forEach(card => {
        card.style.display = "none"; // Hide all deep-dive cards initially
    });
});


/* ----- Navigation between visuals in deep-dive cards ----- */
document.addEventListener("DOMContentLoaded", () => {
    const deepDiveCards = document.querySelectorAll(".dti_deepDive_card");

    deepDiveCards.forEach((card) => {
        const visuals = card.querySelectorAll(".dti_deepDive_visuals");
        const prevButton = card.querySelector(".dti_deepDive_navButton:first-of-type");
        const nextButton = card.querySelector(".dti_deepDive_navButton:last-of-type");

        let currentVisualIndex = 0; // Start at the first visual

        // Function to update which visual is displayed
        const updateVisuals = () => {
            visuals.forEach((visual, index) => {
                visual.style.display = index === currentVisualIndex ? "block" : "none";
            });
        };

        // Event listener for the previous button to navigate backward
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentVisualIndex = (currentVisualIndex - 1 + visuals.length) % visuals.length; // Go to previous visual
                updateVisuals(); // Update the display
            });
        }

        // Event listener for the next button to navigate forward
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentVisualIndex = (currentVisualIndex + 1) % visuals.length; // Go to next visual
                updateVisuals(); // Update the display
            });
        }

        // Initialize the display of visuals
        updateVisuals();
    });
});
