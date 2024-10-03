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
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        //calculate glazing price
        const elementGlazingSelection = glazingOptions.find(option => option.glazingSelection === this.glazing);
        const glazingPrice = elementGlazingSelection ? parseFloat(elementGlazingSelection.priceAdaptation.replace('$', '')) : 0; // Got this (and ternary operator) on Stack Overflow
        
        //calculate pack multiplier
        const elementPackSize = packSizeOptions.find(option => option.packSizeSelection === this.size);
        console.log(elementPackSize)
        const packMultiplier = elementPackSize ? parseFloat(elementPackSize.priceAdaptation) : 0; // Got this (and ternary operator) on Stack Overflow

        //calculate item price
        const itemPriceDraft = (this.basePrice + glazingPrice) * packMultiplier;
        this.itemPrice = itemPriceDraft.toFixed(2)
    }
}

let cart = []

const roll1 = new Roll (
    'Original',
    'Sugar Milk',
    1,
    2.49,
  );
  
  const roll2 =new Roll (
    'Walnut',
    'Vanilla Milk',
    12,
    3.49,
  );
  
  const roll3 =new Roll (
    'Raisin',
    'Sugar Milk',
    3,
    2.99,
  )
  
  const roll4 =new Roll (
    'Apple',
    'Original',
    3,
    3.49,
  )
  
  cart.push(roll1, roll2, roll3, roll4);


function calculatePrice() {
    const totalPriceElement = document.querySelector('#pd_itemTotal_price');
    const totalPrice = (basePrice + currentGlazingPrice) * currentPackMultiplier;
    totalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`
  }