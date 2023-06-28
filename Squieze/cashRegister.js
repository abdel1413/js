function checkCashRegister(price, cash, cid) {
  let moneyTypes = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
  };

  // create variable to store the difference of price and cash
  //converted to whole number
  let change = cash * 100 - price * 100;

  //compute the totalsum we have in our drower
  let totalSum = 0;
  for (let item of cid) {
    // add each value of item to total sum
    totalSum += item[1] * 100;
  }

  //check if the change is still greather than the total
  if (change > totalSum) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };

    //if change and total sum are the same then
    //we just need to return the whole array as change
  } else if (change === totalSum) {
    return { status: "CLOSED", change: cid };
  } else {
    //create an array where to push all the resuls
    let result = [];
    // reverse the array so it start from highest to lowers
    cid = cid.reverse();
    // console.log(cid)

    //create an object for money type and their values

    for (let element of cid) {
      //create a result array where we can collect and store
      // values which have enough money and that we
      //can subtract from
      let moneyHolder = [element[0], 0];

      //convert each decimal amount to integer
      element[1] = element[1] * 100;

      //use while loop to chech if
      // change is greather than any amount from
      //money object and if the amount exist at
      //each index of cid
      //if so, then subtract change from it
      while (change >= moneyTypes[element[0]] && element[1] > 0) {
        change -= moneyTypes[element[0]];
        element[1] -= moneyTypes[element[0]];
        moneyHolder[1] += moneyTypes[element[0]] / 100;
      }

      //collect all the element where amount is greather than 0
      //and push them in our empty result array
      if (moneyHolder[1] > 0) {
        result.push(moneyHolder);
      }
    }

    //check if the change is still higher than 0
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: result };
  }
}

//END

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

//solution 2
const currencyAmount = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

const getTotalCid = (cid) =>
  cid.reduce((total, [unit, amount]) => total + amount, 0);

const moneyRounder = (amount) => Math.round(amount * 100) / 100;

const checkCashRegister = (price, cash, cid) => {
  const change = [];
  let changeValue = cash - price;

  if (changeValue === getTotalCid(cid)) {
    return {
      status: "CLOSED",
      change: cid,
    };
  }

  [...cid].reverse().forEach(([unit, amount]) => {
    const unitValue = currencyAmount[unit];

    if (unitValue > changeValue) {
      return;
    }

    let unitsTaken = 0;

    while (changeValue >= unitValue && amount > 0) {
      changeValue = moneyRounder(changeValue - unitValue);
      amount = moneyRounder(amount - unitValue);
      unitsTaken++;
    }

    change.push([unit, unitsTaken * unitValue]);
  });

  if (changeValue > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  return {
    status: "OPEN",
    change,
  };
};
