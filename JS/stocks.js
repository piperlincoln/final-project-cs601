/*
 * This fetch call will use the Rapid API account that I have to access the Yahoo
 * Finance API and retrieve the current stock price of the GD Corporation.
 */
fetch("https://yh-finance.p.rapidapi.com/stock/v2/get-profile?symbol=GD&region=US", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
  		"x-rapidapi-key": "55e72b3e3cmshcfcf4666622849ep1a14b7jsnd9dacd123def",
      "Content-Type": "application/json"
  	}
})
.then(response => {
  return response.json();
})
.then(function(stock) {
  // Retrieve the appropriate information from the JSON element and display it.
  let stockPrice = stock.price.regularMarketOpen.raw;
  let element = document.getElementById('gd-stock');
  element.innerText = "$" + stockPrice;
})
// If an error occurs, print it to the console.
.catch(err => {
	console.log(err);
});
