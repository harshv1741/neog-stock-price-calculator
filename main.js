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

submit.addEventListener("click", () => {
  var sPP = stockPurchasePrice.value;
  var sC = stockCount.value;
  var sCP = stockCurrentPrice.value;

  if (sPP && sC && sCP) {
    alert(
      "Stock Purchase Price: " +
        sPP +
        "\nStock Count: " +
        sC +
        "\nStock Current Price: " +
        sCP
    );
  } else {
    infoMsg("🛑 Please Enter Both the fields");
  }
});

reset.addEventListener("click", () => {
  text.style.display = "none";
  stockCount.value = "none";
  stockPurchasePrice.value = "none";
  stockCurrentPrice.value = "none";
});
