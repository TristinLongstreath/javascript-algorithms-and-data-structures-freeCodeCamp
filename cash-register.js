// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

/* See below for an example of a cash-in-drawer array:
    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
*/

const DENOMINATIONS = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
    ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
    ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
  ];
  
  function checkCashRegister(price, cash, cid) {
    let amountToReturn = Math.round(cash * 100) - Math.round(price * 100);
    let cashOnHand = {};
    let cashToGive = {};
  
    cid.forEach(denomination => {
      cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
    })
  
    let index = DENOMINATIONS.length - 1;
  
    while (index >= 0 && amountToReturn > 0) {
      let moneyName = DENOMINATIONS[index][0];
      let moneyValue = DENOMINATIONS[index][1];
      
      if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn) {
        cashToGive[moneyName] = 0;
        while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
          cashOnHand[moneyName] -= moneyValue;
          cashToGive[moneyName] += moneyValue;
          amountToReturn -= moneyValue;
        }
      }
  
      index -= 1;
    }
  
    if (amountToReturn === 0) {
      let isRegisterEmpty = true;
  
      Object.keys(cashOnHand).forEach(moneyType => {
        if (cashOnHand[moneyType] > 0) {
          isRegisterEmpty = false;
        }
      });
  
      if (isRegisterEmpty) {
        return { status: "CLOSED", change: cid };
      } else {
        let changeArray = [];
        Object.keys(cashToGive).map(moneyType => {
          if (cashToGive[moneyType] > 0) {
            changeArray.push([moneyType, cashToGive[moneyType] / 100]);
          };
        });
  
      return { status: "OPEN", change: changeArray };
      }
    }
  
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

/* checkCashRegister(19.5, 20, 
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
*/
console.log(
    checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100]
    ])
  );
/* checkCashRegister(19.5, 20, 
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return 
    {status: "OPEN", change: [["QUARTER", 0.5]]}.
*/
console.log(
    checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100]
    ])
  );
/* checkCashRegister(3.26, 100,
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return 
    {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
*/
console.log(
    checkCashRegister(3.26, 100, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100]
    ])
  );
/* checkCashRegister(19.5, 20,
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return 
    {status: "INSUFFICIENT_FUNDS", change: []}.
*/
console.log(
    checkCashRegister(19.5, 20, [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ])
  );
/* checkCashRegister(19.5, 20,
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
    ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], 
    ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return 
    {status: "INSUFFICIENT_FUNDS", change: []}.
*/
console.log(
    checkCashRegister(19.5, 20, [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 1],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ])
  );
/* checkCashRegister(19.5, 20, 
    [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
    ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return 
    {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
console.log(
    checkCashRegister(19.5, 20, [
      ['PENNY', 0.5],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ])
  );
  