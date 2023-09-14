// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function minChange(coins, amount ){
    if (amount ===0)return 1
    let currentCoin=coins[coins.length-1]
    let times=0
    for (let qty=0 ; qty*currentCoin <= amount ; qty++ ){
        times+=minChange(coins.slice(0,-1), amount - qty * currentCoin)
    }
return times

}

const coins = [1, 2, 5];
const amount = 5;
const result = minChange(coins, amount);
console.log("Number of combinations:", result);


// function minChange(coins, amount) {
//     let  memo = {}
//     if (amount === 0) return 0;
//     if (amount < 0) return -1; // Return -1 for impossible cases.

//     if (amount in memo) return memo[amount];

//     let minCoins = Infinity; // Initialize to a very large value.

//     for (const coin of coins) {
//         const subproblem = minChange(coins, amount - coin);

//         // Skip impossible subproblems (subproblem = -1).
//         if (subproblem !== -1) {
//             minCoins = Math.min(minCoins, subproblem + 1);
//         }
//     }

//     // If minCoins is still Infinity, it means no valid combination was found, so set it to -1.
//     minCoins = minCoins === Infinity ? -1 : minCoins;

//     // Memoize the result before returning it.
//     memo[amount] = minCoins;

//     return minCoins;
// }

// // Example usage:
// const coins = [1, 2, 5];
// const amount = 11;
// const result = minChange(coins, amount);
// console.log("Minimum number of coins:", result);
