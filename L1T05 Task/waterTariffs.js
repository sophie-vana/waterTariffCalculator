function readInput() {
  let userInput = document.getElementById("water-usage").value;
  let litresMeasurement = document.getElementById("litres").checked;
  let tariffAmount;

  if (litresMeasurement == true) {
    let waterUsage = userInput / 1000; // only divide by 1000 if userInput was in litres

    if (waterUsage <= 6) {
      tariffAmount = waterUsage * 15.73;
    } else if (waterUsage > 6 && waterUsage <= 10.5) {
      tariffAmount = waterUsage * 22.38;
    } else if (waterUsage > 10.5 && waterUsage <= 35) {
      tariffAmount = waterUsage * 31.77;
    } else {
      tariffAmount = waterUsage * 69.76;
    }
  } else {
    let waterUsage = userInput;

    if (waterUsage <= 6) {
      tariffAmount = waterUsage * 15.73;
    } else if (waterUsage > 6 && waterUsage <= 10.5) {
      tariffAmount = waterUsage * 22.38;
    } else if (waterUsage > 10.5 && waterUsage <= 35) {
      tariffAmount = waterUsage * 31.77;
    } else {
      tariffAmount = waterUsage * 69.76;
    }
  }

  tariffAmount = tariffAmount.toFixed(2);
  document.getElementById("output").textContent =
    "Tariff Amount: R" + tariffAmount;

    let results = document.getElementById("results");
    results.style.display = "block";

    let iconElement = document.getElementById("icon");
    iconElement.style.display = "inline";

    let paymentMessage = document.getElementById("payment-msg");
    paymentMessage.style.display = "block";

}

document.getElementById("submit-btn").addEventListener("click", function () {
  readInput();
});

// TO DO:

// prevent default
// make default active radio button litres
// create logic for switching between litres and kilolitres (see comment)
// round tariffAmount to 2 decimal points
// display tariffAmount in results div
