function maxProfit(prices: number[]): number {
    let profit = 0

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit
}

const prices = [1, 5, 3, 6];

const result = maxProfit(prices);

console.log(result);
console.log(prices);