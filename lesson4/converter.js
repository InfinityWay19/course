const usdToRub = (usd) => usd * 79.95;
const euroToRub = (euro) => euro * 93.71;
let usd = prompt("Enter the amount in dollars to convert to rubles:");
let euro = prompt("Enter the amount in euros to convert to rubles:");

console.log("Currency course on 19.12.2025");
console.log(`1 dollar = ${usdToRub(1)} rubles`);
console.log(`You have ${usdToRub(usd)} rubles for ${usd} dollars`);
console.log(`1 euro = ${euroToRub(1)} rubles`);
console.log(`You have ${euroToRub(euro)} rubles for ${euro} euros`);