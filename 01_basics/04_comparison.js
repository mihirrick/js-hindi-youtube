// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


// NOTE ON COMPARISON : The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null > 0)

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// Avoid [line 9 - line 15] type of conversion as it will put you in confusion 

// DETAILED NOTE : The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

// null == null; // true
// null == undefined; // true
// Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.
 
// === : Strict check

console.log("2" === 2)

// * CLEAN CODE IS MOST VALUABLE AND SHOULD HAVE TOP MOST PRIORITY