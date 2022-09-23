const stockPurchasePrice = document.querySelector("#buying-price");
const stockCount = document.querySelector("#stock-quantity");
const stockCurrentPrice = document.querySelector("#current-price");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const text = document.querySelector("#message");
const policeWhistleSE = document.querySelector("#policewhistle");
const failSE = document.querySelector("#fail-sound-effect");
const successSE = document.querySelector("#success-sound-effect");
const resetSE = document.querySelector("#reset-sound-effect");

const infoMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#17E7E1";
  text.innerText = msg;
  policeWhistleSE.play();
};

const failMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#EC2713";
  text.innerText = msg;
  failSE.play();
};

const successMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#3AEC13";
  text.innerText = msg;
  successSE.play();
};

const calcFunction = (buyPrice, noOfStocks, currentPrice) => {
  if (currentPrice > buyPrice) {
    var profit = (currentPrice - buyPrice) * noOfStocks;
    var profitPer = Math.trunc((profit / buyPrice) * 100);
    successMsg(
      "✅ You are in profit! 🥳\nProfit by ➡️ " +
        profit +
        "\nPercentage ➡️ " +
        profitPer +
        "%"
    );
  } else if (buyPrice > currentPrice) {
    var loss = (buyPrice - currentPrice) * noOfStocks;
    var lossPer = Math.trunc((loss / buyPrice) * 100);
    failMsg(
      "❌ You are in loss! 😔\nLoss by ➡️ " +
        loss +
        "\nPercentage ➡️ " +
        lossPer +
        "%"
    );
  } else if (currentPrice == buyPrice) {
    infoMsg("Currently, there is no change in stock price");
  } else {
    infoMsg("Please! Enter your input again.");
  }
};

submit.addEventListener("click", () => {
  var buyPrice = stockPurchasePrice.value;
  var noOfStocks = stockCount.value;
  var currentPrice = stockCurrentPrice.value;

  if (buyPrice && noOfStocks && currentPrice) {
    calcFunction(buyPrice, noOfStocks, currentPrice);
  } else {
    infoMsg("🛑 Please! Enter all the information for finding stock price");
  }
});

reset.addEventListener("click", () => {
  text.style.display = "none";
  stockCount.value = "none";
  stockPurchasePrice.value = "none";
  stockCurrentPrice.value = "none";
  resetSE.play();
});
