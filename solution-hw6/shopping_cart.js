const glazingOptions2 =
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

const packSizeOptions2 =
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


let cart = [] //learned from Stack Overflow I need to first define this variable globally in order for it to be usable in the retrieveCart_scPage function

function retrieveCart_scPage() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart == null) {
        cart = [];
    } else {
        cart = JSON.parse(storedCart);
    }
    console.log("retrieved cart: ", cart)
    return cart;
}

window.addEventListener('load', () => {
    cart = retrieveCart_scPage();

    for (item of cart) {
        updateDOM(item);
    }

    updateTotal()
});

/*const roll1 = new Roll(
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
)*/

//cart.push(roll1, roll2, roll3, roll4);


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

        //create reference to Remove button, add event handler to Remove button
        const removeButton = itemContainerElement.querySelector('.cart_removeButton');
        removeButton.addEventListener('click', () => {
            removeItem(Roll);
        });

    }

    updateElement(Roll)
    
    // Store the DOM element in the Roll object to be used in removeItem() function
    Roll.element = itemOverviewElement
}


//Update total price

function updateTotal() {
    const priceElement = document.querySelector('.total_amount')
    
    let total = 0
    for (rollsInCart of cart) {
        total = total + parseFloat(rollsInCart.itemPrice);
    };
    priceElement.innerText = `$ ${total.toFixed(2)}`;
}


//Remove item using remove button

function removeItem(Roll) {
    if (Roll.element) {
        Roll.element.remove(); // Remove the item from the DOM
    }

    const index = cart.indexOf(Roll)
    if (index > -1) { 
        cart.splice(index, 1); 
    }; // Got this code from AI assistant in Chrome inspector feature


    updateTotal()

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Updated cart in local storage:', localStorage.getItem('cart'));

}



