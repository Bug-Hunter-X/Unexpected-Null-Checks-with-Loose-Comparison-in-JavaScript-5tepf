function foo(a, b) {
  if (a == null || b == null) {
    throw new Error('Parameters a and b cannot be null');
  }
  // ...rest of the function
}