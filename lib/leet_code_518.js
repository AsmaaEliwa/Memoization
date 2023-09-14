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

// const coins = [1, 2, 5];
// const amount = 5;
// const result = minChange(coins, amount);
// console.log("Number of combinations:", result);

// memoization 

function minChange(coins, amount, memo={} ){
    let key = amount + '-' + coins
    if(key in memo)return memo[key]
    if (amount ===0)return 1

    let currentCoin=coins[coins.length-1]
    let times=0
    for (let qty=0 ; qty*currentCoin <= amount ; qty++ ){
        times+=minChange(coins.slice(0,-1), amount - qty * currentCoin ,memo)
    }
    memo[key]=times
return  memo[key]

}

const coins = [1, 2, 5];
const amount = 500;
const result = minChange(coins, amount);
console.log("Number of combinations:", result);
