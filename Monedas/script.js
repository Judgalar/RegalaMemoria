const priceEl = document.getElementById("price");
const moneyOptionsEl = document.querySelectorAll(".money-option img");
const selectedMoneyListEl = document.getElementById("selected-money-list");
const totalSelectedMoneyEl = document.getElementById("total-selected-money");
const clearPriceBtn = document.getElementById("clear-price");
const reloadBtn = document.getElementById("reloadBtn");
const checkPriceBtn = document.getElementById("check-price-btn");
checkPriceBtn.addEventListener("click", checkPrice);

// Variables para almacenar la información seleccionada
let selectedMoney = [];
let totalSelectedMoney = 0;

// Función para actualizar la lista de monedas seleccionadas y el total
function updateSelectedMoney() {
  // Reiniciar la lista y el total
  selectedMoneyListEl.innerHTML = "";
  totalSelectedMoney = 0;
  // Recorrer las monedas seleccionadas y actualizar la lista y el total
  selectedMoney.forEach((money) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = `${money.value} euros`;
    selectedMoneyListEl.appendChild(listItemEl);
    totalSelectedMoney += money.value;
  });
  totalSelectedMoneyEl.textContent = totalSelectedMoney.toFixed(2);
}

// Añadir evento de click a cada opción de dinero
moneyOptionsEl.forEach((moneyOption) => {
  moneyOption.addEventListener("click", () => {
    // Añadir la moneda/billete seleccionado a la lista
    const value = parseFloat(moneyOption.getAttribute("data-value"));
    selectedMoney.push({ value });
    // Actualizar la lista de monedas seleccionadas y el total
    updateSelectedMoney();
  });
});

// Añadir evento de click al botón de borrar precio final
clearPriceBtn.addEventListener("click", () => {
  // Limpiar la lista de monedas seleccionadas y el total
  selectedMoney = [];
  updateSelectedMoney();
  totalSelectedMoneyEl.textContent = "0.00";
  document.getElementById("check-result1").textContent = "";
  document.getElementById("check-result2").textContent = "";
});

// Obtener el precio del producto y actualizar el HTML
const priceOptions = [ 'menor_5', 'menor_100' , 'menor_1000']
const option = priceOptions[Math.floor(Math.random()*priceOptions.length)];
switch (option) {
  case 'menor_5':
    priceEl.textContent = (Math.random()*(5+1)).toFixed(2) + " €";
    break;
  case 'menor_100':
    priceEl.textContent = (Math.random()*(100+1)).toFixed(2) + " €";
    break;
  case 'menor_1000':
    priceEl.textContent = (Math.random()*(1000+1)).toFixed(2) + " €";
    break;
}
const price = priceEl.textContent;


reloadBtn.addEventListener("click", () => {
  location.reload();
});

function checkPrice() {
  const price = parseFloat(priceEl.textContent);
  const selected = parseFloat(totalSelectedMoneyEl.textContent);
  if (selected == price) {
    document.getElementById("check-result1").textContent = "CORRECTO";
  } else {
    document.getElementById("check-result2").textContent = "INCORRECTO";
  }
  checkPriceBtn.disabled = true;
}