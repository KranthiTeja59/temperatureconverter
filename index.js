const cEl = document.getElementById("celsius");
const fEl = document.getElementById("fahrenheit");
const kEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kEl.value = (currentValue + 273.32).toFixed(2);
      fEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      cEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      cEl.value = (currentValue - 273.32).toFixed(2);
      fEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}