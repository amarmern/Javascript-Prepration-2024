/**
 * You want lowest price first (buy)
 * Then highest price later (sell)
 * And ensure buy happens before sell
 */
const stockPrices = [4, 2, 5, 1, 7, 0];

function maxProfit(prices) {
  let minPrice = prices[0]; // lowest so far
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // update lowest
    } else {
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

console.log(maxProfit(stockPrices)); // Output: 6
