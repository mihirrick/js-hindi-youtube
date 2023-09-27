const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "5656"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail. accountPassword, accountCity])