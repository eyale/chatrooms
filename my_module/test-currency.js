var currency = require('./lib/currency.js');

console.log('50 Canadian dollars equals this amount of US dollars: ');
console.log(currency.canadianToUs(50));

console.log('30 US dollars equals this amount of Canadian dollars: ');
console.log(currency.USToCanadian(30));
