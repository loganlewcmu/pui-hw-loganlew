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

//update price (on window load and in response to user inputs)

let defaultPrice
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


// HW4 code//

let cart = []


  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get('roll');


if (rollType && rolls[rollType]) {
  const currentRoll = rolls[rollType];

  const rollName = document.querySelector('#pd_rollName');
  const rollImage = document.querySelector('.pd_productPhoto');

  rollName.innerText = currentRoll + 'Cinnamon Roll';
  defaultPrice = currentRoll[basePrice];
  rollImage.src = "https://github.com/loganlewcmu/pui-hw-loganlew/blob/main/assets/products/";
  rollImage.src = rollImage + currentRoll[imageFile];

  console.log(currentRoll);
  console.log(rollImage.src);
  console.log(defaultPrice)
}

