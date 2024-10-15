let cart = []

console.log("script loaded")

//Create objects for glazing + pack size options//
const glazingOptions =
  [
    {
      glazingSelection: 'Keep original',
      priceAdaptation: '$0.00',
    },
    {
      glazingSelection: 'Sugar milk',
      priceAdaptation: '$0.00',
    },
    {
      glazingSelection: 'Vanilla milk',
      priceAdaptation: '$0.50',
    },
    {
      glazingSelection: 'Double chocolate',
      priceAdaptation: '$1.50',
    },
  ]

const packSizeOptions =
  [
    {
      packSizeSelection: '1',
      priceAdaptation: 1,
    },
    {
      packSizeSelection: '3',
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

//Dynamically populate glazing dropdown with 4 options//
function loadGlazingOptions() {
  const glazingDropdown = document.getElementById('pd_dropdown_glazing');

  for (let i = 0; i < glazingOptions.length; i++) {
    console.log(glazingOptions[i].glazingSelection);
    const option = document.createElement('option');
    option.text = glazingOptions[i].glazingSelection;
    option.value = i;
    glazingDropdown.appendChild(option)

  }
}

loadGlazingOptions();

//Dynamically populate pack size dropdown with 4 options//
function loadPackSizeOptions() {
  const packSizeDropdown = document.getElementById('pd_dropdown_packSize');

  for (let i = 0; i < packSizeOptions.length; i++) {
    console.log(packSizeOptions[i].packSizeSelection);
    const option = document.createElement('option');
    option.text = packSizeOptions[i].packSizeSelection;
    option.value = i;
    packSizeDropdown.appendChild(option)

  }
}

loadPackSizeOptions();


// identify current glazing type and pack size (found this syntax on Stack Overflow)
const glazingDropdown1 = document.getElementById('pd_dropdown_glazing');
let currentGlazingSelection = glazingOptions[glazingDropdown1.value].glazingSelection

const packSizeDropdown1 = document.getElementById('pd_dropdown_packSize');
let currentPackSizeSelection = packSizeOptions[packSizeDropdown1.value].packSizeSelection

//update price (on window load and in response to user inputs)

let basePrice
let currentGlazingPrice = 0.00;
let currentPackMultiplier = 1;

function updatePrice() {
  const totalPriceElement = document.querySelector('#pd_itemTotal_price');
  const totalPrice = (basePrice + currentGlazingPrice) * currentPackMultiplier;
  totalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`
}

function glazingChange(glazingChangeSelection) {
  const glazingValue = glazingChangeSelection.value;
  currentGlazingPrice = parseFloat(glazingOptions[glazingValue].priceAdaptation.replace('$', ''));
  updatePrice()
  currentGlazingSelection = glazingOptions[glazingValue].glazingSelection
}

function packSizeChange(packSizeChangeSelection) {
  const packSizeValue = packSizeChangeSelection.value;
  currentPackMultiplier = parseFloat(packSizeOptions[packSizeValue].priceAdaptation);
  updatePrice()
  currentPackSizeSelection = packSizeOptions[packSizeValue].packSizeSelection
}


// HW4 code//


//Update DOM elements based on roll type//
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get('roll');
  const currentRoll = rolls[rollType];

  //set name:
  const rollName = document.querySelector('#pd_rollName');
  rollName.innerText = rollType + ' Cinnamon Roll'

  //set image:
  const imageStemURL = "https://raw.githubusercontent.com/loganlewcmu/pui-hw-loganlew/main/assets/products/";
  const imageUpdatedURL = imageStemURL + currentRoll['imageFile']
  document.getElementById('pd_productPhoto').src = imageUpdatedURL;

  //set base price:
  basePrice = currentRoll['basePrice']


updatePrice() //update price on window load


// Add to shopping cart

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
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


function addToCart () {
  const newRoll = new Roll(
    rollType, //roll type
    currentGlazingSelection, 
    currentPackSizeSelection,
    basePrice,
  );


  const cart = retrieveCart(); //get current cart or create new one
  cart.push(newRoll); //add newRoll to cart
  console.log(cart); //print existing cart

  saveToLocalStorage(cart) //save updated cart to local storage

}

const addToCartButton = document.querySelector('.pd_button_addToCart');
addToCartButton.addEventListener('click', addToCart);


// Add shopping car items to local storage

// Find cart array or create cart array

function retrieveCart() {
    let cart = localStorage.getItem('cart');
    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    return cart;
}

window.addEventListener('load', () => {
    const cart = retrieveCart();
    console.log('Cart loaded:', cart);
});

function saveToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart array currently saved to local storage:', cart);
  }

const addToCartBtn = document.querySelector('.pd_button_addToCart');
addToCartBtn.addEventListener('click', addToCart);

