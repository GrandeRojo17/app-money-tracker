const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
//Transactions will eventually be stored in the local storage.
//for now we use an array of objects to represent the inputs.
const dummyTransactions = [
  { id: 01, text: "Flowers for Hannah", amount: -24 },
  { id: 02, text: "Tom & Jerrys", amount: 24 },
  { id: 03, text: "Lunch", amount: -14 },
  { id: 04, text: "phone bill", amount: -344 },
  { id: 05, text: "Beers at the bar", amount: -24 },
  {
    id: 06,
    text: "Sold a website for a thousand times the market",
    amount: 2400,
  },
];
let transactions = dummyTransactions;
//add Transactions to the DOM list.
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
}
function addTransactionDOM(transaction) {
  //get sign
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  //add class based on value.
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}
    </span> <button class="delete-btn">x</button>
    `;
  list.appendChild(item);
}
//Update balance income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  //total expenses
  const totalT = amounts.reduce(totalExpense).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc -= item), 0)
    .toFixed(2);
  console.log("Income: " + income);
  console.log("Expenses: " + expense);

  //total Expense calculations
  function totalExpense(total, num) {
    return total + num;
  }

  console.log("Account balance is  = " + totalT);
  balance.innerText = `$${totalT}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}
//Init the process
function init() {
  console.log(transactions);
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}
init();
