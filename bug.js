function foo(x){
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input: x must be a number or null');
  }
  // ... rest of your function
}