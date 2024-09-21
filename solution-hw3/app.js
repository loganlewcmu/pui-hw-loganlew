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

//update price

const defaultPrice = 2.49
let currentGlazingPrice = 0.00;
let currentPackMultiplier = 1;

function updatePrice() {
  const totalPriceElement = document.querySelector('#pd_itemTotal_price');
  const totalPrice = (defaultPrice + currentGlazingPrice) * currentPackMultiplier;
  totalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`
}

function glazingChange(glazingChangeSelection) {
  const glazingValue = glazingChangeSelection.value;
  console.log(glazingValue);
  currentGlazingPrice = parseFloat(glazingOptions[glazingValue].priceAdaptation.replace('$', ''));
  console.log(currentGlazingPrice);
  updatePrice()
}

function packSizeChange(packSizeChangeSelection) {
  const packSizeValue = packSizeChangeSelection.value;
  console.log(packSizeValue);
  currentPackMultiplier = parseFloat(packSizeOptions[packSizeValue].priceAdaptation);
  console.log(currentPackMultiplier);
  updatePrice()
}

updatePrice() //update price on window load