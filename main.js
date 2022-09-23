const stockPurchasePrice = document.querySelector("#buying-price");
const stockCount = document.querySelector("#stock-quantity");
const stockCurrentPrice = document.querySelector("#current-price");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const text = document.querySelector("#message");

const infoMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#17E7E1";
  text.innerText = msg;
};

const failMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#EC2713";
  text.innerText = msg;
};

const successMsg = (msg) => {
  text.style.display = "inline-block";
  text.style.color = "#3AEC13";
  text.innerText = msg;
};

const calcFunction = (buyPrice, noOfStocks, sellPrice) => {
  if (sellPrice > buyPrice) {
    var profit = sellPrice - buyPrice;
    var profitWithStocks = profit * noOfStocks;
    var profitPer = Math.trunc((profit / buyPrice) * 100);
    successMsg(
      "✅ You are in profit! 🥳\nProfit by ➡️ " +
        profit +
        "\nQuantity profit ➡️ " +
        profitWithStocks +
        "\nPercentage ➡️ " +
        profitPer +
        "%"
    );
  } else if (sellPrice < buyPrice) {
    var loss = buyPrice - sellPrice;
    var lossWithStocks = loss * noOfStocks;
    var lossPer = Math.trunc((loss / buyPrice) * 100);
    failMsg(
      "❌ You are in loss! 😔\nLoss by ➡️ " +
        loss +
        "\nQuantity loss ➡️ " +
        lossWithStocks +
        "\nPercentage ➡️ " +
        lossPer +
        "%"
    );
  } else if (sellPrice == buyPrice) {
    infoMsg("Currently, there is no change in stock price");
  }
};

submit.addEventListener("click", () => {
  var buyPrice = stockPurchasePrice.value;
  var noOfStocks = stockCount.value;
  var sellPrice = stockCurrentPrice.value;

  if (buyPrice && noOfStocks && sellPrice) {
    calcFunction(buyPrice, noOfStocks, sellPrice);
  } else {
    infoMsg("🛑 Please! Enter all the information for finding ");
  }
});

reset.addEventListener("click", () => {
  text.style.display = "none";
  stockCount.value = "none";
  stockPurchasePrice.value = "none";
  stockCurrentPrice.value = "none";
});
