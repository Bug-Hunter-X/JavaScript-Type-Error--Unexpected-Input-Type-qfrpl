function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    // Handle non-number inputs gracefully
    console.warn('Invalid input: x must be a number or null. Using 0 as default.');
    x = 0;
  }
  // ... rest of your function using the safe x value
  return x * 2; // Example operation
}

console.log(foo(null)); // Output: 0
console.log(foo(5));    // Output: 10
console.log(foo('abc')); // Output: Warning + 0 