const glazingOptions =
    [
        {
            glazingSelection: 'Original',
            priceAdaptation: '$0.00',
        },
        {
            glazingSelection: 'Sugar Milk',
            priceAdaptation: '$0.00',
        },
        {
            glazingSelection: 'Vanilla Milk',
            priceAdaptation: '$0.50',
        },
        {
            glazingSelection: 'Double Chocolate',
            priceAdaptation: '$1.50',
        },
    ]

const packSizeOptions =
    [
        {
            packSizeSelection: 1,
            priceAdaptation: 1,
        },
        {
            packSizeSelection: 3,
            priceAdaptation: 3,
        },
        {
            packSizeSelection: 6,
            priceAdaptation: 5,
        },
        {
            packSizeSelection: 12,
            priceAdaptation: 10,
        },
    ]

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null

        //calculate glazing price
        const elementGlazingSelection = glazingOptions.find(option => option.glazingSelection === this.glazing);
        const glazingPrice = elementGlazingSelection ? parseFloat(elementGlazingSelection.priceAdaptation.replace('$', '')) : 0; // Got this (and ternary operator) on Stack Overflow

        //calculate pack multiplier
        const elementPackSize = packSizeOptions.find(option => option.packSizeSelection === this.size);
        const packMultiplier = elementPackSize ? parseFloat(elementPackSize.priceAdaptation) : 0; // Got this (and ternary operator) on Stack Overflow

        //calculate item price
        const itemPriceDraft = (this.basePrice + glazingPrice) * packMultiplier;
        this.itemPrice = itemPriceDraft.toFixed(2);

    }
}

let cart = []

const roll1 = new Roll(
    'Original',
    'Sugar Milk',
    1,
    2.49,
);

const roll2 = new Roll(
    'Walnut',
    'Vanilla Milk',
    12,
    3.49,
);

const roll3 = new Roll(
    'Raisin',
    'Sugar Milk',
    3,
    2.99,
)

const roll4 = new Roll(
    'Apple',
    'Original',
    3,
    3.49,
)

cart.push(roll1, roll2, roll3, roll4);


// Add Roll instances to DOM, making them visibile on shopping cart page

function updateDOM(Roll) {
    const template = document.querySelector('#itemOverview-template');
    const clone = template.content.cloneNode(true);
    itemOverviewElement = clone.querySelector('.cart_productOverview');

    const itemContainerElement = document.querySelector('#cart_body');
    itemContainerElement.prepend(itemOverviewElement)

    function updateElement(Roll) {
        //find HTML elements for image, title, glazing, pack size, price
        const itemImageElement = itemContainerElement.querySelector('.cart_productPhoto');
        const itemTitleElement = itemContainerElement.querySelector('.cart_productName');
        const itemGlazingElement = itemContainerElement.querySelector('.cart_productGlazing');
        const itemPackSizeElement = itemContainerElement.querySelector('.cart_productPackSize');
        const itemPriceElement = itemContainerElement.querySelector('.cart_productPrice');
    
        //create intermediate variables to be used in subsequent steps
        const thisRoll = Roll.type;
        const itemURL = rolls[thisRoll]['imageFile'];
        const rollImageStemURL = "https://raw.githubusercontent.com/loganlewcmu/pui-hw-loganlew/main/assets/products/";
        const imageUpdatedURL = rollImageStemURL + itemURL;

        //update HTML DOM elements
        itemImageElement.src = imageUpdatedURL;
        itemTitleElement.innerText = Roll.type + " Cinnamon Roll";
        itemGlazingElement.innerText = `Glazing: ${Roll.glazing}`;
        itemPackSizeElement.innerText = `Pack Size: ${Roll.size}`;
        itemPriceElement.innerText = `$ ${Roll.itemPrice}`;
    }

    updateElement(Roll)
    
    // Store the DOM element in the Roll object to be used in deleteItem() function
    Roll.element = itemOverviewElement
}

for (item of cart) {
    updateDOM(item);
}

//Update total price

function updateTotal() {
    const priceElement = document.querySelector('.total_amount')
    
    let total = 0
    for (rollsInCart of cart) {
        total = total + parseFloat(rollsInCart.itemPrice);
    }
    priceElement.innerText = `$ ${total.toFixed(2)}`
}

updateTotal()


//Remove item using remove button

function deleteItem(Roll) {
    if (Roll.element) {
        Roll.element.remove(); // Remove the item from the DOM
    }

    const index = cart.indexOf(Roll)
    if (index > -1) { 
        cart.splice(index, 1); 
    }; // Got this code from AI assistant in Chrome inspector feature
    
    updateTotal()
    console.log(cart)
}



